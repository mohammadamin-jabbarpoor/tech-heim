"use client";

import MobileAuthModal from "@/components/auth/mobile/MobileAuthModal";
import { authClient } from "@/lib/auth/auth-client";
import { LoginCurve } from "iconsax-react";
import { useState } from "react";
import UserMenu from "./UserMenu";
import CartButton from "./CartButton";

type NavbarActionsProps = {
  session: typeof authClient.$Infer.Session | null;
};

function MobileNavbarActions({ session }: NavbarActionsProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

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

export default MobileNavbarActions;
