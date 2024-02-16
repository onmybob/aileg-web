"use client";

import { useTheme } from "next-themes";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

const ThemeSwitch = () => {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <a
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
    >
      <div className="w-4">
        <BsSunFill size={24} className="hidden dark:block" />
        <BsMoonFill size={20} className="dark:hidden block" />
      </div>
    </a>
  );
};

export default ThemeSwitch;
