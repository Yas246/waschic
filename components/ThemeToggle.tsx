"use client";

import { useTheme } from "./ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme, mounted } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    if (mounted) {
      setCurrentTheme(theme);
    }
  }, [theme, mounted]);

  const handleToggle = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    toggleTheme();
  };

  if (!mounted) {
    return (
      <button className="p-2 hover:bg-[#1c385f]/10 rounded-full transition-colors">
        <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">light_mode</span>
      </button>
    );
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 hover:bg-[#1c385f]/10 rounded-full transition-colors"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? (
        <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">light_mode</span>
      ) : (
        <span className="material-symbols-outlined text-slate-900 dark:text-slate-100">dark_mode</span>
      )}
    </button>
  );
}
