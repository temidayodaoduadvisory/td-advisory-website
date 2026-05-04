export default function Slide15Closing() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#1E3A5F", fontFamily: "'Inter', sans-serif",
      padding: "4vh 4vw", boxSizing: "border-box", position: "relative",
      display: "grid", gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr auto", gap: "4vh", color: "#F8FAFC"
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255,255,255,0.12)", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#F8FAFC" }}>TD Advisory</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "rgba(248,250,252,0.4)" }}>
          <div>Slide 15 of 15</div>
        </div>
      </div>

      {/* Main */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "3vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>
          Thank You
        </div>
        <h2 style={{ fontSize: "5vw", fontWeight: 800, margin: "0 0 2vh 0", lineHeight: 1.05, letterSpacing: "-0.03em", color: "#F8FAFC", maxWidth: "70vw" }}>
          Let's Discuss Your Operations.
        </h2>
        <p style={{ fontSize: "1.4vw", fontWeight: 400, color: "rgba(248,250,252,0.65)", margin: "0 0 6vh 0", lineHeight: 1.6, maxWidth: "50vw" }}>
          We work with organisations that are serious about operational performance. If that's you, we'd like to hear from you.
        </p>

        {/* Contact bar */}
        <div style={{ display: "flex", gap: "0", background: "rgba(255,255,255,0.06)", borderRadius: "0.8vw", border: "1px solid rgba(255,255,255,0.12)", overflow: "hidden" }}>
          <div style={{ padding: "3.5vh 4vw", textAlign: "left", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(248,250,252,0.45)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Email</div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#F8FAFC" }}>enquiries@tdadvisory.co</div>
          </div>
          <div style={{ padding: "3.5vh 4vw", textAlign: "left", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(248,250,252,0.45)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Website</div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#F8FAFC" }}>tdadvisory.co</div>
          </div>
          <div style={{ padding: "3.5vh 4vw", textAlign: "left" }}>
            <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(248,250,252,0.45)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.2vh" }}>Office</div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#F8FAFC" }}>Gbagada Phase 1, Lagos</div>
          </div>
        </div>

        {/* Bottom badge */}
        <div style={{ marginTop: "5vh", display: "flex", alignItems: "center", gap: "2vw" }}>
          <div style={{ width: "1.5vw", height: "1px", backgroundColor: "rgba(248,250,252,0.3)" }} />
          <div style={{ fontSize: "1.05vw", color: "rgba(248,250,252,0.45)", fontWeight: 500, letterSpacing: "0.04em" }}>
            Operations · Quality · People
          </div>
          <div style={{ width: "1.5vw", height: "1px", backgroundColor: "rgba(248,250,252,0.3)" }} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid rgba(255,255,255,0.12)", paddingTop: "2vh", fontSize: "0.9vw", color: "rgba(248,250,252,0.35)", fontWeight: 500 }}>
        <div>TD Advisory · Confidential</div>
        <div>tdadvisory.co</div>
      </div>
    </div>
  );
}
