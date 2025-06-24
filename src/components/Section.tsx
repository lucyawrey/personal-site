import HeaderBar from "components/HeaderBar";

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

function Section({ title, id, children }: SectionProps) {
  return (
    <section className="bg-white shadow my-8 pb-4 container md:w-3/4 mx-auto text-lg">
      <HeaderBar id={id}>{title}</HeaderBar>
      {children}
    </section>
  );
}

export default Section;
