"use client";

import React, { useState } from "react";
import { EDITORIAL_SECTIONS, ArticleSection } from "@/lib/data/editorialData";
import { Sparkles, ChevronDown, ChevronUp, Scale, CheckCircle2 } from "lucide-react";

export default function EditorialSection() {
  const [openSectionId, setOpenSectionId] = useState<string>(EDITORIAL_SECTIONS[0].id);

  const toggleSection = (id: string) => {
    setOpenSectionId(openSectionId === id ? "" : id);
  };

  return (
    <section id="editorial" className="py-12 border-b"
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
              backgroundColor: "rgba(234, 179, 8, 0.15)",
              borderColor: "rgba(234, 179, 8, 0.3)",
              color: "var(--accent-gold)",
            }}
          >
            <Scale className="w-3.5 h-3.5" /> Analytical Breakdown
          </div>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight" style={{ color: "var(--text-primary)" }}>
            The Definitive Debate: Category by Category
          </h2>
          <p className="text-sm mt-1 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
            We dissect every key dimension of the greatest rivalry in modern sports history with unbiased data and contextual football analysis.
          </p>
        </div>

        {/* Accordion Articles List */}
        <div className="space-y-4">
          {EDITORIAL_SECTIONS.map((section: ArticleSection) => {
            const isOpen = openSectionId === section.id;

            return (
              <div
                key={section.id}
                className="rounded-3xl border overflow-hidden shadow-lg transition-all duration-200"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                }}
              >
                {/* Accordion Trigger Header */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors"
                  style={{
                    backgroundColor: isOpen ? "var(--bg-secondary)" : "transparent",
                  }}
                >
                  <div className="pr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black uppercase tracking-wider px-2 py-0.5 rounded border"
                        style={{
                          backgroundColor: 
                            section.verdict === "messi"
                              ? "var(--messi-bg)"
                              : section.verdict === "ronaldo"
                              ? "var(--ronaldo-bg)"
                              : "rgba(234, 179, 8, 0.15)",
                          color:
                            section.verdict === "messi"
                              ? "var(--messi-primary)"
                              : section.verdict === "ronaldo"
                              ? "var(--ronaldo-primary)"
                              : "var(--accent-gold)",
                          borderColor: "var(--border-subtle)",
                        }}
                      >
                        Verdict: {section.verdictLabel}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-base sm:text-xl tracking-tight" style={{ color: "var(--text-primary)" }}>
                      {section.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {section.tagline}
                    </p>
                  </div>

                  <div className="p-2 rounded-xl border text-gray-400 shrink-0"
                    style={{ borderColor: "var(--border-subtle)", backgroundColor: "var(--bg-card)" }}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {/* Expanded Article Body */}
                {isOpen && (
                  <div className="p-6 sm:p-8 border-t space-y-6 animate-in fade-in duration-200"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    {/* Key Comparison Stats Table */}
                    <div className="rounded-2xl border overflow-hidden"
                      style={{
                        backgroundColor: "var(--bg-secondary)",
                        borderColor: "var(--border-subtle)",
                      }}
                    >
                      <div className="grid grid-cols-3 p-3 text-xs font-bold border-b text-gray-400"
                        style={{ borderColor: "var(--border-subtle)" }}
                      >
                        <span>Metric</span>
                        <span className="text-center font-black" style={{ color: "var(--messi-primary)" }}>Lionel Messi</span>
                        <span className="text-right font-black" style={{ color: "var(--ronaldo-primary)" }}>Cristiano Ronaldo</span>
                      </div>
                      <div className="divide-y text-xs sm:text-sm" style={{ borderColor: "var(--border-subtle)" }}>
                        {section.keyStats.map((stat) => (
                          <div key={stat.label} className="grid grid-cols-3 p-3 items-center">
                            <span className="font-semibold text-gray-300">{stat.label}</span>
                            <span className="text-center font-black" style={{ color: "var(--messi-primary)" }}>
                              {stat.messi}
                              {stat.advantage === "messi" && " ★"}
                            </span>
                            <span className="text-right font-black" style={{ color: "var(--ronaldo-primary)" }}>
                              {stat.ronaldo}
                              {stat.advantage === "ronaldo" && " ★"}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Prose Analysis */}
                    <div className="space-y-3 text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {section.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                      ))}
                    </div>
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
