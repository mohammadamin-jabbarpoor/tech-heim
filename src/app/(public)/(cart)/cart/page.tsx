"use client";

import CartLayout from "@/src/components/features/cart/cartLayout/CartLayout";
import EmptyCart from "@/src/components/features/cart/EmptyCart";
import Stepper from "@/src/components/features/cart/stepper/Stepper";
import { useCartStore } from "@/src/stores/cartStore";

function CartPage() {
  const items = useCartStore((state) => state.items);

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

export default CartPage;
