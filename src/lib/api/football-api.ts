import { MAIN_COMPARISON_CATEGORIES, ComparisonStatCategory } from "../data/statsData";
import { COUNTDOWN_DATA } from "../data/countdownData";

export interface LivePlayerStats {
  goals: number;
  assists: number;
  appearances: number;
  minutes: number;
  penaltiesScored: number;
  penaltiesTotal: number;
}

export interface DynamicStatsPayload {
  dataSource: "live-api" | "baseline-cache";
  lastUpdated: string;
  apiConnected: boolean;
  messi: {
    goals: number;
    assists: number;
    apps: number;
    minsPerGoal: number;
    minsPerContribution: number;
    needed1000: number;
    percent1000: number;
  };
  ronaldo: {
    goals: number;
    assists: number;
    apps: number;
    minsPerGoal: number;
    minsPerContribution: number;
    needed1000: number;
    percent1000: number;
  };
  categories: ComparisonStatCategory[];
  countdown: typeof COUNTDOWN_DATA;
}

// API-Football IDs
export const PLAYER_IDS = {
  MESSI: 154,
  RONALDO: 874,
} as const;

/**
 * Fetch season stats from API-Football (api-sports.io or RapidAPI).
 * Uses Next.js fetch cache with 12-hour revalidation (43200s).
 */
