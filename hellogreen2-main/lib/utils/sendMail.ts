import { PasswordResetRequestProps } from "@/components/emails/PasswordResetRequest";
import { VerifyEmailProps } from "@/components/emails/Verification";
import { WelcomeEmailProps } from "@/components/emails/Welcome";
import { PasswordUpdateSuccessProps } from "@/components/emails/PasswordUpdateSuccess";
import { PasswordResetSuccessProps } from "@/components/emails/PasswordResetSuccess";
import { EmailClient } from "@azure/communication-email";
import type { EmailMessage } from "@azure/communication-email";
import { render } from "@react-email/render";
import { FC } from "react";

const client: EmailClient = new EmailClient(
  process.env.AZURE_COMMUNICATION_SERVICES_CONNECTION_STRING!
);

const sendMail = async (
  toAddress: string,
  subject: string,
  template:
    | FC<VerifyEmailProps>
    | FC<WelcomeEmailProps>
    | FC<PasswordResetRequestProps>
    | FC<PasswordUpdateSuccessProps>
    | FC<PasswordResetSuccessProps>,
  props:
    | VerifyEmailProps
    | WelcomeEmailProps
    | PasswordResetRequestProps
    | PasswordUpdateSuccessProps
    | PasswordResetSuccessProps
): Promise<void> => {
  try {
    const emailMessage: EmailMessage = {
      senderAddress: process.env.MAIL_FROM_ADDRESS!,
      content: {
        subject: subject,
        // @ts-ignore
        html: render(template(props)),
      },
      recipients: {
        to: [{ address: toAddress }],
      },
    };

    const poller = await client.beginSend(emailMessage);
    const result = await poller.pollUntilDone();
    console.log("Email sent successfully");
  } catch (error) {
    console.error(error);
    throw new Error("Email sending failed");
  }
};

export default sendMail;
