import NavMenu from "components/NavMenu";
import Footer from "components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavMenu />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
