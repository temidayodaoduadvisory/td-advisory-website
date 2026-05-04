export default function Slide02WhoWeAre() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">

      {/* Thin terracotta top bar */}
      <div className="absolute top-0 left-0 right-0 h-[0.6vh] bg-accent" />

      {/* Wordmark — top left */}
      <div className="absolute top-[5vh] left-[8vw]">
        <span className="font-display text-[1.4vw] font-bold tracking-tight text-primary opacity-40">
          TD Advisory.
        </span>
      </div>

      {/* Two-column layout */}
      <div className="absolute inset-0 flex items-center px-[8vw] pt-[4vh] gap-[6vw]">

        {/* Left column — large editorial quote */}
        <div className="w-[45%] flex flex-col">
          <div className="w-[2.5vw] h-[0.3vh] bg-accent mb-[4vh]" />
          <h2
            className="font-display text-[3.2vw] font-bold italic text-primary leading-[1.15] tracking-tight"
            style={{ textWrap: "balance" }}
          >
            "Complexity is the enemy of execution."
          </h2>
          <div className="mt-[4vh] w-[2vw] h-[0.2vh] bg-accent" />
          <p className="mt-[2vh] font-body text-[1.5vw] font-light uppercase tracking-[0.22em] text-muted">
            Our Founding Belief
          </p>
        </div>

        {/* Vertical divider */}
        <div className="w-[0.1vw] h-[50vh] bg-primary opacity-15 shrink-0" />

        {/* Right column — about text */}
        <div className="w-[45%] flex flex-col gap-[3vh]">
          <p className="font-body text-[1.8vw] font-light text-text leading-[1.65]">
            Founded on the belief that operational excellence drives sustainable growth, TD Advisory partners with organizations to unlock their full potential.
          </p>
          <p className="font-body text-[1.8vw] font-light text-text leading-[1.65]">
            We bring deep expertise in operations, quality management, and human resources to help organizations thrive.
          </p>
        </div>

      </div>

    </div>
  );
}
