import { Disclosure } from "@headlessui/react";
import { CodeIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Resume", href: "#resume", current: false },
  { name: "Projects", href: "#projects", current: false },
]

function classs(...classes: any) {
  return classes.filter(Boolean).join(" ")
}

function NavMenu() {
  return (
    <Disclosure as="nav" class="bg-gray-800">
      {({ open }) => (
        <>
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <CodeIcon class="text-blue-500 h-8 w-8 inline" />
                  <span class="text-blue-500 px-3 text-lg font-medium">Lucy Awrey</span>
                </div>
                <div class="hidden md:block">
                  <div class="ml-6 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        class={classs(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div class="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                  <span class="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon class="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon class="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel class="md:hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  class={classs(
                    item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default NavMenu;
