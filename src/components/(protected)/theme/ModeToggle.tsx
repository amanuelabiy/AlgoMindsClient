"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div className="w-6 h-6 flex items-center justify-center relative cursor-pointer">
      <Sun
        onClick={() => setTheme("light")}
        className={`h-[1.2rem] w-[1.2rem] text-white transition-all ${
          resolvedTheme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"
        }`}
      />
      <Moon
        onClick={() => setTheme("dark")}
        className={`h-[1.2rem] w-[1.2rem] text-primaryColor transition-all absolute inset-0 m-auto ${
          resolvedTheme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </div>
  );
}
