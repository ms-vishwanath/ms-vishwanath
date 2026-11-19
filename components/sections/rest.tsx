"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import type { MouseEvent, ReactNode } from "react";
import { aiWork, leadership, profile, venture } from "@/lib/profile";
import { Reveal, Section, SplitText } from "@/components/ui";

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
    <Section id="ai" index="05" label="AI & innovation" title="Putting intelligence where it actually helps." lead="I treat AI as an engineering material, not a gimmick. I wire models into products, automate workflows and build tooling for developers.">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aiWork.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.06}>
            <Tilt className="group relative h-full overflow-hidden rounded-2xl border border-line bg-fg/[0.02] p-8 transition-colors hover:border-fg">
              <div className="iso-cube mb-10" style={{ animationDelay: `${i * -0.8}s` }}>
                <i /> <i /> <i />
              </div>
              <h3 className="text-xl font-medium tracking-tight">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-dim">{a.body}</p>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export function Leadership() {
  return (
    <Section id="leadership" index="06" label="Leadership & training" title="Lead the team, teach the craft, own the outcome.">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="grid grid-cols-3 gap-px self-start overflow-hidden rounded-2xl border border-line bg-line lg:col-span-5">
          {leadership.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="bg-bg p-6">
              <p className="text-4xl font-medium tracking-tighter sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs text-dim">{s.label}</p>
            </Reveal>
          ))}
        </div>
        <ul className="lg:col-span-6 lg:col-start-7">
          {leadership.points.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <li className="flex gap-4 border-b border-line py-4 text-lg">
                <span className="mono pt-1.5 text-xs text-dim">→</span> {p}
              </li>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <p className="mt-8 text-dim">I work comfortably as both an individual contributor and a technical coordinator, and I enjoy training and mentoring developers as they grow.</p>
          </Reveal>
        </ul>
      </div>
    </Section>
  );
}

export function Venture() {
  return (
    <Section id="venture" index="07" label="Ventures" title="GiraffAI — my independent technology venture.">
      <Reveal>
        <Tilt className="relative overflow-hidden rounded-3xl border border-line bg-fg text-bg">
          <div className="grid gap-10 p-8 sm:p-14 lg:grid-cols-2">
            <div>
              <p className="mono text-xs opacity-60">{venture.tagline}</p>
              <h3 className="mt-4 text-5xl font-medium tracking-tighter sm:text-7xl">{venture.name}</h3>
              <p className="mt-6 max-w-md text-pretty opacity-70">{venture.body}</p>
              <a href={venture.url} target="_blank" rel="noopener noreferrer" className="group mt-10 inline-flex items-center gap-2 rounded-full bg-bg px-6 py-3 text-sm font-medium text-fg">
                giraffai.in <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-px self-end overflow-hidden rounded-2xl border border-bg/15 bg-bg/15">
              {venture.focus.map((f, i) => (
                <div key={f} className="bg-fg p-5">
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
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "LinkedIn", value: "in/msvishwanath", href: profile.linkedin, icon: FaLinkedinIn },
    { label: "GitHub", value: profile.githubHandle, href: profile.github, icon: SiGithub },
  ];
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line pb-10 pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="wrap relative">
        <p className="mono text-xs text-dim">
          <span className="text-fg">08</span> / Contact
        </p>
        <h2 className="mt-8 text-[clamp(3rem,10vw,9rem)] font-medium leading-[0.9] tracking-tighter">
          <SplitText text="Have an idea?" />
          <br />
          <span className="text-dim">
            <SplitText text="Let's build it." delay={0.2} />
          </span>
        </h2>
        <Reveal delay={0.3}>
          <a href={`mailto:${profile.email}`} className="group mt-12 inline-flex items-center gap-3 border-b border-fg pb-1 text-2xl tracking-tight sm:text-3xl">
            {profile.email}
            <ArrowUpRight className="size-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </a>
        </Reveal>

        <div className="mt-24 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between bg-bg p-6 transition-colors hover:bg-fg hover:text-bg">
              <span className="flex items-center gap-3">
                <s.icon className="size-4" />
                <span>
                  <span className="block text-xs opacity-60">{s.label}</span>
                  <span className="text-sm">{s.value}</span>
                </span>
              </span>
              <ArrowUpRight className="size-4" />
            </a>
          ))}
        </div>

        <footer className="mono mt-20 flex flex-col justify-between gap-2 text-xs text-dim sm:flex-row">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span>{profile.location}</span>
          <a href={profile.resume} target="_blank" className="hover:text-fg">Résumé ↗</a>
        </footer>
      </div>
    </section>
  );
}
