export default function Slide08Closing() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">

      {/* Decorative vertical rule — right */}
      <div className="absolute right-[8vw] top-[10vh] w-[0.12vw] h-[55vh] bg-bg opacity-20" />

      {/* Decorative corner frame — bottom right */}
      <div className="absolute right-[6vw] bottom-[8vh] w-[8vw] h-[8vw] border border-bg opacity-10" />

      {/* Accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-[0.6vh] bg-accent" />

      {/* Wordmark — top left */}
      <div className="absolute top-[6vh] left-[8vw]">
        <span className="font-display text-[1.6vw] font-bold tracking-tight text-bg" style={{ opacity: 0.85 }}>
          TD Advisory.
        </span>
      </div>

      {/* Main content — vertically centred */}
      <div className="absolute inset-0 flex flex-col justify-center px-[8vw]">

        {/* Eyebrow */}
        <div className="flex items-center gap-[1.5vw] mb-[4vh]">
          <div className="w-[3.5vw] h-[0.2vh] bg-accent" />
          <span className="font-body text-[1.5vw] font-light uppercase tracking-[0.28em] text-bg opacity-70">
            Get in Touch
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-display text-[5.2vw] font-bold tracking-tight text-bg leading-[1.05] mb-[5vh]" style={{ textWrap: "balance" }}>
          Let's Discuss Your Operations.
        </h2>

        {/* Terracotta rule */}
        <div className="w-[10vw] h-[0.35vh] bg-accent mb-[5vh]" />

        {/* Contact details */}
        <div className="flex flex-col gap-[2.5vh]">
          <div className="flex items-center gap-[2vw]">
            <span className="font-body text-[1.5vw] font-light uppercase tracking-[0.18em] text-bg opacity-50 w-[8vw]">Email</span>
            <span className="font-display text-[2.2vw] font-bold text-bg">enquiries@tdadvisory.co</span>
          </div>
          <div className="flex items-center gap-[2vw]">
            <span className="font-body text-[1.5vw] font-light uppercase tracking-[0.18em] text-bg opacity-50 w-[8vw]">Office</span>
            <span className="font-display text-[2.2vw] font-bold text-bg">Gbagada Phase 1, Lagos NG</span>
          </div>
        </div>

      </div>

    </div>
  );
}
