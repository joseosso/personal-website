import { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
}

const Section = ({ id, children }: SectionProps) => {
  return (
    <section id={id} className="border-b border-gray-500/30 py-8">
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
