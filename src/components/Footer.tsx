import { profile } from "content/profile";

function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-8 text-center text-sm text-slate-500 dark:text-slate-400">
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with Next.js and Tailwind CSS ·{" "}
        <a
          className="underline hover:text-blue-600"
          href="https://github.com/lucyawrey/personal-site"
        >
          Source
        </a>
      </p>
    </footer>
  );
}

export default Footer;
