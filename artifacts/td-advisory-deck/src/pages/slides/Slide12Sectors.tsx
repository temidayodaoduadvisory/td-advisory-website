export default function Slide12Sectors() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#FAFBFC", fontFamily: "'Inter', sans-serif",
      padding: "4vh 4vw", boxSizing: "border-box", position: "relative",
      display: "grid", gridTemplateColumns: "2fr 3fr",
      gridTemplateRows: "auto 1fr auto", gap: "4vh 4vw", color: "#1E3A5F"
    }}>
      {/* Header */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700 }}>TD Advisory</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>SECTORS</div>
          <div>Slide 12 of 15</div>
        </div>
      </div>

      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>Who We Serve</div>
        <h2 style={{ fontSize: "2.8vw", fontWeight: 800, margin: "0 0 3vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Sector Focus</h2>
        <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#475569", lineHeight: 1.65, margin: "0 0 3vh 0" }}>
          We work across industries where operational rigour, quality systems, and people strategy are decisive competitive factors.
        </p>
        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.9vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>Primary Focus</div>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.3 }}>Healthcare &amp; Diagnostics — including private hospitals, diagnostic chains, and laboratory networks</div>
        </div>
      </div>

      {/* Right — sector cards */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2vw", alignContent: "center" }}>
        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Healthcare</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.3, marginBottom: "1vh" }}>Hospitals &amp; Diagnostics</div>
          <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.55 }}>Quality accreditation, lab management, and operational improvement for clinical environments</div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Financial Services</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.3, marginBottom: "1vh" }}>Banks &amp; Fintechs</div>
          <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.55 }}>Process optimisation, organisational design, and compliance-driven HR frameworks</div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Manufacturing</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.3, marginBottom: "1vh" }}>Production &amp; Supply Chain</div>
          <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.55 }}>Lean implementation, supply chain redesign, and QMS deployment for industrial operations</div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#0D9488", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Education &amp; NGOs</div>
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.3, marginBottom: "1vh" }}>Institutions &amp; Development Orgs</div>
          <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.55 }}>HR structuring, change management, and operational governance for mission-driven organisations</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh", fontSize: "0.9vw", color: "#94A3B8", fontWeight: 500 }}>
        <div>TD Advisory · Confidential</div>
        <div>tdadvisory.co</div>
      </div>
    </div>
  );
}
