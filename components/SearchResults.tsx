//components
import SkillDisplay from "./SkillDisplay";
import { LocalMarketUpgradesDisplay } from "./upgrades/LocalMarketUpgradesDisplay";

//types
import { Player } from "@/types/player";
//icons
import { FaGamepad, FaShieldAlt, FaUser } from "react-icons/fa";

interface SearchResultsProps {
  player: Player;
  error?: string;
}

export default function SearchResults({ player, error }: SearchResultsProps) {
  if (error) {
    return (
      <div className="mt-8 p-6 bg-red-50 border border-red-200 rounded-lg">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="mt-8 space-y-8">
      <div className="bg-[#002626] p-6 rounded-lg border border-[#004444]">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">
          Player Info
        </h2>

        <p className="flex items-center mb-2 font-light">
          <FaUser className="mr-1" /> Nickname:{" "}
          <span className="text-white ml-1 font-semibold">
            {player.username}
          </span>
        </p>

        <p className="flex items-center mb-2 font-light">
          <FaGamepad className="mr-1" /> Game Mode:{" "}
          <span className="text-white ml-1 font-semibold">
            {player.gameMode === "default" ? "Normal" : player.gameMode}
          </span>
        </p>
        <p className="flex items-center font-light">
          <FaShieldAlt className="mr-1" /> Clan:{" "}
          <span className="text-white ml-1 font-semibold">
            {player.guildName || "No Clan"}
          </span>
        </p>
      </div>

      <div className="bg-[#002626] p-6 rounded-lg border border-[#004444]">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">Skills</h2>
        <SkillDisplay skills={player.skillExperiences} />
      </div>

      <div className="bg-[#002626] p-6 rounded-lg border border-[#004444]">
        <h2 className="text-2xl font-bold mb-4 text-emerald-400">
          Local Market Upgrades
        </h2>
        <LocalMarketUpgradesDisplay upgrades={player.upgrades} />
      </div>
    </div>
  );
}
