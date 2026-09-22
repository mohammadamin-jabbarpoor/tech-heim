import {
  Airpods,
  Camera,
  Category,
  Data,
  Game,
  Mobile,
  Monitor,
  MonitorMobbile,
  Watch,
} from "iconsax-react";

export const categoryItems = [
  {
    title: "All",
    slug: undefined,
    icon: Category,
  },
  {
    title: "Mobile",
    slug: "mobile",
    icon: Mobile,
  },
  {
    title: "Laptop",
    slug: "laptop",
    icon: Monitor,
  },
  {
    title: "Audio",
    slug: undefined,
    disabled: true,
    icon: Airpods,
  },
  {
    title: "Wearable",
    slug: "watch",
    icon: Watch,
  },
  {
    title: "Camera",
    slug: undefined,
    disabled: true,
    icon: Camera,
  },
  {
    title: "Gaming",
    slug: "gaming",
    icon: Game,
  },
  {
    title: "Network",
    slug: undefined,
    disabled: true,
    icon: Data,
  },
  {
    title: "Accessories",
    slug: "accessories",
    icon: MonitorMobbile,
  },
];
