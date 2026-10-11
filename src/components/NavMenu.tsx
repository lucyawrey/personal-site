import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, CodeBracketIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { GithubIcon, LinkedinIcon } from "components/Icons";
import { profile } from "content/profile";

const navigation = [
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Terminal", href: "#terminal" },
  { name: "Contact", href: "#contact" },
];

const social = [
  { name: "GitHub", href: profile.links.github, Icon: GithubIcon },
  { name: "LinkedIn", href: profile.links.linkedin, Icon: LinkedinIcon },
];

function NavMenu() {
  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-10 border-b border-slate-200 bg-white/90 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-950/90"
    >
      {({ open }) => (
        <>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="#top" className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <CodeBracketIcon className="h-7 w-7" aria-hidden="true" />
                <span className="text-lg font-semibold">{profile.name}</span>
              </a>
              <div className="hidden md:flex items-center gap-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
                <span className="mx-2 h-6 w-px bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
                {social.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{name}</span>
                  </a>
                ))}
              </div>
              <DisclosureButton className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:bg-slate-100 hover:text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-500 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white">
                <span className="sr-only">{open ? "Close main menu" : "Open main menu"}</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                )}
              </DisclosureButton>
            </div>
          </div>

          <DisclosurePanel className="md:hidden border-t border-slate-200 dark:border-slate-800">
            <div className="px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <div className="flex gap-2 pt-2">
                {social.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <Icon className="h-5 w-5" />
                    {name}
                  </a>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default NavMenu;
