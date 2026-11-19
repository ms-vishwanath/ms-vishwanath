"use client";

import { HomeArt } from "@/components/illustrations";

import { about, hats, principles } from "@/lib/profile";
import { Reveal, Section } from "@/components/ui";

export default function About() {
  return (
    <Section id="about" index="01" label="Home base" tint="#ffe3e3" accent="#ff6b6b" art={<HomeArt />} title="More than a frontend developer. I build whole products.">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="space-y-6 text-lg leading-relaxed text-ink/65 md:col-span-7 md:col-start-4">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-pretty">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Iso cards — the four hats */}
      <div className="mt-20 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {hats.map((h, i) => (
          <Reveal key={h.k} delay={i * 0.08} className="h-full">
            <div className="iso-card group h-full rounded-2xl border-2 border-ink p-7 shadow-[5px_5px_0_var(--ink)] transition-transform duration-300 hover:-translate-y-1.5" style={{ background: ["#ffc93c", "#7dd3fc", "#f9a8d4", "#86efac"][i] }}>
              <div className="iso-stack mb-10">
                <span /> <span /> <span />
              </div>
              <p className="mono text-xs text-ink/65">{h.k}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/80">{h.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="mono text-xs text-ink/65">Engineering philosophy</p>
        </Reveal>
        <ol className="md:col-span-9">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <li className="group flex items-baseline gap-6 border-b border-ink py-5 transition-colors hover:bg-white/60">
                <span className="mono grid size-8 shrink-0 place-items-center rounded-full border-2 border-ink text-xs font-bold" style={{ background: ["#ff6b6b", "#ffc93c", "#2ec4b6", "#3d5afe", "#ec4899"][i], color: "#fff" }}>0{i + 1}</span>
                <span className="text-xl tracking-tight sm:text-2xl">{p.title}</span>
                <span className="ml-auto hidden text-right text-sm text-ink/65 sm:block">{p.body}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
