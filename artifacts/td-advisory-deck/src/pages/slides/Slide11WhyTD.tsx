export default function Slide11WhyTD() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#FAFBFC", fontFamily: "'Inter', sans-serif",
      padding: "4vh 4vw", boxSizing: "border-box", position: "relative",
      display: "grid", gridTemplateColumns: "1fr",
      gridTemplateRows: "auto auto 1fr auto", gap: "3vh", color: "#1E3A5F"
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700 }}>TD Advisory</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>WHY TD ADVISORY</div>
          <div>Slide 11 of 15</div>
        </div>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "1.5vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>Our Differentiators</div>
        <h2 style={{ fontSize: "3vw", fontWeight: 800, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>What Sets Us Apart</h2>
      </div>

      {/* Grid 2x3 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: "2vw" }}>
        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>01 · Embedded Model</div>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.25 }}>We Work Inside Your Organisation</div>
          <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>Not just reports and recommendations — we are on the ground, accountable alongside your team.</div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>02 · Senior Access</div>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.25 }}>Senior Consultants on Every Engagement</div>
          <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>No bait-and-switch. The experts who pitch are the experts who deliver — every time.</div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>03 · Local Context</div>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.25 }}>Deep Understanding of the Nigerian Market</div>
          <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>We know the regulatory environment, the talent landscape, and the operational realities of doing business in Nigeria.</div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>04 · Speed to Value</div>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.25 }}>Structured for Early Wins</div>
          <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>Our method is designed to surface quick improvements alongside long-term transformation — so you see return from the first engagement phase.</div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>05 · Knowledge Transfer</div>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.25 }}>We Build Capability, Not Dependency</div>
          <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>Every engagement is designed to leave your team stronger — with the tools, training, and confidence to sustain improvements independently.</div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>06 · Cross-Practice Depth</div>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "1.5vh", lineHeight: 1.25 }}>Integrated Expertise Across All Three Practices</div>
          <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>Operations, quality, and people problems are rarely separate — our cross-practice teams address them together.</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh", fontSize: "0.9vw", color: "#94A3B8", fontWeight: 500 }}>
        <div>TD Advisory · Confidential</div>
        <div>tdadvisory.co</div>
      </div>
    </div>
  );
}
