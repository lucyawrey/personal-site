import copyData from "./copy.yml";

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  name: string;
  years: string;
  status: string;
  stack: string[];
  summary: string;
  details: string[];
  links: Link[];
}

export interface Job {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
  sites: Link[];
}

interface Section {
  eyebrow: string;
  title: string;
}

interface Copy {
  profile: {
    name: string;
    role: string;
    focus: string;
    location: string;
    email: string;
    resume: string;
    photo: string;
    links: { github: string; linkedin: string };
    intro: string;
  };
  sections: {
    projects: Section;
    experience: Section;
    skills: Section;
    contact: Section & { text: string };
    terminal: Section & { textBefore: string; textAfter: string };
  };
  projects: Project[];
  otherProjects: string;
  experience: Job[];
  education: { school: string; dates: string; detail: string }[];
  skills: { group: string; items: string[] }[];
  footer: { builtWith: string };
}

// YAML imports are untyped, so this shape is only as accurate as copy.yml.
export const copy = copyData as Copy;
