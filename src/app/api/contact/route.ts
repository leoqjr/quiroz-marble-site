import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      city,
      projectType,
      timeline,
      message,
      honeypot,
    } = body || {};

    // Honeypot check: if this has any value, treat as spam and exit
    if (typeof honeypot === "string" && honeypot.trim().length > 0) {
      return NextResponse.json(
        { success: true }, // pretend success so bots get no signal
        { status: 200 },
      );
    }

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 },
      );
    }

    console.log("New contact submission:", {
      name,
      email,
      phone,
      city,
      projectType,
      timeline,
      message,
    });

    // 1) Internal notification email (to you and your dad)
    const { data: ownerData, error: ownerError } = await resend.emails.send({
      from: "Quiroz Marble & Granite <quotes@quirozmarblegranite.com>",
      to: ["quiroz002@gmail.com", "leonardoqjr@gmail.com"],
      replyTo: email,
      subject: "New contact form submission",
      html: `
        <!doctype html>
        <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>New contact form submission</title>
          </head>
          <body style="margin:0;padding:0;background-color:#f5f5f5;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:16px 0;">
              <tr>
                <td align="center">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e2e2e2;">
                    <tr>
                      <td style="padding:20px 24px 12px 24px;background-color:#111827;color:#f9fafb;">
                        <h1 style="margin:0;font-size:20px;font-weight:600;">New Contact Submission</h1>
                        <p style="margin:4px 0 0 0;font-size:13px;color:#d1d5db;">Quiroz Marble &amp; Granite</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 24px;">
                        <p style="margin:0 0 16px 0;font-size:14px;color:#374151;">
                          You received a new quote request from your website contact form.
                        </p>

                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;color:#111827;">
                          <tr>
                            <td style="padding:6px 0;font-weight:600;width:140px;vertical-align:top;color:#4b5563;">Name</td>
                            <td style="padding:6px 0;">${name}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 0;font-weight:600;width:140px;vertical-align:top;color:#4b5563;">Email</td>
                            <td style="padding:6px 0;"><a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">${email}</a></td>
                          </tr>
                          <tr>
                            <td style="padding:6px 0;font-weight:600;width:140px;vertical-align:top;color:#4b5563;">Phone</td>
                            <td style="padding:6px 0;">${phone || "Not provided"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 0;font-weight:600;width:140px;vertical-align:top;color:#4b5563;">City / Area</td>
                            <td style="padding:6px 0;">${city || "Not provided"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 0;font-weight:600;width:140px;vertical-align:top;color:#4b5563;">Project type</td>
                            <td style="padding:6px 0;">${projectType || "Not provided"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 0;font-weight:600;width:140px;vertical-align:top;color:#4b5563;">Timeline</td>
                            <td style="padding:6px 0;">${timeline || "Not provided"}</td>
                          </tr>
                        </table>

                        <div style="margin-top:18px;padding-top:12px;border-top:1px solid #e5e7eb;">
                          <p style="margin:0 0 6px 0;font-size:14px;font-weight:600;color:#4b5563;">Project details</p>
                          <p style="margin:0;font-size:14px;line-height:1.5;color:#111827;white-space:pre-wrap;">
                            ${message || "(No message provided)"}
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:12px 24px 18px 24px;background-color:#f9fafb;border-top:1px solid #e5e7eb;">
                        <p style="margin:0;font-size:12px;color:#6b7280;">
                          Sent from the Quiroz Marble &amp; Granite website contact form.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (ownerError) {
      console.error("Resend owner email error:", ownerError);
      return NextResponse.json(
        {
          success: false,
          error: "Failed to send email. Please try again later.",
        },
        { status: 500 },
      );
    }

    // 2) Customer confirmation email (to the person who submitted the form)
    const { error: customerError } = await resend.emails.send({
      from: "Quiroz Marble & Granite <quotes@quirozmarblegranite.com>",
      to: [email],
      subject: "We received your quote request",
      html: `
        <!doctype html>
        <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>We received your quote request</title>
          </head>
          <body style="margin:0;padding:0;background-color:#f5f5f5;font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:16px 0;">
              <tr>
                <td align="center">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #e2e2e2;">
                    <tr>
                      <td style="padding:20px 24px 12px 24px;background-color:#111827;color:#f9fafb;">
                        <h1 style="margin:0;font-size:20px;font-weight:600;">Thank you for reaching out</h1>
                        <p style="margin:4px 0 0 0;font-size:13px;color:#d1d5db;">Quiroz Marble &amp; Granite</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding:20px 24px;">
                        <p style="margin:0 0 12px 0;font-size:14px;color:#111827;">
                          Hi ${name || "there"},
                        </p>
                        <p style="margin:0 0 12px 0;font-size:14px;color:#374151;line-height:1.5;">
                          Thank you for contacting Quiroz Marble &amp; Granite about your project. We&apos;ve received your request and a member of our team will follow up within 1–2 business days.
                        </p>
                        <p style="margin:0 0 12px 0;font-size:13px;color:#6b7280;line-height:1.5;">
                          This email is a confirmation that we received your request. It does not yet confirm pricing, availability, or an installation date.
                        </p>
                        <p style="margin:0 0 16px 0;font-size:14px;color:#374151;line-height:1.5;">
                          To help us prepare, here&apos;s a summary of what you sent:
                        </p>

                        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-size:14px;color:#111827;background-color:#f9fafb;border-radius:6px;overflow:hidden;">
                          <tr>
                            <td colspan="2" style="padding:10px 14px;font-weight:600;color:#4b5563;border-bottom:1px solid #e5e7eb;">
                              Your details
                            </td>
                          </tr>
                          <tr>
                            <td style="padding:6px 14px;font-weight:600;width:120px;vertical-align:top;color:#4b5563;">Name</td>
                            <td style="padding:6px 14px;">${name}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 14px;font-weight:600;width:120px;vertical-align:top;color:#4b5563;">Email</td>
                            <td style="padding:6px 14px;">${email}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 14px;font-weight:600;width:120px;vertical-align:top;color:#4b5563;">Phone</td>
                            <td style="padding:6px 14px;">${phone || "Not provided"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 14px;font-weight:600;width:120px;vertical-align:top;color:#4b5563;">City / Area</td>
                            <td style="padding:6px 14px;">${city || "Not provided"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 14px;font-weight:600;width:120px;vertical-align:top;color:#4b5563;">Project type</td>
                            <td style="padding:6px 14px;">${projectType || "Not provided"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 14px;font-weight:600;width:120px;vertical-align:top;color:#4b5563;">Timeline</td>
                            <td style="padding:6px 14px;">${timeline || "Not provided"}</td>
                          </tr>
                          <tr>
                            <td style="padding:6px 14px;font-weight:600;width:120px;vertical-align:top;color:#4b5563;">Details</td>
                            <td style="padding:6px 14px;white-space:pre-wrap;">${message || "(No message provided)"}</td>
                          </tr>
                        </table>

                        <p style="margin:18px 0 6px 0;font-size:13px;color:#374151;line-height:1.5;">
                          If you need to add anything or have questions before we reach out, you can simply reply to this email or call us at (XXX) XXX‑XXXX during normal business hours.
                        </p>
                        <p style="margin:0;font-size:12px;color:#6b7280;line-height:1.5;">
                          Serving Los Angeles County and Glendale with custom marble, granite, and quartz fabrication and installation.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (customerError) {
      console.error("Resend customer email error:", customerError);
      // We still return success so the user sees a success message on the site
    }

    console.log("Resend owner response:", ownerData);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling contact form:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    );
  }
}
