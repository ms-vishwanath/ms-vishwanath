import {
  MonitorSmartphone,
  Smartphone,
  Cpu,
  ShieldCheck,
  Database,
  Cloud,
  Puzzle,
  Brain,
} from "lucide-react";
import { BsTools } from "react-icons/bs";
import { MdStorage } from "react-icons/md";

const socialLinks = {
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
};

const my_works = [
  {
    title: "",
    projects: [
      {
        name: "Shorto",
        description:
          "A fast, free tool to shorten your URLs with ease and style.",
        link: "https://shorto-one.vercel.app/",
      },
      {
        name: "Functionary",
        description:
          "A centralized hub to store, discover, and share useful code functions with others.",
        link: "https://functionary.vercel.app/",
      },
      {
        name: "Problem Painter",
        description:
          "A canvas where your thoughts take shape and problems find their answers.",
        link: "https://problem-painter.vercel.app/",
      },
      {
        name: "Tic Tac Tribe",
        description:
          "Create or join a game using a simple room code. Real-time, multiplayer, and completely free.",
        link: "https://tic-tac-tribe.web.app/",
      },
      {
        name: "Quote of the Day",
        description:
          "Generates a random quote for Every user which refreshes once a day !",
        link: "https://quote-of-the-day-three.vercel.app/",
      },
      {
        name: "Pixto ",
        description:
          "Quickly convert PNG, JPEG, JPG, and SVG image to your preferred format with PIXTO. Fast, reliable, and free!",
        link: "https://pixto.vercel.app/",
      },
      {
        name: "Check My Sound",
        description:
          "A tool which helps easily test left, right, and surround audio channels of your headphones or speakers.",
        link: "https://checkmysound.web.app/",
      },
      {
        name: "Data To QR",
        description: "Generate QR codes easily from your data or URLs.",
        link: "https://data-to-qr.web.app/",
      },
      {
        name: "Vish's Assistant",
        description: "A telegram bot which holds Information about Vishwanath",
        link: "https://t.me/AboutVishBot",
      },
      {
        name: "Get The Trend",
        description:
          "A telegram bot which scraps top 5 recent posts on instagram using hashtag",
        link: "https://github.com/ms-vishwanath/get-the-trend",
      },
      {
        name: "AAim 360",
        description:
          "A Muti serviced WEB tool libary of an startup named AAIM !",
        link: "https://aaim360.web.app/",
      },
      {
        name: "One Stop",
        description:
          "A platform that enables startups to scout the right investors, gov grants and the right pilot opportunities for their startup,",
        link: "https://1-stop.web.app/",
      },
      {
        name: "Jayam Scoring",
        description:
          "A premium showcase site built for a leading fashion packaging brand, blending modern design with industrial elegance.",
        link: "https://jayamscoring.in/",
      },
      {
        name: "Sasi Transports",
        description:
          "A clean and responsive transport service website built for a logistics brand.",
        link: "https://sasi-transports.web.app/",
      },

      {
        name: "Cloud Hub",
        description:
          "Manage, monitor, and analyze your IoT devices in one powerful platform. Get started with Cloud Hub today.",
        link: "https://cloud-hub-alpha.web.app/",
      },
      {
        name: "Timely",
        description:
          "A simple, sleek, and accurate stopwatch for all your timing needs—perfect for workouts, productivity, and more.",
        link: "https://timely-lovat.vercel.app/",
      },
      {
        name: "Track Your IP",
        description:
          "A minimal IP tracking tool that fetches and displays your public IP with geolocation details in real-time.",
        link: "https://track-your-ip.web.app/",
      },
      {
        name: "Mahee Solutions",
        description:
          "A professional website for a mystery shopping firm with 12+ years of expertise, showcasing their audit services, industry reach, and data-driven insights.",
        link: "https://www.maheesolutions.in/",
      },
      {
        name: "AMGC",
        description:
          "A visually engaging site with smooth scroll animations for AMGC, showcasing the companies.",
        link: "https://amgc-beta.web.app/",
      },
      {
        name: "WYF Events",
        description:
          "An NON Governmental organization's event showcase application !",
        link: "https://wyfonline.org/",
      },
      {
        name: "AKS Associates",
        description:
          "A Minimalistic CRM Which connects auditors and clients, IT Filing is much easier !",
        link: "https://www.livetaxation.com/sign-in/",
      },
      {
        name: "CodeZCorp Academy",
        description:
          "An academy for developers, designers, and DevOps enthusiasts—building a strong tech community through expert-led learning.",
        link: "https://www.codezcorp.com/",
      },

      {
        name: "Cloud 360",
        description:
          "A personalized web application for individuals for managing their home at smart remotes with digital twin and automation !",
        link: "https://cloud360.web.app/",
      },

      {
        name: "FarmHub360",
        description:
          "A multilingual farm hub platform where farmers can seamlessly buy and sell produce, enhancing accessibility and local trade.",
        link: "https://aaim360.web.app/tools/farmhub360.html",
      },
      {
        name: "Code Saver",
        description:
          "A handy web-based snippet manager to save, organize, and access your frequently used code with ease.",
        link: "https://aaim360.web.app/tools/CODESAVER/index.html",
      },
      {
        name: "Clerk Auth-Appwrite Webhook Integration",
        description:
          "This project implements a webhook endpoint to handle Clerk authentication events and sync user data with Appwrite using a serverless route in Next.js.",
        link: "https://github.com/ms-vishwanath/appwrite-clerk-auth-integration-next-js",
      },
      {
        name: "Yemen Mission",
        description:
          "A non-profit website built to support education, relief, and development efforts across Yemen.",
        link: "https://www.yemenmission.org/",
      },
      {
        name: "AWS Node JS S3 Service",
        description:
          "A simple production-ready Node.js microservice to upload, replace, and delete files on AWS S3 using TypeScript, Express.js, and AWS SDK v3.",
        link: "https://github.com/ms-vishwanath/aws-file-service",
      },
      {
        name: "Text to Speech 360",
        description:
          "A simple and effective text-to-speech tool that converts written text into spoken words with natural voice synthesis.",
        link: "https://aaim360.web.app/tools/TTS.html",
      },
      {
        name: "Speech to Text 360",
        description:
          "A fast and lightweight tool that turns speech into text with real-time accuracy.",
        link: "https://aaim360.web.app/tools/STT.html",
      },

      {
        name: "Gesture 360",
        description:
          "A real-time hand gesture recognition app powered by MediaPipe, running fully in the browser.",
        link: "https://aaim360.web.app/tools/GESTURE360/index.html",
      },
      {
        name: "Image to Text 360",
        description:
          "A JavaScript-powered tool that extracts text from images directly in the browser using OCR technology.",
        link: "https://aaim360.web.app/tools/ITT.html",
      },
      {
        name: "Fine Accident Detection",
        description:
          "A browser-based accident detection app using gyroscope data to sense crashes and trigger alerts.",
        link: "https://minihackathon-practice.web.app/fineaccidentdetectionclient.html",
      },
      {
        name: "QR 360",
        description:
          "A fast and easy-to-use QR code generator for quick sharing and scanning.",
        link: "https://aaim360.web.app/tools/QR360.html",
      },
      //RADIUS
      {
        name: "RadCal",
        description:
          "A stylish and responsive calculator app with support for basic operations.",
        link: "https://radcal.web.app/",
      },
      {
        name: "RadLoc Todo",
        description:
          "A minimalist to-do app that stores tasks locally for offline use.",
        link: "https://radloctodo.web.app/",
      },
      {
        name: "RadPincode",
        description:
          "A simple tool to retrieve address details via the Indian Pincode API.",
        link: "https://radpincode.web.app/",
      },
      {
        name: "Chronologix",
        description:
          "An enterprise-level check-in/check-out and HR management system with modules like employee master, scheduling, self-services, device control, and real-time reporting.",
        link: "https://org-360-7c4d3.web.app/",
      },
      {
        name: "DocType Finder",
        description:
          "A Tesseract.js-based tool that detects PAN or Aadhaar cards from images using OCR.",
        link: "https://doctypefinder.web.app/",
      },
      {
        name: "Ambigai Motors Car Care",
        description:
          "A professional service website for a car care and detailing center, showcasing services, bookings, and brand presence.",
        link: "https://ambigai-motors-car-care.vercel.app/",
      },
      {
        name: "SSBAT Invoice Generator",
        description:
          "A trustworthy tool designed to create precise, invoices with client side computing.",
        link: "https://ssbat-invoice-generator.web.app/",
      },
      {
        name: "Leaf Lens",
        description:
          "Mobile-first app for real-time plant leaf identification and disease detection.",
        link: "https://leaf-lens.vercel.app/",
      },
      {
        name: "Workshop AI",
        description:
          "AI-driven image analyzer that detects technical issues and recommends solutions.",
        link: "https://workshop-ai-gilt.vercel.app/",
      },
      {
        name: "INXT Website",
        description:
          "A modern portfolio site for an insurance-focused IT firm highlighting services and digital innovation.",
        link: "https://inxt-website.vercel.app/",
      },
      {
        name: "Insurance Agent Portal",
        description:
          "A legacy streamlined web platform empowering agents to manage policies, clients, and claims efficiently.",
        link: "https://insurance-agent-portal.vercel.app/",
      },
      {
        name: "NextJS SMTP",
        description:
          "Next JS Powered Mail service useful for integrating email smtp into next js apps",
        link: "https://github.com/ms-vishwanath/nextjs-smtp",
      },

      {
        name: "Diwali Greeting App",
        description: "A fun and personalized Diwali greeting app",
        link: "https://github.com/ms-vishwanath/nextjs-smtp",
      },
    ],
  },
];

