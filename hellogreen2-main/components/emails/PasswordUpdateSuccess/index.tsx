import { Html } from "@react-email/components";
import { FC, ReactElement } from "react";

export interface PasswordUpdateSuccessProps {}

const PasswordUpdateSuccess: FC<
  PasswordUpdateSuccessProps
> = ({}): ReactElement => {
  return (
    <Html>
      <h1>Password Update Success</h1>
      <p>Your password has been updated successfully.</p>
    </Html>
  );
};

export default PasswordUpdateSuccess;
