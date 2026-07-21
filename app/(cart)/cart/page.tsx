"use client";

import CartLayout from "@/components/cart/cart/CartLayout";
import EmptyCart from "@/components/cart/cart/EmptyCart";
import Stepper from "@/components/cart/Stepper";
import { useCartStore } from "@/store/cart-store";

function page() {
  const items = useCartStore((state) => state.items);
  return (
    <div>
      {items.length ? (
        <div>
          <Stepper />
          <CartLayout items={items} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default page;
