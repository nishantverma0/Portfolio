import {
  BrainCircuit,
  BriefcaseBusiness,
  CalendarClock,
  Cloud,
  Code2,
  Database,
  GitBranch,
  GraduationCap,
  LineChart,
  Network,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap
} from "lucide-react";

export const profile = {
  name: "Nishant Verma",
  roles: [
  "AI Engineer",
  "Generative AI Engineer",
  "Agentic AI Engineer",
  "Python Backend Engineer"
],
  email: "nishantv003@gmail.com",
  github: "https://github.com/nishantverma0",
  linkedin: "https://linkedin.com/in/nishantv003",
  tagline:
  "Building production-ready Generative AI, Agentic AI, and LLM applications using LangGraph, LangChain, RAG, FastAPI, and cloud-native technologies.",

availability:
  "Open to AI Engineer, Generative AI Engineer, Agentic AI Engineer, LLM Engineer, and Applied AI opportunities."
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "GitHub", href: "#github" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export const heroMetrics = [
  {
    value: "500K+",
    label: "Records Processed Daily"
  },
  {
    value: "92.3%",
    label: "Medical AI Accuracy"
  },
  {
    value: "<200ms",
    label: "Inference Latency"
  },
  {
    value: "70%",
    label: "Recruiter Time Saved"
  }
];

export const aboutHighlights = [
  "Specialized in building production-grade Generative AI and Agentic AI applications powered by LLMs, LangGraph, LangChain, and Retrieval-Augmented Generation (RAG).",

  "Experienced in developing autonomous AI agents, multi-agent systems, vector search, tool calling, structured outputs, and scalable FastAPI backends.",

  "Passionate about designing end-to-end AI products that combine intelligent reasoning, workflow automation, cloud deployment, and exceptional user experiences.",

  "Focused on building reliable, secure, and production-ready AI systems with evaluation pipelines, guardrails, observability, and modern DevOps practices."
];

export const focusAreas = [
  "Agentic AI & Multi-Agent Systems",
  "LLMs (OpenAI • Gemini • Claude • Ollama)",
  "LangGraph & LangChain Orchestration",
  "RAG & Vector Databases",
  "FastAPI AI Backends",
  "Guardrails • Evaluation • Observability",
  "Cloud-ready Python backends",
  "Human-centered AI interfaces",
  "Workflow Automation (n8n)"
];

export const skillGroups = [
  {
    title: "Generative AI & Agentic Systems",
    icon: BrainCircuit,
    accent: "cyan",
    summary:
      "Building production-ready LLM applications, AI agents, RAG pipelines, and autonomous workflows.",
    skills: [
      "LLMs",
      "OpenAI",
      "Gemini",
      "Claude",
      "Ollama",
      "LangChain",
      "LangGraph",
      "RAG",
      "AI Agents",
      "Agentic AI",
      "Multi-Agent Systems",
      "Prompt Engineering",
      "Function Calling",
      "Structured Outputs"
    ]
  },

  {
    title: "Machine Learning & Computer Vision",
    icon: LineChart,
    accent: "emerald",
    summary:
      "Deep learning, NLP, transfer learning, and computer vision model development.",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "CNNs",
      "ResNet-50",
      "Transfer Learning",
      "NLP",
      "Hugging Face"
    ]
  },

  {
    title: "Backend & API Development",
    icon: Code2,
    accent: "blue",
    summary:
      "Developing scalable backend services and APIs for AI-powered applications.",
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "REST APIs",
      "SQL",
      "Pydantic",
      "ETL Pipelines",
      "API Integration",
      "JWT Authentication",
      "Background Tasks"
    ]
  },

  {
    title: "Frontend Development",
    icon: Sparkles,
    accent: "magenta",
    summary:
      "Modern responsive interfaces for AI applications and dashboards.",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion"
    ]
  },

  {
    title: "Databases & Vector Search",
    icon: Database,
    accent: "amber",
    summary:
      "Relational databases, vector search, embeddings, and AI data pipelines.",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "FAISS",
      "ChromaDB",
      "pgvector",
      "Qdrant",
      "Embeddings",
      "Vector Search",
      "Data Modeling"
    ]
  },

  {
    title: "Cloud, DevOps & Automation",
    icon: Cloud,
    accent: "violet",
    summary:
      "Deploying AI systems with containers, CI/CD, and workflow automation.",
    skills: [
      "Docker",
      "AWS",
      "Git",
      "GitHub",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "n8n",
      "CrewAI",
      "AutoGen"
    ]
  }
];

export type Project = {
  title: string;
  slug: string;
  eyebrow: string;
  status: string;
  overview: string;
  architecture: string[];
  techStack: string[];
  features: string[];
  challenges: string[];
  githubUrl?: string;
  liveUrl?: string;
  preview: {
    gradient: string;
    nodes: string[];
    metrics: string[];
  };
};

