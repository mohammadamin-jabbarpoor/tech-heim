"use client";

import EmptyCart from "@/src/components/features/cart/cart/EmptyCart";
import Stepper from "@/src/components/features/cart/cart/stepper/Stepper";
import PaymentLayout from "@/src/components/features/cart/payment/PaymentLayout";
import { useCartStore } from "@/src/stores/cartStore";

function page() {
  const items = useCartStore((state) => state.items);

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
