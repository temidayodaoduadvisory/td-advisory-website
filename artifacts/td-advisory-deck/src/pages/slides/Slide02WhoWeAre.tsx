export default function Slide02WhoWeAre() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#FAFBFC", fontFamily: "'Inter', sans-serif",
      padding: "4vh 4vw", boxSizing: "border-box", position: "relative",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto 1fr auto", gap: "4vh 4vw", color: "#1E3A5F"
    }}>
      {/* Header */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700, letterSpacing: "0.02em" }}>TD Advisory</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>WHO WE ARE</div>
          <div>Slide 2 of 15</div>
        </div>
      </div>

      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          About TD Advisory
        </div>
        <h2 style={{ fontSize: "3.4vw", fontWeight: 800, margin: "0 0 3vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>
          Built on the Belief That Complexity Is the Enemy of Execution.
        </h2>
        <p style={{ fontSize: "1.3vw", fontWeight: 400, color: "#475569", margin: "0 0 3vh 0", lineHeight: 1.65 }}>
          Founded in Lagos, TD Advisory was created for organisations that need senior consulting capability without the cost and bureaucracy of large firms.
        </p>
        <p style={{ fontSize: "1.3vw", fontWeight: 400, color: "#475569", margin: 0, lineHeight: 1.65 }}>
          We bring deep, hands-on expertise in operations, laboratory quality systems, and human resources — working directly inside our clients' organisations to drive lasting change.
        </p>
      </div>

      {/* Right */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh", justifyContent: "center" }}>
        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", marginBottom: "0.8vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>Our model</div>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.3 }}>Senior-level advisors, embedded with your team</div>
        </div>
        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", marginBottom: "0.8vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>Our focus</div>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.3 }}>Practical outcomes, not theoretical frameworks</div>
        </div>
        <div style={{ background: "#FFFFFF", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", marginBottom: "0.8vh", textTransform: "uppercase", letterSpacing: "0.05em" }}>Our location</div>
          <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.3 }}>Gbagada Phase 1, Lagos — serving clients across Nigeria</div>
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
