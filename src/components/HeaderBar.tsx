interface HeaderBarProps {
  id: string;
  children: React.ReactNode;
}

function HeaderBar({ id, children }: HeaderBarProps) {
  return (
    <header className="py-6 border-b-4 border-blue-500 mb-4">
      <h1 id={id} className="text-3xl font-bold text-gray-900 text-center">
        {children}
      </h1>
    </header>
  );
}

export default HeaderBar;
