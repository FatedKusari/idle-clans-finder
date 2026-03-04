import { Suspense } from "react";
import SearchInterface from "@/components/search/SearchInterface";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Players & Clans | Idle Clans Hub",
  description:
    "Search for any Idle Clans player or clan. View skill levels, PvM stats, equipment, clan upgrades, and activity logs instantly.",
};

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-[#031111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <Suspense
            fallback={
              <div className="text-center text-white">Loading search...</div>
            }
          >
            <SearchInterface />
          </Suspense>
        </div>
        {/* About section */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-5 mt-8">
          <h2 className="text-base font-semibold text-emerald-400 mb-2">
            About Player &amp; Clan Search
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Search for any player or clan in Idle Clans by entering their exact
            in-game name. Player profiles show all skill levels, local market
            upgrades, boss kill counts, equipped gear, clan membership and more.
            Clan profiles display the full member roster, clan skill levels, and
            all active clan upgrades. Data is fetched live from the official
            Idle Clans API and refreshed on each lookup. Recent searches are
            cached in your browser for quick access.
          </p>
        </div>
      </div>
    </main>
  );
}
