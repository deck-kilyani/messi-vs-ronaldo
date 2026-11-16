"use client";

import React, { useState } from "react";
import { ComparisonStatCategory } from "@/lib/data/statsData";
import { ChevronDown, ChevronUp, Star } from "lucide-react";

interface StatCardProps {
  category: ComparisonStatCategory;
}

export default function StatCard({ category }: StatCardProps) {
  const [expanded, setExpanded] = useState(false);
  const { messi, ronaldo } = category;

  // Calculate proportion percentages for the visual comparison bar
  const totalGoals = (messi.goals || 0) + (ronaldo.goals || 0);
  const messiGoalShare = totalGoals > 0 ? (messi.goals / totalGoals) * 100 : 50;
  const ronaldoGoalShare = 100 - messiGoalShare;

  // Determine who has the better stat
  const messiGoalsBetter = messi.goals > ronaldo.goals;
  const ronaldoGoalsBetter = ronaldo.goals > messi.goals;

  const messiAssistsBetter = messi.assists > ronaldo.assists;
  const ronaldoAssistsBetter = ronaldo.assists > messi.assists;

  const messiRatioBetter = messi.minsPerGoal < ronaldo.minsPerGoal && messi.minsPerGoal > 0;
  const ronaldoRatioBetter = ronaldo.minsPerGoal < messi.minsPerGoal && ronaldo.minsPerGoal > 0;

  const messiContribBetter = messi.minsPerContribution < ronaldo.minsPerContribution && messi.minsPerContribution > 0;
  const ronaldoContribBetter = ronaldo.minsPerContribution < messi.minsPerContribution && ronaldo.minsPerContribution > 0;

  return (
    <div 
      className="rounded-2xl border transition-all duration-200 overflow-hidden shadow-lg relative group"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Card Header */}
      <div 
        className="px-6 py-4 border-b flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
        style={{
          backgroundColor: "var(--bg-secondary)",
          borderColor: "var(--border-subtle)",
        }}
      >
        <div>
          <h3 className="font-extrabold text-base sm:text-lg tracking-tight uppercase" style={{ color: "var(--text-primary)" }}>
            {category.title}
          </h3>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            {category.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold self-start sm:self-auto">
          <span className="flex items-center gap-1 font-bold" style={{ color: "var(--messi-primary)" }}>
            <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "var(--messi-primary)" }} />
            Messi
          </span>
          <span className="text-gray-400 font-normal">vs</span>
          <span className="flex items-center gap-1 font-bold" style={{ color: "var(--ronaldo-primary)" }}>
            <span className="w-2 h-2 rounded-full inline-block" style={{ backgroundColor: "var(--ronaldo-primary)" }} />
            Ronaldo
          </span>
        </div>
      </div>

      {/* Main Stats Comparison Grid */}
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-8 items-center">
          
          {/* Messi Side */}
          <div className="space-y-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded"
                style={{ backgroundColor: "var(--messi-bg)", color: "var(--messi-primary)" }}
              >
                Lionel Messi
              </span>
            </div>

            {/* Primary Stat: Goals */}
            <div>
              <div className="flex items-baseline justify-center sm:justify-start gap-1.5">
                <span className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: "var(--messi-primary)" }}>
                  {messi.goals.toLocaleString()}
                </span>
                {messiGoalsBetter && (
                  <span className="inline-flex items-center text-xs font-bold px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(234, 179, 8, 0.15)", color: "var(--accent-gold)" }}
                    title="Leader in Goals"
                  >
                    <Star className="w-3 h-3 fill-current mr-0.5" /> Lead
                  </span>
                )}
              </div>
              <span className="text-xs font-bold uppercase tracking-wider block" style={{ color: "var(--text-muted)" }}>
                Goals ({messi.apps} Apps)
              </span>
            </div>

            {/* Sub Metrics: Assists & Efficiency */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t" style={{ borderColor: "var(--border-subtle)" }}>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {messi.assists}
                  </span>
                  {messiAssistsBetter && <Star className="w-2.5 h-2.5 fill-current text-amber-400" />}
                </div>
                <span className="text-[11px] block" style={{ color: "var(--text-muted)" }}>Assists</span>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-1">
                  <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {messi.minsPerGoal}m
                  </span>
                  {messiRatioBetter && <Star className="w-2.5 h-2.5 fill-current text-amber-400" />}
                </div>
                <span className="text-[11px] block" style={{ color: "var(--text-muted)" }}>Mins / Goal</span>
              </div>
            </div>

            <div className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
              ⚡ Contribution every <span className="font-bold text-amber-400">{messi.minsPerContribution} mins</span>
              {messiContribBetter && <span className="ml-1 text-[11px] text-emerald-400 font-bold">(★ Better)</span>}
            </div>
          </div>

          {/* Ronaldo Side */}
          <div className="space-y-4 text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-end gap-2">
              <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded"
                style={{ backgroundColor: "var(--ronaldo-bg)", color: "var(--ronaldo-primary)" }}
              >
                Cristiano Ronaldo
              </span>
            </div>

            {/* Primary Stat: Goals */}
            <div>
              <div className="flex items-baseline justify-center sm:justify-end gap-1.5">
                {ronaldoGoalsBetter && (
                  <span className="inline-flex items-center text-xs font-bold px-1.5 py-0.5 rounded-full"
                    style={{ backgroundColor: "rgba(234, 179, 8, 0.15)", color: "var(--accent-gold)" }}
                    title="Leader in Goals"
                  >
                    <Star className="w-3 h-3 fill-current mr-0.5" /> Lead
                  </span>
                )}
                <span className="text-3xl sm:text-5xl font-black tracking-tight" style={{ color: "var(--ronaldo-primary)" }}>
                  {ronaldo.goals.toLocaleString()}
                </span>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider block" style={{ color: "var(--text-muted)" }}>
                Goals ({ronaldo.apps} Apps)
              </span>
            </div>

            {/* Sub Metrics: Assists & Efficiency */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t" style={{ borderColor: "var(--border-subtle)" }}>
              <div>
                <div className="flex items-center justify-center sm:justify-end gap-1">
                  {ronaldoAssistsBetter && <Star className="w-2.5 h-2.5 fill-current text-amber-400" />}
                  <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {ronaldo.assists}
                  </span>
                </div>
                <span className="text-[11px] block" style={{ color: "var(--text-muted)" }}>Assists</span>
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-end gap-1">
                  {ronaldoRatioBetter && <Star className="w-2.5 h-2.5 fill-current text-amber-400" />}
                  <span className="text-lg font-bold" style={{ color: "var(--text-primary)" }}>
                    {ronaldo.minsPerGoal}m
                  </span>
                </div>
                <span className="text-[11px] block" style={{ color: "var(--text-muted)" }}>Mins / Goal</span>
              </div>
            </div>

            <div className="text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
              ⚡ Contribution every <span className="font-bold text-amber-400">{ronaldo.minsPerContribution} mins</span>
              {ronaldoContribBetter && <span className="ml-1 text-[11px] text-emerald-400 font-bold">(★ Better)</span>}
            </div>
          </div>

        </div>

        {/* Visual Dual-Colored Proportion Bar */}
        <div className="mt-6 pt-4 border-t" style={{ borderColor: "var(--border-subtle)" }}>
          <div className="flex justify-between text-[11px] font-bold mb-1.5" style={{ color: "var(--text-muted)" }}>
            <span>Messi {messiGoalShare.toFixed(1)}%</span>
            <span>Goals Share</span>
            <span>Ronaldo {ronaldoGoalShare.toFixed(1)}%</span>
          </div>
          <div className="h-2 w-full rounded-full overflow-hidden flex bg-black/20">
            <div 
              style={{ width: `${messiGoalShare}%`, backgroundColor: "var(--messi-primary)" }} 
              className="h-full transition-all duration-500" 
            />
            <div 
              style={{ width: `${ronaldoGoalShare}%`, backgroundColor: "var(--ronaldo-primary)" }} 
              className="h-full transition-all duration-500" 
            />
          </div>
        </div>

        {/* Expandable Detailed Breakdown Button */}
        {messi.penalties !== undefined && (
          <div className="mt-4 pt-2 text-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider py-1.5 px-3 rounded-lg border transition-all duration-150 hover:bg-black/10 dark:hover:bg-white/5"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-secondary)",
              }}
            >
              {expanded ? (
                <>Less Details <ChevronUp className="w-3.5 h-3.5" /></>
              ) : (
                <>Detailed Breakdown <ChevronDown className="w-3.5 h-3.5" /></>
              )}
            </button>
          </div>
        )}

        {/* Expanded Detailed Metrics */}
        {expanded && messi.penalties !== undefined && ronaldo.penalties !== undefined && (
          <div 
            className="mt-4 pt-4 border-t space-y-2.5 animate-in fade-in duration-200 text-xs"
            style={{ borderColor: "var(--border-subtle)" }}
          >
            <div className="flex justify-between items-center py-1 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <span className="font-bold" style={{ color: "var(--messi-primary)" }}>{messi.penalties}</span>
              <span className="font-medium" style={{ color: "var(--text-muted)" }}>Penalty Goals (Conversion %)</span>
              <span className="font-bold" style={{ color: "var(--ronaldo-primary)" }}>{ronaldo.penalties}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <span className="font-bold" style={{ color: "var(--messi-primary)" }}>{messi.freeKicks || 0}</span>
              <span className="font-medium" style={{ color: "var(--text-muted)" }}>Direct Free Kick Goals</span>
              <span className="font-bold" style={{ color: "var(--ronaldo-primary)" }}>{ronaldo.freeKicks || 0}</span>
            </div>

            <div className="flex justify-between items-center py-1 border-b" style={{ borderColor: "var(--border-subtle)" }}>
              <span className="font-bold" style={{ color: "var(--messi-primary)" }}>{messi.hatTricks || 0}</span>
              <span className="font-medium" style={{ color: "var(--text-muted)" }}>Career Hat-tricks</span>
              <span className="font-bold" style={{ color: "var(--ronaldo-primary)" }}>{ronaldo.hatTricks || 0}</span>
            </div>

            {messi.successfulDribbles && (
              <div className="flex justify-between items-center py-1 border-b" style={{ borderColor: "var(--border-subtle)" }}>
                <span className="font-bold" style={{ color: "var(--messi-primary)" }}>{messi.successfulDribbles.toLocaleString()}</span>
                <span className="font-medium" style={{ color: "var(--text-muted)" }}>Successful Dribbles</span>
                <span className="font-bold" style={{ color: "var(--ronaldo-primary)" }}>{ronaldo.successfulDribbles?.toLocaleString()}</span>
              </div>
            )}

            {messi.keyPasses && (
              <div className="flex justify-between items-center py-1">
                <span className="font-bold" style={{ color: "var(--messi-primary)" }}>{messi.keyPasses.toLocaleString()}</span>
                <span className="font-medium" style={{ color: "var(--text-muted)" }}>Key Passes (Chances Created)</span>
                <span className="font-bold" style={{ color: "var(--ronaldo-primary)" }}>{ronaldo.keyPasses?.toLocaleString()}</span>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
