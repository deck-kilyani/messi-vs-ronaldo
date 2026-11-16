"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from "recharts";
import { Sparkles } from "lucide-react";

const RADAR_DATA = [
  { attribute: "Finishing & Goals", Messi: 95, Ronaldo: 97, fullMark: 100 },
  { attribute: "Playmaking & Assists", Messi: 99, Ronaldo: 78, fullMark: 100 },
  { attribute: "Dribbling & 1v1", Messi: 98, Ronaldo: 81, fullMark: 100 },
  { attribute: "Free Kicks", Messi: 94, Ronaldo: 88, fullMark: 100 },
  { attribute: "Aerial & Heading", Messi: 68, Ronaldo: 99, fullMark: 100 },
  { attribute: "Penalties", Messi: 84, Ronaldo: 96, fullMark: 100 },
];

export default function RadarComparison() {
  const { themeConfig } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-80 w-full animate-pulse bg-black/10 rounded-2xl" />;
  }

  return (
    <div 
      className="p-6 sm:p-8 rounded-3xl border shadow-xl flex flex-col justify-between"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="mb-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 border shadow-sm"
          style={{
            backgroundColor: "rgba(139, 92, 246, 0.12)",
            borderColor: "rgba(139, 92, 246, 0.3)",
            color: "var(--messi-primary)",
          }}
        >
          <Sparkles className="w-3.5 h-3.5" /> 360° Attribute Comparison
        </div>
        <h3 className="text-xl sm:text-2xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
          Skill Matrix Radar
        </h3>
        <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>
          Normalized ratings across the six fundamental pillars of football artistry.
        </p>
      </div>

      <div className="h-72 sm:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="75%" data={RADAR_DATA}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis 
              dataKey="attribute" 
              tick={{ fill: "var(--text-secondary)", fontSize: 11, fontWeight: "bold" }} 
            />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} stroke="transparent" />
            <Tooltip 
              contentStyle={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                borderRadius: "12px",
                color: "var(--text-primary)",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            />
            <Legend wrapperStyle={{ paddingTop: "10px", fontSize: "12px", fontWeight: "bold" }} />
            <Radar
              name="Lionel Messi"
              dataKey="Messi"
              stroke={themeConfig.messiColor}
              fill={themeConfig.messiColor}
              fillOpacity={0.35}
            />
            <Radar
              name="Cristiano Ronaldo"
              dataKey="Ronaldo"
              stroke={themeConfig.ronaldoColor}
              fill={themeConfig.ronaldoColor}
              fillOpacity={0.35}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 pt-3 border-t text-[11px] text-gray-400 text-center" style={{ borderColor: "var(--border-subtle)" }}>
        Scale out of 100 based on Opta, Understat and career statistical percentiles.
      </div>
    </div>
  );
}
