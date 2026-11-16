"use client";

import React, { useState } from "react";
import { GOALS_MINUTES_BINGO, MinuteStat } from "@/lib/data/bingoData";
import { Grid, Info } from "lucide-react";

export default function GoalsBingo() {
  const [selectedMinute, setSelectedMinute] = useState<MinuteStat | null>(null);

  // Stats
  const bothScoredMinutes = GOALS_MINUTES_BINGO.filter((m) => m.messi && m.ronaldo).length;
  const messiTotalMinutes = GOALS_MINUTES_BINGO.filter((m) => m.messi).length;
  const ronaldoTotalMinutes = GOALS_MINUTES_BINGO.filter((m) => m.ronaldo).length;

  return (
    <section id="goals-bingo" className="py-12 border-b"
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
              <Grid className="w-3.5 h-3.5" /> 90-Minute Match Matrix
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              The Goals Minutes Bingo
            </h2>
            <p className="text-sm mt-1 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              Have they scored in every single minute of regular football? Ronaldo has unlocked all 90 minutes. Messi has scored in 88 out of 90 minutes (all except 1st & 2nd minute).
            </p>
          </div>

          {/* Color Legend */}
          <div className="flex flex-wrap items-center gap-3 p-2.5 rounded-2xl border text-xs font-semibold"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-amber-400 shadow-sm" />
              <span style={{ color: "var(--text-primary)" }}>Both Scored ({bothScoredMinutes})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded" style={{ backgroundColor: "var(--messi-primary)" }} />
              <span style={{ color: "var(--text-primary)" }}>Messi Only</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded" style={{ backgroundColor: "var(--ronaldo-primary)" }} />
              <span style={{ color: "var(--text-primary)" }}>Ronaldo Only</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3.5 h-3.5 rounded bg-gray-600/30 border border-gray-600/40" />
              <span className="text-gray-400">Neither</span>
            </div>
          </div>
        </div>

        {/* 90-Minute Grid */}
        <div 
          className="p-6 sm:p-8 rounded-3xl border shadow-xl"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 lg:grid-cols-18 gap-1.5 sm:gap-2">
            {GOALS_MINUTES_BINGO.map((item) => {
              const both = item.messi && item.ronaldo;
              const onlyMessi = item.messi && !item.ronaldo;
              const onlyRonaldo = !item.messi && item.ronaldo;

              let cellBg = "rgba(100, 116, 139, 0.2)";
              let textColor = "#94a3b8";

              if (both) {
                cellBg = "rgba(234, 179, 8, 0.85)";
                textColor = "#000000";
              } else if (onlyMessi) {
                cellBg = "var(--messi-primary)";
                textColor = "#ffffff";
              } else if (onlyRonaldo) {
                cellBg = "var(--ronaldo-primary)";
                textColor = "#ffffff";
              }

              return (
                <button
                  key={item.minute}
                  onClick={() => setSelectedMinute(item)}
                  onMouseEnter={() => setSelectedMinute(item)}
                  className="aspect-square rounded-lg flex flex-col items-center justify-center font-black text-xs transition-all duration-150 hover:scale-110 hover:shadow-lg focus:outline-none"
                  style={{
                    backgroundColor: cellBg,
                    color: textColor,
                  }}
                  title={`Minute ${item.minute}': Messi ${item.messiGoalsCount} goals, Ronaldo ${item.ronaldoGoalsCount} goals`}
                >
                  <span>{item.minute}&apos;</span>
                </button>
              );
            })}
          </div>

          {/* Interactive Inspection Details Bar */}
          <div className="mt-6 pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-3"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            {selectedMinute ? (
              <div className="flex items-center gap-3 text-xs">
                <span className="px-2.5 py-1 rounded-lg font-black text-sm bg-amber-400 text-black">
                  Minute {selectedMinute.minute}&apos;
                </span>
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  Messi: <strong style={{ color: "var(--messi-primary)" }}>{selectedMinute.messiGoalsCount} goals</strong>
                </span>
                <span className="text-gray-400">|</span>
                <span className="font-semibold" style={{ color: "var(--text-primary)" }}>
                  Ronaldo: <strong style={{ color: "var(--ronaldo-primary)" }}>{selectedMinute.ronaldoGoalsCount} goals</strong>
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <Info className="w-4 h-4" />
                <span>Hover over or click any minute block to see goal counts.</span>
              </div>
            )}

            <div className="text-xs font-semibold text-gray-400">
              Ronaldo: <strong className="text-emerald-400">{ronaldoTotalMinutes}/90 mins</strong> · Messi: <strong className="text-amber-400">{messiTotalMinutes}/90 mins</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
