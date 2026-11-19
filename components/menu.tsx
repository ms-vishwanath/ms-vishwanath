"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/lib/profile";

gsap.registerPlugin(ScrollToPlugin, useGSAP);

export const stops = [
  { id: "start", label: "Start", color: "#ffc93c" },
  { id: "about", label: "Home base", color: "#ff6b6b" },
  { id: "expertise", label: "Workshop", color: "#3d5afe" },
  { id: "work", label: "Garage", color: "#ec4899" },
  { id: "architecture", label: "Service city", color: "#8b5cf6" },
  { id: "ai", label: "AI tower", color: "#f59e0b" },
  { id: "leadership", label: "Crew", color: "#14b8a6" },
  { id: "venture", label: "GiraffAI", color: "#f97316" },
  { id: "contact", label: "Finish", color: "#22c55e" },
];

export default function Menu() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(".menu-panel", { display: "block" })
        .fromTo(".menu-stripe", { scaleY: 0 }, { scaleY: 1, duration: 0.55, ease: "power4.inOut", stagger: 0.05, transformOrigin: "top" })
        .fromTo(".menu-item", { yPercent: 120, rotate: 4 }, { yPercent: 0, rotate: 0, duration: 0.7, ease: "power4.out", stagger: 0.04 }, "-=0.25")
        .fromTo(".menu-foot", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.4")
        .fromTo(".burger-a", { rotate: 0, y: 0 }, { rotate: 45, y: 4, duration: 0.3 }, 0)
        .fromTo(".burger-b", { rotate: 0, y: 0 }, { rotate: -45, y: -4, duration: 0.3 }, 0);
    },
    { scope: root }
  );

  useEffect(() => {
    document.body.dataset.menu = open ? "open" : "";
    const l = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open) l?.stop(); else l?.start();
    if (open) tl.current?.timeScale(1).play();
    else tl.current?.timeScale(1.6).reverse();
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string, o: object) => void } }).__lenis;
    setTimeout(() => {
      if (lenis) lenis.scrollTo(`#${id}`, { duration: 1.6, easing: (x: number) => 1 - Math.pow(1 - x, 4) });
      else gsap.to(window, { scrollTo: `#${id}`, duration: 1.4, ease: "power3.inOut" });
    }, 350);
  };

  return (
    <div ref={root}>
      <button onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} className="hud fixed right-3 top-3 z-[70] gap-3 !px-4 sm:right-5 sm:top-5">
        <span className="mono hidden text-xs font-bold sm:inline">{open ? "CLOSE" : "MAP"}</span>
        <span className="relative flex h-3 w-5 flex-col justify-between">
          <span className="burger-a block h-0.5 w-full bg-ink" />
          <span className="burger-b block h-0.5 w-full bg-ink" />
        </span>
      </button>

      <div className="menu-panel fixed inset-0 z-[60] hidden">
        <div className="absolute inset-0 flex">
          {stops.slice(0, 5).map((s) => (
            <div key={s.id} className="menu-stripe h-full flex-1" style={{ background: s.color }} />
          ))}
        </div>
        <div className="relative flex h-full flex-col overflow-y-auto px-6 pb-8 pt-24 sm:px-12">
          <p className="mono mb-6 text-xs font-bold uppercase tracking-widest">Route map · jump to a checkpoint</p>
          <nav className="grid flex-1 content-start gap-x-12 md:grid-cols-2">
            {stops.map((s, i) => (
              <div key={s.id} className="overflow-hidden">
                <button onClick={() => go(s.id)} className="menu-item group flex w-full items-baseline gap-4 border-b-2 border-ink/80 py-2 text-left sm:py-3">
                  <span className="mono text-xs font-bold">CP{String(i).padStart(2, "0")}</span>
                  <span className="text-4xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-3 sm:text-6xl">{s.label}</span>
                  <span className="ml-auto size-4 rounded-full border-2 border-ink transition-transform group-hover:scale-150" style={{ background: s.color }} />
                </button>
              </div>
            ))}
          </nav>
          <div className="menu-foot mt-10 flex flex-wrap items-center gap-3">
            <a href={`mailto:${profile.email}`} className="hud">{profile.email}</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hud"><SiGithub /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hud"><FaLinkedinIn /> LinkedIn</a>
            <a href={profile.resume} target="_blank" className="hud">Résumé <ArrowUpRight className="size-4" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}
