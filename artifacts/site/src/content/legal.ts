/**
 * Legal pages — `/privacy` and `/terms`.
 *
 * All copy lives here so the page components stay presentational, matching the
 * convention established by `content/playbook.ts`.
 *
 * ⚠️ THIS IS BINDING LEGAL TEXT, SUPPLIED AND APPROVED BY TD ADVISORY. It was
 * transferred verbatim — wording, ordering, spelling and numbering are the
 * client's, not the developer's. Do not reword, "tidy" or restructure it. Any
 * change to the text itself needs TD Advisory's explicit sign-off; changing a
 * heading also changes its anchor, which may break an external link.
 *
 * When the text is revised, update the document's `lastUpdated` in the same
 * commit — sections 10 (Privacy) and 12 (Terms) both promise that.
 *
 * 🔗 KNOWN INCONSISTENCY, LEFT AS SUPPLIED: the Terms name the product "The
 * Startup Operations Playbook", while the site sells "The Scalable Startup
 * Operating System" (see `content/playbook.ts` → `PRODUCT_NAME`, and tracker
 * decision #23). Tier names differ too: the Terms say "Playbook Only" and
 * "Playbook + Toolkit + Implementation Session"; the pricing cards say "The
 * Playbook" and "Implementation Partner Package". All three prices agree.
 * TD Advisory chose to revise this themselves rather than have it edited here.
 */

/** Canonical paths. The footer and the router both read these. */
export const PRIVACY_PATH = "/privacy";
export const TERMS_PATH = "/terms";

export const LEGAL_ENTITY = "TD Advisory LLC";
export const LEGAL_CONTACT_EMAIL = "enquiries@tdadvisory.co";

/**
 * A run of content inside a section. Legal copy interleaves prose, bullet lists
 * and the occasional labelled sub-item (the pricing options in Terms § 3), so a
 * flat array of paragraphs isn't enough to represent it faithfully.
 */
export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "subheading"; text: string }
  | { kind: "list"; items: string[] }
  | { kind: "email"; label: string; address: string };

export interface LegalSection {
  /** Anchor id, so a clause can be deep-linked or cited. */
  id: string;
  /** Includes the clause number — legal documents are cited by it. */
  heading: string;
  body: LegalBlock[];
}

export interface LegalDocument {
  path: string;
  /** The <h1>. */
  title: string;
  /** Standfirst under the title. Site copy, not part of the supplied document. */
  intro: string;
  /** Effective date, shown under the title. */
  lastUpdated: string;
  /** Unnumbered paragraphs between the title and section 1. */
  preamble: string[];
  sections: LegalSection[];
  /** The acknowledgement paragraph that closes the document. */
  closing: string;
}

