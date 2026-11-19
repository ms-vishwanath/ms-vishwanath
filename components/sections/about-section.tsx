"use client";

import React, { useState } from "react";
import Link from "next/link";
import { personalInfo, professionalSummary, socialLinks } from "@/lib/about_vish";
import { smoothScrollToId } from "@/lib/utils";
import {
  LuTerminal,
  LuCpu,
  LuLayers,
  LuSparkles,
  LuFileText,
  LuExternalLink,
  LuMapPin,
  LuMail,
  LuPhone,
  LuActivity,
  LuArrowUpRight,
} from "react-icons/lu";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState<"summary" | "architecture" | "ai">("summary");

  const telemetryMetrics = [
    {
      code: "METRIC_01",
      value: "1 Year",
      label: "Production Tenor",
      subtext: "End-to-end full stack architecture",
    },
    {
      code: "METRIC_02",
      value: "70+",
      label: "Systems Shipped",
      subtext: "SaaS, AI tools, IoT & CRM platforms",
    },
    {
      code: "METRIC_03",
      value: "40+",
      label: "Microservices",
      subtext: "Distributed & BFF architectures",
    },
    {
      code: "METRIC_04",
      value: "$500/mo",
      label: "Cloud Cost Saved",
      subtext: "Zero-downtime AWS to VPS migration",
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-200 overflow-hidden" id="about">
      {/* Subtle futuristic background grid */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        {/* Futuristic Top HUD Ticker */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/90 text-[11px] sm:text-xs font-mono tracking-wider sm:tracking-widest text-slate-500">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-slate-800">
              SYS_STATUS: ONLINE // ARCHITECTURAL DOSSIER
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-slate-500">
            <span className="break-all sm:break-normal">LOC: 11.0168° N, 76.9558° E [COIMBATORE, IN]</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">SPEC_VER: 2026.10</span>
          </div>
        </div>

        {/* Section Heading & Identity Banner */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-violet-50 text-violet-700 border border-violet-200">
            <LuTerminal className="w-3.5 h-3.5 text-violet-600" />
            // EXECUTIVE TECHNICAL BRIEFING
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Engineering at the confluence of{" "}
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              distributed microservices
            </span>{" "}
            & autonomous AI.
          </h2>
        </div>

        {/* Futuristic Interactive Command Deck */}
        <div className="relative border border-slate-200 bg-slate-50/70 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-sm space-y-6 sm:space-y-8">
          {/* Cyber Terminal Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4 sm:pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-slate-500 ml-2 truncate">
                msv_dossier.sh --profile fullstack
              </span>
            </div>

            {/* Futuristic Tab Selectors */}
            <div className="flex items-center gap-1.5 p-1 bg-white rounded-xl border border-slate-200 w-full sm:w-auto overflow-x-auto no-scrollbar shadow-xs">
              <button
                onClick={() => setActiveTab("summary")}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === "summary"
                    ? "bg-violet-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-violet-600"
                }`}
              >
                [01 // SUMMARY]
              </button>
              <button
                onClick={() => setActiveTab("architecture")}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === "architecture"
                    ? "bg-violet-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-violet-600"
                }`}
              >
                [02 // ARCHITECTURE]
              </button>
              <button
                onClick={() => setActiveTab("ai")}
                className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                  activeTab === "ai"
                    ? "bg-violet-600 text-white shadow-xs"
                    : "text-slate-600 hover:text-violet-600"
                }`}
              >
                [03 // AI WORKFLOWS]
              </button>
            </div>
          </div>

          {/* Dynamic Telemetry Tab Content */}
          <div className="min-h-[160px] flex items-center">
            {activeTab === "summary" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <p className="text-lg sm:text-xl text-slate-800 leading-relaxed font-normal">
                  {professionalSummary}
                </p>
              </div>
            )}

            {activeTab === "architecture" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <span className="text-xs font-mono font-bold text-violet-600">
                      // 40+ MICROSERVICES SUPERAPP
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      High-Throughput Distributed Orchestration
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Engineered 40+ independent microservices, 8 Backend-for-Frontend (BFF) layers,
                      and 4 socket clusters to handle massive real-time logistics and location-based delivery workflows.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <span className="text-xs font-mono font-bold text-indigo-600">
                      // INFRASTRUCTURE MIGRATION
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      Private Cloud VPS Engineering
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Re-engineered production AWS topologies into containerized private VPS clusters with automated
                      reverse proxies and secure network fabrics, generating $500 monthly recurring savings.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "ai" && (
              <div className="space-y-4 animate-in fade-in duration-300">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <span className="text-xs font-mono font-bold text-emerald-600">
                      // MULTI-AGENT SYNCHRONIZATION
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      Parallel AI Agent Swarms
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Pioneered multi-agent parallel coding workflows utilizing OpenCode, Claude Code, and Antigravity,
                      coordinating autonomous subagents concurrently across architecture, testing, and DevOps deployment.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-2">
                    <span className="text-xs font-mono font-bold text-pink-600">
                      // APPLIED VISION & OCR
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      Edge Machine Learning Integrations
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Built production facial recognition engines via YOLOv8, in-browser MediaPipe gesture tracking,
                      and Tesseract document OCR classifiers for automated compliance and verification.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Futuristic Telemetry Metrics Strip (Linear telemetry layout, NOT clunky cards!) */}
          <div className="pt-6 sm:pt-8 border-t border-slate-200">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {telemetryMetrics.map((metric, idx) => (
                <div key={idx} className="space-y-1 group">
                  <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-slate-400">
                    <span>{metric.code}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400 opacity-60 group-hover:opacity-100" />
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 group-hover:text-violet-600 transition-colors">
                    {metric.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-800">{metric.label}</div>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-normal">{metric.subtext}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Command Controls & Direct Transmitters */}
          <div className="pt-6 border-t border-slate-200 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 sm:gap-6">
            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href="/VISHWANATH-RESUME.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-mono font-bold bg-violet-600 text-white hover:bg-violet-700 transition-all shadow-md shadow-violet-500/20 cursor-pointer text-center"
              >
                <LuFileText className="w-4 h-4 shrink-0" />
                <span>[ DOWNLOAD_RESUME.PDF ]</span>
              </a>
              <button
                onClick={() => smoothScrollToId("experience")}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-mono font-bold bg-white text-slate-800 border border-slate-300 hover:border-violet-600 hover:text-violet-600 transition-all shadow-xs cursor-pointer text-center"
              >
                <span>[ VIEW_EXPERIENCE_LOG ]</span>
                <LuArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
              <button
                onClick={() => smoothScrollToId("projects")}
                className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-mono font-bold bg-white text-slate-800 border border-slate-300 hover:border-violet-600 hover:text-violet-600 transition-all shadow-xs cursor-pointer text-center"
              >
                <span>[ BROWSE_70+_PROJECTS ]</span>
                <LuArrowUpRight className="w-4 h-4 shrink-0" />
              </button>
            </div>

            {/* Comm Links */}
            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 sm:gap-3 font-mono text-xs">
              <Link
                href={socialLinks.email.link}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-violet-500 hover:text-violet-600 transition-all shadow-xs"
              >
                <LuMail className="w-3.5 h-3.5 text-violet-600 shrink-0" />
                <span>EMAIL</span>
              </Link>
              <Link
                href={socialLinks.phone.link}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-violet-500 hover:text-violet-600 transition-all shadow-xs"
              >
                <LuPhone className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>PHONE</span>
              </Link>
              <Link
                href={socialLinks.github.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-violet-500 hover:text-violet-600 transition-all shadow-xs"
              >
                <SiGithub className="w-3.5 h-3.5 text-slate-800 shrink-0" />
                <span>GITHUB</span>
              </Link>
              <Link
                href={socialLinks.linkedin.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-white border border-slate-200 hover:border-violet-500 hover:text-violet-600 transition-all shadow-xs"
              >
                <SiLinkedin className="w-3.5 h-3.5 text-[#0077B5] shrink-0" />
                <span>LINKEDIN</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
