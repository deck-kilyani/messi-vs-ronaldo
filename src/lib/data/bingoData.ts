export interface MinuteStat {
  minute: number;
  messi: boolean;
  ronaldo: boolean;
  messiGoalsCount: number;
  ronaldoGoalsCount: number;
}

// Generate the 90 minute match matrix deterministically
export const GOALS_MINUTES_BINGO: MinuteStat[] = Array.from({ length: 90 }, (_, i) => {
  const min = i + 1;
  // Historically Ronaldo has scored in every single minute from 1 to 90.
  // Messi has scored in every minute except minute 1 and 2 (first goal came in min 3).
  const messiScored = min >= 3;
  const ronaldoScored = true;
  
  // Deterministic goal counts based on match-minute index
  let messiCount = 4 + (min % 7);
  let ronaldoCount = 4 + (min % 8);
  
  if (min === 1) messiCount = 0;
  if (min === 2) messiCount = 0;
  if (min === 45) {
    messiCount = 21;
    ronaldoCount = 28;
  }
  if (min === 90) {
    messiCount = 38;
    ronaldoCount = 44;
  }
  if (min === 23) {
    messiCount = 18;
    ronaldoCount = 19;
  }
  if (min === 89) {
    messiCount = 24;
    ronaldoCount = 22;
  }

  return {
    minute: min,
    messi: messiScored,
    ronaldo: ronaldoScored,
    messiGoalsCount: messiCount,
    ronaldoGoalsCount: ronaldoCount,
  };
});
