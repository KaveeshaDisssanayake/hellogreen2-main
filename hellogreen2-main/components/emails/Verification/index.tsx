import { Html, Button } from "@react-email/components";
import { FC, ReactElement } from "react";

export interface VerifyEmailProps {
  link: string;
}

export const VerifyEmail: FC<VerifyEmailProps> = ({ link }): ReactElement => {
  return (
    <Html>
      <Button href={link}>Verify your email</Button>;
    </Html>
  );
};

// export default VerifyEmail;
