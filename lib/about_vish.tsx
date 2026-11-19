import React from "react";
import {
  MonitorSmartphone,
  Smartphone,
  Cpu,
  ShieldCheck,
  Database,
  Cloud,
  Puzzle,
  Brain,
  Code2,
  Activity,
  Zap,
} from "lucide-react";
import { BsTools } from "react-icons/bs";
import { TbNetwork, TbExchange, TbServerCog } from "react-icons/tb";
import { FaRobot } from "react-icons/fa6";
import { TechIconMap } from "./tech-icons";

export interface ProjectItem {
  name: string;
  description: string;
  link: string;
  category?: string;
  tags?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description?: string;
}

export const personalInfo = {
  name: "M. S. Vishwanath",
  title: "Software Developer",
  role: "Full Stack Developer",
  location: "Coimbatore, Tamil Nadu, India",
  phone: "+91 9790006831",
  email: "msvishwanath@outlook.com",
  website: "https://ms-vishwanath.web.app",
  linkedin: "https://www.linkedin.com/in/msvishwanath",
  github: "https://github.com/ms-vishwanath",
};

export const socialLinks = {
  github: {
    name: "ms-vishwanath",
    link: "https://github.com/ms-vishwanath",
  },
  linkedin: {
    name: "msvishwanath",
    link: "https://www.linkedin.com/in/msvishwanath/",
  },
  email: {
    name: "msvishwanath@outlook.com",
    link: "mailto:msvishwanath@outlook.com",
  },
  phone: {
    name: "+91 9790006831",
    link: "tel:+919790006831",
  },
  website: {
    name: "ms-vishwanath.web.app",
    link: "https://ms-vishwanath.web.app",
  },
};

export const professionalSummary =
  "Full Stack Developer with 1 year of professional experience building scalable web applications, microservices-based architectures, AI-powered tools, and embedded systems. Experienced in designing and delivering end-to-end solutions spanning frontend interfaces, backend services, APIs, cloud infrastructure, and third-party integrations. Contributed to 70+ production-grade applications across SaaS platforms, AI-driven tools, IoT systems, and enterprise management software. Strong expertise in modern JavaScript ecosystems and backend technologies including Node.js, Express.js, FastAPI, Django, and GraphQL. Skilled in developing microservices, REST APIs, real-time systems, and distributed architectures with a focus on scalability, performance, and reliability. Experienced in AI-assisted software development, coordinating and communicating across multiple parallel coding agents to execute development, debugging, architecture, and infrastructure tasks concurrently. Hands-on experience with AWS, Google Maps integrations, Docker, Kubernetes, and DevOps-driven deployments.";

