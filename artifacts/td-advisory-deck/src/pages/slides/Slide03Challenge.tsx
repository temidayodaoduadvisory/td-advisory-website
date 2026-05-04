export default function Slide03Challenge() {
  return (
    <div style={{
      width: "100vw", height: "100vh", overflow: "hidden",
      backgroundColor: "#FAFBFC", fontFamily: "'Inter', sans-serif",
      padding: "4vh 4vw", boxSizing: "border-box", position: "relative",
      display: "grid", gridTemplateColumns: "1fr",
      gridTemplateRows: "auto 1fr auto", gap: "3vh", color: "#1E3A5F"
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid #E2E8F0", paddingBottom: "2vh" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1vw" }}>
          <div style={{ width: "2vw", height: "2vw", backgroundColor: "#0D9488", borderRadius: "0.4vw" }} />
          <div style={{ fontSize: "1.2vw", fontWeight: 700 }}>TD Advisory</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>THE CHALLENGE</div>
          <div>Slide 3 of 15</div>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ textAlign: "center", marginBottom: "4vh" }}>
          <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "1.5vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            What Organisations Face
          </div>
          <h2 style={{ fontSize: "3.2vw", fontWeight: 800, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
            Three Persistent Barriers to Growth
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2.5vw", flex: 1 }}>
          <div style={{ background: "#FFFFFF", padding: "4vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
            <div style={{ width: "4vw", height: "4vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "3vh" }}>
              <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#0D9488" }}>01</div>
            </div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "2vh", lineHeight: 1.25 }}>Operational Inefficiency</div>
            <div style={{ fontSize: "1.15vw", fontWeight: 400, color: "#475569", lineHeight: 1.6 }}>
              Processes are undocumented, inconsistent, or siloed — leading to rework, delays, and cost overruns that compound over time.
            </div>
          </div>

          <div style={{ background: "#FFFFFF", padding: "4vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
            <div style={{ width: "4vw", height: "4vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "3vh" }}>
              <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#0D9488" }}>02</div>
            </div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "2vh", lineHeight: 1.25 }}>Quality System Gaps</div>
            <div style={{ fontSize: "1.15vw", fontWeight: 400, color: "#475569", lineHeight: 1.6 }}>
              Laboratories and healthcare organisations lack the structured quality management systems required for accreditation, regulatory compliance, and patient safety.
            </div>
          </div>

          <div style={{ background: "#FFFFFF", padding: "4vh 2.5vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", display: "flex", flexDirection: "column" }}>
            <div style={{ width: "4vw", height: "4vw", backgroundColor: "rgba(13,148,136,0.1)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "3vh" }}>
              <div style={{ fontSize: "1.8vw", fontWeight: 800, color: "#0D9488" }}>03</div>
            </div>
            <div style={{ fontSize: "1.4vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "2vh", lineHeight: 1.25 }}>Talent &amp; People Risk</div>
            <div style={{ fontSize: "1.15vw", fontWeight: 400, color: "#475569", lineHeight: 1.6 }}>
              Rapid growth exposes weaknesses in structure, leadership pipelines, and HR policy — creating compliance risk and slowing execution when it matters most.
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
