export interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  category: 'Full Stack' | 'Web Apps' | 'APIs & Cloud' | 'UI/UX'
  tags: string[]
  featured: boolean
  imageGradient: string
  metrics?: string
  liveUrl?: string
  githubUrl?: string
  highlights: string[]
}

export interface SkillCategory {
  title: string
  iconName: string
  skills: {
    name: string
    level: number // 1 - 100
    icon: string
    highlight?: string
  }[]
}

export interface Experience {
  period: string
  role: string
  company: string
  description: string
  technologies: string[]
}

export const DEVELOPER_INFO = {
  name: "Khabibullo Shamsiddinov",
  role: "Senior Full-Stack & Cloud Engineer",
  tagline: "Architecting sleek, ultra-responsive web applications & high-performance distributed systems.",
  location: "San Francisco, CA (Open to Remote)",
  status: "Available for new projects",
  bio: "I am a passionate software engineer with over 6 years of experience transforming complex technical problems into elegant, scalable user experiences. From reactive web applications to event-driven cloud microservices, I build production-ready digital products with relentless focus on design precision, performance, and maintainability.",
  stats: [
    { label: "Years Experience", value: "6+" },
    { label: "Projects Completed", value: "35+" },
    { label: "Code Commits", value: "2.8k" },
    { label: "Uptime Guaranteed", value: "99.9%" },
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    email: "khabibullo.dev@example.com",
  },
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    iconName: "Layout",
    skills: [
      { name: "React / Next.js", level: 95, icon: "Atom", highlight: "Server Components & State" },
      { name: "TypeScript", level: 92, icon: "Code", highlight: "Strict Type Safety" },
      { name: "Tailwind CSS & CSS3", level: 90, icon: "Palette", highlight: "Custom Design Systems" },
      { name: "Vue.js / Nuxt", level: 85, icon: "Layers", highlight: "Reactive Architecture" },
      { name: "Web Performance", level: 94, icon: "Zap", highlight: "100/100 Lighthouse" },
    ],
  },
  {
    title: "Backend & Systems",
    iconName: "Server",
    skills: [
      { name: "Node.js & Express", level: 90, icon: "Cpu", highlight: "Async I/O & Streaming" },
      { name: "Python / FastAPI", level: 88, icon: "Terminal", highlight: "REST & Async APIs" },
      { name: "PostgreSQL & Prisma", level: 86, icon: "Database", highlight: "Schema Optimization" },
      { name: "GraphQL & REST", level: 88, icon: "Globe", highlight: "Microservices Integration" },
      { name: "Redis Caching", level: 82, icon: "HardDrive", highlight: "Sub-millisecond latency" },
    ],
  },
  {
    title: "Cloud & Serverless",
    iconName: "Cloud",
    skills: [
      { name: "Netlify Functions & Edge", level: 94, icon: "Globe", highlight: "Serverless Deployment" },
      { name: "Docker & Kubernetes", level: 84, icon: "Box", highlight: "Container Orchestration" },
      { name: "AWS Services", level: 80, icon: "CloudRain", highlight: "S3, Lambda, CloudFront" },
      { name: "CI/CD Pipelines", level: 89, icon: "GitBranch", highlight: "Automated Workflows" },
    ],
  },
]

