"use client";

import React from "react";
import AvatarHero from "@/components/special/avatar-hero";
import { FlickeringGrid } from "../special/flickering-grid";
import { AiFillLinkedin } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { SparklesText } from "../special/sparkles-text";
import { AuroraText } from "../special/aurora-text";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Link from "next/link";
import { socialLinks, personalInfo } from "@/lib/about_vish";
import { SpinningText } from "../special/spinning-text";
import { smoothScrollToId } from "@/lib/utils";

export default function HeroSection() {
  return (
    <div className="relative" id="hero">
      <div className="relative min-h-dvh lg:h-dvh overflow-hidden flex flex-col justify-between">
        {/* Special Flickering Grid Background - optimized gridGap for mobile 60fps performance */}
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full w-full [mask-image:radial-gradient(100dvw_circle_at_center,white,transparent)] pointer-events-none"
          squareSize={5}
          gridGap={8}
          color="#60A5FA"
          maxOpacity={0.45}
          flickerChance={0.08}
        />

        {/* Avatar Hero in the background */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <AvatarHero />
        </div>

        {/* Foreground content */}
        <div className="container mx-auto relative h-full min-h-dvh lg:min-h-0 flex flex-col justify-between p-4 sm:p-8 lg:p-10 z-20 pointer-events-auto">
          {/* Top Bar */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 pt-2">
            <div className="space-y-1 max-w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-600 border border-violet-500/20 mb-1 sm:mb-2">
                <MdLocationOn className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{personalInfo.location}</span>
              </div>
              <p className="text-lg sm:text-2xl font-medium opacity-90">
                Hello There, I am
              </p>
              <SparklesText>
                <h1 className="font-bold text-4xl xs:text-5xl sm:text-7xl lg:text-8xl xl:text-9xl tracking-tight break-words">
                  VISHWANATH
                </h1>
              </SparklesText>
              <AuroraText className="font-bold text-xl sm:text-3xl lg:text-5xl xl:text-6xl block mt-1">
                FULL STACK DEVELOPER
              </AuroraText>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 self-start md:self-start pt-2">
              <Link
                href={socialLinks.github.link}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="p-1"
              >
                <SiGithub
                  size={30}
                  className="sm:w-9 sm:h-9 transform hover:scale-125 transition-transform"
                />
              </Link>
              <Link
                href={socialLinks.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="p-1"
              >
                <AiFillLinkedin
                  size={32}
                  className="sm:w-10 sm:h-10 text-[#0077B5] transform hover:scale-125 transition-transform"
                />
              </Link>
              <Link href={socialLinks.email.link} title="Email" className="p-1">
                <MdEmail
                  size={32}
                  className="sm:w-10 sm:h-10 text-violet-600 transform hover:scale-125 transition-transform"
                />
              </Link>
              <Link href={socialLinks.phone.link} title="Phone" className="p-1">
                <MdPhone
                  size={30}
                  className="sm:w-9 sm:h-9 text-emerald-600 transform hover:scale-125 transition-transform"
                />
              </Link>
            </div>
          </div>

          {/* Bottom Bar: Quick Nav + Spinning text */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4 sm:pb-6 mt-8 sm:mt-0">
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
              <button
                onClick={() => smoothScrollToId("about")}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-md border border-slate-300 shadow-xs hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all cursor-pointer"
              >
                About Me
              </button>
              <button
                onClick={() => smoothScrollToId("experience")}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-md border border-slate-300 shadow-xs hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all cursor-pointer"
              >
                Experience
              </button>
              <button
                onClick={() => smoothScrollToId("tech-stack")}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-slate-800 bg-white/95 backdrop-blur-md border border-slate-300 shadow-xs hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all cursor-pointer"
              >
                Tech Stack
              </button>
              <button
                onClick={() => smoothScrollToId("projects")}
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold bg-violet-600 text-white hover:bg-violet-700 transition-all cursor-pointer shadow-md shadow-violet-500/25"
              >
                Projects (70+)
              </button>
              <a
                href="/VISHWANATH-RESUME.pdf"
                download
                className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-bold border border-violet-500/50 text-violet-700 bg-white/95 backdrop-blur-md hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all cursor-pointer shadow-xs"
              >
                Resume &darr;
              </a>
            </div>

            <div className="absolute right-4 bottom-24 lg:bottom-32 z-30 pointer-events-none">
              <SpinningText className="lg:block hidden">
                WEB • BACKEND • APP • AI •
              </SpinningText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
