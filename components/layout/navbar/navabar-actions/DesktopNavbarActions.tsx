import AuthModal from "@/components/auth/desktop/AuthModal";

import { useState } from "react";
import CartButton from "./CartButton";
import SearchButton from "./SearchButton";
import { authClient } from "@/lib/auth/auth-client";
import UserMenu from "./UserMenu";

type NavbarActionsProps = {
  session: typeof authClient.$Infer.Session | null;
};

function DesktopNavbarActions({ session }: NavbarActionsProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <SearchButton />

        <CartButton />

        <UserMenu
          session={session}
          onLoginClick={() => setIsAuthModalOpen(true)}
        />
      </div>
      {isAuthModalOpen && (
        <AuthModal onClose={() => setIsAuthModalOpen(false)} />
      )}
    </>
  );
}

export default DesktopNavbarActions;
