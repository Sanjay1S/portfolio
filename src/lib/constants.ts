export const SITE = {
  name: "Sanjay Srinivasa",
  title: "Sanjay Srinivasa",
  description:
    "Data Scientist working on diffusion models, RAG systems, and ML infrastructure. MS CS from UC Riverside.",
  url: "https://sanjaysrinivasa.com",
  email: "sanjaysrinivasacv@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjay-srinivasa-31668915a/",
  github: "https://github.com/Sanjay1S",
};

export const NAV_LINKS = [
  { label: "About", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "Projects", href: "/projects" },
];

export const EXPERIENCE = [
  {
    company: "Corsair Gaming Inc.",
    location: "Milpitas, California",
    roles: [
      {
        title: "Data Scientist",
        period: "Dec 2025 — Present",
        highlights: [
          "Built a supply chain planning automation via DAX reads, lead time mismatch validation, and WebADI-compliant output generation; delivered a dashboard for cycle tracking, cutting planner cycle time by ~70%.",
          "Architected a multi-agent system using crewAI for AI-powered image generation, coordinating prompt routing, tool selection, and multi-step reasoning across diffusion and editing models.",
          "Fine-tuned Qwen diffusion models via LoRA with a two-stage architecture, training only the denoiser on precomputed latents; applied FP8 quantization and gradient checkpointing to fit VRAM constraints across dual-GPU on-prem infrastructure.",
          "Designed a demand projection automation sampling historical order velocity for supply forecasts; routed approvals via Graph API and Power Automate with a forecast-vs-actuals dashboard, saving 720 hours/year.",
        ],
      },
      {
        title: "Machine Learning / DS Intern",
        period: "Jun 2025 — Dec 2025",
        highlights: [
          "Developed a GDPR/IAM compliance AI agent automating access audits across 30 different data sources; surfaces anomalous grants and executes revocation workflows with a full audit trail.",
          "Built an enterprise RAG pipeline over 200K+ documents using transformer-based embeddings and metadata-driven retrieval; deployed a scalable on-prem LLM inference microservice (vLLM, Docker) over an 8M+ vector index, achieving 95% Recall@5 and sub-second latency.",
        ],
      },
    ],
  },
  {
    company: "Optum (UnitedHealth Group)",
    location: "India",
    roles: [
      {
        title: "Associate AI/ML Engineer",
        period: "Nov 2023 — Aug 2024",
        highlights: [
          "Built a healthcare demand forecasting automation projecting drug supply needs from claims data; automated reconciliation reports flagging formulary deviations, reducing manual review by 60%.",
          "Modeled ensemble methods (XGBoost, Random Forest, Logistic Regression) validated via holdout experiments, improving debt recovery by 70%.",
          "Engineered a distributed PySpark + SQL pipeline on Databricks to process 100K+ healthcare documents with automated PHI de-identification via SparkNLP, achieving 98.6% precision.",
        ],
      },
      {
        title: "Data Scientist",
        period: "Mar 2023 — Nov 2023",
        highlights: [
          "Designed DBSCAN-based clustering to detect anomalies in patient claims, achieving 98.5% precision.",
          "Fine-tuned pretrained summarization models on call transcripts, deployed via Azure ML endpoints, reducing handling time by 67% across 10M+ transcripts in production.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Jul 2020 — Mar 2023",
        highlights: [
          "Fine-tuned YOLOv5 and built an OCR pipeline deployed via ONNX and Triton Inference Server for GPU-accelerated extraction of patient vitals from unstructured PDFs, achieving 93% mAP@0.5.",
          "Deployed a Dockerized audio-to-text transcription microservice on Azure with Jenkins CI/CD, enabling parallel batch processing and reducing latency by 35%.",
        ],
      },
    ],
  },
];

export const EDUCATION = [
  {
    school: "University of California, Riverside",
    degree: "Master of Science, Computer Science",
    detail: "Coursework: ML, NLP & DL",
    gpa: "3.71",
    period: "Sept 2024 — Dec 2025",
    location: "Riverside, USA",
  },
  {
    school: "R.V. College of Engineering (RVCE)",
    degree: "Bachelor of Engineering, Computer Science",
    period: "Aug 2016 — Jun 2020",
    location: "Bangalore, India",
  },
];

export const SKILLS = [
  {
    category: "AI & Machine Learning",
    items: [
      "PyTorch",
      "Scikit-learn",
      "Deep Learning",
      "NLP",
      "RAG",
      "Diffusion Models",
      "Information Retrieval",
      "Prompt Engineering",
      "Agent Orchestration",
      "LLM Evaluation",
      "A/B Testing",
    ],
  },
  {
    category: "Data & Infrastructure",
    items: [
      "PySpark",
      "Databricks",
      "Snowflake",
      "SQL",
      "AWS S3",
      "Docker",
      "vLLM",
      "Vector Databases",
      "Microservices",
    ],
  },
  {
    category: "Cloud & Automation",
    items: [
      "Azure",
      "Jenkins",
      "ONNX",
      "Triton Inference Server",
      "Power Automate",
      "Microsoft Graph API",
      "SharePoint",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "SQL", "C", "C++", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "Supply Chain Lead Time Automation",
    description:
      "End-to-end automation replacing a manual Excel workflow for supply chain planners. Reads reference data via DAX/ADOMD from Analysis Services cubes, validates lead time mismatches in Python (pandas), generates WebADI-compliant Excel output, and routes approvals through Power Automate. Cuts planner cycle time by ~70%.",
    tags: ["Python", "DAX", "Power Automate", "Graph API", "pandas", "openpyxl"],
  },
  {
    title: "Demand Projection & Forecast Automation",
    description:
      "Automated demand forecasting pipeline sampling historical order velocity to project supply needs. Approval routing via Microsoft Graph API and Power Automate, with a forecast-vs-actuals dashboard delivered to VPs per cycle. Saves ~720 hours/year of manual planning work.",
    tags: ["Python", "Power Automate", "Graph API", "SharePoint", "Dashboards"],
  },
  {
    title: "Multi-Agent Image Generation System",
    description:
      "Architected a multi-agent system using crewAI for AI-powered product image generation. Agents coordinate prompt routing, tool selection, and multi-step reasoning across diffusion and editing models for branded Corsair product visualization.",
    tags: ["crewAI", "Diffusion Models", "LoRA", "Multi-Agent", "Python"],
  },
  {
    title: "GDPR/IAM Compliance Agent",
    description:
      "AI-powered identity and access management tool for GDPR compliance. Given a corporate email, searches across 30+ connected systems (M365, Slack, Atlassian, Oracle, Shopify), surfaces anomalous grants, and executes revocation workflows with a full audit trail.",
    tags: ["React", "MCP", "Azure AD", "Oracle", "GDPR"],
  },
  {
    title: "Enterprise RAG Pipeline",
    description:
      "Production RAG system over 200K+ documents with transformer-based embeddings and metadata-driven retrieval. Deployed on-prem LLM inference via vLLM and Docker over an 8M+ vector index, achieving 95% Recall@5 and sub-second latency.",
    tags: ["vLLM", "Docker", "Vector DB", "Transformers", "RAG"],
  },
  {
    title: "Forethought → PDP FAQ Enhancement Pipeline",
    description:
      "Monthly automated pipeline ingesting Forethought chat and Zendesk ticket exports to enhance product FAQs across 231 models. Regex product classification, local LLM FAQ generation via Ollama, dedup, SKU mapping, and a PDP Enhancement Agent selecting top-15 FAQs in brand voice.",
    tags: ["Ollama", "DynamoDB", "OpenSearch", "NLP", "Python"],
  },
];
