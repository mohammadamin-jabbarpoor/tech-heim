"use client";

import { authClient } from "@/lib/auth/auth-client";
import MobileNavigation from "./MobileNavigation";
import SearchInput from "./SearchInput";
import MobileNavbarActions from "./navabar-actions/MobileNavbarActions";
import Link from "next/link";

function MobileNavbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <div className="md:hidden w-full h-23 px-6">
      <div className="w-full h-10 flex items-center justify-between mb-3">
        <MobileNavigation />

        <Link href="/" className="font-medium text-primary-400">
          Tech Heim
        </Link>
        {isPending ? (
          <div className="h-6 w-16 skeleton-shimmer rounded-lg" />
        ) : (
          <MobileNavbarActions session={session} />
        )}
      </div>
      <SearchInput />
    </div>
  );
}

export default MobileNavbar;
