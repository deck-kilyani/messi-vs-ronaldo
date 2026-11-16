export interface MilestoneProjection {
  paceType: "career" | "season" | "last365";
  label: string;
  messiProjectedDate: string;
  messiProjectedAge: string;
  ronaldoProjectedDate: string;
  ronaldoProjectedAge: string;
  messiGamesNeeded: number;
  ronaldoGamesNeeded: number;
}

export const COUNTDOWN_DATA = {
  target: 1000,
  updatedDate: "November 2026",
  messi: {
    goals: 937,
    needed: 63,
    apps: 1185,
    careerRatio: 0.791,
    seasonRatio: 0.88,
    last365Ratio: 0.85,
    percentComplete: 93.7,
  },
  ronaldo: {
    goals: 985,
    needed: 15,
    apps: 1343,
    careerRatio: 0.733,
    seasonRatio: 0.92,
    last365Ratio: 0.89,
    percentComplete: 98.5,
  },
  projections: [
    {
      paceType: "season",
      label: "Current Season Pace",
      messiProjectedDate: "October 2027",
      messiProjectedAge: "40 yrs, 4 mos",
      ronaldoProjectedDate: "March 2027",
      ronaldoProjectedAge: "42 yrs, 1 mo",
      messiGamesNeeded: 72,
      ronaldoGamesNeeded: 16,
    },
    {
      paceType: "last365",
      label: "Last 365 Days Pace",
      messiProjectedDate: "December 2027",
      messiProjectedAge: "40 yrs, 6 mos",
      ronaldoProjectedDate: "May 2027",
      ronaldoProjectedAge: "42 yrs, 3 mos",
      messiGamesNeeded: 74,
      ronaldoGamesNeeded: 17,
    },
    {
      paceType: "career",
      label: "All-Time Career Pace",
      messiProjectedDate: "April 2028",
      messiProjectedAge: "40 yrs, 10 mos",
      ronaldoProjectedDate: "June 2027",
      ronaldoProjectedAge: "42 yrs, 4 mos",
      messiGamesNeeded: 80,
      ronaldoGamesNeeded: 21,
    },
  ] as MilestoneProjection[],
};

export const CAREER_PROGRESSION_DATA = [
  { age: "18", year: "2005", messiGoals: 1, ronaldoGoals: 6, messiAssists: 0, ronaldoAssists: 5 },
  { age: "19", year: "2006", messiGoals: 10, ronaldoGoals: 25, messiAssists: 3, ronaldoAssists: 14 },
  { age: "20", year: "2007", messiGoals: 41, ronaldoGoals: 58, messiAssists: 17, ronaldoAssists: 30 },
  { age: "21", year: "2008", messiGoals: 80, ronaldoGoals: 104, messiAssists: 39, ronaldoAssists: 47 },
  { age: "22", year: "2009", messiGoals: 121, ronaldoGoals: 144, messiAssists: 60, ronaldoAssists: 63 },
  { age: "23", year: "2010", messiGoals: 181, ronaldoGoals: 192, messiAssists: 88, ronaldoAssists: 78 },
  { age: "24", year: "2011", messiGoals: 254, ronaldoGoals: 252, messiAssists: 126, ronaldoAssists: 95 },
  { age: "25", year: "2012", messiGoals: 345, ronaldoGoals: 315, messiAssists: 155, ronaldoAssists: 108 },
  { age: "26", year: "2013", messiGoals: 390, ronaldoGoals: 384, messiAssists: 171, ronaldoAssists: 123 },
  { age: "27", year: "2014", messiGoals: 448, ronaldoGoals: 445, messiAssists: 193, ronaldoAssists: 143 },
  { age: "28", year: "2015", messiGoals: 500, ronaldoGoals: 502, messiAssists: 219, ronaldoAssists: 160 },
  { age: "29", year: "2016", messiGoals: 559, ronaldoGoals: 557, messiAssists: 247, ronaldoAssists: 174 },
  { age: "30", year: "2017", messiGoals: 613, ronaldoGoals: 610, messiAssists: 278, ronaldoAssists: 187 },
  { age: "31", year: "2018", messiGoals: 664, ronaldoGoals: 659, messiAssists: 309, ronaldoAssists: 198 },
  { age: "32", year: "2019", messiGoals: 714, ronaldoGoals: 698, messiAssists: 335, ronaldoAssists: 209 },
  { age: "33", year: "2020", messiGoals: 740, ronaldoGoals: 742, messiAssists: 355, ronaldoAssists: 216 },
  { age: "34", year: "2021", messiGoals: 774, ronaldoGoals: 789, messiAssists: 372, ronaldoAssists: 221 },
  { age: "35", year: "2022", messiGoals: 809, ronaldoGoals: 821, messiAssists: 394, ronaldoAssists: 227 },
  { age: "36", year: "2023", messiGoals: 837, ronaldoGoals: 875, messiAssists: 408, ronaldoAssists: 242 },
  { age: "37", year: "2024", messiGoals: 865, ronaldoGoals: 916, messiAssists: 418, ronaldoAssists: 252 },
  { age: "38", year: "2025", messiGoals: 902, ronaldoGoals: 955, messiAssists: 424, ronaldoAssists: 258 },
  { age: "39+", year: "2026", messiGoals: 937, ronaldoGoals: 985, messiAssists: 428, ronaldoAssists: 261 },
];
