"use client";

import { CallCalling, Location, SmsEdit } from "iconsax-react";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

const paymentImages = [
  { image: "/payment/paypal.svg", title: "paypal" },
  {
    image: "/payment/american.svg",
    title: "american",
  },
  { image: "/payment/visa.svg", title: "visa" },
  {
    image: "/payment/master-card.svg",
    title: "master",
  },
];

const footerLinks = [
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
    image: "/media/facebook.svg",
    title: "facebook",
  },
  {
    image: "/media/twitter.svg",
    title: "twitter",
  },
  {
    image: "/media/instagram.svg",
    title: "instagram",
  },
  {
    image: "/media/youtube.svg",
    title: "youtube",
  },
];

function Footer() {
  return (
    <>
      <DesktopFooter
        footerLinks={footerLinks}
        mediaImages={mediaImages}
        paymentImages={paymentImages}
      />

      <MobileFooter
        footerLinks={footerLinks}
        mediaImages={mediaImages}
        paymentImages={paymentImages}
      />
    </>
  );
}

export default Footer;
