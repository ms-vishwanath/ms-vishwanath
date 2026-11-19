import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiAntdesign,
  SiShadcnui,
  SiRedux,
  SiFramer,
  SiThreedotjs,
  SiReacthookform,
  SiZod,
  SiExpo,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiDjango,
  SiGraphql,
  SiRabbitmq,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiSupabase,
  SiMariadb,
  SiTypeorm,
  SiMongoose,
  SiClerk,
  SiJsonwebtokens,
  SiDocker,
  SiKubernetes,
  SiAmazonwebservices,
  SiAmazons3,
  SiAmazonec2,
  SiVercel,
  SiRender,
  SiHeroku,
  SiTwilio,
  SiAppwrite,
  SiRazorpay,
  SiGooglemaps,
  SiGoogleanalytics,
  SiPrometheus,
  SiPlausibleanalytics,
  SiSocketdotio,
  SiGoogle,
  SiGooglegemini,
  SiAnthropic,
  SiGit,
  SiGithub,
  SiFigma,
  SiDiagramsdotnet,
  SiSlack,
  SiDiscord,
} from "react-icons/si";
import {
  TbApi,
  TbNetwork,
  TbHierarchy3,
  TbExchange,
  TbPlugConnected,
  TbServerCog,
  TbBellRinging,
  TbCreditCard,
  TbMessageDots,
  TbScan,
  TbFocus2,
  TbTerminal2,
  TbCpu,
  TbBrandTeams,
  TbAtom,
  TbLayersIntersect,
} from "react-icons/tb";
import { VscAzureDevops } from "react-icons/vsc";
import { FaRocket, FaUsersGear, FaRobot, FaMicrosoft } from "react-icons/fa6";
import { RiBarChartGroupedFill } from "react-icons/ri";

const iconSizeClass = "w-6 h-6 sm:w-7 sm:h-7";

// Custom SVG components for technologies without standard React Icons
export const PhonePeIcon = ({ className = iconSizeClass }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#5F259F" />
    <path
      d="M13.8 6.5H9.5a.8.8 0 0 0-.8.8v9.4a.8.8 0 0 0 1.6 0v-2.8h3.5a3.7 3.7 0 1 0 0-7.4zm0 4.6h-3.5V8.1h3.5a1.9 1.9 0 0 1 0 3z"
      fill="#ffffff"
    />
  </svg>
);

export const JuspayIcon = ({ className = iconSizeClass }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <rect width="24" height="24" rx="5" fill="#0C2340" />
    <path d="M6 7h12v2.5H6zm0 4h8.5v2.5H6zm0 4h12v2.5H6z" fill="#00D290" />
  </svg>
);

export const NeonIcon = ({ className = iconSizeClass }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#00E599]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2.5 7.5v9L12 22l9.5-5.5v-9L12 2zm0 2.8l7 4v6.4l-7 4-7-4v-6.4l7-4z" />
  </svg>
);

export const CoolifyIcon = ({ className = iconSizeClass }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#6B17E8]`} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4h2v4zm0-6H9V8h2v2zm4 6h-2v-6h2v6zm0-8h-2V6h2v2z" />
  </svg>
);

export const OneSignalIcon = ({ className = iconSizeClass }: { className?: string }) => (
  <TbBellRinging className={`${className} text-[#E54B4D]`} />
);

export const Fast2SMSIcon = ({ className = iconSizeClass }: { className?: string }) => (
  <TbMessageDots className={`${className} text-[#22C55E]`} />
);

