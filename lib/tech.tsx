import type { IconType } from "react-icons";
import * as Si from "react-icons/si";
import { Boxes, Bot, Cpu, Network, Radio, ServerCog, ShieldCheck, Sparkles, Workflow, Zap, Database, KeyRound, Smartphone, CreditCard } from "lucide-react";

type Entry = { icon: IconType | typeof Boxes; color: string };

// Brand icon + brand colour for every stack item. Unknown names fall back to a generic glyph.
const map: Record<string, Entry> = {
  React: { icon: Si.SiReact, color: "#149eca" },
  "Next.js": { icon: Si.SiNextdotjs, color: "#111111" },
  TypeScript: { icon: Si.SiTypescript, color: "#3178c6" },
  JavaScript: { icon: Si.SiJavascript, color: "#e5b800" },
  "Tailwind CSS": { icon: Si.SiTailwindcss, color: "#06b6d4" },
  "Shadcn UI": { icon: Si.SiShadcnui, color: "#111111" },
  "Material UI": { icon: Si.SiMui, color: "#007fff" },
  "Ant Design": { icon: Si.SiAntdesign, color: "#1677ff" },
  "Redux Toolkit": { icon: Si.SiRedux, color: "#764abc" },
  "React Hook Form": { icon: Si.SiReacthookform, color: "#ec5990" },
  Zod: { icon: Si.SiZod, color: "#3e67b1" },
  "Framer Motion": { icon: Si.SiFramer, color: "#0055ff" },
  "Three.js": { icon: Si.SiThreedotjs, color: "#111111" },
  Recharts: { icon: Sparkles, color: "#22b5bf" },
  "Node.js": { icon: Si.SiNodedotjs, color: "#5fa04e" },
  "Express.js": { icon: Si.SiExpress, color: "#111111" },
  "Server Actions": { icon: Si.SiNextdotjs, color: "#111111" },
  Python: { icon: Si.SiPython, color: "#3776ab" },
  FastAPI: { icon: Si.SiFastapi, color: "#009688" },
  Django: { icon: Si.SiDjango, color: "#0c4b33" },
  GraphQL: { icon: Si.SiGraphql, color: "#e10098" },
  gRPC: { icon: Network, color: "#2da6b0" },
  REST: { icon: Workflow, color: "#ff6b35" },
  Microservices: { icon: Boxes, color: "#7c3aed" },
  RabbitMQ: { icon: Si.SiRabbitmq, color: "#ff6600" },
  AMQP: { icon: Radio, color: "#ff6600" },
  "Socket.io": { icon: Si.SiSocketdotio, color: "#111111" },
  PostgreSQL: { icon: Si.SiPostgresql, color: "#4169e1" },
  MongoDB: { icon: Si.SiMongodb, color: "#47a248" },
  MariaDB: { icon: Si.SiMariadb, color: "#003545" },
  Redis: { icon: Si.SiRedis, color: "#dc382d" },
  Firestore: { icon: Si.SiFirebase, color: "#ffa000" },
  "Firebase RTDB": { icon: Si.SiFirebase, color: "#ffa000" },
  Supabase: { icon: Si.SiSupabase, color: "#3ecf8e" },
  Neon: { icon: Database, color: "#00c896" },
  Appwrite: { icon: Si.SiAppwrite, color: "#fd366e" },
  InstantDB: { icon: Zap, color: "#f97316" },
  SQLite: { icon: Si.SiSqlite, color: "#003b57" },
  "Gemini API": { icon: Si.SiGooglegemini, color: "#8e75b2" },
  "Google AI Studio": { icon: Si.SiGoogle, color: "#4285f4" },
  "LLM integrations": { icon: Bot, color: "#d97757" },
  "MCP servers": { icon: Si.SiAnthropic, color: "#d97757" },
  "AI agents": { icon: Bot, color: "#7c3aed" },
  "AI automation": { icon: Workflow, color: "#ec4899" },
  "Local LLMs": { icon: Si.SiOllama, color: "#111111" },
  "Intelligent data analysis": { icon: Cpu, color: "#0ea5e9" },
  Docker: { icon: Si.SiDocker, color: "#2496ed" },
  Kubernetes: { icon: Si.SiKubernetes, color: "#326ce5" },
  "AWS EC2": { icon: Si.SiAmazonec2, color: "#ff9900" },
  "AWS S3": { icon: Si.SiAmazons3, color: "#569a31" },
  Nginx: { icon: Si.SiNginx, color: "#009639" },
  Linux: { icon: Si.SiLinux, color: "#111111" },
  "Self-hosting": { icon: ServerCog, color: "#64748b" },
  Cloudflare: { icon: Si.SiCloudflare, color: "#f38020" },
  Vercel: { icon: Si.SiVercel, color: "#111111" },
  "Firebase Hosting": { icon: Si.SiFirebase, color: "#ffa000" },
  Render: { icon: Si.SiRender, color: "#111111" },
  "CI/CD": { icon: Si.SiGithubactions, color: "#2088ff" },
  JWT: { icon: Si.SiJsonwebtokens, color: "#d63aff" },
  OAuth: { icon: KeyRound, color: "#f59e0b" },
  RBAC: { icon: ShieldCheck, color: "#10b981" },
  Clerk: { icon: Si.SiClerk, color: "#6c47ff" },
  "Firebase Auth": { icon: Si.SiFirebase, color: "#ffa000" },
  "Rate limiting": { icon: ShieldCheck, color: "#ef4444" },
  CORS: { icon: ShieldCheck, color: "#0ea5e9" },
  "API security": { icon: ShieldCheck, color: "#7c3aed" },
  "React Native": { icon: Si.SiReact, color: "#149eca" },
  Expo: { icon: Si.SiExpo, color: "#111111" },
  "Tauri 2": { icon: Si.SiTauri, color: "#24c8db" },
  "Rust (exploring)": { icon: Si.SiRust, color: "#b7410e" },
  "Cross-platform architecture": { icon: Smartphone, color: "#6366f1" },
  Razorpay: { icon: Si.SiRazorpay, color: "#0c2451" },
  PhonePe: { icon: Si.SiPhonepe, color: "#5f259f" },
  "Transaction workflows": { icon: CreditCard, color: "#16a34a" },
  "Google Maps": { icon: Si.SiGooglemaps, color: "#4285f4" },
  "Zoom API": { icon: Si.SiZoom, color: "#0b5cff" },
  "Meta / Instagram APIs": { icon: Si.SiInstagram, color: "#e4405f" },
  Git: { icon: Si.SiGit, color: "#f05032" },
  Figma: { icon: Si.SiFigma, color: "#f24e1e" },
  "Blender (exploring)": { icon: Si.SiBlender, color: "#e87d0d" },
  Strapi: { icon: Si.SiStrapi, color: "#4945ff" },
  "Meta APIs": { icon: Si.SiMeta, color: "#0467df" },
  GSAP: { icon: Zap, color: "#0ae448" },
  SVG: { icon: Sparkles, color: "#ffb13b" },
};

export function tech(name: string): Entry {
  return map[name] ?? { icon: Sparkles, color: "#ff6b35" };
}

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const { icon: I, color } = tech(name);
  return <I className={className} style={{ color }} />;
}

// Coins on the road — the most recognisable stack items.
export const coinSkills = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "FastAPI", "GraphQL", "RabbitMQ",
  "PostgreSQL", "MongoDB", "Redis", "Supabase", "Firestore", "Gemini API", "MCP servers", "Docker",
  "Kubernetes", "AWS S3", "Nginx", "Cloudflare", "Tailwind CSS", "Three.js", "Django", "Socket.io",
  "Clerk", "Expo", "Tauri 2", "Rust (exploring)", "Razorpay", "Google Maps", "Git", "Figma",
];
