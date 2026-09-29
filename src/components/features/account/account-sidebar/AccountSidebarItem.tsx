"use client";

import { IconProps } from "iconsax-react";
import { ComponentType } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "@/src/lib/auth/auth-client";

type SidebarItem = {
  id: string;
  title: string;
  href?: string;
  icon: ComponentType<IconProps>;
};

export type SidebarItemProps = {
  item: SidebarItem;
};

function AccountSidebarItem({ item }: SidebarItemProps) {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = item.href === pathname;

  const Icon = item.icon;

  const logout = item.id === "logout";

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/");
    router.refresh();
  };

  if (!item.href) {
    return (
      <button
        type="button"
        onClick={logout ? handleLogout : undefined}
        className="relative flex w-full items-center justify-start gap-4 px-3.5 py-6 cursor-pointer text-error"
      >
        <Icon variant="Outline" size={24} color="black" />

        <span className="font-light text-xl">{item.title}</span>
      </button>
    );
  }

  return (
    <Link
      href={item.href}
      className={`relative flex w-full items-center justify-start gap-4 px-3.5 py-6 transition-colors ${
        isActive && !logout
          ? "text-primary border-l-2 border-l-primary"
          : "text-black hover:text-primary"
      }`}
    >
      <Icon variant="Outline" size={24} color="black" />

      <span className="font-light text-xl">{item.title}</span>
    </Link>
  );
}

export default AccountSidebarItem;
