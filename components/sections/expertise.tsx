"use client";

import { ToolboxArt } from "@/components/illustrations";

import { motion } from "framer-motion";
import { useState } from "react";
import { expertise } from "@/lib/profile";
import { Reveal, Section } from "@/components/ui";
import { TechIcon, tech } from "@/lib/tech";

export default function Expertise() {
  const [active, setActive] = useState(0);
  const cur = expertise[active];

  return (
    <Section id="expertise" index="02" label="Workshop" tint="#e3e9ff" accent="#3d5afe" art={<ToolboxArt />} title="A full-stack toolkit, from pixels to packets." lead="Grouped by the layer of the system it lives in. Pick a layer.">
      <div className="grid gap-10 lg:grid-cols-12">
        {/* Isometric layer stack selector */}
        <div className="lg:col-span-5">
          <div className="iso-layers relative mx-auto hidden h-[420px] max-w-sm lg:block">
            {expertise.map((e, i) => (
              <button
                key={e.area}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`iso-layer ${i === active ? "is-active" : ""}`}
                style={{ ["--i" as string]: i, ["--n" as string]: expertise.length }}
                aria-label={e.area}
              >
                <span className="mono">{e.area}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="mb-8 flex flex-wrap gap-2 lg:hidden">
            {expertise.map((e, i) => (
              <button key={e.area} onClick={() => setActive(i)} className={`mono rounded-full border px-3 py-1 text-xs ${i === active ? "border-ink bg-ink text-white" : "border-ink bg-white"}`}>
                {e.area}
              </button>
            ))}
          </div>
          <motion.div key={cur.area} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
            <p className="mono text-xs text-ink/65">
              layer {String(active + 1).padStart(2, "0")} / {String(expertise.length).padStart(2, "0")}
            </p>
            <h3 className="mt-3 text-4xl font-medium tracking-tighter sm:text-5xl">{cur.area}</h3>
            <p className="mt-3 text-ink/65">{cur.note}</p>
            <div className="mt-10 flex flex-wrap gap-2">
              {cur.items.map((it, i) => (
                <motion.span
                  key={it}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.025 }}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-ink bg-white px-3.5 py-2 text-sm font-medium shadow-[3px_3px_0_var(--ink)] transition-transform hover:-translate-y-1"
                  style={{ ["--c" as string]: tech(it).color }}
                >
                  <TechIcon name={it} className="size-5" /> {it}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Marquee of everything */}
      <Reveal className="mt-28">
        <div className="marquee mask-x border-y-2 border-ink bg-white py-5">
          <div className="marquee-track text-sm font-medium">
            {[0, 1].map((k) => (
              <span key={k} className="flex shrink-0 gap-10 pr-10" aria-hidden={k === 1}>
                {expertise.flatMap((e) => e.items).map((t) => (
                  <span key={t + k} className="inline-flex items-center gap-2 whitespace-nowrap">
                    <TechIcon name={t} className="size-5" /> {t}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
