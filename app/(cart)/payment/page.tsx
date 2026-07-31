"use client";

import EmptyCart from "@/components/cart/cart/EmptyCart";
import PaymentLayout from "@/components/cart/payment/PaymentLayout";
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
      <PaymentLayout items={items} />
    </div>
  );
}

export default page;
