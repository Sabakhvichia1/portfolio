// Everything about you that appears on the site. Edit freely.

export const profile = {
  name: "Saba Khvichia",
  initials: ["S", "K"] as const,
  role: "Full-stack developer · Data & AI analytics",
  location: "Tbilisi, Georgia",
  email: "khvichia42@gmail.com",
  links: {
    github: "https://github.com/Sabakhvichia1",
    linkedin: "https://www.linkedin.com/in/saba-khvichia-125834331",
  },
  // Put your PDF at public/Saba_Khvichia_CV.pdf and the "Download CV" button appears by itself.
  cvFile: "Saba_Khvichia_CV.pdf",
  intro: [
    "Computer Science student at Georgian Technical University who ships production web apps and analyzes the data behind them.",
    "At Voloo Store I led the design and front end of the store, admin panel and seller dashboard in Next.js. Lately I've been turning business data into answers with SQL, Python and LLMs, like finding out why 8% of a marketplace's orders produce 36% of its bad reviews.",
  ],
  openTo: "Open to internships in data & AI analytics and full-stack development",
  languages: [
    { name: "Georgian", level: "Native" },
    { name: "English", level: "C1" },
  ],
};

export const ticker = [
  profile.openTo,
  "Based in Tbilisi",
  "Next.js · React · TypeScript",
  "SQL · Python · LLMs",
  "Georgian and English",
  "Finishing a BSc in Computer Science at GTU",
];

export type Stat = { value: number; suffix?: string; label: string };

export const stats: Stat[] = [
  { value: 98, suffix: "K", label: "Orders analyzed in SQL" },
  { value: 800, label: "Reviews labeled with an LLM" },
  { value: 88, suffix: "%", label: "LLM accuracy after blind review" },
  { value: 3, label: "Apps shipped for Voloo Store" },
  { value: 2, label: "Languages localized (EN / KA)" },
  { value: 5, label: "Programming languages" },
];
