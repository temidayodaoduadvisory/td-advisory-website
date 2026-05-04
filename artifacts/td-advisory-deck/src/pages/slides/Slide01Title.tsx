export default function Slide01Title() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#FAFBFC", fontFamily: "'Inter', sans-serif",
      padding: "4vh 4vw", boxSizing: "border-box", position: "relative",
      display: "grid", gridTemplateColumns: "3fr 2fr",
      gridTemplateRows: "auto 1fr auto", gap: "4vh 4vw", color: "#1E3A5F"
    }}>
      {/* Header */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.02em" }}>TD Advisory</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>CAPABILITIES OVERVIEW</div>
          <div>2025</div>
        </div>
      </div>

      {/* Left — headline + KPI cards */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "1.5vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Operations · Quality · People
        </div>
        <h1 style={{ fontSize: "4.8vw", fontWeight: 800, margin: "0 0 1.5vh 0", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#1E3A5F" }}>
          Senior Expertise,
        </h1>
        <h1 style={{ fontSize: "4.8vw", fontWeight: 800, margin: "0 0 2.5vh 0", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#0D9488" }}>
          Without the Overhead.
        </h1>
        <p style={{ fontSize: "1.4vw", fontWeight: 400, color: "#475569", margin: "0 0 4vh 0", lineHeight: 1.55, maxWidth: "38vw" }}>
          TD Advisory partners with organisations to strengthen operations, achieve quality accreditations, and build high-performing teams.
        </p>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ background: "#FFFFFF", padding: "2.5vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", flex: 1, boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>Practice Areas</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.8vw" }}>
              <div style={{ fontSize: "3.2vw", fontWeight: 700, color: "#1E3A5F" }}>3</div>
              <div style={{ fontSize: "0.95vw", fontWeight: 600, color: "#0D9488", backgroundColor: "rgba(13,148,136,0.1)", padding: "0.4vh 0.7vw", borderRadius: "2vw" }}>Core</div>
            </div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "2.5vh 2vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", flex: 1, boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", marginBottom: "1vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>Services Offered</div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "0.8vw" }}>
              <div style={{ fontSize: "3.2vw", fontWeight: 700, color: "#1E3A5F" }}>10</div>
              <div style={{ fontSize: "0.95vw", fontWeight: 600, color: "#0D9488", backgroundColor: "rgba(13,148,136,0.1)", padding: "0.4vh 0.7vw", borderRadius: "2vw" }}>Disciplines</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right — visual panel */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ background: "#FFFFFF", padding: "4vh 3vw", borderRadius: "1vw", border: "1px solid #E2E8F0", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", boxSizing: "border-box", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#1E3A5F" }}>How We Serve Clients</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "3vh", marginTop: "2vh" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
              <div style={{ fontSize: "1.25vw", fontWeight: 500, color: "#334155" }}>Operations Strategy &amp; Optimisation</div>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#F1F5F9" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
              <div style={{ fontSize: "1.25vw", fontWeight: 500, color: "#334155" }}>Laboratory Management &amp; ISO 15189</div>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#F1F5F9" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
              <div style={{ fontSize: "1.25vw", fontWeight: 500, color: "#334155" }}>Human Resources &amp; Talent Development</div>
            </div>
            <div style={{ width: "100%", height: "1px", backgroundColor: "#F1F5F9" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
              <div style={{ fontSize: "1.25vw", fontWeight: 500, color: "#334155" }}>Business Strategy &amp; Market Access</div>
            </div>
          </div>
          <div style={{ marginTop: "3vh", paddingTop: "2vh", borderTop: "1px solid #F1F5F9", fontSize: "1vw", color: "#94A3B8", fontWeight: 500 }}>
            Lagos, Nigeria · enquiries@tdadvisory.co
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #E2E8F0", paddingTop: "2vh", fontSize: "0.9vw", color: "#94A3B8", fontWeight: 500 }}>
        <div>TD Advisory · Confidential</div>
        <div style={{ display: "flex", gap: "1vw" }}>
          <span>tdadvisory.co</span>
          <span>·</span>
          <span>Slide 1 of 15</span>
        </div>
      </div>
    </div>
  );
}
