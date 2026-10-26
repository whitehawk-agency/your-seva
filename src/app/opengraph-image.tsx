import { ImageResponse } from "next/og";

import { site } from "@/lib/content";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #1a1816 0%, #0f0e0c 55%, #6a3514 100%)",
          padding: 72,
          color: "#faf6f0",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 999,
              background: "#e8871e",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>Your Seva</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -3, lineHeight: 1.03, maxWidth: 940 }}>
            100% of your donation changes lives directly.
          </div>
          <div style={{ fontSize: 30, color: "#cdc4ba", maxWidth: 860, lineHeight: 1.3 }}>
            Rebuilding homes, restoring dignity and empowering families in Panjab.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#f79c38" }}>
          <div style={{ width: 48, height: 4, borderRadius: 4, background: "#e8871e", display: "flex" }} />
          {site.domain}
        </div>
      </div>
    ),
    size,
  );
}
