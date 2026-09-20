"use client";

import { useEffect, useState } from "react";
import CartButton from "./CartButton";
import UserMenu from "./UserMenu";

function MobileHeaderActions() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  useEffect(() => {
    if (isAuthModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isAuthModalOpen]);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <CartButton />

        <UserMenu />
      </div>
    </>
  );
}

export default MobileHeaderActions;
