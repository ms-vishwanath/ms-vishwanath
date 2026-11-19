import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "M. S. Vishwanath — Full Stack AI Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  const colors = ["#1d1b2e", "#ff6b35", "#1d1b2e", "#3d5afe", "#1d1b2e", "#ec4899", "#1d1b2e", "#14b8a6", "#1d1b2e", "#f59e0b"];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#fff6d6", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#1d1b2e", opacity: 0.6 }}>Hey, I&apos;m</div>
        <div style={{ display: "flex", fontSize: 170, fontWeight: 800, letterSpacing: -6, lineHeight: 1 }}>
          {"Vishwanath".split("").map((c, i) => (
            <span key={i} style={{ color: colors[i] }}>{c}</span>
          ))}
        </div>
        <div style={{ display: "flex", height: 22, width: 900, background: "#ffc93c", borderRadius: 20, marginTop: 6 }} />
        <div style={{ display: "flex", fontSize: 46, fontWeight: 700, color: "#1d1b2e", marginTop: 40 }}>Full Stack AI Developer · Freelancer · Trainer</div>
        <div style={{ display: "flex", fontSize: 30, color: "#1d1b2e", opacity: 0.6, marginTop: 14 }}>Take a drive through 70+ projects → ms-vishwanath.web.app</div>
      </div>
    ),
    size
  );
}
