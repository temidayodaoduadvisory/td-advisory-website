export default function Slide13EngagementModels() {
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
          <div>ENGAGEMENT MODELS</div>
          <div>Slide 13 of 15</div>
        </div>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "1.5vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>How to Work With Us</div>
        <h2 style={{ fontSize: "3vw", fontWeight: 800, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>Three Ways to Engage</h2>
      </div>

      {/* Three engagement models */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vw" }}>
        <div style={{ background: "#FFFFFF", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ backgroundColor: "#0D9488", padding: "3vh 3vw" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1vh" }}>Model A</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1 }}>Project Engagement</div>
          </div>
          <div style={{ padding: "3.5vh 3vw", flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.65 }}>
              A defined scope, fixed timeline, and clear deliverables. Ideal for one-time transformations, audits, or accreditation preparation.
            </div>
            <div style={{ paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Best for</div>
              <div style={{ fontSize: "1.05vw", color: "#334155", lineHeight: 1.6 }}>Process redesigns · ISO readiness · HR policy builds · Org restructuring</div>
            </div>
            <div style={{ paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Duration</div>
              <div style={{ fontSize: "1.05vw", color: "#334155" }}>4 – 16 weeks, milestone-based</div>
            </div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", borderRadius: "0.8vw", border: "2px solid #0D9488", boxShadow: "0 0.4vh 2vh rgba(13,148,136,0.15)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ backgroundColor: "#1E3A5F", padding: "3vh 3vw" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1vh" }}>Model B · Most Popular</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1 }}>Retainer Partnership</div>
          </div>
          <div style={{ padding: "3.5vh 3vw", flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.65 }}>
              Ongoing senior advisory access on a monthly basis. Your team gets embedded expertise without the cost of a full-time executive hire.
            </div>
            <div style={{ paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Best for</div>
              <div style={{ fontSize: "1.05vw", color: "#334155", lineHeight: 1.6 }}>Scaling organisations · Operations outsourcing · Ongoing quality oversight</div>
            </div>
            <div style={{ paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Duration</div>
              <div style={{ fontSize: "1.05vw", color: "#334155" }}>3-month minimum, rolling monthly</div>
            </div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div style={{ backgroundColor: "#475569", padding: "3vh 3vw" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1vh" }}>Model C</div>
            <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1 }}>Training &amp; Workshops</div>
          </div>
          <div style={{ padding: "3.5vh 3vw", flex: 1, display: "flex", flexDirection: "column", gap: "2.5vh" }}>
            <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.65 }}>
              Structured training programmes and facilitated workshops for leadership teams, quality staff, or entire departments.
            </div>
            <div style={{ paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Best for</div>
              <div style={{ fontSize: "1.05vw", color: "#334155", lineHeight: 1.6 }}>QMS training · Leadership programmes · Change management cohorts</div>
            </div>
            <div style={{ paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Duration</div>
              <div style={{ fontSize: "1.05vw", color: "#334155" }}>1-day to 12-week programmes</div>
            </div>
          </div>
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
