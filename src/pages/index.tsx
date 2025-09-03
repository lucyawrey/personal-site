import Terminal from "components/Terminal";
import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";
import Head from "next/head";
import Layout from "components/Layout";
import Section from "components/Section";
import Pdf from "components/Pdf";

const terminal = new TerminalModel();

function Home() {
  return (
    <Layout>
      <div className="min-h-full">
        <Head>
          <title>Lucy Awrey's Personal Website</title>
        </Head>
        <main>
          <div className="max-w-[52rem] mx-auto py-6 sm:px-6 lg:px-8">
            <Terminal terminal={terminal} />
            <p className="m-1 text-gray-800">{Text.terminalHelp}</p>
          </div>

          <Section title="About Me" id="about-me">
            <div className="md:flex">
              <img
                src={Text.files.photo}
                className="rounded-md border-gray-500 border-2 md:w-1/2"
              />
              <p className="block mt-6 md:w-1/2 md:ml-5 md:mt-0">{Text.aboutMe}</p>
            </div>
          </Section>

          <Section title="Resume" id="resume">
            <Pdf fileUrl={Text.files.resume} />
          </Section>

          <Section title="Projects" id="projects">
            <p>{Text.projects}</p>
          </Section>
        </main>
      </div>
    </Layout>
  );
}

export default Home;
