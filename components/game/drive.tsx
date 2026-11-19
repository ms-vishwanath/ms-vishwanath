"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, Plus } from "lucide-react";
import { coinSkills, TechIcon } from "@/lib/tech";
import { profile } from "@/lib/profile";

const CAR_W = 34;
const CAR_H = 58;
const ACC = 1.1;
const MAX = 26;
const FRICTION = 0.92;

// deterministic pseudo-random so server and client render identically
const rnd = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

/** Skill coins and traffic cones scattered over the whole page. */
export function Road() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30" aria-hidden>
      {coinSkills.map((s, i) => {
        const top = 3 + (i / coinSkills.length) * 94 + (rnd(i) - 0.5) * 2.2;
        const left = 4 + rnd(i + 99) * 92;
        return (
          <div key={s} data-coin={s} className="coin" style={{ top: `${top}%`, left: `${left}%` }}>
            <span className="coin-face" style={{ animationDelay: `${-rnd(i + 7) * 1.6}s` }}>
              <TechIcon name={s} className="size-4" />
            </span>
            <span className="coin-label mono">{s.replace(" (exploring)", "")}</span>
          </div>
        );
      })}
      {Array.from({ length: 22 }, (_, i) => (
        <div key={i} data-cone className="cone" style={{ top: `${2 + rnd(i + 500) * 96}%`, left: `${3 + rnd(i + 900) * 94}%` }}>
          <Cone />
        </div>
      ))}
    </div>
  );
}

export function Cone({ size = 26 }: { size?: number }) {
  return (
    <svg viewBox="0 0 26 30" width={size} height={size * 1.15}>
      <rect x="2" y="25" width="22" height="4" rx="1.5" fill="#ff6b1a" stroke="#1d1b2e" strokeWidth="1.6" />
      <path d="M9 4 L17 4 L22 25 L4 25 Z" fill="#ff7a1a" stroke="#1d1b2e" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M7.6 11 L18.4 11 L19.6 16 L6.4 16 Z" fill="#fff" />
      <rect x="9.5" y="2" width="7" height="3" rx="1.5" fill="#ff7a1a" stroke="#1d1b2e" strokeWidth="1.4" />
    </svg>
  );
}

function Car({ color = "#ff6b35" }: { color?: string }) {
  // top-down car, nose pointing DOWN
  return (
    <svg viewBox="0 0 34 58" width={CAR_W} height={CAR_H} className="drop-shadow-[3px_4px_0_rgba(29,27,46,0.35)]">
      <rect x="1" y="9" width="5" height="11" rx="2" fill="#1d1b2e" />
      <rect x="28" y="9" width="5" height="11" rx="2" fill="#1d1b2e" />
      <rect x="1" y="38" width="5" height="11" rx="2" fill="#1d1b2e" />
      <rect x="28" y="38" width="5" height="11" rx="2" fill="#1d1b2e" />
      <rect x="4" y="2" width="26" height="54" rx="9" fill={color} stroke="#1d1b2e" strokeWidth="2" />
      <rect x="8" y="34" width="18" height="10" rx="3" fill="#bae6fd" stroke="#1d1b2e" strokeWidth="1.5" />
      <rect x="8" y="12" width="18" height="7" rx="3" fill="#bae6fd" stroke="#1d1b2e" strokeWidth="1.5" />
      <rect x="9" y="21" width="16" height="11" rx="2" fill={color} stroke="#1d1b2e" strokeWidth="1.2" opacity="0.85" />
      <rect x="15" y="2" width="4" height="54" fill="#fff" opacity="0.55" />
      <circle cx="9" cy="53" r="2" fill="#fff59d" />
      <circle cx="25" cy="53" r="2" fill="#fff59d" />
      <rect x="7" y="3" width="5" height="2" rx="1" fill="#ef4444" />
      <rect x="22" y="3" width="5" height="2" rx="1" fill="#ef4444" />
    </svg>
  );
}

type Keys = { up: boolean; down: boolean; left: boolean; right: boolean };

