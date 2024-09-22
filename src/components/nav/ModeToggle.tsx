"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import useLocalStorage from "use-local-storage";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useLocalStorage("isDark", false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDark) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [isDark, setTheme]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={toggleTheme}>
      {resolvedTheme === "light" ? (
        <SunIcon className="h-[1.2rem] w-[1.2rem] text-primaryColor" />
      ) : (
        <MoonIcon className="h-[1.2rem] w-[1.2rem] text-primaryColor" />
      )}
    </button>
  );
}
