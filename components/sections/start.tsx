"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { profile } from "@/lib/profile";
import { StartArt } from "@/components/illustrations";
import { Gate, SplitText } from "@/components/ui";
import { TechIcon } from "@/lib/tech";

const floaters = ["React", "Next.js", "Node.js", "Python", "PostgreSQL", "Docker", "GraphQL", "Gemini API", "Redis", "TypeScript"];

export default function Start() {
  return (
    <section id="start" data-stop="Start" style={{ background: "#fff6d6", ["--accent" as string]: "#ffc93c" }} className="relative min-h-svh overflow-hidden">
      <Gate index="00" label="Start" accent="#ffc93c" />
      <div className="dots pointer-events-none absolute inset-0" />

      {/* floating stack icons */}
      <div className="road-pad pointer-events-none absolute inset-0 hidden md:block" aria-hidden>
        {floaters.map((f, i) => (
          <motion.span
            key={f}
            className="absolute grid size-12 place-items-center rounded-2xl border-2 border-ink bg-white shadow-[3px_3px_0_var(--ink)]"
            style={{ left: `${62 + ((i * 37) % 33)}%`, top: `${10 + ((i * 53) % 80)}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0], rotate: [0, i % 2 ? 6 : -6, 0] }}
            transition={{ opacity: { delay: 0.6 + i * 0.07 }, scale: { delay: 0.6 + i * 0.07, type: "spring" }, y: { duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 4 + (i % 2), repeat: Infinity } }}
          >
            <TechIcon name={f} className="size-6" />
          </motion.span>
        ))}
      </div>

      <div className="road-pad relative">
        <div className="wrap flex min-h-svh flex-col justify-center pb-20 pt-24">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="relative z-10 lg:col-span-7">
              <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mono inline-flex flex-wrap items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-semibold shadow-[3px_3px_0_var(--ink)]">
                <span className="size-2 animate-pulse rounded-full bg-[#22c55e]" /> Full Stack AI Developer · open for freelance & training
              </motion.p>
              <p className="mt-7 text-xl font-semibold text-ink/70 sm:text-2xl">Hey, I&apos;m</p>
              <h1 className="relative -ml-1 whitespace-nowrap text-[clamp(3.4rem,8.2vw,8.4rem)] font-bold leading-[0.9] tracking-tighter">
                <span className="relative z-10">
                  {"Vishwanath".split("").map((ch, i) => (
                    <motion.span
                      key={i}
                      className="inline-block"
                      style={{ color: ["#1d1b2e", "#ff6b35", "#1d1b2e", "#3d5afe", "#1d1b2e", "#ec4899", "#1d1b2e", "#14b8a6", "#1d1b2e", "#f59e0b"][i] }}
                      initial={{ y: "100%", opacity: 0, rotate: -12 }}
                      animate={{ y: 0, opacity: 1, rotate: 0 }}
                      whileHover={{ y: -14, rotate: i % 2 ? 8 : -8, transition: { type: "spring", stiffness: 500 } }}
                      transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.15 + i * 0.05 }}
                    >
                      {ch}
                    </motion.span>
                  ))}
                </span>
                <motion.span className="absolute bottom-[0.06em] left-1 z-0 h-[0.18em] w-[calc(100%-0.2em)] origin-left rounded-full bg-[#ffc93c]" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }} />
              </h1>
              <h2 className="mt-5 text-[clamp(1.6rem,3.4vw,2.8rem)] font-semibold leading-tight tracking-tight">
                <SplitText text="Take a drive through what I build." delay={0.7} />
              </h2>
              <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }} className="mt-5 max-w-xl text-lg text-ink/75 text-pretty">
                Full Stack AI Developer, architect, freelancer and trainer. I turn ideas into intelligent, scalable products. Grab the wheel and collect my stack on the road.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#about" className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[#ff6b35] px-6 py-3 text-sm font-semibold text-white shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-0.5">
                  Start driving <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[#25d366] px-6 py-3 text-sm font-semibold shadow-[4px_4px_0_var(--ink)] transition-transform hover:-translate-y-0.5">
                  <FaWhatsapp className="size-4" /> Hire me <ArrowUpRight className="size-4" />
                </a>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-10 hidden items-center gap-4 md:flex">
                <div className="grid grid-cols-3 gap-1">
                  <span />
                  <kbd className="kbd">W</kbd>
                  <span />
                  <kbd className="kbd">A</kbd>
                  <kbd className="kbd">S</kbd>
                  <kbd className="kbd">D</kbd>
                </div>
                <p className="text-sm text-ink/70">Drive with <b>WASD</b> or <b>arrow keys</b>.<br />Hit the icons on the road to collect skills.</p>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, type: "spring", stiffness: 80 }} className="relative z-10 mx-auto w-full max-w-lg lg:col-span-5">
              <StartArt />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
