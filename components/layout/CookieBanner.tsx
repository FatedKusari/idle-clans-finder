"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const CONSENT_KEY = "cookie-consent";
const GA_ID = "G-SHBQEPTLNT";
const ADSENSE_SRC =
  "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6722789074992707";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [animated, setAnimated] = useState(false);
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) {
      const timer = setTimeout(() => {
        setVisible(true);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => setAnimated(true));
        });
      }, 2000);
      return () => clearTimeout(timer);
    } else if (stored === "accepted") {
      setConsented(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsented(true);
    setAnimated(false);
    setTimeout(() => setVisible(false), 300);
  }

  function handleDecline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setAnimated(false);
    setTimeout(() => setVisible(false), 300);
  }

  return (
    <>
      {consented && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
          <Script
            strategy="afterInteractive"
            src={ADSENSE_SRC}
            crossOrigin="anonymous"
          />
        </>
      )}

      {visible && (
        <div
          className={`fixed bottom-0 left-0 right-0 z-50 border-t border-emerald-800 bg-[#031111] px-4 py-4 shadow-lg transition-all duration-300 ease-out ${
            animated ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <div className="mx-auto flex max-w-5xl flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-300">
              We use cookies for analytics and advertising to improve your
              experience. By clicking{" "}
              <span className="font-semibold text-emerald-400">Accept</span>,
              you consent to our use of cookies. See our{" "}
              <a
                href="/privacy"
                className="underline text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Privacy Policy
              </a>{" "}
              for details.
            </p>
            <div className="flex shrink-0 gap-2">
              <button
                onClick={handleDecline}
                className="rounded border border-emerald-700 px-4 py-1.5 text-sm text-gray-300 transition-colors hover:border-emerald-500 hover:text-white"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="rounded bg-emerald-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-emerald-500"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
