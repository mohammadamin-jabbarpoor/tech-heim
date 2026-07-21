"use client";

import EmptyCart from "@/components/cart/cart/EmptyCart";
import CheckoutLayout from "@/components/cart/checkout/CheckoutLayout";
import Stepper from "@/components/cart/Stepper";
import { useCartStore } from "@/store/cart-store";

function page() {
  const items = useCartStore((state) => state.items);

  return (
    <div>
      {items.length ? (
        <div>
          <Stepper />
          <CheckoutLayout items={items} />
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}

export default page;
