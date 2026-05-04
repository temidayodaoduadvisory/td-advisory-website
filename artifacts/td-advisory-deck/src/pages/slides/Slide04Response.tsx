export default function Slide04Response() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#1E3A5F", fontFamily: "'Inter', sans-serif",
      padding: "4vh 4vw", boxSizing: "border-box", position: "relative",
      display: "grid", gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto 1fr auto", gap: "4vh 4vw", color: "#F8FAFC"
    }}>
      {/* Header */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#F8FAFC" }}>TD Advisory</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "rgba(248,250,252,0.5)" }}>
          <div>OUR RESPONSE</div>
          <div>Slide 4 of 15</div>
        </div>
      </div>

      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          What We Bring
        </div>
        <h2 style={{ fontSize: "3.5vw", fontWeight: 800, margin: "0 0 3.5vh 0", lineHeight: 1.1, letterSpacing: "-0.02em", color: "#F8FAFC" }}>
          Precision Consulting at Every Level of Your Organisation.
        </h2>
        <p style={{ fontSize: "1.3vw", fontWeight: 400, color: "rgba(248,250,252,0.7)", lineHeight: 1.65, margin: 0 }}>
          TD Advisory doesn't deliver reports and walk away. We embed with your team, map the reality of your operations, and co-build the systems and structures that create lasting performance.
        </p>
      </div>

      {/* Right */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh", justifyContent: "center" }}>
        <div style={{ background: "rgba(255,255,255,0.07)", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "1.5vh" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
            <div style={{ fontSize: "1.25vw", fontWeight: 700, color: "#F8FAFC" }}>Embedded Execution</div>
          </div>
          <div style={{ fontSize: "1.1vw", color: "rgba(248,250,252,0.65)", lineHeight: 1.55 }}>We work alongside your people — not just advising from the outside.</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.07)", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "1.5vh" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
            <div style={{ fontSize: "1.25vw", fontWeight: 700, color: "#F8FAFC" }}>Proven Frameworks</div>
          </div>
          <div style={{ fontSize: "1.1vw", color: "rgba(248,250,252,0.65)", lineHeight: 1.55 }}>ISO standards, Lean/Six Sigma, and best-practice HR systems — deployed practically.</div>
        </div>
        <div style={{ background: "rgba(255,255,255,0.07)", padding: "3vh 2.5vw", borderRadius: "0.8vw", border: "1px solid rgba(255,255,255,0.12)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5vw", marginBottom: "1.5vh" }}>
            <div style={{ width: "0.6vw", height: "0.6vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
            <div style={{ fontSize: "1.25vw", fontWeight: 700, color: "#F8FAFC" }}>Knowledge Transfer</div>
          </div>
          <div style={{ fontSize: "1.1vw", color: "rgba(248,250,252,0.65)", lineHeight: 1.55 }}>Every engagement builds internal capability — so you don't need us indefinitely.</div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "2vh", fontSize: "0.9vw", color: "rgba(248,250,252,0.4)", fontWeight: 500 }}>
        <div>TD Advisory · Confidential</div>
        <div>tdadvisory.co</div>
      </div>
    </div>
  );
}
