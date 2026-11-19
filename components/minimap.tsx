"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight, Map as MapIcon, X } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { profile } from "@/lib/profile";

gsap.registerPlugin(useGSAP);

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

// Serpentine route geometry (viewBox 0 0 1000 1400): one vertex per stop.
const PTS = stops.map((_, i) => ({ x: i % 2 ? 790 : 210, y: 90 + i * 152 }));
const seg = (i: number) => {
  const a = PTS[i], b = PTS[i + 1];
  return { a, c1: { x: a.x, y: a.y + 105 }, c2: { x: b.x, y: b.y - 105 }, b };
};
const ROUTE = "M" + PTS[0].x + " " + PTS[0].y + PTS.slice(1).map((_, i) => { const s = seg(i); return ` C${s.c1.x} ${s.c1.y} ${s.c2.x} ${s.c2.y} ${s.b.x} ${s.b.y}`; }).join("");

function bez(i: number, t: number) {
  const { a, c1, c2, b } = seg(Math.min(i, PTS.length - 2));
  const u = 1 - t;
  const x = u * u * u * a.x + 3 * u * u * t * c1.x + 3 * u * t * t * c2.x + t * t * t * b.x;
  const y = u * u * u * a.y + 3 * u * u * t * c1.y + 3 * u * t * t * c2.y + t * t * t * b.y;
  const dx = 3 * u * u * (c1.x - a.x) + 6 * u * t * (c2.x - c1.x) + 3 * t * t * (b.x - c2.x);
  const dy = 3 * u * u * (c1.y - a.y) + 6 * u * t * (c2.y - c1.y) + 3 * t * t * (b.y - c2.y);
  return { x, y, a: (Math.atan2(dy, dx) * 180) / Math.PI };
}

/** Where the reader is on the route: segment index + fraction, from section positions. */
function progress() {
  const probe = window.scrollY + window.innerHeight * 0.4;
  const tops = stops.map((s) => document.getElementById(s.id)?.offsetTop ?? 0);
  let i = 0;
  while (i < tops.length - 1 && probe >= tops[i + 1]) i++;
  if (i >= tops.length - 1) return { i: tops.length - 2, f: 1, cur: tops.length - 1 };
  const f = Math.min(1, Math.max(0, (probe - tops[i]) / (tops[i + 1] - tops[i])));
  return { i, f, cur: i };
}

