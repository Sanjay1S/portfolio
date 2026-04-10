export const SITE = {
  name: "Sanjay Srinivasa",
  title: "Sanjay Srinivasa",
  description:
    "Machine Learning Engineer building generative AI, RAG systems, and ML infrastructure. MS CS from UC Riverside.",
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
        title: "Machine Learning Engineer",
        period: "Dec 2025 — Present",
        highlights: [
          "Architected a multi-agent system using crewAI for AI-powered image generation, coordinating prompt routing, tool selection, and multi-step reasoning across diffusion and editing models.",
          "Fine-tuned Qwen diffusion models via LoRA with a two-stage architecture, caching multimodal conditioning to train only the denoiser on precomputed latents; used FP8 quantization, BF16 compute, and gradient checkpointing to fit per-GPU VRAM constraints across dual-GPU on-prem infrastructure.",
          "Benchmarked DoRA (magnitude/direction decomposition) against LoRA across ranks 4–32 in PyTorch to optimize adapter strategy; validated zero-overhead inference via weight merging.",
          "Built a supply chain planning automation via DAX reads, lead time mismatch validation, and WebADI-compliant output generation; delivered a dashboard for cycle tracking, cutting planner cycle time by ~70%.",
          "Designed a demand projection automation sampling historical order velocity for supply forecasts; routed approvals via Graph API and Power Automate with a forecast-vs-actuals dashboard, saving 720 hours/year.",
        ],
      },
      {
        title: "Machine Learning / DS Intern",
        period: "Jun 2025 — Dec 2025",
        highlights: [
          "Built an enterprise RAG pipeline over 200K+ documents using transformer-based embeddings and metadata-driven retrieval; achieved 95% Recall@5 and sub-second latency at scale.",
          "Deployed a scalable on-prem LLM inference microservice (vLLM, Docker) over an 8M+ vector index; benchmarked throughput and latency under concurrent load to validate production scalability.",
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
          "Fine-tuned Llama-2-70B on a 4×H100 80GB GPU cluster using DeepSpeed ZeRO-3 and LoRA for clinical decision support and medical reasoning; deployed on Azure AKS with auto-scaling, increasing NPS score by 55%.",
          "Built LLM alignment pipeline, QLoRA (NF4 4-bit, double quantization) for Supervised Fine-tuning followed by DPO for preference alignment; validated with 34-test suite on quantization fidelity and loss correctness.",
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
        title: "Software Engineer - Machine Learning",
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
      "Information Retrieval",
      "Prompt Engineering",
      "Agent Orchestration",
      "LLM Evaluation",
      "Neural Networks",
      "Unsupervised Learning",
      "A/B Testing",
    ],
  },
  {
    category: "Data Processing & Streaming",
    items: [
      "Apache Spark (PySpark)",
      "Databricks",
      "AWS S3",
    ],
  },
  {
    category: "Cloud & ML Infra",
    items: [
      "Azure",
      "Snowflake",
      "Docker",
      "vLLM",
      "Vector Databases",
      "Microservices",
      "Distributed Systems",
    ],
  },
  {
    category: "Languages",
    items: ["Python", "SQL", "C", "C++", "HTML", "CSS"],
  },
];

export const PROJECTS = [
  {
    title: "LLM Alignment Lab",
    description:
      "From-scratch PyTorch implementation of a complete LLM alignment pipeline combining QLoRA (NF4 4-bit quantization with double quantization) and DPO (Direct Preference Optimization). Two-stage pipeline: Supervised Fine-tuning followed by preference alignment. Includes a 34-test validation suite on quantization fidelity and loss correctness. No dependency on HuggingFace PEFT, TRL, or bitsandbytes.",
    tags: ["PyTorch", "QLoRA", "DPO", "LLM Alignment", "NF4 Quantization"],
    github: "https://github.com/Sanjay1S/LLM-Alignment-Lab",
  },
  {
    title: "DoRA: Weight-Decomposed Low-Rank Adaptation",
    description:
      "From-scratch PyTorch implementation of DoRA (ICML 2024 Oral, NVIDIA), decomposing pretrained weights into independent magnitude and direction components for fine-tuning. Supports LLaMA, Mistral, Gemma, GPT-2, OPT, and Phi architectures. Adds only 0.01% parameters beyond LoRA while consistently improving performance. Includes weight merging for zero-overhead inference.",
    tags: ["PyTorch", "DoRA", "LoRA", "Fine-tuning", "ICML 2024"],
    github: "https://github.com/Sanjay1S/DoRA-From-Scratch",
  },
];
