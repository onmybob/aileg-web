"use client";

import useThemeStore from "@/store/themeStore";
import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  const name = useThemeStore((state) => state.name);
  const updateTheme = useThemeStore((state) => state.updateTheme);

  updateTheme("dark");
  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <a
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
    >
      {name}--
      {name === "dark" ? "a" : "b"}
      {mounted && (theme === "dark" || resolvedTheme === "dark") ? (
        <BsSunFill size={24} />
      ) : (
        <BsMoonFill size={20} />
      )}
    </a>
  );
};

export default ThemeSwitch;