export function Drive() {
  const carRef = useRef<HTMLDivElement>(null);
  const keys = useRef<Keys>({ up: false, down: false, left: false, right: false });
  const [speed, setSpeed] = useState(0);
  const [stop, setStop] = useState("Start");
  const [got, setGot] = useState(0);
  const [started, setStarted] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [color, setColor] = useState("#ff6b35");
  const [pad, setPad] = useState(false);

  useEffect(() => {
    const map: Record<string, keyof Keys> = {
      ArrowUp: "up", KeyW: "up", ArrowDown: "down", KeyS: "down",
      ArrowLeft: "left", KeyA: "left", ArrowRight: "right", KeyD: "right",
    };
    const onKey = (down: boolean) => (e: KeyboardEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest("input,textarea,[contenteditable]") || document.body.dataset.menu === "open") return;
      const k = map[e.code];
      if (!k) return;
      e.preventDefault();
      keys.current[k] = down;
      if (down) setStarted(true);
    };
    const kd = onKey(true), ku = onKey(false);
    window.addEventListener("keydown", kd);
    window.addEventListener("keyup", ku);

    // Smooth scrolling
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.9, touchMultiplier: 1.4 });
    (window as unknown as { __lenis: Lenis }).__lenis = lenis;

    let vy = 0, vx = 0, ox = 0, oy = 0, angle = 60, raf = 0, frame = 0;
    let px = -1, py = -1;
    const collected = new Set<string>();
    let curStop = "";
    const seen = new Set<string>();

    // Scroll-driven path: a flowing figure that sweeps the full screen —
    // starts top-left, glides right and down, then curves back, again and again.
    const path = (t: number, W: number, H: number) => {
      const mx = 46, top = 96, bottom = H - 110;
      const cx = W / 2, ax = W / 2 - mx;
      const cy = (top + bottom) / 2, ay = (bottom - top) / 2;
      return [cx - ax * Math.cos(t * 1.6), cy - ay * Math.cos(t * 1.05)] as const;
    };

    const loop = (time: number) => {
      lenis.raf(time);
      const k = keys.current;
      const W = window.innerWidth, H = window.innerHeight;
      const t = lenis.scroll / H;

      vx += ((k.right ? 1 : 0) - (k.left ? 1 : 0)) * ACC;
      vy += ((k.down ? 1 : 0) - (k.up ? 1 : 0)) * ACC;
      vx *= FRICTION;
      vy *= FRICTION;
      vx = Math.max(-MAX, Math.min(MAX, vx));
      vy = Math.max(-MAX, Math.min(MAX, vy));
      const steering = k.left || k.right || k.up || k.down;

      let [bx, by] = path(t, W, H);
      ox += vx;
      // up/down keys drive the page directly — fast in both directions
      if (Math.abs(vy) > 0.4) lenis.scrollTo(lenis.scroll + vy * 1.9, { immediate: true });
      oy += vy * 0.12;

      // park on the start-line illustration at the top, on the finish line at the bottom
      const anchor = (sel: string) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return [r.left + r.width / 2, r.top + r.height / 2] as const;
      };
      const smooth = (v: number) => { const c = Math.min(1, Math.max(0, v)); return c * c * (3 - 2 * c); };
      const maxScroll = document.documentElement.scrollHeight - H;
      const ws = smooth(1 - lenis.scroll / (H * 0.85));
      const we = smooth((lenis.scroll - (maxScroll - H * 0.9)) / (H * 0.8));
      if (ws > 0.001) { const a = anchor("[data-car-start]"); if (a) { bx += (a[0] - bx) * ws; by += (a[1] - by) * ws; ox *= 1 - ws * 0.2; oy *= 1 - ws * 0.2; } }
      if (we > 0.001) { const a = anchor("[data-car-end]"); if (a) { bx += (a[0] - bx) * we; by += (a[1] - by) * we; ox *= 1 - we * 0.2; oy *= 1 - we * 0.2; } }
      // without input, drift back onto the scroll path
      if (!steering) { ox *= 0.985; oy *= 0.985; }

      let tx = bx + ox, ty = by + oy;
      const minX = 24, maxX = W - 24, minY = 84, maxY = H - 70;
      if (tx < minX) { ox += minX - tx; tx = minX; }
      if (tx > maxX) { ox -= tx - maxX; tx = maxX; }
      // driving into the bottom/top edge scrolls the page
      if (ty > maxY && ws < 0.5 && we < 0.5) { oy -= ty - maxY; ty = maxY; }
      if (ty < minY) { oy += minY - ty; ty = minY; }

      if (px < 0) { px = tx; py = ty; }
      const nx = px + (tx - px) * 0.14;
      const ny = py + (ty - py) * 0.14;
      const mx = nx - px, my = ny - py;
      px = nx; py = ny;

      if (Math.hypot(mx, my) > 0.25) {
        const target = (Math.atan2(-mx, my) * 180) / Math.PI;
        let diff = target - angle;
        diff = ((diff + 540) % 360) - 180;
        angle += diff * 0.16;
      }

      const car = carRef.current;
      if (car) car.style.transform = `translate(${px - CAR_W / 2}px, ${py - CAR_H / 2}px) rotate(${angle}deg)`;
      const moveY = Math.hypot(mx, my);

      // coins
      if (car) {
        const cr = car.getBoundingClientRect();
        document.querySelectorAll<HTMLElement>("[data-coin]:not(.got)").forEach((el) => {
          const r = el.querySelector(".coin-face")!.getBoundingClientRect();
          if (r.right > cr.left + 4 && r.left < cr.right - 4 && r.bottom > cr.top + 4 && r.top < cr.bottom - 4) {
            el.classList.add("got");
            collected.add(el.dataset.coin!);
            setGot(collected.size);
            gsap.fromTo(el, { scale: 1 }, { scale: 1.8, opacity: 0, y: -30, duration: 0.5, ease: "back.out(3)" });
            gsap.fromTo("#hud-coins", { scale: 1.35 }, { scale: 1, duration: 0.4, ease: "elastic.out(1,0.4)" });
            if (collected.size === coinSkills.length) setToast("All skills collected. Let's build something together!");
          }
        });

        // traffic cones: knock them flying, they pop back later
        document.querySelectorAll<HTMLElement>("[data-cone]:not(.hit)").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.right > cr.left && r.left < cr.right && r.bottom > cr.top && r.top < cr.bottom) {
            el.classList.add("hit");
            const dirX = r.left + r.width / 2 < cr.left + cr.width / 2 ? -1 : 1;
            gsap.timeline({ onComplete: () => el.classList.remove("hit") })
              .to(el, { x: dirX * (60 + Math.random() * 60), y: -40 - Math.random() * 40, rotate: dirX * (200 + Math.random() * 200), duration: 0.6, ease: "power2.out" })
              .to(el, { y: 10, duration: 0.35, ease: "bounce.out" })
              .to(el, { opacity: 0, duration: 0.3, delay: 1.6 })
              .set(el, { x: 0, y: 0, rotate: 0, scale: 0 })
              .to(el, { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(3)" });
          }
        });

        // checkpoints
        const carMid = cr.top + cr.height / 2;
        let name = "Start";
        document.querySelectorAll<HTMLElement>("[data-stop]").forEach((s) => {
          if (s.getBoundingClientRect().top < carMid) name = s.dataset.stop!;
        });
        if (name !== curStop) {
          curStop = name;
          setStop(name);
          const sec = document.querySelector<HTMLElement>(`[data-stop="${name}"]`);
          const acc = sec ? getComputedStyle(sec).getPropertyValue("--accent").trim() : "";
          if (acc) setColor(acc);
          if (!seen.has(name) && name !== "Start") {
            seen.add(name);
            setToast(`Checkpoint · ${name}`);
          }
        }
      }

      if (++frame % 6 === 0) setSpeed(Math.round(moveY * 7));
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      window.removeEventListener("keydown", kd);
      window.removeEventListener("keyup", ku);
    };
  }, []);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const hold = (k: keyof Keys) => ({
    onPointerDown: (e: React.PointerEvent) => { e.preventDefault(); keys.current[k] = true; setStarted(true); },
    onPointerUp: () => (keys.current[k] = false),
    onPointerLeave: () => (keys.current[k] = false),
    onPointerCancel: () => (keys.current[k] = false),
  });

  return (
    <>
      <div ref={carRef} data-car className="pointer-events-none fixed left-0 top-0 z-40 will-change-transform" style={{ width: CAR_W, height: CAR_H }}>
        <Car color={color} />
      </div>

      {/* HUD */}
      <div className="fixed left-3 top-3 z-50 flex items-center gap-2 sm:left-5 sm:top-5">
        <a href="#start" className="hud mono font-bold">MSV</a>
        <div className="hud mono hidden sm:flex">
          <span className="text-ink/50">SPD</span> <span className="w-12 text-right tabular-nums">{speed}</span> <span className="text-ink/50">km/h</span>
        </div>
        <div id="hud-coins" className="hud mono">
          <span className="text-ink/50">◎</span> <span className="tabular-nums">{got}/{coinSkills.length}</span>
          <span className="hidden text-ink/50 sm:inline">skills</span>
        </div>
        <div className="hud mono hidden md:flex">
          <span className="size-2 rounded-full" style={{ background: color }} /> {stop}
        </div>
      </div>

      {toast && (
        <div key={toast} className="toast fixed left-1/2 top-20 z-50 -translate-x-1/2 rounded-full border-2 border-ink bg-[#ffc93c] px-5 py-2 text-sm font-semibold shadow-[4px_4px_0_var(--ink)]">
          {toast}
          {got === coinSkills.length && (
            <a href={`mailto:${profile.email}`} className="ml-2 underline">Say hi →</a>
          )}
        </div>
      )}

      {/* key hint */}
      <div className={`kbd-hint fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-3 rounded-2xl border-2 border-ink bg-white px-4 py-2 text-sm shadow-[4px_4px_0_var(--ink)] transition-all duration-700 md:flex ${started ? "pointer-events-none translate-y-24 opacity-0" : ""}`}>
        <span className="flex gap-1">
          {["W", "A", "S", "D"].map((k) => <kbd key={k} className="kbd">{k}</kbd>)}
        </span>
        <span className="text-ink/50">or</span>
        <span className="flex gap-1">
          {["↑", "←", "↓", "→"].map((k) => <kbd key={k} className="kbd">{k}</kbd>)}
        </span>
        <span>to drive · or just scroll</span>
      </div>

      {/* mobile joystick: one icon that blooms into arrows */}
      <div className="fixed bottom-5 right-5 z-40 md:hidden" style={{ touchAction: "none" }}>
        <AnimatePresence>
          {pad &&
            ([
              ["up", "↑", 0, -64],
              ["left", "←", -64, 0],
              ["right", "→", 64, 0],
              ["down", "↓", 0, 64],
            ] as const).map(([k, l, x, y], i) => (
              <motion.button
                key={k}
                aria-label={k}
                className="pad absolute left-1 top-1"
                initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                animate={{ x: x - 70, y: y - 70, scale: 1, opacity: 1 }}
                exit={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 420, damping: 22, delay: i * 0.03 }}
                {...hold(k)}
              >
                {l}
              </motion.button>
            ))}
        </AnimatePresence>
        <motion.button
          onClick={() => setPad((v) => !v)}
          aria-label={pad ? "Hide joystick" : "Show joystick"}
          animate={{ rotate: pad ? 135 : 0, x: pad ? -70 : 0, y: pad ? -70 : 0, background: pad ? "#1d1b2e" : "#ffc93c" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative z-10 grid size-[60px] place-items-center rounded-full border-2 border-ink shadow-[0_4px_0_var(--ink)]"
        >
          {pad ? <Plus className="size-6 text-white" /> : <Gamepad2 className="size-7" />}
          {!pad && <span className="absolute inset-0 animate-ping rounded-full border-2 border-ink/40" />}
        </motion.button>
      </div>
    </>
  );
}
