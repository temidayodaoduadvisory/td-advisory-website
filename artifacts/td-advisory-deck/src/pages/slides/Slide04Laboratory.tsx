export default function Slide04Laboratory() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">

      {/* Watermark number */}
      <div
        className="absolute right-[3vw] top-[0vh] font-display font-bold text-bg leading-none select-none"
        style={{ fontSize: "22vw", opacity: 0.04 }}
      >
        02
      </div>

      {/* Wordmark */}
      <div className="absolute top-[5vh] left-[8vw]">
        <span className="font-display text-[1.4vw] font-bold tracking-tight text-bg opacity-40">
          TD Advisory.
        </span>
      </div>

      {/* Accent horizontal line — top */}
      <div className="absolute top-0 left-0 right-0 h-[0.6vh] bg-accent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-[8vw] pt-[4vh]">

        {/* Label */}
        <div className="flex items-center gap-[1.2vw] mb-[2.5vh]">
          <div className="w-[2.5vw] h-[0.2vh] bg-accent" />
          <span className="font-body text-[1.5vw] font-light uppercase tracking-[0.22em] text-bg opacity-60">
            Practice Area 02
          </span>
        </div>

        {/* Title */}
        <h2 className="font-display text-[4vw] font-bold tracking-tight text-bg leading-[1.05] mb-[2vh]">
          Laboratory Management
        </h2>

        {/* Terracotta rule */}
        <div className="w-[7vw] h-[0.3vh] bg-accent mb-[3vh]" />

        {/* Description */}
        <p className="font-body text-[1.75vw] font-light text-bg opacity-70 leading-[1.5] mb-[3.5vh] max-w-[55vw]">
          Implement robust quality systems, achieve ISO certifications, and build a culture of continuous improvement.
        </p>

        {/* Bullets */}
        <ul className="flex flex-col gap-[1.8vh] max-w-[60vw]">
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-bg opacity-85 leading-[1.4]">Laboratory Design and Set-up</span>
          </li>
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-bg opacity-85 leading-[1.4]">ISO 15189 accreditation preparedness and implementation</span>
          </li>
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-bg opacity-85 leading-[1.4]">Quality management systems training for lab teams</span>
          </li>
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-bg opacity-85 leading-[1.4]">Internal audits, proficiency testing, and CAPA programs</span>
          </li>
          <li className="flex items-start gap-[1.5vw]">
            <span className="text-accent font-body text-[1.6vw] font-bold mt-[0.1vh] shrink-0">—</span>
            <span className="font-body text-[1.75vw] font-light text-bg opacity-85 leading-[1.4]">Document control, traceability, and quality manual development</span>
          </li>
        </ul>

      </div>

    </div>
  );
}
