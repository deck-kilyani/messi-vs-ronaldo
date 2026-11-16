export interface ArticleSection {
  id: string;
  title: string;
  tagline: string;
  verdict: "messi" | "ronaldo" | "tie";
  verdictLabel: string;
  content: string[];
  keyStats: {
    label: string;
    messi: string;
    ronaldo: string;
    advantage: "messi" | "ronaldo" | "equal";
  }[];
}

export const EDITORIAL_SECTIONS: ArticleSection[] = [
  {
    id: "scoring",
    title: "Who Scores More Goals?",
    tagline: "Total volume vs relentless minutes-per-goal efficiency",
    verdict: "tie",
    verdictLabel: "Extremely Close / Tie",
    content: [
      "What made this rivalry legendary was unprecedented goalscoring rates, with both players averaging over a goal every game at their peaks. During the 9 seasons Ronaldo spent in Spain (2009–2018), Messi and Ronaldo both scored a goal every 84–85 minutes across all competitions.",
      "Over their entire careers, Messi holds the edge in efficiency: 0.79 goals per game (every 104 minutes), compared to Ronaldo's 0.73 goals per game (every 111 minutes).",
      "However, Ronaldo holds the all-time official career goal lead with 985 goals compared to Messi's 937 goals. Because Ronaldo spent his formative 2003-2006 years playing as a traditional winger at Sporting and Manchester United before mutating into an elite goal machine, while Messi started closer to goal as a false nine earlier, their peak scoring levels remain virtually neck-and-neck.",
    ],
    keyStats: [
      { label: "Career Goals", messi: "937", ronaldo: "985", advantage: "ronaldo" },
      { label: "Goals Per Game", messi: "0.79", ronaldo: "0.73", advantage: "messi" },
      { label: "Minutes Per Goal", messi: "104 min", ronaldo: "111 min", advantage: "messi" },
      { label: "Record Year", messi: "91 goals (2012)", ronaldo: "69 goals (2013)", advantage: "messi" },
    ],
  },
  {
    id: "assists",
    title: "Who Provides More Assists & Playmaking?",
    tagline: "The statistical chasm in creative orchestration",
    verdict: "messi",
    verdictLabel: "Clear Messi Advantage",
    content: [
      "When it comes to assists and playmaking, Lionel Messi stands in a tier of his own among historical goalscorers. Messi has accumulated an astonishing 428 official assists in 1,185 matches, dwarfing Ronaldo's 261 assists in 1,343 appearances.",
      "Beyond raw assists, Messi's progressive passing, through balls (551 vs 89), and key chances created (2,151 vs 1,320) highlight his complete dual identity as both an elite No. 10 playmaker and an all-time No. 9 finisher.",
      "Ronaldo's playmaking is often unfairly dismissed—he holds 41 UEFA Champions League assists (one more than Messi)—yet over their full body of work, Messi's playmaking gravity is unmatched in football history.",
    ],
    keyStats: [
      { label: "Total Career Assists", messi: "428", ronaldo: "261", advantage: "messi" },
      { label: "Minutes Per Assist", messi: "228 min", ronaldo: "419 min", advantage: "messi" },
      { label: "Key Passes", messi: "2,151", ronaldo: "1,320", advantage: "messi" },
      { label: "Through Balls", messi: "551", ronaldo: "89", advantage: "messi" },
    ],
  },
  {
    id: "dribbling",
    title: "Who's the Better Dribbler & 1v1 Specialist?",
    tagline: "Solo progression, ball retention and beating defenders",
    verdict: "messi",
    verdictLabel: "Decisive Messi Advantage",
    content: [
      "Ronaldo launched his career at Manchester United as a dazzling touchline trickster known for stepovers and explosive bursts of pace. As he matured and adapted to knee and tendon injuries around 2014, he transformed into an off-the-ball predator and box technician.",
      "Messi's low center of gravity, rapid micro-touches, and supernatural body feints allowed him to remain the most devastating dribbler in world football well into his late thirties. In games tracked by Opta, Messi completed 4,110 successful dribbles compared to Ronaldo's 1,963.",
      "Messi frequently completed 10+ dribbles in high-stakes Champions League knockout matches (including 16 against Manchester United in 2008 and 11 against Bayern Munich in 2015).",
    ],
    keyStats: [
      { label: "Successful Dribbles", messi: "4,110", ronaldo: "1,963", advantage: "messi" },
      { label: "Dribble Success Rate", messi: "62.4%", ronaldo: "47.1%", advantage: "messi" },
    ],
  },
  {
    id: "heading",
    title: "Who Rules the Skies & Heading?",
    tagline: "Aerial supremacy, jumping reach and box power",
    verdict: "ronaldo",
    verdictLabel: "Decisive Ronaldo Advantage",
    content: [
      "This is arguably the most one-sided category in the entire debate. Cristiano Ronaldo is broadly regarded as the greatest aerial forward in football history.",
      "With a documented vertical jump exceeding 78 cm (higher than the average NBA player) and superhuman neck musculature, Ronaldo has scored an astonishing 160 official headed goals in his career, compared to Messi's 32.",
      "Ronaldo has also won over 1,075 aerial duels in tracked domestic and continental matches, compared to Messi's 173.",
    ],
    keyStats: [
      { label: "Career Headed Goals", messi: "32", ronaldo: "160", advantage: "ronaldo" },
      { label: "Aerial Duels Won", messi: "173", ronaldo: "1,075", advantage: "ronaldo" },
      { label: "Vertical Jump Record", messi: "~58 cm", ronaldo: "78+ cm", advantage: "ronaldo" },
    ],
  },
  {
    id: "freekicks",
    title: "Who Is the Free Kick Master?",
    tagline: "The dramatic shift from Ronaldo's knuckleballs to Messi's precision curls",
    verdict: "messi",
    verdictLabel: "Messi Advantage",
    content: [
      "Between 2007 and 2012, Cristiano Ronaldo dominated free kicks worldwide with his trademark knuckleball technique, racking up 30+ free-kick goals while Messi had barely scored three.",
      "Between 2014 and 2021, however, Messi engineered one of the most stunning technical turnarounds in sport. Messi went on a historic streak scoring 23 free kicks in a 3-year window while Ronaldo's conversion cooled.",
      "Today, Messi leads the career tally with 76 direct free kicks to Ronaldo's 65, and possesses an overall conversion percentage (~8.9%) significantly higher than Ronaldo's (~6.2%).",
    ],
    keyStats: [
      { label: "Direct Free Kicks", messi: "76", ronaldo: "65", advantage: "messi" },
      { label: "Peak Free-Kick Years", messi: "2015–2019 (28 goals)", ronaldo: "2008–2012 (24 goals)", advantage: "messi" },
      { label: "Conversion Rate", messi: "8.9%", ronaldo: "6.2%", advantage: "messi" },
    ],
  },
  {
    id: "penalties",
    title: "Who Has the Cooler Nerves from the Spot?",
    tagline: "Penalty volume, shootout records and ice-cold conversion",
    verdict: "ronaldo",
    verdictLabel: "Ronaldo Advantage",
    content: [
      "Cristiano Ronaldo's moniker 'Penaldo' emerged as banter, but in reality, his penalty numbers reflect supreme psychological composure under maximum pressure.",
      "Ronaldo has converted 184 penalties out of 221 attempts (83.3% conversion rate). Messi has scored 115 penalties out of 150 attempts (76.7% conversion rate).",
      "While Messi scored all 4 pressure penalties in regular time during Argentina's 2022 World Cup triumph, Ronaldo's career volume and higher conversion rate give him the edge here.",
    ],
    keyStats: [
      { label: "Penalties Scored", messi: "115", ronaldo: "184", advantage: "ronaldo" },
      { label: "Penalties Missed", messi: "35", ronaldo: "37", advantage: "ronaldo" },
      { label: "Conversion Rate", messi: "76.7%", ronaldo: "83.3%", advantage: "ronaldo" },
    ],
  },
  {
    id: "international",
    title: "International Legacy: World Cup vs Nations Top Scorer",
    tagline: "Argentina's crowning glory vs Portugal's historic breakthrough",
    verdict: "messi",
    verdictLabel: "Messi Advantage",
    content: [
      "Both players revolutionized their respective national teams. Ronaldo is the all-time leading goalscorer in international football history (146 goals in 234 caps) and led Portugal to their historic first two senior trophies: UEFA Euro 2016 and UEFA Nations League 2019.",
      "However, Lionel Messi's international legacy culminated in football immortality. After losing 4 major finals, Messi captained Argentina to Copa América 2021, Finalissima 2022, and the crowning triumph at Qatar 2022 World Cup where he won the Golden Ball (scoring in every knockout round).",
      "Messi followed this by winning Copa América 2024, cementing Argentina as only the second nation in men's history to win three consecutive major tournaments with a World Cup.",
    ],
    keyStats: [
      { label: "International Goals", messi: "126", ronaldo: "146", advantage: "ronaldo" },
      { label: "World Cup Trophies", messi: "1 (2022)", ronaldo: "0", advantage: "messi" },
      { label: "World Cup Golden Balls", messi: "2 (2014, 2022)", ronaldo: "0", advantage: "messi" },
      { label: "Continental Trophies", messi: "2x Copa América", ronaldo: "1x Euro", advantage: "messi" },
    ],
  },
];
