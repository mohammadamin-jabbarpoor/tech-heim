"use client";

import {
  ArrowDown2,
  ArrowUp2,
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
  SearchNormal1,
  TableDocument,
  Watch,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCartStore, selectCartCount } from "@/store/cart-store";

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

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogIn, setIsLogIn] = useState(false);

  return (
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
              <Image src="/mobile-logo.svg" alt="logo" width={42} height={47} />
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
                      <ArrowDown2 values="Outline" color="#444444" size={16} />
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
  );
}

export default MobileNavbar;
