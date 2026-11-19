// Hand-built isometric illustrations, one per stop on the drive.
import type { ReactNode } from "react";

const C = Math.cos(Math.PI / 6);
const U = 14;
const P = (x: number, y: number, z: number) => `${((x - y) * C * U).toFixed(1)},${((x + y) * 0.5 * U - z * U).toFixed(1)}`;

function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const f = (c: number) => Math.max(0, Math.min(255, Math.round(c + amt * 255)));
  return `rgb(${f(n >> 16)},${f((n >> 8) & 255)},${f(n & 255)})`;
}

const INK = "#1d1b2e";

export function Box({ x, y, z = 0, w, d, h, c }: { x: number; y: number; z?: number; w: number; d: number; h: number; c: string }) {
  return (
    <g stroke={INK} strokeWidth={1.2} strokeLinejoin="round">
      <polygon points={`${P(x, y + d, z + h)} ${P(x + w, y + d, z + h)} ${P(x + w, y + d, z)} ${P(x, y + d, z)}`} fill={shade(c, -0.12)} />
      <polygon points={`${P(x + w, y, z + h)} ${P(x + w, y + d, z + h)} ${P(x + w, y + d, z)} ${P(x + w, y, z)}`} fill={shade(c, -0.25)} />
      <polygon points={`${P(x, y, z + h)} ${P(x + w, y, z + h)} ${P(x + w, y + d, z + h)} ${P(x, y + d, z + h)}`} fill={c} />
    </g>
  );
}

function Roof({ x, y, z, w, d, h, c }: { x: number; y: number; z: number; w: number; d: number; h: number; c: string }) {
  // gable roof along the y axis
  return (
    <g stroke={INK} strokeWidth={1.2} strokeLinejoin="round">
      <polygon points={`${P(x + w / 2, y, z + h)} ${P(x + w / 2, y + d, z + h)} ${P(x + w, y + d, z)} ${P(x + w, y, z)}`} fill={shade(c, -0.2)} />
      <polygon points={`${P(x, y + d, z)} ${P(x + w, y + d, z)} ${P(x + w / 2, y + d, z + h)}`} fill={shade(c, -0.05)} />
      <polygon points={`${P(x, y, z)} ${P(x + w / 2, y, z + h)} ${P(x + w / 2, y + d, z + h)} ${P(x, y + d, z)}`} fill={c} />
    </g>
  );
}

function Ground({ c = "#b8f2c9", children }: { c?: string; children?: ReactNode }) {
  return (
    <>
      <polygon points={`${P(-1, -1, 0)} ${P(13, -1, 0)} ${P(13, 13, 0)} ${P(-1, 13, 0)}`} fill={c} stroke={INK} strokeWidth={1.2} />
      {children}
    </>
  );
}

function Tree({ x, y, c = "#2ec27e" }: { x: number; y: number; c?: string }) {
  return (
    <g className="ill-sway" style={{ transformOrigin: "center", transformBox: "fill-box" }}>
      <Box x={x + 0.35} y={y + 0.35} w={0.3} d={0.3} h={1} c="#8b5a2b" />
      <Box x={x} y={y} z={1} w={1} d={1} h={1.4} c={c} />
    </g>
  );
}

function Frame({ children, label }: { children: ReactNode; label: string }) {
  return (
    <svg viewBox="-200 -150 400 300" role="img" aria-label={label} className="ill h-auto w-full overflow-visible">
      <g transform="translate(0,-20)">{children}</g>
    </svg>
  );
}

export function StartArt() {
  return (
    <Frame label="Start line with traffic light">
      <Ground c="#ffe066" />
      <Box x={2} y={-1} w={4} d={14} h={0.05} c="#3b3a4a" />
      {[0, 1, 2, 3].map((i) => (
        <Box key={i} x={2 + i} y={5} w={1} d={1} h={0.08} c={i % 2 ? "#ffffff" : INK} />
      ))}
      <Box x={7} y={4} w={0.4} d={0.4} h={4} c="#64748b" />
      <Box x={6.8} y={3.8} z={4} w={0.8} d={0.8} h={2.4} c={INK} />
      <circle cx={P(7.6, 4.2, 5.8).split(",")[0]} cy={P(7.6, 4.2, 5.8).split(",")[1]} r={4} fill="#ff4d4d" className="ill-blink" />
      <circle cx={P(7.6, 4.2, 5.1).split(",")[0]} cy={P(7.6, 4.2, 5.1).split(",")[1]} r={4} fill="#ffc93c" className="ill-blink d1" />
      <circle cx={P(7.6, 4.2, 4.4).split(",")[0]} cy={P(7.6, 4.2, 4.4).split(",")[1]} r={4} fill="#22c55e" className="ill-blink d2" />
      {/* the real car parks here at scroll 0 */}
      <circle data-car-start cx={P(4, 3.2, 0.1).split(",")[0]} cy={P(4, 3.2, 0.1).split(",")[1]} r={1} fill="none" />
      <ellipse cx={P(4, 3.2, 0).split(",")[0]} cy={P(4, 3.2, 0).split(",")[1]} rx={26} ry={12} fill="#1d1b2e" opacity={0.18} className="ill-bob" />
      <Tree x={9} y={8} />
      <Tree x={10} y={1} c="#16a34a" />
      <Tree x={-0.5} y={9} />
    </Frame>
  );
}

