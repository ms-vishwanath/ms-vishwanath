"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/lib/profile";

const links = [
  ["About", "about"],
  ["Expertise", "expertise"],
  ["Work", "work"],
  ["Architecture", "architecture"],
  ["AI", "ai"],
  ["Contact", "contact"],
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${scrolled ? "border-b border-line bg-bg/75 backdrop-blur-xl" : ""}`}>
      <div className="wrap flex h-16 items-center justify-between">
        <a href="#top" className="mono text-sm tracking-tight">
          msv<span className="text-dim">.dev</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([l, id]) => (
            <a key={id} href={`#${id}`} className="text-sm text-dim transition-colors hover:text-fg">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={profile.resume} target="_blank" className="hidden rounded-full bg-fg px-4 py-1.5 text-sm font-medium text-bg transition-opacity hover:opacity-80 sm:inline-block">
            Résumé
          </a>
          <button onClick={() => setOpen(!open)} className="mono text-sm md:hidden" aria-label="Menu">
            {open ? "close" : "menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="wrap flex flex-col gap-4 border-t border-line bg-bg pb-6 pt-4 md:hidden">
          {links.map(([l, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-2xl tracking-tight">
              {l}
            </a>
          ))}
        </nav>
      )}
      <motion.div style={{ scaleX }} className="absolute bottom-0 left-0 h-px w-full origin-left bg-fg" />
    </header>
  );
}