export const experiences: ExperienceItem[] = [
  {
    role: "Full Stack Developer",
    company: "Intecai Digital Limited",
    location: "Chennai, India",
    period: "Sep 2025 – Oct 2026",
    highlights: [
      "Designed the system architecture for a large-scale super application comprising 40+ micro services, 8 Backend-for-Frontend (BFF) services, and 4 socket-based real-time services.",
      "Developed scalable backend services using Node.js, Redis, PostgreSQL, and MongoDB, with Google Maps APIs for location-based and delivery-related functionality.",
      "Designed the platform to support real-time operations, distributed service orchestration, and high-volume workflows comparable to modern delivery platforms.",
      "Migrated production workloads from AWS to a customised private VPS infrastructure, reducing infrastructure costs by approximately $500 per month while maintaining containerised deployments and production services.",
      "Implemented and managed Docker-based infrastructure, reverse proxies, networking, databases, and deployment workflows across production environments.",
    ],
    tags: [
      "Microservices",
      "BFF Architecture",
      "Node.js",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Google Maps APIs",
      "Docker",
      "AWS",
      "VPS Migration",
    ],
  },
  {
    role: "Full Stack Developer Freelancing",
    company: "Twin Birds, NCC",
    location: "Tiruppur, India",
    period: "May 2025 – August 2025",
    highlights: [
      "Designed and implemented an automated data export pipeline for enterprise CRM systems.",
      "Developed Power Automate workflows and Node.js Express services with PostgreSQL to extract and process more than 20 years of Axpert CRM data.",
      "Built automated workflows to transfer data to Microsoft Sheets and PostgreSQL databases, generate reports, and distribute them via scheduled email notifications to designated recipients.",
      "Deployed and maintained the solution on a private Windows server environment, ensuring secure processing and reliable automation for business operations.",
    ],
    tags: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Power Automate",
      "Axpert CRM",
      "ETL Pipeline",
      "Windows Server",
    ],
  },
  {
    role: "Director of Research and Development & Full Stack Developer Intern",
    company: "Intecai Digital Limited",
    location: "Chennai, India",
    period: "Oct 2024 – Apr 2025",
    highlights: [
      "AKS Web Application: Developed a financial and compliance platform that supports GST filing and company registration. Enabled automated service workflows and enhanced API performance for dependable mobile access.",
      "WYF Online: Created an event management platform featuring both admin and user portals, streamlining event registrations, competition management, and operational workflows for WYF events.",
      "LawCube: Designed and optimized the admin blog editor with structured rich text editing capabilities, enhancing content management for legal articles and event publishing.",
      "Photo Finder: Implemented a facial recognition system based on YOLOv8 with a Next.js interface, allowing users to find photos via automated face matching.",
    ],
    tags: [
      "Next.js",
      "YOLOv8",
      "Facial Recognition",
      "REST APIs",
      "Fintech CRM",
      "Event Portals",
      "Rich Text Editor",
    ],
  },
  {
    role: "Director & Full Stack Development Mentor",
    company: "CodeZCorp Academy Private Limited",
    location: "Remote / India",
    period: "Nov 2024 – Apr 2025",
    highlights: [
      "Mentored developers in full stack development and created structured learning materials.",
      "Built the academy learning platform and internal tools.",
      "Worked on CRM Web Application connecting mentors and learners.",
    ],
    tags: [
      "Mentorship",
      "Full Stack Development",
      "EdTech Platform",
      "CRM Architecture",
      "Next.js",
      "Node.js",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "Nutz Technovation Private Limited",
    location: "Erode, India",
    period: "Aug 2023 – Oct 2023",
    highlights: [
      "Developed a portfolio website for Kongunadu Kalaiculoo cultural organization, improving their digital presence and accessibility.",
      "Built an internal time and action tracking system with frontend dashboards and backend APIs to support operational workflow management.",
    ],
    tags: [
      "Portfolio Development",
      "Time & Action Tracking",
      "Dashboards",
      "Backend APIs",
    ],
  },
];

export const education: EducationItem = {
  degree: "B.Tech in Artificial Intelligence and Data Science",
  institution: "Erode Sengunthar Engineering College",
  location: "Erode, India",
  period: "2021 – 2025",
  description:
    "Comprehensive studies covering Artificial Intelligence, Data Engineering, Distributed Systems, Software Architecture, and Embedded Electronics.",
};

export interface TechStackCategory {
  title: string;
  icon: React.ReactNode;
  items: {
    name: string;
    icon?: React.ReactNode | string;
  }[];
}

