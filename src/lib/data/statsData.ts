export interface ComparisonStatCategory {
  id: string;
  title: string;
  subtitle: string;
  messi: {
    goals: number;
    assists: number;
    apps: number;
    minsPerGoal: number;
    minsPerContribution: number;
    // Granular details
    penalties?: number;
    penaltyConversion?: number;
    freeKicks?: number;
    hatTricks?: number;
    insideBox?: number;
    outsideBox?: number;
    shotsPerGoal?: number;
    shotAccuracy?: number;
    keyPasses?: number;
    successfulDribbles?: number;
  };
  ronaldo: {
    goals: number;
    assists: number;
    apps: number;
    minsPerGoal: number;
    minsPerContribution: number;
    penalties?: number;
    penaltyConversion?: number;
    freeKicks?: number;
    hatTricks?: number;
    insideBox?: number;
    outsideBox?: number;
    shotsPerGoal?: number;
    shotAccuracy?: number;
    keyPasses?: number;
    successfulDribbles?: number;
  };
}

export const MAIN_COMPARISON_CATEGORIES: ComparisonStatCategory[] = [
  {
    id: "all-time-career",
    title: "All Time Career",
    subtitle: "Excluding club friendlies (all official matches)",
    messi: {
      goals: 937,
      assists: 428,
      apps: 1185,
      minsPerGoal: 104,
      minsPerContribution: 71,
      penalties: 115,
      penaltyConversion: 77.2,
      freeKicks: 76,
      hatTricks: 62,
      insideBox: 792,
      outsideBox: 145,
      shotsPerGoal: 5.27,
      shotAccuracy: 45.83,
      keyPasses: 2151,
      successfulDribbles: 4110,
    },
    ronaldo: {
      goals: 985,
      assists: 261,
      apps: 1343,
      minsPerGoal: 111,
      minsPerContribution: 88,
      penalties: 184,
      penaltyConversion: 83.3,
      freeKicks: 65,
      hatTricks: 67,
      insideBox: 847,
      outsideBox: 138,
      shotsPerGoal: 6.43,
      shotAccuracy: 40.31,
      keyPasses: 1320,
      successfulDribbles: 1963,
    },
  },
  {
    id: "career-europe",
    title: "All Time Career (Excluding USA / Saudi)",
    subtitle: "European elite era performance comparisons",
    messi: {
      goals: 830,
      assists: 370,
      apps: 1061,
      minsPerGoal: 105,
      minsPerContribution: 73,
      freeKicks: 65,
      hatTricks: 57,
    },
    ronaldo: {
      goals: 847,
      assists: 238,
      apps: 1183,
      minsPerGoal: 113,
      minsPerContribution: 88,
      freeKicks: 59,
      hatTricks: 60,
    },
  },
  {
    id: "all-time-club",
    title: "All Time Club",
    subtitle: "All senior club appearances excluding friendlies",
    messi: {
      goals: 811,
      assists: 361,
      apps: 977,
      minsPerGoal: 99,
      minsPerContribution: 69,
    },
    ronaldo: {
      goals: 839,
      assists: 224,
      apps: 1109,
      minsPerGoal: 109,
      minsPerContribution: 86,
    },
  },
  {
    id: "club-europe",
    title: "All Time Club (Excluding USA / Saudi)",
    subtitle: "Barcelona & PSG vs Sporting, Man Utd, Real Madrid & Juventus",
    messi: {
      goals: 704,
      assists: 303,
      apps: 853,
      minsPerGoal: 99,
      minsPerContribution: 70,
    },
    ronaldo: {
      goals: 701,
      assists: 201,
      apps: 949,
      minsPerGoal: 110,
      minsPerContribution: 86,
    },
  },
  {
    id: "all-time-league",
    title: "All Time Domestic League",
    subtitle: "La Liga, Premier League, Serie A, Ligue 1, MLS & Saudi Pro League",
    messi: {
      goals: 572,
      assists: 263,
      apps: 662,
      minsPerGoal: 95,
      minsPerContribution: 65,
    },
    ronaldo: {
      goals: 608,
      assists: 162,
      apps: 768,
      minsPerGoal: 102,
      minsPerContribution: 81,
    },
  },
  {
    id: "champions-league",
    title: "UEFA Champions League",
    subtitle: "Group Stage to Final (excluding qualifying rounds)",
    messi: {
      goals: 129,
      assists: 40,
      apps: 163,
      minsPerGoal: 105,
      minsPerContribution: 80,
    },
    ronaldo: {
      goals: 140,
      assists: 41,
      apps: 183,
      minsPerGoal: 114,
      minsPerContribution: 88,
    },
  },
  {
    id: "international-all",
    title: "All Time Internationals",
    subtitle: "Senior national team appearances for Argentina & Portugal",
    messi: {
      goals: 126,
      assists: 67,
      apps: 208,
      minsPerGoal: 137,
      minsPerContribution: 89,
    },
    ronaldo: {
      goals: 146,
      assists: 37,
      apps: 234,
      minsPerGoal: 128,
      minsPerContribution: 102,
    },
  },
  {
    id: "world-cup",
    title: "FIFA World Cup",
    subtitle: "World Cup tournament finals appearances",
    messi: {
      goals: 21,
      assists: 12,
      apps: 34,
      minsPerGoal: 145,
      minsPerContribution: 93,
    },
    ronaldo: {
      goals: 11,
      assists: 2,
      apps: 27,
      minsPerGoal: 200,
      minsPerContribution: 169,
    },
  },
  {
    id: "continental-cups",
    title: "Copa América vs UEFA Euros",
    subtitle: "Main continental championship finals",
    messi: {
      goals: 14,
      assists: 18,
      apps: 39,
      minsPerGoal: 238,
      minsPerContribution: 104,
    },
    ronaldo: {
      goals: 14,
      assists: 7,
      apps: 30,
      minsPerGoal: 189,
      minsPerContribution: 126,
    },
  },
];

