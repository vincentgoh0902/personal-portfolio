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
      'Built the full-stack app (Next.js, TypeScript, PostgreSQL) on Databricks, cutting each quarterly report from days of manual work to minutes',
      'Added LLM features in production: draft summaries and trend insights that admins review before publishing, and a chat assistant that answers questions about each product’s results, with output quality checked against the source data',
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
      'Built a RAG agent that maps plain-language questions to the right tables and generates PySpark queries for them',
      'Designed a query-rewriting module with DSPy that raised retrieval accuracy (Recall@10) from 63% to 90% on a test set',
      'Built an evaluation harness that measured every prompt change against a golden set before it was kept',
    ],
    tags: ['RAG', 'DSPy', 'PySpark', 'Multi-agent', 'Evaluation'],
  },
  {
    role: 'Data Analyst Intern',
    company: 'DIC Asia Pacific',
    period: 'Jun 2025 – Aug 2025',
    summary:
      'Built the department’s first Power BI dashboard, bringing together HR data from 21 APAC entities for the first time.',
    points: [
      'Integrated multi-entity HR data with Power Query and a unified data model, enabling the first cross-entity analysis of productivity and cost',
      'Automated monthly reporting with an auto-refreshing dashboard and DAX KPIs, saving about three days of work each cycle',
    ],
    tags: ['Power BI', 'Power Query', 'DAX', 'Data modelling'],
  },
];

export type Project = {
  title: string;
  description: string;
  tags: string[];
  icon: 'network' | 'dna' | 'pot';
  repo?: string;
  demo?: string;
  note?: string;
};

export const projects: Project[] = [
  {
    title: 'Graph-Based Fraud Detection',
    description:
      'Graph ML vs XGBoost for Bitcoin fraud under a strict temporal split. XGBoost won at 0.79 PR-AUC, and I traced a 0.92 → 0.04 collapse to concept drift.',
    tags: ['PyTorch Geometric', 'XGBoost', 'Neo4j', 'MLflow', 'SHAP'],
    icon: 'network',
    repo: 'https://github.com/vincentgoh0902/fraud-graph-detection',
    demo: 'https://vincentgoh0902.github.io/fraud-graph-detection/',
  },
  {
    title: 'Predicting m6A RNA Modification',
    description:
      'Classifying RNA modification sites from nanopore signals, comparing classical models with a multiple-instance learning model, evaluated by PR-AUC on a fully held-out external dataset. My part: I built the classical models (Extra Trees, random forest, gradient boosting, logistic regression and RBF SVM).',
    tags: ['Python', 'scikit-learn', 'Multiple-instance learning', 'Bioinformatics'],
    icon: 'dna',
    note: 'Group project',
  },
  {
    title: 'Recipe Saver',
    description:
      'A self-hosted app that turns a shared TikTok link into a recipe card, using local speech-to-text and a local LLM.',
    tags: ['Python', 'Docker', 'whisper.cpp', 'Ollama'],
    icon: 'pot',
    repo: 'https://github.com/vincentgoh0902/recipe-saver',
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
    { code: 'ST3131', name: 'Regression Analysis' },
    { code: 'DSA3101', name: 'Data Science in Practice' },
    { code: 'CS3244', name: 'Machine Learning' },
    { code: 'DSA4213', name: 'Natural Language Processing' },
  ],
};
