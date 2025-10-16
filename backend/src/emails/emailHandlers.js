import { resendClient} from "../lib/resend.js";
import { ENV } from "../lib/env.js"; 
import { createWelcomeEmailTemplate } from "../emails/emailTemplates.js";

export const sendWelcomeEmail = async (email, name, clientURL) => {
  const { data, error } = await resendClient.emails.send({
    from: `${ENV.EMAIL_FROM_NAME} <${ENV.EMAIL_FROM}>`,
    to: email,
    subject: "Welcome to VibeTalk!",
    html: createWelcomeEmailTemplate(name, clientURL),
  });

   if (error) {
    console.error("Error sending welcome email:", error);
    throw new Error("Failed to send welcome email");
  }

  console.log("Welcome Email sent successfully", data);
}