export function HomeArt() {
  return (
    <Frame label="Home base: a small house with a garden">
      <Ground c="#c7f9cc" />
      <Box x={2} y={3} w={5} d={5} h={3} c="#ffd6a5" />
      <Roof x={1.6} y={2.6} z={3} w={5.8} d={5.8} h={2.4} c="#ff6b6b" />
      <Box x={4} y={8} w={1.2} d={0.05} h={1.8} c="#7c3aed" />
      <Box x={7} y={4.5} w={0.05} d={1.2} h={1.2} c="#7dd3fc" />
      <Box x={7} y={6.4} w={0.05} d={1.2} h={1.2} c="#7dd3fc" />
      <Box x={5.2} y={3.6} z={4.2} w={0.6} d={0.6} h={1.6} c="#94a3b8" />
      <Tree x={9} y={2} />
      <Tree x={9.5} y={7} c="#16a34a" />
      <Tree x={0} y={10} />
      <Box x={8} y={10} w={3} d={0.3} h={0.6} c="#ffffff" />
    </Frame>
  );
}

export function ToolboxArt() {
  return (
    <Frame label="Workshop of stacked tool layers">
      <Ground c="#bde0fe" />
      {["#ff6b35", "#ffc93c", "#2ec4b6", "#3d5afe", "#ec4899", "#8b5cf6"].map((c, i) => (
        <g key={c} className="ill-float" style={{ animationDelay: `${i * -0.4}s` }}>
          <Box x={3} y={3} z={i * 1.05} w={6} d={6} h={0.8} c={c} />
        </g>
      ))}
      <Box x={9.5} y={9} w={1.5} d={1.5} h={2.5} c="#facc15" />
      <Box x={0.5} y={9.5} w={1.2} d={1.2} h={1.2} c="#f472b6" />
    </Frame>
  );
}

export function GarageArt() {
  return (
    <Frame label="Garage of finished and in-progress builds">
      <Ground c="#ffd6e8" />
      <Box x={1} y={2} w={8} d={6} h={4} c="#a5b4fc" />
      <Box x={9} y={3} w={0.05} d={4} h={3} c={INK} />
      {[0.6, 1.4, 2.2].map((z) => (
        <Box key={z} x={9.02} y={3.2} z={z} w={0.05} d={3.6} h={0.1} c="#64748b" />
      ))}
      <Box x={1} y={2} z={4} w={8} d={6} h={0.4} c="#6366f1" />
      <g className="ill-bob">
        <Box x={10} y={3.5} z={0.05} w={2.4} d={1.6} h={0.8} c="#22c55e" />
        <Box x={10.5} y={3.7} z={0.85} w={1.2} d={1.2} h={0.5} c="#bae6fd" />
      </g>
      <Box x={3} y={9} w={1} d={1} h={1} c="#ff6b35" />
      <Box x={4.3} y={9.2} w={0.8} d={0.8} h={0.8} c="#ffc93c" />
      <Box x={3.3} y={9.3} z={1} w={0.6} d={0.6} h={0.6} c="#2ec4b6" />
    </Frame>
  );
}

export function CityArt() {
  const blocks = [
    [1, 1, 3, "#3d5afe"], [4, 1, 5, "#8b5cf6"], [7, 1, 2, "#ec4899"], [10, 1, 4, "#ff6b35"],
    [1, 4, 2, "#2ec4b6"], [4, 4, 6.5, "#ffc93c"], [7, 4, 3.5, "#22c55e"], [10, 4, 2, "#06b6d4"],
    [1, 7, 4, "#f472b6"], [4, 7, 2.5, "#3d5afe"], [7, 7, 5, "#ff6b35"], [10, 7, 3, "#8b5cf6"],
  ] as const;
  return (
    <Frame label="City of microservices">
      <Ground c="#e0e7ff" />
      {blocks.map(([x, y, h, c], i) => (
        <g key={i} className="ill-rise" style={{ animationDelay: `${i * 0.08}s` }}>
          <Box x={x} y={y} w={2} d={2} h={h} c={c} />
        </g>
      ))}
    </Frame>
  );
}