export const projects: Project[] = [
  {
  title: "LUNGCARE+",
  slug: "lungcare-plus",
  eyebrow: "AI Healthcare Platform",
  status: "LIVE",
  overview:
    "An AI-powered healthcare platform for lung disease detection from chest X-rays and CT scans with doctor assistance, AI chatbot, patient management, and medical report generation.",

  architecture: [
    "Next.js frontend with TypeScript and Tailwind CSS",
    "FastAPI backend exposing AI inference APIs",
    "Deep learning model for lung disease classification",
    "PostgreSQL database with JWT authentication"
  ],

  techStack: [
  "Python",
  "FastAPI",
  "ResNet-50",
  "Transfer Learning",
  "RAG",
  "OpenAI GPT",
  "FAISS",
  "React",
  "Docker",
  "GitHub Actions",
  "CI/CD"
],

  features: [
    "AI Disease Detection",
    "Doctor Dashboard",
    "Patient Management",
    "AI Chatbot",
    "Medical Reports",
    "Authentication"
  ],

  challenges: [
    "Medical image preprocessing",
    "Optimizing AI inference latency",
    "Secure healthcare workflow"
  ],

  githubUrl: "https://github.com/nishantverma0/LungCare-An-AI-Driven-CT-Scan-Based-Lung-Cancer-Triage-and-Intelligent-Doctor-Recommendation-System",
  liveUrl: "https://lung-care-plus-one.vercel.app/",

  preview: {
    gradient: "from-cyan-400 via-blue-500 to-violet-500",
    nodes: ["Upload", "AI Model", "Diagnosis", "Doctor", "Report"],
    metrics: ["95%+ Accuracy", "FastAPI", "AI Powered"]
  }
},
  {
    title: "BusinessVerse AI",
    slug: "businessverse-ai",
    eyebrow: "Multi-agent business intelligence",
    status: "Case study",
    overview:
      "An AI workspace concept for business operators that blends retrieval, forecasting, reporting and autonomous workflow execution into one command surface.",
    architecture: [
      "FastAPI gateway receives business questions, uploads and scheduled automation events.",
      "LangGraph routes analysis, retrieval, planning and action nodes with checkpointed state.",
      "Vector retrieval connects documents, knowledge base entries and historical reports.",
      "PostgreSQL stores tenants, runs, permissions and operational audit trails."
    ],
    techStack: ["Python", "FastAPI", "LangGraph", "LangChain", "RAG", "PostgreSQL", "Docker", "AWS"],
    features: [
      "Agentic business Q&A over company knowledge",
      "Workflow planner for follow-ups and summaries",
      "Insight cards with confidence and source traces",
      "Role-aware execution and audit history"
    ],
    challenges: [
      "Balancing autonomous actions with human approval.",
      "Designing retrieval quality checks before model response.",
      "Keeping orchestration observable across long-running tasks."
    ],
    githubUrl: "https://github.com/nishantverma0/Businessverse-AI",

    preview: {
      gradient: "from-cyan-400 via-blue-500 to-violet-500",
      nodes: ["Intake", "RAG", "Planner", "Actions", "Audit"],
      metrics: ["12 agents", "5 data lanes", "99% traceable"]
    }
  },
  {
    title: "AI Interview Analyzer",
    slug: "ai-interview-analyzer",
    eyebrow: "AI coaching and feedback",
    status: "Public repository",
    overview:
      "A coaching tool that evaluates interview responses and produces structured feedback on confidence, clarity, strengths and improvement areas.",
    architecture: [
      "Python analysis layer extracts response signals and assessment dimensions.",
      "LLM evaluator returns structured feedback instead of opaque free-form advice.",
      "Scoring and recommendation modules convert analysis into action steps.",
      "UI layer presents feedback as a readable coaching report."
    ],
    techStack: ["Python", "LLMs", "NLP", "Streamlit", "Pandas", "Prompt Engineering"],
    features: [
      "Interview response analysis",
      "Confidence and clarity feedback",
      "Personalized improvement suggestions",
      "Coach-style output for repeated practice"
    ],
    challenges: [
      "Making AI feedback concrete and non-generic.",
      "Normalizing subjective qualities into useful scores.",
      "Designing output users can act on immediately."
    ],
    githubUrl: "https://github.com/nishantverma0/AI-Interview-Analyzer",
    preview: {
      gradient: "from-violet-400 via-fuchsia-500 to-rose-500",
      nodes: ["Transcript", "Signals", "Evaluator", "Feedback"],
      metrics: ["4 score axes", "AI coach", "Python core"]
    }
  },
  {
    title: "Inventory Management System",
    slug: "inventory-management-system",
    eyebrow: "Operational backend system",
    status: "Case study",
    overview:
      "A practical inventory platform for tracking items, stock levels, suppliers, alerts and reporting with an automation-friendly backend.",
    architecture: [
      "FastAPI service exposes inventory, warehouse, supplier and transaction modules.",
      "PostgreSQL models stock movements with immutable ledger-style records.",
      "Background jobs compute reorder alerts, stockout risks and daily snapshots.",
      "Dashboard surfaces inventory health, exceptions and high-priority actions."
    ],
    techStack: ["FastAPI", "Python", "PostgreSQL", "React", "Docker", "GitHub Actions"],
    features: [
      "Stock ledger and audit trail",
      "Low-stock and reorder alerts",
      "Supplier and category management",
      "Analytics-ready operational reporting"
    ],
    challenges: [
      "Preventing stock drift from concurrent updates.",
      "Separating transactions from derived inventory views.",
      "Keeping dashboards fast as historical data grows."
    ],
    githubUrl: "https://github.com/nishantverma0/inventory-management-system",
    liveUrl: "https://inventory-management-system-phi-three.vercel.app/",
    preview: {
      gradient: "from-emerald-400 via-cyan-500 to-blue-500",
      nodes: ["Items", "Ledger", "Alerts", "Reports"],
      metrics: ["Live stock", "Audit-safe", "API-first"]
    }
  },
  {
    title: "AI Lead Qualification System",
    slug: "ai-lead-qualification-system",
    eyebrow: "Sales automation agent",
    status: "Case study",
    overview:
      "A lead triage and qualification workflow that enriches prospects, scores fit, drafts outreach and hands clean opportunities to a sales pipeline.",
    architecture: [
      "Webhook ingestion collects lead forms, CRM events and enrichment responses.",
      "LLM classifier scores intent, persona, company fit and urgency with structured output.",
      "n8n automations route follow-ups, CRM updates and notification tasks.",
      "Human review loop captures corrections and improves prompts over time."
    ],
    techStack: ["n8n", "MongoDB", "Zod", "EmailJS", "CRM APIs"],
    features: [
      "Lead fit scoring",
      "Auto-generated qualification notes",
      "Personalized outreach drafts",
      "Workflow handoff to sales tools"
    ],
    challenges: [
      "Avoiding overconfident AI scoring.",
      "Preserving CRM data quality across automations.",
      "Building a review loop that sales teams actually use."
    ],
    githubUrl: "https://github.com/nishantverma0/AI-Lead-Qualification-System-n8n",
    preview: {
      gradient: "from-amber-300 via-orange-500 to-fuchsia-500",
      nodes: ["Lead", "Enrich", "Score", "Draft", "CRM"],
      metrics: ["Intent model", "n8n flow", "CRM-ready"]
    }
    
  },
  {
    title: "Autonomous AI Newsletter Agent",
    slug: "autonomous-ai-newsletter-agent",
    eyebrow: "Research and publishing automation",
    status: "Case study",
    overview:
      "An autonomous agent pipeline that researches AI trends, filters sources, summarizes themes and prepares a polished newsletter draft.",
    architecture: [
      "Scheduler triggers research runs across curated feeds, search and saved sources.",
      "Retrieval and ranking stages remove duplicates and cluster topics.",
      "LLM writer produces sections with citations, editorial tone and summary bullets.",
      "Approval workflow publishes only after human review and final edits."
    ],
    techStack: ["LangGraph", "RAG", "Python", "FastAPI", "MongoDB", "n8n", "Resend"],
    features: [
      "Autonomous source discovery",
      "Topic clustering and trend detection",
      "Citation-aware newsletter drafts",
      "Human approval before publish"
    ],
    challenges: [
      "Separating signal from duplicated AI news.",
      "Keeping generated summaries source-grounded.",
      "Designing autonomy without giving up editorial control."
    ],
    preview: {
      gradient: "from-sky-400 via-indigo-500 to-purple-500",
      nodes: ["Sources", "Rank", "Cluster", "Draft", "Review"],
      metrics: ["Auto-research", "Cited draft", "Review gate"]
    }
  }
];

