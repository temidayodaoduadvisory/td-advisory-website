export function Minimal() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-10 p-10"
         style={{ background: "#F7F7F5", fontFamily: "'Inter', sans-serif" }}>
      <p style={{ fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "#0D9488", fontWeight: 600 }}>
        Minimal — Clean White
      </p>

      <div className="flex gap-8 items-start">
        {/* FRONT */}
        <div style={{
          width: 380, height: 220,
          background: "#FFFFFF",
          borderRadius: 4,
          padding: "30px 34px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <div style={{ fontSize: 17, color: "#1E3A5F", fontWeight: 600, letterSpacing: "-0.01em" }}>
                Temidayo Daodu
              </div>
              <div style={{ marginTop: 5, fontSize: 11, color: "#6B7280", letterSpacing: "0.03em" }}>
                Founder &amp; Principal Consultant
              </div>
            </div>
            <div style={{
              width: 36, height: 36, borderRadius: "50%",
              background: "#1E3A5F",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <span style={{ color: "#F5F0E8", fontSize: 13, fontWeight: 700, letterSpacing: "-0.02em" }}>TD</span>
            </div>
          </div>
          <div>
            <div style={{ height: 1, background: "#E5E7EB", marginBottom: 16 }} />
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <MinRow value="enquiries@tdadvisory.co" />
              <MinRow value="www.tdadvisory.co" />
            </div>
          </div>
        </div>

        {/* BACK */}
        <div style={{
          width: 380, height: 220,
          background: "#FFFFFF",
          borderRadius: 4,
          padding: "30px 34px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 8px 32px rgba(0,0,0,0.06)"
        }}>
          <div style={{
            width: 42, height: 42, borderRadius: "50%",
            background: "#1E3A5F",
            display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 4
          }}>
            <span style={{ color: "#F5F0E8", fontSize: 15, fontWeight: 700, letterSpacing: "-0.02em" }}>TD</span>
          </div>
          <div style={{ fontSize: 19, color: "#1E3A5F", fontWeight: 600, letterSpacing: "-0.01em" }}>
            TD Advisory
          </div>
          <div style={{ width: 24, height: 2, background: "#0D9488", borderRadius: 2 }} />
          <div style={{ fontSize: 10, color: "#9CA3AF", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: 2 }}>
            Operations · Quality · People
          </div>
        </div>
      </div>
    </div>
  );
}

function MinRow({ value }: { value: string }) {
  return (
    <div style={{ fontSize: 11, color: "#6B7280", letterSpacing: "0.01em" }}>{value}</div>
  );
}
