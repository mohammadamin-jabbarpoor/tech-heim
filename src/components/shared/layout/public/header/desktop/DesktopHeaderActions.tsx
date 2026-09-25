"use client";

import { useState } from "react";
import CartButton from "../mobile/CartButton";
import UserMenu from "../mobile/UserMenu";
import SearchButton from "./SearchButton";
import SearchModal from "../search/SearchModal";

function DesktopHeaderActions() {
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

        <UserMenu />
      </div>
    </>
  );
}

export default DesktopHeaderActions;
