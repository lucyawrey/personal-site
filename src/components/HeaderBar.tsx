interface HeaderBarProps {
  id: string;
  children: React.ReactNode;
}

function HeaderBar({ id, children }: HeaderBarProps) {
  return (
    <header className="py-6">
      <h1 id={id} className="text-3xl font-bold text-gray-900 text-center">
        {children}
      </h1>
      <hr className="mw-96 mx-auto mt-4 h-1 bg-blue-500 border-0 rounded-sm" />
    </header>
  );
}

export default HeaderBar;
