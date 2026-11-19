"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, className, y = 24 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

// Word-by-word masked reveal for headlines.
export function SplitText({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <span ref={ref} className={cn("inline", className)} aria-label={text}>
      {text.split(" ").map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em]" aria-hidden>
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: 0 } : {}}
            transition={{ duration: 0.9, delay: delay + i * 0.06, ease }}
          >
            {w}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export function Section({ id, index, label, title, lead, children, className }: { id: string; index: string; label: string; title: string; lead?: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={cn("relative border-t border-line py-28 sm:py-36", className)}>
      <div className="wrap">
        <div className="mb-16 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <p className="mono text-xs text-dim">
                <span className="text-fg">{index}</span> / {label}
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <h2 className="text-4xl font-medium tracking-tighter sm:text-6xl text-balance">
              <SplitText text={title} />
            </h2>
            {lead && (
              <Reveal delay={0.15}>
                <p className="mt-6 max-w-2xl text-lg text-dim text-pretty">{lead}</p>
              </Reveal>
            )}
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="mono rounded-full border border-line px-2.5 py-1 text-[11px] text-dim">{children}</span>;
}
