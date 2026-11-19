"use client";

import React, { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import Countdown1000 from "@/components/Countdown1000";
import StatCard from "@/components/StatCard";
import ProgressionChart from "@/components/ProgressionChart";
import HeadToHeadSection from "@/components/HeadToHeadSection";
import DetailedMetricsSection from "@/components/DetailedMetricsSection";
import GoalsBingo from "@/components/GoalsBingo";
import TrophiesSection from "@/components/TrophiesSection";
import EditorialSection from "@/components/EditorialSection";
import VoteSection from "@/components/VoteSection";
import { MAIN_COMPARISON_CATEGORIES } from "@/lib/data/statsData";
import { DynamicStatsPayload } from "@/lib/api/football-api";
import { BarChart3, Filter } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [dynamicStats, setDynamicStats] = useState<DynamicStatsPayload | undefined>(undefined);

  useEffect(() => {
    // Automatically query the internal stats API for any live updates
    fetch("/api/stats")
      .then((res) => (res.ok ? res.json() : null))
      .then((data: DynamicStatsPayload | null) => {
        if (data) setDynamicStats(data);
      })
      .catch((err) => console.log("Baseline stats loaded:", err));
  }, []);

  const categoriesToUse = dynamicStats?.categories || MAIN_COMPARISON_CATEGORIES;

  const filterTabs = [
    { id: "all", label: "All Categories (9)" },
    { id: "career", label: "Career & Club" },
    { id: "competitions", label: "League & UCL" },
    { id: "international", label: "International & Cups" },
  ];

  const filteredCategories = categoriesToUse.filter((cat) => {
    if (activeTab === "all") return true;
    if (activeTab === "career") {
      return (
        cat.id === "all-time-career" ||
        cat.id === "career-europe" ||
        cat.id === "all-time-club" ||
        cat.id === "club-europe"
      );
    }
    if (activeTab === "competitions") {
      return cat.id === "all-time-league" || cat.id === "champions-league";
    }
    if (activeTab === "international") {
      return (
        cat.id === "international-all" ||
        cat.id === "world-cup" ||
        cat.id === "continental-cups"
      );
    }
    return true;
  });

  return (
    <div className="flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection stats={dynamicStats} />

      {/* 2. Historic 1000 Goals Countdown Tracker */}
      <Countdown1000 countdown={dynamicStats?.countdown} />

      {/* 3. Core Head-to-Head Comparison Cards */}
      <section id="overview" className="py-12 border-b"
        style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-color)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-2 border shadow-sm"
                style={{
                  backgroundColor: "rgba(139, 92, 246, 0.12)",
                  borderColor: "rgba(139, 92, 246, 0.3)",
                  color: "var(--messi-primary)",
                }}
              >
                <BarChart3 className="w-3.5 h-3.5" /> Statistical Hierarchy
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
                Macro Career Comparisons
              </h2>
              <p className="text-sm mt-1 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
                Compare goals, assists, appearances, and minutes-per-goal efficiency across nine essential football competition tiers.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1 p-1 rounded-xl border self-start md:self-auto"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
              }}
            >
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                  style={{
                    backgroundColor: activeTab === tab.id ? "var(--bg-card-hover)" : "transparent",
                    color: activeTab === tab.id ? "var(--text-primary)" : "var(--text-muted)",
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <StatCard key={cat.id} category={cat} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. Cumulative Career Progression Line Charts */}
      <ProgressionChart />

      {/* 5. Head to Head Direct 36 Clashes */}
      <HeadToHeadSection />

      {/* 6. Detailed Specialist Metrics & Radar Matrix */}
      <DetailedMetricsSection />

      {/* 7. 90-Minute Goals Bingo */}
      <GoalsBingo />

      {/* 8. Career Trophies & Individual Accolades */}
      <TrophiesSection />

      {/* 9. Analytical Editorial Category Debates */}
      <EditorialSection />

      {/* 10. Community GOAT Vote */}
      <VoteSection />
    </div>
  );
}
