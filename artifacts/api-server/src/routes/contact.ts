import { Router } from "express";
import { Resend } from "resend";

const router = Router();

async function getResendClient(): Promise<{ client: Resend; fromEmail: string }> {
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY
    ? "repl " + process.env.REPL_IDENTITY
    : process.env.WEB_REPL_RENEWAL
    ? "depl " + process.env.WEB_REPL_RENEWAL
    : null;

  if (!xReplitToken) throw new Error("X-Replit-Token not found");

  const connectionSettings = await fetch(
    "https://" + hostname + "/api/v2/connection?include_secrets=true&connector_names=resend",
    {
      headers: {
        Accept: "application/json",
        "X-Replit-Token": xReplitToken,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => data.items?.[0]);

  if (!connectionSettings?.settings?.api_key) {
    throw new Error("Resend not connected");
  }

  return {
    client: new Resend(connectionSettings.settings.api_key),
    fromEmail: connectionSettings.settings.from_email,
  };
}

router.post("/contact", async (req, res) => {
  const { name, company, email, interest, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const { client, fromEmail } = await getResendClient();

    await client.emails.send({
      from: fromEmail || "TD Advisory Website <onboarding@resend.dev>",
      to: "enquiries@tdadvisory.co",
      replyTo: email,
      subject: `New Enquiry: ${interest || "General"} — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; color: #1a1a1a;">
          <h2 style="color: #1a3a2a;">New Enquiry from TD Advisory Website</h2>
          <hr style="border-color: #c8a84b;" />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || "—"}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Area of Interest:</strong> ${interest || "—"}</p>
          <hr style="border-color: #c8a84b;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
