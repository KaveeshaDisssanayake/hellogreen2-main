import { FC, ReactElement, ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
}

const Section: FC<SectionProps> = ({ children }): ReactElement => {
  return <section>{children}</section>;
};

export default Section;
