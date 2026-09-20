"use client";

import { Bag } from "iconsax-react";
import Link from "next/link";

function CartButton() {
  return (
    <Link href="/cart" className="relative">
      <Bag
        variant="Outline"
        size={24}
        color="black"
        className="m-2 cursor-pointer"
      />
    </Link>
  );
}

export default CartButton;
