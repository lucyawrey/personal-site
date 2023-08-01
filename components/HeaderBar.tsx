interface FooterProps {
  id: string;
  children: preact.AnyComponent;
}

function HeaderBar({ id, children }: FooterProps) {
  return (
    <header class="py-6 border-dashed border-b-2 border-gray-500 mb-4">
      <h1 id={id} class="text-2xl font-bold text-gray-900 text-center">{ children }</h1>
    </header>
  )
}

export default HeaderBar;
