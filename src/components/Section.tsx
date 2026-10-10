interface SectionProps {
  title: string;
  id: string;
  eyebrow?: string;
  children: React.ReactNode;
}

function Section({ title, id, eyebrow, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-1 text-3xl font-bold text-slate-900 dark:text-slate-100">{title}</h2>
      </header>
      {children}
    </section>
  );
}

export default Section;
