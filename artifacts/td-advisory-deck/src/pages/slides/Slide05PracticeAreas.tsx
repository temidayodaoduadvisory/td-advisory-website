export default function Slide05PracticeAreas() {
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
          <div>PRACTICE AREAS</div>
          <div>Slide 5 of 15</div>
        </div>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "1.5vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>Three Core Practices</div>
        <h2 style={{ fontSize: "3vw", fontWeight: 800, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>Where We Focus Our Expertise</h2>
      </div>

      {/* Three columns */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vw" }}>
        <div style={{ background: "#FFFFFF", padding: "4vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Practice 01</div>
          <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#1E3A5F", marginBottom: "2.5vh", lineHeight: 1.15, letterSpacing: "-0.01em" }}>Operations Consulting</div>
          <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.6, flex: 1 }}>
            Streamline processes, optimise supply chains, and embed performance systems that scale with your organisation.
          </div>
          <div style={{ marginTop: "3vh", paddingTop: "2.5vh", borderTop: "1px solid #F1F5F9" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Includes</div>
            <div style={{ fontSize: "1vw", color: "#475569", lineHeight: 1.7 }}>Process mapping · Supply chain · Lean/Six Sigma · Outsourcing</div>
          </div>
        </div>

        <div style={{ background: "#0D9488", padding: "4vh 2.5vw", borderRadius: "0.8vw", boxShadow: "0 0.4vh 2vh rgba(13,148,136,0.25)", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Practice 02</div>
          <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#FFFFFF", marginBottom: "2.5vh", lineHeight: 1.15, letterSpacing: "-0.01em" }}>Laboratory Management</div>
          <div style={{ fontSize: "1.1vw", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, flex: 1 }}>
            Design, set up, and accredit clinical and diagnostic laboratories to international standards including ISO 15189.
          </div>
          <div style={{ marginTop: "3vh", paddingTop: "2.5vh", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(255,255,255,0.6)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Includes</div>
            <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}>Lab design · ISO 15189 · QMS training · Internal audits</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "4vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1.5vh" }}>Practice 03</div>
          <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#1E3A5F", marginBottom: "2.5vh", lineHeight: 1.15, letterSpacing: "-0.01em" }}>Human Resources Support</div>
          <div style={{ fontSize: "1.1vw", color: "#475569", lineHeight: 1.6, flex: 1 }}>
            Design organisations, build leadership capacity, and create HR policy frameworks that attract and retain talent.
          </div>
          <div style={{ marginTop: "3vh", paddingTop: "2.5vh", borderTop: "1px solid #F1F5F9" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Includes</div>
            <div style={{ fontSize: "1vw", color: "#475569", lineHeight: 1.7 }}>Org design · Talent strategy · Change management · Leadership</div>
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
