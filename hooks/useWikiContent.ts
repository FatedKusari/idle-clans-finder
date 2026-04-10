import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

interface WikiContent {
  html: string;
  title: string;
  wikiPageName: string;
}

interface WikiError {
  message: string;
}

export function useWikiContent(itemName: string) {
  const [content, setContent] = useState<WikiContent | null>(null);
  const [error, setError] = useState<WikiError | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const resolvedPageName = { current: "" };

  useEffect(() => {
    const fetchWikiContent = async () => {
      if (!itemName) return;

      setIsLoading(true);
      setError(null);

      try {
        let formattedName = itemName;

        // Only apply standard formatting if it's not a pre-formatted special case (like "Godlike_battleaxe")
        if (!itemName.includes("_")) {
          formattedName = itemName
            .split(" ")
            .map((word, index) =>
              index === 0
                ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                : word.toLowerCase()
            )
            .join("_");
        }

        resolvedPageName.current = formattedName;

        const response = await fetch(`/api/wiki?page=${formattedName}`);

        if (!response.ok) {
          throw new Error("Failed to fetch wiki content");
        }

        const data = await response.json();

        if (data.error) {
          if (data.error.code === "missingtitle") {
            throw new Error("Item not found in wiki");
          }
          throw new Error(data.error.info || "Failed to fetch wiki content");
        }

        if (!data.parse) {
          throw new Error("Page not found");
        }

        // DOMPurify allowlist is intentionally restrictive to prevent XSS from wiki HTML
        const sanitizedHtml = DOMPurify.sanitize(data.parse.text["*"], {
          ALLOWED_TAGS: [
            "p",
            "h1",
            "h2",
            "h3",
            "h4",
            "h5",
            "h6",
            "ul",
            "ol",
            "li",
            "table",
            "tr",
            "td",
            "th",
            "img",
            "a",
            "b",
            "i",
            "em",
            "strong",
          ],
          ALLOWED_ATTR: ["href", "src", "alt", "title", "class", "rowspan"],
          FORBID_TAGS: ["style", "script"],
          FORBID_ATTR: ["onerror", "onload"],
        });

        const processedHtml = sanitizedHtml
          .replace(
            /<h2[^>]*>Contents(?:\[<a[^>]*>edit<\/a> \| <a[^>]*>edit source<\/a>\])?<\/h2>/g,
            ""
          )
          .replace(
            /<ul[^>]*>[\s\S]*?<li[^>]*class="toclevel[^"]*"[\s\S]*?<\/ul>/g,
            ""
          )
          .replace(/<li[^>]*class="toclevel[^"]*"[^>]*>[\s\S]*?<\/li>/g, "")
          .replace(/\[<a[^>]*>edit<\/a> \| <a[^>]*>edit source<\/a>\]/g, "")
          .replace(/>Combat</g, "><")
          // Rewrite image URLs — handles both old relative paths (/images/thumb/...)
          // and new absolute URLs (https://www.wiki.idleclans.com/images/thumb/...)
          // The thumb URL format is: .../filename.png/NNNpx-filename.png
          // We want just the base filename mapped to our local /gameimages/ folder.
          .replace(
            /(?:https?:\/\/[^"]*)?\/images\/thumb\/[^/]+\/[^/]+\/([^/]+)\.png\/[^"]+/g,
            (match, filename) => {
              const localFilename = filename.toLowerCase().replace(/\s+/g, "_");
              return `/gameimages/${localFilename}.png`;
            }
          )
          .replace(/(?:https?:\/\/[^"]*)?\/index\.php\/File:([^"]+)\.png/g, (match, filename) => {
            const localFilename = filename.toLowerCase().replace(/\s+/g, "_");
            return `/gameimages/${localFilename}.png`;
          })
          // After URL rewriting, wrap ANY <img> pointing to /gameimages/ that is NOT already
          // inside a <table> in a centred container. The main item image on many pages sits
          // outside the infobox table (just a bare <p><a><img></a></p> block), so CSS rules
          // scoped to "table:first-of-type th" never apply to it.
          .replace(
            /(<p[^>]*>[\s\S]*?)(<a[^>]*class="image"[^>]*>[\s\S]*?<img[^>]*\/gameimages\/[^>]*>[\s\S]*?<\/a>)([\s\S]*?<\/p>)/,
            (_match, before, imgBlock, after) =>
              `<p style="display:flex;justify-content:center;align-items:center;padding:1rem 0;">${imgBlock}</p>`
          );

        // DEBUG: log first 2000 chars of processed HTML to console
        // Remove this after diagnosing the image issue
        console.log("=== WIKI RAW HTML (first 2000 chars) ===");
        console.log(data.parse.text["*"].substring(0, 2000));
        console.log("=== WIKI PROCESSED HTML (first 2000 chars) ===");
        console.log(processedHtml.substring(0, 2000));

        setContent({
          html: processedHtml,
          title: data.parse.title,
          wikiPageName: data.parse.title.replace(/ /g, "_"),
        });
      } catch (err) {
        console.error("Wiki content error:", err);
        setError({
          message:
            err instanceof Error
              ? err.message
              : "An error occurred while fetching wiki content",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchWikiContent();
  }, [itemName]);

  return { content, error, isLoading };
}
