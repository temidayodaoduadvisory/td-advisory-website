export default function Slide06Services() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-primary">

      {/* Accent top bar */}
      <div className="absolute top-0 left-0 right-0 h-[0.6vh] bg-accent" />

      {/* Wordmark */}
      <div className="absolute top-[5vh] left-[8vw]">
        <span className="font-display text-[1.4vw] font-bold tracking-tight text-bg opacity-40">
          TD Advisory.
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col pt-[13vh] px-[8vw] pb-[7vh]">

        {/* Header */}
        <div className="mb-[3vh]">
          <div className="flex items-center gap-[1.2vw] mb-[2vh]">
            <div className="w-[2.5vw] h-[0.2vh] bg-accent" />
            <span className="font-body text-[1.5vw] font-light uppercase tracking-[0.22em] text-bg opacity-60">
              Service Offerings
            </span>
          </div>
          <h2 className="font-display text-[3.5vw] font-bold tracking-tight text-bg leading-[1.05]">
            Ten Disciplines. One Standard of Work.
          </h2>
        </div>

        {/* Horizontal rule */}
        <div className="w-full h-[0.12vh] bg-bg opacity-15 mb-[3.5vh]" />

        {/* Two-column service grid */}
        <div className="flex gap-[6vw] flex-1">

          {/* Left column */}
          <div className="flex-1 flex flex-col gap-[2.2vh]">
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">01</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">Quality Management Systems Training</span>
            </div>
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">02</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">ISO 15189 Accreditation Preparedness</span>
            </div>
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">03</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">Operations Management</span>
            </div>
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">04</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">Process Design and Optimisation</span>
            </div>
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">05</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">Laboratory Design and Setup</span>
            </div>
          </div>

          {/* Vertical divider */}
          <div className="w-[0.1vw] bg-bg opacity-15 shrink-0" />

          {/* Right column */}
          <div className="flex-1 flex flex-col gap-[2.2vh]">
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">06</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">LIS and Healthcare Information Systems</span>
            </div>
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">07</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">Regulations and Registrations</span>
            </div>
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">08</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">Market Access and Penetration</span>
            </div>
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">09</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">Business Strategy</span>
            </div>
            <div className="flex items-baseline gap-[1.5vw]">
              <span className="font-body text-[1.3vw] font-light text-accent shrink-0 w-[3vw]">10</span>
              <span className="font-body text-[1.7vw] font-light text-bg opacity-85 leading-[1.3]">Team Building and Management</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
