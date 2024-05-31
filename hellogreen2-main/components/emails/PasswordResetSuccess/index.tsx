import { Html } from "@react-email/components";
import { FC, ReactElement } from "react";

export interface PasswordResetSuccessProps {}

const PasswordResetSuccess: FC<
  PasswordResetSuccessProps
> = ({}): ReactElement => {
  return (
    <Html>
      <h1>Password Reset Success</h1>
      <p>Your password has been reset successfully.</p>
    </Html>
  );
};

export default PasswordResetSuccess;
