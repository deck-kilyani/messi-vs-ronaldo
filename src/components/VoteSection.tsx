"use client";

import React, { useState, useEffect } from "react";
import { Vote, CheckCircle2, Trophy, Star } from "lucide-react";

export default function VoteSection() {
  const [userVote, setUserVote] = useState<"messi" | "ronaldo" | null>(null);
  const [messiVotes, setMessiVotes] = useState(148920);
  const [ronaldoVotes, setRonaldoVotes] = useState(132410);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("mvr-user-vote") as "messi" | "ronaldo" | null;
    if (saved) {
      setUserVote(saved);
    }
  }, []);

  const handleVote = (player: "messi" | "ronaldo") => {
    if (userVote) return; // already voted
    setUserVote(player);
    localStorage.setItem("mvr-user-vote", player);
    if (player === "messi") {
      setMessiVotes((prev) => prev + 1);
    } else {
      setRonaldoVotes((prev) => prev + 1);
    }
  };

  const totalVotes = messiVotes + ronaldoVotes;
  const messiPercent = ((messiVotes / totalVotes) * 100).toFixed(1);
  const ronaldoPercent = ((ronaldoVotes / totalVotes) * 100).toFixed(1);

  if (!mounted) return null;

  return (
    <section id="vote" className="py-16"
      style={{
        backgroundColor: "var(--bg-secondary)",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider mb-3 border shadow-sm"
          style={{
            backgroundColor: "rgba(234, 179, 8, 0.15)",
            borderColor: "rgba(234, 179, 8, 0.3)",
            color: "var(--accent-gold)",
          }}
        >
          <Vote className="w-3.5 h-3.5" /> Community Consensus
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-3" style={{ color: "var(--text-primary)" }}>
          Who Is the Greatest of All Time?
        </h2>
        
        <p className="text-sm sm:text-base max-w-xl mx-auto mb-8" style={{ color: "var(--text-secondary)" }}>
          Cast your vote in the worldwide poll. Over {(totalVotes).toLocaleString()} verified votes recorded across 140+ countries.
        </p>

        {/* Voting Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          
          {/* Messi Vote Card */}
          <button
            onClick={() => handleVote("messi")}
            disabled={userVote !== null}
            className={`p-6 sm:p-8 rounded-3xl border text-center transition-all duration-200 relative overflow-hidden group ${
              userVote === "messi" ? "ring-2 ring-purple-500 scale-[1.02]" : "hover:scale-[1.01]"
            } ${userVote !== null ? "cursor-default" : "cursor-pointer"}`}
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: userVote === "messi" ? "var(--messi-primary)" : "var(--border-color)",
            }}
          >
            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center font-black text-2xl shadow-md border"
              style={{
                backgroundColor: "var(--messi-bg)",
                borderColor: "var(--messi-border)",
                color: "var(--messi-primary)",
              }}
            >
              LM10
            </div>

            <h3 className="text-xl sm:text-2xl font-black mb-1" style={{ color: "var(--text-primary)" }}>
              Lionel Messi
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              World Champion · 8x Ballon d&apos;Or · 49 Trophies
            </p>

            <div className="text-3xl font-black mb-1" style={{ color: "var(--messi-primary)" }}>
              {messiPercent}%
            </div>
            <span className="text-xs text-gray-400 font-semibold block mb-4">
              {messiVotes.toLocaleString()} votes
            </span>

            <div 
              className="py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors border"
              style={{
                backgroundColor: userVote === "messi" ? "var(--messi-primary)" : "var(--messi-bg)",
                color: userVote === "messi" ? "#ffffff" : "var(--messi-primary)",
                borderColor: "var(--messi-border)",
              }}
            >
              {userVote === "messi" ? "Your Vote Cast ✓" : userVote ? "Vote Closed" : "Vote for Messi"}
            </div>
          </button>

          {/* Ronaldo Vote Card */}
          <button
            onClick={() => handleVote("ronaldo")}
            disabled={userVote !== null}
            className={`p-6 sm:p-8 rounded-3xl border text-center transition-all duration-200 relative overflow-hidden group ${
              userVote === "ronaldo" ? "ring-2 ring-amber-500 scale-[1.02]" : "hover:scale-[1.01]"
            } ${userVote !== null ? "cursor-default" : "cursor-pointer"}`}
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: userVote === "ronaldo" ? "var(--ronaldo-primary)" : "var(--border-color)",
            }}
          >
            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center font-black text-2xl shadow-md border"
              style={{
                backgroundColor: "var(--ronaldo-bg)",
                borderColor: "var(--ronaldo-border)",
                color: "var(--ronaldo-primary)",
              }}
            >
              CR7
            </div>

            <h3 className="text-xl sm:text-2xl font-black mb-1" style={{ color: "var(--text-primary)" }}>
              Cristiano Ronaldo
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              All-Time Top Scorer · 5x UCL · 985 Goals
            </p>

            <div className="text-3xl font-black mb-1" style={{ color: "var(--ronaldo-primary)" }}>
              {ronaldoPercent}%
            </div>
            <span className="text-xs text-gray-400 font-semibold block mb-4">
              {ronaldoVotes.toLocaleString()} votes
            </span>

            <div 
              className="py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors border"
              style={{
                backgroundColor: userVote === "ronaldo" ? "var(--ronaldo-primary)" : "var(--ronaldo-bg)",
                color: userVote === "ronaldo" ? "#ffffff" : "var(--ronaldo-primary)",
                borderColor: "var(--ronaldo-border)",
              }}
            >
              {userVote === "ronaldo" ? "Your Vote Cast ✓" : userVote ? "Vote Closed" : "Vote for Ronaldo"}
            </div>
          </button>

        </div>

        {/* Global Progress Bar */}
        <div className="p-4 rounded-2xl border"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          <div className="flex justify-between text-xs font-bold mb-2">
            <span style={{ color: "var(--messi-primary)" }}>Messi {messiPercent}%</span>
            <span className="text-gray-400">Total: {totalVotes.toLocaleString()}</span>
            <span style={{ color: "var(--ronaldo-primary)" }}>Ronaldo {ronaldoPercent}%</span>
          </div>
          <div className="h-3 w-full rounded-full overflow-hidden flex bg-black/30">
            <div style={{ width: `${messiPercent}%`, backgroundColor: "var(--messi-primary)" }} className="h-full transition-all duration-500" />
            <div style={{ width: `${ronaldoPercent}%`, backgroundColor: "var(--ronaldo-primary)" }} className="h-full transition-all duration-500" />
          </div>
        </div>

      </div>
    </section>
  );
}
