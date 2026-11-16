"use client";

import React from "react";
import { ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer 
      className="border-t py-12 text-xs transition-colors duration-200"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderColor: "var(--border-color)",
        color: "var(--text-muted)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <span className="font-extrabold text-base tracking-tight block">
              <span style={{ color: "var(--messi-primary)" }}>MESSI</span>
              <span className="text-gray-400 mx-1.5">vs</span>
              <span style={{ color: "var(--ronaldo-primary)" }}>RONALDO</span>
            </span>
            <p className="max-w-md text-xs leading-relaxed">
              The premier interactive statistical index comparing Lionel Messi and Cristiano Ronaldo. Built with precision analytics, responsive charts, and multiple alternative UI themes.
            </p>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-[11px]">
              <ShieldCheck className="w-4 h-4" />
              <span>Data verified against official FIFA, UEFA, CONMEBOL, and Opta records</span>
            </div>
          </div>

          {/* Data Sources */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-2.5 text-gray-300">
              Data Sources
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li>API-Football / API-Sports</li>
              <li>StatsBomb Open Data</li>
              <li>Understat.com (xG / xA)</li>
              <li>Official League Records</li>
              <li>Transfermarkt Historical Archive</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xs uppercase tracking-wider mb-2.5 text-gray-300">
              Features
            </h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#overview" className="hover:text-white transition-colors">Career Overview</a></li>
              <li><a href="#countdown" className="hover:text-white transition-colors">1,000 Goals Countdown</a></li>
              <li><a href="#progression" className="hover:text-white transition-colors">Progression Line Charts</a></li>
              <li><a href="#head-to-head" className="hover:text-white transition-colors">36 H2H Matches</a></li>
              <li><a href="#goals-bingo" className="hover:text-white transition-colors">90m Goals Bingo</a></li>
              <li><a href="#trophies" className="hover:text-white transition-colors">Trophies & Honours</a></li>
              <li><a href="#vote" className="hover:text-white transition-colors">Live Community Vote</a></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]"
          style={{ borderColor: "var(--border-subtle)" }}
        >
          <div>
            © 2026 Messi vs Ronaldo Dashboard. Independent football analytics platform.
          </div>
          <div className="flex items-center gap-1">
            Built with Next.js 14, TypeScript, Tailwind CSS & Recharts
          </div>
        </div>
      </div>
    </footer>
  );
}
