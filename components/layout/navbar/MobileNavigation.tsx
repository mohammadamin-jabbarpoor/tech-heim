"use client";

import { HambergerMenu } from "iconsax-react";
import { useState } from "react";
import NavigationMenu from "./NavigationMenu";

function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HambergerMenu
        onClick={() => setIsOpen(true)}
        variant="Outline"
        size={24}
        color="black"
      />
      {isOpen && <NavigationMenu setIsOpen={setIsOpen} />}
    </>
  );
}

export default MobileNavigation;
