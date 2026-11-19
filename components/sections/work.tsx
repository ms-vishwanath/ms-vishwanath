"use client";

import { GarageArt } from "@/components/illustrations";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { projects, type Status } from "@/lib/profile";
import { Reveal, Section, Tag } from "@/components/ui";

const filters: ("All" | Status)[] = ["All", "Contributed", "Built", "In progress", "Concept", "Experimental"];

const dot: Record<Status, string> = {
  Contributed: "bg-[#3d5afe]",
  Built: "bg-[#22c55e]",
  "In progress": "bg-[#f59e0b] animate-pulse",
  Concept: "bg-[#ec4899]",
  Experimental: "bg-[#8b5cf6]",
};

export default function Work() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const [open, setOpen] = useState<string | null>(projects[0].name);
  const list = projects.filter((p) => f === "All" || p.status === f);

  return (
    <Section id="work" index="03" label="Garage" tint="#ffe4f1" accent="#ec4899" art={<GarageArt />} title="Selected work — shipped, shaping and experimental." lead="Each project is labelled honestly: what I contributed to, what I built, what's in progress and what's still a concept.">
      <Reveal className="mb-10 flex flex-wrap gap-2">
        {filters.map((x) => (
          <button key={x} onClick={() => setF(x)} className={`mono rounded-full border px-3 py-1 text-xs transition-colors ${f === x ? "border-ink bg-ink text-white" : "border-ink text-ink/65 hover:text-fg"}`}>
            {x}
          </button>
        ))}
      </Reveal>

      <motion.ul layout className="overflow-hidden rounded-2xl border-2 border-ink bg-white px-5 shadow-[6px_6px_0_var(--ink)] sm:px-8">
        <AnimatePresence initial={false}>
          {list.map((p, i) => {
            const isOpen = open === p.name;
            return (
              <motion.li layout key={p.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border-b border-ink">
                <button onClick={() => setOpen(isOpen ? null : p.name)} className="group grid w-full grid-cols-12 items-center gap-4 py-7 text-left">
                  <span className="mono col-span-1 text-xs text-ink/65">{String(i + 1).padStart(2, "0")}</span>
                  <span className="col-span-11 text-2xl font-medium tracking-tight transition-transform duration-500 group-hover:translate-x-2 sm:col-span-5 sm:text-4xl">{p.name}</span>
                  <span className="col-span-6 col-start-2 text-sm text-ink/65 sm:col-span-3 sm:col-start-auto">{p.kind}</span>
                  <span className="mono col-span-4 flex items-center gap-2 text-xs text-ink/65 sm:col-span-2">
                    <span className={`size-2 rounded-full ${dot[p.status]}`} /> {p.status}
                  </span>
                  <Plus className={`col-span-1 size-5 justify-self-end transition-transform duration-500 ${isOpen ? "rotate-45" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <div className="grid gap-8 pb-10 sm:grid-cols-12">
                        <div className="sm:col-span-5 sm:col-start-2">
                          <p className="text-lg text-pretty">{p.summary}</p>
                          <div className="mt-6 flex flex-wrap gap-2">
                            {p.stack.map((s) => (
                              <Tag key={s}>{s}</Tag>
                            ))}
                          </div>
                        </div>
                        <ul className="space-y-3 sm:col-span-5 sm:col-start-8">
                          {p.points.map((pt) => (
                            <li key={pt} className="flex gap-3 text-sm text-ink/65">
                              <span className="mt-1.5 size-2 shrink-0 rounded-full bg-[var(--accent)]" /> {pt}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
