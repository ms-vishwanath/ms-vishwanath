"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { GarageArt } from "@/components/illustrations";
import { projects, type Status } from "@/lib/profile";
import { Reveal, Section, Tag } from "@/components/ui";
import AllProjects from "./all-projects";

const filters: ("All" | Status)[] = ["All", "Contributed", "Built", "In progress", "Concept", "Experimental"];

const statusColor: Record<Status, string> = {
  Contributed: "#3d5afe",
  Built: "#22c55e",
  "In progress": "#f59e0b",
  Concept: "#ec4899",
  Experimental: "#8b5cf6",
};

const bay = ["#ffc93c", "#7dd3fc", "#f9a8d4", "#86efac", "#c4b5fd", "#fdba74", "#a5f3fc", "#fde68a"];

export default function Work() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = projects.filter((p) => f === "All" || p.status === f);

  return (
    <Section id="work" index="03" label="Garage" tint="#ffe4f1" accent="#ec4899" art={<GarageArt />} title="The garage — 70+ projects built, shipped and shaped." lead="Featured builds first, each parked in its own bay and labelled honestly. Below them is the full lot of every live project I've shipped.">
      <Reveal className="mb-8 flex flex-wrap gap-2">
        {filters.map((x) => {
          const n = x === "All" ? projects.length : projects.filter((p) => p.status === x).length;
          return (
            <button key={x} onClick={() => setF(x)} className={`inline-flex items-center gap-2 rounded-full border-2 border-ink px-3 py-1 text-xs font-semibold transition-all ${f === x ? "bg-ink text-white" : "bg-white shadow-[2px_2px_0_var(--ink)] hover:-translate-y-0.5"}`}>
              {x !== "All" && <span className="size-2 rounded-full" style={{ background: statusColor[x] }} />}
              {x} <span className="opacity-50">{n}</span>
            </button>
          );
        })}
      </Reveal>

      <motion.div layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => {
            const n = projects.indexOf(p);
            return (
              <motion.article
                layout
                key={p.name}
                initial={{ opacity: 0, y: 30, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 160, damping: 20, delay: (i % 2) * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-white shadow-[6px_6px_0_var(--ink)]"
              >
                {/* bay door — rolls up on hover */}
                <div className="relative flex items-center justify-between overflow-hidden border-b-2 border-ink px-5 py-3" style={{ background: bay[n % bay.length] }}>
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0_9px,rgba(29,27,46,.14)_9px_11px)] transition-transform duration-500 group-hover:-translate-y-full" />
                  <span className="mono relative text-xs font-bold">BAY {String(n + 1).padStart(2, "0")}</span>
                  <span className="relative inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-white px-2.5 py-0.5 text-[11px] font-bold">
                    <span className="size-2 rounded-full" style={{ background: statusColor[p.status] }} /> {p.status}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{p.name}</h3>
                  <p className="mono mt-1 text-xs font-semibold text-ink/55">{p.kind}</p>
                  <p className="mt-4 text-pretty text-ink/80">{p.summary}</p>
                  <ul className="mt-4 space-y-2">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5 text-sm text-ink/75">
                        <span className="mt-1.5 size-2 shrink-0 rounded-full" style={{ background: statusColor[p.status] }} /> {pt}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                    {p.stack.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      <AllProjects />
    </Section>
  );
}
