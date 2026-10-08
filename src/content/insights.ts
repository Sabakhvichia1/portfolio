// Real results from github.com/Sabakhvichia1/review-insights (sql/02, 06, 09 and evaluate.py).

export const ratingByDelay = [
  { label: "10+ days early", pct: 8.8 },
  { label: "1–9 days early", pct: 9.9 },
  { label: "On the day", pct: 12.3 },
  { label: "1–3 days late", pct: 32.0, late: true },
  { label: "4–7 days late", pct: 67.6, late: true },
  { label: "8–14 days late", pct: 80.1, late: true },
  { label: "15+ days late", pct: 78.5, late: true },
  { label: "Not delivered", pct: 76.0, late: true },
];

export const orderTypes = [
  { label: "One item", pct: 7.5 },
  { label: "One seller, several items", pct: 20.9 },
  { label: "Several sellers", pct: 47.2 },
];

export const complaintMix = [
  { label: "Late delivery", olist: 40.0, amazon: 0.3 },
  { label: "Wrong or missing item", olist: 25.5, amazon: 3.0 },
  { label: "Seller service", olist: 14.8, amazon: 0.5 },
  { label: "Product quality", olist: 12.8, amazon: 83.3 },
  { label: "Damaged on arrival", olist: 4.3, amazon: 6.8 },
  { label: "Price / value", olist: 0.8, amazon: 5.3 },
];

export const llmCheck = [
  { value: "65%", label: "Raw agreement with my hand labels (κ 0.51)" },
  { value: "21 / 32", label: "Disagreements where Gemini was right, judged blind" },
  { value: "88%", label: "Accuracy against the reviewed labels" },
  { value: "72%", label: "“Late delivery” labels confirmed by delivery dates" },
];
