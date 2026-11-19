"use client";

import React, { useState } from "react";
import { COUNTDOWN_DATA, MilestoneProjection } from "@/lib/data/countdownData";
import { Flame, Target, Calendar, User, Zap } from "lucide-react";

interface Countdown1000Props {
  countdown?: typeof COUNTDOWN_DATA;
}

export default function Countdown1000({ countdown }: Countdown1000Props) {
  const [selectedPace, setSelectedPace] = useState<"career" | "season" | "last365">("season");
  const data = countdown || COUNTDOWN_DATA;
  const { messi, ronaldo, target, projections } = data;

  const currentProjection: MilestoneProjection = 
    projections.find((p) => p.paceType === selectedPace) || projections[0];

  return (
    <section id="countdown" className="py-12 border-y"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 border shadow-sm"
              style={{
                backgroundColor: "rgba(234, 179, 8, 0.15)",
                borderColor: "rgba(234, 179, 8, 0.3)",
                color: "var(--accent-gold)",
              }}
            >
              <Flame className="w-3.5 h-3.5 animate-pulse" /> Historic Milestone Tracker
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              The Race to 1,000 Career Goals
            </h2>
            <p className="text-sm mt-1 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              No male footballer in modern verified professional history has reached 1,000 official competitive goals. Track both titans as they close in on football immortality.
            </p>
          </div>

          {/* Pace Toggle Buttons */}
          <div className="flex items-center gap-1 p-1 rounded-xl border self-start md:self-auto"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <span className="text-xs font-bold px-2 py-1 text-gray-400 hidden sm:inline">Pace Model:</span>
            {(["season", "last365", "career"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedPace(type)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-150 capitalize"
                style={{
                  backgroundColor: selectedPace === type ? "var(--bg-card-hover)" : "transparent",
                  color: selectedPace === type ? "var(--text-primary)" : "var(--text-muted)",
                  boxShadow: selectedPace === type ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
                }}
              >
                {type === "season" ? "Season Pace" : type === "last365" ? "365-Day Pace" : "Career Pace"}
              </button>
            ))}
          </div>
        </div>

        {/* Big Dual Tracker Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Messi 1,000 Tracker */}
          <div 
            className="p-6 sm:p-8 rounded-3xl border relative overflow-hidden shadow-xl"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: "var(--messi-primary)" }} />

            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{ backgroundColor: "var(--messi-bg)", color: "var(--messi-primary)" }}
                >
                  Lionel Messi
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-6xl font-black tracking-tight" style={{ color: "var(--messi-primary)" }}>
                    {messi.goals}
                  </span>
                  <span className="text-sm font-bold text-gray-400">/ {target} Goals</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-black block" style={{ color: "var(--accent-gold)" }}>
                  {messi.needed}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Goals Needed</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold mb-2" style={{ color: "var(--text-secondary)" }}>
                <span>Progress: {messi.percentComplete}%</span>
                <span>{messi.goals} scored</span>
              </div>
              <div className="h-4 w-full rounded-full bg-black/25 overflow-hidden p-0.5 border" style={{ borderColor: "var(--border-subtle)" }}>
                <div 
                  className="h-full rounded-full transition-all duration-1000 relative"
                  style={{ width: `${messi.percentComplete}%`, backgroundColor: "var(--messi-primary)" }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Projected Milestone Box */}
            <div 
              className="p-4 rounded-2xl border grid grid-cols-2 gap-4 text-xs"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                <div>
                  <span className="block text-gray-400 font-medium">Estimated Date</span>
                  <span className="font-extrabold text-sm" style={{ color: "var(--text-primary)" }}>
                    {currentProjection.messiProjectedDate}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-gray-400 shrink-0" />
                <div>
                  <span className="block text-gray-400 font-medium">Projected Age</span>
                  <span className="font-extrabold text-sm" style={{ color: "var(--text-primary)" }}>
                    {currentProjection.messiProjectedAge}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 text-[11px] text-center text-gray-400">
              Needs approx. <span className="font-bold text-amber-400">{currentProjection.messiGamesNeeded} games</span> at selected pace
            </div>
          </div>

          {/* Ronaldo 1,000 Tracker */}
          <div 
            className="p-6 sm:p-8 rounded-3xl border relative overflow-hidden shadow-xl"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="absolute top-0 left-0 right-0 h-1.5" style={{ backgroundColor: "var(--ronaldo-primary)" }} />

            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded"
                  style={{ backgroundColor: "var(--ronaldo-bg)", color: "var(--ronaldo-primary)" }}
                >
                  Cristiano Ronaldo
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-6xl font-black tracking-tight" style={{ color: "var(--ronaldo-primary)" }}>
                    {ronaldo.goals}
                  </span>
                  <span className="text-sm font-bold text-gray-400">/ {target} Goals</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-black block text-emerald-400">
                  {ronaldo.needed}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Goals Needed</span>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-bold mb-2" style={{ color: "var(--text-secondary)" }}>
                <span>Progress: {ronaldo.percentComplete}%</span>
                <span>{ronaldo.goals} scored</span>
              </div>
              <div className="h-4 w-full rounded-full bg-black/25 overflow-hidden p-0.5 border" style={{ borderColor: "var(--border-subtle)" }}>
                <div 
                  className="h-full rounded-full transition-all duration-1000 relative"
                  style={{ width: `${ronaldo.percentComplete}%`, backgroundColor: "var(--ronaldo-primary)" }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/40 rounded-full animate-pulse" />
                </div>
              </div>
            </div>

            {/* Projected Milestone Box */}
            <div 
              className="p-4 rounded-2xl border grid grid-cols-2 gap-4 text-xs"
              style={{
                backgroundColor: "var(--bg-secondary)",
                borderColor: "var(--border-subtle)",
              }}
            >
              <div className="flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-gray-400 shrink-0" />
                <div>
                  <span className="block text-gray-400 font-medium">Estimated Date</span>
                  <span className="font-extrabold text-sm" style={{ color: "var(--text-primary)" }}>
                    {currentProjection.ronaldoProjectedDate}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <User className="w-4 h-4 text-gray-400 shrink-0" />
                <div>
                  <span className="block text-gray-400 font-medium">Projected Age</span>
                  <span className="font-extrabold text-sm" style={{ color: "var(--text-primary)" }}>
                    {currentProjection.ronaldoProjectedAge}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 text-[11px] text-center text-gray-400">
              Needs approx. <span className="font-bold text-emerald-400">{currentProjection.ronaldoGamesNeeded} games</span> at selected pace (Only {ronaldo.needed} to go!)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
