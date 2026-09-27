"use client";

import { useEffect, useState } from "react";
import CartButton from "./CartButton";
import UserMenu from "./UserMenu";
import { authClient } from "@/src/lib/auth/auth-client";
import { LoginCurve } from "iconsax-react";
import MobileAuthModal from "@/src/components/features/auth/mobile/MobileAuthModal";

type HeaderActionsProps = {
  session: typeof authClient.$Infer.Session | null;
};

function MobileHeaderActions({ session }: HeaderActionsProps) {
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
      {!session?.user ? (
        <button
          type="button"
          onClick={() => setIsAuthModalOpen(true)}
          className="flex items-center gap-2"
        >
          <LoginCurve variant="Outline" size={24} color="#0C68F4" />
          <p className="text-sm text-primary">Login</p>
        </button>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <CartButton />

          <UserMenu
            session={session}
            onLoginClick={() => setIsAuthModalOpen(true)}
          />
        </div>
      )}

      {isAuthModalOpen && (
        <MobileAuthModal onClose={() => setIsAuthModalOpen(false)} />
      )}
    </>
  );
}

export default MobileHeaderActions;
