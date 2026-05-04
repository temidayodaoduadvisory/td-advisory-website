export default function Slide08HR() {
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
          <div>PRACTICE AREA 03</div>
          <div>Slide 8 of 15</div>
        </div>
      </div>

      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>Human Resources Support</div>
        <h2 style={{ fontSize: "2.8vw", fontWeight: 800, margin: "0 0 3vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Talent Strategy That Enables Growth</h2>
        <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#475569", lineHeight: 1.65, margin: "0 0 3vh 0" }}>
          We help organisations design the structures, develop the leaders, and implement the HR policies that turn people strategy into competitive advantage.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
            <div style={{ fontSize: "1.1vw", color: "#475569" }}>Org design built for execution, not org charts</div>
          </div>
          <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
            <div style={{ fontSize: "1.1vw", color: "#475569" }}>Leadership programs grounded in real scenarios</div>
          </div>
          <div style={{ display: "flex", gap: "1vw", alignItems: "center" }}>
            <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
            <div style={{ fontSize: "1.1vw", color: "#475569" }}>HR policies that hold up to regulatory scrutiny</div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh", justifyContent: "center" }}>
        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>01</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Organisational Design &amp; Restructuring</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Right-size roles, reporting lines, and spans of control for operational effectiveness</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>02</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Talent Management Strategy</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Attraction, retention, succession planning, and performance management frameworks</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>03</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Change Management</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Structured communication, stakeholder alignment, and adoption support for major transitions</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>04</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Leadership Development Programs</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Cohort and individual programmes designed around your business context</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>05</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>HR Policy &amp; Compliance</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Employee handbooks, contracts, and compliance frameworks aligned to Nigerian labour law</div>
          </div>
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