// Map of all icons
export const TechIconMap: Record<string, React.ReactNode> = {
  // Programming
  JavaScript: <SiJavascript className={`${iconSizeClass} text-[#F7DF1E]`} />,
  TypeScript: <SiTypescript className={`${iconSizeClass} text-[#3178C6]`} />,
  Python: <SiPython className={`${iconSizeClass} text-[#3776AB]`} />,

  // Frontend
  "React.js": <SiReact className={`${iconSizeClass} text-[#61DAFB]`} />,
  "Next.js": <SiNextdotjs className={`${iconSizeClass} text-slate-900`} />,
  "Tailwind CSS": <SiTailwindcss className={`${iconSizeClass} text-[#06B6D4]`} />,
  Bootstrap: <SiBootstrap className={`${iconSizeClass} text-[#7952B3]`} />,
  "Material UI": <SiMui className={`${iconSizeClass} text-[#007FFF]`} />,
  "Ant Design": <SiAntdesign className={`${iconSizeClass} text-[#0170FE]`} />,
  "Shadcn UI": <SiShadcnui className={`${iconSizeClass} text-slate-900`} />,
  "Redux Toolkit": <SiRedux className={`${iconSizeClass} text-[#764ABC]`} />,
  "Framer Motion": <SiFramer className={`${iconSizeClass} text-[#0055FF]`} />,
  Recharts: <RiBarChartGroupedFill className={`${iconSizeClass} text-[#22B5BF]`} />,
  "Three.js": <SiThreedotjs className={`${iconSizeClass} text-slate-900`} />,
  "React Hook Form": <SiReacthookform className={`${iconSizeClass} text-[#EC5990]`} />,
  Zod: <SiZod className={`${iconSizeClass} text-[#3E67B1]`} />,

  // Mobile
  "React Native Cli": <SiReact className={`${iconSizeClass} text-[#61DAFB]`} />,
  Expo: <SiExpo className={`${iconSizeClass} text-slate-900`} />,

  // Backend
  "Node.js": <SiNodedotjs className={`${iconSizeClass} text-[#5FA04E]`} />,
  "Express.js": <SiExpress className={`${iconSizeClass} text-slate-900`} />,
  FastAPI: <SiFastapi className={`${iconSizeClass} text-[#009688]`} />,
  Django: <SiDjango className={`${iconSizeClass} text-[#092E20]`} />,
  "Next.js Server Actions": <SiNextdotjs className={`${iconSizeClass} text-slate-900`} />,

  // API and Architecture
  "REST APIs": <TbApi className={`${iconSizeClass} text-[#0284C7]`} />,
  GraphQL: <SiGraphql className={`${iconSizeClass} text-[#E10098]`} />,
  gRPC: <TbNetwork className={`${iconSizeClass} text-[#244C5A]`} />,
  "Microservices Architecture": <TbLayersIntersect className={`${iconSizeClass} text-[#8B5CF6]`} />,
  "Backend-for-Frontend (BFF) Pattern": <TbHierarchy3 className={`${iconSizeClass} text-[#EC4899]`} />,

  // Messaging and Streaming
  RabbitMQ: <SiRabbitmq className={`${iconSizeClass} text-[#FF6600]`} />,
  AMQP: <TbExchange className={`${iconSizeClass} text-[#F97316]`} />,
  "Web Sockets": <TbPlugConnected className={`${iconSizeClass} text-[#10B981]`} />,

  // Databases and ORM
  PostgreSQL: <SiPostgresql className={`${iconSizeClass} text-[#4169E1]`} />,
  MongoDB: <SiMongodb className={`${iconSizeClass} text-[#47A248]`} />,
  "Firebase Firestore": <SiFirebase className={`${iconSizeClass} text-[#FFCA28]`} />,
  Redis: <SiRedis className={`${iconSizeClass} text-[#DC382D]`} />,
  Supabase: <SiSupabase className={`${iconSizeClass} text-[#3ECF8E]`} />,
  Neon: <NeonIcon className={iconSizeClass} />,
  MariaDB: <SiMariadb className={`${iconSizeClass} text-[#003545]`} />,
  TypeORM: <SiTypeorm className={`${iconSizeClass} text-[#FE0803]`} />,
  Mongoose: <SiMongoose className={`${iconSizeClass} text-[#880000]`} />,

  // Authentication
  Clerk: <SiClerk className={`${iconSizeClass} text-[#6C47FF]`} />,
  "Firebase Authentication": <SiFirebase className={`${iconSizeClass} text-[#FFCA28]`} />,
  JWT: <SiJsonwebtokens className={`${iconSizeClass} text-[#D63AFF]`} />,

  // DevOps and Containers
  Docker: <SiDocker className={`${iconSizeClass} text-[#2496ED]`} />,
  Kubernetes: <SiKubernetes className={`${iconSizeClass} text-[#326CE5]`} />,

  // Cloud and Deployment
  "AWS (S3, EC2)": <SiAmazonwebservices className={`${iconSizeClass} text-[#FF9900]`} />,
  Vercel: <SiVercel className={`${iconSizeClass} text-slate-900`} />,
  Render: <SiRender className={`${iconSizeClass} text-[#46E3B7]`} />,
  "Firebase Hosting": <SiFirebase className={`${iconSizeClass} text-[#FFCA28]`} />,
  Heroku: <SiHeroku className={`${iconSizeClass} text-[#430098]`} />,
  Coolify: <CoolifyIcon className={iconSizeClass} />,

  // Third-Party Integrations
  Firebase: <SiFirebase className={`${iconSizeClass} text-[#FFCA28]`} />,
  Twilio: <SiTwilio className={`${iconSizeClass} text-[#F22F46]`} />,
  Appwrite: <SiAppwrite className={`${iconSizeClass} text-[#FD366E]`} />,
  Razorpay: <SiRazorpay className={`${iconSizeClass} text-[#0C2340]`} />,
  PhonePe: <PhonePeIcon className={iconSizeClass} />,
  OneSignal: <OneSignalIcon className={iconSizeClass} />,
  Juspay: <JuspayIcon className={iconSizeClass} />,
  Fast2SMS: <Fast2SMSIcon className={iconSizeClass} />,
  "Google Maps APIs": <SiGooglemaps className={`${iconSizeClass} text-[#4285F4]`} />,

  // Observability and Monitoring
  "Microsoft Clarity": <FaMicrosoft className={`${iconSizeClass} text-[#00A4EF]`} />,
  "Google Analytics": <SiGoogleanalytics className={`${iconSizeClass} text-[#E37400]`} />,
  Prometheus: <SiPrometheus className={`${iconSizeClass} text-[#E6522C]`} />,
  "Vercel Analytics": <SiVercel className={`${iconSizeClass} text-slate-900`} />,
  "Plausible Analytics": <SiPlausibleanalytics className={`${iconSizeClass} text-[#5850EC]`} />,

  // Realtime Systems
  "Socket.io": <SiSocketdotio className={`${iconSizeClass} text-slate-900`} />,
  "Firebase Realtime Database": <SiFirebase className={`${iconSizeClass} text-[#FFA000]`} />,

  // AI and ML
  "Google AI Studio": <SiGoogle className={`${iconSizeClass} text-[#4285F4]`} />,
  "Gemini API": <SiGooglegemini className={`${iconSizeClass} text-[#8E75FF]`} />,
  MediaPipe: <TbScan className={`${iconSizeClass} text-[#00A4EF]`} />,
  "Tesseract OCR": <TbScan className={`${iconSizeClass} text-[#059669]`} />,
  YOLOv8: <TbFocus2 className={`${iconSizeClass} text-[#F97316]`} />,

  // AI-Assisted Development
  OpenCode: <TbTerminal2 className={`${iconSizeClass} text-[#3B82F6]`} />,
  "Claude Code": <SiAnthropic className={`${iconSizeClass} text-[#D97706]`} />,
  Antigravity: <FaRocket className={`${iconSizeClass} text-[#8B5CF6]`} />,
  "Parallel AI Agent Workflows": <TbCpu className={`${iconSizeClass} text-[#6366F1]`} />,
  "Multi-Agent Development": <FaUsersGear className={`${iconSizeClass} text-[#EC4899]`} />,

  // Tools
  Git: <SiGit className={`${iconSizeClass} text-[#F05032]`} />,
  GitHub: <SiGithub className={`${iconSizeClass} text-slate-900`} />,
  Figma: <SiFigma className={`${iconSizeClass} text-[#F24E1E]`} />,
  "Draw.io": <SiDiagramsdotnet className={`${iconSizeClass} text-[#F08705]`} />,
  "Microsoft Teams": <TbBrandTeams className={`${iconSizeClass} text-[#6264A7]`} />,
  Slack: <SiSlack className={`${iconSizeClass} text-[#4A154B]`} />,
  Discord: <SiDiscord className={`${iconSizeClass} text-[#5865F2]`} />,
  "Azure DevOps": <VscAzureDevops className={`${iconSizeClass} text-[#0078D7]`} />,
};
