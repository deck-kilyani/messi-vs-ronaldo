"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "purple" | "white" | "neon";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  themeConfig: {
    name: string;
    description: string;
    messiColor: string;
    ronaldoColor: string;
    bgClass: string;
  };
}

const themeDetails: Record<Theme, { name: string; description: string; messiColor: string; ronaldoColor: string; bgClass: string }> = {
  purple: {
    name: "Purple & Amber",
    description: "Deep charcoal with royal purple for Messi & amber gold for Ronaldo",
    messiColor: "#8B5CF6",
    ronaldoColor: "#F59E0B",
    bgClass: "bg-[#0E121B]",
  },
  white: {
    name: "Clean White & Dual Bold",
    description: "Crisp light background with royal blue for Messi & crimson red for Ronaldo",
    messiColor: "#2563EB",
    ronaldoColor: "#DC2626",
    bgClass: "bg-[#F1F5F9]",
  },
  neon: {
    name: "Neon Sports Dark",
    description: "Pitch black aesthetic with neon cyan for Messi & neon orange for Ronaldo",
    messiColor: "#06B6D4",
    ronaldoColor: "#F97316",
    bgClass: "bg-[#05070A]",
  },
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("purple");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("mvr-theme") as Theme | null;
    if (savedTheme && (savedTheme === "purple" || savedTheme === "white" || savedTheme === "neon")) {
      setThemeState(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "purple");
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("mvr-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Avoid flash of mismatched theme on mount
  return (
    <ThemeContext.Provider value={{ theme, setTheme, themeConfig: themeDetails[theme] }}>
      <div style={{ visibility: mounted ? "visible" : "visible" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