export async function fetchLivePlayerSeason(
  playerId: number,
  season: number,
  apiKey: string
): Promise<LivePlayerStats | null> {
  if (!apiKey) return null;

  try {
    // Support both direct API-Sports and RapidAPI keys
    const isRapidAPI = apiKey.startsWith("rapid_") || apiKey.length > 40;
    const url = isRapidAPI
      ? `https://api-football-v1.p.rapidapi.com/v3/players?id=${playerId}&season=${season}`
      : `https://v3.football.api-sports.io/players?id=${playerId}&season=${season}`;

    const headers: Record<string, string> = isRapidAPI
      ? {
          "x-rapidapi-key": apiKey,
          "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        }
      : {
          "x-apisports-key": apiKey,
        };

    const res = await fetch(url, {
      headers,
      next: { revalidate: 43200 }, // 12 hours ISR cache
    });

    if (!res.ok) {
      console.warn(`[API-Football] Status ${res.status} for player ${playerId}`);
      return null;
    }

    const data = await res.json();
    if (!data.response || data.response.length === 0) {
      return null;
    }

    const playerRecord = data.response[0];
    const statsArray = playerRecord.statistics || [];

    // Aggregate statistics across all competitions in the season
    let goals = 0;
    let assists = 0;
    let appearances = 0;
    let minutes = 0;
    let penaltiesScored = 0;
    let penaltiesTotal = 0;

    for (const stat of statsArray) {
      goals += stat.goals?.total || 0;
      assists += stat.goals?.assists || 0;
      appearances += stat.games?.appearences || 0;
      minutes += stat.games?.minutes || 0;
      penaltiesScored += stat.penalty?.scored || 0;
      penaltiesTotal += (stat.penalty?.scored || 0) + (stat.penalty?.missed || 0);
    }

    return {
      goals,
      assists,
      appearances,
      minutes,
      penaltiesScored,
      penaltiesTotal,
    };
  } catch (error) {
    console.error(`[API-Football] Error fetching player ${playerId}:`, error);
    return null;
  }
}

/**
 * Combines verified baseline data with automated live API updates.
 * If API key is missing or calls fail, it seamlessly returns the verified baseline.
 */
export async function getDynamicStats(): Promise<DynamicStatsPayload> {
  const apiKey =
    process.env.FOOTBALL_API_KEY ||
    process.env.NEXT_PUBLIC_FOOTBALL_API_KEY ||
    process.env.APISPORTS_KEY ||
    "";

  // Verified baseline numbers (current verified totals)
  let messiGoals = 937;
  let messiAssists = 428;
  let messiApps = 1185;
  let messiMinutes = 1185 * 82; // approximate average active minutes

  let ronaldoGoals = 985;
  let ronaldoAssists = 261;
  let ronaldoApps = 1343;
  let ronaldoMinutes = 1343 * 81;

  let isLive = false;

  if (apiKey) {
    // Current year / active seasons
    const currentYear = new Date().getFullYear();
    const [messiLive, ronaldoLive] = await Promise.all([
      fetchLivePlayerSeason(PLAYER_IDS.MESSI, currentYear, apiKey),
      fetchLivePlayerSeason(PLAYER_IDS.RONALDO, currentYear, apiKey),
    ]);

    // If live data successfully returned, incorporate delta
    if (messiLive && messiLive.goals > 0) {
      isLive = true;
      // We take the max of baseline or dynamic calculation to prevent any backward count
      messiGoals = Math.max(messiGoals, 910 + messiLive.goals);
      messiAssists = Math.max(messiAssists, 415 + messiLive.assists);
      messiApps = Math.max(messiApps, 1150 + messiLive.appearances);
      if (messiLive.minutes > 0) {
        messiMinutes = messiApps * 82;
      }
    }

    if (ronaldoLive && ronaldoLive.goals > 0) {
      isLive = true;
      ronaldoGoals = Math.max(ronaldoGoals, 960 + ronaldoLive.goals);
      ronaldoAssists = Math.max(ronaldoAssists, 255 + ronaldoLive.assists);
      ronaldoApps = Math.max(ronaldoApps, 1315 + ronaldoLive.appearances);
      if (ronaldoLive.minutes > 0) {
        ronaldoMinutes = ronaldoApps * 81;
      }
    }
  }

  // Calculate efficiency rates
  const messiMinsPerGoal = messiGoals > 0 ? Math.round(messiMinutes / messiGoals) : 104;
  const ronaldoMinsPerGoal = ronaldoGoals > 0 ? Math.round(ronaldoMinutes / ronaldoGoals) : 111;

  const messiContrib = messiGoals + messiAssists;
  const ronaldoContrib = ronaldoGoals + ronaldoAssists;

  const messiMinsPerContrib = messiContrib > 0 ? Math.round(messiMinutes / messiContrib) : 71;
  const ronaldoMinsPerContrib = ronaldoContrib > 0 ? Math.round(ronaldoMinutes / ronaldoContrib) : 88;

  // Race to 1000 goals updates
  const messiNeeded = Math.max(0, 1000 - messiGoals);
  const ronaldoNeeded = Math.max(0, 1000 - ronaldoGoals);
  const messiPercent = Number(((messiGoals / 1000) * 100).toFixed(1));
  const ronaldoPercent = Number(((ronaldoGoals / 1000) * 100).toFixed(1));

  // Dynamically update the All-Time Career category in comparison categories
  const categories = MAIN_COMPARISON_CATEGORIES.map((cat) => {
    if (cat.id === "all-time-career") {
      return {
        ...cat,
        messi: {
          ...cat.messi,
          goals: messiGoals,
          assists: messiAssists,
          apps: messiApps,
          minsPerGoal: messiMinsPerGoal,
          minsPerContribution: messiMinsPerContrib,
        },
        ronaldo: {
          ...cat.ronaldo,
          goals: ronaldoGoals,
          assists: ronaldoAssists,
          apps: ronaldoApps,
          minsPerGoal: ronaldoMinsPerGoal,
          minsPerContribution: ronaldoMinsPerContrib,
        },
      };
    }
    return cat;
  });

  const countdown = {
    ...COUNTDOWN_DATA,
    messi: {
      ...COUNTDOWN_DATA.messi,
      goals: messiGoals,
      needed: messiNeeded,
      apps: messiApps,
      percentComplete: messiPercent,
    },
    ronaldo: {
      ...COUNTDOWN_DATA.ronaldo,
      goals: ronaldoGoals,
      needed: ronaldoNeeded,
      apps: ronaldoApps,
      percentComplete: ronaldoPercent,
    },
  };

  return {
    dataSource: isLive ? "live-api" : "baseline-cache",
    lastUpdated: new Date().toISOString(),
    apiConnected: isLive,
    messi: {
      goals: messiGoals,
      assists: messiAssists,
      apps: messiApps,
      minsPerGoal: messiMinsPerGoal,
      minsPerContribution: messiMinsPerContrib,
      needed1000: messiNeeded,
      percent1000: messiPercent,
    },
    ronaldo: {
      goals: ronaldoGoals,
      assists: ronaldoAssists,
      apps: ronaldoApps,
      minsPerGoal: ronaldoMinsPerGoal,
      minsPerContribution: ronaldoMinsPerContrib,
      needed1000: ronaldoNeeded,
      percent1000: ronaldoPercent,
    },
    categories,
    countdown,
  };
}
