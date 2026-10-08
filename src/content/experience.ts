// The timeline in "The path so far", newest first.

export type Entry = {
  org: string;
  role: string;
  period: string;
  place?: string;
  points: string[];
  current?: boolean;
};

export const experience: Entry[] = [
  {
    org: "Review Insights",
    role: "Independent data & AI project",
    period: "Oct 2026",
    points: [
      "SQL analysis of 98,000 orders in DuckDB; Gemini labels for 800 reviews in Portuguese and English",
      "Blind review of LLM vs hand labels; findings published as a Jupyter analysis and Streamlit dashboard",
    ],
    current: true,
  },
  {
    org: "Voloo Store",
    role: "Front-End Developer",
    period: "2025 – Jan 2026",
    place: "Tbilisi",
    points: [
      "Led UI/UX design and architecture for the store, admin panel and gallery (Next.js, Tailwind CSS)",
      "Built the seller dashboard with complex state for real-time inventory and sales tracking",
      "Shipped English/Georgian localization with next-intl and SEO through server-side rendering",
      "Kept production stable with fast bug fixes and continuous deployment on Vercel",
    ],
  },
  {
    org: "VolooPortfolio",
    role: "Front-End Developer, student team",
    period: "Feb – Jun 2025",
    points: ["Co-developed the core architecture of a portfolio-building platform with a GTU team"],
  },
  {
    org: "Georgian Technical University",
    role: "BSc in Computer Science",
    period: "Sep 2023 – present",
    place: "Tbilisi",
    points: ["Object-oriented programming in Java, Python and C++"],
    current: true,
  },
];
