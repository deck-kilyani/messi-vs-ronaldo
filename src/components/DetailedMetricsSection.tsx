"use client";

import React from "react";
import { DETAILED_METRICS } from "@/lib/data/statsData";
import { Sparkles, Star } from "lucide-react";
import RadarComparison from "./RadarComparison";

export default function DetailedMetricsSection() {
  return (
    <section id="detailed-stats" className="py-12 border-b"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 border shadow-sm"
            style={{
              backgroundColor: "rgba(139, 92, 246, 0.12)",
              borderColor: "rgba(139, 92, 246, 0.3)",
              color: "var(--messi-primary)",
            }}
          >
            <Sparkles className="w-3.5 h-3.5" /> Deep Statistical Breakdown
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            Specialist Metrics & Advanced Numbers
          </h2>
          <p className="text-sm mt-1 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            Beyond headline goals and assists: free kicks, penalties, hat-trick cadence, playmaking volume, aerial dominance, and shot conversion.
          </p>
        </div>

        {/* Grid containing Radar Chart and Metric Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Radar Chart (1 Col) */}
          <div className="lg:col-span-1">
            <RadarComparison />
          </div>

          {/* Detailed Metric Cards (2 Cols) */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DETAILED_METRICS.map((metric) => {
              const isMessiBetter = metric.better === "messi";
              const isRonaldoBetter = metric.better === "ronaldo";

              return (
                <div
                  key={metric.title}
                  className="p-5 rounded-2xl border transition-all duration-150 hover:shadow-md flex flex-col justify-between"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border"
                        style={{
                          backgroundColor: "var(--bg-secondary)",
                          borderColor: "var(--border-subtle)",
                          color: "var(--text-muted)",
                        }}
                      >
                        {metric.category}
                      </span>
                    </div>

                    <h4 className="font-extrabold text-sm sm:text-base mb-3" style={{ color: "var(--text-primary)" }}>
                      {metric.title}
                    </h4>

                    {/* Side-by-side values */}
                    <div className="grid grid-cols-2 gap-3 p-3 rounded-xl border mb-3 text-center"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        borderColor: "var(--border-subtle)",
                      }}
                    >
                      {/* Messi Value */}
                      <div>
                        <span className="text-[11px] font-bold block" style={{ color: "var(--messi-primary)" }}>
                          Messi
                        </span>
                        <div className="flex items-center justify-center gap-1 mt-0.5">
                          <span className="text-lg sm:text-xl font-black" style={{ color: "var(--messi-primary)" }}>
                            {metric.messiVal}
                          </span>
                          {isMessiBetter && <Star className="w-3 h-3 fill-current text-amber-400" />}
                        </div>
                      </div>

                      {/* Ronaldo Value */}
                      <div>
                        <span className="text-[11px] font-bold block" style={{ color: "var(--ronaldo-primary)" }}>
                          Ronaldo
                        </span>
                        <div className="flex items-center justify-center gap-1 mt-0.5">
                          <span className="text-lg sm:text-xl font-black" style={{ color: "var(--ronaldo-primary)" }}>
                            {metric.ronaldoVal}
                          </span>
                          {isRonaldoBetter && <Star className="w-3 h-3 fill-current text-amber-400" />}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-gray-400">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
