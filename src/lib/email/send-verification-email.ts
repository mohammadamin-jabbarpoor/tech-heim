import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail({
  email,
  url,
}: {
  email: string;
  url: string;
}) {
  const result = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL!,
    to: email,
    subject: "Verify your email address",
    html: `
      <h1>Verify your email</h1>

      <p>Please click the button below to verify your email address.</p>

      <a href="${url}">
        Verify Email
      </a>
    `,
  });

  return result;
}
