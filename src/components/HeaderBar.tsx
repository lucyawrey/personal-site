interface FooterProps {
  children: React.ReactNode;
}

function HeaderBar({ children }: FooterProps) {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 text-center">{ children }</h1>
      </div>
    </header>
  )
}

export default HeaderBar;
