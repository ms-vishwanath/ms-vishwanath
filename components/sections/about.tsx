"use client";

import { about, hats, principles } from "@/lib/profile";
import { Reveal, Section } from "@/components/ui";

export default function About() {
  return (
    <Section id="about" index="01" label="Who I am" title="More than a frontend developer. I build whole products.">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="space-y-6 text-lg leading-relaxed text-dim md:col-span-7 md:col-start-4">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-pretty">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Iso cards — the four hats */}
      <div className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {hats.map((h, i) => (
          <Reveal key={h.k} delay={i * 0.08} className="h-full">
            <div className="iso-card group h-full bg-bg p-8">
              <div className="iso-stack mb-10">
                <span /> <span /> <span />
              </div>
              <p className="mono text-xs text-dim">{h.k}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-tight">{h.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dim">{h.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid gap-8 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <p className="mono text-xs text-dim">Engineering philosophy</p>
        </Reveal>
        <ol className="md:col-span-9">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <li className="group flex items-baseline gap-6 border-b border-line py-5 transition-colors hover:bg-fg/[0.03]">
                <span className="mono text-xs text-dim">0{i + 1}</span>
                <span className="text-xl tracking-tight sm:text-2xl">{p.title}</span>
                <span className="ml-auto hidden text-right text-sm text-dim sm:block">{p.body}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}
