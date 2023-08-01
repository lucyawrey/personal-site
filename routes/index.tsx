import Footer from "components/Footer.tsx";
import NavMenu from "components/NavMenu.tsx";
//import Terminal from "islands/Terminal.tsx";
//import { TerminalModel } from "models/TerminalModel.ts";
import Text from "content/text.json" assert { type: "json" };
import HeaderBar from "components/HeaderBar.tsx";

//const terminal = new TerminalModel();

function Home() {
  return (
    <>
      <div id="home" class="min-h-full">
        <NavMenu />
        <main>
          <div class="max-w-3xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* <Terminal model={terminal} /> */}
            <p class="m-1 text-gray-500">{Text.terminalHelp}</p>
          </div>
          <section class="bg-white shadow mt-8 mb-24 pb-4 container md:w-3/4 mx-auto text-xl text-center">
          <header class="py-6 border-dashed border-b-2 border-gray-500 mb-4">
            <h1 id="construction" class="text-3xl font-bold text-gray-900 text-center">👷‍♀️ Under Construction 👷‍♀️</h1>
          </header>
            <p class="px-12 py-6">{Text.construction}</p>
          </section>
          <section class="bg-white shadow my-8 pb-4 container md:w-3/4 mx-auto text-lg">
            <HeaderBar id="resume">Resume</HeaderBar>
            <p class="px-6 py-1">{Text.lorem1}</p>
            <p class="px-6 py-1">{Text.lorem2}</p>
          </section>
          <section class="bg-white shadow my-8 pb-4 container md:w-3/4 mx-auto text-lg">
            <HeaderBar id="projects">Projects</HeaderBar>
            <p class="px-6 py-1">{Text.lorem3}</p>
            <p class="px-6 py-1">{Text.lorem1}</p>
          </section>
        </main>
      </div>

      <div class="py-16"></div>
      <Footer />
    </>
  );
}

export default Home;
