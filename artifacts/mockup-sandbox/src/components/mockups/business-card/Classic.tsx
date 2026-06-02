export function Classic() {
  return (
    <div className="min-h-screen bg-[#F0EBE1] flex flex-col items-center justify-center gap-10 p-10"
         style={{ fontFamily: "'Inter', sans-serif" }}>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0D9488", fontWeight: 600 }}>
        Classic — Forest &amp; Cream
      </p>

      <div className="flex gap-8 items-start">
        {/* FRONT */}
        <div style={{
          width: 380, height: 220,
          background: "#1E3A5F",
          borderRadius: 6,
          padding: "32px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 8px 40px rgba(30,58,95,0.3)"
        }}>
          <div>
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 22, color: "#F5F0E8", letterSpacing: "0.02em", fontWeight: 400, lineHeight: 1.2 }}>
              Temidayo Daodu
            </div>
            <div style={{ marginTop: 6, fontSize: 11, color: "#0D9488", letterSpacing: "0.12em", textTransform: "uppercase", fontWeight: 600 }}>
              Founder &amp; Principal Consultant
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <div style={{ width: 28, height: 2, background: "#0D9488", marginBottom: 10 }} />
            <div style={{ fontFamily: "'Georgia', serif", fontSize: 22, color: "#F5F0E8", letterSpacing: "0.05em" }}>
              TD Advisory.
            </div>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          width: 380, height: 220,
          background: "#F5F0E8",
          borderRadius: 6,
          padding: "32px 36px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 8px 40px rgba(30,58,95,0.12)",
          border: "1px solid rgba(30,58,95,0.1)"
        }}>
          <div style={{ fontFamily: "'Georgia', serif", fontSize: 20, color: "#1E3A5F", letterSpacing: "0.03em" }}>
            TD Advisory.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
            <Row label="E" value="enquiries@tdadvisory.co" />
            <Row label="W" value="www.tdadvisory.co" />
            <Row label="T" value="+234 — — — — — —" muted />
          </div>
          <div style={{ fontSize: 9, color: "#1E3A5F", opacity: 0.4, letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Operations · Quality · People
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: string; muted?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span style={{ fontSize: 9, color: "#0D9488", fontWeight: 700, letterSpacing: "0.1em", width: 10 }}>{label}</span>
      <span style={{ fontSize: 11, color: muted ? "#1E3A5F60" : "#1E3A5F", letterSpacing: "0.02em" }}>{value}</span>
    </div>
  );
}
