export interface TrophyCategory {
  category: string;
  messiTotal: number;
  ronaldoTotal: number;
  items: {
    name: string;
    messi: number;
    ronaldo: number;
    icon?: string;
  }[];
}

export const TROPHIES_DATA: TrophyCategory[] = [
  {
    category: "Major International Trophies",
    messiTotal: 6,
    ronaldoTotal: 3,
    items: [
      { name: "FIFA World Cup", messi: 1, ronaldo: 0 },
      { name: "Copa América / UEFA European Championship", messi: 2, ronaldo: 1 },
      { name: "Finalissima / UEFA Nations League", messi: 1, ronaldo: 2 },
      { name: "Olympic Gold Medal", messi: 1, ronaldo: 0 },
      { name: "FIFA U-20 World Cup", messi: 1, ronaldo: 0 },
    ],
  },
  {
    category: "Major Club Competitions",
    messiTotal: 31,
    ronaldoTotal: 25,
    items: [
      { name: "UEFA Champions League", messi: 4, ronaldo: 5 },
      { name: "Domestic League Titles (La Liga, EPL, Serie A, Ligue 1)", messi: 12, ronaldo: 7 },
      { name: "FIFA Club World Cup", messi: 3, ronaldo: 4 },
      { name: "UEFA Super Cup", messi: 3, ronaldo: 3 },
      { name: "Primary Domestic Cups (Copa del Rey, FA Cup, Coppa Italia)", messi: 7, ronaldo: 4 },
      { name: "League Cups (EFL Cup, Coupe de la Ligue)", messi: 0, ronaldo: 2 },
    ],
  },
  {
    category: "Supercups & Other Club Trophies",
    messiTotal: 12,
    ronaldoTotal: 9,
    items: [
      { name: "Domestic Super Cups (Supercopa, Community Shield, etc.)", messi: 9, ronaldo: 7 },
      { name: "Supporters' Shield (MLS) / Arab Club Champions Cup", messi: 1, ronaldo: 1 },
      { name: "Leagues Cup", messi: 1, ronaldo: 0 },
      { name: "Portuguese Supercup", messi: 0, ronaldo: 1 },
    ],
  },
];

export const INDIVIDUAL_AWARDS = [
  {
    award: "Ballon d'Or",
    messi: 8,
    ronaldo: 5,
    messiYears: "2009, 2010, 2011, 2012, 2015, 2019, 2021, 2023",
    ronaldoYears: "2008, 2013, 2014, 2016, 2017",
  },
  {
    award: "Ballon d'Or Podium Finishes (Top 3)",
    messi: 14,
    ronaldo: 12,
    messiYears: "Record 14 appearances in top 3",
    ronaldoYears: "12 appearances in top 3",
  },
  {
    award: "FIFA The Best / World Player of the Year",
    messi: 8,
    ronaldo: 5,
    messiYears: "2009, 2019, 2022, 2023 (+ 4 FIFA Ballon d'Or)",
    ronaldoYears: "2008, 2016, 2017 (+ 2 FIFA Ballon d'Or)",
  },
  {
    award: "European Golden Shoe",
    messi: 6,
    ronaldo: 4,
    messiYears: "Record 50 goals (2012), 46 goals (2013)",
    ronaldoYears: "48 goals (2015), 40 goals (2011)",
  },
  {
    award: "World Cup Golden Ball (Player of the Tournament)",
    messi: 2,
    ronaldo: 0,
    messiYears: "2014, 2022 (Only player in history with 2)",
    ronaldoYears: "None",
  },
  {
    award: "Continental Tournament Best Player",
    messi: 2,
    ronaldo: 0,
    messiYears: "Copa América 2015, 2021",
    ronaldoYears: "Euro 2016 Silver Boot / 2020 Golden Boot",
  },
  {
    award: "UEFA Best Player in Europe",
    messi: 3,
    ronaldo: 4,
    messiYears: "2009, 2011, 2015",
    ronaldoYears: "2008, 2014, 2016, 2017",
  },
  {
    award: "FIFA Puskás Award (Best Goal)",
    messi: 0,
    ronaldo: 1,
    messiYears: "7 nominations (record), 0 wins",
    ronaldoYears: "2009 (vs Porto 40-yard screamer)",
  },
  {
    award: "League Top Scorer (Pichichi / Golden Boot)",
    messi: 8,
    ronaldo: 5,
    messiYears: "8x La Liga Pichichi (Record)",
    ronaldoYears: "1x Premier League, 3x La Liga, 1x Serie A",
  },
];
