"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { sidebarItems } from "@/src/lib/constants/sidebarItems";
import { ArrowRight2 } from "iconsax-react";

function AccountBreadcrumb() {
  const pathname = usePathname();

  const currentItem = sidebarItems.find((item) => item.href === pathname);

  return (
    <div className="flex items-center mt-4 md:mt-5 lg:mt-6 mb-4 md:mb-7 lg:mb-10">
      <Link
        href="/"
        className="font-light text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 hover:text-primary transition-colors"
      >
        Home
      </Link>

      <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
        <ArrowRight2 variant="Outline" color="#717171" />
      </div>

      <Link
        href="/account"
        className="font-light text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 hover:text-primary transition-colors"
      >
        Account
      </Link>

      {currentItem && (
        <>
          <div className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6">
            <ArrowRight2 variant="Outline" color="#717171" />
          </div>

          <span className="font-light text-xs sm:text-sm md:text-base lg:text-lg text-primary underline underline-offset-8">
            {currentItem.title}
          </span>
        </>
      )}
    </div>
  );
}

export default AccountBreadcrumb;
