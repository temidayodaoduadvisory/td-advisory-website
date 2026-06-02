export function Bold() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-10"
         style={{ background: "#111827", fontFamily: "'Inter', sans-serif" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0D9488", fontWeight: 600 }}>
        Bold — Dark with Teal Accent
      </p>

      <div className="flex gap-8 items-start">
        {/* FRONT */}
        <div style={{
          width: 380, height: 220,
          background: "#0D0D0D",
          borderRadius: 6,
          padding: "28px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 0 0 1px #0D9488, 0 16px 60px rgba(0,0,0,0.6)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", top: 0, right: 0,
            width: 120, height: 120,
            borderRadius: "0 6px 0 100%",
            background: "linear-gradient(135deg, #0D9488 0%, #065f54 100%)",
            opacity: 0.15
          }} />
          <div>
            <div style={{ fontSize: 10, color: "#0D9488", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700, marginBottom: 8 }}>
              TD Advisory
            </div>
            <div style={{ fontSize: 24, color: "#FFFFFF", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>
              Temidayo<br />Daodu
            </div>
          </div>
          <div>
            <div style={{ width: 32, height: 3, background: "#0D9488", marginBottom: 8, borderRadius: 2 }} />
            <div style={{ fontSize: 11, color: "#9CA3AF", letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Founder &amp; Principal Consultant
            </div>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          width: 380, height: 220,
          background: "#0D9488",
          borderRadius: 6,
          padding: "28px 32px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 16px 60px rgba(13,148,136,0.35)",
          position: "relative",
          overflow: "hidden"
        }}>
          <div style={{
            position: "absolute", bottom: -20, left: -20,
            width: 140, height: 140, borderRadius: "50%",
            background: "rgba(0,0,0,0.15)"
          }} />
          <div style={{ fontSize: 26, color: "#FFFFFF", fontWeight: 800, letterSpacing: "-0.02em" }}>
            TD Advisory.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <BoldRow value="enquiries@tdadvisory.co" />
            <BoldRow value="www.tdadvisory.co" />
          </div>
          <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            Operations · Quality · People
          </div>
        </div>
      </div>
    </div>
  );
}

function BoldRow({ value }: { value: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.5)" }} />
      <span style={{ fontSize: 12, color: "#FFFFFF", fontWeight: 500, letterSpacing: "0.01em" }}>{value}</span>
    </div>
  );
}
