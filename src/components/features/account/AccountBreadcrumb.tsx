"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "./account-sidebar/AccountSidebar";
import { ArrowRight2 } from "iconsax-react";

function AccountBreadcrumb() {
  const pathname = usePathname();

  const currentItem = sidebarItems.find((item) => item.href === pathname);

  console.log(pathname, currentItem);

  return (
    <div className="flex items-center mt-6 mb-10">
      <Link
        href="/"
        className="font-light text-lg text-gray-600 hover:text-primary transition-colors"
      >
        Home
      </Link>

      <ArrowRight2
        className="mt-0.5"
        variant="Outline"
        size={24}
        color="#717171"
      />

      <Link
        href="/account"
        className="font-light text-lg text-gray-600 hover:text-primary transition-colors"
      >
        Account
      </Link>

      {currentItem && (
        <>
          <ArrowRight2
            className="mt-0.5"
            variant="Outline"
            size={24}
            color="#717171"
          />

          <span className="font-light text-lg text-primary underline underline-offset-8">
            {currentItem.title}
          </span>
        </>
      )}
    </div>
  );
}

export default AccountBreadcrumb;
