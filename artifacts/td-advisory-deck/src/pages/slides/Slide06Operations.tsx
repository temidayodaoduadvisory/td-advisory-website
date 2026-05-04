export default function Slide06Operations() {
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
          <div>PRACTICE AREA 01</div>
          <div>Slide 6 of 15</div>
        </div>
      </div>

      {/* Left — header block */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>Operations Consulting</div>
        <h2 style={{ fontSize: "2.8vw", fontWeight: 800, margin: "0 0 3vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Operational Excellence at Every Layer</h2>
        <p style={{ fontSize: "1.2vw", fontWeight: 400, color: "#475569", lineHeight: 1.65, margin: "0 0 3vh 0" }}>
          We map, redesign, and optimise the systems that drive your day-to-day performance — from front-line processes to strategic supply chains.
        </p>
        <div style={{ display: "flex", gap: "2vw" }}>
          <div style={{ background: "#FFFFFF", padding: "2vh 1.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", flex: 1, textAlign: "center", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
            <div style={{ fontSize: "2.2vw", fontWeight: 800, color: "#0D9488" }}>5</div>
            <div style={{ fontSize: "0.85vw", color: "#64748B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "0.5vh" }}>Service lines</div>
          </div>
          <div style={{ background: "#FFFFFF", padding: "2vh 1.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", flex: 1, textAlign: "center", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
            <div style={{ fontSize: "2.2vw", fontWeight: 800, color: "#0D9488" }}>All</div>
            <div style={{ fontSize: "0.85vw", color: "#64748B", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "0.5vh" }}>Sectors</div>
          </div>
        </div>
      </div>

      {/* Right — service list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2vh", justifyContent: "center" }}>
        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>01</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Process Mapping &amp; Optimisation</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Document, analyse, and redesign core business processes for speed and reliability</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>02</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Supply Chain Management</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Build resilient, cost-efficient supply chains from procurement to last-mile delivery</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>03</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Lean &amp; Six Sigma Implementation</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Eliminate waste, reduce variation, and build a culture of continuous improvement</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>04</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Operations Office Outsourcing</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Embedded operations leadership for organisations without a dedicated COO function</div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", padding: "2.5vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", display: "flex", alignItems: "center", gap: "2vw", boxShadow: "0 0.3vh 0.8vh rgba(30,58,95,0.05)" }}>
          <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.08)", borderRadius: "0.6vw", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 800, color: "#0D9488" }}>05</div>
          </div>
          <div>
            <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.5vh" }}>Performance Measurement Systems</div>
            <div style={{ fontSize: "1vw", color: "#64748B", lineHeight: 1.5 }}>Design KPI frameworks and dashboards that give leadership real-time operational visibility</div>
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
