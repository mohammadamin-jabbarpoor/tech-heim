"use client";

import {
  ArrowDown2,
  ArrowUp2,
  Bag,
  Bag2,
  Camera,
  CloseCircle,
  Data,
  Devices,
  DollarCircle,
  Game,
  HambergerMenu,
  Headphone,
  Heart,
  LoginCurve,
  LogoutCurve,
  Mobile,
  Monitor,
  ProfileCircle,
  SearchNormal1,
  TableDocument,
  User,
  Watch,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const userItems = [
  {
    id: crypto.randomUUID(),
    icon: Bag2,
    title: "Orders",
  },
  {
    id: crypto.randomUUID(),
    icon: Heart,
    title: "Wish List",
  },
  {
    id: crypto.randomUUID(),
    icon: DollarCircle,
    title: "Payments",
  },
  {
    id: crypto.randomUUID(),
    icon: LogoutCurve,
    title: "Log out",
  },
];

const ProductMenuItems = [
  {
    icon: Mobile,
    title: "Mobile Phones",
  },
  {
    icon: Monitor,
    title: "Laptops & Computers",
  },
  {
    icon: TableDocument,
    title: "Tablets & E-reader",
  },
  {
    icon: Watch,
    title: "Wearables",
  },
  {
    icon: Headphone,
    title: "Audio",
  },
  {
    icon: Camera,
    title: "Cameras",
  },
  {
    icon: Game,
    title: "Gaming",
  },
  {
    icon: Data,
    title: "Networking",
  },
  {
    icon: Devices,
    title: "Accessories",
  },
];

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
    href: "/contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(true);

  const pathname = usePathname();

  return (
    <>
      <div className="sm:hidden w-full h-23 px-6">
        <div className="w-full h-10 flex items-center justify-between mb-3">
          <HambergerMenu
            onClick={() => setIsOpen(true)}
            variant="Outline"
            size={24}
            color="black"
          />
          <h1 className="font-medium text-primary-400">Tech Heim</h1>
          <div className="flex items-center gap-2">
            <LoginCurve variant="Outline" size={24} color="#0C68F4" />
            <p className="text-sm text-primary">Login</p>
          </div>
        </div>
        <div className="relative w-full h-10 bg-gray-200 rounded">
          <input
            type="text"
            className="w-full h-full py-2 px-4 font-light text-xs"
            placeholder="What can we help you to find?"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <SearchNormal1 variant="Outline" size={24} color="#717171" />
          </div>
        </div>

        {isOpen && (
          <>
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 z-40"
            />
            <div className="fixed top-0 left-0 z-50 w-[70%] h-screen pl-6 py-4 bg-white">
              <div className="flex items-center justify-between mb-6">
                <Image
                  src="/mobile-logo.svg"
                  alt="logo"
                  width={42}
                  height={47}
                />
                <CloseCircle
                  className="pr-4"
                  variant="Outline"
                  size={40}
                  color="#444444"
                  onClick={() => setIsOpen(false)}
                />
              </div>
              <div className="py-1 pl-3 pr-5">
                <ul className="space-y-2 font-light text-gray-800">
                  <li>
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="w-full flex items-center justify-between"
                    >
                      <span className={`${isMenuOpen ? "text-primary" : ""}`}>
                        Products
                      </span>
                      {isMenuOpen ? (
                        <ArrowUp2 values="Outline" color="#0C68F4" size={16} />
                      ) : (
                        <ArrowDown2
                          values="Outline"
                          color="#444444"
                          size={16}
                        />
                      )}
                    </button>
                    {isMenuOpen && (
                      <ul className="mt-2 ml-4 space-y-2 text-gray-700">
                        {ProductMenuItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <li key={item.title}>
                              <Link
                                href="/products"
                                className="flex items-center gap-1"
                              >
                                <Icon
                                  variant="Outline"
                                  size={16}
                                  color="#505050"
                                />
                                <span className="font-light text-sm">
                                  {item.title}
                                </span>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact us</Link>
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
      </div>

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
                      className={`group relative inline-block text-lg font-light transition-all duration-200 ${
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
        <div className="flex items-center justify-center gap-2">
          <SearchNormal1
            variant="Linear"
            size={24}
            color="black"
            className="m-2 cursor-pointer"
          />
          <Bag
            variant="Outline"
            size={24}
            color="black"
            className="m-2 cursor-pointer"
          />

          {isLogIn ? (
            <div
              onMouseEnter={() => setIsOpen(true)}
              className="relative group"
            >
              <User
                variant="Linear"
                size={24}
                color="black"
                className="m-2 cursor-pointer"
              />

              {isOpen && (
                <div
                  onMouseEnter={() => setIsOpen(false)}
                  onMouseLeave={() => setIsOpen(false)}
                  className={`fixed inset-0 mt-25.25 bg-black/60 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                />
              )}

              <div
                onMouseLeave={() => setIsOpen(false)}
                className={`absolute top-full right-0 mt-7.5 w-72 rounded--lg bg-white shadow-lg transition-all ${isOpen ? "opacity-100 visible" : "opacity-0 invisible "}`}
              >
                <ul className="flex flex-col p-4 gap-6">
                  <li>
                    <div>
                      <div className="flex items-center gap-4">
                        <ProfileCircle
                          variant="Outline"
                          size={24}
                          color="black"
                        />
                        <p className="font-light text-lg text-primary">
                          Jimmy Smith
                        </p>
                      </div>
                      <p className="ml-10 font-light text-sm">
                        Jimmy.smith1996@gmail.com
                      </p>
                    </div>
                  </li>
                  {userItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li
                        key={item.id}
                        className="hover:text-primary cursor-pointer"
                      >
                        <div className="flex items-center gap-4">
                          <Icon
                            variant="Outline"
                            size={24}
                            color="currentColor"
                            className=" text-black transition-colors"
                          />
                          <span className="font-light text-lg">
                            {item.title}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ) : (
            <button className="px-4 py-3.5 text-white bg-primary hover:bg-primary-600 transition-all duration-300 rounded-lg cursor-pointer">
              Login / Sign Up
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
