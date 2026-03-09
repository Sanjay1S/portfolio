export const SITE = {
  name: "Sanjay Srinivasa",
  title: "Sanjay Srinivasa",
  description:
    "Data Scientist working on diffusion models, RAG systems, and ML infrastructure. MS CS from UC Riverside.",
  url: "https://sanjaysrinivasa.com",
  email: "sanjaysrinivasacv@gmail.com",
  linkedin: "https://www.linkedin.com/in/sanjay",
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
          "Fine-tuning Qwen diffusion models via LoRA with a split training architecture, caching VAE and text encodings to train only the denoiser on precomputed latents.",
          "Enabled fine-tuning within per-GPU VRAM limits via FP8 quantization with BF16 compute and gradient checkpointing, reducing memory footprint by 50%.",
        ],
      },
      {
        title: "Data Science Intern",
        period: "Jun 2025 — Dec 2025",
        highlights: [
          "Built an enterprise RAG system over 50K+ documents using transformer-based embeddings and metadata-driven retrieval, achieving 95% Recall@5 and sub-second latency.",
          "Deployed a scalable on-prem LLM inference system (vLLM, Docker) over a 2M+ vector index with benchmarked throughput and latency.",
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
        period: "Jul 2020 — Aug 2024",
        highlights: [
          "Modeled ensemble methods (XGBoost, Random Forest, Logistic Regression) and validated lift through holdout experiments, improving debt recovery by 70%.",
          "Developed a multi-stage NLP pipeline using GPT-3.5, Vicuna, and DistilBERT for intent classification, reducing repeat calls and increasing NPS by 82%.",
          "Engineered a PySpark + SQL pipeline on Databricks to process 100K healthcare documents with automated PHI de-identification at 98.6% precision.",
        ],
      },
      {
        title: "Data Scientist",
        period: "",
        highlights: [
          "Designed DBSCAN-based clustering to detect anomalies in patient claims at 98.5% precision.",
          "Fine-tuned summarization models on call transcripts, automating post-call documentation and reducing handling time by 67% across 10M+ transcripts.",
        ],
      },
      {
        title: "Software Engineer",
        period: "",
        highlights: [
          "Fine-tuned YOLOv5 and built an end-to-end OCR pipeline deployed via ONNX and Triton Inference Server, achieving 93% mAP@0.5.",
          "Deployed a Dockerized audio-to-text transcription pipeline on Azure using Speech Services and Jenkins CI/CD, reducing latency by 35%.",
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
      "Deep Learning",
      "NLP",
      "RAG",
      "Diffusion Models",
      "Information Retrieval",
      "Search Relevance & Ranking",
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
    ],
  },
  {
    category: "Cloud & Tools",
    items: ["Azure (Compute, AzureML)", "Jenkins", "ONNX", "Triton Inference Server"],
  },
  {
    category: "Languages",
    items: ["Python", "SQL", "C", "C++"],
  },
];
