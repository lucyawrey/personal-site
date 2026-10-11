import Head from "next/head";
import {
  ArrowTopRightOnSquareIcon,
  DocumentArrowDownIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Layout from "components/Layout";
import Section from "components/Section";
import Terminal from "components/Terminal";
import { GithubIcon, LinkedinIcon } from "components/Icons";
import { TerminalModel } from "models/TerminalModel";
import Text from "content/text.json";
import { education, experience, otherProjects, profile, projects, skills } from "content/profile";

const terminal = new TerminalModel();

const primaryButton =
  "inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white hover:bg-blue-700 focus:outline-hidden focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800";
const secondaryButton =
  "inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-medium text-slate-700 hover:bg-slate-50 focus:outline-hidden focus:ring-4 focus:ring-slate-200 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800 dark:focus:ring-slate-700";
const card =
  "rounded-xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900";
const tag =
  "rounded-full bg-slate-100 px-2.5 py-0.5 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-300";

function Home() {
  return (
    <Layout>
      <Head>
        <title>{`${profile.name} · ${profile.role}`}</title>
        <meta name="description" content={profile.intro} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main id="top" className="text-slate-700 dark:text-slate-300">
        {/* Hero */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 md:pt-20">
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {profile.location}
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white">
                {profile.name}
              </h1>
              <p className="mt-2 text-xl font-medium text-slate-600 dark:text-slate-300">
                {profile.role} <span className="text-slate-400">·</span> {profile.focus}
              </p>
              <p className="mt-5 text-lg leading-relaxed">{profile.intro}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href={profile.resume} className={primaryButton}>
                  <DocumentArrowDownIcon className="h-5 w-5" aria-hidden="true" />
                  Resume (PDF)
                </a>
                <a href={`mailto:${profile.email}`} className={secondaryButton}>
                  <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                  Email me
                </a>
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryButton}
                >
                  <GithubIcon className="h-5 w-5" />
                  GitHub
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryButton}
                >
                  <LinkedinIcon className="h-5 w-5" />
                  LinkedIn
                </a>
              </div>
            </div>
            <img
              src={profile.photo}
              alt={`Photo of ${profile.name}`}
              className="h-36 w-36 shrink-0 rounded-full object-cover object-top ring-4 ring-white shadow-md md:h-56 md:w-56 dark:ring-slate-800"
            />
          </div>
        </div>

        <Section title="Projects" id="projects" eyebrow="What I'm building">
          <div className="grid gap-6">
            {projects.map((project) => (
              <article key={project.name} className={card}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {project.years} · {project.status}
                  </p>
                </div>
                <p className="mt-3 leading-relaxed">{project.summary}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5">
                  {project.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className={tag}>
                      {item}
                    </span>
                  ))}
                </div>
                {project.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {project.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 font-medium text-blue-600 hover:underline dark:text-blue-400"
                      >
                        {link.label}
                        <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          <p className="mt-6">
            <span className="font-semibold text-slate-900 dark:text-white">Also: </span>
            {otherProjects}
          </p>
        </Section>

        <Section title="Experience" id="experience" eyebrow="Where I've worked">
          {experience.map((job) => (
            <article key={job.company} className={card}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {job.company}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{job.dates}</p>
              </div>
              <p className="mt-1 font-medium text-blue-700 dark:text-blue-300">{job.title}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Sites I worked on:{" "}
                {job.sites.map((site, i) => (
                  <span key={site.href}>
                    {i > 0 && ", "}
                    <a
                      href={site.href}
                      target="_blank"
                      rel="noreferrer"
                      className="underline hover:text-blue-600"
                    >
                      {site.label}
                    </a>
                  </span>
                ))}
              </p>
            </article>
          ))}

          <h3 className="mt-10 text-lg font-semibold text-slate-900 dark:text-white">Education</h3>
          <ul className="mt-3 space-y-3">
            {education.map((item) => (
              <li key={item.school}>
                <span className="font-medium text-slate-900 dark:text-white">{item.school}</span>{" "}
                <span className="text-sm text-slate-500 dark:text-slate-400">{item.dates}</span>
                <br />
                {item.detail}
              </li>
            ))}
          </ul>
        </Section>

        <Section title="Skills" id="skills" eyebrow="What I work with">
          <dl className="grid gap-6 sm:grid-cols-2">
            {skills.map(({ group, items }) => (
              <div key={group}>
                <dt className="font-semibold text-slate-900 dark:text-white">{group}</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className={tag}>
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section title="About me" id="about" eyebrow="A bit more">
          <div className="max-w-3xl space-y-4 text-lg leading-relaxed">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section title="Try the terminal" id="terminal" eyebrow="Just for fun">
          <p className="mb-4 text-lg">
            Prefer a command line? {Text.terminalHelp} There's a small text adventure in there too.
          </p>
          <Terminal terminal={terminal} />
        </Section>

        <Section title="Get in touch" id="contact" eyebrow="Contact">
          <div className={card}>
            <p className="text-lg">
              I'm open to backend and full-stack roles, remote or hybrid near Ann Arbor and
              Ypsilanti. The best way to reach me is email.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className={primaryButton}>
                <EnvelopeIcon className="h-5 w-5" aria-hidden="true" />
                {profile.email}
              </a>
              <a href={profile.resume} className={secondaryButton}>
                <DocumentArrowDownIcon className="h-5 w-5" aria-hidden="true" />
                Resume (PDF)
              </a>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
}

export default Home;
