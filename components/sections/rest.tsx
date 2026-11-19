"use client";

import { TowerArt, TeamArt, GiraffeArt, FinishArt } from "@/components/illustrations";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import type { MouseEvent, ReactNode } from "react";
import { aiWork, leadership, profile, venture } from "@/lib/profile";
import { Gate, Reveal, Section, SplitText } from "@/components/ui";

function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });
  const move = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <motion.div onMouseMove={move} onMouseLeave={() => { x.set(0); y.set(0); }} style={{ rotateX: rx, rotateY: ry, transformPerspective: 900 }} className={className}>
      {children}
    </motion.div>
  );
}

export function AI() {
  return (
    <Section id="ai" index="05" label="AI tower" tint="#fff3d1" accent="#f59e0b" art={<TowerArt />} title="Putting intelligence where it actually helps." lead="I treat AI as an engineering material, not a gimmick. I wire models into products, automate workflows and build tooling for developers.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aiWork.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <Tilt className="group relative h-full overflow-hidden rounded-2xl border-2 border-ink bg-white p-8 shadow-[5px_5px_0_var(--ink)]">
              <div className="iso-cube mb-10" style={{ animationDelay: `${i * -0.8}s` }}>
                <i /> <i /> <i />
              </div>
              <h3 className="text-xl font-medium tracking-tight">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{a.body}</p>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Leadership() {
  return (
    <Section id="leadership" index="06" label="Crew" tint="#d6f6ef" accent="#14b8a6" art={<TeamArt />} title="Lead the team, teach the craft, own the outcome.">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="grid grid-cols-3 gap-0.5 self-start overflow-hidden rounded-2xl border-2 border-ink bg-ink shadow-[5px_5px_0_var(--ink)] [&>*:nth-child(1)]:bg-[#ffc93c] [&>*:nth-child(2)]:bg-[#7dd3fc] [&>*:nth-child(3)]:bg-[#f9a8d4] lg:col-span-5">
          {leadership.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="p-6" >
              <p className="text-4xl font-medium tracking-tighter sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs text-ink/65">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <ul className="lg:col-span-6 lg:col-start-7">
          {leadership.points.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <li className="flex gap-4 border-b border-ink py-4 text-lg">
                <span className="mono pt-1.5 text-xs text-ink/65">→</span> {p}
              </li>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="mt-8 text-ink/65">I work comfortably as both an individual contributor and a technical coordinator, and I enjoy training and mentoring developers as they grow.</p>
          </Reveal>
        </ul>
      </div>
    </Section>
  );
}

export function Venture() {
  return (
    <Section id="venture" index="07" label="GiraffAI" tint="#ffe9d9" accent="#f97316" art={<GiraffeArt />} title="GiraffAI — my independent technology venture.">
      <Reveal>
        <Tilt className="relative overflow-hidden rounded-3xl border-2 border-ink bg-[#ff7a1a] text-ink shadow-[8px_8px_0_var(--ink)]">
          <div className="grid gap-10 p-8 sm:p-14 lg:grid-cols-2">
            <div>
              <p className="mono text-xs opacity-60">{venture.tagline}</p>
              <h3 className="mt-4 text-5xl font-medium tracking-tighter sm:text-7xl">{venture.name}</h3>
              <p className="mt-6 max-w-md text-pretty opacity-70">{venture.body}</p>
              <a href={venture.url} target="_blank" rel="noopener noreferrer" className="group mt-10 inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-6 py-3 text-sm font-semibold shadow-[3px_3px_0_var(--ink)]">
                giraffai.in <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-px self-end overflow-hidden rounded-2xl border-2 border-ink bg-ink">
              {venture.focus.map((f, i) => (
                <div key={f} className="p-5" style={{ background: ["#ffc93c", "#fff", "#7dd3fc", "#fff", "#f9a8d4", "#86efac"][i] }}>
                  <p className="mono text-[11px] opacity-50">0{i + 1}</p>
                  <p className="mt-1 text-sm">{f}</p>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      </Reveal>
    </Section>
  );
}

export function Contact() {
  const socials = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, c: "#ffc93c" },
    { label: "WhatsApp", value: "Chat with me", href: profile.whatsapp, icon: FaWhatsapp, c: "#86efac" },
    { label: "LinkedIn", value: "in/msvishwanath", href: profile.linkedin, icon: FaLinkedinIn, c: "#7dd3fc" },
    { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: SiGithub, c: "#f9a8d4" },
  ];
  return (
    <section id="contact" data-stop="Finish" style={{ background: "#d9fbe3", ["--accent" as string]: "#22c55e" }} className="relative overflow-hidden pb-10 pt-28">
      <Gate index="08" label="Finish" accent="#22c55e" />
      <div className="finish pointer-events-none absolute top-0 z-10" aria-hidden />
      <div className="road-pad">
        <div className="wrap">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="mono inline-flex items-center gap-2 rounded-full border-2 border-ink bg-white px-3 py-1 text-xs font-semibold shadow-[3px_3px_0_var(--ink)]">🏁 You made it to the finish</p>
              <h2 className="mt-8 text-[clamp(2.75rem,8vw,7rem)] font-semibold leading-[0.95] tracking-tight">
                <SplitText text="Have an idea?" />
                <br />
                <span className="text-[#16a34a]">
                  <SplitText text="Let's build it." delay={0.2} />
                </span>
              </h2>
              <Reveal delay={0.3}>
                <p className="mt-6 max-w-lg text-lg text-ink/70">Freelance builds, AI integrations, architecture reviews, training sessions — tell me what you're working on.</p>
              </Reveal>
            </div>
            <Reveal className="mx-auto w-full max-w-md lg:col-span-5"><FinishArt /></Reveal>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{ background: s.c }} className="group flex items-center justify-between rounded-2xl border-2 border-ink p-6 shadow-[5px_5px_0_var(--ink)] transition-transform hover:-translate-y-1">
                <span className="flex items-center gap-3">
                  <s.icon className="size-5" />
                  <span>
                    <span className="block text-xs font-semibold opacity-60">{s.label}</span>
                    <span className="text-sm font-medium">{s.value}</span>
                  </span>
                </span>
                <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>

          <footer className="mono mt-20 flex flex-col justify-between gap-2 text-xs text-ink/60 sm:flex-row">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>{profile.location}</span>
            <a href={profile.resume} target="_blank" className="hover:text-ink">Résumé ↗</a>
          </footer>
        </div>
      </div>
    </section>
  );
}
