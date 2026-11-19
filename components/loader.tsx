"use client";

import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import gsap from "gsap";

const ReadyCtx = createContext(false);
export const useReady = () => useContext(ReadyCtx);

const steps = ["Laying the road", "Placing the stack", "Parking the projects", "Fuelling the car", "Ready to drive"];

export default function Loader({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [pct, setPct] = useState(0);
  const [gone, setGone] = useState(false);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = () => (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    window.scrollTo(0, 0);
    lenis()?.stop();

    // real readiness: fonts + window load, but never shorter than 1.8s so it reads as a moment
    const loaded = new Promise<void>((r) => (document.readyState === "complete" ? r() : window.addEventListener("load", () => r(), { once: true })));
    const fonts = document.fonts?.ready ?? Promise.resolve();
    const minTime = new Promise((r) => setTimeout(r, 1800));
    let done = false;
    Promise.all([loaded, fonts, minTime]).then(() => (done = true));

    const prog = { v: 0 };
    const tick = gsap.ticker.add(() => {
      const target = done ? 100 : Math.min(92, prog.v + 1.2);
      prog.v += (target - prog.v) * (done ? 0.12 : 0.06);
      const v = Math.round(prog.v);
      setPct(v);
      if (done && v >= 100) finish();
    });

    let finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      gsap.ticker.remove(tick);
      const tl = gsap.timeline({
        onComplete: () => {
          setGone(true);
          lenis()?.start();
        },
      });
      tl.to(".ld-car", { x: "120vw", duration: 0.7, ease: "power3.in" })
        .to(".ld-ui", { y: -30, opacity: 0, duration: 0.35, stagger: 0.05 }, "<0.1")
        .add(() => {
          document.documentElement.classList.remove("loading");
          setReady(true);
        })
        .to(".ld-panel", { yPercent: -100, duration: 0.8, ease: "power4.inOut", stagger: 0.07 }, "-=0.1");
    }

    return () => gsap.ticker.remove(tick);
  }, []);

  // assemble the page once the loader lifts
  useEffect(() => {
    if (!ready) return;
    const tl = gsap.timeline({ delay: 0.25 });
    tl.from(".hud, [aria-label='Open map']", { y: -90, opacity: 0, duration: 0.7, ease: "back.out(1.8)", stagger: 0.07 })
      .from("[data-car]", { scale: 0, rotate: -540, opacity: 0, duration: 0.9, ease: "back.out(1.6)" }, "-=0.4")
      .from(".coin, .cone", { scale: 0, opacity: 0, duration: 0.5, ease: "back.out(2.4)", stagger: { each: 0.02, from: "random" } }, "-=0.6")
      .from(".kbd-hint, [aria-label='Show joystick']", { y: 80, opacity: 0, duration: 0.6, ease: "back.out(1.6)" }, "-=0.8");
  }, [ready]);

  const step = steps[Math.min(steps.length - 1, Math.floor((pct / 100) * steps.length))];

  return (
    <ReadyCtx.Provider value={ready}>
      {children}
      {!gone && (
        <div ref={root} className="fixed inset-0 z-[100]" aria-live="polite" aria-label="Loading">
          {["#ffc93c", "#ff6b35", "#fff6d6"].map((c, i) => (
            <div key={c} className="ld-panel absolute inset-0" style={{ background: c, zIndex: 3 - i }} />
          ))}
          <div className="ld-panel absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#fff6d6] px-6">
            <div className="dots pointer-events-none absolute inset-0" />
            <p className="ld-ui mono relative text-xs font-bold tracking-[0.3em] text-ink/60">VISHWANATH · PORTFOLIO</p>
            <p className="ld-ui relative mt-3 text-[clamp(4rem,14vw,9rem)] font-bold leading-none tracking-tighter tabular-nums">
              {pct}
              <span className="text-[#ff6b35]">%</span>
            </p>

            {/* road + car */}
            <div className="ld-ui relative mt-8 h-16 w-full max-w-xl overflow-visible">
              <div className="absolute inset-x-0 top-1/2 h-12 -translate-y-1/2 rounded-full border-2 border-ink bg-[#34324a]">
                <div className="ld-lane absolute inset-x-4 top-1/2 h-1 -translate-y-1/2" />
              </div>
              <div className="absolute left-0 top-1/2 h-12 -translate-y-1/2 rounded-full border-2 border-ink bg-[#ffc93c]/90" style={{ width: `${Math.max(12, pct)}%` }} />
              <div className="ld-car absolute top-1/2 -translate-y-1/2" style={{ left: `calc(${pct}% - ${pct * 0.7}px)` }}>
                <svg viewBox="0 0 70 30" width={70} height={30} className="drop-shadow-[2px_3px_0_rgba(29,27,46,.35)]">
                  {/* side-profile supercar, facing right */}
                  <path d="M3 21 L4 15 L6 13 L1.5 11 L1.5 8 L9 8 L10 11 L22 9 Q30 3 38 3 Q46 3 54 10 L64 13 Q68 14 68 18 L67 21 Z" fill="#ff6b35" stroke="#1d1b2e" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M26 10 Q32 5 38 5 Q44 5 49 10 Z" fill="#1e293b" stroke="#1d1b2e" strokeWidth="1.5" />
                  <path d="M30 9.5 Q34 6.5 38 6.5 L37 9.5 Z" fill="#bae6fd" />
                  <path d="M40 13 L48 13 L45 17 Z" fill="#1d1b2e" />
                  <path d="M8 15 L60 15" stroke="#fff" strokeWidth="1.6" opacity=".85" />
                  <path d="M63 14.5 L67 15.5" stroke="#fff59d" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="17" cy="21" r="6" fill="#1d1b2e" /><circle cx="17" cy="21" r="2.4" fill="#cbd5e1" />
                  <circle cx="54" cy="21" r="6" fill="#1d1b2e" /><circle cx="54" cy="21" r="2.4" fill="#cbd5e1" />
                </svg>
                <span className="ld-puff absolute -left-4 top-1/2 size-3 -translate-y-1/2 rounded-full bg-ink/20" />
              </div>
            </div>

            <p className="ld-ui mono relative mt-8 flex items-center gap-2 text-sm font-semibold">
              <span className="size-2 animate-pulse rounded-full bg-[#22c55e]" /> {step}…
            </p>
          </div>
        </div>
      )}
    </ReadyCtx.Provider>
  );
}