function useRoute() {
  const [p, setP] = useState({ x: PTS[0].x, y: PTS[0].y, a: 90, cur: 0 });
  useEffect(() => {
    let raf = 0;
    let sx = PTS[0].x, sy = PTS[0].y;
    const tick = () => {
      const { i, f, cur } = progress();
      const b = bez(i, f);
      sx += (b.x - sx) * 0.15;
      sy += (b.y - sy) * 0.15;
      setP((o) => (Math.abs(o.x - sx) < 0.3 && Math.abs(o.y - sy) < 0.3 && o.cur === cur ? o : { x: sx, y: sy, a: b.a, cur }));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);
  return p;
}

function MapSvg({ big, onPick, pos }: { big?: boolean; onPick?: (id: string) => void; pos: ReturnType<typeof useRoute> }) {
  return (
    <svg viewBox="0 0 1000 1400" className={big ? "h-full w-auto max-w-full" : "h-full w-full"} aria-hidden={!big}>
      {big && (
        <>
          {/* terrain blobs */}
          {[[120, 300, "#c7f9cc"], [880, 520, "#bde0fe"], [140, 900, "#ffd6e8"], [860, 1150, "#fde68a"], [500, 700, "#e9d5ff"]].map(([x, y, c], i) => (
            <ellipse key={i} cx={x as number} cy={y as number} rx={170} ry={110} fill={c as string} className="map-terrain" />
          ))}
        </>
      )}
      <path d={ROUTE} fill="none" stroke="#1d1b2e" strokeWidth={big ? 64 : 90} strokeLinecap="round" />
      <path d={ROUTE} fill="none" stroke="#34324a" strokeWidth={big ? 54 : 70} strokeLinecap="round" className={big ? "map-road" : ""} />
      <path d={ROUTE} fill="none" stroke="#ffc93c" strokeWidth={big ? 5 : 10} strokeDasharray={big ? "22 22" : "40 40"} className="map-lane" />
      {big &&
        PTS.slice(0, -1).flatMap((_, i) =>
          [0.3, 0.7].map((f, j) => {
            const b = bez(i, f);
            const side = (i + j) % 2 ? 1 : -1;
            const rad = ((b.a + 90) * Math.PI) / 180;
            const x = b.x + Math.cos(rad) * 48 * side, y = b.y + Math.sin(rad) * 48 * side;
            return (
              <g key={`${i}-${j}`} transform={`translate(${x - 13} ${y - 26})`}><g className="map-cone">
                <rect x="1" y="24" width="24" height="5" rx="2" fill="#ff6b1a" stroke="#1d1b2e" strokeWidth="2.5" />
                <path d="M9 3 L17 3 L22 24 L4 24 Z" fill="#ff7a1a" stroke="#1d1b2e" strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M7.4 10 L18.6 10 L19.8 15 L6.2 15 Z" fill="#fff" />
              </g></g>
            );
          })
        )}
      {stops.map((s, i) => {
        const p = PTS[i];
        const done = i <= pos.cur;
        return (
          <g key={s.id} className={big ? "map-pin cursor-pointer" : ""} onClick={() => onPick?.(s.id)} style={{ transformOrigin: `${p.x}px ${p.y}px` }}>
            <circle cx={p.x} cy={p.y} r={big ? 34 : 48} fill={done ? s.color : "#fff"} stroke="#1d1b2e" strokeWidth={big ? 6 : 10} />
            {big && (
              <>
                <text x={p.x} y={p.y + 9} textAnchor="middle" fontSize={26} fontWeight={800} fill="#1d1b2e" className="mono">{String(i).padStart(2, "0")}</text>
                <g transform={`translate(${i % 2 ? p.x - 60 : p.x + 60}, ${p.y})`}>
                  <rect x={i % 2 ? -300 : 0} y={-34} width={300} height={68} rx={18} fill="#fff" stroke="#1d1b2e" strokeWidth={5} className="map-label-bg" />
                  <text x={i % 2 ? -150 : 150} y={13} textAnchor="middle" fontSize={36} fontWeight={700} fill="#1d1b2e">{s.label}</text>
                </g>
              </>
            )}
          </g>
        );
      })}
      {/* the car */}
      <g transform={`translate(${pos.x} ${pos.y}) rotate(${pos.a - 90})`}>
        <circle r={big ? 58 : 80} fill="#ff6b35" opacity={0.25} className="map-ping" />
        <rect x={big ? -20 : -30} y={big ? -32 : -48} width={big ? 40 : 60} height={big ? 64 : 96} rx={big ? 12 : 18} fill="#ff6b35" stroke="#1d1b2e" strokeWidth={big ? 5 : 9} />
        <rect x={big ? -13 : -20} y={big ? 6 : 10} width={big ? 26 : 40} height={big ? 14 : 22} rx={4} fill="#bae6fd" stroke="#1d1b2e" strokeWidth={3} />
      </g>
    </svg>
  );
}

export default function Minimap() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);
  const pos = useRoute();

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .set(".map-panel", { display: "flex" })
        .fromTo(".map-panel", { clipPath: "circle(0% at calc(100% - 70px) 60px)" }, { clipPath: "circle(150% at calc(100% - 70px) 60px)", duration: 0.9, ease: "power3.inOut" })
        .fromTo(".map-terrain", { scale: 0, transformOrigin: "center", transformBox: "fill-box" }, { scale: 1, duration: 0.7, ease: "back.out(1.6)", stagger: 0.06 }, "-=0.45")
        .fromTo(".map-road", { strokeDasharray: 6000, strokeDashoffset: 6000 }, { strokeDashoffset: 0, duration: 1.1, ease: "power2.inOut" }, "-=0.7")
        .fromTo(".map-cone", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.4, stagger: 0.03, ease: "bounce.out" }, "-=0.6")
        .fromTo(".map-pin", { scale: 0 }, { scale: 1, duration: 0.5, ease: "back.out(2.4)", stagger: 0.06 }, "-=0.8")
        .fromTo(".map-side > *", { opacity: 0, x: 30 }, { opacity: 1, x: 0, duration: 0.5, stagger: 0.06 }, "-=0.6");
    },
    { scope: root }
  );

  useEffect(() => {
    document.body.dataset.menu = open ? "open" : "";
    const l = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open) { l?.stop(); tl.current?.timeScale(1).play(); }
    else { l?.start(); tl.current?.timeScale(2).reverse(); }
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); if (e.key === "m" || e.key === "M") setOpen((o) => !o); };
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: string, o: object) => void } }).__lenis;
    setTimeout(() => lenis?.scrollTo(`#${id}`, { duration: 1.8, easing: (x: number) => 1 - Math.pow(1 - x, 4) }), 450);
  };

  const cur = stops[pos.cur];

  return (
    <div ref={root}>
      {/* Nav icon — opens the map */}
      <button ref={btn} onClick={() => setOpen(true)} aria-label="Open map" className="group fixed right-3 top-3 z-[55] flex items-center gap-2 sm:right-5 sm:top-5">
        <span className="pointer-events-none hidden translate-x-2 items-center gap-1.5 rounded-full border-2 border-ink bg-white px-3 py-1.5 text-xs font-semibold opacity-0 shadow-[3px_3px_0_var(--ink)] transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:flex">
          <span className="size-2 rounded-full" style={{ background: cur.color }} /> {cur.label} <span className="mono text-ink/40">· M</span>
        </span>
        <span className="relative grid size-12 place-items-center rounded-2xl border-2 border-ink bg-[#ffc93c] shadow-[3px_3px_0_var(--ink)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:rotate-[-6deg]">
          <MapIcon className="size-6" />
          <span className="absolute -right-1.5 -top-1.5 grid size-5 place-items-center rounded-full border-2 border-ink text-[9px] font-bold text-white" style={{ background: cur.color }}>
            {pos.cur}
          </span>
        </span>
      </button>

      {/* Full-screen map */}
      <div className="map-panel fixed inset-0 z-[60] hidden flex-col bg-[#fff6d6] lg:flex-row">
        <div className="dots pointer-events-none absolute inset-0" />
        <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 pt-20 lg:p-8">
          <MapSvg big pos={pos} onPick={go} />
        </div>
        <aside className="map-side relative flex flex-col gap-4 border-t-2 border-ink bg-white p-6 lg:w-[380px] lg:border-l-2 lg:border-t-0 lg:p-10 lg:pt-24">
          <p className="mono text-xs font-bold uppercase tracking-widest text-ink/50">You are here</p>
          <p className="flex items-center gap-3 text-4xl font-semibold tracking-tight">
            <span className="size-4 rounded-full border-2 border-ink" style={{ background: cur.color }} /> {cur.label}
          </p>
          <p className="hidden text-ink/60 lg:block">Tap a pin to drive there. Press <kbd className="kbd">M</kbd> to toggle the map.</p>
          <div className="hidden flex-wrap gap-2 lg:flex">
            {stops.map((s, i) => (
              <button key={s.id} onClick={() => go(s.id)} className="rounded-full border-2 border-ink px-3 py-1 text-xs font-semibold transition-transform hover:-translate-y-0.5" style={{ background: i <= pos.cur ? s.color : "#fff" }}>
                {s.label}
              </button>
            ))}
          </div>
          <div className="mt-auto flex flex-wrap gap-2">
            <a href={`mailto:${profile.email}`} className="hud">Email</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hud"><SiGithub /> GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hud"><FaLinkedinIn /> LinkedIn</a>
            <a href={profile.resume} target="_blank" className="hud">Résumé <ArrowUpRight className="size-4" /></a>
          </div>
        </aside>
        <button onClick={() => setOpen(false)} aria-label="Close map" className="hud absolute right-3 top-3 z-10 !h-11 !w-11 justify-center !p-0 sm:right-5 sm:top-5">
          <X className="size-5" />
        </button>
      </div>
    </div>
  );
}
