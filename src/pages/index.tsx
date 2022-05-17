import Footer from "../components/Footer";
import HeaderBar from "../components/HeaderBar";
import NavMenu from "../components/NavMenu";
import Terminal from "../components/Terminal";
import { TerminalModel } from "../models/TerminalModel";

const terminal = new TerminalModel();

function Home() {
  return (
    <>
      <div className="min-h-full">
        <NavMenu />
        <main>
          <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
            <Terminal model={terminal} />
          </div>
        </main>
      </div>

      <div className="py-16"></div>
      <Footer />
    </>
  );
}

export default Home;
