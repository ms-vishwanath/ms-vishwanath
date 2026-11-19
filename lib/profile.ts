// Single source of truth for all portfolio content.
// Edit here — every section reads from this file.

export const profile = {
  name: "M. S. Vishwanath",
  short: "Vishwanath",
  title: "Full Stack AI Developer",
  roles: ["Full Stack AI Developer", "Software Architect", "Freelancer", "Trainer", "Product Builder"],
  location: "Coimbatore, Tamil Nadu, India",
  email: "msvishwanath@outlook.com",
  whatsapp: "https://wa.me/919790006831?text=Hi%20Vishwanath%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  linkedin: "https://linkedin.com/in/msvishwanath",
  github: "https://github.com/ms-vishwanath",
  githubHandle: "ms-vishwanath",
  website: "https://ms-vishwanath.web.app",
  venture: "https://www.giraffai.in",
  resume: "/VISHWANATH-RESUME.pdf",
  intro:
    "I design and build intelligent, scalable, production-ready software — from system architecture and distributed backends to polished interfaces and AI integrations.",
};

export const about = [
  "My journey started with exploring programming and building practical applications. Over time I moved from shipping individual features to designing complete software architectures, coordinating development teams, building distributed backend systems and integrating AI into real-world products.",
  "I specialise in turning ideas into working products — covering requirement analysis, system design, UI/UX implementation, frontend and backend engineering, database design, APIs, AI integration, deployment and maintenance.",
  "I believe in building software that solves actual problems, not technology demonstrations. My approach combines engineering discipline, product thinking and continuous experimentation.",
];

export const hats = [
  {
    k: "01",
    title: "Developer",
    body: "End-to-end engineer across React, Next.js, Node.js, Python and distributed backends. I own features from schema to pixel.",
  },
  {
    k: "02",
    title: "Freelancer",
    body: "I take products from a rough idea to a deployed, maintainable system — scoping, architecture, build, launch and support.",
  },
  {
    k: "03",
    title: "Trainer",
    body: "I mentor interns and developers, run knowledge-sharing sessions and teach the practical side of full-stack and AI engineering.",
  },
  {
    k: "04",
    title: "Architect",
    body: "I think in systems — services, contracts, queues, caches and the infrastructure underneath them — built to evolve with the product.",
  },
];

export const principles = [
  { title: "Build real products", body: "Solve actual problems, not demos." },
  { title: "Think in systems", body: "Frontend, backend, data, infra and third parties as one whole." },
  { title: "Scalability matters", body: "Architectures that grow with users, features and business needs." },
  { title: "Continuous learning", body: "AI, new tooling and new architectural approaches — always exploring." },
  { title: "Ownership", body: "From understanding requirements to delivering working software." },
];

export const expertise: { area: string; note: string; items: string[] }[] = [
  {
    area: "Frontend",
    note: "Interfaces that feel fast and considered",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Shadcn UI", "Material UI", "Ant Design", "Redux Toolkit", "React Hook Form", "Zod", "Framer Motion", "Three.js", "Recharts"],
  },
  {
    area: "Backend",
    note: "Services, contracts and real-time systems",
    items: ["Node.js", "Express.js", "Server Actions", "Python", "FastAPI", "Django", "GraphQL", "gRPC", "REST", "Microservices", "RabbitMQ", "AMQP", "Socket.io"],
  },
  {
    area: "Data",
    note: "Relational, document, cache and realtime",
    items: ["PostgreSQL", "MongoDB", "MariaDB", "Redis", "Firestore", "Firebase RTDB", "Supabase", "Neon", "Appwrite", "InstantDB", "SQLite"],
  },
  {
    area: "AI",
    note: "LLMs wired into real workflows",
    items: ["Gemini API", "Google AI Studio", "LLM integrations", "MCP servers", "AI agents", "AI automation", "Local LLMs", "Intelligent data analysis"],
  },
  {
    area: "Infrastructure",
    note: "Ship it, run it, keep it cheap",
    items: ["Docker", "Kubernetes", "AWS EC2", "AWS S3", "Nginx", "Linux", "Self-hosting", "Cloudflare", "Vercel", "Firebase Hosting", "Render", "CI/CD"],
  },
  {
    area: "Security",
    note: "Identity and safe APIs",
    items: ["JWT", "OAuth", "RBAC", "Clerk", "Firebase Auth", "Rate limiting", "CORS", "API security"],
  },
  {
    area: "Mobile & Desktop",
    note: "Beyond the browser",
    items: ["React Native", "Expo", "Tauri 2", "Rust (exploring)", "Cross-platform architecture"],
  },
  {
    area: "Payments & more",
    note: "The integrations products need",
    items: ["Razorpay", "PhonePe", "Transaction workflows", "Google Maps", "Zoom API", "Meta / Instagram APIs", "Git", "Figma", "Blender (exploring)"],
  },
];

export type Status = "Contributed" | "Built" | "In progress" | "Concept" | "Experimental";

