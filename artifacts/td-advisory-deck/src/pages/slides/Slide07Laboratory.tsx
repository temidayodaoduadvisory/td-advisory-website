export default function Slide07Laboratory() {
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
          <div>PRACTICE AREA 02</div>
          <div>Slide 7 of 15</div>
        </div>
      </div>

      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>Laboratory Management</div>
        <h2 style={{ fontSize: "2.8vw", fontWeight: 800, margin: "0 0 3vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Accreditation-Ready Quality Systems</h2>
        <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#475569", lineHeight: 1.65, margin: "0 0 3vh 0" }}>
          From new laboratory setup to ISO 15189 accreditation — we build the quality management infrastructure that clinical and diagnostic labs need to operate safely and compliantly.
        </p>
        <div style={{ background: "#0D9488", padding: "2.5vh 2.5vw", borderRadius: "0.8vw" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1vh" }}>Key Standard</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 800, color: "#FFFFFF" }}>ISO 15189</div>
          <div style={{ fontSize: "1vw", color: "rgba(255,255,255,0.8)", marginTop: "0.8vh", lineHeight: 1.5 }}>Medical laboratories — requirements for quality and competence</div>
        </div>
      </div>

      {/* Right — service list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh", justifyContent: "center" }}>
        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>01</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Laboratory Design &amp; Set-up</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Layout, workflow planning, equipment selection, and pre-opening readiness</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>02</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>ISO 15189 Accreditation Preparedness</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Gap analysis, documentation, staff training, and submission management</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>03</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>QMS Training for Lab Teams</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Build team competence in quality principles, document control, and standards compliance</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>04</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Internal Audits, Proficiency &amp; CAPA</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Structured audit programmes, external PT enrolment, and corrective action tracking</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>05</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Document Control &amp; Quality Manuals</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>SOPs, quality manuals, traceability systems, and version-controlled records</div>
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
