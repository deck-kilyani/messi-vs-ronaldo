# 🏆 Messi vs Ronaldo — The Definitive Comparison Dashboard

A modern, high-performance football statistics web application comparing Lionel Messi and Cristiano Ronaldo, inspired by [messivsronaldo.app](https://www.messivsronaldo.app/) but featuring a completely redesigned UI, multiple switchable color themes, and responsive data visualizations.

---

## ✨ Features

- **🎨 3 Switchable Color Themes**:
  - **Purple & Amber** *(Default Luxury Dark)*: Royal purple for Messi (`#8B5CF6`) and amber gold for Ronaldo (`#F59E0B`).
  - **Clean White & Dual Bold** *(Light Mode)*: Crisp slate background with royal blue for Messi (`#2563EB`) and crimson red for Ronaldo (`#DC2626`).
  - **Neon Sports Dark** *(Cyber Sports)*: Pitch black void (`#05070A`) with electric cyan (`#06B6D4`) and neon orange (`#F97316`).
- **🎯 1,000 Goals Race Tracker**:
  - Live progress bars toward 1,000 official career goals.
  - Interactive **Pace Model Selector** (*Current Season Pace*, *Last 365 Days Pace*, *Career Pace*).
  - Dynamic milestone predictions with projected completion dates and player ages.
- **📊 Macro Career Comparisons**:
  - 9 competition tiers: *All-Time Career, European Era, All-Time Club, European Club, Domestic Leagues, UEFA Champions League, All-Time Internationals, FIFA World Cup, and Continental Cups (Copa América vs UEFA Euros)*.
  - Symmetrical two-column comparison cards with dual-colored visual proportion bars and gold leader badges (★).
- **📈 Cumulative Progression Line Chart**:
  - Interactive Recharts timeline charting goals and assists trajectories from 2005 to 2026.
  - Highlighting historic milestones like Messi's 91-goal world record in 2012.
- **⚔️ All 36 Direct Clashes (Head-to-Head)**:
  - 16 Messi wins, 11 Ronaldo wins, 9 draws (43 combined goals).
  - Filterable by tournament: *All, La Liga, Champions League, Copa del Rey, Supercopa, Friendlies*.
- **🕸️ 360° Skill Matrix Radar & Specialist Metrics**:
  - 6-pillar Radar comparison (*Finishing, Playmaking, Dribbling, Free Kicks, Heading, Penalties*).
  - 10 specialist metric cards covering free kicks, penalty conversion, hat-tricks, key passes, dribbles, and aerial dominance.
- **🔲 90-Minute Goals Bingo**:
  - Interactive 1–90 minute match matrix grid showing Ronaldo's 90/90 completion vs Messi's 88/90 (unlocked all except 1st & 2nd minutes).
- **🏆 Career Silverware & Accolades**:
  - Major team trophies (49 vs 37) and individual awards (Ballon d'Or, Golden Shoes, The Best, Pichichi).
- **⚖️ Category-by-Category Editorial Debates**:
  - 7 comprehensive analytical chapters with comparative stats and verdict tags.
- **🗳️ Live Community Consensus Poll**:
  - Interactive voting widget with instant percentage recalculation and local persistence.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 / 16 (App Router)](https://nextjs.org) with React 19
- **Language**: TypeScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com) with CSS custom property theming
- **Charts**: [Recharts](https://recharts.org) (Responsive Line & Radar Charts)
- **Icons**: [Lucide React](https://lucide.dev)
- **Deployment**: [Vercel](https://vercel.com)

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or 20+
- pnpm (`npm install -g pnpm`)

### Installation

```bash
# Clone the repository
git clone https://github.com/deck-kilyani/messi-vs-ronaldo.git
cd messi-vs-ronaldo

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the application.

### Production Build

```bash
# Build the optimized production bundle
pnpm build

# Start the production server
pnpm start
```

---

## 🌐 Deploy to Vercel

The easiest way to deploy this application is using the [Vercel Platform](https://vercel.com):

1. Push your changes to GitHub.
2. Import the repository in the [Vercel Dashboard](https://vercel.com/new).
3. Vercel automatically detects Next.js and configures the build settings (`pnpm build`).
4. Click **Deploy**!

Alternatively, deploy directly from the CLI:
```bash
vercel --prod
```

---

## 📄 License

MIT License. Statistics compiled from official FIFA, UEFA, CONMEBOL, and Opta records for informational and educational purposes.
