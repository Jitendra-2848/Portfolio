export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  result: string;
  tags: string[];
  demoUrl?: string;
  githubUrl: string;
  featured?: boolean;
  statusBadge?: string;
  previewType: "marketplace" | "whiteboard" | "scheduler" | "chat" | "webrtc";
  image?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
}

export const portfolioData = {
  name: "Jitendra Prajapati",
  role: "Backend & Distributed Systems Engineer",
  tagline: "I build calm, resilient backend architectures, real-time WebRTC/Socket systems, and distributed database solutions.",
  bio: "I'm a backend-focused engineer with expertise in TypeScript, Java, Node.js, and distributed databases like CockroachDB and PostgreSQL. I design high-concurrency systems, low-latency WebSockets, and media routing services that stay resilient under heavy throughput.",
  location: "Gujarat, India",
  email: "prajapatijitendra2848@gmail.com",
  socials: {
    github: "https://github.com/Jitendra-2848",
    linkedin: "https://www.linkedin.com/in/jitendra-prajapati-ba2248369/",
    twitter: "https://x.com/Jitendra2848",
    facebook: "https://www.facebook.com/people/Jitendra-Prajapati/pfbid02f3se2XvD1iSMGDP8wLRpN4GGEGQwD3AMLjVFetxKuDQDV4JtTQC6N389Z7dDE6cYl/",
    instagram: "https://www.instagram.com/jitendra__2848/?hl=en",
    discord: "jitendra_2008",
    telegram: "https://t.me/Xoro_0",
  },
  resumeUrl: "https://drive.google.com/file/d/1sthvxMMR7ZFLlcC3rzBGlwWFXcnGHj_g/view?usp=sharing",
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Government BCA College, Gujarat",
      period: "Pursuing",
      grade: "Active Candidate",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Hira Manek School, Gujarat",
      period: "Graduated",
      grade: "88.29%",
    },
    {
      degree: "Senior Secondary Certificate (SSC)",
      institution: "Hira Manek School, Gujarat",
      period: "Graduated",
      grade: "76.50%",
    },
  ] as EducationItem[],
  experiences: [
    {
      company: "The Entrepreneurship Network",
      role: "Team Lead (Internship)",
      period: "Nov 2025 – Mar 2026",
      type: "Leadership & Architecture",
      description: [
        "Led and coordinated a cross-functional cohort of approximately 70 interns across React.js, UI/UX, Data Science, and MERN domains.",
        "Conducted code reviews, established Git branching conventions, and mentored engineers on production-ready patterns.",
        "Ensured on-time sprint deliveries and cross-functional technical communication across sub-teams.",
      ],
      skills: ["Technical Mentorship", "Code Reviews", "MERN Architecture", "Sprint Planning"],
    },
    {
      company: "The Entrepreneurship Network",
      role: "MERN Developer Intern",
      period: "Sep 2025 – Nov 2025",
      type: "Backend Engineering",
      description: [
        "Engineered RESTful endpoints in Node.js and Express.js, designing optimized database schemas with MongoDB and Mongoose.",
        "Built bidirectional real-time communication modules using Socket.IO for low-latency notifications and live chat.",
        "Integrated authentication flows and performance optimizations across client and server endpoints.",
      ],
      skills: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Socket.IO", "REST APIs"],
    },
  ] as ExperienceItem[],
  skillsData: {
    languages: [
      { name: "TypeScript", icon: "typescript", highlight: true },
      { name: "JavaScript", icon: "javascript", highlight: true },
      { name: "Java", icon: "java", highlight: true },
      { name: "C", icon: "c", highlight: false },
    ],
    backend: [
      { name: "Node.js", icon: "node", highlight: true },
      { name: "Express.js", icon: "express", highlight: true },
      { name: "Socket.IO", icon: "socketio", highlight: true },
      { name: "WebRTC (SFU)", icon: "webrtc", highlight: true },
      { name: "REST APIs", icon: "rest", highlight: false },
    ],
    databases: [
      { name: "CockroachDB", icon: "cockroach", highlight: true },
      { name: "PostgreSQL", icon: "postgres", highlight: true },
      { name: "MongoDB", icon: "mongo", highlight: true },
      { name: "MySQL", icon: "mysql", highlight: false },
      { name: "Prisma ORM", icon: "prisma", highlight: true },
      { name: "Mongoose", icon: "mongo", highlight: false },
    ],
    styling: [
      { name: "Tailwind CSS", icon: "tailwind", highlight: true },
      { name: "DaisyUI", icon: "daisyui", highlight: true },
      { name: "MUI (Material UI)", icon: "mui", highlight: true },
      { name: "Bootstrap", icon: "bootstrap", highlight: false },
    ],
    tools: [
      { name: "Docker", icon: "docker", highlight: true },
      { name: "Git", icon: "git", highlight: true },
      { name: "Linux", icon: "linux", highlight: false },
      { name: "Postman", icon: "postman", highlight: false },
      { name: "Vercel", icon: "vercel", highlight: false },
      { name: "Render", icon: "render", highlight: false },
    ],
  },
  projects: [
    {
      id: "agrinova",
      title: "AGRINOVA — AGRI COMMERCE",
      category: "Full-Stack Logistics & Marketplace",
      description: "End-to-end digital marketplace connecting rural agricultural producers directly with wholesale purchasers and transport operators.",
      problem: "Traditional agricultural selling cycles suffered from opaque intermediaries and lack of live freight tracking for perishable produce.",
      solution: "Engineered a role-based marketplace with pincode routing algorithms, real-time shipment status transitions, and structured MongoDB indexes.",
      result: "Facilitated end-to-end supply chain visibility from order placement to final delivery.",
      tags: ["JavaScript", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      demoUrl: "https://agrinovafrontend.vercel.app/",
      githubUrl: "https://github.com/Jitendra-2848/Agrinova",
      featured: true,
      statusBadge: "PRODUCTION LIVE",
      previewType: "marketplace",
      image: "/Agrinova.png",
    },
    {
      id: "real-time-board",
      title: "COLLABORATION WHITEBOARD",
      category: "WebSockets & HTML5 Canvas",
      description: "High-concurrency collaborative canvas enabling concurrent drawing, brainstorming, and vector delta synchronization in sub-40ms.",
      problem: "Multi-client vector drawing created canvas frame collision, out-of-order strokes, and rendering latency on sluggish client connections.",
      solution: "Streamlined bidirectional Socket.IO socket rooms broadcasting compressed coordinate deltas with immediate client-side interpolation.",
      result: "Achieved sub-40ms stroke synchronization with zero rendering lag across simultaneous users.",
      tags: ["React", "Node.js", "Socket.IO", "HTML5 Canvas", "Express.js"],
      demoUrl: "https://collabration-board-nn6j.onrender.com/",
      githubUrl: "https://github.com/Jitendra-2848/Real_time_Collabration_Board",
      featured: true,
      statusBadge: "PRODUCTION LIVE",
      previewType: "whiteboard",
      image: "/real_time_collabration.png",
    },
    {
      id: "cron-job-scheduler",
      title: "CRON SCHEDULER & MONITOR",
      category: "System Automation & Scheduling Engine",
      description: "Automated recurring cron scheduler supporting standard 5-part cron syntax, instant manual job executions, and audit log history.",
      problem: "Engineering teams lacked centralized monitoring and automatic retries for recurring background HTTP triggers and cron webhooks.",
      solution: "Built a robust cron parser and execution engine with failure alerts, interval verification, and persistent payload execution history in MongoDB.",
      result: "Guaranteed scheduled cron dispatch with detailed HTTP status code verification and retry logs.",
      tags: ["TypeScript", "Next.js", "Node.js", "Cron Engine", "MongoDB"],
      demoUrl: "https://job-scheduler-2848.vercel.app/",
      githubUrl: "https://github.com/Jitendra-2848/Cron-Job-Scheduler",
      featured: true,
      statusBadge: "PRODUCTION LIVE",
      previewType: "scheduler",
      image: "/job_scheduler.png",
    },
    {
      id: "scalable-chat",
      title: "SCALABLE CHAT MESSAGE",
      category: "Distributed WebSocket Architecture",
      description: "Horizontally scalable distributed messaging architecture utilizing Redis Pub/Sub channels across distinct Node.js server instances.",
      problem: "Single-instance WebSocket servers hit memory limits and cannot broadcast messages to clients connected to separate nodes.",
      solution: "Implemented Redis Pub/Sub adapter layer coordinating multi-room channels, ensuring instant message distribution across any number of cluster instances.",
      result: "Overcame single-node concurrency limits with seamless horizontal scaling.",
      tags: ["TypeScript", "Node.js", "Socket.IO", "Redis Pub/Sub", "Docker"],
      githubUrl: "https://github.com/Jitendra-2848/scalable_chat_app",
      featured: true,
      statusBadge: "ACTIVE DEV",
      previewType: "chat",
      image: "/Chat_app.png",
    },
    {
      id: "sfu-video-calling",
      title: "SFU VIDEO CALLING ENGINE",
      category: "WebRTC RTC Streaming Engine",
      description: "Selective Forwarding Unit (SFU) conferencing prototype designed to bypass bandwidth-heavy P2P mesh topologies for group calls.",
      problem: "P2P mesh video networks consume O(N²) client uplink bandwidth, causing massive packet drops and CPU degradation with 4+ participants.",
      solution: "Constructed an SFU stream-forwarding server in Node.js that receives one media uplink per peer and selectively forwards downlinks to receivers.",
      result: "Reduced client uplink bandwidth from exponential to linear O(1), preventing client overheating.",
      tags: ["WebRTC", "Node.js", "Socket.IO", "SFU Architecture", "Media Routing"],
      githubUrl: "https://github.com/Jitendra-2848/SFU-video-calling-app",
      featured: true,
      statusBadge: "RESEARCH PROTOTYPE",
      previewType: "webrtc",
      image: "/SFU_Demo.png",
    },
    {
      id: "crafters-haven",
      title: "CRAFTER'S HAVEN",
      category: "Full-Stack Artisan Marketplace",
      description: "A full-stack e-commerce marketplace platform for artisans and creators to showcase, manage, and sell handcrafted products with custom storefronts.",
      problem: "Independent creators struggled with complex store setups, poor inventory visibility, and high platform commissions on existing craft portals.",
      solution: "Engineered a streamlined marketplace with role-based access control, responsive product catalog, dynamic filtering, cart checkout, and optimized database models.",
      result: "Enabled independent creators to build dedicated storefronts with instant product publishing and seamless checkout.",
      tags: ["TypeScript", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "Express.js"],
      githubUrl: "https://github.com/Jitendra-2848/Crafters-Haven",
      featured: true,
      statusBadge: "LATEST PROJECT",
      previewType: "marketplace",
    },
  ] as Project[],
};

