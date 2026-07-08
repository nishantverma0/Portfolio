import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Nishant Verma AI/ML Engineer";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #030409 0%, #07111e 45%, #12081f 100%)",
          color: "white",
          fontFamily: "Arial, sans-serif"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            color: "#9eefff"
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 18,
              background: "rgba(91, 231, 255, 0.16)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid rgba(255,255,255,0.16)"
            }}
          >
            AI
          </div>
          Production-Grade AI Systems
        </div>
        <div>
          <div style={{ fontSize: 88, fontWeight: 700, lineHeight: 1 }}>
            Nishant Verma
          </div>
          <div
            style={{
              marginTop: 28,
              maxWidth: 920,
              fontSize: 32,
              lineHeight: 1.35,
              color: "rgba(255,255,255,0.72)"
            }}
          >
            AI/ML Engineer building LLM, LangGraph, LangChain, RAG and FastAPI systems.
          </div>
        </div>
        <div style={{ display: "flex", gap: 18, fontSize: 24, color: "#c7d2fe" }}>
          <span>LLMs</span>
          <span>RAG</span>
          <span>FastAPI</span>
          <span>Cloud AI</span>
        </div>
      </div>
    ),
    size
  );
}
