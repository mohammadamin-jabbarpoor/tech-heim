"use client";

import { FooterColumn } from "@/app/types";
import {
  ArrowDown2,
  ArrowRight2,
  ArrowUp2,
  CallCalling,
  Copyright,
  Location,
  MessageQuestion,
  SmsEdit,
  User,
} from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const paymentImages = [
  { id: crypto.randomUUID(), image: "/payment/paypal.svg", title: "paypal" },
  {
    id: crypto.randomUUID(),
    image: "/payment/american.svg",
    title: "american",
  },
  { id: crypto.randomUUID(), image: "/payment/visa.svg", title: "visa" },
  {
    id: crypto.randomUUID(),
    image: "/payment/master-card.svg",
    title: "master",
  },
];

const footerLinks: FooterColumn[] = [
  {
    title: "Company",
    items: [
      { name: "about us", href: "/about-us" },
      { name: "blog", href: "/blog" },
      { name: "returns", href: "/" },
      { name: "order status", href: "/account/orders" },
    ],
  },
  {
    title: "Info",
    items: [
      { name: "How it works?", href: "/faq" },
      { name: "our promises", href: "/" },
      { name: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Contact us",
    items: [
      {
        name: "123 Main Street, Anytown, USA",
        href: "https://maps.google.com",
        icon: Location,
      },
      {
        name: "+1 (555) 123-4567",
        href: "tel:+15551234567",
        icon: CallCalling,
      },
      {
        name: "TechHeimSupport@gmail.com",
        href: "mailto:TechHeimSupport@gmail.com",
        icon: SmsEdit,
      },
    ],
  },
];

const footerDropdownLinks = [
  {
    id: crypto.randomUUID(),
    title: "Company",
    links: ["about us", "blog", "returns", "order status"],
  },
  {
    id: crypto.randomUUID(),
    title: "",
    links: ["", "", ""],
  },
  {
    id: crypto.randomUUID(),
    title: "",
    links: ["", "", ""],
  },
];

const mediaImages = [
  {
    id: crypto.randomUUID(),
    image: "/media/facebook.svg",
    title: "facebook",
  },
  {
    id: crypto.randomUUID(),
    image: "/media/twitter.svg",
    title: "twitter",
  },
  {
    id: crypto.randomUUID(),
    image: "/media/instagram.svg",
    title: "instagram",
  },
  {
    id: crypto.randomUUID(),
    image: "/media/youtube.svg",
    title: "youtube",
  },
];

function Footer() {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="hidden lg:block relative w-full h-86.75 bg-primary-900 overflow-hidden">
        <div className="flex items-start justify-center mt-12">
          <div className="flex items-start justify-between w-174 gap-25">
            {footerLinks.map((column) => (
              <div
                key={column.title}
                className="flex flex-col items-start gap-3 text-sm text-gray-300"
              >
                <h3 className="text-white">{column.title}</h3>

                <ul className="flex flex-col gap-3">
                  {column.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="flex items-center gap-1"
                        >
                          {Icon && (
                            <Icon variant="Outline" size={20} color="#cbcbcb" />
                          )}

                          <span className="font-light">{item.name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-end gap-11 w-132">
            <div className="flex flex-col items-start gap-4">
              <p className="text-white">Sign up for News and updates</p>
              <Link
                href="mailto:TechHeimSupport@gmail.com"
                className="flex items-center justify-between gap-23.75 p-3 rounded-lg cursor-pointer border border-gray-50"
              >
                <div className="flex items-center justify-center gap-2">
                  <User variant="Outline" size={24} color="#f9f9f9" />
                  <p className="font-light text-gray-50">E-mail Address</p>
                </div>
                <ArrowRight2 variant="Linear" size={24} color="#f9f9f9" />
              </Link>
              <div className="flex items-start gap-4">
                {mediaImages.map((item) => (
                  <Image
                    key={item.id}
                    src={item.image}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                ))}
              </div>
            </div>
            <div className="h-51.25 flex flex-col justify-between">
              <div className="w-10 h-10 flex items-center justify-center bg-primary-50 rounded-full cursor-pointer">
                <MessageQuestion variant="Outline" size={24} color="#2d2d2d" />
              </div>
              <div
                onClick={scrollToTop}
                className="w-10 h-10 flex items-center justify-center bg-primary-50 rounded-full cursor-pointer"
              >
                <ArrowUp2 variant="Linear" size={16} color="#2d2d2d" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-65 left-1/2 -translate-x-1/2 z-10">
          <div className="w-200.75 h-90.25 rounded-full bg-primary-400 opacity-70 blur-[80px]" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-14 bg-primary-900 z-20">
          <div className="max-w-360 mx-auto h-full px-27">
            <div className="absolute bottom-14 left flex items-center justify-center gap-1">
              {paymentImages.map((item) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  width={32}
                  height={24}
                  className="grayscale"
                />
              ))}
            </div>

            <div className="flex h-full items-center justify-between text-xs text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <Copyright variant="Linear" size={24} color="#cbcbcb" />
                <p>2026 Tech Heim.</p>
              </div>

              <div className="flex gap-12">
                <Link href="#">cookie settings</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Terms and Conditions</Link>
                <Link href="#">Imprint</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden flex relative flex-col w-full min-h-91 bg-primary-900 overflow-hidden">
        <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 pointer-events-none">
          <div className="w-100 h-45 rounded-full bg-primary-400 opacity-70 blur-[80px]" />
        </div>

        <div className="relative z-10 flex-1 py-4 px-6 space-y-4">
          <div className="w-full flex justify-between">
            <div className="w-10 h-10 flex items-center justify-center bg-primary-50 rounded-full">
              <MessageQuestion variant="Outline" size={24} color="#2d2d2d" />
            </div>
            <div
              onClick={scrollToTop}
              className="w-10 h-10 flex items-center justify-center bg-primary-50 rounded-full"
            >
              <ArrowUp2 variant="Linear" size={16} color="#2d2d2d" />
            </div>
          </div>

          <div className="space-y-3 p-2">
            <p className="font-medium text-white">
              Sign up for News and updates
            </p>
            <Link
              href="/signup"
              className="flex items-center justify-between px-3 py-2.5 border border-white rounded-lg"
            >
              <div className="flex items-center gap-2">
                <User variant="Outline" size={20} color="white" />
                <p className="font-light text-sm text-white">E-mail Address</p>
              </div>
              <ArrowRight2 variant="Outline" size={14} color="white" />
            </Link>
          </div>

          <div className="z-100">
            {footerLinks.map((item) => (
              <div key={item.title}>
                <div
                  onClick={() =>
                    setOpenItem(openItem === item.title ? null : item.title)
                  }
                  className="flex items-center justify-between h-10"
                >
                  <span className="font-medium text-white">{item.title}</span>
                  <div>
                    {openItem === item.title ? (
                      <ArrowUp2 variant="Outline" size={14} color="white" />
                    ) : (
                      <ArrowDown2 variant="Outline" size={14} color="white" />
                    )}
                  </div>
                </div>
                {openItem === item.title && (
                  <div className="pl-3 mt-2 flex flex-col gap-2">
                    {item.items.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-gray-300 font-light"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 h-10">
          <div className="z-10 absolute bottom-0 w-full flex justify-between py-2 px-6 bg-primary-900">
            <div className="flex items-center justify-center gap-1">
              {paymentImages.map((item) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  width={32}
                  height={24}
                  className="grayscale"
                />
              ))}
            </div>
            <div className="flex gap-2">
              {mediaImages.map((item) => (
                <Image
                  key={item.id}
                  src={item.image}
                  alt={item.title}
                  width={24}
                  height={24}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
