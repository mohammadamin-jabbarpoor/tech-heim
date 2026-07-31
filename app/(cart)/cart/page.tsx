"use client";

import CartLayout from "@/components/cart/cart/CartLayout";
import EmptyCart from "@/components/cart/cart/EmptyCart";
import Stepper from "@/components/cart/Stepper";
import { useCartHydration } from "@/lib/hooks/useCartHydration";
import { useCartStore } from "@/store/cart-store";

function page() {
  const items = useCartStore((state) => state.items);
  const hydrated = useCartHydration();

  if (!hydrated) {
    return null;
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div>
      <Stepper />
      <CartLayout items={items} />
    </div>
  );
}

export default page;
