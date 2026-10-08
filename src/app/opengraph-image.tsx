import { ImageResponse } from "next/og";
import { profile } from "@/content/profile";

export const alt = `${profile.name}: full-stack developer and data & AI analyst`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The preview card shown when the link is shared (Teams, LinkedIn, WhatsApp...).
export default function OpengraphImage() {
  const bars = [9, 10, 12, 32, 68, 80, 79, 76];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "72px 80px",
          background: "#0a0a0b",
          color: "#ededef",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div style={{ fontSize: 22, letterSpacing: 3, color: "#4fe0b6", textTransform: "uppercase" }}>
            Full-stack · Data & AI analytics
          </div>
          <div style={{ fontSize: 84, fontWeight: 700, letterSpacing: -3, marginTop: 20 }}>{profile.name}</div>
          <div style={{ fontSize: 28, color: "#8b8b94", marginTop: 20, lineHeight: 1.4 }}>
            Next.js, React and TypeScript in production. SQL, Python and LLMs for analysis.
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 300 }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                width: 26,
                height: `${h * 3.4}px`,
                borderRadius: 4,
                background: i >= 3 ? "#f2685b" : "#3a3a40",
              }}
            />
          ))}
        </div>
      </div>
    ),
    size,
  );
}