export const projects: {
  name: string;
  kind: string;
  status: Status;
  summary: string;
  points: string[];
  stack: string[];
}[] = [
  {
    name: "One App",
    kind: "Large-scale microservices ecosystem",
    status: "Contributed",
    summary:
      "A multi-service ecosystem spanning customer, seller, delivery and admin workflows — around 50 microservices and several admin panels.",
    points: [
      "Backend architecture and API standardisation across services",
      "BFF layers, GraphQL & gRPC communication, RabbitMQ messaging",
      "Wallet, ratings, coupons, payments and delivery business logic",
    ],
    stack: ["Node.js", "TypeScript", "GraphQL", "gRPC", "RabbitMQ", "PostgreSQL", "MongoDB", "Redis", "AWS S3"],
  },
  {
    name: "Dr Ram Physio",
    kind: "AI-enabled physiotherapy platform",
    status: "Contributed",
    summary:
      "A multi-module healthcare product with patient, doctor, therapist and admin applications.",
    points: [
      "AI-powered symptom analysis",
      "Appointments, exercises, live sessions and notifications",
      "Payments, attendance and billing workflows",
    ],
    stack: ["AI", "Full stack", "Payments", "Realtime"],
  },
  {
    name: "Tailoring Education Platform",
    kind: "Course & meeting management",
    status: "Built",
    summary:
      "A platform to run free and paid courses and online sessions with enrollment-based access.",
    points: [
      "Student auth, enrollment and access control",
      "Free & paid courses and meetings with Zoom integration",
      "Admin dashboards, course and category management",
    ],
    stack: ["Next.js", "Node.js", "Zoom API", "Payments"],
  },
  {
    name: "SpiceAsia",
    kind: "E-commerce platform",
    status: "Built",
    summary:
      "An e-commerce application covering product management, shopping workflows, backend APIs and cloud file storage.",
    points: ["Product catalogue and cart flows", "Backend APIs and database operations", "Media on cloud object storage"],
    stack: ["Next.js", "Node.js", "MongoDB", "AWS S3"],
  },
  {
    name: "AIC NIFTTEA",
    kind: "Institutional website",
    status: "In progress",
    summary: "An institutional website built on Next.js with a headless CMS.",
    points: ["Website development and UI implementation", "Strapi CMS integration", "Deployment planning"],
    stack: ["Next.js", "Strapi"],
  },
  {
    name: "Socio Trigger",
    kind: "Instagram automation",
    status: "Concept",
    summary: "A comment-to-DM automation product for Instagram creators and businesses.",
    points: ["Instagram webhooks and Meta auth", "Comment-triggered DM workflows", "Workflow management for engagement"],
    stack: ["Meta APIs", "Webhooks", "Automation"],
  },
  {
    name: "GiraffAI Review Studio",
    kind: "Video review & collaboration",
    status: "Concept",
    summary: "Simplifying review, feedback collection and revisions between video editors and their clients.",
    points: ["Timestamped feedback", "Revision workflows", "Editor–client collaboration"],
    stack: ["Product design", "Full stack"],
  },
  {
    name: "Render Room",
    kind: "Creative web lab",
    status: "Experimental",
    summary: "An experimental space for immersive web experiences, motion design and visual storytelling.",
    points: ["3D scenes and interactive storytelling", "Motion and SVG animation", "Modern frontend craft"],
    stack: ["Three.js", "GSAP", "SVG", "React"],
  },
];

export const aiWork = [
  { title: "LLM-powered features", body: "Gemini-based analysis inside real products — like symptom analysis in a healthcare platform." },
  { title: "MCP & agent workflows", body: "Building MCP servers and coordinating parallel AI coding agents across development, debugging and infra tasks." },
  { title: "Automation systems", body: "Event-driven pipelines and integrations — webhooks, queues and scheduled jobs that remove manual work." },
  { title: "Local LLMs", body: "Experimenting with self-hosted models for private, low-cost intelligence." },
  { title: "AI-assisted analysis", body: "Exploring AI-assisted financial and trading data analysis." },
  { title: "Desktop intelligence", body: "Exploring Tauri 2 and Rust for fast, native AI-powered tools." },
];

export const leadership = {
  stats: [
    { value: "~19", label: "Developers coordinated" },
    { value: "4", label: "Team leads" },
    { value: "~50", label: "Microservices in scope" },
  ],
  points: [
    "Assigning work and coordinating backend implementation",
    "Unblocking engineers and resolving cross-service integration issues",
    "Communicating architectural requirements and API standards",
    "Aligning frontend, backend and DevOps delivery",
    "Mentoring interns and encouraging research and knowledge sharing",
  ],
};

export const venture = {
  name: "GiraffAI",
  url: "https://www.giraffai.in",
  tagline: "Perspective × Intelligence",
  body: "My independent technology venture at the intersection of software engineering, AI and digital product development — building practical solutions and intelligent products that scale beyond individual client projects.",
  focus: ["Web Development", "AI Solutions", "Automation Systems", "Technology Consulting", "Software Products", "Risk & Assurance"],
};
