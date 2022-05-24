import Footer from "../components/Footer";
import NavMenu from "../components/NavMenu";
import Terminal from "../components/Terminal";
import { TerminalModel } from "../models/TerminalModel";
import Text from "../content/text.json";
import HeaderBar from "../components/HeaderBar";

const terminal = new TerminalModel();

function Home() {
  return (
    <>
      <div id="home" className="min-h-full">
        <NavMenu />
        <main>
          <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
            <Terminal model={terminal} />
            <p className="m-1 text-gray-500">{Text.terminalHelp}</p>
          </div>
          <section className="bg-white shadow my-8 pb-4 container md:w-3/4 mx-auto">
            <HeaderBar id="resume">Resume</HeaderBar>
            <p className="px-6 py-1">{Text.lorem1}</p>
            <p className="px-6 py-1">{Text.lorem2}</p>
          </section>
          <section className="bg-white shadow my-8 pb-4 container md:w-3/4 mx-auto">
            <HeaderBar id="projects">Projects</HeaderBar>
            <p className="px-6 py-1">{Text.lorem3}</p>
          </section>
        </main>
      </div>

      <div className="py-16"></div>
      <Footer />
    </>
  );
}

export default Home;
