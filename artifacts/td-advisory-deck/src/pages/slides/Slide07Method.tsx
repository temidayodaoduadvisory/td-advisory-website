export default function Slide07Method() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-bg">

      {/* Thin terracotta top bar */}
      <div className="absolute top-0 left-0 right-0 h-[0.6vh] bg-accent" />

      {/* Wordmark */}
      <div className="absolute top-[5vh] left-[8vw]">
        <span className="font-display text-[1.4vw] font-bold tracking-tight text-primary opacity-40">
          TD Advisory.
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-[8vw]">

        {/* Header */}
        <div className="mb-[5vh]">
          <div className="flex items-center gap-[1.2vw] mb-[2.5vh]">
            <div className="w-[2.5vw] h-[0.2vh] bg-accent" />
            <span className="font-body text-[1.5vw] font-light uppercase tracking-[0.22em] text-muted">
              How We Work
            </span>
          </div>
          <h2 className="font-display text-[3.5vw] font-bold tracking-tight text-primary leading-[1.05]">
            The TD Advisory Method
          </h2>
        </div>

        {/* Four steps — horizontal */}
        <div className="flex gap-[3vw]">

          {/* Step 01 */}
          <div className="flex-1 flex flex-col">
            <div className="w-full h-[0.2vh] bg-primary opacity-15 mb-[3vh]" />
            <span className="font-display text-[3.5vw] font-bold text-accent leading-none mb-[2.5vh]">01</span>
            <h3 className="font-display text-[1.9vw] font-bold text-primary leading-[1.2] mb-[2vh]">
              Discovery &amp; Audit
            </h3>
            <p className="font-body text-[1.6vw] font-light text-muted leading-[1.55]">
              We map the reality of your current state.
            </p>
          </div>

          {/* Step 02 */}
          <div className="flex-1 flex flex-col">
            <div className="w-full h-[0.2vh] bg-primary opacity-15 mb-[3vh]" />
            <span className="font-display text-[3.5vw] font-bold text-accent leading-none mb-[2.5vh]">02</span>
            <h3 className="font-display text-[1.9vw] font-bold text-primary leading-[1.2] mb-[2vh]">
              Strategic Roadmap
            </h3>
            <p className="font-body text-[1.6vw] font-light text-muted leading-[1.55]">
              A prioritised, pragmatic action plan with clear ROI.
            </p>
          </div>

          {/* Step 03 */}
          <div className="flex-1 flex flex-col">
            <div className="w-full h-[0.2vh] bg-primary opacity-15 mb-[3vh]" />
            <span className="font-display text-[3.5vw] font-bold text-accent leading-none mb-[2.5vh]">03</span>
            <h3 className="font-display text-[1.9vw] font-bold text-primary leading-[1.2] mb-[2vh]">
              Execution Partnership
            </h3>
            <p className="font-body text-[1.6vw] font-light text-muted leading-[1.55]">
              We work alongside your team to implement changes.
            </p>
          </div>

          {/* Step 04 */}
          <div className="flex-1 flex flex-col">
            <div className="w-full h-[0.2vh] bg-primary opacity-15 mb-[3vh]" />
            <span className="font-display text-[3.5vw] font-bold text-accent leading-none mb-[2.5vh]">04</span>
            <h3 className="font-display text-[1.9vw] font-bold text-primary leading-[1.2] mb-[2vh]">
              Sustainable Handoff
            </h3>
            <p className="font-body text-[1.6vw] font-light text-muted leading-[1.55]">
              We train your people and establish KPIs for lasting improvement.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
