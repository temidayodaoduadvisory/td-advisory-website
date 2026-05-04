export default function Slide01Title() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">

      {/* Decorative vertical rule — right side */}
      <div className="absolute right-[8vw] top-[10vh] w-[0.12vw] h-[55vh] bg-bg opacity-20" />

      {/* Decorative corner frame — bottom right */}
      <div className="absolute right-[6vw] bottom-[8vh] w-[8vw] h-[8vw] border border-bg opacity-10" />

      {/* Wordmark — top left */}
      <div className="absolute top-[6vh] left-[8vw]">
        <span className="font-display text-[1.6vw] font-bold tracking-tight text-bg" style={{ opacity: 0.85 }}>
          TD Advisory.
        </span>
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col justify-center px-[8vw]">

        {/* Eyebrow */}
        <div className="flex items-center gap-[1.5vw] mb-[4vh]">
          <div className="w-[3.5vw] h-[0.2vh] bg-accent" />
          <span className="font-body text-[1.5vw] font-light uppercase tracking-[0.28em] text-bg opacity-70">
            Capabilities Overview
          </span>
        </div>

        {/* Headline line 1 */}
        <h1 className="font-display text-[6.5vw] font-bold tracking-tight text-bg leading-[0.95] mb-[0.5vh]">
          Senior Expertise,
        </h1>

        {/* Headline line 2 — italic accent */}
        <h1 className="font-display text-[6.5vw] font-normal italic tracking-tight text-accent leading-[0.95] mb-[5vh]">
          Without the Overhead.
        </h1>

        {/* Terracotta rule */}
        <div className="w-[10vw] h-[0.35vh] bg-accent mb-[5vh]" />

        {/* Tagline */}
        <p className="font-body text-[1.7vw] font-light text-bg opacity-65 tracking-widest">
          Operations&nbsp;·&nbsp;Quality&nbsp;·&nbsp;People&nbsp;·&nbsp;Lagos, Nigeria
        </p>
      </div>

    </div>
  );
}