export const techStacks: TechStackCategory[] = [
  {
    title: "Programming",
    icon: <Code2 className="w-6 h-6 text-pink-500" />,
    items: [
      { name: "JavaScript", icon: TechIconMap["JavaScript"] },
      { name: "TypeScript", icon: TechIconMap["TypeScript"] },
      { name: "Python", icon: TechIconMap["Python"] },
    ],
  },
  {
    title: "Frontend",
    icon: <MonitorSmartphone className="w-6 h-6 text-indigo-500" />,
    items: [
      { name: "React.js", icon: TechIconMap["React.js"] },
      { name: "Next.js", icon: TechIconMap["Next.js"] },
      { name: "Tailwind CSS", icon: TechIconMap["Tailwind CSS"] },
      { name: "Bootstrap", icon: TechIconMap["Bootstrap"] },
      { name: "Material UI", icon: TechIconMap["Material UI"] },
      { name: "Ant Design", icon: TechIconMap["Ant Design"] },
      { name: "Shadcn UI", icon: TechIconMap["Shadcn UI"] },
      { name: "Redux Toolkit", icon: TechIconMap["Redux Toolkit"] },
      { name: "Framer Motion", icon: TechIconMap["Framer Motion"] },
      { name: "Recharts", icon: TechIconMap["Recharts"] },
      { name: "Three.js", icon: TechIconMap["Three.js"] },
      { name: "React Hook Form", icon: TechIconMap["React Hook Form"] },
      { name: "Zod", icon: TechIconMap["Zod"] },
    ],
  },
  {
    title: "Mobile",
    icon: <Smartphone className="w-6 h-6 text-purple-500" />,
    items: [
      { name: "React Native Cli", icon: TechIconMap["React Native Cli"] },
      { name: "Expo", icon: TechIconMap["Expo"] },
    ],
  },
  {
    title: "Backend",
    icon: <Cpu className="w-6 h-6 text-amber-500" />,
    items: [
      { name: "Node.js", icon: TechIconMap["Node.js"] },
      { name: "Express.js", icon: TechIconMap["Express.js"] },
      { name: "FastAPI", icon: TechIconMap["FastAPI"] },
      { name: "Django", icon: TechIconMap["Django"] },
      { name: "Next.js Server Actions", icon: TechIconMap["Next.js Server Actions"] },
    ],
  },
  {
    title: "API and Architecture",
    icon: <TbNetwork className="w-6 h-6 text-blue-500" />,
    items: [
      { name: "REST APIs", icon: TechIconMap["REST APIs"] },
      { name: "GraphQL", icon: TechIconMap["GraphQL"] },
      { name: "gRPC", icon: TechIconMap["gRPC"] },
      { name: "Microservices Architecture", icon: TechIconMap["Microservices Architecture"] },
      { name: "Backend-for-Frontend (BFF) Pattern", icon: TechIconMap["Backend-for-Frontend (BFF) Pattern"] },
    ],
  },
  {
    title: "Messaging and Streaming",
    icon: <TbExchange className="w-6 h-6 text-orange-500" />,
    items: [
      { name: "RabbitMQ", icon: TechIconMap["RabbitMQ"] },
      { name: "AMQP", icon: TechIconMap["AMQP"] },
      { name: "Web Sockets", icon: TechIconMap["Web Sockets"] },
    ],
  },
  {
    title: "Databases and ORM",
    icon: <Database className="w-6 h-6 text-emerald-500" />,
    items: [
      { name: "PostgreSQL", icon: TechIconMap["PostgreSQL"] },
      { name: "MongoDB", icon: TechIconMap["MongoDB"] },
      { name: "Firebase Firestore", icon: TechIconMap["Firebase Firestore"] },
      { name: "Redis", icon: TechIconMap["Redis"] },
      { name: "Supabase", icon: TechIconMap["Supabase"] },
      { name: "Neon", icon: TechIconMap["Neon"] },
      { name: "MariaDB", icon: TechIconMap["MariaDB"] },
      { name: "TypeORM", icon: TechIconMap["TypeORM"] },
      { name: "Mongoose", icon: TechIconMap["Mongoose"] },
    ],
  },
  {
    title: "Authentication",
    icon: <ShieldCheck className="w-6 h-6 text-red-500" />,
    items: [
      { name: "Clerk", icon: TechIconMap["Clerk"] },
      { name: "Firebase Authentication", icon: TechIconMap["Firebase Authentication"] },
      { name: "JWT", icon: TechIconMap["JWT"] },
    ],
  },
  {
    title: "DevOps and Containers",
    icon: <TbServerCog className="w-6 h-6 text-cyan-500" />,
    items: [
      { name: "Docker", icon: TechIconMap["Docker"] },
      { name: "Kubernetes", icon: TechIconMap["Kubernetes"] },
    ],
  },
  {
    title: "Cloud and Deployment",
    icon: <Cloud className="w-6 h-6 text-sky-500" />,
    items: [
      { name: "AWS (S3, EC2)", icon: TechIconMap["AWS (S3, EC2)"] },
      { name: "Vercel", icon: TechIconMap["Vercel"] },
      { name: "Render", icon: TechIconMap["Render"] },
      { name: "Firebase Hosting", icon: TechIconMap["Firebase Hosting"] },
      { name: "Heroku", icon: TechIconMap["Heroku"] },
      { name: "Coolify", icon: TechIconMap["Coolify"] },
    ],
  },
  {
    title: "Third-Party Integrations",
    icon: <Puzzle className="w-6 h-6 text-rose-500" />,
    items: [
      { name: "Firebase", icon: TechIconMap["Firebase"] },
      { name: "Twilio", icon: TechIconMap["Twilio"] },
      { name: "Appwrite", icon: TechIconMap["Appwrite"] },
      { name: "Razorpay", icon: TechIconMap["Razorpay"] },
      { name: "PhonePe", icon: TechIconMap["PhonePe"] },
      { name: "OneSignal", icon: TechIconMap["OneSignal"] },
      { name: "Juspay", icon: TechIconMap["Juspay"] },
      { name: "Fast2SMS", icon: TechIconMap["Fast2SMS"] },
      { name: "Google Maps APIs", icon: TechIconMap["Google Maps APIs"] },
    ],
  },
  {
    title: "Observability and Monitoring",
    icon: <Activity className="w-6 h-6 text-teal-500" />,
    items: [
      { name: "Microsoft Clarity", icon: TechIconMap["Microsoft Clarity"] },
      { name: "Google Analytics", icon: TechIconMap["Google Analytics"] },
      { name: "Prometheus", icon: TechIconMap["Prometheus"] },
      { name: "Vercel Analytics", icon: TechIconMap["Vercel Analytics"] },
      { name: "Plausible Analytics", icon: TechIconMap["Plausible Analytics"] },
    ],
  },
  {
    title: "Realtime Systems",
    icon: <Zap className="w-6 h-6 text-yellow-500" />,
    items: [
      { name: "Socket.io", icon: TechIconMap["Socket.io"] },
      { name: "Firebase Realtime Database", icon: TechIconMap["Firebase Realtime Database"] },
    ],
  },
  {
    title: "AI and ML",
    icon: <Brain className="w-6 h-6 text-violet-500" />,
    items: [
      { name: "Google AI Studio", icon: TechIconMap["Google AI Studio"] },
      { name: "Gemini API", icon: TechIconMap["Gemini API"] },
      { name: "MediaPipe", icon: TechIconMap["MediaPipe"] },
      { name: "Tesseract OCR", icon: TechIconMap["Tesseract OCR"] },
      { name: "YOLOv8", icon: TechIconMap["YOLOv8"] },
    ],
  },
  {
    title: "AI-Assisted Development",
    icon: <FaRobot className="w-6 h-6 text-indigo-400" />,
    items: [
      { name: "OpenCode", icon: TechIconMap["OpenCode"] },
      { name: "Claude Code", icon: TechIconMap["Claude Code"] },
      { name: "Antigravity", icon: TechIconMap["Antigravity"] },
      { name: "Parallel AI Agent Workflows", icon: TechIconMap["Parallel AI Agent Workflows"] },
      { name: "Multi-Agent Development", icon: TechIconMap["Multi-Agent Development"] },
    ],
  },
  {
    title: "Tools",
    icon: <BsTools className="w-6 h-6 text-slate-500" />,
    items: [
      { name: "Git", icon: TechIconMap["Git"] },
      { name: "GitHub", icon: TechIconMap["GitHub"] },
      { name: "Figma", icon: TechIconMap["Figma"] },
      { name: "Draw.io", icon: TechIconMap["Draw.io"] },
      { name: "Microsoft Teams", icon: TechIconMap["Microsoft Teams"] },
      { name: "Slack", icon: TechIconMap["Slack"] },
      { name: "Discord", icon: TechIconMap["Discord"] },
      { name: "Azure DevOps", icon: TechIconMap["Azure DevOps"] },
    ],
  },
];

