"use client";

import { useEffect } from "react";
import { useCartStore } from "@/store/cart-store";
import { mapCartItems } from "@/lib/cart/map-cart-items";
import { syncUserCart } from "@/lib/cart/sync-user-cart";
import { useSession } from "@/lib/auth/auth-client";

export function useSyncUserCart() {
  const { data: session, isPending } = useSession();

  const setItems = useCartStore((state) => state.setItems);
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    if (isPending) {
      return;
    }

    const syncCart = async () => {
      if (!session?.user) {
        clearCart();
        return;
      }

      try {
        const result = await syncUserCart();

        if (!result.success) {
          clearCart();
          return;
        }

        const items = mapCartItems(result.items);

        setItems(items);
      } catch (error) {
        console.error("SYNC_USER_CART_ERROR:", error);
      }
    };

    syncCart();
  }, [session, isPending, setItems, clearCart]);
}
