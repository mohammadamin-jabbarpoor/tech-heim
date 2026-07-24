"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from "@/lib/auth/auth-client";
import NavbarActions from "./navabar-actions/NavbarActions";

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

function DesktopNavbar() {
  const { data: session, isPending } = authClient.useSession();

  const pathname = usePathname();

  return (
    <>
      <div className="hidden w-full h-25 sm:flex items-center justify-between sm:px-14.5 md:px-19.5 lg:px-24 xl:px-27 mx-auto sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-360">
        <Image src="/logo.png" alt="logo" width={56} height={63} />
        <div>
          <nav>
            <ul className="flex items-center justify-center gap-12">
              {navItem.map((item) => {
                const isActive = pathname !== "/" && pathname === item.href;

                return (
                  <li key={item.title}>
                    <Link
                      href={item.href}
                      className={`group relative inline-block p-2 text-lg font-light transition-all duration-200 ${
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
        {isPending ? (
          <div className="h-10 w-34 skeleton-shimmer rounded-lg" />
        ) : (
          <NavbarActions session={session} />
        )}
      </div>
    </>
  );
}

export default DesktopNavbar;
