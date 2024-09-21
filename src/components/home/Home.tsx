"use client";
import React, { useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { Hero } from "./hero/Hero";
import { About } from "./about/About";

export default function Home() {
  const [isDark, setIsDark] = useLocalStorage("isDark", false);

  useEffect(() => {
    if (isDark) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="snap-container">
      <Hero />
      <About />
      <section className="snap-section flex items-center justify-center">
        <button
          className="m-5 bg-foreground text-toggle font-bold py-2 px-4 rounded-full"
          onClick={() => setIsDark(!isDark)}
        >
          Toggle Dark Mode
        </button>
      </section>
    </div>
  );
}
