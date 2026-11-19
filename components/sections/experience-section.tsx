"use client";

import React, { useState } from "react";
import { experiences, education } from "@/lib/about_vish";
import {
  LuRadio,
  LuLayers,
  LuCpu,
  LuCalendar,
  LuMapPin,
  LuGraduationCap,
  LuArrowRight,
  LuCheck,
  LuCode,
  LuCompass,
} from "react-icons/lu";

export default function ExperienceSection() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeExp = experiences[selectedIdx];

  return (
    <section className="relative py-16 sm:py-24 bg-slate-50/50 text-slate-900 border-t border-slate-200 overflow-hidden" id="experience">
      {/* Background cyber accent dots */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#4f46e5 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 pb-6 border-b border-slate-200">
          <div className="space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-50 text-violet-700 border border-violet-200">
              <LuCompass className="w-3.5 h-3.5 text-violet-600 animate-spin-slow shrink-0" />
              <span>// CAREER FLIGHT LOG & TIMELINE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              Work Experience & Deployments
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-500 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>ORCHESTRATING 5 PRODUCTION TENORS [2023 – 2026]</span>
          </div>
        </div>

        {/* MOBILE VIEW (lg:hidden): Adaptive In-Place Accordion */}
        <div className="block lg:hidden space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold px-1">
            Tap Node to Expand Mission
          </div>
          {experiences.map((exp, idx) => {
            const isSelected = selectedIdx === idx;
            const revNumber = `REV.0${experiences.length - idx}`;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isSelected
                    ? "bg-white border-violet-500 shadow-md shadow-violet-500/10 ring-1 ring-violet-500/20"
                    : "bg-white/80 border-slate-200 shadow-xs"
                }`}
              >
                <button
                  onClick={() => setSelectedIdx(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer"
                >
                  <div className="space-y-1 min-w-0 flex-1">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={isSelected ? "font-bold text-violet-600" : "text-slate-400"}>
                        {revNumber}
                      </span>
                      <span className="text-slate-500 font-medium text-[11px]">{exp.period}</span>
                    </div>
                    <div className="font-extrabold text-base text-slate-900 truncate">
                      {exp.company}
                    </div>
                    <div className="text-xs font-semibold text-violet-700 truncate">
                      {exp.role}
                    </div>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isSelected ? "bg-violet-600 text-white rotate-90 shadow-xs" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    <LuArrowRight className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isSelected && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 pt-2 border-t border-slate-100 space-y-4 animate-in fade-in duration-200">
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                      <LuMapPin className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                      <span>{exp.location}</span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                        System Milestones & Architecture Feats
                      </div>
                      <div className="space-y-2.5">
                        {exp.highlights.map((feat, fIdx) => (
                          <div
                            key={fIdx}
                            className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium"
                          >
                            <div className="mt-0.5 p-1 rounded-md bg-violet-600 text-white shrink-0 shadow-xs">
                              <LuCheck className="w-3 h-3 stroke-[3]" />
                            </div>
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {exp.tags && exp.tags.length > 0 && (
                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                          Active Tech Spectrum
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.tags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200/80"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* DESKTOP VIEW (hidden lg:grid): Split HUD Console */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Mission Rails (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold px-1">
              Select Mission Node
            </div>
            <div className="space-y-2">
              {experiences.map((exp, idx) => {
                const isSelected = selectedIdx === idx;
                const revNumber = `REV.0${experiences.length - idx}`;
                return (
                  <button
                    key={idx}
                    onClick={() => setSelectedIdx(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 cursor-pointer border relative overflow-hidden ${
                      isSelected
                        ? "bg-white border-violet-500 shadow-md shadow-violet-500/10"
                        : "bg-white/60 hover:bg-white border-slate-200 hover:border-violet-300 shadow-xs"
                    }`}
                  >
                    {/* Active vertical laser indicator */}
                    {isSelected && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-violet-600 to-indigo-600" />
                    )}

                    <div className="flex items-center justify-between text-xs font-mono mb-1">
                      <span className={isSelected ? "font-bold text-violet-600" : "text-slate-400"}>
                        {revNumber}
                      </span>
                      <span className="text-slate-500 font-medium">{exp.period}</span>
                    </div>

                    <div className="font-extrabold text-base sm:text-lg text-slate-900">
                      {exp.company}
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-violet-700 mt-0.5 flex items-center justify-between">
                      <span className="truncate">{exp.role}</span>
                      {isSelected && <LuArrowRight className="w-4 h-4 text-violet-600 shrink-0 ml-2" />}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Mission Telemetry Display (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8 relative overflow-hidden">
            {/* Ambient cyber gradient glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/[0.04] rounded-full blur-3xl pointer-events-none" />

            {/* Header Telemetry */}
            <div className="space-y-4 pb-6 border-b border-slate-200 relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                <span className="px-3 py-1 rounded-md bg-violet-100 text-violet-800 font-bold">
                  ACTIVE_MISSION // 0{selectedIdx + 1}
                </span>
                <span className="flex items-center gap-1.5 text-slate-500 font-semibold">
                  <LuCalendar className="w-3.5 h-3.5 text-violet-600" />
                  {activeExp.period}
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {activeExp.role}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-bold text-violet-700 mt-1">
                  <span>{activeExp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-500 font-medium">
                    <LuMapPin className="w-3.5 h-3.5 text-violet-600" />
                    {activeExp.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Architecture Deliverables (Futuristic milestone layout) */}
            <div className="space-y-4 relative z-10">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                System Milestones & Architecture Feats
              </div>

              <div className="space-y-3">
                {activeExp.highlights.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-50/80 border border-slate-100 transition-all hover:border-violet-200 hover:bg-violet-50/30"
                  >
                    <div className="mt-0.5 p-1 rounded-md bg-violet-600 text-white shrink-0 shadow-xs">
                      <LuCheck className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                      {feat}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack Spectrum */}
            {activeExp.tags && activeExp.tags.length > 0 && (
              <div className="space-y-3 pt-6 border-t border-slate-200 relative z-10">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                  Active Technology Spectrum
                </div>
                <div className="flex flex-wrap gap-2">
                  {activeExp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 text-slate-800 border border-slate-200/80 hover:border-violet-400 hover:text-violet-700 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Futuristic Education Verification Matrix */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200">
          <div className="bg-gradient-to-r from-violet-500/[0.06] via-indigo-500/[0.04] to-transparent p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-violet-200/70 relative overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 sm:space-y-3 max-w-2xl">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-700">
                  <LuGraduationCap className="w-4 h-4 text-violet-600 shrink-0" />
                  <span>// ACADEMIC CREDENTIAL VERIFICATION</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight break-words">
                  {education.degree}
                </h3>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm font-semibold text-slate-700">
                  <span>{education.institution}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <LuMapPin className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                    {education.location}
                  </span>
                </div>
                {education.description && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1">
                    {education.description}
                  </p>
                )}
              </div>

              <div className="flex flex-col items-start lg:items-end gap-2.5 sm:gap-3 shrink-0 font-mono text-xs">
                <div className="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white border border-violet-200 shadow-xs font-bold text-violet-700">
                  SESSION // {education.period}
                </div>
                <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-[11px] sm:text-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                  <span>CREDENTIAL CONFERRED (AI & DATA SCIENCE)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
