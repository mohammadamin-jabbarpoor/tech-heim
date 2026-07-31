import {
  Camera,
  Data,
  Devices,
  Game,
  Headphone,
  Mobile,
  Monitor,
  TableDocument,
  Watch,
} from "iconsax-react";

export const ProductMenuItems = [
  {
    icon: Mobile,
    title: "Mobile Phones",
    href: "/mobile",
  },
  {
    icon: Monitor,
    title: "Laptops & Computers",
    href: "laptop",
  },
  {
    icon: TableDocument,
    title: "Tablets & E-reader",
    disabled: true,
  },
  {
    icon: Watch,
    title: "Wearables",
    href: "watch",
  },
  {
    icon: Headphone,
    title: "Audio",
    disabled: true,
  },
  {
    icon: Camera,
    title: "Cameras",
    disabled: true,
  },
  {
    icon: Game,
    title: "Gaming",
    href: "gaming",
  },
  {
    icon: Data,
    title: "Networking",
    disabled: true,
  },
  {
    icon: Devices,
    title: "Accessories",
    href: "accessories",
  },
];
