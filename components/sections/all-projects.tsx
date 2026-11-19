"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { ArrowUpRight, Brain, Cpu, Globe, Search, Server } from "lucide-react";
import { allProjects } from "@/lib/all-projects";
import { Reveal } from "@/components/ui";

const cats = [
  { name: "Web & SaaS", color: "#7dd3fc", icon: Globe },
  { name: "AI & ML", color: "#f9a8d4", icon: Brain },
  { name: "Backend & Cloud", color: "#c4b5fd", icon: Server },
  { name: "Embedded & IoT", color: "#86efac", icon: Cpu },
];
const catOf = (c: string) => cats.find((x) => x.name === c) ?? cats[0];
const host = (u: string) => { try { return new URL(u).hostname.replace("www.", ""); } catch { return u; } };

export default function AllProjects() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const list = useMemo(
    () => allProjects.filter((p) => (cat === "All" || p.category === cat) && (p.name + p.description).toLowerCase().includes(q.toLowerCase())),
    [cat, q]
  );

  return (
    <div>
      <Reveal className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="mono inline-flex items-center gap-2 rounded-full border-2 border-ink bg-[#ffc93c] px-3 py-1 text-xs font-bold shadow-[3px_3px_0_var(--ink)]">THE FULL LOT</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
            {allProjects.length} live projects. <span className="text-ink/45">Take one for a spin.</span>
          </h3>
        </div>
        <label className="relative w-full md:w-72">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-ink/50" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search projects…" className="w-full rounded-xl border-2 border-ink bg-white py-2.5 pl-9 pr-3 text-sm shadow-[3px_3px_0_var(--ink)] outline-none focus:-translate-y-0.5 transition-transform" />
        </label>
      </Reveal>

      <div className="mb-8 flex flex-wrap gap-2">
        {[{ name: "All", color: "#fff", icon: null }, ...cats].map((c) => {
          const n = c.name === "All" ? allProjects.length : allProjects.filter((p) => p.category === c.name).length;
          const active = cat === c.name;
          return (
            <button key={c.name} onClick={() => setCat(c.name)} className={`inline-flex items-center gap-2 rounded-full border-2 border-ink px-3 py-1.5 text-xs font-semibold transition-all ${active ? "bg-ink text-white" : "shadow-[2px_2px_0_var(--ink)] hover:-translate-y-0.5"}`} style={active ? {} : { background: c.color }}>
              {c.icon && <c.icon className="size-3.5" />} {c.name} <span className="opacity-50">{n}</span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => {
            const c = catOf(p.category);
            return (
              <motion.a
                layout
                key={p.name + p.link}
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 220, damping: 22, delay: (i % 3) * 0.05 }}
                whileHover={{ y: -5, rotate: i % 2 ? 0.6 : -0.6 }}
                className="group flex flex-col rounded-2xl border-2 border-ink bg-white p-5 shadow-[4px_4px_0_var(--ink)]"
              >
                <div className="flex items-center justify-between">
                  <span className="grid size-10 place-items-center rounded-xl border-2 border-ink" style={{ background: c.color }}>
                    <c.icon className="size-5" />
                  </span>
                  <span className="grid size-8 place-items-center rounded-full border-2 border-ink bg-white transition-all group-hover:bg-[#ffc93c] group-hover:rotate-45">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <h4 className="mt-4 text-lg font-semibold leading-tight">{p.name}</h4>
                <p className="mt-1.5 line-clamp-3 text-sm text-ink/70">{p.description}</p>
                <span className="mono mt-auto truncate pt-4 text-[11px] font-semibold text-ink/45">{host(p.link)}</span>
              </motion.a>
            );
          })}
        </AnimatePresence>
      </motion.div>
      {list.length === 0 && <p className="mt-6 text-ink/60">No projects match “{q}”.</p>}
    </div>
  );
}
