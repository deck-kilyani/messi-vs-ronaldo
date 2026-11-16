"use client";

import React, { useState } from "react";
import { H2H_MATCHES, H2H_SUMMARY, H2HMatch } from "@/lib/data/headToHeadData";
import { Swords, Trophy, Calendar, MapPin, Star } from "lucide-react";

export default function HeadToHeadSection() {
  const [filter, setFilter] = useState<string>("All");

  const competitions = ["All", "La Liga", "Champions League", "Copa del Rey", "Supercopa", "Friendly"];

  const filteredMatches = filter === "All"
    ? H2H_MATCHES
    : H2H_MATCHES.filter((m) => m.competition === filter);

  return (
    <section id="head-to-head" className="py-12 border-b"
      style={{
        backgroundColor: "var(--bg-primary)",
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
              <Swords className="w-3.5 h-3.5" /> Direct Clashes
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              Head-to-Head: All 36 Encounters
            </h2>
            <p className="text-sm mt-1 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              Between 2008 and 2023, Messi and Ronaldo faced each other 36 times in club and international football.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-1 p-1 rounded-xl border"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            {competitions.map((comp) => (
              <button
                key={comp}
                onClick={() => setFilter(comp)}
                className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                style={{
                  backgroundColor: filter === comp ? "var(--bg-card-hover)" : "transparent",
                  color: filter === comp ? "var(--text-primary)" : "var(--text-muted)",
                }}
              >
                {comp}
              </button>
            ))}
          </div>
        </div>

        {/* Aggregate Record Summary Bar */}
        <div 
          className="p-6 rounded-3xl border mb-8 shadow-xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <div>
            <span className="text-2xl sm:text-4xl font-black block" style={{ color: "var(--messi-primary)" }}>
              {H2H_SUMMARY.messiWins} Wins
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Messi (22 Goals, 12 Assists)
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-4xl font-black block text-gray-300">
              {H2H_SUMMARY.draws} Draws
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Honours Even
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-4xl font-black block" style={{ color: "var(--ronaldo-primary)" }}>
              {H2H_SUMMARY.ronaldoWins} Wins
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Ronaldo (21 Goals, 1 Assist)
            </span>
          </div>

          <div>
            <span className="text-2xl sm:text-4xl font-black block text-amber-400">
              36 Matches
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
              43 Combined Goals
            </span>
          </div>
        </div>

        {/* Matches List */}
        <div className="space-y-3">
          {filteredMatches.map((m) => {
            const messiWon = m.winner === "messi";
            const ronaldoWon = m.winner === "ronaldo";
            const isDraw = m.winner === "draw";

            return (
              <div
                key={m.id}
                className="p-4 sm:p-5 rounded-2xl border transition-all duration-150 hover:shadow-md"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  
                  {/* Match Info & Teams */}
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-black px-2.5 py-1 rounded-lg border text-gray-400 shrink-0"
                      style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-secondary)" }}
                    >
                      #{m.id}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-extrabold text-sm sm:text-base" style={{ color: "var(--text-primary)" }}>
                          {m.messiTeam} vs {m.ronaldoTeam}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold border"
                          style={{
                            borderColor: "var(--border-subtle)",
                            backgroundColor: "var(--bg-secondary)",
                            color: "var(--text-muted)",
                          }}
                        >
                          {m.competition}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {m.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {m.venue}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Score & Outcome */}
                  <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0">
                    <div className="text-right">
                      <div className="text-base sm:text-lg font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
                        {m.score}
                      </div>
                      <div className="text-[11px] font-semibold">
                        {messiWon && (
                          <span style={{ color: "var(--messi-primary)" }}>Messi Win ★</span>
                        )}
                        {ronaldoWon && (
                          <span style={{ color: "var(--ronaldo-primary)" }}>Ronaldo Win ★</span>
                        )}
                        {isDraw && (
                          <span className="text-gray-400">Draw</span>
                        )}
                      </div>
                    </div>

                    {/* Scorer Pills */}
                    <div className="flex items-center gap-1.5">
                      {m.messiGoals > 0 && (
                        <span className="px-2 py-1 rounded text-xs font-black"
                          style={{ backgroundColor: "var(--messi-bg)", color: "var(--messi-primary)" }}
                          title={`Messi scored ${m.messiGoals} goal(s)`}
                        >
                          M: {m.messiGoals}G
                        </span>
                      )}
                      {m.ronaldoGoals > 0 && (
                        <span className="px-2 py-1 rounded text-xs font-black"
                          style={{ backgroundColor: "var(--ronaldo-bg)", color: "var(--ronaldo-primary)" }}
                          title={`Ronaldo scored ${m.ronaldoGoals} goal(s)`}
                        >
                          R: {m.ronaldoGoals}G
                        </span>
                      )}
                    </div>
                  </div>

                </div>

                {/* Key Moment Callout */}
                {m.keyMoment && (
                  <div className="mt-3 pt-2.5 border-t text-xs font-medium flex items-center gap-1.5"
                    style={{ borderColor: "var(--border-subtle)", color: "var(--accent-gold)" }}
                  >
                    <Star className="w-3.5 h-3.5 fill-current shrink-0" />
                    <span>{m.keyMoment}</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
