"use client";

import { IconProps } from "iconsax-react";
import { ComponentType } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type SidebarItem = {
  id: string;
  title: string;
  href?: string;
  icon: ComponentType<IconProps>;
};

type SidebarItemProps = {
  item: SidebarItem;
};

function AccountSidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname();

  const isActive = item.href === pathname;

  const Icon = item.icon;

  const logout = item.id === "logout";

  if (!item.href) {
    return (
      <button
        type="button"
        className={`relative flex w-full items-center justify-start gap-4 px-3.5 py-6 font-light text-xl cursor-pointer  ${
          logout ? "text-error" : "text-black hover:text-primary"
        }`}
      >
        <Icon variant="Outline" size={24} color="black" />

        <span>{item.title}</span>
      </button>
    );
  }

  return (
    <Link
      href={item.href}
      className={`relative flex w-full items-center justify-start gap-4 px-3.5 py-6 font-light transition-colors text-xl ${
        isActive && !logout
          ? "text-primary border-l-2 border-l-primary"
          : "text-black hover:text-primary"
      }`}
    >
      <Icon variant="Outline" size={24} color="black" />

      <span>{item.title}</span>
    </Link>
  );
}

export default AccountSidebarItem;
