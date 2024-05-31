import { FC, ReactElement, ReactNode } from "react";

interface ContentProps {
  children: ReactNode;
}

const Content: FC<ContentProps> = ({ children }): ReactElement => {
  return <main className="w-full">{children}</main>;
};

export default Content;
