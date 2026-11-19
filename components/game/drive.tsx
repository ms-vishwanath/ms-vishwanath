"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { coinSkills, TechIcon } from "@/lib/tech";
import { profile } from "@/lib/profile";

const CAR_W = 34;
const CAR_H = 58;
const ACC = 1.1;
const MAX = 26;
const FRICTION = 0.92;

/** Skill coins scattered over the whole page, left to right. */
export function Road() {
  return (
    <div className="pointer-events-none absolute inset-0 z-30" aria-hidden>
      {coinSkills.map((s, i) => {
        const top = 4 + (i / coinSkills.length) * 93;
        const left = [6, 30, 52, 74, 94, 64, 18, 86][i % 8];
        return (
          <div key={s} data-coin={s} className="coin" style={{ top: `${top}%`, left: `${left}%` }}>
            <span className="coin-face">
              <TechIcon name={s} className="size-4" />
            </span>
            <span className="coin-label mono">{s.replace(" (exploring)", "")}</span>
          </div>
        );
      })}
    </div>
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

    let vy = 0, vx = 0, angle = -90, lastY = window.scrollY, raf = 0, frame = 0;
    let px = 60, py = window.innerHeight * 0.45, dir = 1;
    const collected = new Set<string>();
    let curStop = "";
    const seen = new Set<string>();

    const loop = () => {
      const k = keys.current;
      const W = window.innerWidth, H = window.innerHeight;
      const m = 30;

      vx += ((k.right ? 1 : 0) - (k.left ? 1 : 0)) * ACC;
      vy += ((k.down ? 1 : 0) - (k.up ? 1 : 0)) * ACC;
      vx *= FRICTION;
      vy *= FRICTION;
      vx = Math.max(-MAX, Math.min(MAX, vx));
      vy = Math.max(-MAX, Math.min(MAX, vy));

      // keyboard: free roam; pushing past top/bottom edge scrolls the page
      px += vx;
      let ny = py + vy;
      const top = 90, bottom = H - 90;
      if (ny > bottom) { window.scrollBy(0, ny - bottom); ny = bottom; }
      if (ny < top) { window.scrollBy(0, ny - top); ny = top; }
      py = ny;

      // wheel / touch scroll drives the car left <-> right
      const dy = window.scrollY - lastY;
      lastY = window.scrollY;
      const keyScroll = Math.abs(vy) > 0.3 && (py === bottom || py === top);
      let sx = 0;
      if (!keyScroll && Math.abs(dy) > 0.2) {
        sx = Math.abs(dy) * 1.3 * dir;
        px += sx;
      }
      if (px > W - m) { px = W - m; dir = -1; vx = -Math.abs(vx) * 0.4; }
      if (px < m) { px = m; dir = 1; vx = Math.abs(vx) * 0.4; }

      const mx = vx + sx;
      const my = Math.abs(vy) > 0.3 ? vy : dy * 0.35;
      if (Math.hypot(mx, my) > 0.6) {
        const target = (Math.atan2(-mx, my) * 180) / Math.PI;
        let diff = target - angle;
        diff = ((diff + 540) % 360) - 180;
        angle += diff * 0.2;
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
      <div ref={carRef} className="pointer-events-none fixed left-0 top-0 z-40 will-change-transform" style={{ width: CAR_W, height: CAR_H }}>
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
      <div className={`fixed bottom-5 left-1/2 z-40 hidden -translate-x-1/2 items-center gap-3 rounded-2xl border-2 border-ink bg-white px-4 py-2 text-sm shadow-[4px_4px_0_var(--ink)] transition-all duration-700 md:flex ${started ? "pointer-events-none translate-y-24 opacity-0" : ""}`}>
        <span className="flex gap-1">
          {["W", "A", "S", "D"].map((k) => <kbd key={k} className="kbd">{k}</kbd>)}
        </span>
        <span className="text-ink/50">or</span>
        <span className="flex gap-1">
          {["↑", "←", "↓", "→"].map((k) => <kbd key={k} className="kbd">{k}</kbd>)}
        </span>
        <span>to drive · or just scroll</span>
      </div>

      {/* touch pad */}
      <div className="fixed bottom-4 right-4 z-40 grid grid-cols-3 gap-1.5 md:hidden" style={{ touchAction: "none" }}>
        <span />
        <button className="pad" aria-label="Up" {...hold("up")}>↑</button>
        <span />
        <button className="pad" aria-label="Left" {...hold("left")}>←</button>
        <button className="pad" aria-label="Down" {...hold("down")}>↓</button>
        <button className="pad" aria-label="Right" {...hold("right")}>→</button>
      </div>
    </>
  );
}
