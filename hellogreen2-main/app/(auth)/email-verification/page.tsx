import { NextPage } from "next";
import { ReactElement } from "react";

const EmailVerificationPage = ({
  props,
  searchParams,
}: {
  props: { slug: string };
  searchParams: { status: "success" | "error" | "verified" | "expired" };
}): ReactElement => {
  return (
    <div>
      {searchParams.status} <span></span>
    </div>
  );
};

export default EmailVerificationPage;
