import type { Metadata } from "next";
import Link from "next/link";
import {
  FaGithub,
  FaDiscord,
  FaRedditAlien,
  FaBug,
  FaLightbulb,
  FaQuestionCircle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Contact | Idle Clans Hub",
  description:
    "Get in touch with the Idle Clans Hub team. Report bugs, suggest features, or ask questions via GitHub, Discord, X, or Reddit.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#031111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative overflow-hidden rounded-2xl border-2 border-emerald-700/30 bg-gradient-to-br from-[#001515] to-[#001212] p-6 md:p-10 shadow-[0_0_40px_rgba(16,185,129,0.1)] mb-8">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10">
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mb-3">
              Contact
            </h1>
            <p className="text-gray-300 leading-relaxed">
              Have a question, found a bug, or want to suggest a feature? Reach
              out through any of the channels below.
            </p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Link
            href="https://github.com/karolhas/idle-clans-finder/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-900/20 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center group-hover:bg-gray-700 transition-colors">
              <FaGithub className="text-white w-7 h-7" />
            </div>
            <div>
              <h2 className="font-semibold text-white group-hover:text-emerald-300 transition-colors mb-1">
                GitHub
              </h2>
              <p className="text-gray-500 text-xs font-mono">karolhas</p>
            </div>
          </Link>

          <Link
            href="https://discord.com/users/hskdaking"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-indigo-900/40 flex items-center justify-center group-hover:bg-indigo-900/60 transition-colors">
              <FaDiscord className="text-indigo-400 w-7 h-7" />
            </div>
            <div>
              <h2 className="font-semibold text-white group-hover:text-indigo-300 transition-colors mb-1">
                Discord
              </h2>
              <p className="text-gray-500 text-xs font-mono">hskdaking</p>
            </div>
          </Link>

          <Link
            href="https://x.com/hskdaking"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 hover:border-gray-400/30 hover:shadow-lg hover:shadow-gray-900/20 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors border border-white/10">
              <FaXTwitter className="text-white w-7 h-7" />
            </div>
            <div>
              <h2 className="font-semibold text-white group-hover:text-gray-300 transition-colors mb-1">
                X / Twitter
              </h2>
              <p className="text-gray-500 text-xs font-mono">@hskdaking</p>
            </div>
          </Link>

          <Link
            href="https://www.reddit.com/user/hskdaking/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center gap-3 rounded-xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-900/20 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-orange-900/30 flex items-center justify-center group-hover:bg-orange-900/50 transition-colors">
              <FaRedditAlien className="text-orange-400 w-7 h-7" />
            </div>
            <div>
              <h2 className="font-semibold text-white group-hover:text-orange-300 transition-colors mb-1">
                Reddit
              </h2>
              <p className="text-gray-500 text-xs font-mono">u/hskdaking</p>
            </div>
          </Link>
        </div>

        {/* FAQ-style section */}
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#001a1a] to-[#001212] p-6 md:p-8">
          <h2 className="text-lg font-bold text-emerald-400 mb-5">
            Common Requests
          </h2>
          <div className="space-y-4">
            {[
              {
                icon: <FaBug className="text-red-400 shrink-0 mt-0.5" />,
                title: "Bug Report",
                description:
                  "Please describe the bug clearly: what you expected to happen, what actually happened, and steps to reproduce it. A screenshot helps. Use GitHub Issues for the fastest response.",
              },
              {
                icon: (
                  <FaLightbulb className="text-yellow-400 shrink-0 mt-0.5" />
                ),
                title: "Feature Request",
                description:
                  "We welcome feature suggestions. Please explain the problem the feature would solve and how it would benefit other users. Submit feature requests on GitHub Issues.",
              },
              {
                icon: (
                  <FaQuestionCircle className="text-blue-400 shrink-0 mt-0.5" />
                ),
                title: "Data Accuracy Question",
                description:
                  "All data on Idle Clans Hub is sourced from the publicly available Idle Clans API. If data appears incorrect, it may reflect a delay in the API. Persistent inaccuracies should be reported as bugs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5"
              >
                {item.icon}
                <div>
                  <h3 className="font-medium text-white text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