export interface DetailedMetric {
  title: string;
  category: string;
  messiVal: number | string;
  ronaldoVal: number | string;
  messiLabel?: string;
  ronaldoLabel?: string;
  unit?: string;
  better: "messi" | "ronaldo" | "equal";
  description: string;
}

export const DETAILED_METRICS: DetailedMetric[] = [
  {
    title: "Direct Free Kicks",
    category: "Set Pieces",
    messiVal: 76,
    ronaldoVal: 65,
    unit: "goals",
    better: "messi",
    description: "All-time direct free kick goals in official competitions",
  },
  {
    title: "Penalty Conversion Rate",
    category: "Set Pieces",
    messiVal: "77.2%",
    ronaldoVal: "83.3%",
    better: "ronaldo",
    description: "Ronaldo: 184 scored / 37 missed vs Messi: 115 scored / 35 missed",
  },
  {
    title: "Career Hat-tricks",
    category: "Scoring",
    messiVal: 62,
    ronaldoVal: 67,
    unit: "hat-tricks",
    better: "ronaldo",
    description: "3+ goals in a single official match",
  },
  {
    title: "Career Hat-trick Frequency",
    category: "Scoring",
    messiVal: "Every 19.1 games",
    ronaldoVal: "Every 20.0 games",
    better: "messi",
    description: "Messi scores a hat-trick more frequently per game played",
  },
  {
    title: "Successful Dribbles",
    category: "Playmaking",
    messiVal: "4,110",
    ronaldoVal: "1,963",
    better: "messi",
    description: "Opta tracked competitive matches since 2006",
  },
  {
    title: "Key Passes (Chances Created)",
    category: "Playmaking",
    messiVal: "2,151",
    ronaldoVal: "1,320",
    better: "messi",
    description: "Passes directly leading to a shot on goal",
  },
  {
    title: "Through Balls Completed",
    category: "Playmaking",
    messiVal: "551",
    ronaldoVal: "89",
    better: "messi",
    description: "Calculated through-balls splitting defensive lines",
  },
  {
    title: "Aerial Duels Won",
    category: "Physicality",
    messiVal: "173",
    ronaldoVal: "1,075",
    better: "ronaldo",
    description: "Contested aerial balls won in open play and set pieces",
  },
  {
    title: "Headed Goals",
    category: "Finishing",
    messiVal: 32,
    ronaldoVal: 160,
    unit: "goals",
    better: "ronaldo",
    description: "Career official headed goals",
  },
  {
    title: "Shot Conversion Efficiency",
    category: "Finishing",
    messiVal: "1 goal every 5.27 shots",
    ronaldoVal: "1 goal every 6.43 shots",
    better: "messi",
    description: "Percentage of total shot attempts resulting in a goal",
  },
  {
    title: "Shot On-Target %",
    category: "Finishing",
    messiVal: "45.83%",
    ronaldoVal: "40.31%",
    better: "messi",
    description: "Share of attempts testing the goalkeeper or scoring",
  },
  {
    title: "Non-Penalty Expected Goals (npxG) Ratio",
    category: "Understat Analytics",
    messiVal: "0.78 / 90 min",
    ronaldoVal: "0.74 / 90 min",
    better: "messi",
    description: "Understat expected goal quality per 90 minutes without penalties",
  },
];
