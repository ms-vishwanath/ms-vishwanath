"use client";

import React from "react";
import Image from "next/image";
import { TracingBeam } from "../special/tracing-beam";
import { VelocityScroll } from "../special/scroll-based-velocity";
import { techStacks } from "@/lib/about_vish";

export default function TechStack() {
  const renderSkillIcon = (icon: any, name: string) => {
    if (React.isValidElement(icon)) {
      return (
        <span className="shrink-0 flex items-center justify-center">
          <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center">
            {icon}
          </div>
        </span>
      );
    }
    if (typeof icon === "string" && icon) {
      return (
        <span className="shrink-0 flex items-center justify-center">
          <div className="w-5 h-5 sm:w-7 sm:h-7 flex items-center justify-center">
            <Image
              src={icon}
              alt={name}
              width={28}
              height={28}
              className="w-full h-full object-contain"
            />
          </div>
        </span>
      );
    }
    return <span className="w-2 h-2 rounded-full bg-violet-400 shrink-0" />;
  };

  const renderStackGrid = (stack: (typeof techStacks)[0]) => (
    <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 sm:gap-4">
      {stack.items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-center text-xs sm:text-sm gap-2 sm:gap-2.5 p-2 sm:p-2.5 rounded-xl border border-slate-200 bg-white hover:border-violet-400 hover:bg-violet-50/50 transform hover:scale-[1.02] sm:hover:scale-105 transition-all duration-200 cursor-default shadow-xs min-w-0"
          data-aos="zoom-in"
        >
          {renderSkillIcon(item.icon, item.name)}
          <span className="font-semibold text-slate-800 truncate">{item.name}</span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="bg-white text-slate-900 border-t border-slate-200" id="tech-stack">
      <div className="container mx-auto space-y-10 lg:space-y-12 px-4 sm:px-8 lg:px-16 py-12 sm:py-16">
        <TracingBeam className="hidden lg:block">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              I Am Versed in These Tech Stacks
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto opacity-80">
              I don&apos;t just know tools — I build systems from frontend to infra,
              like building blocks stacked with purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-10 pt-8 sm:pt-10">
            {techStacks.map((stack, index) => (
              <div key={index} className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2.5 sm:gap-3" data-aos="zoom-in">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-slate-100 shrink-0">
                    {stack.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">{stack.title}</h2>
                </div>
                {renderStackGrid(stack)}
              </div>
            ))}
          </div>
        </TracingBeam>

        <div className="block lg:hidden">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
              I Am Versed in These Tech Stacks
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto opacity-80">
              I don&apos;t just know tools — I build systems from frontend to infra,
              like building blocks stacked with purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:gap-10 pt-8 sm:pt-10">
            {techStacks.map((stack, index) => (
              <div key={index} className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2.5 sm:gap-3" data-aos="zoom-in">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-slate-100 shrink-0">
                    {stack.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900">{stack.title}</h2>
                </div>
                {renderStackGrid(stack)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t container mx-auto"></div>

      <div className="relative flex py-16 sm:py-24 w-full flex-col items-center justify-center overflow-hidden">
        <h1 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 flex items-center gap-2 px-4">
          Things Running on my Brain
        </h1>
        <VelocityScroll>
          &nbsp; EAT &nbsp; CODE &nbsp; GAME &nbsp; KNOWLEDGE &nbsp; SLEEP &nbsp; FRIENDS &nbsp;
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
        <VelocityScroll>
          &nbsp; FAMILY &nbsp; HEALTH &nbsp; TEAMWORK &nbsp; RESPECT &nbsp; MONEY &nbsp;
        </VelocityScroll>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
      </div>
    </section>
  );
}
