"use client";

import { ArrowDown2, ArrowUp2, CloseCircle } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import ProductMenu from "./ProductMenu";
import Link from "next/link";

type NavigationMenuProps = {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function NavigationMenu({ setIsOpen }: NavigationMenuProps) {
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  return (
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
                onClick={() => setIsProductMenuOpen(!isProductMenuOpen)}
                className="w-full flex items-center justify-between"
              >
                <span className={`${isProductMenuOpen ? "text-primary" : ""}`}>
                  Products
                </span>
                {isProductMenuOpen ? (
                  <ArrowUp2 values="Outline" color="#0C68F4" size={16} />
                ) : (
                  <ArrowDown2 values="Outline" color="#444444" size={16} />
                )}
              </button>
              {isProductMenuOpen && <ProductMenu setIsOpen={setIsOpen} />}
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact-us">Contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavigationMenu;
