"use client";

import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import MobileHeaderActions from "./MobileHeaderActions";
import SearchInput from "./SearchInput";

function MobileHeader() {
  return (
    <div className="md:hidden w-full h-23 px-6">
      <div className="w-full h-10 flex items-center justify-between mb-3">
        <MobileNavigation />

        <Link href="/" className="font-medium text-primary-400">
          Tech Heim
        </Link>
        {/* {isPending ? (
          <div className="h-6 w-16 skeleton-shimmer rounded-lg" />
        ) : ( */}
        <MobileHeaderActions />
        {/* )} */}
      </div>
      <SearchInput />
    </div>
  );
}

export default MobileHeader;
