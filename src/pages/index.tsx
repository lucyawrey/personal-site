import Terminal from "components/Terminal";
import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";
import Head from "next/head";
import Layout from "components/Layout";
import Section from "components/Section";

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
              <div className="mt-6 md:w-1/2 md:ml-5 md:mt-0">
                <h2 className="text-2xl font-bold text-gray-700 text-center">Email</h2>
                <a
                  className="block font-medium text-xl text-blue-600 dark:text-blue-500 hover:underline text-center"
                  href={`mailto:${Text.email}`}
                >
                  {Text.email}
                </a>
                <p className="mt-4">{Text.aboutMe}</p>
              </div>
            </div>
          </Section>

          <Section title="Resume" id="resume">
            <a
              href={Text.files.resume}
              className="block text-center m-10 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 focus:outline-none dark:focus:ring-blue-800"
            >
              Download
            </a>
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
