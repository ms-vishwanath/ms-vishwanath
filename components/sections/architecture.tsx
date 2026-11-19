"use client";

import { CityArt } from "@/components/illustrations";

import { useState } from "react";
import { Reveal, Section } from "@/components/ui";

// Hand-built isometric projection of a microservices platform.
const S = 24;
const C = Math.cos(Math.PI / 6);
const iso = (x: number, y: number, z: number) => [(x - y) * C * S, (x + y) * 0.5 * S - z * S] as const;
const pts = (a: (readonly [number, number])[]) => a.map((p) => p.join(",")).join(" ");

type Node = { id: string; label: string; x: number; layer: number };

const layers = [
  { z: 0, name: "Data", desc: "PostgreSQL, MongoDB, Redis, object storage (S3) and queues — the right store for each job, owned per service." },
  { z: 2.7, name: "Services", desc: "Domain services in Node.js, FastAPI or Django, AI/LLM services and background workers, talking over gRPC and RabbitMQ events." },
  { z: 5.4, name: "API", desc: "REST, GraphQL, gRPC and Socket.io — Backend-for-Frontend layers with consistent pagination, filtering, sorting and search standards." },
  { z: 8.1, name: "Edge", desc: "Nginx, Cloudflare and the auth layer — JWT/OAuth, RBAC, rate limiting and CORS before anything reaches a service." },
  { z: 10.8, name: "Clients", desc: "Next.js web apps, React Native / Expo mobile, Tauri desktop and admin dashboards — each with its own needs and release cadence." },
];

const nodes: Node[] = [
  ...["Postgres", "Mongo", "Redis", "S3", "Queue"].map((l, i) => ({ id: "d" + i, label: l, x: 0.6 + i * 1.8, layer: 0 })),
  ...["Node.js", "FastAPI", "Django", "AI / LLM", "Workers"].map((l, i) => ({ id: "s" + i, label: l, x: 0.6 + i * 1.8, layer: 1 })),
  ...["REST", "GraphQL", "gRPC", "Sockets"].map((l, i) => ({ id: "a" + i, label: l, x: 1 + i * 2.2, layer: 2 })),
  ...["Nginx", "CDN", "Auth"].map((l, i) => ({ id: "e" + i, label: l, x: 1.4 + i * 2.8, layer: 3 })),
  ...["Web", "Mobile", "Desktop", "Admin"].map((l, i) => ({ id: "c" + i, label: l, x: 1 + i * 2.2, layer: 4 })),
];

const links: [string, string][] = [
  ["c0", "e1"], ["c1", "e0"], ["c2", "e0"], ["c3", "e2"], ["c0", "e2"],
  ["e0", "a0"], ["e0", "a1"], ["e1", "a0"], ["e2", "a2"], ["e2", "a3"],
  ["a0", "s0"], ["a1", "s0"], ["a1", "s3"], ["a2", "s1"], ["a2", "s2"], ["a3", "s0"],
  ["s0", "d0"], ["s0", "d2"], ["s1", "d1"], ["s2", "d0"], ["s3", "d3"], ["s4", "d4"], ["s3", "d2"],
];

const Y = 2; // depth position of nodes on each plate
const W = 10;
const D = 4;

function Box({ x, z, label, hot }: { x: number; z: number; label: string; hot: boolean }) {
  const w = 0.9, h = 0.7;
  const t = [iso(x, Y, z + h), iso(x + w, Y, z + h), iso(x + w, Y + w, z + h), iso(x, Y + w, z + h)];
  const l = [iso(x, Y + w, z + h), iso(x + w, Y + w, z + h), iso(x + w, Y + w, z), iso(x, Y + w, z)];
  const r = [iso(x + w, Y, z + h), iso(x + w, Y + w, z + h), iso(x + w, Y + w, z), iso(x + w, Y, z)];
  const [lx, ly] = iso(x + w / 2, Y + w / 2, z + h);
  return (
    <g className="transition-opacity duration-500" opacity={hot ? 1 : 0.35}>
      <polygon points={pts(l)} className="fill-[var(--iso-l)] stroke-[var(--line)]" strokeWidth={0.6} />
      <polygon points={pts(r)} className="fill-[var(--iso-r)] stroke-[var(--line)]" strokeWidth={0.6} />
      <polygon points={pts(t)} className="fill-[var(--iso-t)] stroke-fg" strokeWidth={0.6} />
      <text x={lx} y={ly - 16} textAnchor="middle" className="mono fill-fg text-[9px]">
        {label}
      </text>
    </g>
  );
}

