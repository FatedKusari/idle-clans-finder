export type GuideCategory =
  | "getting-started"
  | "skills"
  | "combat-clans"
  | "using-the-hub";

export interface Guide {
  slug: string;
  title: string;
  description: string;
  category: GuideCategory;
  content: string;
  lastUpdated: string;
  readingTimeMinutes: number;
}

export const CATEGORY_LABELS: Record<GuideCategory, string> = {
  "getting-started": "Getting Started",
  skills: "Skills",
  "combat-clans": "Combat & Clans",
  "using-the-hub": "Using Idle Clans Hub",
};

export const guides: Guide[] = [
  {
    slug: "what-is-idle-clans",
    title: "What is Idle Clans?",
    description:
      "An overview of Idle Clans - a multiplayer idle game that aims to provide the classic MMORPG experience.",
    category: "getting-started",
    lastUpdated: "2026-03-01",
    readingTimeMinutes: 4,
    content: `
      <h2>What is Idle Clans?</h2>
      <p>Idle Clans is a multiplayer idle game that aims to provide the classic MMORPG experience in a casual, easy to digest and far less time-consuming manner. Developed by Temsei. If you've played idle's or RPG's before, Idle Clans will make you feel right at home.</p>

      <h2>The Core Gameplay Loop</h2>
      <p>Everything in Idle Clans revolves around a continuous loop of progression. You assign your character to gather resources - chop trees, mine ore, catch fish - and those raw materials are then processed through crafting, smithing, and cooking into more valuable goods. Better gear improves your combat stats, letting you defeat stronger bosses and access higher-tier content. Selling surplus items on the in-game market funds upgrades, and the cycle continues.</p>
      <p>What makes this loop satisfying is that every skill feeds into every other. Mining ore becomes metal bars through Smithing, metal bars become weapons through Crafting, better weapons make bosses easier, boss drops fund new resources. Nothing exists in isolation.</p>

      <h2>Skills Overview</h2>
      <p>Idle Clans features over 20 skills spread across gathering, processing, utility, and combat categories:</p>
      <ul>
        <li><strong>Gathering:</strong> Woodcutting, Mining, Fishing, Foraging</li>
        <li><strong>Processing:</strong> Farming, Smithing, Crafting, Carpentry, Cooking, Brewing</li>
        <li><strong>Utility:</strong> Agility, Enchanting</li>
        <li><strong>Combat:</strong> Attack, Strength, Defence, Archery, Magic, Health, Exterminating</li>
        <li><strong>Other:</strong> Plundering, Item creation</li>
      </ul>
      <p>Each skill has its own XP curve and unlocks new content at higher levels. Skills scale past level 100 - mastery capes are available at levels 90, 100, 110, and 120.</p>

      <h2>Clans</h2>
      <p>Clans are a central social and mechanical feature of the game. Players can join a clan and unlock shared upgrades that benefit all members - things like passive skill speed boosts, better market sell rates, and access to clan-exclusive boss encounters. Many of the most impactful permanent bonuses in the game come exclusively from clan upgrades, making joining an active clan one of the best early decisions you can make.</p>

      <h2>Game Modes</h2>
      <p>Idle Clans offers three distinct game modes:</p>
      <ul>
        <li><strong>Default:</strong> The standard experience. Trade freely on the market and join any clan.</li>
        <li><strong>Ironman:</strong> A self-sufficient challenge mode. You cannot use the player market and must produce everything yourself.</li>
        <li><strong>Group Ironman:</strong> Play the Ironman challenge cooperatively with a small group of friends, sharing resources only within the group.</li>
      </ul>

      <h2>Why Players Love It</h2>
      <p>Idle Clans hits a sweet spot between accessibility and depth. You can make meaningful progress in ten minutes a day, but if you want to optimise every detail there is always another efficiency frontier to chase. The community is active, the developer releases regular updates, and the combination of competitive leaderboards and cooperative clan play keeps long-term engagement high.</p>
    `,
  },
  {
    slug: "beginners-guide",
    title: "Complete Beginner's Guide",
    description:
      "Your first skills to train, how to earn gold fast, and the most common mistakes to avoid as a new player.",
    category: "getting-started",
    lastUpdated: "2026-03-01",
    readingTimeMinutes: 5,
    content: `
      <h2>Your First Hour in Idle Clans</h2>
      <p>When you first log into Idle Clans, the number of skills and options can feel overwhelming. This guide cuts through the noise and gives you a clear path forward for your first sessions.</p>

      <h2>Step 1: Start with Gathering Skills</h2>
      <p>Your immediate priority is generating resources. Set your character to Woodcutting first - logs feed into Carpentry and Brewing, and the early levels pass quickly. After a few sessions, branch into Mining. Try to get Coal ore as fast as u can (unlocked at Mining level 30) - it's one of the most reliable early income sources on the market. You will also need a large amount of it later in the game to be able to smithing better bars = better EQ.</p>
      <p>Do not try to train all gathering skills simultaneously. Pick one or two and push them forward. Your idle time is limited; spread too thin and you progress nowhere quickly.</p>

      <h2>Step 2: Learn the Market Early</h2>
      <p>The in-game market is your best friend as a beginner. Sell raw materials you cannot yet process - selling ores or logs is perfectly fine early on. This gold funds your first equipment upgrades and helps you reach processing milestones faster.</p>
      <p>Check market prices before committing to a production chain. If Iron Bars sell for more than the ore you put in, Smithing is worth your time. If not, sell the ore raw and spend time on a different skill.</p>
      <p>Check out our <strong>Market</strong> tab - it might help you to get your first money quickly.</p>

      <h2>Step 3: Combat Basics</h2>
      <p>Combat skills level up as you fight enemies in the combat section. Start with the weakest enemies available and upgrade your gear as you gain levels. Combat drops often contain useful materials like gems which u can use for upgrading your equipment. A Bronze or Iron platebody from Smithing (or the market) makes a noticeable difference even at low levels.</p>

      <h2>Step 4: Join a Clan</h2>
      <p>Joining a clan as early as possible is one of the best decisions you can make. Clan upgrades provide passive bonuses to all members - things like faster skill training speeds, better market sell rates, and access to exclusive clan boss encounters. Even a small casual clan is far better than playing solo.</p>

      <h2>Common Beginner Mistakes</h2>
      <ul>
        <li><strong>Create 3 accounts (in total):</strong> You can have main character + 2 alts. Let them mining coal to get more gold at the beggining.</li>
        <li><strong>Training too many skills at once:</strong> Focus your idle time. Push one or two skills at a time to unlock meaningful level milestones.</li>
        <li><strong>Ignoring the market:</strong> Check prices regularly. The economy shifts everytime.</li>
        <li><strong>Not upgrading gear:</strong> Better equipment means faster combat and better mobs/boss drops. Upgrade it as soon as possible.</li>
        <li><strong>Skipping Agility:</strong> Agility provides 0.18% chance per level to dodge an attack, maximum obtainable bonus being 21.6% at level 120.</li>
        <li><strong>Playing without a clan:</strong> Clan upgrade bonuses compound over time and make a significant difference at higher levels.</li>
      </ul>
    `,
  },
  {
    slug: "ironman-mode-guide",
    title: "Ironman Mode Guide",
    description:
      "What Ironman mode restricts, and how to plan a fully self-sufficient progression without the player market.",
    category: "getting-started",
    lastUpdated: "2026-03-01",
    readingTimeMinutes: 5,
    content: `
      <h2>What is Ironman Mode?</h2>
      <p>Ironman mode is a voluntary challenge in Idle Clans that restricts you from buying or selling on the player-driven market. Every resource you use must come from your own skill training, boss drops, or in-game NPC shops. This transforms the game into a self-sufficiency puzzle where the order in which you train skills matters enormously.</p>

      <h2>Key Restrictions</h2>
      <ul>
        <li>Cannot buy items from other players on the market</li>
        <li>Cannot sell items to other players on the market</li>
        <li>Must source all crafting materials through personal skill training or boss drops</li>
        <li>NPC shops and boss drops remain fully accessible</li>
        <li>Clan upgrades and clan bosses are still available</li>
      </ul>

      <h2>Why Play Ironman?</h2>
      <p>Ironman mode is popular among players who want to experience the full breadth of Idle Clans' skill system. In Default mode, you can simply buy whatever you need. In Ironman, you are forced to engage with every gathering and processing skill at some point. The result is a more holistic and challenging progression path that many players find more rewarding in the long run.</p>

      <h2>Skill Priority in Ironman</h2>
      <p>Without market access, every resource bottleneck must be solved internally. A solid starting order for Ironman is:</p>
      <ol>
        <li><strong>Woodcutting + Carpentry:</strong> Spruce logs feed Carpentry from level 1. Push Woodcutting to unlock Pine (10), Oak (20), and Maple (30) logs progressively for better plank tiers.</li>
        <li><strong>Mining + Smithing:</strong> Self-sufficient metal supply for equipment. Mine Copper/Tin for Bronze bars early, then push to Iron (Mining 15) for Iron bars at Smithing 15.</li>
        <li><strong>Fishing + Cooking:</strong> Raw Piranha are available from Fishing level 1. Cook them for +2 health per fish. Push toward Trout (Fishing 25) and Salmon (30) for better combat food.</li>
        <li><strong>Farming:</strong> Potato seeds from level 1 Farming. Prioritise reaching level 20 for Tomatoes, which feed Brewing and mid-level Cooking recipes.</li>
        <li><strong>Agility:</strong> Prioritise this higher than in Default mode - every speed boost counts more when you cannot buy shortcuts. Train it consistently in parallel with everything else.</li>
      </ol>

      <h2>Ironman Clan Play</h2>
      <p>Ironman characters can still join clans and benefit from all clan upgrades. The passive bonuses - faster training speeds, better drop rates - are especially valuable in Ironman because they compound across all your self-sufficient farming. Joining an Ironman-friendly clan early is one of the best decisions you can make in this game mode.</p>

      <h2>Long-Term Ironman Strategy</h2>
      <p>The defining challenge of Ironman is dealing with bottlenecks. You will inevitably hit walls where one skill holds back all the others. Planning your skill order to minimise these bottlenecks is the core strategic puzzle of Ironman mode. Keep multiple skill training sessions active in parallel when possible - while one skill idles, assign your attention to whichever bottleneck skill needs the most direct progression.</p>
    `,
  },
  {
    slug: "group-ironman-guide",
    title: "Group Ironman Guide",
    description:
      "How Group Ironman works, how to divide skill roles among your group, and tips for effective coordination.",
    category: "getting-started",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 5,
    content: `
      <h2>What is Group Ironman?</h2>
      <p>Group Ironman is a cooperative variant of Ironman mode where a small group of players - typically 2 to 5 - share the self-sufficiency challenge together. Members of a Group Ironman group can trade resources with each other but cannot interact with the broader player market. This creates a miniature self-contained economy within the group.</p>

      <h2>How Resource Sharing Works</h2>
      <p>Within a Group Ironman group, members can freely trade items and resources with one another. If one player specialises in Woodcutting while another handles Smithing, they can exchange logs and metal bars to fuel each other's progression. This division of labour is the defining feature of Group Ironman and what separates it from solo Ironman.</p>

      <h2>Optimal Role Division</h2>
      <p>The power of Group Ironman comes from specialisation. Rather than every member training every skill, divide responsibilities based on the group's needs:</p>
      <ul>
        <li><strong>The Gatherer:</strong> Focuses on Woodcutting, Mining, Fishing, and Foraging to supply raw materials for the whole group</li>
        <li><strong>The Processor:</strong> Specialises in Smithing, Crafting, Carpentry, and Cooking to convert raw materials into finished goods</li>
        <li><strong>The Combatant:</strong> Pushes combat skills hard to unlock better boss drops that benefit everyone - keys for Valley of Gods bosses, rare gear, etc.</li>
        <li><strong>The Farmer/Brewer:</strong> Handles Farming and Brewing to produce potions and ingredients that accelerate the whole group's training</li>
      </ul>
      <p>In a two-player group, each player typically handles half the skills. Larger groups allow finer specialisation.</p>

      <h2>Communication is Everything</h2>
      <p>Unlike solo play, Group Ironman requires active coordination. Before committing your idle time to a task, check what the group currently needs most. A shared Discord channel to track resource stockpiles and priorities is highly recommended. Bottlenecks in Group Ironman often occur when multiple members are producing the same resource rather than the one that is actually scarce.</p>

      <h2>Group Ironman vs Solo Ironman</h2>
      <p>Group Ironman progresses significantly faster than solo Ironman because specialisation eliminates many bottlenecks. However, it introduces a coordination cost. The group is only as strong as its least active member - if your dedicated miner stops playing, the whole group feels the shortage. Choose your group members carefully and establish expectations about activity levels before starting.</p>

      <h2>Starting Tips</h2>
      <ul>
        <li>Assign skill specialisations before anyone starts playing to avoid wasted early levels</li>
        <li>Establish a shared communication channel immediately</li>
        <li>Prioritise combat specialisation early - boss drops are a free source of materials that bypass skill training entirely</li>
        <li>Track your group's resource stockpiles and adjust roles if a critical bottleneck emerges</li>
      </ul>
    `,
  },
  {
    slug: "woodcutting-guide",
    title: "Woodcutting Guide",
    description:
      "Best trees at every level, XP rates, and how logs feed into Carpentry and Brewing.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 5,
    content: `
      <h2>Woodcutting Overview</h2>
      <p>Woodcutting is one of the foundational gathering skills in Idle Clans. Logs you chop are consumed by Carpentry (to make planks for clan housing) and Brewing (as ingredients in potions). It is also one of the fastest skills to level at the lower tiers, making it an excellent first skill to push for new players.</p>

      <h2>Tree Tiers and XP</h2>
      <p>Each tree unlocks at a specific level and yields a different XP amount per action. All trees use a hatchet tool - higher-tier hatchets reduce your action time and therefore increase your logs-per-hour rate.</p>
      <ul>
        <li><strong>Level 1 - Spruce:</strong> 7.5 XP per action, 3 sec. The starting tree. Push through this as fast as possible.</li>
        <li><strong>Level 10 - Pine:</strong> 14 XP per action, 5 sec. Pine logs are used in early Brewing recipes (Potion of Swiftness requires 2 Pine logs).</li>
        <li><strong>Level 20 - Oak:</strong> 17.5 XP per action, 6 sec. Oak logs feed mid-level Carpentry (Oak Planks at level 20) and Brewing potions.</li>
        <li><strong>Level 30 - Maple:</strong> 20 XP per action, 6.5 sec. Maple logs are used in Carpentry and some Brewing recipes.</li>
        <li><strong>Level 40 - Teak:</strong> 25 XP per action, 8 sec. Teak Planks require level 40 Carpentry.</li>
        <li><strong>Level 50 - Chestnut:</strong> 35 XP per action, 10 sec. Chestnut logs are used in the Potion of Resurrection recipe at Brewing level 30.</li>
        <li><strong>Level 60 - Mahogany:</strong> 50 XP per action, 12.5 sec. Required for Potion of Forgery (Brewing 45) and Mahogany Planks (Carpentry 60).</li>
        <li><strong>Level 70 - Yew:</strong> 67.5 XP per action, 15 sec. Yew logs are used in Brewing's Potion of Trickery (level 65) and Yew Planks (Carpentry 70).</li>
        <li><strong>Level 80 - Redwood:</strong> 90 XP per action, 17.5 sec. Needed for Potion of Dark Magic (Brewing 75) and Redwood Planks (Carpentry 80).</li>
        <li><strong>Level 90 - Magical:</strong> 110 XP per action, 20 sec. Required for Potion of Pure Power (Brewing 85) and Magical Planks (Carpentry 90).</li>
        <li><strong>Level 105 - Ignis:</strong> 935 XP per action, 150 sec. The rarest and most valuable log, used for Ignis Heartwood planks at Carpentry 105.</li>
      </ul>

      <h2>Hatchets: Speed Your Training</h2>
      <p>Hatchets are obtained by plundering the Small village (Plundering level 1). Each tier reduces your action time:</p>
      <ul>
        <li>Normal hatchet (level 0): 4% speed boost</li>
        <li>Refined (10): 6%, Great (20): 8%, Elite (30): 10%</li>
        <li>Superior (45): 12%, Outstanding (60): 15%</li>
        <li>Godlike (80): 20%, Otherworldly (100): 25%</li>
      </ul>

      <h2>Training Strategy</h2>
      <p>Always cut the highest-tier tree available to you. Higher trees provide better XP per action and more valuable logs, so there is rarely a reason to cut lower trees once you have unlocked a better option. The only exception is when you specifically need a lower-tier log for a Brewing recipe or Carpentry plank tier.</p>

      <h2>Woodcutting and Carpentry Synergy</h2>
      <p>Every log type in the game has a corresponding plank tier in Carpentry. Spruce logs become Spruce Planks (Carpentry 1), Pine logs become Pine Planks (Carpentry 10), and so on all the way to Ignis logs becoming Ignis Heartwood (Carpentry 105). Training both skills together ensures you always have a use for the logs you produce.</p>

      <h2>Boosting XP Rates</h2>
      <p>Your house upgrade (up to 25% XP boost at the House tier) and clan house (up to 30% with a Castle tier) both provide Woodcutting XP bonuses. Equipping Common or Rare Woodcutting consumables adds 2% or 4% XP respectively. At high levels, combining these bonuses meaningfully reduces the time needed to reach the next level milestone.</p>
    `,
  },
  {
    slug: "mining-guide",
    title: "Mining Guide",
    description:
      "Which ores to mine at each level, how to keep Smithing supplied, and Coal management tips.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 5,
    content: `
      <h2>Mining Overview</h2>
      <p>Mining is one of the most economically important skills in Idle Clans. The ores you extract feed directly into Smithing, which produces metal bars, equipment, and high-value crafted items. Mining is also one of the primary income sources for players who prefer selling raw materials over processing them.</p>

      <h2>Ore Tiers and XP</h2>
      <p>Each ore type unlocks at a specific Mining level. Pickaxe tiers - obtained by plundering Mining community - reduce your action time, following the same Normal/Refined/Great/Elite/Superior/Outstanding/Godlike/Otherworldly progression as all other tools.</p>
      <ul>
        <li><strong>Level 1 - Copper Ore + Tin Ore:</strong> Combined into Bronze bars at Smithing level 1. The very start of your mining career.</li>
        <li><strong>Level 15 - Iron Ore:</strong> Smelted into Iron bars at Smithing level 15 (no coal required). A consistent early-game income source.</li>
        <li><strong>Level 25 - Silver Ore:</strong> Smelted into Silver bars at Smithing level 25. Used for Silver jewellery (rings, amulets, bracelets, earrings) from Smithing level 30.</li>
        <li><strong>Level 30 - Coal Ore:</strong> Coal is a fuel ore, not directly processed into a bar. It is required to smelt Steel (30 Smithing), Platinum (55), Meteorite (65), Titanium (80), and Astronomical (90) bars. Mine it constantly.</li>
        <li><strong>Level 45 - Gold Ore:</strong> Smelted into Gold bars at Smithing level 50. Used for Gold jewellery from Smithing level 50.</li>
        <li><strong>Level 55 - Platinum Ore:</strong> Requires 3 Coal + 1 Platinum ore per bar. Platinum platebody requires Smithing level 55.</li>
        <li><strong>Level 70 - Meteorite Ore:</strong> Requires 6 Coal + 3 Meteorite ore per bar. Meteorite platebody requires Smithing level 70.</li>
        <li><strong>Level 75 - Diamond Ore:</strong> Smelted into Diamond bars at Smithing level 70. Used for Diamond jewellery from Smithing level 75.</li>
        <li><strong>Level 85 - Titanium Ore:</strong> Requires 9 Coal + 3 Titanium ore per bar. Titanium platebody requires Smithing level 85. Top-tier standard metal.</li>
      </ul>

      <h2>Coal: The Hidden Bottleneck</h2>
      <p>Coal deserves special attention. It does not produce a bar on its own but is required as a fuel at every mid-to-high Smithing tier. The coal requirement scales sharply with metal tier:</p>
      <ul>
        <li>Steel bar: 1 Coal + 2 Iron ore</li>
        <li>Platinum bar: 3 Coal + 1 Platinum ore</li>
        <li>Meteorite bar: 6 Coal + 3 Meteorite ore</li>
        <li>Titanium bar: 9 Coal + 3 Titanium ore</li>
      </ul>
      <p>This means your mining time must be split between primary ore and coal. Always maintain a coal buffer before starting intensive Smithing sessions. Many players dedicate a portion of their idle time exclusively to coal mining.</p>

      <h2>Mining for the Market</h2>
      <p>Raw ores are a reliable income source at all game stages. Even if you do not train Smithing, mining the highest available ore and selling it raw is a solid strategy. Use the Market Analytics page on Idle Clans Hub to compare the sell price of raw ore versus processed bars and decide whether processing is worth the Smithing time investment.</p>

      <h2>Ironman Mining Strategy</h2>
      <p>In Ironman mode, Mining underpins your entire equipment progression. Push Mining and Smithing together, keeping them within 10 levels of each other so neither creates a bottleneck for the other. Pay particular attention to maintaining a large Coal stockpile - running out of Coal when you need to smelt Titanium bars is one of the most painful bottlenecks in Ironman.</p>
    `,
  },
  {
    slug: "fishing-guide",
    title: "Fishing Guide",
    description:
      "Fish tiers, XP rates, bait requirements, and how Fishing sustains your combat sessions through Cooking.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 4,
    content: `
      <h2>Fishing Overview</h2>
      <p>Fishing is the primary source of food in Idle Clans. Raw fish caught through Fishing are cooked via the Cooking skill into food items that restore health during combat encounters. Without a consistent food supply, high-level boss farming becomes unsustainable. Fishing rods are obtained by plundering Fishing town, with each tier reducing action time.</p>

      <h2>Fish Tiers, XP, and Bait</h2>
      <p>Each fish requires a minimum Fishing level and some require specific bait. Raw fish can be sold directly or cooked for combat food.</p>
      <ul>
        <li><strong>Level 1 - Raw Piranha:</strong> 11.25 XP, 5.25 sec, no bait required. The starting fish - cook for +2 health.</li>
        <li><strong>Level 10 - Raw Perch:</strong> 18.75 XP, 7.5 sec. Cooked Perch restores 3 health.</li>
        <li><strong>Level 15 - Raw Mackerel:</strong> 23.25 XP, 9 sec. Cooked Mackerel restores 4 health.</li>
        <li><strong>Level 20 - Raw Cod:</strong> 35.25 XP, 12 sec. Cooked Cod restores 6 health and is used in the Cod Soup recipe (Cooking 40).</li>
        <li><strong>Level 25 - Raw Trout:</strong> 29 XP, 9 sec. Cooked Trout restores 7 health.</li>
        <li><strong>Level 30 - Raw Salmon:</strong> 45 XP, 13.5 sec. Cooked Salmon restores 8 health and is used in Salmon Salad (Cooking 60).</li>
        <li><strong>Level 40 - Raw Carp:</strong> 33 XP, 9.5 sec. Cooked Carp restores 10 health.</li>
        <li><strong>Level 50 - Raw Zander:</strong> 54 XP, 15 sec. Cooked Zander restores 12 health and is used in Power Pizza (Cooking 95).</li>
        <li><strong>Level 60 - Raw Pufferfish:</strong> 69 XP, 18.75 sec. Cooked Pufferfish restores 14 health.</li>
        <li><strong>Level 80 - Raw Anglerfish:</strong> 123 XP, 30 sec. Cooked Anglerfish restores 16 health.</li>
        <li><strong>Level 90 - Raw Tuna:</strong> 205 XP, 45 sec. Cooked Tuna restores 17 health.</li>
        <li><strong>Level 100 - Bloodmoon Eel:</strong> 610 XP, 90 sec, requires Bloodmoon Worm bait. Cooked Bloodmoon Eel restores 24 health - the best fish-based food in the game.</li>
      </ul>

      <h2>Bait and Consumables</h2>
      <p>Common fishing bait gives a 2% XP boost, Rare fishing bait gives 4%. Most fish do not require bait to catch - only the Bloodmoon Eel requires a specific bait (Bloodmoon Worm). Bait is consumed with each successful catch.</p>

      <h2>Fishing and Cooking Synergy</h2>
      <p>Fishing and Cooking are naturally paired skills. Train them at similar levels so you can always cook the fish you are catching. A level 60 Fisher who only has level 20 Cooking wastes most of the potential value of their catches. The Cooking skill guide covers which level opens which fish cooking recipe.</p>

      <h2>The Most Efficient Fisherman Upgrade</h2>
      <p>From the Local market's Upgrade Dealership, you can buy the "Most efficient fisherman" upgrade which gives a chance (10% to 50% depending on tier) to automatically cook the fish you catch. This is a powerful quality-of-life upgrade that effectively combines Fishing and Cooking into a single action at the cost of gold.</p>

      <h2>Mastery Capes</h2>
      <p>Fishing mastery capes are purchasable from the Local market at levels 90, 100, 110, and 120 for 500k, 1M, 2M, and 5M gold respectively. They provide 5%, 10%, 15%, and 20% fishing speed boosts - significant at high levels when you are farming high-XP fish like Tuna or Bloodmoon Eel.</p>
    `,
  },
  {
    slug: "smithing-guide",
    title: "Smithing Guide",
    description:
      "Smelting bars, crafting armor and jewelry, coal requirements, and the most profitable items at every level.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 6,
    content: `
      <h2>Smithing Overview</h2>
      <p>Smithing is the primary metal processing skill in Idle Clans. It converts ores into bars, and those bars into armor, jewelry, and other high-value equipment. Smithing is tightly linked to Mining (your ore source) and combat (your equipment consumer). Players who invest in Smithing can produce their own gear and sell metal items on the market.</p>

      <h2>Smelting: From Ore to Bar</h2>
      <p>Smelting converts raw ores into metal bars. Each bar type requires a minimum Smithing level and specific ore combinations:</p>
      <ul>
        <li><strong>Level 1 - Bronze Bar:</strong> 1 Tin ore + 1 Copper ore. 7.5 XP, 3 sec.</li>
        <li><strong>Level 15 - Iron Bar:</strong> 1 Iron ore (no coal). 14 XP, 5 sec.</li>
        <li><strong>Level 25 - Silver Bar:</strong> 1 Silver ore. 17.5 XP, 6 sec.</li>
        <li><strong>Level 30 - Steel Bar:</strong> 2 Iron ore + 1 Coal. 20 XP, 6.5 sec.</li>
        <li><strong>Level 50 - Gold Bar:</strong> 1 Gold ore. 29 XP, 8 sec.</li>
        <li><strong>Level 55 - Platinum Bar:</strong> 1 Platinum ore + 3 Coal. 50 XP, 12 sec.</li>
        <li><strong>Level 65 - Meteorite Bar:</strong> 3 Meteorite ore + 6 Coal. 100 XP, 20 sec.</li>
        <li><strong>Level 70 - Diamond Bar:</strong> 1 Diamond ore. 115 XP, 22 sec.</li>
        <li><strong>Level 80 - Titanium Bar:</strong> 3 Titanium ore + 9 Coal. 225 XP, 30 sec.</li>
        <li><strong>Level 90 - Astronomical Bar:</strong> 1 Astronomical ore + 5000 Coal. 2500 XP, 60 sec. An endgame bar with massive Coal cost.</li>
        <li><strong>Level 102 - Otherworldly Bar:</strong> 1 Otherworldly ore + 2 Astronomical ore + 10000 Meteorite ore + 5000 Titanium ore. 5000 XP, 60 sec.</li>
      </ul>

      <h2>Armor Crafting</h2>
      <p>Each bar type corresponds to a set of platebody, platelegs, helmet, and shield. Higher tiers require more bars per piece:</p>
      <ul>
        <li>Bronze platebody (level 1): 6 Bronze bars, 60 XP</li>
        <li>Iron platebody (level 20): 6 Iron bars, 75 XP</li>
        <li>Steel platebody (level 35): 6 Steel bars, 90 XP</li>
        <li>Platinum platebody (level 55): 6 Platinum bars, 150 XP</li>
        <li>Meteorite platebody (level 70): 6 Meteorite bars, 210 XP</li>
        <li>Titanium platebody (level 85): 6 Titanium bars, 240 XP</li>
        <li>Astronomical platebody (level 95): 6 Astronomical bars, 3000 XP</li>
        <li>Otherworldly platebody (level 110): 6 Otherworldly bars + 1 Astronomical platebody</li>
      </ul>

      <h2>Jewelry Crafting</h2>
      <p>Smithing also produces jewelry used in combat and Enchanting:</p>
      <ul>
        <li><strong>Level 30 - Silver jewelry:</strong> Amulets, rings, bracelets, earrings. Each piece uses 2 Silver bars, gives 35 XP in 3 sec.</li>
        <li><strong>Level 50 - Gold jewelry:</strong> Same pieces in Gold. Uses 2 Gold bars, gives 40 XP in 3 sec.</li>
        <li><strong>Level 75 - Diamond jewelry:</strong> The top tier. Uses 2 Diamond bars, gives 70 XP in 4.5 sec.</li>
      </ul>
      <p>Each jewelry base can be converted into specialty variants (Berserker ring, Arcane ring, Precision ring, Brute bracelet, Marksman bracelet, Sorcerer bracelet) using the corresponding symbol item at no processing time.</p>

      <h2>Coal: The Smithing Bottleneck</h2>
      <p>Coal is the single biggest resource concern in Smithing. The Astronomical bar requires 5000 Coal per smelt. Always maintain a large coal stockpile before starting an intensive smelting session. The "Smelting magic" upgrade from the Local market gives a 10%-30% chance to not consume ore when smelting (excluding Astronomical ore), which helps manage resource consumption at high levels.</p>

      <h2>Hammers and Equipment</h2>
      <p>Smithing tools (hammers) are obtained by plundering Small city. Normal hammer gives 4%, up to Otherworldly hammer at level 100 for 25% speed boost. Getting a high-tier hammer early significantly speeds up your Smithing sessions.</p>
    `,
  },
  {
    slug: "crafting-guide",
    title: "Crafting Guide",
    description:
      "Leather gear, fabric robes, arrows, gemstones - what you can make and what gives the best XP.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 5,
    content: `
      <h2>Crafting Overview</h2>
      <p>Crafting in Idle Clans covers a wide range of production: leather and fabric armor, arrows for Archery, and gemstone refinement for high-value trade goods. Crafting bridges many skills - it consumes leather from combat drops, logs from Woodcutting, and metal bars from Smithing, and produces items used in combat and Enchanting. Crafting tools (needles) are obtained by plundering Small city.</p>

      <h2>Leather Gear</h2>
      <p>Leather armor is crafted in two parts (coat and trousers) from leather materials. Each leather type requires a different level and number of leather pieces:</p>
      <ul>
        <li><strong>Level 1 - Leather coat:</strong> 3 Leather, 35 XP in 7.5 sec</li>
        <li><strong>Level 20 - Orange coat:</strong> Orange leather, 65 XP</li>
        <li><strong>Level 40 - Green coat:</strong> Green leather, 100 XP</li>
        <li><strong>Level 60 - Red coat:</strong> Red leather, 125 XP</li>
        <li><strong>Level 80 - Black coat:</strong> Black leather, 185 XP</li>
        <li><strong>Level 95 - Astronomical leather coat:</strong> 6 Astronomical leather, 1000 XP in 15 sec</li>
      </ul>

      <h2>Fabric Robes</h2>
      <p>Magic robes are crafted from flax materials, used primarily by players training the Magic combat style:</p>
      <ul>
        <li><strong>Level 20 - Magical robe:</strong> 15 Magical flax, 55 XP in 7.5 sec</li>
        <li><strong>Level 40 - Enchanted robe:</strong> Enchanted flax, 70 XP</li>
        <li><strong>Level 70 - Cursed robe:</strong> Cursed flax, 125 XP</li>
        <li><strong>Level 95 - Astronomical robe:</strong> 6 Astronomical flax, 1000 XP in 15 sec</li>
      </ul>

      <h2>Arrows (Archery Ammo)</h2>
      <p>Crafting produces arrows for the Archery combat style. Each tier uses both a metal bar and a log type:</p>
      <ul>
        <li><strong>Level 1 - Bronze arrow:</strong> 1 Bronze bar + 1 Spruce log, 20 XP in 6 sec</li>
        <li><strong>Level 10 - Iron arrow:</strong> Iron bar + Pine log, 25 XP</li>
        <li><strong>Level 20 - Steel arrow:</strong> Steel bar + Oak log, 30 XP</li>
        <li><strong>Level 40 - Platinum arrow:</strong> Platinum bar + Maple log, 35 XP</li>
        <li><strong>Level 60 - Meteorite arrow:</strong> Meteorite bar + Teak log, 40 XP</li>
        <li><strong>Level 70 - Titanium arrow:</strong> Titanium bar + Mahogany log, 50 XP</li>
        <li><strong>Level 80 - Astronomical arrow:</strong> Astronomical bar + Yew log, 80 XP</li>
      </ul>

      <h2>Gemstone Refinement</h2>
      <p>Crafting allows you to refine raw gemstones from combat drops into refined versions with high market value. Refined gemstones are used in the Enchanting skill to upgrade jewelry. The refinement process is instant and gives large XP amounts:</p>
      <ul>
        <li>Refined gemstone: level 10, 1000 XP, sells for 7500</li>
        <li>Great gemstone: level 25, 2000 XP, sells for 15000</li>
        <li>Elite gemstone: level 40, 5000 XP, sells for 35000</li>
        <li>Superior gemstone: level 50, 10000 XP, sells for 80000</li>
        <li>Outstanding gemstone: level 70, 25000 XP, sells for 175000</li>
        <li>Godlike gemstone: level 85, 50000 XP, sells for 575000</li>
        <li>Otherworldly gemstone: level 105, 200000 XP, sells for 1,150,000</li>
      </ul>

      <h2>Useful Crafting Upgrades</h2>
      <p>The "Arrow crafter" upgrade (requires 90 Crafting, unlocked by Arrow crafting secrets item) permanently raises your crafted arrow quantities by 10%. The "Delicate manufacturing" upgrade (70 Crafting) lets you use 20% less flax when crafting non-Astronomical fabrics, which is a significant material saving at high levels.</p>
    `,
  },
  {
    slug: "farming-guide",
    title: "Farming Guide",
    description:
      "Crop tiers, harvest cycles, and how Farming feeds Cooking and Brewing at every stage.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 4,
    content: `
      <h2>Farming Overview</h2>
      <p>Farming is Idle Clans' agricultural production skill. You plant seeds, they grow over a timed cycle, and you harvest the crop. Farmed produce feeds into Cooking (as recipe ingredients) and Brewing (as the base material for potions). Each harvest produces 5 units of the crop, and Farming uses a Rake tool obtained by plundering a Farm location.</p>

      <h2>Crop Tiers by Level</h2>
      <p>Each crop requires a seed, planted at the corresponding Farming level. Grow time and XP scale with the crop tier:</p>
      <ul>
        <li><strong>Level 1 - Potato:</strong> 1 Potato seed, 75 XP, 30 sec. Used in Potato Soup (Cooking 15), Cod Soup (Cooking 40), and Beef Stew (Cooking 80).</li>
        <li><strong>Level 10 - Carrot:</strong> 1 Carrot seed, 200 XP, 40 sec. Used in Beef Stew (Cooking 80).</li>
        <li><strong>Level 20 - Tomato:</strong> 1 Tomato seed, 300 XP, 60 sec. Key ingredient in Potion of Swiftness (Brewing 1) and Potion of Negotiation (Brewing 15).</li>
        <li><strong>Level 25 - Cabbage:</strong> 1 Cabbage seed, 325 XP, 60 sec. Used in Potion of Resurrection (Brewing 30).</li>
        <li><strong>Level 35 - Strawberry:</strong> 1 Strawberry seed, 500 XP, 90 sec. Used in Potion of Forgery (Brewing 45).</li>
        <li><strong>Level 50 - Watermelon:</strong> 1 Watermelon seed, 850 XP, 120 sec. Used in Potion of Great Sight (Brewing 55).</li>
        <li><strong>Level 65 - Grapes:</strong> 1 Grape seed, 1100 XP, 150 sec. Used in Potion of Trickery (Brewing 65).</li>
        <li><strong>Level 80 - Papaya:</strong> 1 Papaya seed, 1250 XP, 165 sec. Used in Potion of Dark Magic (Brewing 75) and Potion of Pure Power (Brewing 85).</li>
        <li><strong>Level 90 - Dragon Fruit:</strong> 1 Dragon Fruit seed, 1500 XP, 180 sec. Key ingredient in Potion of Ancient Knowledge (Brewing 93).</li>
        <li><strong>Level 105 - Sunfire Berry:</strong> 1 Sunfire seed, 2000 XP, 315 sec. Required for the Dragonfire Potion (Brewing 105), one of the most powerful potions in the game.</li>
      </ul>

      <h2>Farming and Brewing Synergy</h2>
      <p>Brewing is almost entirely dependent on Farming. Every potion in the game requires at least one farmed crop as its primary ingredient. If you plan to train Brewing seriously, Farming must keep pace. A common bottleneck is reaching Brewing level 45 (Potion of Forgery) but not yet having Farming level 35 for Strawberries - the two skills must be trained together.</p>

      <h2>Seed Saving Upgrade</h2>
      <p>The "Farming trickery" upgrade from the Local market gives you a 10%-50% chance (depending on tier) to save your seeds when farming. At higher tiers, this significantly reduces the number of seeds you need to buy or source, which is especially helpful in Ironman mode where seeds must be sourced through boss drops or Plundering.</p>

      <h2>Farming Rakes</h2>
      <p>Farming tools follow the same tier progression as other skills: Normal rake (4% speed) through Otherworldly rake at level 100 (25% speed). The Guardian's Trowel from the Guardians of the Citadel raid gives an additional 5% speed boost at level 75 Farming.</p>
    `,
  },
  {
    slug: "cooking-guide",
    title: "Cooking Guide",
    description:
      "How food sustains combat, the best fish and dish recipes at every level, and maximising health restoration.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 4,
    content: `
      <h2>Cooking Overview</h2>
      <p>Cooking converts raw fish from Fishing and produce from Farming into food that restores health during combat. Without cooked food, your character cannot survive extended boss fights. Cooking tools (pans) are obtained by plundering Food factory. The skill covers three categories: fish, meat, and complex dishes.</p>

      <h2>Fish Cooking</h2>
      <p>Each fish requires a minimum Cooking level and gives specific health restoration when eaten:</p>
      <ul>
        <li>Piranha (level 1): 10 XP, 3 sec, restores 2 health</li>
        <li>Perch (level 10): 16 XP, 3.5 sec, restores 3 health</li>
        <li>Mackerel (level 15): 20 XP, 4 sec, restores 4 health</li>
        <li>Cod (level 20): 26 XP, 4.5 sec, restores 6 health</li>
        <li>Trout (level 25): 33 XP, 5 sec, restores 7 health</li>
        <li>Salmon (level 30): 40 XP, 6 sec, restores 8 health</li>
        <li>Carp (level 40): 56 XP, 7.5 sec, restores 10 health</li>
        <li>Zander (level 50): 80 XP, 10 sec, restores 12 health</li>
        <li>Pufferfish (level 60): 105 XP, 12.5 sec, restores 14 health</li>
        <li>Anglerfish (level 70): 155 XP, 17.5 sec, restores 16 health</li>
        <li>Tuna (level 85): 255 XP, 26.25 sec, restores 17 health</li>
        <li>Bloodmoon Eel (level 95): 892 XP, 65.625 sec, restores 24 health - the best fish food in the game</li>
      </ul>

      <h2>Meat Cooking</h2>
      <p>Raw meat comes from combat drops. Cooked meat is a solid alternative to fish food:</p>
      <ul>
        <li>Cooked meat (level 10): 30 XP, 2.5 sec, restores 4 health</li>
        <li>Cooked giant meat (level 30): 60 XP, 4 sec, restores 8 health</li>
        <li>Cooked quality meat (level 60): 120 XP, 6 sec, restores 12 health</li>
        <li>Cooked superior meat (level 90): 250 XP, 10 sec, restores 18 health</li>
        <li>Apex meat (level 100): 350 XP, 12 sec, restores 20 health</li>
      </ul>

      <h2>Dishes: The Best Health Restoration</h2>
      <p>Dishes combine multiple ingredients for superior health restoration. They are more complex to produce but provide better value per food slot during boss fights:</p>
      <ul>
        <li>Potato Soup (level 15): 3 Potatoes, 40 XP, restores 5 health</li>
        <li>Meat Burger (level 25): 2 Cooked meat + 1 Onion, 75 XP, restores 7 health</li>
        <li>Cod Soup (level 40): 2 Cod + 3 Potatoes + 1 Onion, 150 XP, restores 10 health</li>
        <li>Blueberry Pie (level 50): 10 Blueberries + 1 Onion, 200 XP, restores 11 health</li>
        <li>Salmon Salad (level 60): 2 Cooked Salmon + Potato + 1 Onion, 250 XP, restores 14 health</li>
        <li>Porcini Soup (level 70): 5 Porcini + 4 Potatoes + 2 Onions, 400 XP, restores 17 health</li>
        <li>Beef Stew (level 80): Potatoes + 4 Carrots + 1 Quality meat, 550 XP, restores 19 health</li>
        <li>Power Pizza (level 95): 3 Zander + 1 Pufferfish + 2 Quality meat + 1 Onion, 750 XP, restores 22 health</li>
      </ul>

      <h2>The "Keep It Burning" Upgrade</h2>
      <p>The "Keep it burning" upgrade (requires the Book of the sage cook item) automatically cooks all meat received in combat if you have the required Cooking level. This eliminates the need to manually cook meat drops and is a strong passive quality-of-life improvement for combat-heavy players.</p>
    `,
  },
  {
    slug: "brewing-guide",
    title: "Brewing Guide",
    description:
      "How potions work, all potion tiers from level 1 to 105, and the best brews for combat and skilling.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 4,
    content: `
      <h2>Brewing Overview</h2>
      <p>Brewing produces potions that grant temporary boosts to skills, combat stats, and market sell rates. Every potion requires ingredients from Farming (crops), Woodcutting (logs), and sometimes Foraging (herbs like Nettle and Porcini). Brewing tools (philosopher's stones) are obtained by plundering Royal clan. The skill pairs tightly with Farming - you cannot brew high-level potions without high-level crops.</p>

      <h2>Potion Tiers</h2>
      <p>All potions follow the pattern of combining a crop, a flax or herb ingredient, and a log. Higher potions require rarer ingredients from higher-level Farming and Woodcutting:</p>
      <ul>
        <li><strong>Level 1 - Potion of Swiftness:</strong> 10 Tomatoes + 5 Nettle + 2 Pine logs. 750 XP, 55 sec. Boosts skill action speed.</li>
        <li><strong>Level 15 - Potion of Negotiation:</strong> 10 Tomatoes + 15 Magical flax + 2 Oak logs. 1045 XP, 65 sec. Increases market sell value.</li>
        <li><strong>Level 30 - Potion of Resurrection:</strong> 15 Cabbage + 10 Enchanted flax + 2 Chestnut logs. 1215 XP, 72.5 sec. Provides a combat sustain effect.</li>
        <li><strong>Level 45 - Potion of Forgery:</strong> 10 Strawberries + 15 Enchanted flax + 2 Mahogany logs. 1515 XP, 85 sec. Boosts Smithing efficiency.</li>
        <li><strong>Level 55 - Potion of Great Sight:</strong> 10 Watermelons + 15 Magical flax + 2 Teak logs. 1950 XP, 97.5 sec. Boosts Archery/Magic combat.</li>
        <li><strong>Level 65 - Potion of Trickery:</strong> 10 Grapes + 15 Porcini + 2 Yew logs. 2445 XP, 115 sec. Boosts Plundering success.</li>
        <li><strong>Level 75 - Potion of Dark Magic:</strong> 10 Papaya + 15 Cursed flax + 2 Redwood logs. 2950 XP, 132.5 sec. Boosts Magic combat damage.</li>
        <li><strong>Level 85 - Potion of Pure Power:</strong> 15 Papaya + 20 Seaweed + 2 Magical logs. 3750 XP, 155 sec. One of the strongest all-round combat boosts.</li>
        <li><strong>Level 93 - Potion of Ancient Knowledge:</strong> 20 Dragon Fruit + 50 Seaweed + 10 Magical logs. 5025 XP, 180 sec. Boosts XP gained across all skills.</li>
        <li><strong>Level 105 - Dragonfire Potion:</strong> 10 Sunfire Berry + 30 Smoldering mushroom + 5 Ignis heartwood + 100 Otherworldly essence. 2950 XP, 90 sec. Requires high-level ingredients but provides an exceptional combat buff.</li>
      </ul>

      <h2>Potion Duration and Clan Upgrades</h2>
      <p>Potion effects last for a set duration after consumption. The "Potioneering" clan upgrade (requires Brewing level 70 in the clan) extends all potion durations by 25%. The "Responsible drinking" upgrade from the Local market adds another 10% duration. If you are a dedicated brewer, stacking these bonuses maximises the value of each potion you produce.</p>

      <h2>The Last Negotiation Upgrade</h2>
      <p>The "Last negotiation" upgrade (70 Brewing, requires Negotiation techniques item) permanently grants you the effect of the Potion of Negotiation without needing to brew or drink the potion. This is one of the most impactful passive upgrades for regular market sellers - free permanent market sell bonus with no consumable cost.</p>

      <h2>Selling Potions</h2>
      <p>Potions sell well on the market because their buffs are universally useful. Players who do not train Brewing are willing to pay premium prices rather than invest the skill time themselves. If you enjoy Brewing, selling surplus potions is one of the higher-income activities available at mid-to-late game.</p>
    `,
  },
  {
    slug: "carpentry-guide",
    title: "Carpentry Guide",
    description:
      "How to turn logs into planks for clan housing, the best XP methods, and gold cost tips.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 4,
    content: `
      <h2>Carpentry Overview</h2>
      <p>Carpentry converts logs into planks used for Clan house upgrades. It is the primary way your clan improves its housing tier, which in turn provides passive XP boosts to all clan members across every skill. Carpentry uses a Saw tool - obtained by plundering Woodworking factory. Each plank conversion has a gold cost in addition to the log requirement.</p>

      <h2>Plank Tiers and Costs</h2>
      <p>Each plank type requires the corresponding log plus a gold payment per conversion. The gold cost is reduced or eliminated by the "Plank bargain" upgrade from the Local market:</p>
      <ul>
        <li><strong>Level 1 - Spruce Plank:</strong> 1 Spruce log + 50 gold, 40 XP, 9 sec</li>
        <li><strong>Level 10 - Pine Plank:</strong> 1 Pine log + 60 gold, 45 XP, 9 sec</li>
        <li><strong>Level 20 - Oak Plank:</strong> 1 Oak log + 70 gold, 50 XP, 9 sec</li>
        <li><strong>Level 30 - Maple Plank:</strong> 1 Maple log + 80 gold, 55 XP, 9 sec</li>
        <li><strong>Level 40 - Teak Plank:</strong> 1 Teak log + 90 gold, 60 XP, 9 sec</li>
        <li><strong>Level 50 - Chestnut Plank:</strong> 1 Chestnut log + 100 gold, 70 XP, 9 sec</li>
        <li><strong>Level 60 - Mahogany Plank:</strong> 1 Mahogany log + 110 gold, 80 XP, 9 sec</li>
        <li><strong>Level 70 - Yew Plank:</strong> 1 Yew log + 125 gold, 95 XP, 9 sec</li>
        <li><strong>Level 80 - Redwood Plank:</strong> 1 Redwood log + 150 gold, 140 XP, 12 sec</li>
        <li><strong>Level 90 - Magical Plank:</strong> 1 Magical log + 175 gold, 200 XP, 15 sec</li>
        <li><strong>Level 105 - Ignis Heartwood:</strong> 1 Ignis log + 375 gold, 2000 XP, 131.25 sec</li>
      </ul>

      <h2>The Gold Cost Problem</h2>
      <p>The gold cost on each plank conversion adds up quickly during intensive Carpentry training. The "Plank bargain" upgrade from the Local market is a high-priority purchase for any serious Carpentry trainer:</p>
      <ul>
        <li>Tier 1 (500k gold): Reduces gold cost by 30%</li>
        <li>Tier 2 (1M gold): Reduces gold cost by 60%</li>
        <li>Tier 3 (2M gold): Reduces gold cost by 100% - free plank conversion forever</li>
      </ul>
      <p>Getting Tier 3 Plank bargain before a major Carpentry push saves enormous amounts of gold in the long run.</p>

      <h2>Carpentry and Clan Housing</h2>
      <p>Planks are used to upgrade your clan's housing tier. Higher clan houses provide XP boosts to all members across most skills. The house tier progression starts with a Cardboard box (5% XP boost) and scales up through Tent, Van, Cabin, and House (25% XP boost). At the clan level, housing goes further - the Castle tier provides a 30% XP boost to all clan members. This is the primary reason Carpentry matters even for players who would otherwise ignore it.</p>

      <h2>Prestigious Woodworking</h2>
      <p>The "Prestigious woodworking" upgrade requires level 75 Woodcutting and level 75 Carpentry, and grants 10% more gold when selling planks to the NPC. This rewards players who have pushed both skills together and turns Carpentry into a small but passive income source on top of its housing utility.</p>
    `,
  },
  {
    slug: "agility-guide",
    title: "Agility Guide",
    description:
      "How dodge chance and Plundering success work, all course tiers, and why Agility is worth training early.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 4,
    content: `
      <h2>Agility Overview</h2>
      <p>Agility is a utility skill that improves two things: your chance to dodge attacks in combat, and your Plundering success rate. Every level of Agility gives 0.18% dodge chance, maxing out at 21.6% dodge at level 120. This passive damage reduction compounds over long boss sessions - the difference between 0% and 20%+ dodge is significant in terms of food consumed and deaths avoided.</p>

      <h2>Agility Courses by Level</h2>
      <p>Agility is trained by completing courses. Each course is an action with a fixed XP and time. There are no resource requirements - just time. Training tools (jumping ropes) are obtained by plundering Sports center:</p>
      <ul>
        <li><strong>Level 1 - Jogging course:</strong> 30 XP, 6 sec</li>
        <li><strong>Level 15 - Swimming:</strong> 40 XP, 7.5 sec</li>
        <li><strong>Level 30 - Monkey bars:</strong> 55 XP, 8.5 sec</li>
        <li><strong>Level 40 - Strength training:</strong> 70 XP, 9.5 sec</li>
        <li><strong>Level 55 - Basic obstacle course:</strong> 90 XP, 11 sec</li>
        <li><strong>Level 70 - Combat training:</strong> 105 XP, 12.5 sec</li>
        <li><strong>Level 80 - Military obstacle course:</strong> 120 XP, 13 sec</li>
        <li><strong>Level 90 - Rock climbing:</strong> 160 XP, 15 sec</li>
        <li><strong>Level 105 - Sunfire summit:</strong> 2520 XP, 262.5 sec. Unique course that also produces Sunfire Seeds as a side product, used in the Dragonfire Potion recipe.</li>
      </ul>

      <h2>Why Train Agility Early</h2>
      <p>The dodge chance from Agility reduces the damage you take in every combat encounter. Less damage means less food consumed, which means fewer Fishing and Cooking sessions needed to sustain the same amount of boss farming. This efficiency gain compounds over hundreds of hours. Most experienced players recommend keeping Agility within 10-20 levels of your highest other skill rather than ignoring it until late game.</p>

      <h2>Agility and Plundering</h2>
      <p>Agility is one of the key skills used to calculate your Plundering success chance (CoS). Most Plundering locations require both Agility and a secondary skill. Higher Agility directly translates to more successful plunders, more XP gained, and better loot from higher-tier settlements.</p>

      <h2>The Yoink Clan Upgrade</h2>
      <p>The "Yoink" clan upgrade requires Agility level 60 within the clan, and costs 17,500 credits. Its effect: a 15% chance to not consume a boss key when entering a boss lair. Given that boss keys are a limited resource obtained through combat, this upgrade significantly reduces the key cost of heavy boss farming and is one of the best clan upgrades available to combat-focused clans.</p>

      <h2>Treasure Hunter Gloves and Chests</h2>
      <p>At level 80+, Agility training with the Treasure Hunter Gloves equipped (dropped by Hydra) gives a 50% higher chance of finding treasure chests during Agility training. Chests contain a wide variety of valuable items and make high-level Agility training noticeably more rewarding than just raw XP.</p>
    `,
  },
  {
    slug: "enchanting-guide",
    title: "Enchanting Guide",
    description:
      "How scrolls and jewelry tiers work, what each enchantment does, and the ideal endgame setup.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 5,
    content: `
      <h2>Enchanting Overview</h2>
      <p>Enchanting allows you to upgrade jewelry with permanent bonuses called enchantments. These improve either combat performance or skilling speed depending on the enchant type. To enchant jewelry, you need an enchantment scroll that matches the jewelry's tier (Silver, Gold, or Diamond) and the required skill levels. Scrolls come from chests and other content - they are not crafted.</p>

      <h2>Scroll Tiers and Jewelry</h2>
      <p>Each jewelry tier uses a different scroll rarity and requires both an Enchanting level and a Magic level:</p>
      <ul>
        <li><strong>Silver jewelry - Common scrolls:</strong> Enchanting level 1, Magic level 20. Each piece gives 1.5% boost, up to 6% total across 4 pieces. Gives 5000 XP when read.</li>
        <li><strong>Gold jewelry - Rare scrolls:</strong> Enchanting level 40, Magic level 50. Each piece gives 3% boost, up to 12% total. Gives 15000 XP when read.</li>
        <li><strong>Diamond jewelry - Exceptional scrolls:</strong> Enchanting level 80, Magic level 80. Each piece gives 5% boost, up to 20% total. Gives 75000 XP when read.</li>
      </ul>

      <h2>What Can Be Enchanted</h2>
      <p>Enchantment scrolls come in types for every skill and combat stat - Fishing, Woodcutting, Mining, Plundering, Foraging, Cooking, Carpentry, Smithing, Crafting, Brewing, Farming, Agility, Enchanting, Attack, Strength, Defence, Archery, and Magic. Skilling enchants reduce the action interval (making actions faster). Combat enchants boost combat stats. Enchanting's own enchant boosts XP gained.</p>

      <h2>Jewelry Slots and Stacking Rules</h2>
      <p>You can enchant multiple pieces of jewelry, but you cannot apply the same enchant twice to the same item. The same enchant can exist on different pieces if the pieces differ by slot (amulet vs ring), tier (Silver vs Gold), or symbol (berserker ring vs plain ring). This means the maximum unique enchant slots come from building a varied jewelry collection across all slots.</p>

      <h2>The Ideal Endgame Setup</h2>
      <p>The recommended end-game jewelry uses Diamond-tier pieces with Exceptional scrolls for maximum 20% enchant bonus per skill:</p>
      <ul>
        <li>Diamond amulet - All enchants available</li>
        <li>Diamond earrings - All enchants available</li>
        <li>Diamond berserker ring - All except Magic and Archery enchants</li>
        <li>Diamond arcane ring - Only Magic and Defence enchants</li>
        <li>Diamond precision ring - Only Archery and Defence enchants</li>
        <li>Diamond brute bracelet - All except Magic and Archery enchants</li>
        <li>Diamond sorcerer bracelet - Only Magic and Defence enchants</li>
        <li>Diamond marksman bracelet - Only Archery and Defence enchants</li>
      </ul>

      <h2>Reading Scrolls for XP</h2>
      <p>If you do not need an enchantment applied to a specific piece, you can read the scroll instead to gain Enchanting XP. Common scrolls give 5000 XP, Rare give 15000 XP, and Exceptional give 75000 XP. The "Ancient wisdom" upgrade from the Local market (costs 5M gold) lets you read multiple scrolls at once, dramatically speeding up Enchanting XP when you have a stockpile of scrolls to burn through.</p>
    `,
  },
  {
    slug: "plundering-guide",
    title: "Plundering Guide",
    description:
      "All settlements and their success chances, the skills needed, and what loot you can expect.",
    category: "skills",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 5,
    content: `
      <h2>Plundering Overview</h2>
      <p>Plundering lets you steal from different settlements to obtain themed items, gold, and skill tools. Only successful plunders give XP and items - failed attempts give nothing. Your success chance (CoS) is determined by the levels of specific skills associated with each settlement. Lockpick tools are obtained by plundering the Small village itself.</p>

      <h2>Success Chance Calculation</h2>
      <p>Each settlement requires multiple skills to reach 100% success rate. The skills split the success chance evenly, so you must level each of them to their capped level for guaranteed success. Leveling one skill above cap does not compensate for another being below it. The clan "Group effort" upgrade adds a flat +10% to all success rates.</p>

      <h2>All Settlements</h2>
      <ul>
        <li><strong>Level 1 - Small village:</strong> Agility + Woodcutting. Base 30% CoS, need level 70 in each for 100%. 120 XP, 32.5 sec. Drops lockpicks and hatchets.</li>
        <li><strong>Level 20 - Fishing town:</strong> Agility + Fishing. Base 25% CoS, need level 70 in each. 150 XP, 35 sec. Drops fishing rods.</li>
        <li><strong>Level 30 - Mining community:</strong> Agility + Mining. Base 20% CoS, need level 70 in each. 180 XP, 37.5 sec. Drops pickaxes.</li>
        <li><strong>Level 40 - Farm:</strong> Agility + Farming + Foraging. Base 15% CoS, need level 80 in each for 100%. 225 XP, 40 sec. Drops rakes.</li>
        <li><strong>Level 50 - Small city:</strong> Agility + Mining + Smithing + Crafting. Base 10% CoS, need level 80 each. 290 XP, 45 sec. Drops hammers and crafting needles.</li>
        <li><strong>Level 60 - Sports center:</strong> Agility only. Base 0% CoS, need level 100 in Agility for 100%. 360 XP, 47.5 sec. Drops jumping ropes.</li>
        <li><strong>Level 70 - Woodworking factory:</strong> Agility + Carpentry. Base 10% CoS, need level 90 each. 400 XP, 50 sec. Drops saws.</li>
        <li><strong>Level 80 - Food factory:</strong> Agility + Cooking. Base 5% CoS, need level 95 each. 500 XP, 55 sec. Drops cooking pans.</li>
        <li><strong>Level 95 - Royal clan:</strong> Agility + Crafting + Woodcutting + Fishing + Mining + Foraging. Base 5% CoS, need level 100 in each. 750 XP, 60 sec. Drops philosopher's stones.</li>
        <li><strong>Level 105 - Ancient tribe:</strong> All major skills required. Base 5% CoS, need level 110. 1150 XP, 80 sec. The hardest and most rewarding settlement.</li>
      </ul>

      <h2>Tool Drops</h2>
      <p>One of the most important reasons to Plunder is to obtain higher-tier tools for your other skills. Every skill tool (hatchets, pickaxes, fishing rods, hammers, needles, rakes, pans, etc.) is obtained exclusively through Plundering the corresponding settlement. You cannot buy them on the market - you must plunder for them.</p>

      <h2>Boosting Success Rate</h2>
      <p>The "Group effort" clan upgrade (+10% flat CoS) is an early-game priority for Plundering-focused players. The "Ghostly Hood/Top/Pants" set (dropped by Banshee in combat) gives a 2% Plundering boost. Plundering gloves from Clan events give a 5% double loot chance. Stacking these bonuses meaningfully reduces the time needed to farm tools and other drops.</p>
    `,
  },
  {
    slug: "boss-hunting-guide",
    title: "Boss Hunting Guide",
    description:
      "All Valley of Gods bosses, their HP, weaknesses, and how to prepare with keys, gear, and food.",
    category: "combat-clans",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 6,
    content: `
      <h2>The Valley of Gods</h2>
      <p>Boss encounters take place in the Valley of Gods. Each boss lives behind a door that requires a specific key to open. Keys are obtained through regular combat and through the Reckoning of the Gods raid. The "Yoink" clan upgrade (Agility level 60 in clan) gives a 15% chance to not consume a key when entering - a valuable upgrade for frequent boss farmers.</p>

      <h2>Boss Requirements and Stats</h2>
      <p>The recommended level for most bosses is 90+ in your combat skills as a group of three. Higher levels mean less food consumed and faster kill times. All bosses can be fought solo offline, but group play is generally more efficient.</p>
      <ul>
        <li><strong>Zeus:</strong> 380 HP, weak to Archery, max hit 41. Requires Godly key.</li>
        <li><strong>Medusa:</strong> 425 HP, weak to Slash, max hit 45. Requires Stone key.</li>
        <li><strong>Hades:</strong> 350 HP, weak to Stab, max hit 54. Requires Underworld key.</li>
        <li><strong>Griffin:</strong> 440 HP, weak to Crush, max hit 39. Requires Mountain key.</li>
        <li><strong>Devil:</strong> 390 HP, weak to Pound, max hit 42. Requires Burning key.</li>
        <li><strong>Chimera:</strong> 500 HP, weak to Magic, max hit 57. Requires Mutated key.</li>
        <li><strong>Sobek:</strong> 600 HP, no weakness, max hit 56. Requires Ancient key. The most durable standard boss.</li>
        <li><strong>Kronos:</strong> 4000 HP, weakness varies by phase, max hit 195/39. Requires Kronos' book. A massive multi-phase boss.</li>
        <li><strong>Mesines:</strong> 1000 HP, weak to Archery, max hit 68/203. Requires Otherworldly key. The newest and hardest endgame boss.</li>
      </ul>

      <h2>Boss Weapons and Bonuses</h2>
      <p>Boss weapons are found in Raids or created via Item creation. Each weapon gives a 30% damage boost when fighting a specific boss it is tuned for. Mesines weapons give 20% instead of 30%. You can only receive 1 of each weapon until you collect all 6, after which duplicates can drop. Keep each weapon in your inventory to remove it from the drop table so you do not receive duplicates before completing the set.</p>
      <ul>
        <li>Thunderbolt bow - Zeus and Kronos</li>
        <li>Viperstrike scimitar - Medusa and Kronos</li>
        <li>Stygian longsword - Hades and Kronos</li>
        <li>Eagleclaw battle-axe - Griffin and Kronos</li>
        <li>Infernal club - Devil and Kronos</li>
        <li>Divine staff - Chimera and Kronos</li>
        <li>Primeval fangblade - Sobek</li>
        <li>Otherworldly DS crossbow - Mesines</li>
        <li>Otherworldly dragonscale shield - Mesines</li>
      </ul>

      <h2>Gear and Food Preparation</h2>
      <p>Always use your highest-tier available armor and weapon before entering a boss fight. Diamond or Astronomical jewelry with Exceptional enchants makes a large difference in both damage dealt and damage taken. For food, higher-tier dishes from Cooking (Beef Stew, Power Pizza) restore more health per slot than basic cooked fish, reducing the number of food items you consume per kill session.</p>
    `,
  },
  {
    slug: "raid-guide",
    title: "Raid Guide",
    description:
      "The three raids, what skills each one needs, requirements to unlock them, and exclusive rewards.",
    category: "combat-clans",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 5,
    content: `
      <h2>What are Raids?</h2>
      <p>Raids are Idle Clans' most challenging group content. Unlike regular bosses that you can solo, raids are designed for parties of multiple players with coordinated skill roles. Each raid has different skill requirements and rewards exclusive items not available anywhere else in the game. There are currently three raids: Reckoning of the Gods, Guardians of the Citadel, and Bloodmoon Massacre.</p>

      <h2>Reckoning of the Gods</h2>
      <p>This raid can be taken on in a party of 1-6 players. It starts with a preparation phase where you scavenge for resources and craft gear - you only have a few minutes to get as well equipped as possible before the party is thrown into combat against increasingly tough enemies and bosses. Teamwork during the prep phase is critical to maximize your gear quality before the fight begins.</p>
      <p><strong>Requirement:</strong> 25 kills in the Valley of Gods.</p>
      <p><strong>Recommended levels:</strong> 90+ Combat, 90+ Agility, 90+ in at least one support skill.</p>
      <p><strong>Useful skills during the raid:</strong></p>
      <ul>
        <li>Fishing (produces 1-4 fish for healing)</li>
        <li>Cooking (cooks fish to make it edible)</li>
        <li>Mining (produces ores for smithing)</li>
        <li>Smithing (turns ores into armor and jewelry)</li>
        <li>Plundering (scavenges leather/fabric armor and arrows)</li>
        <li>Crafting (upgrades weapons)</li>
      </ul>

      <h2>Guardians of the Citadel</h2>
      <p>In this raid, you are on the defensive - hostile forces are marching on the Citadel and your job is to help it survive. Build defences, craft ammunition, and brew potions to keep the Citadel's troops fighting. A cooperative skilling-focused raid where preparation and coordination matter as much as combat.</p>
      <p><strong>Recommended levels:</strong> 75+ in related skills, 90+ recommended.</p>
      <p><strong>Useful skills:</strong></p>
      <ul>
        <li>Foraging (produces seeds for herbs)</li>
        <li>Farming (grows herbs for brewing)</li>
        <li>Brewing (produces defence potions for the Citadel)</li>
        <li>Woodcutting (produces logs for defences and ammo)</li>
        <li>Carpentry (builds citadel defenses, boosting HP)</li>
        <li>Crafting (crafts arrows to fight raid enemies)</li>
      </ul>
      <p><strong>Exclusive reward:</strong> Guardian's Trowel (farming speed), Guardian's Brewing Spoon (10% fewer ingredients in potions), Guardian's Chisel (10% more Enchanting XP from gemstones).</p>

      <h2>Bloodmoon Massacre</h2>
      <p>Bloodmoon Massacre is a wave-based survival raid where rounds become progressively harder until your party inevitably falls. Unlike the other raids, you bring your own equipment into this challenge rather than crafting gear on the spot. The further you progress through the waves, the better your rewards. This raid favors teams with strong combat stats and excellent food supply.</p>
      <p><strong>Recommended levels:</strong> 100+ Combat, 90+ Agility, 90+ Fishing and Cooking.</p>
      <p><strong>Key skills:</strong></p>
      <ul>
        <li>Combat (eliminates monsters and progresses waves)</li>
        <li>Fishing (catches fish for healing between waves)</li>
        <li>Cooking (cooks fish to make it edible)</li>
      </ul>

      <h2>Raid Drop Exclusivity</h2>
      <p>Raid drops cannot be obtained through any other content in the game. Items like the Guardian's tools (from Guardians of the Citadel) and boss weapons (from Reckoning of the Gods) have no other source. This creates persistent market demand - players who do not raid are willing to pay premium prices for these items. If you are an active raider, selling surplus raid drops can be extremely lucrative.</p>
    `,
  },
  {
    slug: "clan-management-guide",
    title: "Clan Management Guide",
    description:
      "Recruiting members, upgrading the clan, coordinating clan bosses, and keeping your community active.",
    category: "combat-clans",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 5,
    content: `
      <h2>Starting or Joining a Clan</h2>
      <p>Clans in Idle Clans are one of the most impactful systems in the game. You can either create your own or join an existing one. For most players, joining an established clan is the better early choice - you benefit from existing upgrades immediately without needing to build from scratch. Use the Idle Clans Hub Search tool to look up clans by name and assess their upgrade levels and activity before applying.</p>

      <h2>Key Clan Upgrades</h2>
      <p>Clan upgrades are purchased using credits contributed by members and apply to every member simultaneously. Some of the most impactful upgrades include:</p>
      <ul>
        <li><strong>Gatherers:</strong> Requires Woodcutting 70, Fishing 70, Mining 70, and Foraging 70 within the clan. Costs 22,500 credits. Effect: +5% speed to all gathering skills.</li>
        <li><strong>Potioneering:</strong> Requires Brewing 70. Costs 30,000 credits. Effect: all potion effects last 25% longer for all members.</li>
        <li><strong>Group effort:</strong> Requires Attack 40, Strength 40, Defence 40, Archery 40, Magic 50. Costs 5,000 credits. Effect: +10% Plundering success rate.</li>
        <li><strong>Yoink:</strong> Requires Agility 60. Costs 17,500 credits. Effect: 15% chance to not consume a boss key when entering.</li>
        <li><strong>An offer they can't refuse:</strong> Requires Plundering 80, Foraging 80, Farming 70, Carpentry 75. Costs 50,000 credits. Effect: all NPC item sales yield 10% more gold.</li>
      </ul>
      <p>The cumulative effect of a fully upgraded clan is enormous. Long-term membership with consistent upgrade investment is one of the best long-term decisions any player can make.</p>

      <h2>Clan Housing</h2>
      <p>Clan housing upgrades provide XP boosts to all members across most skills. The housing tier scales from Tent (5% boost) up through Barn (10%), Windmill (15%), House (20%), Manor (25%), and Castle (30%). These boosts apply to almost every skill in the game. The planks needed to upgrade housing come from Carpentry, making that skill directly relevant to the whole clan's progress.</p>

      <h2>Coordinating Boss Fights</h2>
      <p>Clan bosses and raids require multiple members to participate within a time window. Designate regular attempt times that work for the majority of your members. Post reminders in your communication channel, confirm participation, and ensure everyone is stocked with appropriate food and keys. A well-coordinated clan boss attempt with 3 members at 90+ combat is far more efficient than solo attempts.</p>

      <h2>Effective Recruiting</h2>
      <p>Growing a healthy clan means finding players who are active and willing to contribute. Look for players who:</p>
      <ul>
        <li>Log in consistently, not just once a week</li>
        <li>Communicate in clan chat or Discord</li>
        <li>Contribute credits proportionally to their level</li>
        <li>Participate in boss events when possible</li>
      </ul>
      <p>A smaller clan of 10 highly active members will outperform a full clan of 20 inactive players on every metric that matters.</p>

      <h2>Using Idle Clans Hub for Clan Research</h2>
      <p>The Search and Rankings tools on Idle Clans Hub let you look up any clan by name and review its member list, activity indicators, and how it compares to others globally. Use this to assess prospective recruits' backgrounds, compare your clan's upgrade progress against rivals, and identify which upgrades top clans have prioritised.</p>
    `,
  },
  {
    slug: "how-to-use-xp-calculator",
    title: "How to Use the XP Calculator",
    description:
      "How to load your profile, read the results, and plan your path to any skill level target.",
    category: "using-the-hub",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 2,
    content: `
      <h2>What is the XP Calculator?</h2>
      <p>The XP Calculator on Idle Clans Hub is a skill planning tool that calculates how many actions, resources, and time you need to reach a target level in any skill. Rather than guessing how far away your next milestone is, the calculator gives you precise numbers based on your current level and XP.</p>

      <h2>Loading Your Profile</h2>
      <p>To get personalised results, enter your Idle Clans username in the search field on the Calculator page and click "Load Profile." The calculator will fetch your current skill levels from the game's API and pre-populate your starting point for each skill. This means you do not need to manually enter your current XP - it is loaded automatically.</p>
      <p>If you have recently looked up your profile on the Search page, the Calculator may automatically pre-load your username from your search history, saving you an extra step.</p>

      <h2>Selecting a Skill</h2>
      <p>Once your profile is loaded, select any skill from the skill list. The calculator displays your current level, current XP, and XP required to reach each subsequent level milestone. You can set a target level and the calculator will display the total XP difference, estimated number of actions needed, and approximate time to completion based on default action speeds.</p>

      <h2>Reading the Results</h2>
      <p>The calculator output shows:</p>
      <ul>
        <li><strong>XP to next level:</strong> How close you are to your immediate next level</li>
        <li><strong>XP to target level:</strong> Total XP gap between your current level and your chosen target</li>
        <li><strong>Actions required:</strong> How many individual skill actions you need to perform</li>
        <li><strong>Resources needed:</strong> The materials you will consume to complete those actions</li>
      </ul>

      <h2>Practical Use Cases</h2>
      <ul>
        <li><strong>Session planning:</strong> Calculate exactly how many logs you need to chop to reach Woodcutting 50 before your next login</li>
        <li><strong>Resource estimation:</strong> Find out how much ore to stockpile before starting a Smithing level push</li>
        <li><strong>Goal setting:</strong> Identify which skill is closest to a meaningful milestone and prioritise it for your next idle session</li>
      </ul>
    `,
  },
  {
    slug: "how-to-use-market-analytics",
    title: "How to Use Market Analytics",
    description:
      "How to spot profitable items, find underpriced listings, and configure clan and potion bonuses.",
    category: "using-the-hub",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 2,
    content: `
      <h2>What is Market Analytics?</h2>
      <p>The Market Analytics page on Idle Clans Hub pulls real-time price data from the Idle Clans market API and analyses it to surface two key opportunities: items that are profitable to produce and sell, and items that are currently underpriced relative to their normal value. Both tables update with each data refresh, giving you current market conditions rather than outdated cached prices.</p>

      <h2>Profitable Items Table</h2>
      <p>The Profitable Items table shows items where the sell price on the market exceeds the cost of the materials required to produce them. The profit figure displayed is the margin after subtracting material costs. Use this table to decide which processing skill activity generates the best return for your current session.</p>
      <p>Important: profitability changes as players buy and sell. An item that is highly profitable today may be less so tomorrow if many players rush to produce it. Check this table before each major production session rather than relying on older readings.</p>

      <h2>Underpriced Items Table</h2>
      <p>The Underpriced Items table identifies items currently listed below their typical market value. This is primarily useful for players who actively trade on the market - buying underpriced items and relisting them at fair value is a low-effort income strategy. The table compares current listed prices against the 24-hour daily average to flag anomalies.</p>

      <h2>Clan and Potion Bonuses</h2>
      <p>The Market Analytics page has two toggle options at the top:</p>
      <ul>
        <li><strong>Clan +10%:</strong> Enabled by default. Reflects the market sell bonus provided by the "An offer they can't refuse" clan upgrade. Toggle this off if your clan does not have this upgrade.</li>
        <li><strong>Potion +5%:</strong> Disabled by default. If you use the Potion of Negotiation from Brewing, enable this to see your actual effective profit with the potion active.</li>
      </ul>
      <p>Always configure these toggles to match your actual in-game situation for accurate profit calculations.</p>

      <h2>Refreshing Data</h2>
      <p>Click the "Refresh Data" button to pull the latest market prices. Market data in Idle Clans updates frequently, so refreshing before a trading session ensures you are working with current numbers rather than stale data.</p>
    `,
  },
  {
    slug: "how-to-use-rankings",
    title: "How to Use the Rankings Page",
    description:
      "How to filter by entity, game mode, and category, and use leaderboard data for goal setting.",
    category: "using-the-hub",
    lastUpdated: "2026-03-03",
    readingTimeMinutes: 2,
    content: `
      <h2>What is the Rankings Page?</h2>
      <p>The Rankings page on Idle Clans Hub displays global leaderboards for players, clans, and pets across all skills, bosses, and raids. It pulls live data from the Idle Clans API and lets you filter by any combination of entity type, game mode, and category. It is the fastest way to see where you stand globally and who the top competitors are in any given category.</p>

      <h2>Filtering Options</h2>
      <h3>Entity Type</h3>
      <p>Choose between <strong>Players</strong>, <strong>Clans</strong>, and <strong>Pets</strong>. Each entity type has its own separate leaderboard. Clan rankings reflect the aggregate performance of all clan members, making them a useful benchmark for evaluating clans you might want to join.</p>

      <h3>Game Mode</h3>
      <p>Select <strong>Default</strong>, <strong>Ironman</strong>, or <strong>Group Ironman</strong>. The leaderboards for each mode are separate - Ironman and Group Ironman players compete on their own dedicated rankings rather than against Default mode players. This ensures fair comparison within each game mode's distinct challenge.</p>

      <h3>Category and Specific Stat</h3>
      <p>First choose a category: <strong>Skills</strong>, <strong>Bosses</strong>, or <strong>Raids</strong> (Bosses and Raids are only available for Players, not Pets). Then select the specific skill, boss, or raid you want to rank by. For skills, Total Level gives you an overall progression ranking, while individual skill leaderboards show specialists in each area.</p>

      <h2>Using Rankings for Goal Setting</h2>
      <p>Leaderboards are a powerful motivational tool. Find your own rank in a skill or boss you care about and identify the players just above you as short-term benchmarks. Closing the gap on a specific ranking goal is often more motivating than abstract level targets. The Rankings page updates regularly, so progress is visible in near-real-time.</p>

      <h2>Clan Comparison</h2>
      <p>Switching to the Clan entity type and browsing by Total Level or specific skills lets you compare your clan against others. This is useful for both competitive motivation and practical research - looking up top clans reveals which upgrades they have prioritised, which can inform your own clan's upgrade strategy.</p>
    `,
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}

export function getGuidesByCategory(category: GuideCategory): Guide[] {
  return guides.filter((g) => g.category === category);
}

export function getAllCategories(): GuideCategory[] {
  return Object.keys(CATEGORY_LABELS) as GuideCategory[];
}
