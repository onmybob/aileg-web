"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, MoonIcon, Sun, SunIcon } from "lucide-react";

export default function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <div>
        <div>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </div>
      </div>
      <div>
        <div onClick={() => setTheme("light")}>Light</div>
        <div onClick={() => setTheme("dark")}>Dark</div>
        <div onClick={() => setTheme("system")}>System</div>
      </div>
    </div>
  );
}
