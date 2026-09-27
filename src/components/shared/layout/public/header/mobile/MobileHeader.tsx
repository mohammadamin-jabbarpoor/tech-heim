"use client";

import Link from "next/link";
import MobileNavigation from "./MobileNavigation";
import MobileHeaderActions from "./MobileHeaderActions";
import SearchInput from "./SearchInput";
import { useEffect, useState } from "react";
import SearchModal from "../search/SearchModal";
import { authClient } from "@/src/lib/auth/auth-client";

function MobileHeader() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isSearchModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSearchModalOpen]);

  return (
    <div className="md:hidden w-full h-23 px-6">
      <div className="w-full h-10 flex items-center justify-between mb-3">
        <MobileNavigation />

        <Link href="/" className="font-medium text-primary-400">
          Tech Heim
        </Link>
        <MobileHeaderActions session={session} />
      </div>
      <div onClick={() => setIsSearchModalOpen(true)}>
        <SearchInput />
      </div>
      {isSearchModalOpen && (
        <SearchModal onClose={() => setIsSearchModalOpen(false)} />
      )}
    </div>
  );
}

export default MobileHeader;