export const githubStats = {
  username: "nishantverma0",
  repositories: 4,
  followers: 0,
  stars: 0,
  profileReadme:
    "Transforming data into actionable AI insights through full-stack AI development.",
  topLanguages: [
    { name: "Python", value: 42 },
    { name: "JavaScript", value: 28 },
    { name: "TypeScript", value: 14 },
    { name: "HTML", value: 10 },
    { name: "Other", value: 6 }
  ],
  publicRepos: [
    {
      name: "AI-Interview-Analyzer",
      language: "Python",
      description: "AI interview coaching and response analysis.",
      url: "https://github.com/nishantverma0/AI-Interview-Analyzer"
    },
    {
      name: "AI-Study-Planner",
      language: "JavaScript",
      description: "Personalized study schedules powered by Gemini API.",
      url: "https://github.com/nishantverma0/AI-Study-Planner"
    },
    {
      name: "2in1-game",
      language: "HTML",
      description: "Interactive browser game project.",
      url: "https://github.com/nishantverma0/2in1-game"
    }
  ],
  recentActivity: [
    "Maintained a GitHub profile README focused on AI, full-stack development and data storytelling.",
    "Published AI Interview Analyzer as a Python project.",
    "Built AI Study Planner with Google Gemini API and an interactive calendar flow.",
    "Curated public work around AI tools, interfaces and learning systems."
  ]
};