export const PROJECTS: Project[] = [
  {
    id: "nexus-flow",
    title: "NexusFlow - AI Workflow Automation Engine",
    shortDescription: "A real-time visual node editor for building autonomous AI workflows with sub-second execution.",
    fullDescription: "NexusFlow enables developers and teams to visually orchestrate LLM chains, API integrations, and database triggers. Features drag-and-drop canvas, live execution logs, variable sandboxing, and edge function worker pools.",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Node.js", "WebSockets", "Netlify Edge", "PostgreSQL"],
    featured: true,
    imageGradient: "linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)",
    metrics: "10k+ active workflows • 99.98% execution uptime",
    liveUrl: "https://example.com/nexusflow",
    githubUrl: "https://github.com/example/nexusflow",
    highlights: [
      "Custom node canvas rendering at 60 FPS using HTML5 Canvas & SVG overlay",
      "Real-time event streaming using WebSocket fallback to Server-Sent Events",
      "Serverless execution engine running on Netlify Edge Functions for ultra-low latency",
      "Integrated secure secrets vault with AES-256 encryption at rest"
    ]
  },
  {
    id: "pulse-analytics",
    title: "PulseMetrics - Real-Time SaaS Analytics Dashboard",
    shortDescription: "High-throughput analytics platform processing millions of telemetry events daily.",
    fullDescription: "An interactive, ultra-responsive dashboard displaying live website traffic, user retention funnels, and revenue metrics. Features custom charts with interactive zooming, automated anomaly detection alerts, and PDF report exports.",
    category: "Web Apps",
    tags: ["React", "TypeScript", "Recharts", "TailwindCSS", "FastAPI", "ClickHouse"],
    featured: true,
    imageGradient: "linear-gradient(135deg, #7f00ff 0%, #e100ff 100%)",
    metrics: "Sub-50ms query times across 5M+ records",
    liveUrl: "https://example.com/pulsemetrics",
    githubUrl: "https://github.com/example/pulsemetrics",
    highlights: [
      "Optimized canvas-based chart rendering handling 100,000 data points smoothly",
      "Zero-latency optimistic UI updates with client-side caching",
      "Custom dark mode design system built with CSS variables & micro-animations",
      "Role-based access control (RBAC) and team workspace partitioning"
    ]
  },
  {
    id: "hyper-cart",
    title: "HyperCart - Headless E-Commerce Suite",
    shortDescription: "Blazing-fast headless shopping experience built with microsecond page transitions.",
    fullDescription: "Next-gen storefront connecting to Shopify & Stripe APIs. Includes instant instant fuzzy search, dynamic cart drawer, multi-currency support, and optimized image CDN delivery.",
    category: "Full Stack",
    tags: ["React", "TypeScript", "Netlify CDN", "Stripe API", "GraphQL", "TailwindCSS"],
    featured: true,
    imageGradient: "linear-gradient(135deg, #00f5a0 0%, #00d9f6 100%)",
    metrics: "100/100 Lighthouse Speed Score",
    liveUrl: "https://example.com/hypercart",
    githubUrl: "https://github.com/example/hypercart",
    highlights: [
      "Sub-200ms TTFB globally using Netlify's high-speed CDN edge",
      "Algolia-powered instant search with keyboard shortcuts and filters",
      "Seamless single-page checkout flow with Apple Pay and Google Pay integration",
      "Fully responsive touch-optimized mobile gestures"
    ]
  },
  {
    id: "synth-code",
    title: "SynthCode - Cloud Code Sandbox & Snippet Hub",
    shortDescription: "Browser-based code executor with instant live share & syntax highlighting.",
    fullDescription: "A developer tool for creating, testing, and embedding interactive code snippets in JS, TS, Python, and Go. Supports live collaborate mode, custom themes, and NPM package imports.",
    category: "APIs & Cloud",
    tags: ["TypeScript", "Monaco Editor", "Docker", "Node.js", "WebSockets"],
    featured: false,
    imageGradient: "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
    metrics: "Used by 12,000+ developers",
    liveUrl: "https://example.com/synthcode",
    githubUrl: "https://github.com/example/synthcode",
    highlights: [
      "Monaco Editor integration with full LSP intellisense support",
      "Isolated containerized sandbox execution for multiple programming languages",
      "Real-time multiplayer editing using WebSockets"
    ]
  },
  {
    id: "aura-ui",
    title: "Aura UI - Modern Glassmorphism Component Library",
    shortDescription: "An accessible, styled React component library crafted for futuristic dark-themed web apps.",
    fullDescription: "A set of 40+ polished React components featuring modern dark mode aesthetics, fluid spring animations, full keyboard navigation, and WCAG AAA compliance.",
    category: "UI/UX",
    tags: ["React", "TypeScript", "CSS Modules", "Storybook", "Accessibility"],
    featured: false,
    imageGradient: "linear-gradient(135deg, #f12711 0%, #f5af19 100%)",
    metrics: "5,000+ NPM weekly downloads",
    liveUrl: "https://example.com/auraui",
    githubUrl: "https://github.com/example/auraui",
    highlights: [
      "100% WCAG AAA accessible with full ARIA state bindings",
      "Zero-runtime CSS overhead with CSS custom property variables",
      "Comprehensive Storybook documentation and interactive playground"
    ]
  }
]

export const EXPERIENCES: Experience[] = [
  {
    period: "2023 — Present",
    role: "Senior Full-Stack Engineer",
    company: "Vanguard Tech Labs",
    description: "Leading frontend architecture and cloud integrations for high-volume enterprise SaaS applications. Spearheaded transition to serverless edge architecture, reducing cloud infrastructure costs by 35% while cutting p99 response times in half.",
    technologies: ["React", "TypeScript", "Netlify Edge", "PostgreSQL", "Node.js", "Docker"]
  },
  {
    period: "2021 — 2023",
    role: "Full-Stack Software Engineer",
    company: "Apex Cloud Solutions",
    description: "Engineered scalable REST & GraphQL APIs, built real-time customer analytics dashboards, and authored custom design system component libraries used across 6 product teams.",
    technologies: ["React", "Vue.js", "Python", "FastAPI", "Redis", "AWS"]
  },
  {
    period: "2018 — 2021",
    role: "Frontend Developer",
    company: "PixelCraft Interactive",
    description: "Developed interactive web experiences, high-converting landing pages, and web applications for global brand clients. Focused on animations, mobile responsiveness, and SEO optimization.",
    technologies: ["JavaScript (ES6+)", "React", "CSS3/Sass", "Webpack", "HTML5"]
  }
]
