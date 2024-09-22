"use client";
import React from "react";
import { Hero } from "./hero/Hero";
import { About } from "./about/About";
import { Experience } from "./experience/Experience";
import { Projects } from "./projects/Projects";

export default function Home() {
  return (
    <div className="snap-container">
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  );
}
