"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { TechIcon } from "@/lib/tech";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className, y = 24 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay, ease }}>
      {children}
    </motion.div>
  );
}

export function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <span ref={ref} className={cn("inline", className)} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.1em] align-bottom" aria-hidden>
          <motion.span className="inline-block" initial={{ y: "110%", rotate: 6 }} animate={inView ? { y: 0, rotate: 0 } : {}} transition={{ duration: 0.8, delay: delay + i * 0.05, ease }}>
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** A stop on the drive: tinted full-bleed band, checkpoint gate across the road, illustration. */
export function Section({
  id, index, label, title, lead, art, tint, accent, children, className,
}: { id: string; index: string; label: string; title: string; lead?: string; art?: ReactNode; tint: string; accent: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} data-stop={label} style={{ background: tint, ["--accent" as string]: accent }} className={cn("relative py-20 sm:py-28 lg:py-32", className)}>
      <Gate index={index} label={label} accent={accent} />
      <div className="road-pad">
        <div className="wrap">
          <div className="mb-14 grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="mono inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-semibold shadow-[3px_3px_0_var(--ink)]">
                  <span className="size-2 rounded-full" style={{ background: accent }} /> CP {index} · {label}
                </p>
              </Reveal>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
                <SplitText text={title} />
              </h2>
              {lead && (
                <Reveal delay={0.15}>
                  <p className="mt-5 max-w-xl text-lg text-ink/70 text-pretty">{lead}</p>
                </Reveal>
              )}
            </div>
            {art && (
              <Reveal delay={0.1} className="mx-auto w-full max-w-[18rem] sm:max-w-sm lg:col-span-5 lg:max-w-md">
                {art}
              </Reveal>
            )}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}

export function Gate({ index, label, accent }: { index: string; label: string; accent: string }) {
  return (
    <div className="gate pointer-events-none absolute top-0 z-10" aria-hidden>
      <div className="gate-bar" style={{ background: accent }}>
        <span className="mono">CP{index}</span>
        <span className="mono gate-label">{label}</span>
      </div>
    </div>
  );
}

export function Tag({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-2.5 py-1 text-xs font-medium">
      <TechIcon name={children} className="size-3.5" /> {children}
    </span>
  );
}
