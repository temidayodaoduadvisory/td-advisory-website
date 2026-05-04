export default function Slide05HR() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">

      {/* Watermark number */}
      <div
        className="absolute right-[5vw] top-[3vh] font-display font-bold text-primary leading-none select-none"
        style={{ fontSize: "22vw", opacity: 0.04 }}
      >
        03
      </div>

      {/* Thin terracotta top bar */}
      <div className="absolute top-0 left-0 right-0 h-[0.6vh] bg-accent" />

      {/* Wordmark */}
      <div className="absolute top-[5vh] left-[8vw]">
        <span className="font-display text-[1.4vw] font-bold tracking-tight text-primary opacity-40">
          TD Advisory.
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-[8vw] pt-[4vh]">

        {/* Label */}
        <div className="flex items-center gap-[1.2vw] mb-[2.5vh]">
          <div className="w-[2.5vw] h-[0.2vh] bg-accent" />
          <span className="font-body text-[1.5vw] font-light uppercase tracking-[0.22em] text-muted">
            Practice Area 03
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-[4vw] font-bold tracking-tight text-primary leading-[1.05] mb-[2vh]">
          Human Resources Support
        </h2>

        {/* Terracotta rule */}
        <div className="w-[7vw] h-[0.3vh] bg-accent mb-[3vh]" />

        {/* Description */}
        <p className="font-body text-[1.75vw] font-light text-muted leading-[1.5] mb-[3.5vh] max-w-[55vw]">
          Transform your workforce strategy with talent development, organisational design, and change management.
        </p>

        {/* Bullets */}
        <ul className="flex flex-col gap-[1.8vh] max-w-[55vw]">
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-text leading-[1.4]">Organisational design &amp; restructuring</span>
          </li>
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-text leading-[1.4]">Talent management strategy</span>
          </li>
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-text leading-[1.4]">Change management</span>
          </li>
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-text leading-[1.4]">Leadership development programs</span>
          </li>
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-text leading-[1.4]">HR policy &amp; compliance</span>
          </li>
        </ul>

      </div>

    </div>
  );
}
