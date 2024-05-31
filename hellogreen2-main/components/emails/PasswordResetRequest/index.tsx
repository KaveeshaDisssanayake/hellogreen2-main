import { FC, ReactElement } from "react";
import { Button, Html } from "@react-email/components";

export interface PasswordResetRequestProps {
  link: string;
}

const PasswordResetRequest: FC<PasswordResetRequestProps> = ({
  link,
}): ReactElement => {
  return (
    <Html>
      <Button>
        <a href={link}>reset password</a>
      </Button>
    </Html>
  );
};

export default PasswordResetRequest;
