"use client";

import React, { useState, useEffect } from "react";
import { CAREER_PROGRESSION_DATA } from "@/lib/data/countdownData";
import { useTheme } from "@/context/ThemeContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp } from "lucide-react";

export default function ProgressionChart() {
  const { themeConfig } = useTheme();
  const [metric, setMetric] = useState<"goals" | "assists">("goals");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-80 w-full animate-pulse bg-black/10 rounded-2xl" />;
  }

  const chartData = CAREER_PROGRESSION_DATA.map((item) => ({
    year: item.year,
    age: `Age ${item.age}`,
    Messi: metric === "goals" ? item.messiGoals : item.messiAssists,
    Ronaldo: metric === "goals" ? item.ronaldoGoals : item.ronaldoAssists,
  }));

  return (
    <section id="progression" className="py-12 border-b"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with metric switchers */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 border shadow-sm"
              style={{
                backgroundColor: "var(--messi-bg)",
                borderColor: "var(--messi-border)",
                color: "var(--messi-primary)",
              }}
            >
              <TrendingUp className="w-3.5 h-3.5" /> Career Trajectory
            </div>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
              Cumulative Progression (2005 – 2026)
            </h2>
            <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
              Explore how both legends traded leads and redefined scoring consistency over two decades.
            </p>
          </div>

          {/* Toggle Goals vs Assists */}
          <div className="flex items-center gap-1 p-1 rounded-xl border self-start sm:self-auto"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border-color)",
            }}
          >
            <button
              onClick={() => setMetric("goals")}
              className="px-4 py-1.5 rounded-lg text-xs font-bold transition-all capitalize"
              style={{
                backgroundColor: metric === "goals" ? "var(--bg-card-hover)" : "transparent",
                color: metric === "goals" ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              Career Goals
            </button>
            <button
              onClick={() => setMetric("assists")}
              className="px-4 py-1.5 rounded-lg text-xs font-bold transition-all capitalize"
              style={{
                backgroundColor: metric === "assists" ? "var(--bg-card-hover)" : "transparent",
                color: metric === "assists" ? "var(--text-primary)" : "var(--text-muted)",
              }}
            >
              Career Assists
            </button>
          </div>
        </div>

        {/* Chart Box */}
        <div 
          className="p-6 sm:p-8 rounded-3xl border shadow-xl"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="h-80 sm:h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis 
                  dataKey="year" 
                  stroke="var(--text-muted)" 
                  tick={{ fontSize: 11 }}
                  tickLine={false}
                />
                <YAxis 
                  stroke="var(--text-muted)" 
                  tick={{ fontSize: 11 }}
                  domain={[0, "auto"]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-color)",
                    borderRadius: "12px",
                    color: "var(--text-primary)",
                    fontSize: "12px",
                    fontWeight: "bold",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: "15px", fontSize: "12px", fontWeight: "bold" }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="Messi" 
                  stroke={themeConfig.messiColor} 
                  strokeWidth={3.5} 
                  dot={{ r: 3, fill: themeConfig.messiColor }}
                  activeDot={{ r: 6 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="Ronaldo" 
                  stroke={themeConfig.ronaldoColor} 
                  strokeWidth={3.5} 
                  dot={{ r: 3, fill: themeConfig.ronaldoColor }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-4 pt-4 border-t flex flex-wrap justify-between items-center text-xs text-gray-400 gap-2"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <span>Data point: End of each respective calendar year</span>
            <span className="font-semibold text-amber-400">Notice Messi's historic 91-goal spike in 2012</span>
          </div>
        </div>

      </div>
    </section>
  );
}