export const techStacks = [
  {
    title: "Web Frameworks and Libraries",
    icon: <MonitorSmartphone className="w-6 h-6 text-indigo-600" />,
    items: [
      {
        name: "React.js",
        icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
      },
      {
        name: "Next.js",
        icon: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png",
      },
      {
        name: "Bootstrap",
        icon: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
      },
      {
        name: "Tailwind CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1024px-Tailwind_CSS_Logo.svg.png?20230715030042",
      },
      {
        name: "Daisy UI",
        icon: "https://avatars.githubusercontent.com/u/76870092?s=200&v=4",
      },
      {
        name: "Shadcn UI",
        icon: "https://www.svgrepo.com/show/532207/resize-handle.svg",
      },
      {
        name: "Material UI",
        icon: "https://images.seeklogo.com/logo-png/36/1/material-ui-logo-png_seeklogo-363138.png",
      },
      {
        name: "Ant Design",
        icon: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
      },
      {
        name: "Three JS",
        icon: "https://discoverthreejs.com/images/app-logos/forum.png",
      },
      {
        name: "Recharts",
        icon: "https://blog.kakaocdn.net/dn/FISsJ/btquotFH0Kb/CKNE6tFezRK7lLkkteWzqk/img.png",
      },
      {
        name: "Redux Toolkit",
        icon: "https://redux-toolkit.js.org/img/redux.svg",
      },
      {
        name: "Zod",
        icon: "https://images.seeklogo.com/logo-png/48/1/zod-logo-png_seeklogo-486871.png",
      },
      {
        name: "React Hook Form",
        icon: "https://fusetheme.com/static/assets/react/tech-stack/react-hook-form.png",
      },
      {
        name: "Framer Motion",
        icon: "https://images.seeklogo.com/logo-png/44/1/framer-motion-logo-png_seeklogo-446185.png",
      },
    ],
  },
  {
    title: "Mobile Frameworks",
    icon: <Smartphone className="w-6 h-6 text-pink-600" />,
    items: [
      {
        name: "React Native",
        icon: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
      },
      {
        name: "Expo",
        icon: "https://avatars.githubusercontent.com/u/62702930?s=280&v=4",
      },
    ],
  },
  {
    title: "Backend Frameworks and Environments",
    icon: <Cpu className="w-6 h-6 text-yellow-600" />,
    items: [
      { name: "Node.js", icon: "https://logodix.com/logo/1764875.png" },
      {
        name: "Express.js",
        icon: "https://seekvectors.com/files/download/234b110fb32958f68f318e13c7a0610e.png",
      },
      {
        name: "Next.js Server Actions",
        icon: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png",
      },
      {
        name: "Fast API",
        icon: "https://hellocoding.de/images/category/python/fastapi/fast-api-logo.jpeg",
      },
      {
        name: "Turbo",
        icon: "https://avatars.githubusercontent.com/u/76959787?s=280&v=4",
      },
    ],
  },
  {
    title: "Version Control & Collaboration",
    icon: <Puzzle className="w-6 h-6 text-gray-700" />,
    items: [
      {
        name: "Git",
        icon: "https://1000logos.net/wp-content/uploads/2020/08/Git-Logo-640x400.png",
      },
      {
        name: "GitHub",
        icon: "https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png",
      },
    ],
  },
  {
    title: "Authentication",
    icon: <ShieldCheck className="w-6 h-6 text-red-600" />,
    items: [
      {
        name: "Clerk",
        icon: "https://cdn.sanity.io/images/o0o2tn5x/production/2399b991025c365aafaa6fca85d91deac801e654-1046x1046.png",
      },
      {
        name: "Firebase Auth",
        icon: "https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png",
      },
      { name: "JWT", icon: "https://jwt.io/img/icon.svg" },
    ],
  },
  {
    title: "Database",
    icon: <Database className="w-6 h-6 text-green-600" />,
    items: [
      {
        name: "Postgres SQL",
        icon: "https://cpl.thalesgroup.com/sites/default/files/content/paragraphs/intro/2020-03/postgresql-logo.png",
      },
      {
        name: "Mongo DB",
        icon: "https://images.icon-icons.com/2415/PNG/512/mongodb_original_wordmark_logo_icon_146425.png",
      },
      {
        name: "Firebase Firestore & RTDB",
        icon: "https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png",
      },
      {
        name: "Neon",
        icon: "https://th.bing.com/th/id/OIP.K4n4SOIajsNRseO3lIX0sAHaHa?rs=1&pid=ImgDetMain",
      },
      {
        name: "Supabase",
        icon: "https://images.seeklogo.com/logo-png/43/1/supabase-logo-png_seeklogo-435677.png",
      },
      {
        name: "Maria DB",
        icon: "https://mariadb.com/wp-content/uploads/2019/11/mariadb-logo-vert_blue-transparent.png",
      },
      {
        name: "Instant DB",
        icon: "https://www.instantdb.com/img/icon/logo-512.svg",
      },
      {
        name: "Redis",
        icon: "https://static-00.iconduck.com/assets.00/redis-original-wordmark-icon-2045x2048-nz2tg5u6.png",
      },
    ],
  },
  {
    title: "Storage Services",
    icon: <MdStorage className="w-6 h-6 text-green-600" />,
    items: [
      {
        name: "Appwrite Buckets",
        icon: "https://seekvectors.com/files/download/Appwrite-logo.png",
      },
      {
        name: "AWS S3",
        icon: "https://static-00.iconduck.com/assets.00/aws-glacier-icon-848x1024-njlg7e5u.png",
      },
      {
        name: "Firebase Storage",
        icon: "https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png",
      },
    ],
  },
  {
    title: "Deployment Services",
    icon: <Cloud className="w-6 h-6 text-blue-600" />,
    items: [
      {
        name: "Vercel",
        icon: "https://th.bing.com/th/id/OIP.uEi-BYi_M-Rnv9abB82xqwHaHa?rs=1&pid=ImgDetMain",
      },
      {
        name: "Render",
        icon: "https://th.bing.com/th/id/OIP.YN7Mtd-RUlO3JsQUQCwGqgAAAA?rs=1&pid=ImgDetMain",
      },
      {
        name: "Firebase Hosting",
        icon: "https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png",
      },
      {
        name: "Heroku",
        icon: "https://logowik.com/content/uploads/images/t_heroku8748.jpg",
      },
      {
        name: "EC2 Instances",
        icon: "https://icon.icepanel.io/AWS/svg/Compute/EC2.svg",
      },
    ],
  },
  {
    title: "Payment Gateway",
    icon: <Puzzle className="w-6 h-6 text-rose-600" />,
    items: [
      {
        name: "Razorpay",
        icon: "https://w7.pngwing.com/pngs/88/578/png-transparent-razorpay-logo-thumbnail-tech-companies-thumbnail.png",
      },
      {
        name: "PhonePe",
        icon: "https://www.pngitem.com/pimgs/m/3-38170_phonepe-logo-png-phone-pe-transparent-png.png",
      },
    ],
  },
  {
    title: "AI Integrations",
    icon: <Puzzle className="w-6 h-6 text-blue-600" />,
    items: [
      {
        name: "Google Ai Studio",
        icon: "https://developers.google.com/static/focus/images/ai-studio-icon_2880.png",
      },
      {
        name: "Gemini API",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/2560px-Google_Gemini_logo.svg.png",
      },
    ],
  },
  {
    title: "Realtime Integrations",
    icon: <Puzzle className="w-6 h-6 text-green-600" />,
    items: [
      { name: "Socket.io", icon: "https://socket.io/images/logo.svg" },
      {
        name: "Firebase",
        icon: "https://www.gstatic.com/mobilesdk/240501_mobilesdk/firebase_28dp.png",
      },
    ],
  },
  {
    title: "Programming Languages",
    icon: <Puzzle className="w-6 h-6 text-pink-600" />,
    items: [
      {
        name: "Python",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Python_logo_01.svg/640px-Python_logo_01.svg.png",
      },
      {
        name: "Javascript",
        icon: "https://logodownload.org/wp-content/uploads/2022/04/javascript-logo-0.png",
      },
      {
        name: "C",
        icon: "https://www.pngitem.com/pimgs/m/31-312155_c-programming-language-logo-hd-png-download.png",
      },
      {
        name: "Embedded C",
        icon: "https://www.chetu.com/img/on-demand-developers/embedded-c/logo/embeded-c.png",
      },
    ],
  },
  {
    title: "Additional Tools",
    icon: <BsTools className="w-6 h-6 text-blue-800" />,
    items: [
      {
        name: "Figma",
        icon: "https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png",
      },
    ],
  },
];

export { socialLinks, my_works };