export const timeline = [
  {
    title: "Freelance AI Engineer",
    label: "Dec 2025 – Present",
    icon: Rocket,
    description:
      "Building custom AI solutions, LLM applications, RAG systems, and automation workflows for clients using modern AI frameworks and production-ready backend architectures.",
    points: [
      "Developed AI Agents & RAG applications",
      "Built FastAPI backend services",
      "Designed n8n automation workflows",
      "Integrated OpenAI, Gemini & Ollama APIs"
    ]
  },

  {
    title: "Python Developer Intern — WISHTML",
    label: "2025",
    icon: Workflow,
    description:
      "Optimized large-scale ETL pipelines and automated data validation processes, improving performance, reliability, and overall data quality.",
    points: [
      "500K+ records processed daily",
      "40% reduction in ETL latency",
      "Automated QA using Python & SQL",
      "Resolved 12+ data quality issues"
    ]
  },

  {
    title: "AI Research & Product Development",
    label: "2025 – 2026",
    icon: GraduationCap,
    description:
      "Built production-ready AI applications while publishing healthcare AI research and specializing in Agentic AI, Generative AI, and LLM-powered systems.",
    points: [
      "Published IJERT Research Paper",
      "Developed LungCare+ Medical AI Platform",
      "Built Agentic AI Interview Simulator",
      "Created AI Resume Screening Pipeline"
    ]
  },

  {
    title: "B.Tech in Computer Science (AI & ML)",
    label: "2022 – 2026",
    icon: GraduationCap,
    description:
      "Built strong foundations in Artificial Intelligence, Machine Learning, Data Structures, NLP, Computer Vision, Databases, and Software Engineering through academic coursework and hands-on projects.",
    points: [
      "CGPA: 7.8/10",
      "AI & ML Specialization",
      "Python & Machine Learning",
      "Research & Production Projects"
    ]
  }
];

export const achievements = [
  {
    title: "Production mindset",
    description: "Focuses on reliability, observability, structured outputs and maintainable backend design."
  },
  {
    title: "AI product thinking",
    description: "Connects model behavior with business workflows, user trust and measurable utility."
  },
  {
    title: "Fast builder",
    description: "Comfortable moving from concept to working prototype across frontend, backend and AI layers."
  }
];

export const certifications = [
  {
    title: "Complete AI Automation & Agentic AI Bootcamp with n8n",
    issuer: "Udemy",
    status: "Completed • 2026",
    icon: BrainCircuit,
    details:
      "Comprehensive training in AI Automation, Agentic AI, n8n workflows, LLM integrations, RAG systems, and production-ready AI applications."
  },
  {
    title: "Machine Learning Training Program",
    issuer: "Ducat Training Institute",
    status: "Completed",
    icon: LineChart,
    details:
      "Completed hands-on training in Machine Learning, Python, data preprocessing, model development, and supervised learning techniques."
  },
  {
    title: "Generative AI Exchange Hackathon",
    issuer: "GenAI Exchange",
    status: "Participant",
    icon: Zap,
    details:
      "Participated in a Generative AI hackathon focused on building innovative AI-powered applications and collaborative problem-solving."
  },
  {
    title: "International Conference Presentation",
    issuer: "Conference Certificate",
    status: "Presented Research",
    icon: GraduationCap,
    details:
      "Presented research on AI-powered healthcare and intelligent lung disease detection at an international academic conference."
  }
];
export const contactReasons = [
  { label: "AI Engineer Hiring", icon: BriefcaseBusiness },
  { label: "Generative AI Project", icon: Sparkles },
  { label: "Agentic AI Systems", icon: BrainCircuit },
  { label: "RAG & LLM Applications", icon: GitBranch },
  { label: "Python Backend APIs", icon: Network },
  { label: "Freelance Collaboration", icon: CalendarClock },
  { label: "AI Automation (n8n)", icon: Workflow }
];