export const PRIVACY: LegalDocument = {
  path: PRIVACY_PATH,
  title: "Privacy Policy",
  intro: "How TD Advisory collects, uses and protects the information you share with us through this website.",
  lastUpdated: "21 August 2026",
  preamble: [
    "TD Advisory (“we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information you provide when using our website or purchasing our products and services.",
    "This Privacy Policy explains what information we collect, how we use it, and the choices available to you regarding your information.",
  ],
  sections: [
    {
      id: "information-we-collect",
      heading: "1. Information We Collect",
      body: [
        { kind: "p", text: "We may collect personal information when you:" },
        { kind: "list", items: [
            "Visit our website",
            "Purchase a product or service",
            "Complete a form",
            "Subscribe to our mailing list",
            "Contact us directly",
            "Book a consultation or advisory session",
          ] },
        { kind: "p", text: "The information we collect may include:" },
        { kind: "list", items: [
            "Your name",
            "Email address",
            "Phone number",
            "Business or company name",
            "Payment and transaction information",
            "Information you voluntarily provide when communicating with us",
          ] },
        { kind: "p", text: "Payment information is processed through our authorised payment service providers. TD Advisory does not intentionally store your complete card or banking details." },
      ],
    },
    {
      id: "how-we-use-your-information",
      heading: "2. How We Use Your Information",
      body: [
        { kind: "p", text: "We may use your information to:" },
        { kind: "list", items: [
            "Process and confirm your purchase",
            "Deliver products and services you have purchased",
            "Provide access to digital resources and implementation tools",
            "Schedule consultations or advisory sessions",
            "Respond to your enquiries",
            "Send important product, service, or transaction-related communications",
            "Send updates, insights, offers, or other marketing communications where permitted",
            "Improve our products, services, and website",
            "Maintain appropriate business and transaction records",
          ] },
      ],
    },
    {
      id: "marketing-communications",
      heading: "3. Marketing Communications",
      body: [
        { kind: "p", text: "Where you have subscribed or otherwise provided the necessary consent, we may send you updates, insights, product announcements, and promotional communications from TD Advisory." },
        { kind: "p", text: "You may unsubscribe from marketing communications at any time by using the unsubscribe option provided in our emails or by contacting us directly." },
      ],
    },
    {
      id: "how-we-protect-your-information",
      heading: "4. How We Protect Your Information",
      body: [
        { kind: "p", text: "We take reasonable administrative, technical, and organisational measures to protect your personal information against unauthorised access, loss, misuse, alteration, or disclosure." },
        { kind: "p", text: "However, no method of transmitting or storing information electronically is completely secure. While we take reasonable steps to protect your information, we cannot guarantee absolute security." },
      ],
    },
    {
      id: "sharing-of-information",
      heading: "5. Sharing of Information",
      body: [
        { kind: "p", text: "We do not sell your personal information." },
        { kind: "p", text: "We may share information with trusted third-party service providers where necessary to operate our business and deliver our products and services. These may include:" },
        { kind: "list", items: [
            "Payment processors",
            "Website and hosting providers",
            "Email and communication platforms",
            "Scheduling and consultation tools",
            "Other service providers supporting our business operations",
          ] },
        { kind: "p", text: "We may also disclose information where required by applicable law or where necessary to protect the rights, safety, or property of TD Advisory, our customers, or others." },
      ],
    },
    {
      id: "cookies-and-website-analytics",
      heading: "6. Cookies and Website Analytics",
      body: [
        { kind: "p", text: "Our website may use cookies or similar technologies to improve functionality, understand website usage, and enhance user experience." },
        { kind: "p", text: "You may choose to disable cookies through your browser settings. However, doing so may affect certain features or functionality of the website." },
      ],
    },
    {
      id: "data-retention",
      heading: "7. Data Retention",
      body: [
        { kind: "p", text: "We retain personal information only for as long as reasonably necessary to fulfil the purposes for which it was collected, comply with legal or regulatory requirements, resolve disputes, and maintain appropriate business records." },
      ],
    },
    {
      id: "your-rights",
      heading: "8. Your Rights",
      body: [
        { kind: "p", text: "Subject to applicable laws, you may have the right to request access to, correction of, or deletion of personal information we hold about you." },
        { kind: "p", text: "To make a request regarding your personal information, please contact us using the details below." },
      ],
    },
    {
      id: "third-party-services",
      heading: "9. Third-Party Services",
      body: [
        { kind: "p", text: "Our website or communications may contain links to third-party websites or services. TD Advisory is not responsible for the privacy practices, content, or security of those third-party platforms." },
        { kind: "p", text: "We encourage you to review the privacy policies of any third-party service you use." },
      ],
    },
    {
      id: "changes-to-this-privacy-policy",
      heading: "10. Changes to This Privacy Policy",
      body: [
        { kind: "p", text: "We may update this Privacy Policy from time to time to reflect changes in our business, services, or applicable requirements." },
        { kind: "p", text: "Any updates will be posted on this page with a revised “Last Updated” date." },
      ],
    },
    {
      id: "contact-us",
      heading: "11. Contact Us",
      body: [
        { kind: "p", text: "If you have questions about this Privacy Policy or how TD Advisory handles your information, please contact us at:" },
        { kind: "p", text: "TD Advisory" },
        { kind: "email", label: "Email:", address: "enquiries@tdadvisory.co" },
      ],
    },
  ],
  closing: "By using our website, purchasing our products, or providing your personal information to us, you acknowledge that you have read and understood this Privacy Policy.",
};

