"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItem = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "/products",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "Contact Us",
    href: "/contact-us",
  },
];

function NavLinks() {
  const pathname = usePathname();

  return (
    <div>
      <nav>
        <ul className="flex items-center justify-center gap-6 lg:gap-12">
          {navItem.map((item) => {
            const isActive = pathname !== "/" && pathname === item.href;

            return (
              <li key={item.title}>
                <Link
                  href={item.href}
                  className={`group relative inline-block p-2 text-sm lg:text-lg font-light transition-all duration-200 ${
                    isActive ? "text-primary" : "hover:text-primary"
                  }`}
                >
                  {item.title}

                  <div
                    className={`h-px w-full bg-linear-to-r from-[#0C68F4]/30 via-[#0C68F4]/70 to-[#0C68F4]/30 transition-transform duration-200 ${
                      isActive
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavLinks;
