"use client";

import Link from "next/link";
import { LeaderboardEntry, LeaderboardCategory, LeaderboardStat } from "@/types/leaderboard.types";
import { FaTrophy, FaMedal, FaAward } from "react-icons/fa";

interface Props {
  entries: LeaderboardEntry[];
  isLoading?: boolean;
  entityType?: 'player' | 'clan' | 'pet';
  category?: LeaderboardCategory;
  stat?: LeaderboardStat | null;
}

const NET_EPOCH_OFFSET = 621_355_968_000_000_000;

function ticksToDate(ticks: number | null): string | null {
  if (!ticks || ticks <= 0) return null;
  const ms = (ticks - NET_EPOCH_OFFSET) / 10_000;
  const d = new Date(ms);
  const dd = d.getUTCDate().toString().padStart(2, "0");
  const mm = (d.getUTCMonth() + 1).toString().padStart(2, "0");
  return `${dd}.${mm}.${d.getUTCFullYear()}`;
}

function formatExp(exp: number): string {
  return new Intl.NumberFormat().format(Math.round(exp));
}

const getRankIcon = (rank: number) => {
  if (rank === 1) return <FaTrophy className="text-yellow-400" />;
  if (rank === 2) return <FaMedal className="text-gray-400" />;
  if (rank === 3) return <FaAward className="text-amber-600" />;
  return null;
};

const getRankColor = (rank: number) => {
  if (rank === 1) return "text-yellow-400";
  if (rank === 2) return "text-gray-400";
  if (rank === 3) return "text-amber-600";
  return "text-gray-300";
};

const ENTITY_LABEL: Record<string, string> = {
  player: "Player",
  clan: "Clan",
  pet: "Pet",
};

export default function LeaderboardTable({
  entries,
  isLoading = false,
  entityType = 'player',
  category = 'skills',
  stat = null,
}: Props) {
  if (isLoading) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl overflow-hidden">
        <div className="p-8 text-center text-gray-400">
          Loading leaderboard...
        </div>
      </div>
    );
  }

  if (entries.length === 0) {
    return (
      <div className="bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl overflow-hidden">
        <div className="p-8 text-center text-gray-400">
          No leaderboard data available.
        </div>
      </div>
    );
  }

  const isSkillCategory = category === 'skills';
  const isTotalLevel = isSkillCategory && stat === 'total_level';
  const showDateColumn = isSkillCategory && !isTotalLevel;
  const entityLabel = ENTITY_LABEL[entityType] ?? "Player";

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-xl backdrop-blur-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/5 border-b border-white/10">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider w-28">
                Rank
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                {entityLabel}
              </th>
              {isSkillCategory ? (
                <>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Level
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Exp
                  </th>
                  {showDateColumn && (
                    <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                      Cap Date
                    </th>
                  )}
                </>
              ) : (
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Score
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {entries.map((entry) => (
              <tr key={entry.rank} className="hover:bg-white/5 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className={`text-lg font-bold ${getRankColor(entry.rank)}`}>
                      #{entry.rank}
                    </span>
                    {getRankIcon(entry.rank)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {entityType === 'pet' ? (
                    <Link
                      href={`/search?q=${encodeURIComponent(entry.name)}`}
                      className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      {entry.name}
                    </Link>
                  ) : (entityType === 'player' || entityType === 'clan') ? (
                    <Link
                      href={`/search?q=${encodeURIComponent(entry.name)}${entityType === 'clan' ? '&type=clan' : ''}`}
                      className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer"
                    >
                      {entry.name}
                    </Link>
                  ) : (
                    <div className="text-sm font-medium text-white">
                      {entry.name}
                    </div>
                  )}
                </td>
                {isSkillCategory ? (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span className="text-sm text-white font-mono font-semibold">
                        {entry.level.toLocaleString()}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <span className="text-sm text-emerald-400 font-mono">
                        {formatExp(entry.exp)}
                      </span>
                    </td>
                    {showDateColumn && (
                      <td className="px-6 py-4 whitespace-nowrap text-right">
                        <span className="text-sm text-gray-400 font-mono">
                          {ticksToDate(entry.expCapDate) ?? "—"}
                        </span>
                      </td>
                    )}
                  </>
                ) : (
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <span className="text-sm text-emerald-400 font-mono">
                      {entry.exp.toLocaleString()}
                    </span>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
