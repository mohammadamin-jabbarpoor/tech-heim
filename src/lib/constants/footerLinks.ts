import { CallCalling, Icon, Location, SmsEdit } from "iconsax-react";

type FooterItemType = {
  name: string;
  href: string;
  icon?: Icon;
};

export type FooterColumnType = {
  title: string;
  items: FooterItemType[];
};

export const footerLinks: FooterColumnType[] = [
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