export const allProjects: ProjectItem[] = [
  {
    name: "Shorto",
    description: "A fast, free tool to shorten your URLs with ease and style.",
    link: "https://shorto-one.vercel.app/",
    category: "Web & SaaS",
  },
  {
    name: "Functionary",
    description: "A centralized hub to store, discover, and share useful code functions with others.",
    link: "https://functionary.vercel.app/",
    category: "Web & SaaS",
  },
  {
    name: "Problem Painter",
    description: "A canvas where your thoughts take shape and problems find their answers.",
    link: "https://problem-painter.vercel.app/",
    category: "Web & SaaS",
  },
  {
    name: "Tic Tac Tribe",
    description: "Create or join a game using a simple room code. Real-time, multiplayer, and completely free.",
    link: "https://tic-tac-tribe.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Quote of the Day",
    description: "Generates a random quote for every user which refreshes once a day.",
    link: "https://quote-of-the-day-three.vercel.app/",
    category: "Web & SaaS",
  },
  {
    name: "Pixto",
    description: "Quickly convert PNG, JPEG, JPG, and SVG image to your preferred format with PIXTO. Fast, reliable, and free!",
    link: "https://pixto.vercel.app/",
    category: "Web & SaaS",
  },
  {
    name: "Check My Sound",
    description: "A tool which helps easily test left, right, and surround audio channels of your headphones or speakers.",
    link: "https://checkmysound.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Data To QR",
    description: "Generate QR codes easily from your data or URLs with customized styling.",
    link: "https://data-to-qr.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Vish's Assistant",
    description: "An interactive Telegram bot holding dynamic portfolio information about Vishwanath.",
    link: "https://t.me/AboutVishBot",
    category: "AI & ML",
  },
  {
    name: "Get The Trend",
    description: "A Telegram bot which scrapes top 5 recent posts on Instagram using targeted hashtags.",
    link: "https://github.com/ms-vishwanath/get-the-trend",
    category: "AI & ML",
  },
  {
    name: "AAim 360",
    description: "A multi-serviced web tool library engineered for the startup AAIM.",
    link: "https://aaim360.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "One Stop",
    description: "A platform that enables startups to scout the right investors, government grants, and pilot opportunities.",
    link: "https://1-stop.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Jayam Scoring",
    description: "A premium showcase site built for a leading fashion packaging brand, blending modern design with industrial elegance.",
    link: "https://jayamscoring.in/",
    category: "Web & SaaS",
  },
  {
    name: "Sasi Transports",
    description: "A clean and responsive transport service website built for an enterprise logistics brand.",
    link: "https://sasi-transports.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Cloud Hub",
    description: "Manage, monitor, and analyze IoT devices in one powerful unified platform.",
    link: "https://cloud-hub-alpha.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Timely",
    description: "A sleek, lightweight, and accurate stopwatch for productivity and workouts.",
    link: "https://timely-lovat.vercel.app/",
    category: "Web & SaaS",
  },
  {
    name: "Track Your IP",
    description: "A minimal IP tracking tool that fetches and displays your public IP with geolocation details in real-time.",
    link: "https://track-your-ip.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Mahee Solutions",
    description: "A professional corporate website for a mystery shopping firm with 12+ years of expertise.",
    link: "https://www.maheesolutions.in/",
    category: "Web & SaaS",
  },
  {
    name: "AMGC",
    description: "A visually engaging showcase site with smooth scroll animations for AMGC enterprise companies.",
    link: "https://amgc-beta.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "WYF Events",
    description: "An event showcase application for a non-governmental organization with registration workflows.",
    link: "https://wyfonline.org/",
    category: "Web & SaaS",
  },
  {
    name: "AKS Associates",
    description: "A streamlined CRM platform connecting auditors and clients for dependable GST & IT filing.",
    link: "https://www.livetaxation.com/sign-in/",
    category: "Web & SaaS",
  },
  {
    name: "CodeZCorp Academy",
    description: "Academy portal for developers, designers, and DevOps engineers with expert-led community learning.",
    link: "https://www.codezcorp.com/",
    category: "Web & SaaS",
  },
  {
    name: "Cloud 360",
    description: "Smart home management application with digital twin visualization and IoT automation.",
    link: "https://cloud360.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "FarmHub360",
    description: "A multilingual farm hub platform where farmers can seamlessly buy and sell produce locally.",
    link: "https://aaim360.web.app/tools/farmhub360.html",
    category: "Web & SaaS",
  },
  {
    name: "Code Saver",
    description: "A web-based snippet manager to save, organize, and access frequently used code snippets with ease.",
    link: "https://aaim360.web.app/tools/CODESAVER/index.html",
    category: "Web & SaaS",
  },
  {
    name: "Clerk Auth-Appwrite Webhook Integration",
    description: "Webhook endpoint to handle Clerk authentication events and synchronize user records with Appwrite via Next.js serverless.",
    link: "https://github.com/ms-vishwanath/appwrite-clerk-auth-integration-next-js",
    category: "Backend & Cloud",
  },
  {
    name: "Yemen Mission",
    description: "A non-profit website built to support international education, relief, and development efforts.",
    link: "https://www.yemenmission.org/",
    category: "Web & SaaS",
  },
  {
    name: "AWS Node JS S3 Service",
    description: "Production-ready Node.js microservice to upload, replace, and delete files on AWS S3 with TypeScript and AWS SDK v3.",
    link: "https://github.com/ms-vishwanath/aws-file-service",
    category: "Backend & Cloud",
  },
  {
    name: "Text to Speech 360",
    description: "Client-side text-to-speech converter using web speech synthesis for natural voice outputs.",
    link: "https://aaim360.web.app/tools/TTS.html",
    category: "AI & ML",
  },
  {
    name: "Speech to Text 360",
    description: "A fast and lightweight real-time speech-to-text transcription tool built in JavaScript.",
    link: "https://aaim360.web.app/tools/STT.html",
    category: "AI & ML",
  },
  {
    name: "Gesture 360",
    description: "Real-time hand gesture recognition application powered by MediaPipe, running entirely in the browser.",
    link: "https://aaim360.web.app/tools/GESTURE360/index.html",
    category: "AI & ML",
  },
  {
    name: "Image to Text 360",
    description: "Browser-based optical character recognition (OCR) utility extracting text directly from images.",
    link: "https://aaim360.web.app/tools/ITT.html",
    category: "AI & ML",
  },
  {
    name: "Fine Accident Detection",
    description: "Crash sensing web application using device gyroscope data to identify vehicular impacts and trigger alerts.",
    link: "https://minihackathon-practice.web.app/fineaccidentdetectionclient.html",
    category: "AI & ML",
  },
  {
    name: "QR 360",
    description: "Fast, customizable QR code generator with real-time encoding and downloading options.",
    link: "https://aaim360.web.app/tools/QR360.html",
    category: "Web & SaaS",
  },
  {
    name: "RadCal",
    description: "A responsive, stylish calculator application with basic arithmetic and mathematical operations.",
    link: "https://radcal.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "RadLoc Todo",
    description: "A minimalist to-do application that persists tasks locally for offline productivity.",
    link: "https://radloctodo.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "RadPincode",
    description: "Instant address verification tool retrieving Indian post office and region details via Pincode API.",
    link: "https://radpincode.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Chronologix",
    description: "Enterprise HRMS and check-in/out management system with scheduling, self-service portals, and live analytics.",
    link: "https://org-360-7c4d3.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "DocType Finder",
    description: "Tesseract.js OCR application detecting and verifying PAN and Aadhaar identity cards from scanned documents.",
    link: "https://doctypefinder.web.app/",
    category: "AI & ML",
  },
  {
    name: "Ambigai Motors Car Care",
    description: "Showcase and booking platform for a premier automotive detailing and car care center.",
    link: "https://github.com/vishandcode/ambigai-motors-car-care",
    category: "Web & SaaS",
  },
  {
    name: "SSBAT Invoice Generator",
    description: "Accurate enterprise invoice generator featuring client-side computation, taxes, and printable export.",
    link: "https://ssbat-invoice-generator.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Leaf Lens",
    description: "Mobile-first AI application for real-time plant leaf identification and disease detection.",
    link: "https://leaf-lens.vercel.app/",
    category: "AI & ML",
  },
  {
    name: "Workshop AI",
    description: "AI image analyzer detecting technical mechanical issues and recommending repairs.",
    link: "https://workshop-ai-gilt.vercel.app/",
    category: "AI & ML",
  },
  {
    name: "INXT Website",
    description: "Portfolio website for an insurance-focused IT company highlighting digital consulting and innovation.",
    link: "https://inxt-website.vercel.app/",
    category: "Web & SaaS",
  },
  {
    name: "Insurance Agent Portal",
    description: "Streamlined web platform empowering insurance agents to manage policies, client communication, and claims.",
    link: "https://insurance-agent-portal.vercel.app/",
    category: "Web & SaaS",
  },
  {
    name: "NextJS SMTP Mail Service",
    description: "Production SMTP mailing microservice for Next.js applications with HTML templating support.",
    link: "https://github.com/ms-vishwanath/nextjs-smtp",
    category: "Backend & Cloud",
  },
  {
    name: "Diwali Greeting App",
    description: "Personalized, interactive festival greeting application with dynamic animations and sharing.",
    link: "https://github.com/ms-vishwanath/dynamic-diwali-wishes",
    category: "Web & SaaS",
  },
  {
    name: "NextJS Phonepe",
    description: "PhonePe payment gateway integration module built with Next.js Server Actions and webhook callbacks.",
    link: "https://github.com/ms-vishwanath/nextjs-phonepe",
    category: "Backend & Cloud",
  },
  {
    name: "Express Production Starter Template",
    description: "Production-ready backend boilerplate featuring Express.js, TypeORM, MongoDB, and PostgreSQL dual database support.",
    link: "https://github.com/ms-vishwanath/express-production-starter-template",
    category: "Backend & Cloud",
  },
  {
    name: "Kongunadu Kalaiculoo",
    description: "Digital presence and portfolio for the traditional South Indian folk dance ensemble.",
    link: "https://github.com/ms-vishwanath/nextjs-clerkauth-instantdb",
    category: "Web & SaaS",
  },
  {
    name: "Express Postgres Typeorm Auth Service",
    description: "Secure authentication microservice with JWT, role-based access control (RBAC), and TypeORM migrations.",
    link: "https://github.com/ms-vishwanath/express-postgres-auth-service",
    category: "Backend & Cloud",
  },
  {
    name: "Express Server with Prometheus Metrics",
    description: "Production Express server instrumentation integrating Prometheus metrics via express-prom-bundle.",
    link: "https://github.com/ms-vishwanath/express-prom-client",
    category: "Backend & Cloud",
  },
  {
    name: "Raise Angel Investor Network",
    description: "Interactive showcase platform connecting angel investors with emerging startup founders.",
    link: "https://raiseain.web.app/",
    category: "Web & SaaS",
  },
  {
    name: "Human Following Robot",
    description: "Autonomous robotics project programmed in Embedded C to track and follow human targets via sensor feedback.",
    link: "https://github.com/ms-vishwanath/human-following-robot",
    category: "Embedded & IoT",
  },
  {
    name: "Single Hand Robot Arm Controller",
    description: "Assistive robotic arm controller programmed in Embedded C with single-hand joystick inputs.",
    link: "https://github.com/ms-vishwanath/single-hand-robot-arm-controller",
    category: "Embedded & IoT",
  },
  {
    name: "Ultrasonic Sensor Tester",
    description: "Hardware testing fixture in Embedded C to visualize and calibrate distance sensor telemetry.",
    link: "https://github.com/ms-vishwanath/ultrasonic-sensor-tester",
    category: "Embedded & IoT",
  },
  {
    name: "Weather Station",
    description: "Embedded C weather monitoring station reading temperature, barometric pressure, and humidity.",
    link: "https://github.com/ms-vishwanath/weather-station",
    category: "Embedded & IoT",
  },
  {
    name: "NextJS Clerk Auth Instant DB",
    description: "Modern full stack task manager integrating Clerk authentication with InstantDB real-time data sync.",
    link: "https://github.com/ms-vishwanath/nextjs-clerkauth-instantdb",
    category: "Web & SaaS",
  },
  {
    name: "SIN Generator",
    description: "Enterprise utility generating unique screen identification numbers (SIDs) for UI tracking across systems.",
    link: "https://github.com/ms-vishwanath/sin-generator",
    category: "Web & SaaS",
  },
  {
    name: "Next JS SSR Template",
    description: "Optimized Next.js template for static/server rendered deployment with form validation and modular layouts.",
    link: "https://github.com/ms-vishwanath/nextjs-ssr-template",
    category: "Web & SaaS",
  },
  {
    name: "Automated Contact Form Validator",
    description: "Cron-based automated verification service testing contact forms and notifying administrators on downtime.",
    link: "https://github.com/ms-vishwanath/automated-contact-form-validator",
    category: "Backend & Cloud",
  },
  {
    name: "BLOX – Secure Product Tracking",
    description: "Blockchain supply chain tracking application verifying tamper-proof product authenticity via QR ledgers.",
    link: "https://github.com/ms-vishwanath/blox-web",
    category: "Web & SaaS",
  },
  {
    name: "Gyro Tester Kit",
    description: "Microcontroller test suite built in Embedded C to validate and debug multi-axis gyroscope sensors.",
    link: "https://github.com/ms-vishwanath/gyro-tester-kit",
    category: "Embedded & IoT",
  },
  {
    name: "WebRanger Mini",
    description: "Miniaturized IoT environmental telemetry device transmitting sensor metrics over Wi-Fi.",
    link: "https://github.com/ms-vishwanath/webranger-mini",
    category: "Embedded & IoT",
  },
  {
    name: "WebRanger Pro",
    description: "Advanced IoT hardware unit offering multi-channel sensor ingestion and industrial network telemetry.",
    link: "https://github.com/ms-vishwanath/webranger-pro",
    category: "Embedded & IoT",
  },
  {
    name: "BLOX Express – QR Ledger Engine",
    description: "Backend ledger service recording and verifying product custody handovers across distributed checkpoints.",
    link: "https://github.com/ms-vishwanath/blox-server",
    category: "Backend & Cloud",
  },
  {
    name: "FaceMatch API – AWS Rekognition",
    description: "Node.js Express API integrating AWS Rekognition for facial indexing, search, and identity validation.",
    link: "https://github.com/ms-vishwanath/facematch-api",
    category: "AI & ML",
  },
  {
    name: "Maizzle Mail – Email Template Starter",
    description: "Developer-friendly template workflow using Tailwind CSS and Maizzle to compile bulletproof HTML emails.",
    link: "https://github.com/ms-vishwanath/maizzle-mail-template-starter",
    category: "Web & SaaS",
  },
  {
    name: "Embedded C Library Manual Overrides",
    description: "Collection of low-level driver optimizations and manual register overrides for microcontrollers.",
    link: "https://drive.google.com/drive/folders/1Q_ZXfZWphJWaOqmdxRvIZ5Sef4Y2lx0C?usp=sharing",
    category: "Embedded & IoT",
  },
  {
    name: "BT Transmitter Receiver",
    description: "Wireless Bluetooth serial data transceiver firmware for microcontroller communication.",
    link: "https://github.com/ms-vishwanath/bt-transmitter-reciever",
    category: "Embedded & IoT",
  },
  {
    name: "Digital Current Tester",
    description: "Real-time digital current measurement firmware in Embedded C designed for low-cost hardware.",
    link: "https://github.com/ms-vishwanath/digital-current-tester",
    category: "Embedded & IoT",
  },
  {
    name: "ESP8266 Firebase Cloud",
    description: "IoT firmware connecting ESP8266 Wi-Fi microcontrollers directly with Google Firebase Realtime Database.",
    link: "https://github.com/ms-vishwanath/esp8266-firebase-cloud",
    category: "Embedded & IoT",
  },
  {
    name: "Fingerprint Relay Lock",
    description: "Biometric authentication access controller driving solenoid and relay locks in Embedded C.",
    link: "https://github.com/ms-vishwanath/fingerprint-relay-lock",
    category: "Embedded & IoT",
  },
  {
    name: "Gyro-Based Accident Detection System",
    description: "Hardware crash detection module sensing abrupt vehicle deceleration to trigger immediate emergency alerts.",
    link: "https://github.com/ms-vishwanath/gyro-based-accident-detection-system",
    category: "Embedded & IoT",
  },
];

// Preserving legacy export structure for backwards compatibility
export const my_works = [
  {
    title: "Featured Works",
    projects: allProjects,
  },
];
