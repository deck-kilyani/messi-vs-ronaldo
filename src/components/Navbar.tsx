"use client";

import React, { useState } from "react";
import { useTheme, Theme } from "@/context/ThemeContext";
import { 
  Trophy, 
  Flame, 
  BarChart3, 
  Swords, 
  Grid, 
  Vote, 
  Sparkles, 
  Menu, 
  X,
  Palette
} from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  const navLinks = [
    { label: "Overview", href: "#overview", icon: BarChart3 },
    { label: "1,000 Goals Race", href: "#countdown", icon: Flame },
    { label: "Progression", href: "#progression", icon: BarChart3 },
    { label: "Head to Head (36)", href: "#head-to-head", icon: Swords },
    { label: "Detailed Metrics", href: "#detailed-stats", icon: Sparkles },
    { label: "Goals Bingo (90m)", href: "#goals-bingo", icon: Grid },
    { label: "Trophies & Awards", href: "#trophies", icon: Trophy },
    { label: "The Debate", href: "#editorial", icon: Sparkles },
    { label: "Cast Vote", href: "#vote", icon: Vote },
  ];

  const themes: { id: Theme; name: string; badge: string; color1: string; color2: string }[] = [
    { id: "purple", name: "Purple & Amber", badge: "Default", color1: "#8B5CF6", color2: "#F59E0B" },
    { id: "white", name: "Clean White & Bold", badge: "Light", color1: "#2563EB", color2: "#DC2626" },
    { id: "neon", name: "Neon Sports Dark", badge: "Vibrant", color1: "#06B6D4", color2: "#F97316" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-200"
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderColor: "var(--border-color)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl overflow-hidden font-black text-xs shadow-md border"
              style={{ borderColor: "var(--border-color)", backgroundColor: "var(--bg-card)" }}
            >
              <span style={{ color: "var(--messi-primary)" }} className="font-bold">M</span>
              <span className="text-[10px] text-gray-400 mx-0.5">vs</span>
              <span style={{ color: "var(--ronaldo-primary)" }} className="font-bold">R</span>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight block leading-tight">
                <span style={{ color: "var(--messi-primary)" }}>MESSI</span>
                <span className="text-gray-400 text-sm font-normal mx-1.5">vs</span>
                <span style={{ color: "var(--ronaldo-primary)" }}>RONALDO</span>
              </span>
              <span className="text-[11px] block font-medium uppercase tracking-wider" style={{ color: "var(--text-muted)" }}>
                The Definitive Comparison
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 flex items-center gap-1.5 hover:bg-black/10 dark:hover:bg-white/5"
                style={{ color: "var(--text-secondary)" }}
              >
                <item.icon className="w-3.5 h-3.5 opacity-70" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Theme Selector Pill & Mobile Button */}
          <div className="flex items-center gap-2">
            
            {/* Theme Dropdown Toggle */}
            <div className="relative">
              <button
                onClick={() => setThemeDropdownOpen(!themeDropdownOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all duration-150 shadow-sm"
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderColor: "var(--border-color)",
                  color: "var(--text-primary)",
                }}
                title="Switch Color Theme"
              >
                <Palette className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline">Theme:</span>
                <span className="font-bold capitalize">{theme}</span>
                <div className="flex gap-1 items-center ml-1">
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--messi-primary)" }} />
                  <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "var(--ronaldo-primary)" }} />
                </div>
              </button>

              {/* Dropdown Menu */}
              {themeDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-64 rounded-xl shadow-2xl border p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <div className="px-2 py-1.5 text-[11px] font-bold uppercase tracking-wider text-gray-400 border-b mb-1"
                    style={{ borderColor: "var(--border-subtle)" }}
                  >
                    Select UI Color Theme
                  </div>
                  {themes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setTheme(t.id);
                        setThemeDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-between transition-colors hover:bg-black/10 dark:hover:bg-white/10"
                      style={{
                        backgroundColor: theme === t.id ? "var(--bg-card-hover)" : "transparent",
                        color: "var(--text-primary)",
                      }}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex gap-1">
                          <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: t.color1 }} />
                          <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: t.color2 }} />
                        </div>
                        <span className="font-semibold">{t.name}</span>
                      </div>
                      <span className="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase"
                        style={{
                          backgroundColor: theme === t.id ? "var(--messi-bg)" : "transparent",
                          color: theme === t.id ? "var(--messi-primary)" : "var(--text-muted)",
                        }}
                      >
                        {t.badge}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg border text-gray-300"
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div 
          className="xl:hidden border-b px-4 pt-2 pb-5 space-y-1 shadow-xl animate-in slide-in-from-top duration-200"
          style={{
            backgroundColor: "var(--bg-card)",
            borderColor: "var(--border-color)",
          }}
        >
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors hover:bg-black/10 dark:hover:bg-white/5"
              style={{ color: "var(--text-primary)" }}
            >
              <item.icon className="w-4 h-4 opacity-70" />
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
