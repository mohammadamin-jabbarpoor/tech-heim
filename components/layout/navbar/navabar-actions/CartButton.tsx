"use client";

import { selectCartCount, useCartStore } from "@/store/cart-store";
import { Bag } from "iconsax-react";
import Link from "next/link";

function CartButton() {
  const cartCount = useCartStore(selectCartCount);
  return (
    <Link href="/cart" className="relative">
      <Bag
        variant="Outline"
        size={24}
        color="black"
        className="m-2 cursor-pointer"
      />

      {cartCount > 0 && (
        <span className="absolute -bottom-1 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-light text-xs text-white">
          {cartCount}
        </span>
      )}
    </Link>
  );
}

export default CartButton;
