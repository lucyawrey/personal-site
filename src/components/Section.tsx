import HeaderBar from "components/HeaderBar";

interface SectionProps {
  title: string;
  id: string;
  children: React.ReactNode;
}

function Section({ title, id, children }: SectionProps) {
  return (
    <section className="max-w-7xl bg-white shadow my-8 pb-8 px-10 lg:px-20 container md:w-10/12 mx-auto text-lg">
      <HeaderBar id={id}>{title}</HeaderBar>
      {children}
    </section>
  );
}

export default Section;
