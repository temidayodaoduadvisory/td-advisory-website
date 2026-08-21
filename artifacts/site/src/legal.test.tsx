import { describe, it, expect } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { Footer } from "@/components/footer";
import { Privacy, Terms } from "@/pages/legal";
import {
  CHECKOUT_CONSENT,
  LEGAL_DOCUMENTS,
  PRIVACY,
  PRIVACY_PATH,
  TERMS,
  TERMS_PATH,
} from "@/content/legal";
import { FAQ } from "@/content/playbook";

/** Every string a document will actually render, flattened. */
function allText(doc: (typeof LEGAL_DOCUMENTS)[number]): string[] {
  const out = [doc.title, doc.intro, doc.closing, ...doc.preamble];
  for (const section of doc.sections) {
    out.push(section.heading);
    for (const block of section.body) {
      if (block.kind === "list") out.push(...block.items);
      else if (block.kind === "email") out.push(block.label, block.address);
      else out.push(block.text);
    }
  }
  return out;
}

describe("Footer legal links", () => {
  it("points both legal links at their real routes", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: "Privacy Policy" })).toHaveAttribute(
      "href",
      PRIVACY_PATH,
    );
    expect(
      screen.getByRole("link", { name: "Terms and Conditions" }),
    ).toHaveAttribute("href", TERMS_PATH);
  });

  // The bug these pages exist to fix: both anchors were href="#", which
  // navigates nowhere. Guards against a regression to a placeholder anchor.
  it("leaves no dead placeholder anchors in the footer", () => {
    const { container } = render(<Footer />);

    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0);
  });

  it("labels the terms link the way the document titles itself", () => {
    render(<Footer />);

    expect(
      screen.getByRole("link", { name: TERMS.title }),
    ).toBeInTheDocument();
  });
});

describe.each([
  ["Privacy Policy", Privacy, PRIVACY],
  ["Terms and Conditions", Terms, TERMS],
])("%s page", (title, Page, doc) => {
  it("renders the title, the effective date and every clause heading", () => {
    render(<Page />);

    expect(screen.getByRole("heading", { level: 1, name: title })).toBeInTheDocument();
    expect(screen.getByText(`Last updated: ${doc.lastUpdated}`)).toBeInTheDocument();

    for (const section of doc.sections) {
      expect(
        screen.getByRole("heading", { level: 2, name: section.heading }),
      ).toBeInTheDocument();
    }
  });

  it("renders the preamble and the closing acknowledgement", () => {
    render(<Page />);

    for (const paragraph of doc.preamble) {
      expect(screen.getByText(paragraph)).toBeInTheDocument();
    }
    expect(screen.getByText(doc.closing)).toBeInTheDocument();
  });

  it("gives each clause an anchor id so it can be cited", () => {
    const { container } = render(<Page />);

    for (const section of doc.sections) {
      expect(container.querySelector(`#${section.id}`)).toBeInTheDocument();
    }
  });

  it("renders bullet lists as real list markup", () => {
    const { container } = render(<Page />);

    const listBlocks = doc.sections.flatMap((s) =>
      s.body.filter((b) => b.kind === "list"),
    );
    expect(listBlocks.length).toBeGreaterThan(0);
    expect(container.querySelectorAll("ul")).toHaveLength(listBlocks.length);
  });

  it("makes the contact address a working mailto link", () => {
    render(<Page />);

    const contact = document.getElementById("contact-us");
    expect(contact).not.toBeNull();
    expect(
      within(contact as HTMLElement).getByRole("link", {
        name: "enquiries@tdadvisory.co",
      }),
    ).toHaveAttribute("href", "mailto:enquiries@tdadvisory.co");
  });
});

describe("Published content", () => {
  it("carries no leftover scaffolding or unfilled placeholders", () => {
    for (const doc of LEGAL_DOCUMENTS) {
      for (const text of allText(doc)) {
        expect(text).not.toMatch(/to be completed|insert date|lorem ipsum|TODO/i);
        expect(text.trim()).not.toBe("");
      }
    }
  });

  it("gives both documents an effective date", () => {
    for (const doc of LEGAL_DOCUMENTS) {
      expect(doc.lastUpdated).toBeTruthy();
    }
  });

  // The refund terms are stated twice in the codebase — here and in the product
  // FAQ — and the tracker flags that they must agree. Both promise the same
  // 7-day window for payment or access problems.
  it("keeps the refund window consistent with the product FAQ", () => {
    const refundClause = TERMS.sections.find((s) => s.id === "refund-policy");
    expect(refundClause).toBeDefined();

    const clauseText = refundClause!.body
      .map((b) => (b.kind === "list" ? b.items.join(" ") : b.kind === "email" ? "" : b.text))
      .join(" ");
    const faqRefund = FAQ.find((f) => /refund/i.test(f.q));

    expect(faqRefund).toBeDefined();
    expect(clauseText).toMatch(/7 days/);
    expect(faqRefund!.a).toMatch(/7 days/);
  });

  // First-person consent copy for the buyer to tick at checkout. It belongs on
  // Nestuge, so it must not leak onto either page.
  it("keeps the checkout consent line off the site's own pages", () => {
    expect(CHECKOUT_CONSENT).toMatch(/^By completing this purchase/);

    for (const Page of [Privacy, Terms]) {
      const { container, unmount } = render(<Page />);
      expect(container.textContent).not.toContain(CHECKOUT_CONSENT);
      unmount();
    }
  });
});
