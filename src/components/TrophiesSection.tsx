"use client";

import React, { useState } from "react";
import { TROPHIES_DATA, INDIVIDUAL_AWARDS } from "@/lib/data/trophiesData";
import { Trophy, Award, Star } from "lucide-react";

export default function TrophiesSection() {
  const [tab, setTab] = useState<"team" | "individual">("team");

  // Sum total team trophies
  const messiTotalTeam = TROPHIES_DATA.reduce((acc, c) => acc + c.messiTotal, 0);
  const ronaldoTotalTeam = TROPHIES_DATA.reduce((acc, c) => acc + c.ronaldoTotal, 0);

  return (
    <section id="trophies" className="py-12 border-b"
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
              <Trophy className="w-3.5 h-3.5" /> Silverware & Accolades
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              Career Honours & Achievements
            </h2>
            <p className="text-sm mt-1 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              Compare their career cabinet across major team silverware and history-defining individual honours.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="flex items-center gap-1 p-1 rounded-xl border self-start md:self-auto"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <button
              onClick={() => setTab("team")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all"
              style={{
                backgroundColor: tab === "team" ? "var(--bg-card-hover)" : "transparent",
                color: tab === "team" ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              <Trophy className="w-3.5 h-3.5" /> Team Silverware ({messiTotalTeam} vs {ronaldoTotalTeam})
            </button>
            <button
              onClick={() => setTab("individual")}
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold transition-all"
              style={{
                backgroundColor: tab === "individual" ? "var(--bg-card-hover)" : "transparent",
                color: tab === "individual" ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              <Award className="w-3.5 h-3.5" /> Individual Awards
            </button>
          </div>
        </div>

        {/* Tab 1: Team Trophies */}
        {tab === "team" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {TROPHIES_DATA.map((cat) => (
              <div
                key={cat.category}
                className="rounded-3xl border overflow-hidden shadow-lg"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                }}
              >
                {/* Category Header */}
                <div className="px-6 py-4 border-b flex justify-between items-center"
                  style={{
                    backgroundColor: "var(--bg-secondary)",
                    borderColor: "var(--border-subtle)",
                  }}
                >
                  <h3 className="font-extrabold text-sm sm:text-base uppercase tracking-tight" style={{ color: "var(--text-primary)" }}>
                    {cat.category}
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-black">
                    <span style={{ color: "var(--messi-primary)" }}>Messi: {cat.messiTotal}</span>
                    <span className="text-gray-400">vs</span>
                    <span style={{ color: "var(--ronaldo-primary)" }}>Ronaldo: {cat.ronaldoTotal}</span>
                  </div>
                </div>

                {/* Trophy Rows */}
                <div className="divide-y" style={{ borderColor: "var(--border-subtle)" }}>
                  {cat.items.map((item) => {
                    const messiLead = item.messi > item.ronaldo;
                    const ronaldoLead = item.ronaldo > item.messi;

                    return (
                      <div key={item.name} className="px-6 py-3.5 flex items-center justify-between text-xs sm:text-sm">
                        
                        {/* Messi Tally */}
                        <div className="w-16 flex items-center gap-1">
                          <span className="font-black text-base sm:text-lg" style={{ color: "var(--messi-primary)" }}>
                            {item.messi}
                          </span>
                          {messiLead && <Star className="w-3.5 h-3.5 fill-current text-amber-400" />}
                        </div>

                        {/* Trophy Title */}
                        <div className="flex-1 text-center font-semibold px-2" style={{ color: "var(--text-primary)" }}>
                          {item.name}
                        </div>

                        {/* Ronaldo Tally */}
                        <div className="w-16 flex items-center justify-end gap-1">
                          {ronaldoLead && <Star className="w-3.5 h-3.5 fill-current text-amber-400" />}
                          <span className="font-black text-base sm:text-lg" style={{ color: "var(--ronaldo-primary)" }}>
                            {item.ronaldo}
                          </span>
                        </div>

                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Individual Awards */}
        {tab === "individual" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in duration-200">
            {INDIVIDUAL_AWARDS.map((item) => {
              const messiLead = item.messi > item.ronaldo;
              const ronaldoLead = item.ronaldo > item.messi;

              return (
                <div
                  key={item.award}
                  className="p-6 rounded-3xl border shadow-lg flex flex-col justify-between"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400 block mb-1">
                      Honour
                    </span>
                    <h3 className="font-black text-lg mb-4" style={{ color: "var(--text-primary)" }}>
                      {item.award}
                    </h3>

                    {/* Side by side count */}
                    <div className="grid grid-cols-2 gap-3 p-3 rounded-2xl border mb-4 text-center"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        borderColor: "var(--border-subtle)",
                      }}
                    >
                      <div>
                        <span className="text-xs font-bold block" style={{ color: "var(--messi-primary)" }}>Messi</span>
                        <div className="flex items-center justify-center gap-1 mt-0.5">
                          <span className="text-2xl font-black" style={{ color: "var(--messi-primary)" }}>
                            {item.messi}
                          </span>
                          {messiLead && <Star className="w-3.5 h-3.5 fill-current text-amber-400" />}
                        </div>
                      </div>
                      <div>
                        <span className="text-xs font-bold block" style={{ color: "var(--ronaldo-primary)" }}>Ronaldo</span>
                        <div className="flex items-center justify-center gap-1 mt-0.5">
                          <span className="text-2xl font-black" style={{ color: "var(--ronaldo-primary)" }}>
                            {item.ronaldo}
                          </span>
                          {ronaldoLead && <Star className="w-3.5 h-3.5 fill-current text-amber-400" />}
                        </div>
                      </div>
                    </div>

                    {/* Detailed Notes */}
                    <div className="space-y-1.5 text-xs text-gray-400">
                      <div>
                        <strong className="text-gray-300">Messi: </strong> {item.messiYears}
                      </div>
                      <div>
                        <strong className="text-gray-300">Ronaldo: </strong> {item.ronaldoYears}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
