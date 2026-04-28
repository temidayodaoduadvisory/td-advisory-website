import { Router } from "express";
import { Resend } from "resend";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, company, email, interest, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields." });
  }

  try {
    const client = new Resend(process.env.RESEND_API_KEY);

    const result = await client.emails.send({
      from: "TD Advisory Website <noreply@tdadvisory.co>",
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

    console.log("Resend result:", JSON.stringify(result));
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Email send error:", err);
    return res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