export function TowerArt() {
  const [cx, cy] = P(6, 6, 9).split(",").map(Number);
  return (
    <Frame label="AI signal tower">
      <Ground c="#fde68a" />
      <Box x={4} y={4} w={4} d={4} h={2} c="#8b5cf6" />
      <Box x={5} y={5} z={2} w={2} d={2} h={5} c="#a78bfa" />
      <Box x={5.7} y={5.7} z={7} w={0.6} d={0.6} h={2} c="#c4b5fd" />
      {[14, 26, 38].map((r, i) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke="#ec4899" strokeWidth={2.5} className="ill-ping" style={{ animationDelay: `${i * 0.5}s` }} />
      ))}
      <circle cx={cx} cy={cy} r={5} fill="#ff4d6d" stroke={INK} strokeWidth={1.2} />
      <Tree x={10} y={2} />
      <Tree x={1} y={9} c="#16a34a" />
    </Frame>
  );
}

export function TeamArt() {
  const people = [
    [3, 5, "#ff6b35", 1.8], [5.5, 5, "#3d5afe", 2.6], [8, 5, "#2ec4b6", 1.8],
    [2, 8.5, "#ec4899", 1], [4.5, 8.5, "#ffc93c", 1], [7, 8.5, "#8b5cf6", 1], [9.5, 8.5, "#22c55e", 1],
  ] as const;
  return (
    <Frame label="A team gathered around a lead">
      <Ground c="#ccfbf1" />
      {people.map(([x, y, c, p], i) => {
        const [hx, hy] = P(x + 0.5, y + 0.5, p + 2.6).split(",").map(Number);
        return (
          <g key={i} className="ill-bob" style={{ animationDelay: `${i * -0.3}s` }}>
            <Box x={x - 0.3} y={y - 0.3} w={1.6} d={1.6} h={p} c="#e2e8f0" />
            <Box x={x} y={y} z={p} w={1} d={1} h={1.8} c={c} />
            <circle cx={hx} cy={hy} r={7} fill="#fcd9b6" stroke={INK} strokeWidth={1.2} />
          </g>
        );
      })}
    </Frame>
  );
}

export function GiraffeArt() {
  return (
    <Frame label="A giraffe — the GiraffAI mascot">
      <Ground c="#fef3c7" />
      <g className="ill-bob">
        {[[3, 4], [5.5, 4], [3, 6.5], [5.5, 6.5]].map(([x, y], i) => (
          <Box key={i} x={x} y={y} w={0.7} d={0.7} h={3} c="#f59e0b" />
        ))}
        <Box x={2.8} y={3.8} z={3} w={3.6} d={3.6} h={1.8} c="#fbbf24" />
        <Box x={3.8} y={4.6} z={3.6} w={0.8} d={0.8} h={0.05} c="#b45309" />
        <Box x={5.2} y={6} z={3.9} w={0.7} d={0.7} h={0.05} c="#b45309" />
        <Box x={5.4} y={4.4} z={4.8} w={1} d={1} h={5} c="#fbbf24" />
        <Box x={5.2} y={4.1} z={9.8} w={2.6} d={1.5} h={1.3} c="#fbbf24" />
        <Box x={5.6} y={4.3} z={11.1} w={0.3} d={0.3} h={0.7} c="#b45309" />
        <Box x={5.6} y={5} z={11.1} w={0.3} d={0.3} h={0.7} c="#b45309" />
        <Box x={7.3} y={4.4} z={10.6} w={0.2} d={0.3} h={0.3} c={INK} />
      </g>
      <Tree x={9.5} y={2} />
      <Tree x={10} y={8} c="#16a34a" />
    </Frame>
  );
}

export function FinishArt() {
  return (
    <Frame label="Finish line with a mailbox">
      <Ground c="#fecdd3" />
      <Box x={2} y={-1} w={4} d={14} h={0.05} c="#3b3a4a" />
      {[0, 1, 2, 3].map((i) =>
        [0, 1].map((j) => <Box key={`${i}${j}`} x={2 + i} y={5 + j} w={1} d={1} h={0.08} c={(i + j) % 2 ? "#ffffff" : INK} />)
      )}
      <Box x={1.4} y={5.4} w={0.3} d={0.3} h={5} c="#94a3b8" />
      <Box x={6.3} y={5.4} w={0.3} d={0.3} h={5} c="#94a3b8" />
      <Box x={1.4} y={5.4} z={5} w={5.2} d={0.3} h={1} c="#ff6b35" />
      {/* the real car parks here at the end */}
      <circle data-car-end cx={P(4, 8.5, 0.1).split(",")[0]} cy={P(4, 8.5, 0.1).split(",")[1]} r={1} fill="none" />
      <Box x={9} y={4} w={0.3} d={0.3} h={2.5} c="#64748b" />
      <Box x={8.4} y={3.6} z={2.5} w={1.6} d={1.1} h={1.1} c="#3d5afe" />
      <g className="ill-wave" style={{ transformBox: "fill-box", transformOrigin: "left bottom" }}>
        <Box x={10} y={3.8} z={3.2} w={0.08} d={0.8} h={0.5} c="#ff4d4d" />
      </g>
      <Tree x={10} y={9} />
    </Frame>
  );
}
