import Terminal from "components/Terminal";
import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";
import HeaderBar from "components/HeaderBar";
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
            <p>{Text.aboutMe}</p>
          </Section>
          <Section title="Resume" id="resume">
            <p>{Text.resume}</p>
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
