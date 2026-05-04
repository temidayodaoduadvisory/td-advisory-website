export default function Slide14NextSteps() {
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
          <div style={{ fontSize: "1.2vw", fontWeight: 700 }}>TD Advisory</div>
        </div>
        <div style={{ display: "flex", gap: "2vw", fontSize: "1vw", fontWeight: 500, color: "#64748B" }}>
          <div>NEXT STEPS</div>
          <div>Slide 14 of 15</div>
        </div>
      </div>

      {/* Left */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: "1.1vw", fontWeight: 600, color: "#0D9488", marginBottom: "2vh", textTransform: "uppercase", letterSpacing: "0.06em" }}>Getting Started</div>
        <h2 style={{ fontSize: "3.2vw", fontWeight: 800, margin: "0 0 3vh 0", lineHeight: 1.1, letterSpacing: "-0.02em" }}>Four Steps to Engagement</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          <div style={{ display: "flex", gap: "2vw", paddingBottom: "3vh", position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "#0D9488", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#FFFFFF" }}>1</div>
              </div>
              <div style={{ width: "2px", flex: 1, backgroundColor: "#E2E8F0", marginTop: "1vh" }} />
            </div>
            <div style={{ paddingTop: "0.8vh" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.8vh" }}>Initial Conversation</div>
              <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>30-minute call to understand your context and priorities — no obligation</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "2vw", paddingBottom: "3vh", position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.12)", borderRadius: "50%", border: "2px solid #0D9488", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0D9488" }}>2</div>
              </div>
              <div style={{ width: "2px", flex: 1, backgroundColor: "#E2E8F0", marginTop: "1vh" }} />
            </div>
            <div style={{ paddingTop: "0.8vh" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.8vh" }}>Scoping Workshop</div>
              <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>Structured session to map the challenge and agree the right engagement model</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "2vw", paddingBottom: "3vh", position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.12)", borderRadius: "50%", border: "2px solid #0D9488", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0D9488" }}>3</div>
              </div>
              <div style={{ width: "2px", flex: 1, backgroundColor: "#E2E8F0", marginTop: "1vh" }} />
            </div>
            <div style={{ paddingTop: "0.8vh" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.8vh" }}>Proposal &amp; Agreement</div>
              <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>Clear scope, deliverables, timeline, and commercial terms — typically within 5 business days</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: "2vw" }}>
            <div style={{ width: "3.5vw", height: "3.5vw", backgroundColor: "rgba(13,148,136,0.12)", borderRadius: "50%", border: "2px solid #0D9488", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 800, color: "#0D9488" }}>4</div>
            </div>
            <div style={{ paddingTop: "0.8vh" }}>
              <div style={{ fontSize: "1.2vw", fontWeight: 700, color: "#1E3A5F", marginBottom: "0.8vh" }}>Kick-off &amp; Discovery</div>
              <div style={{ fontSize: "1.05vw", color: "#475569", lineHeight: 1.6 }}>Work begins — our team on the ground, aligned to your priorities from day one</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5vh", justifyContent: "center" }}>
        <div style={{ background: "#FFFFFF", padding: "4vh 3vw", borderRadius: "0.8vw", border: "1px solid #E2E8F0", boxShadow: "0 0.4vh 1.2vh rgba(30,58,95,0.06)" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "2vh" }}>Ready to Start?</div>
          <div style={{ fontSize: "1.5vw", fontWeight: 700, color: "#1E3A5F", lineHeight: 1.3, marginBottom: "3vh" }}>Book a 30-minute exploratory call with our team</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
              <div style={{ fontSize: "1.1vw", color: "#475569" }}>enquiries@tdadvisory.co</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
              <div style={{ fontSize: "1.1vw", color: "#475569" }}>tdadvisory.co</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
              <div style={{ width: "0.5vw", height: "0.5vw", borderRadius: "50%", backgroundColor: "#0D9488", flexShrink: 0 }} />
              <div style={{ fontSize: "1.1vw", color: "#475569" }}>Gbagada Phase 1, Lagos NG</div>
            </div>
          </div>
        </div>

        <div style={{ background: "#0D9488", padding: "4vh 3vw", borderRadius: "0.8vw" }}>
          <div style={{ fontSize: "0.85vw", fontWeight: 600, color: "rgba(255,255,255,0.7)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "1.5vh" }}>Our Commitment</div>
          <div style={{ fontSize: "1.3vw", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4 }}>
            We respond to every enquiry within 24 hours — and we will be honest if we are not the right fit for your challenge.
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
