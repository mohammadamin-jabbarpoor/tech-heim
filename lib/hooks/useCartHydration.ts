"use client";

import { useEffect, useState } from "react";
import { useCartStore } from "@/store/cart-store";

export function useCartHydration() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const hydrate = async () => {
      await useCartStore.persist.rehydrate();
      setHydrated(true);
    };

    hydrate();
  }, []);

  return hydrated;
}
