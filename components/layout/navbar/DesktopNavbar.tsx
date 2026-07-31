"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth/auth-client";
import DesktopNavbarActions from "./navabar-actions/DesktopNavbarActions";
import NavLinks from "./NavLinks";

function DesktopNavbar() {
  const { data: session, isPending } = authClient.useSession();

  return (
    <>
      <div className="hidden w-full h-25 md:flex items-center justify-between sm:px-14.5 md:px-19.5 lg:px-24 xl:px-27 mx-auto sm:max-w-3xl md:max-w-5xl lg:max-w-7xl xl:max-w-360">
        <Image src="/logo.png" alt="logo" width={56} height={63} />
        <NavLinks />
        {isPending ? (
          <div className="h-10 w-34 skeleton-shimmer rounded-lg" />
        ) : (
          <DesktopNavbarActions session={session} />
        )}
      </div>
    </>
  );
}

export default DesktopNavbar;
