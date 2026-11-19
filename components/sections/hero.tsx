"use client";

import dynamic from "next/dynamic";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/profile";
import { SplitText } from "@/components/ui";

const IsoScene = dynamic(() => import("@/components/iso-scene"), { ssr: false });

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const [role, setRole] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRole((r) => (r + 1) % profile.roles.length), 2400);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" ref={ref} className="relative min-h-svh overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <motion.div style={{ y: sceneY, opacity: fade }} className="absolute inset-x-0 bottom-0 top-[45%] opacity-50 md:inset-0 md:left-[38%] md:opacity-100" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.6 }}>
        <IsoScene />
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent md:via-bg/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-bg to-transparent" />

      <motion.div style={{ opacity: fade }} className="wrap relative flex min-h-svh flex-col justify-center pb-24 pt-32">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="mono mb-8 flex items-center gap-2 text-xs text-dim">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fg opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-fg" />
          </span>
          Available for freelance & collaborations · {profile.location}
        </motion.p>

        <h1 className="max-w-4xl text-[clamp(3rem,9vw,8.5rem)] font-medium leading-[0.92] tracking-tighter">
          <SplitText text="M. S." delay={0.3} />
          <br />
          <SplitText text="Vishwanath" delay={0.45} />
        </h1>

        <div className="mt-8 flex h-9 items-center gap-3 text-xl sm:text-2xl">
          <span className="text-dim">I am a</span>
          <span className="relative inline-block overflow-hidden whitespace-nowrap">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={role}
                className="inline-block"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                {profile.roles[role]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.8 }} className="mt-6 max-w-xl text-lg text-dim text-pretty">
          {profile.intro}
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.05, duration: 0.8 }} className="mt-10 flex flex-wrap gap-3">
          <a href="#work" className="group inline-flex items-center gap-2 rounded-full bg-fg px-6 py-3 text-sm font-medium text-bg">
            See my work <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-fg">
            Start a project <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>

      <div className="mono pointer-events-none absolute bottom-8 right-6 hidden text-[11px] text-dim md:block">
        fig.01 — services as an isometric city
      </div>
    </section>
  );
}