export default function Architecture() {
  const [hover, setHover] = useState<number | null>(null);
  const pos = (n: Node) => iso(n.x + 0.45, Y + 0.45, layers[n.layer].z);
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  return (
    <Section id="architecture" index="04" label="Service city" tint="#efeaff" accent="#8b5cf6" art={<CityArt />} title="I think in systems, not screens." lead="How I structure products end to end: clients, an edge and auth layer, APIs shaped for each client, services and AI workers, and the data underneath. It's the blueprint I adapt for every build, from small SaaS to large microservice platforms. Hover a layer.">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <svg viewBox="-280 -330 560 510" className="w-full">
            {/* plates */}
            {layers.map((L, i) => (
              <g key={L.name} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} className="cursor-pointer">
                <polygon
                  points={pts([iso(0, 0, L.z), iso(W, 0, L.z), iso(W, D, L.z), iso(0, D, L.z)])}
                  className="transition-all duration-500"
                  fill={hover === i ? "var(--plate-hot)" : "var(--plate)"}
                  stroke="var(--line-strong)"
                  strokeWidth={0.8}
                />
                <text {...(() => { const [x, y] = iso(0, D, L.z); return { x: x - 8, y: y + 4 }; })()} textAnchor="end" className="mono fill-dim text-[10px]">
                  {L.name}
                </text>
              </g>
            ))}
            {/* links with travelling packets */}
            {links.map(([a, b], k) => {
              const [x1, y1] = pos(byId[a]);
              const [x2, y2] = pos(byId[b]);
              const lit = hover === null || hover === byId[a].layer || hover === byId[b].layer;
              return (
                <g key={k} opacity={lit ? 1 : 0.15} className="transition-opacity duration-500">
                  <line x1={x1} y1={y1} x2={x2} y2={y2 - 18} stroke="var(--line-strong)" strokeWidth={0.7} strokeDasharray="2 3" className="flow" />
                  <circle r={1.8} className="fill-fg">
                    <animateMotion dur={`${2 + (k % 5) * 0.4}s`} repeatCount="indefinite" path={`M${x1},${y1} L${x2},${y2 - 18}`} />
                  </circle>
                </g>
              );
            })}
            {/* boxes, painted back to front */}
            {nodes.map((n) => (
              <Box key={n.id} x={n.x} z={layers[n.layer].z} label={n.label} hot={hover === null || hover === n.layer} />
            ))}
            {/* message bus */}
            {(() => {
              const [x1, y1] = iso(0, D + 0.4, 2.7);
              const [x2, y2] = iso(W, D + 0.4, 2.7);
              return (
                <g opacity={hover === null || hover === 1 ? 1 : 0.2}>
                  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--fg)" strokeWidth={1.2} strokeDasharray="6 4" className="flow-fast" />
                  <text x={x2 + 6} y={y2 + 12} className="mono fill-fg text-[9px]">RabbitMQ</text>
                </g>
              );
            })()}
          </svg>
        </Reveal>

        <div className="space-y-2 lg:col-span-4">
          {[...layers].reverse().map((L) => {
            const i = layers.indexOf(L);
            return (
              <Reveal key={L.name} delay={(layers.length - 1 - i) * 0.06}>
                <div onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} className={`cursor-default rounded-xl border p-5 transition-colors duration-300 ${hover === i ? "border-ink bg-white shadow-[4px_4px_0_var(--ink)]" : "border-ink/30 bg-white/50"}`}>
                  <p className="mono text-xs text-ink/65">L{i}</p>
                  <h4 className="mt-1 text-lg font-medium">{L.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{L.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
