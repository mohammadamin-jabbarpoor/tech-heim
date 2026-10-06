"use client";

import { useRouter } from "next/navigation";
import { SidebarItemProps } from "./account-sidebar/AccountSidebarItem";
import { authClient } from "@/src/lib/auth/auth-client";
import { ArrowRight, ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { useCartStore } from "@/src/stores/cartStore";

function MobileAccountItem({ item }: SidebarItemProps) {
  const router = useRouter();

  const Icon = item.icon;

  const logout = item.id === "logout";

  const handleLogout = async () => {
    await authClient.signOut();

    useCartStore.getState().clearCart();

    router.push("/");
    router.refresh();
  };

  if (!item.href) {
    return (
      <button
        type="button"
        onClick={logout ? handleLogout : undefined}
        className="flex w-full items-center justify-between py-2.5 cursor-pointer text-error border-b border-b-gray-200"
      >
        <div className="flex items-center gap-2">
          <Icon variant="Outline" size={16} color="black" />
          <span className="font-light text-base">{item.title}</span>
        </div>
        <div className="w-4 h-4 m-2">
          <ArrowRight2 color="#b4b4b4" />
        </div>
      </button>
    );
  }

  return (
    <Link
      href={item.href}
      className="flex w-full items-center justify-between py-2.5 cursor-pointer border-b border-b-gray-200"
    >
      <div className="flex items-center gap-2">
        <Icon variant="Outline" size={16} color="black" />
        <span className="font-light text-base">{item.title}</span>
      </div>
      <div className="w-4 h-4 m-2">
        <ArrowRight2 color="#b4b4b4" />
      </div>
    </Link>
  );
}

export default MobileAccountItem;
