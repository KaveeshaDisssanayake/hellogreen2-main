import { Html, Button } from "@react-email/components";
import { FC, ReactElement } from "react";

export interface WelcomeEmailProps {}

const WelcomeEmail: FC<WelcomeEmailProps> = ({}): ReactElement => {
  return (
    <Html>
      <h1>Thank you for verifying email</h1>
    </Html>
  );
};

export default WelcomeEmail;
