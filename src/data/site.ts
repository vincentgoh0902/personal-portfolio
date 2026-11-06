// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: 'Vincent Goh',
  tagline: 'Data Science · LLMs · AI Engineering',
  // The first and last sentences of the summary double as the meta / Open Graph description.
  summary: [
    'I’m a final-year Data Science student at NUS and a Data Science Intern at GovTech, where I build LLM-powered tools from prototype to production.',
    'Previously at CPF Board, I built a RAG agent that helps analysts find the right data in a large warehouse.',
    'I care most about measuring whether these systems actually work.',
  ],
  location: 'Singapore',
  email: 'vincentgoh.kaiswee@gmail.com',
  github: 'https://github.com/vincentgoh0902',
  linkedin: 'https://www.linkedin.com/in/goh-kai-swee-vincent/',
  // Drop your resume at public/resume.pdf and set this to '/resume.pdf'
  resume: '',
};


export type Experience = {
  role: string;
  company: string;
  period: string;
  summary: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    role: 'Data Science Intern',
    company: 'GovTech Singapore',
    period: 'Jul 2026 – Present',
    summary:
      'Built an internal analytics platform that replaced a manual, spreadsheet-based reporting process with a self-service web app, now in production.',
    points: [
      'Developed the full-stack app (Next.js, TypeScript, PostgreSQL) on Databricks, cutting each quarterly report from days of manual work to minutes',
      'Built LLM pipelines that draft feedback summaries and trend insights for admins to review before publishing, and evaluated the quality of their output',
      'Took the app from prototype to production with single sign-on, role-based access control, automated deployment and a comprehensive test suite',
    ],
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Databricks', 'LLMs'],
  },
  {
    role: 'Data Science Intern',
    company: 'CPF Board',
    period: 'Aug 2025 – Jan 2026',
    summary:
      'Built an AI agent that helps analysts find the right data in a large data warehouse, as part of a multi-agent analytics assistant.',
    points: [
      'Built a retrieval-augmented generation (RAG) agent that maps natural-language questions to relevant tables and generates PySpark queries',
      'Designed an LLM query-rewriting module with DSPy that raised retrieval accuracy (Recall@10) from 63% to 90% on a test set',
      'Created an automated evaluation harness so every change was measured before it shipped',
    ],
    tags: ['RAG', 'DSPy', 'PySpark', 'Multi-agent', 'Evaluation'],
  },
  {
    role: 'Data Analyst',
    company: 'DIC Asia Pacific',
    period: 'Jun 2025 – Aug 2025',
    summary:
      'Built the department’s first Power BI dashboard, bringing together HR data from 21 APAC entities for the first time.',
    points: [
      'Integrated multi-entity HR data with Power Query and a unified data model, enabling the first cross-entity analysis of productivity and cost',
      'Replaced manual monthly reporting with an auto-refreshing dashboard and DAX KPIs, saving about three days of work each cycle',
    ],
    tags: ['Power BI', 'Power Query', 'DAX', 'Data modelling'],
  },
];

export type Project = {
  title: string;
  blurb: string;
  points: string[];
  tags: string[];
  repo?: string;
  demo?: string;
  image?: string;
  imageAlt?: string;
  art?: 'rna';
  note?: string;
};

export const projects: Project[] = [
  {
    title: 'Graph-Based Fraud Detection',
    blurb:
      'Detecting illicit Bitcoin transactions with graph ML on the Elliptic dataset (200k transactions), evaluated under a strict temporal split.',
    points: [
      'Compared XGBoost against GCN, GraphSAGE, Neo4j graph features and a GNN-embedding hybrid; XGBoost reached 0.79 test PR-AUC and no graph model beat it',
      'Showed why every model collapses after a dark-market shutdown, and that input-drift alarms could not have caught it',
      'Built Neo4j investigation tooling and a static demo with SHAP explanations of flagged transactions',
    ],
    tags: ['PyTorch Geometric', 'XGBoost', 'Neo4j', 'MLflow', 'SHAP'],
    repo: 'https://github.com/vincentgoh0902/fraud-graph-detection',
    demo: 'https://vincentgoh0902.github.io/fraud-graph-detection/',
    image: 'fraud-demo',
    imageAlt: "The fraud demo: a flagged transaction's SHAP explanation and its 2-hop payment neighbourhood",
  },
  {
    title: 'Predicting m6A RNA Modification',
    blurb:
      'Classifying m6A modification sites from direct RNA nanopore sequencing signals, with a reproducible training and inference pipeline.',
    points: [
      'Compared Extra Trees, random forest, gradient boosting, logistic regression and multiple-instance learning across three held-out datasets',
      'Best model (Extra Trees) reached 0.94 ROC AUC on held-out data',
      'Packaged locked environments and pretrained models so results reproduce with one command',
    ],
    tags: ['Python', 'scikit-learn', 'Multiple-instance learning', 'Bioinformatics'],
    art: 'rna',
    note: 'Group project',
  },
];

export const education = {
  school: 'National University of Singapore',
  degree: 'BSc Data Science and Analytics (Hons)',
  period: 'Aug 2023 – May 2027 (expected)',
  coursework: [
    { code: 'CS1010S', name: 'Programming Methodology' },
    { code: 'DSA1101', name: 'Introduction to Data Science' },
    { code: 'CS2040', name: 'Data Structures and Algorithms' },
    { code: 'DSA2101', name: 'Data Visualisation' },
    { code: 'DSA3101', name: 'Data Science in Practice' },
    { code: 'ST3131', name: 'Regression Analysis' },
    { code: 'CS3244', name: 'Machine Learning' },
    { code: 'DSA4213', name: 'Natural Language Processing' },
  ],
};
