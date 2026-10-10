// Portfolio content, kept in step with the master resume (Google Doc "Lucy Awrey Resume 2026 v3").

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

export const profile = {
  name: "Lucy Awrey",
  role: "Full-stack software engineer",
  focus: "C# / .NET · TypeScript · Vue · React",
  location: "Ypsilanti, MI · open to remote or hybrid",
  email: "lucyawrey@gmail.com",
  resume: "Lucy_Awrey_Resume.pdf",
  photo: "lucy.jpg",
  links: {
    github: "https://github.com/lucyawrey",
    linkedin: "https://www.linkedin.com/in/lucyawrey",
  },
  intro:
    "I build web apps from the database through the API to the UI. I spent 4.5 years at TRUIC working on production sites with C# / ASP.NET, Vue.js, and Azure, and led the six-person dev team as interim technical team lead in my final year. I'm looking for backend or full-stack work.",
  about: [
    "Hi, I'm Lucy. I've been programming since 2014, starting with dual-enrollment computer science classes in high school, and I've kept building side projects ever since to learn new tools.",
    "At work I've enjoyed the whole stack, but I'm happiest designing data models and APIs and making sure the things built on them stay fast and reliable. I also like the people side: planning work with a team, reviewing code, and writing documentation that helps the next person.",
    "Away from the keyboard I like to cook and play board games and tabletop RPGs, which is how a few of my projects got started.",
  ],
};

export const projects: Project[] = [
  {
    name: "SoulTabletop",
    years: "2026 – present",
    status: "Public soft launch",
    stack: ["Nuxt 4", "Vue 3", "TypeScript", "PostgreSQL", "Vitest"],
    summary:
      "An open-source (MIT) tabletop RPG platform, rebuilt from Lantern. I designed the architecture and use Claude Code as a coding assistant, reviewing its work.",
    details: [
      "Users write their own character sheets in a custom markup language with formulas and dice rolls.",
      "Campaign roles and permissions, copyable game systems, and a Pathfinder 2e importer.",
      "Vitest tests with GitHub Actions CI.",
    ],
    links: [
      { label: "soultabletop.com", href: "https://soultabletop.com" },
      { label: "Source", href: "https://github.com/lucyawrey/soultabletop" },
    ],
  },
  {
    name: "Project Comet",
    years: "2024 – present",
    status: "Playable prototype",
    stack: [".NET 10", "C#", "Unity", "WebSockets", "Docker", "AWS"],
    summary:
      "I'm designing the backend for an online action game. The current prototype has an authoritative .NET 10 game server that talks to players over WebSockets, and a Unity client that also runs in the browser.",
    details: [
      "Load-tested with 300 simulated players on a slow, lossy network (Docker, AWS).",
      "Earlier prototypes were in Rust.",
    ],
    links: [{ label: "Try the test build", href: "https://shapeland.lucyawrey.com" }],
  },
  {
    name: "Lantern",
    years: "2019 – 2024",
    status: "Predecessor to SoulTabletop",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "GraphQL"],
    summary:
      "An early-stage virtual tabletop for the web that I co-developed. SoulTabletop picks up where it left off.",
    details: [
      "Added sign-in and database access, a GraphQL API, offline support (PWA), and strict TypeScript.",
      "Built a separate Bun / ElysiaJS API for it.",
    ],
    links: [],
  },
];

export const otherProjects =
  "A Minecraft modpack with custom Java and Kotlin mods, a visual novel in Godot (both in progress), and this site (Next.js, TypeScript, Tailwind CSS).";

export const experience: Job[] = [
  {
    company: "The Really Useful Information Company (TRUIC)",
    title: "Software Engineer → Interim Technical Team Lead",
    dates: "February 2019 – October 2023",
    bullets: [
      "Built and maintained the internal CMS behind three public sites, the largest with 9,000+ guides. Built with a C# / ASP.NET API, a Vue.js frontend, and Cosmos DB on Azure App Service.",
      "Shipped full-stack features from prototype to production, covering the data model, API endpoints, and UI.",
      "Built backend services for the public ASP.NET sites and their most interactive features, including a free business logo generator.",
      "Led a partial move of older JavaScript components to React and TypeScript.",
      "Handled Azure deployments, scaling, and performance tuning through CI/CD pipelines.",
      "Worked with the analytics team on data collection and reporting in Google Analytics and Power BI.",
      "Interim Technical Team Lead (2022 – 2023): after the CTO left, led the six-person development team. Planned projects, set the architecture for new web apps, and kept existing products running smoothly.",
    ],
    sites: [
      { label: "How To Start An LLC", href: "https://howtostartanllc.com" },
      { label: "Startup Savant", href: "https://startupsavant.com" },
      { label: "truic.com", href: "https://truic.com" },
    ],
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "SQL", "HTML / CSS", "Python", "Java", "Rust"],
  },
  { group: "Backend", items: ["ASP.NET / .NET", "Node.js", "REST APIs", "gRPC"] },
  { group: "Frontend", items: ["Vue.js", "Nuxt", "React", "Next.js", "Tailwind CSS"] },
  {
    group: "Data",
    items: ["Azure Cosmos DB", "PostgreSQL", "SQLite", "Google Analytics", "Power BI"],
  },
  {
    group: "Testing & DevOps",
    items: ["xUnit", "Jest", "Vitest", "Azure App Service", "CI/CD", "GitHub Actions"],
  },
  {
    group: "Leadership",
    items: [
      "Team lead",
      "Software architecture",
      "Project planning",
      "Code review",
      "Documentation",
    ],
  },
];

export const education = [
  {
    school: "Eastern Michigan University",
    dates: "2017 – 2020",
    detail: "Completed three years toward a B.S. in Computer Science",
  },
  {
    school: "Washtenaw Technical Middle College",
    dates: "2014 – 2017",
    detail:
      "High school diploma through a dual-enrollment program with Washtenaw Community College, studying computer science",
  },
];
