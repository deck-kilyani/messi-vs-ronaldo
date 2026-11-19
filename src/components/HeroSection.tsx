"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Trophy, Flame, Swords, BarChart3, Star, Sparkles } from "lucide-react";
import { DynamicStatsPayload } from "@/lib/api/football-api";

interface HeroSectionProps {
  stats?: DynamicStatsPayload;
}

export default function HeroSection({ stats }: HeroSectionProps) {
  const { theme, setTheme } = useTheme();

  const messiGoals = stats?.messi.goals ?? 937;
  const messiAssists = stats?.messi.assists ?? 428;
  const messiApps = stats?.messi.apps ?? 1185;
  const messiMinsPerGoal = stats?.messi.minsPerGoal ?? 104;
  const messiRatio = messiApps > 0 ? (messiGoals / messiApps).toFixed(2) : "0.79";

  const ronaldoGoals = stats?.ronaldo.goals ?? 985;
  const ronaldoAssists = stats?.ronaldo.assists ?? 261;
  const ronaldoApps = stats?.ronaldo.apps ?? 1343;
  const ronaldoMinsPerGoal = stats?.ronaldo.minsPerGoal ?? 111;
  const ronaldoRatio = ronaldoApps > 0 ? (ronaldoGoals / ronaldoApps).toFixed(2) : "0.73";

  const isLiveConnected = stats?.apiConnected ?? false;

  return (
    <div className="relative pt-8 pb-12 overflow-hidden border-b transition-colors duration-200"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--messi-primary)" }}
      />
      <div 
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--ronaldo-primary)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6 border shadow-sm"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
            color: "var(--text-secondary)",
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {isLiveConnected
              ? "Live Automated Sync Active · API-Sports Feed"
              : "Automated API Ready · Verified All-Time Archive"}
          </span>
        </div>

        {/* Grand Title */}
        <h1 className="text-4xl sm:text-7xl font-black tracking-tight mb-4 leading-none">
          <span style={{ color: "var(--messi-primary)" }} className="drop-shadow-sm">
            MESSI
          </span>
          <span className="text-gray-400 mx-3 sm:mx-6 text-2xl sm:text-5xl font-light">
            vs
          </span>
          <span style={{ color: "var(--ronaldo-primary)" }} className="drop-shadow-sm">
            RONALDO
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-lg mb-8" style={{ color: "var(--text-secondary)" }}>
          The ultimate data-driven head-to-head comparison. Exploring 2,000+ career goals, 600+ assists, 86 trophies, and 36 direct clashes.
        </p>

        {/* Dual Hero Cards Summary */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          
          {/* Messi Card */}
          <div 
            className="p-6 rounded-3xl border shadow-xl relative overflow-hidden text-left"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded"
                  style={{ backgroundColor: "var(--messi-bg)", color: "var(--messi-primary)" }}
                >
                  Argentina & Inter Miami
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-1" style={{ color: "var(--text-primary)" }}>
                  Lionel Messi
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-gray-400 block">World Champion</span>
                <span className="text-sm font-black text-amber-400">8x Ballon d&apos;Or</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center p-3 rounded-2xl border"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div>
                <span className="text-xl sm:text-2xl font-black block" style={{ color: "var(--messi-primary)" }}>
                  {messiGoals}
                </span>
                <span className="text-[10px] font-bold uppercase text-gray-400">Goals</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black block" style={{ color: "var(--messi-primary)" }}>
                  {messiAssists}
                </span>
                <span className="text-[10px] font-bold uppercase text-gray-400">Assists</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black block" style={{ color: "var(--messi-primary)" }}>
                  49
                </span>
                <span className="text-[10px] font-bold uppercase text-gray-400">Trophies</span>
              </div>
            </div>

            <div className="mt-3 flex justify-between text-xs text-gray-400 font-medium">
              <span>Ratio: <strong>{messiRatio}</strong> goals/game</span>
              <span>Min/Goal: <strong>{messiMinsPerGoal} mins</strong></span>
            </div>
          </div>

          {/* Ronaldo Card */}
          <div 
            className="p-6 rounded-3xl border shadow-xl relative overflow-hidden text-left"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded"
                  style={{ backgroundColor: "var(--ronaldo-bg)", color: "var(--ronaldo-primary)" }}
                >
                  Portugal & Al-Nassr
                </span>
                <h3 className="text-2xl sm:text-3xl font-black mt-1" style={{ color: "var(--text-primary)" }}>
                  Cristiano Ronaldo
                </h3>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-gray-400 block">All-Time Top Scorer</span>
                <span className="text-sm font-black text-amber-400">5x Ballon d&apos;Or</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-center p-3 rounded-2xl border"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div>
                <span className="text-xl sm:text-2xl font-black block" style={{ color: "var(--ronaldo-primary)" }}>
                  {ronaldoGoals}
                </span>
                <span className="text-[10px] font-bold uppercase text-gray-400">Goals</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black block" style={{ color: "var(--ronaldo-primary)" }}>
                  {ronaldoAssists}
                </span>
                <span className="text-[10px] font-bold uppercase text-gray-400">Assists</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black block" style={{ color: "var(--ronaldo-primary)" }}>
                  37
                </span>
                <span className="text-[10px] font-bold uppercase text-gray-400">Trophies</span>
              </div>
            </div>

            <div className="mt-3 flex justify-between text-xs text-gray-400 font-medium">
              <span>Ratio: <strong>{ronaldoRatio}</strong> goals/game</span>
              <span>Min/Goal: <strong>{ronaldoMinsPerGoal} mins</strong></span>
            </div>
          </div>

        </div>

        {/* Quick Jump Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-bold">
          <a
            href="#countdown"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border shadow-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Race to 1,000</span>
          </a>

          <a
            href="#head-to-head"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border shadow-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <Swords className="w-3.5 h-3.5 text-red-400" />
            <span>36 Direct Clashes</span>
          </a>

          <a
            href="#progression"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border shadow-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <BarChart3 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Progression Timeline</span>
          </a>

          <a
            href="#trophies"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border shadow-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span>Trophy Cabinet</span>
          </a>

          <a
            href="#editorial"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl border shadow-sm transition-all hover:scale-105"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
              color: "var(--text-primary)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>The GOAT Debate</span>
          </a>
        </div>

      </div>
    </div>
  );
}
