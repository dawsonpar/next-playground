"use client";

import React from "react";
import { Dock, DockIcon } from "../magicui/dock";
import {
  HomeIcon,
  BackpackIcon,
  RocketIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { Separator } from "./Separator";
import { ModeToggle } from "./ModeToggle";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

export const NavDock = () => {
  return (
    <div className="fixed bottom-6 mb-5 left-0 right-0 z-50 h-16">
      <Dock
        magnification={50}
        distance={100}
        direction="middle"
        className="
        pointer-events-auto 
        relative
        border-primaryColor
        mx-auto
        flex 
        min-h-full 
        h-full 
        items-center 
        px-1 
        bg-foreground 
        [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] 
        transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] 
        dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
      >
        <DockIcon
          className="text-primaryColor hover:bg-white/50 transition ease-in-out duration-300"
          onClick={() => scrollToSection("about")}
        >
          <HomeIcon />
        </DockIcon>
        <DockIcon
          className="text-primaryColor hover:bg-white/50 transition ease-in-out duration-300"
          onClick={() => scrollToSection("experience")}
        >
          <BackpackIcon />
        </DockIcon>
        <DockIcon
          className="text-primaryColor hover:bg-white/50 transition ease-in-out duration-300"
          onClick={() => scrollToSection("projects")}
        >
          <RocketIcon />
        </DockIcon>
        <Separator orientation="vertical" className="h-full bg-primaryColor" />
        <DockIcon className="text-primaryColor hover:bg-white/50 transition ease-in-out duration-300">
          <a href="#home">
            <GitHubLogoIcon />
          </a>
        </DockIcon>
        <DockIcon className="text-primaryColor hover:bg-white/50 transition ease-in-out duration-300">
          <a href="#home">
            <LinkedInLogoIcon />
          </a>
        </DockIcon>
        <Separator orientation="vertical" className="h-full bg-primaryColor" />
        <DockIcon className="text-primaryColor hover:bg-white/50 transition ease-in-out duration-300">
          <ModeToggle />
        </DockIcon>
      </Dock>
    </div>
  );
};
