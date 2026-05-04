export default function Slide10Method() {
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
          <div>HOW WE WORK</div>
          <div>Slide 10 of 15</div>
        </div>
      </div>

      {/* Title */}
      <div>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "1.5vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>The TD Advisory Method</div>
        <h2 style={{ fontSize: "3vw", fontWeight: 800, margin: 0, lineHeight: 1.1, letterSpacing: "-0.02em" }}>A Four-Phase Engagement Model</h2>
      </div>

      {/* Four steps */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "2vw" }}>
        <div style={{ background: "#FFFFFF", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ backgroundColor: "#0D9488", padding: "2.5vh 2.5vw" }}>
            <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>01</div>
          </div>
          <div style={{ padding: "3vh 2.5vw", flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "2vh" }}>Discovery &amp; Audit</div>
            <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.65, flex: 1 }}>
              We spend time inside your organisation — mapping processes, interviewing stakeholders, and building a clear-eyed picture of the current state.
            </div>
            <div style={{ marginTop: "2.5vh", paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", color: "#0D9488", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>Output</div>
              <div style={{ fontSize: "1vw", color: "#64748B", marginTop: "0.5vh" }}>Diagnostic report + priority matrix</div>
            </div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ backgroundColor: "#0f7872", padding: "2.5vh 2.5vw" }}>
            <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>02</div>
          </div>
          <div style={{ padding: "3vh 2.5vw", flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "2vh" }}>Strategic Roadmap</div>
            <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.65, flex: 1 }}>
              A structured, prioritised action plan with clear owners, timelines, and measurable milestones — designed to deliver early wins while building toward long-term performance.
            </div>
            <div style={{ marginTop: "2.5vh", paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", color: "#0D9488", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>Output</div>
              <div style={{ fontSize: "1vw", color: "#64748B", marginTop: "0.5vh" }}>90-day plan + resource map</div>
            </div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ backgroundColor: "#1a5c55", padding: "2.5vh 2.5vw" }}>
            <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>03</div>
          </div>
          <div style={{ padding: "3vh 2.5vw", flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "2vh" }}>Execution Partnership</div>
            <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.65, flex: 1 }}>
              We work alongside your team to implement changes — providing expertise, accountability, and momentum through every step of the transformation.
            </div>
            <div style={{ marginTop: "2.5vh", paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", color: "#0D9488", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>Output</div>
              <div style={{ fontSize: "1vw", color: "#64748B", marginTop: "0.5vh" }}>Implemented systems + trained staff</div>
            </div>
          </div>
        </div>

        <div style={{ background: "#FFFFFF", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
          <div style={{ backgroundColor: "#1E3A5F", padding: "2.5vh 2.5vw" }}>
            <div style={{ fontSize: "2.5vw", fontWeight: 800, color: "#FFFFFF", lineHeight: 1 }}>04</div>
          </div>
          <div style={{ padding: "3vh 2.5vw", flex: 1, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "2vh" }}>Sustainable Handoff</div>
            <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.65, flex: 1 }}>
              Every engagement ends with your team owning the systems we built — with KPIs, documentation, and the capability to sustain and improve independently.
            </div>
            <div style={{ marginTop: "2.5vh", paddingTop: "2vh", borderTop: "1px solid #F1F5F9" }}>
              <div style={{ fontSize: "0.85vw", color: "#0D9488", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>Output</div>
              <div style={{ fontSize: "1vw", color: "#64748B", marginTop: "0.5vh" }}>KPI dashboard + handoff documentation</div>
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
