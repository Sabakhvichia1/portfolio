// Project cards in "Selected work". The `visual` picks the panel drawn at the top
// of the card. To use a screenshot instead, put it in public/projects/ and set
// `image: "/projects/your-file.png"`.

export type Project = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  points: string[];
  tags: string[];
  links: { label: string; href: string }[];
  visual: "voloo" | "insights" | "chatbot" | "portfolio";
  image?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    id: "voloo",
    eyebrow: "Voloo Store · 2025–26",
    title: "A delivery store, admin panel and seller dashboard for a Tbilisi startup",
    summary:
      "voloostore.ge is a same-day delivery store in Tbilisi. I led the UI/UX design and front-end architecture across its three apps: the store, the admin panel and the gallery.",
    points: [
      "Seller dashboard with real-time inventory and sales tracking",
      "English and Georgian throughout with next-intl",
      "Server-side rendering for SEO, continuous deployment on Vercel",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "next-intl", "Vercel"],
    links: [{ label: "voloostore.ge", href: "https://voloostore.ge" }],
    visual: "voloo",
  },
  {
    id: "review-insights",
    eyebrow: "Data & AI · 2026",
    title: "Why online shoppers leave bad reviews: 98,000 orders, SQL and an LLM",
    summary:
      "An analysis of a Brazilian marketplace's orders and reviews, compared with Amazon. SQL finds what drives bad ratings; Gemini reads the review text; hand labels check that it read it right.",
    points: [
      "Late or missing orders: 8% of reviews, 36% of the bad ones",
      "Multi-seller orders get bad reviews 6x as often, even on time",
      "LLM labels 88% accurate after a blind review",
    ],
    tags: ["Python", "SQL / DuckDB", "Gemini", "pandas", "Streamlit", "Jupyter"],
    links: [{ label: "GitHub", href: "https://github.com/Sabakhvichia1/review-insights" }],
    visual: "insights",
  },
  {
    id: "chatbot",
    eyebrow: "Solo project · 2025",
    title: "A fast AI chatbot that talks to the model API directly",
    summary:
      "A conversational interface in Next.js connected straight to an LLM API, with no heavy SDKs, to keep it small and quick to respond.",
    points: ["Direct API integration, no wrapper libraries", "Built for instant, conversational replies"],
    tags: ["Next.js", "TypeScript", "LLM API"],
    links: [],
    visual: "chatbot",
  },
  {
    id: "volooportfolio",
    eyebrow: "GTU team project · 2025",
    title: "A portfolio builder, prototyped with a student team",
    summary:
      "A responsive platform for creating portfolios, co-developed with a team of Georgian Technical University students. I worked on the core front-end architecture.",
    points: ["Responsive across phone, tablet and desktop"],
    tags: ["Next.js", "React", "TypeScript"],
    links: [],
    visual: "portfolio",
    status: "Prototype",
  },
];
