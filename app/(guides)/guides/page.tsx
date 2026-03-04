import Link from "next/link";
import { FaBook, FaClock, FaLayerGroup } from "react-icons/fa";
import {
  guides,
  getAllCategories,
  getGuidesByCategory,
  CATEGORY_LABELS,
  GuideCategory,
} from "@/utils/guides/guides-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idle Clans Guides & Tutorials | Idle Clans Hub",
  description:
    "Comprehensive guides for Idle Clans — skill guides, beginner tutorials, boss strategies, clan management tips, and tool walkthroughs. Written by experienced players.",
};

const CATEGORY_ICONS: Record<GuideCategory, string> = {
  "getting-started": "🚀",
  skills: "⚔️",
  "combat-clans": "🏰",
  "using-the-hub": "🔧",
};

export default function GuidesPage() {
  const categories = getAllCategories();

  return (
    <main className="min-h-screen bg-[#031111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-700/30 bg-gradient-to-br from-[#001515] to-[#001212] p-6 md:p-10 shadow-[0_0_40px_rgba(16,185,129,0.1)] mb-10">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 flex items-center gap-3">
              <FaBook className="text-emerald-400" />
              Idle Clans Guides
            </h1>
            <p className="text-gray-400 mt-2 max-w-full">
              In-depth guides covering every aspect of Idle Clans - from your
              first steps as a beginner to advanced skill optimisation, boss
              strategies, and market trading.
            </p>
            <div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1.5">
                <FaBook className="text-emerald-500" />
                {guides.length} guides
              </span>
              <span className="flex items-center gap-1.5">
                <FaLayerGroup className="text-emerald-500" />
                {categories.length} categories
              </span>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-col gap-12">
          {categories.map((category) => {
            const categoryGuides = getGuidesByCategory(category);
            return (
              <section key={category}>
                <div className="flex items-center space-x-4 mb-6">
                  <h2 className="text-2xl font-bold text-emerald-400 flex items-center gap-3">
                    <span className="text-2xl">{CATEGORY_ICONS[category]}</span>
                    {CATEGORY_LABELS[category]}
                  </h2>
                  <div className="h-px flex-1 bg-gradient-to-r from-emerald-900/50 to-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryGuides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="group block h-full relative overflow-hidden rounded-xl border-2 border-white/10 bg-white/5 p-6 transition-all hover:bg-white/10 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-900/20"
                    >
                      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-emerald-600/10 blur-3xl transition-all group-hover:bg-emerald-500/20" />

                      <div className="relative flex flex-col h-full">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                          {guide.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                          {guide.description}
                        </p>

                        <div className="mt-auto pt-4 flex items-center justify-between">
                          <span className="flex items-center gap-1.5 text-xs text-gray-500">
                            <FaClock className="w-3 h-3" />
                            {guide.readingTimeMinutes} min read
                          </span>
                          <span className="flex items-center gap-1.5 text-sm font-medium text-emerald-500 opacity-0 transform translate-y-2 transition-all group-hover:opacity-100 group-hover:translate-y-0">
                            Read guide
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
