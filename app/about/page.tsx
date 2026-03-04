import type { Metadata } from "next";
import Link from "next/link";
import {
  FaGithub,
  FaBook,
  FaSearch,
  FaCalculator,
  FaStore,
  FaChartBar,
  FaListAlt,
} from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

export const metadata: Metadata = {
  title: "About Idle Clans Hub",
  description:
    "Learn about Idle Clans Hub — a free, community-built companion site for the Idle Clans browser game, offering player search, rankings, an XP calculator, market analytics, and guides.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#031111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-700/30 bg-gradient-to-br from-[#001515] to-[#001212] p-6 md:p-10 shadow-[0_0_40px_rgba(16,185,129,0.1)] mb-8">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3">
              About Idle Clans Hub
            </h1>
            <p className="text-gray-300 text-base leading-relaxed">
              A free, community-built companion site for{" "}
              <strong className="text-white">Idle Clans</strong>.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 md:p-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">
              What is Idle Clans Hub?
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Idle Clans Hub is an independent, fan-made companion website for
                the game Idle Clans. It is not affiliated with or endorsed by
                the official Idle Clans development team. The site is built and
                maintained by a dedicated player who wanted to make the game
                more accessible and data-driven for the community.
              </p>
              <p>
                The goal is simple: provide the tools and information that make
                Idle Clans more enjoyable to play. Whether you want to look up
                another player&apos;s stats, find the most profitable item to
                craft right now, plan your path to the next level, or learn a
                new mechanic - Idle Clans Hub has a tool or guide for it.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 md:p-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-5">
              What the Site Offers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <FaSearch className="text-emerald-400" />,
                  title: "Player & Clan Search",
                  description:
                    "Look up any player or clan by name. View skill levels, PvM stats, equipment, upgrades, and clan membership details.",
                },
                {
                  icon: <FaChartBar className="text-emerald-400" />,
                  title: "Global Rankings",
                  description:
                    "Live leaderboards for players, clans, and pets across all skills, bosses, and raids. Supports Default, Ironman, and Group Ironman modes.",
                },
                {
                  icon: <FaCalculator className="text-emerald-400" />,
                  title: "XP Calculator",
                  description:
                    "Calculate the actions, resources, and time required to reach any skill level target. Load your profile for personalised results.",
                },
                {
                  icon: <FaStore className="text-emerald-400" />,
                  title: "Market Analytics",
                  description:
                    "Real-time market data analysis. Find the most profitable items to produce and identify undervalued items currently listed below average price.",
                },
                {
                  icon: <FaListAlt className="text-emerald-400" />,
                  title: "Logs",
                  description:
                    "Browse detailed activity logs for any player or clan — drops, boss kills, skill actions, and other in-game events, all in one place.",
                },
                {
                  icon: <FaBook className="text-emerald-400" />,
                  title: "Guides",
                  description:
                    "In-depth skill guides, beginner tutorials, boss strategies, and walkthroughs for every major game mechanic. Written by experienced players.",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
                >
                  <div className="mt-0.5 shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-white text-sm mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 md:p-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">
              Who Built This?
            </h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Idle Clans Hub is built and maintained by{" "}
                <strong className="text-white">HSK</strong>, an Idle Clans
                player and self-taught software developer. For the past 4 years,
                he has been obsessively teaching himself the art of software
                development. As a self-taught developer, he&apos;s built a
                foundation of resilience and proactive problem-solving skills
                that allows him to master new technologies quickly and
                independently.
              </p>
              <p>
                The project started as a personal tool for tracking skill
                progress and evolved into a full-featured community resource as
                other players found it useful. The site is open source - if you
                are a developer interested in contributing, fixing a bug, or
                suggesting a feature, the code is available on GitHub.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="https://github.com/karolhas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-emerald-500/40 transition-all duration-200 text-sm font-medium"
                >
                  <FaGithub className="text-gray-400" />
                  View on GitHub
                </Link>
                <Link
                  href="https://buymeacoffee.com/hskdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#031111] border border-[#FFDD00]/40 text-[#FFDD00] hover:bg-[#FFDD00]/10 hover:border-[#FFDD00] hover:shadow-[0_0_15px_rgba(255,221,0,0.15)] transition-all duration-300 text-sm font-medium"
                >
                  <SiBuymeacoffee className="w-4 h-4" />
                  Buy me a coffee
                </Link>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 md:p-8">
            <h2 className="text-xl font-bold text-emerald-400 mb-4">
              Disclaimer
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Idle Clans Hub is an unofficial fan site and is not affiliated
              with, endorsed by, or connected to the official Idle Clans game or
              its developer. All game data displayed on this site is sourced
              from the publicly available Idle Clans API.
            </p>
          </section>

          <div className="text-center pt-2">
            <Link
              href="/contact"
              className="text-sm text-emerald-400 hover:text-emerald-300 transition-colors underline underline-offset-4"
            >
              Have a question or found a bug? Contact us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
