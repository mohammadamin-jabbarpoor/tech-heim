"use client";

import LayoutHeader from "@/src/components/features/account/LayoutHeader";
import WishlistWrapper from "@/src/components/features/account/wishlist/WishlistWrapper";

import { useWishlistStore } from "@/src/stores/wishlistStore";

function Wishlist() {
  const items = useWishlistStore((state) => state.items);

  return (
    <div>
      <LayoutHeader
        title="Wishlist"
        description="See your favorites list here"
      />

      {items.length === 0 ? (
        <p className="mt-6 text-gray-500">Your wishlist is empty.</p>
      ) : (
        <WishlistWrapper />
      )}
    </div>
  );
}

export default Wishlist;
