import { Icon } from "iconsax-react";

export type FooterItemType = {
  name: string;
  href: string;
  icon?: Icon;
};

export type FooterColumnType = {
  title: string;
  items: FooterItemType[];
};

export type MediaImagesType = {
  image: string;
  title: string;
};

export type PaymentImagesType = {
  image: string;
  title: string;
};
