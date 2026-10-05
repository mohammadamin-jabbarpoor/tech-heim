"use client";

import CartButton from "./CartButton";
import UserMenu from "./UserMenu";
import { authClient } from "@/src/lib/auth/auth-client";
import { LoginCurve } from "iconsax-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

type HeaderActionsProps = {
  session: typeof authClient.$Infer.Session | null;
};

function MobileHeaderActions({ session }: HeaderActionsProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleLogin = () => {
    const currentUrl = searchParams.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;

    router.push(`/login?callbackUrl=${encodeURIComponent(currentUrl)}`);
  };

  return (
    <>
      {!session?.user ? (
        <button
          type="button"
          onClick={handleLogin}
          className="flex items-center gap-2"
        >
          <LoginCurve variant="Outline" size={24} color="#0C68F4" />
          <p className="text-sm text-primary">Login</p>
        </button>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <CartButton />

          <UserMenu session={session} />
        </div>
      )}
    </>
  );
}

export default MobileHeaderActions;
