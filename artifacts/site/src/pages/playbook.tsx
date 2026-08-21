import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/navbar";
import coverImg from "@/assets/playbook-cover.webp";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/motion";
import {
  ABOUT,
  AUDIENCE,
  CHECKOUT_TRUST_LINE,
  FAQ,
  FINAL_CTA,
  HERO,
  MODULES,
  MODULES_SECTION,
  OUTCOMES,
  PRICING,
  PROBLEM,
  PRODUCT_NAME,
  SHIFTS,
  TIERS,
  TOOLKIT,
  withUtm,
  type Tier,
} from "@/content/playbook";

const scrollToPricing = () =>
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });

/**
 * Product cover art. Source is an A4-proportioned (1414x2000) design, resized
 * and served as WebP — 43 KB against the 1.4 MB original, which matters on a
 * page whose audience is mostly on mobile data.
 */
function PlaybookCover() {
  return (
    <img
      src={coverImg}
      alt={`${PRODUCT_NAME} — cover`}
      width={1414}
      height={2000}
      loading="eager"
      decoding="async"
      className="w-full max-w-sm mx-auto shadow-2xl"
    />
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-32 pb-20 md:pt-40 md:pb-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-px bg-accent" />
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              {HERO.eyebrow}
            </span>
          </div>

          <h1 className="font-serif leading-[0.95] tracking-tight text-[clamp(38px,4.6vw,72px)] mb-8">
            {HERO.headlineLines.map((line, i) => (
              <span
                key={i}
                className={`block ${line.italic ? "italic text-accent" : "text-primary"}`}
              >
                {line.text}
              </span>
            ))}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mb-6">
            {HERO.intro}
          </p>
          <p className="text-base md:text-lg font-serif text-primary max-w-xl mb-10">
            {HERO.summary}
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="rounded-none text-base h-14 px-8 bg-primary hover:bg-primary/90"
              onClick={scrollToPricing}
            >
              {HERO.cta}
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-none text-base h-14 px-8 hover:bg-primary/5 group text-primary"
              onClick={() =>
                document.getElementById("modules")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {HERO.secondaryCta}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        <FadeIn delay={0.15}>
          <PlaybookCover />
        </FadeIn>
      </div>

      {/* Positioning shifts — the "Reactive → Intentional" strip. */}
      <div className="max-w-7xl mx-auto mt-20 md:mt-28 border-t border-border pt-12">
        <FadeIn>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-6">
            {SHIFTS.map((shift) => (
              <li key={shift.from}>
                <span className="block text-sm text-muted-foreground line-through decoration-muted-foreground/40">
                  {shift.from}
                </span>
                <span className="block font-serif text-lg text-primary mt-1">
                  {shift.to}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}

function Problem() {
  return (
    <section id="problem" className="scroll-mt-20 py-24 md:py-32 bg-primary text-primary-foreground px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
            {PROBLEM.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight">
            {PROBLEM.heading}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          {PROBLEM.lead.map((p) => (
            <p key={p} className="text-lg text-primary-foreground/80 mb-5 leading-relaxed">
              {p}
            </p>
          ))}
        </FadeIn>

        <FadeIn delay={0.2}>
          <ul className="my-12 space-y-4 border-l border-accent/40 pl-6">
            {PROBLEM.symptoms.map((s) => (
              <li key={s} className="font-serif text-xl md:text-2xl text-primary-foreground/90">
                {s}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.3}>
          {PROBLEM.close.map((p) => (
            <p key={p} className="text-lg text-primary-foreground/80 mb-5 leading-relaxed">
              {p}
            </p>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

function Modules() {
  return (
    <section id="modules" className="scroll-mt-20 py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16 md:mb-20">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
              {MODULES_SECTION.eyebrow}
            </span>
            <h2 className="text-4xl md:text-6xl font-serif text-primary whitespace-pre-line">
              {MODULES_SECTION.heading}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {MODULES.map((m, i) => (
            <FadeIn key={m.number} delay={(i % 2) * 0.1}>
              <article className="border-t border-border pt-6">
                <span className="font-serif text-accent text-lg">{m.number}</span>
                <h3 className="font-serif text-2xl md:text-3xl text-primary mt-2 mb-3">
                  {m.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{m.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <section id="toolkit" className="scroll-mt-20 py-24 md:py-32 bg-secondary px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <FadeIn>
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
              {TOOLKIT.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
              {TOOLKIT.heading}
            </h2>
            {TOOLKIT.lead.map((p) => (
              <p key={p} className="text-lg text-muted-foreground mb-5 leading-relaxed">
                {p}
              </p>
            ))}
            <p className="font-serif text-xl text-primary mt-10">{TOOLKIT.close}</p>
          </FadeIn>
        </div>

        <FadeIn delay={0.15}>
          <div className="bg-background border border-border p-8 md:p-10">
            <h3 className="text-sm uppercase tracking-widest text-accent font-bold mb-6">
              {TOOLKIT.itemsHeading}
            </h3>
            <ul className="space-y-3">
              {TOOLKIT.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Audience() {
  return (
    <section id="audience" className="scroll-mt-20 py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
              {AUDIENCE.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight">
              {AUDIENCE.heading}
            </h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AUDIENCE.groups.map((g, i) => (
            <FadeIn key={g.name} delay={(i % 2) * 0.1}>
              <article className="border border-border p-8 h-full">
                <h3 className="font-serif text-2xl text-primary mb-3">{g.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{g.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 border-l-2 border-accent pl-6 max-w-2xl">
            <p className="font-serif text-xl text-primary mb-2">
              {AUDIENCE.footnoteHeading}
            </p>
            <p className="text-muted-foreground leading-relaxed">{AUDIENCE.footnote}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section id="outcomes" className="scroll-mt-20 py-24 md:py-32 bg-secondary px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
              {OUTCOMES.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight">
              {OUTCOMES.heading}
            </h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-5 mb-24">
            {OUTCOMES.items.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-base text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h3 className="font-serif text-3xl md:text-4xl text-primary mb-10">
            {OUTCOMES.deliverablesHeading}
          </h3>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {OUTCOMES.deliverables.map((d, i) => (
            <FadeIn key={d.name} delay={(i % 2) * 0.1}>
              <article className="border-t border-border pt-6">
                <h4 className="font-serif text-xl text-primary mb-3">{d.name}</h4>
                <p className="text-muted-foreground leading-relaxed">{d.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function TierCard({ tier }: { tier: Tier }) {
  const highlighted = !!tier.highlight;

  return (
    <article
      className={`relative flex flex-col border p-8 h-full ${
        highlighted
          ? "border-primary border-2 bg-background shadow-xl"
          : "border-border bg-background"
      }`}
    >
      {highlighted && tier.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[10px] uppercase tracking-[0.18em] font-bold px-4 py-1.5 whitespace-nowrap">
          {tier.badge}
        </span>
      )}

      <h3 className="font-serif text-2xl text-primary mb-3 mt-2">{tier.name}</h3>
      <p className="font-serif text-4xl text-primary mb-4">{tier.price}</p>
      <p className="text-muted-foreground leading-relaxed mb-8">{tier.blurb}</p>

      {tier.featuresLabel && (
        <h4 className="text-sm font-semibold text-primary mb-4">{tier.featuresLabel}</h4>
      )}
      <ul className="space-y-3 mb-8">
        {tier.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
            <span className="text-sm text-foreground/80">{f}</span>
          </li>
        ))}
      </ul>

      <p className="text-sm text-muted-foreground leading-relaxed mb-8 mt-auto">
        <span className="font-semibold text-primary">Best for: </span>
        {tier.bestFor}
      </p>

      <a
        href={withUtm(tier.url, `tier-${tier.id}`)}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 h-14 px-6 text-base font-medium transition-colors w-full ${
          highlighted
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border border-primary text-primary hover:bg-primary/5"
        }`}
      >
        {tier.cta}
        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
      </a>
    </article>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="mb-16 max-w-3xl">
            <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
              {PRICING.eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-primary leading-tight mb-6">
              {PRICING.heading}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{PRICING.lead}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {TIERS.map((tier, i) => (
            <FadeIn key={tier.id} delay={i * 0.1} className="h-full">
              <TierCard tier={tier} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <p className="text-center text-sm text-muted-foreground mt-10">
            {CHECKOUT_TRUST_LINE}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24 md:py-32 bg-secondary px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <span className="text-accent uppercase tracking-widest text-sm font-bold mb-4 block">
            {ABOUT.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
            {ABOUT.heading}
          </h2>
          <p className="font-serif text-xl md:text-2xl text-primary mb-8 leading-snug">
            {ABOUT.lead}
          </p>
          {ABOUT.body.map((p) => (
            <p key={p} className="text-lg text-muted-foreground mb-5 leading-relaxed">
              {p}
            </p>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 py-24 md:py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-primary mb-12">
            Frequently asked questions
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ.map((item, i) => (
              <AccordionItem key={item.q} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-serif text-lg md:text-xl text-primary">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section id="final-cta" className="scroll-mt-20 py-24 md:py-32 bg-primary text-primary-foreground px-6">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif mb-10 leading-tight whitespace-pre-line">
            {FINAL_CTA.heading}
          </h2>
          {FINAL_CTA.body.map((p) => (
            <p key={p} className="text-lg text-primary-foreground/80 mb-5 leading-relaxed max-w-2xl mx-auto">
              {p}
            </p>
          ))}
          <p className="font-serif text-xl md:text-2xl mt-10 mb-10">{FINAL_CTA.summary}</p>
          <Button
            size="lg"
            className="rounded-none text-base h-14 px-8 bg-accent text-white hover:bg-accent/90"
            onClick={scrollToPricing}
          >
            {FINAL_CTA.cta}
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Playbook() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Modules />
        <Toolkit />
        <Audience />
        <Outcomes />
        <Pricing />
        <About />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
