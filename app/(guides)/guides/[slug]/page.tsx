import Link from "next/link";
import { notFound } from "next/navigation";
import { FaBook, FaClock, FaArrowLeft, FaCalendarAlt } from "react-icons/fa";
import {
  guides,
  getGuideBySlug,
  getGuidesByCategory,
  CATEGORY_LABELS,
} from "@/utils/guides/guides-data";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | Idle Clans Hub Guides`,
    description: guide.description,
  };
}

export default async function GuideSlugPage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) notFound();

  const relatedGuides = getGuidesByCategory(guide.category)
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-[#031111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 text-sm text-gray-500 mb-6"
          aria-label="Breadcrumb"
        >
          <Link
            href="/guides"
            className="hover:text-emerald-400 transition-colors flex items-center gap-1.5"
          >
            <FaArrowLeft className="w-3 h-3" />
            All Guides
          </Link>
          <span>·</span>
          <span className="text-gray-400">
            {CATEGORY_LABELS[guide.category]}
          </span>
          <span>·</span>
          <span className="text-gray-300 truncate max-w-[200px]">
            {guide.title}
          </span>
        </nav>

        {/* Article Header */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-700/30 bg-gradient-to-br from-[#001515] to-[#001212] p-6 md:p-10 shadow-[0_0_40px_rgba(16,185,129,0.1)] mb-8">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                {CATEGORY_LABELS[guide.category]}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-snug">
              {guide.title}
            </h1>
            <p className="text-gray-300 text-base mb-5 max-w-full">
              {guide.description}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <FaClock className="text-gray-600" />
                {guide.readingTimeMinutes} min read
              </span>
              <span className="flex items-center gap-1.5">
                <FaCalendarAlt className="text-gray-600" />
                Updated{" "}
                {new Date(guide.lastUpdated).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <article className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 md:p-10 mb-8 prose-guide">
          <div
            className="guide-content"
            dangerouslySetInnerHTML={{ __html: guide.content }}
          />
        </article>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-emerald-400 mb-4 flex items-center gap-2">
              <FaBook className="text-emerald-500" />
              More in {CATEGORY_LABELS[guide.category]}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedGuides.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guides/${related.slug}`}
                  className="group rounded-xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-4 hover:border-emerald-500/40 transition-all duration-300"
                >
                  <h3 className="font-medium text-white group-hover:text-emerald-300 transition-colors text-sm mb-1 leading-snug">
                    {related.title}
                  </h3>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    {related.readingTimeMinutes} min
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back Link */}
        <div className="mt-8 pt-6 border-t border-white/5">
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            Back to all guides
          </Link>
        </div>
      </div>
    </main>
  );
}
