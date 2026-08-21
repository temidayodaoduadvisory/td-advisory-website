import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/motion";
import { useHashScroll } from "@/components/section-nav";
import {
  PRIVACY,
  TERMS,
  type LegalBlock,
  type LegalDocument,
} from "@/content/legal";

/**
 * One run of content inside a clause. Legal copy interleaves prose, bullets and
 * labelled sub-items, so each block renders to its own element rather than the
 * whole section being a list of paragraphs.
 */
function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "subheading":
      return (
        <p className="font-serif text-lg md:text-xl text-primary mt-8 mb-3">
          {block.text}
        </p>
      );

    case "list":
      return (
        <ul className="list-disc pl-6 mb-4 space-y-2 marker:text-accent">
          {block.items.map((item) => (
            <li
              key={item}
              className="text-base md:text-lg text-muted-foreground leading-relaxed"
            >
              {item}
            </li>
          ))}
        </ul>
      );

    case "email":
      return (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          {block.label}{" "}
          <a
            href={`mailto:${block.address}`}
            className="text-primary underline underline-offset-4 hover:text-accent transition-colors"
          >
            {block.address}
          </a>
        </p>
      );

    case "p":
      return (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
          {block.text}
        </p>
      );
  }
}

/**
 * Shared layout for `/privacy` and `/terms`. Both documents are the same shape —
 * a title, a preamble, numbered clauses and a closing acknowledgement — so they
 * share one presentational component and differ only in the content passed in.
 */
function LegalPage({ doc }: { doc: LegalDocument }) {
  // Clauses are cited and linked to by anchor (e.g. /terms#refund-policy). The
  // browser's native hash scroll fires before React has rendered the document,
  // so it finds nothing — this re-runs it once the clauses are on the page.
  useHashScroll();

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <article className="pt-32 pb-24 md:pt-40 md:pb-32 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-px bg-accent" />
                <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
                  Legal
                </span>
              </div>

              <h1 className="font-serif leading-[0.95] tracking-tight text-[clamp(38px,4.6vw,72px)] text-primary mb-6">
                {doc.title}
              </h1>

              <p className="font-serif text-xl md:text-2xl text-primary leading-snug mb-6">
                {doc.intro}
              </p>

              <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-10">
                Last updated: {doc.lastUpdated}
              </p>

              {doc.preamble.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </FadeIn>

            <FadeIn delay={0.1}>
              {doc.sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 mt-12"
                >
                  <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4 leading-tight">
                    {section.heading}
                  </h2>
                  {section.body.map((block, i) => (
                    <Block key={i} block={block} />
                  ))}
                </section>
              ))}

              <p className="font-serif text-lg md:text-xl text-primary leading-snug mt-16 pt-8 border-t border-border">
                {doc.closing}
              </p>
            </FadeIn>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

export function Privacy() {
  return <LegalPage doc={PRIVACY} />;
}

export function Terms() {
  return <LegalPage doc={TERMS} />;
}
