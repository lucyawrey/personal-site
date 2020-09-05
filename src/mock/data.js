import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lucy Awrey | Personal Site',
  lang: 'en',
  description: 'Welcome to my personal site, hope you like it!',
};

// HERO DATA
export const heroData = {
  title: "Hey, I'm",
  name: 'Lucy',
  subtitle: 'I like to code, cook, and sometimes go outside.',
  cta: 'Learn more!',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'I am a human person.',
  paragraphTwo:
    'I am also a full stack web developer who likes to make things. This site is very much a work in progress, have not had the time to fill out my projects yet.',
  paragraphThree: 'Check out my resume?',
  resume: 'LucyAwreyResume2020.pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to reach out?',
  btn: 'Email me',
  email: 'lucyawrey@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/lucyawrey',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/lucyawrey',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