export const TERMS: LegalDocument = {
  path: TERMS_PATH,
  title: "Terms and Conditions",
  intro: "The terms that apply when you use this website, engage TD Advisory, or buy one of our digital products.",
  lastUpdated: "21 August 2026",
  preamble: [
    "These Terms and Conditions govern your use of the TD Advisory website and your purchase or use of our products and services.",
    "By accessing our website, purchasing a product, booking a consultation, or using any TD Advisory resource, you agree to these Terms and Conditions.",
  ],
  sections: [
    {
      id: "about-td-advisory",
      heading: "1. About TD Advisory",
      body: [
        { kind: "p", text: "TD Advisory provides business advisory, operations consulting, implementation support, digital resources, training, and related professional services." },
        { kind: "p", text: "Our products and services may include digital playbooks, implementation toolkits, templates, worksheets, advisory sessions, and other business resources." },
      ],
    },
    {
      id: "the-playbook-and-toolkit",
      heading: "2. The Startup Operations Playbook & Implementation Toolkit",
      body: [
        { kind: "p", text: "The Startup Operations Playbook and accompanying Implementation Toolkit are educational and practical business resources designed to help founders, business leaders, and teams strengthen their systems, structures, and ways of working." },
        { kind: "p", text: "The resources are intended to provide guidance and practical frameworks. They should be adapted to the specific needs, circumstances, and requirements of your business." },
        { kind: "p", text: "Purchasing or using the Playbook does not create a consulting, legal, financial, employment, or other professional advisory relationship beyond the specific product or service purchased." },
      ],
    },
    {
      id: "purchase-options",
      heading: "3. Purchase Options",
      body: [
        { kind: "p", text: "The Startup Operations Playbook is currently available through the following options:" },
        { kind: "subheading", text: "Playbook Only — ₦20,000" },
        { kind: "p", text: "Includes access to the complete Startup Operations Playbook." },
        { kind: "subheading", text: "Playbook + Implementation Toolkit — ₦50,000" },
        { kind: "p", text: "Includes access to the complete Startup Operations Playbook and the accompanying editable templates, worksheets, frameworks, and implementation tools included in the Toolkit." },
        { kind: "subheading", text: "Playbook + Toolkit + Implementation Session — ₦100,000" },
        { kind: "p", text: "Includes:" },
        { kind: "list", items: [
            "The complete Startup Operations Playbook",
            "The Implementation Toolkit",
            "One 1-hour business implementation session with TD Advisory",
          ] },
        { kind: "p", text: "The implementation session is intended to provide guidance on applying relevant concepts and tools to your business. The scope of the session is limited to the agreed duration and does not constitute an ongoing consulting engagement." },
      ],
    },
    {
      id: "payments",
      heading: "4. Payments",
      body: [
        { kind: "p", text: "All prices are stated in Nigerian Naira (₦), unless otherwise indicated." },
        { kind: "p", text: "Payment must be successfully completed before access to digital products, resources, or paid services is provided, unless otherwise agreed by TD Advisory." },
        { kind: "p", text: "We reserve the right to change product pricing or offerings at any time. Changes will not affect purchases that have already been successfully completed." },
      ],
    },
    {
      id: "delivery-and-access",
      heading: "5. Delivery and Access",
      body: [
        { kind: "p", text: "Following successful payment, purchasers will receive access to the purchased product or receive instructions regarding product delivery and access." },
        { kind: "p", text: "For purchases that include an implementation session, TD Advisory will provide instructions for scheduling the session." },
        { kind: "p", text: "You are responsible for providing accurate contact information at the point of purchase. TD Advisory will not be responsible for delays or failed delivery resulting from incorrect information provided by the purchaser." },
      ],
    },
    {
      id: "consultation-and-implementation-sessions",
      heading: "6. Consultation and Implementation Sessions",
      body: [
        { kind: "p", text: "Where your purchase includes a 1-hour implementation session:" },
        { kind: "list", items: [
            "The session must be scheduled in advance.",
            "Sessions are subject to availability.",
            "You may be required to provide relevant information about your business before the session.",
            "Rescheduling requests should be made with reasonable notice.",
            "Failure to attend a scheduled session without prior notice may result in the session being considered used.",
          ] },
        { kind: "p", text: "The implementation session is designed to provide practical business guidance based on the information available during the session. TD Advisory does not guarantee specific business, financial, operational, or commercial outcomes." },
      ],
    },
    {
      id: "intellectual-property",
      heading: "7. Intellectual Property",
      body: [
        { kind: "p", text: "All content provided by TD Advisory, including the Startup Operations Playbook, Implementation Toolkit, templates, frameworks, worksheets, graphics, text, and other materials, remains the intellectual property of TD Advisory unless otherwise stated." },
        { kind: "p", text: "Your purchase grants you a limited, non-exclusive, non-transferable licence to use the purchased materials for your personal or internal business use." },
        { kind: "p", text: "You may not, without prior written permission from TD Advisory:" },
        { kind: "list", items: [
            "Copy, reproduce, distribute, sell, resell, or commercially exploit the materials",
            "Share purchased materials publicly or with unauthorised third parties",
            "Upload the materials to public platforms or websites",
            "Remove copyright, branding, or ownership notices",
            "Present TD Advisory materials as your own work",
            "Create or sell derivative products based substantially on the materials",
          ] },
        { kind: "p", text: "Where editable templates are provided, you may modify them for use within your own business. Ownership of the original templates and underlying intellectual property remains with TD Advisory." },
      ],
    },
    {
      id: "refund-policy",
      heading: "8. Refund Policy",
      body: [
        { kind: "p", text: "Due to the digital nature of the Startup Operations Playbook and Implementation Toolkit, purchases are generally final once access to the digital product or materials has been provided." },
        { kind: "p", text: "Refunds may be considered in limited circumstances, including:" },
        { kind: "list", items: [
            "Duplicate payments",
            "Incorrect charges caused by a verified technical error",
            "Failure to provide access to the purchased product where TD Advisory is unable to resolve the issue within a reasonable period",
          ] },
        { kind: "p", text: "Requests relating to payment or access issues should be sent to enquiries@tdadvisory.co within 7 days of purchase." },
        { kind: "p", text: "Where a purchase includes a scheduled implementation session, any applicable refund consideration will take into account digital products and services already delivered." },
      ],
    },
    {
      id: "no-guarantee-of-results",
      heading: "9. No Guarantee of Results",
      body: [
        { kind: "p", text: "The Playbook, Toolkit, and advisory resources are designed to provide practical guidance and support." },
        { kind: "p", text: "However, business outcomes depend on many factors, including implementation, leadership decisions, market conditions, financial circumstances, employee performance, and other factors outside the control of TD Advisory." },
        { kind: "p", text: "We do not guarantee specific financial results, revenue growth, cost savings, operational outcomes, investment outcomes, or other business results." },
      ],
    },
    {
      id: "limitation-of-liability",
      heading: "10. Limitation of Liability",
      body: [
        { kind: "p", text: "To the maximum extent permitted by applicable law, TD Advisory will not be liable for any indirect, incidental, consequential, or special loss arising from your use of our website, products, templates, resources, or advisory services." },
        { kind: "p", text: "You are responsible for evaluating and determining the suitability of any information, framework, recommendation, or template for your particular business circumstances." },
      ],
    },
    {
      id: "acceptable-use",
      heading: "11. Acceptable Use",
      body: [
        { kind: "p", text: "You agree not to use TD Advisory products, services, or website:" },
        { kind: "list", items: [
            "For unlawful purposes",
            "In a way that infringes the rights of others",
            "To distribute or reproduce proprietary materials without permission",
            "To interfere with the security or proper operation of our website or services",
          ] },
        { kind: "p", text: "We reserve the right to suspend or terminate access where we reasonably believe that these Terms have been violated." },
      ],
    },
    {
      id: "changes-to-products-and-terms",
      heading: "12. Changes to Products and Terms",
      body: [
        { kind: "p", text: "TD Advisory may update, modify, improve, or discontinue products, services, or features where necessary." },
        { kind: "p", text: "We may also update these Terms and Conditions from time to time. The most current version will be published on our website with an updated “Last Updated” date." },
      ],
    },
    {
      id: "governing-law",
      heading: "13. Governing Law",
      body: [
        { kind: "p", text: "These Terms and Conditions shall be governed by and interpreted in accordance with the applicable laws of the Federal Republic of Nigeria." },
      ],
    },
    {
      id: "contact-us",
      heading: "14. Contact Us",
      body: [
        { kind: "p", text: "For questions regarding these Terms and Conditions, your purchase, or any TD Advisory product or service, please contact:" },
        { kind: "p", text: "TD Advisory" },
        { kind: "email", label: "Email:", address: "enquiries@tdadvisory.co" },
      ],
    },
  ],
  closing: "By accessing our website or purchasing a TD Advisory product or service, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.",
};

/**
 * The consent wording that must appear at the point of purchase.
 *
 * ⚠️ NOT RENDERED BY THIS SITE, AND IT SHOULDN'T BE. It is written in the first
 * person ("I confirm that I have read…"), so it is checkout copy for the buyer
 * to agree to — it belongs on the **Nestuge** product/checkout pages, which are
 * where money actually changes hands. It is kept here so the site remains the
 * record of the agreed wording, and so it can be handed to Nestuge unchanged.
 */
export const CHECKOUT_CONSENT =
  "By completing this purchase, I confirm that I have read and agree to the Terms & Conditions and Privacy Policy. I understand that access to digital products may make my purchase ineligible for a refund except as stated in the Refund Policy.";

/** Both documents, for the footer's Legal column and for tests. */
export const LEGAL_DOCUMENTS = [PRIVACY, TERMS] as const;
