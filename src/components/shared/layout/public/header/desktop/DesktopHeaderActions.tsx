"use client";

import { useState } from "react";
import CartButton from "../mobile/CartButton";
import UserMenu from "../mobile/UserMenu";
import SearchButton from "./SearchButton";
import SearchModal from "../search/SearchModal";
import AuthModal from "@/src/components/features/auth/desktop/AuthModal";
import { authClient } from "@/src/lib/auth/auth-client";

type HeaderActionsProps = {
  session: typeof authClient.$Infer.Session | null;
};

function DesktopHeaderActions({ session }: HeaderActionsProps) {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <div onClick={() => setIsSearchModalOpen(!isSearchModalOpen)}>
          <SearchButton />
        </div>

        {isSearchModalOpen && (
          <SearchModal onClose={() => setIsSearchModalOpen(false)} />
        )}

        <CartButton />

        <UserMenu session={session} />
      </div>
    </>
  );
}

export default DesktopHeaderActions;
