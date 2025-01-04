import Footer from "components/Footer";
import NavMenu from "components/NavMenu";
import Terminal from "components/Terminal";
import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";
import HeaderBar from "components/HeaderBar";
import Head from "next/head";

const terminal = new TerminalModel();

function Home() {
  return (
    <>
      <Head>
        <title>Lucy Awrey's Personal Website</title>
      </Head>
      <div id="home" className="min-h-full">
        <NavMenu />
        <main>
          <div className="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
            <Terminal model={terminal} />
            <p className="m-1 text-gray-500">{Text.terminalHelp}</p>
          </div>
          <section className="bg-white shadow mt-8 mb-24 pb-4 container md:w-3/4 mx-auto text-xl text-center">
            <header className="py-6 border-dashed border-b-2 border-gray-500 mb-4">
              <h1 id="construction" className="text-3xl font-bold text-gray-900 text-center">
                👷‍♀️ Under Construction 👷‍♀️
              </h1>
            </header>
            <p className="px-12 py-6">{Text.construction}</p>
          </section>
          <section className="bg-white shadow my-8 pb-4 container md:w-3/4 mx-auto text-lg">
            <HeaderBar id="resume">Resume</HeaderBar>
            <p className="px-6 py-1">{Text.lorem1}</p>
            <p className="px-6 py-1">{Text.lorem2}</p>
          </section>
          <section className="bg-white shadow my-8 pb-4 container md:w-3/4 mx-auto text-lg">
            <HeaderBar id="projects">Projects</HeaderBar>
            <p className="px-6 py-1">{Text.lorem3}</p>
            <p className="px-6 py-1">{Text.lorem1}</p>
          </section>
        </main>
      </div>

      <div className="py-16"></div>
      <Footer />
    </>
  );
}

export default Home;
