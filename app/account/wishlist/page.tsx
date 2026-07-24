"use client";

import { createCartItemFromWishlist } from "@/lib/cart/create-cart-item-from-wishlist";
import { getImageUrl } from "@/lib/imagekit/index";
import { useCartStore } from "@/store/cart-store";
import { useWishlistStore, WishlistItem } from "@/store/wishlist-store";
import { ShoppingCart, Trash } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

function Wishlist() {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const items = useWishlistStore((state) => state.items);

  const addItem = useCartStore((state) => state.addItem);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  const handleAddToCart = (item: WishlistItem) => {
    const cartItem = createCartItemFromWishlist(item);

    addItem(cartItem);

    toast.success("Added to cart");
  };

  return (
    <div>
      <h1 className="text-2xl font-medium">My Wishlist</h1>

      {items.length === 0 ? (
        <p className="mt-6 text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="mt-6 grid grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="w-72 h-86.5 space-y-4">
              <div className="relative w-68 h-50.5">
                <Image
                  src={getImageUrl(item.thumbnail.path ?? "")}
                  alt={item.thumbnail.alt ?? item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="w-full h-px bg-linear-to-r from-[#428AF6]/30 via-[#0951BE] to-[#428AF6]/30" />

              <div className="space-y-2">
                <p className="h-9 font-light text-primary-500 line-clamp-1 truncate">
                  {item.title}
                </p>
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      handleAddToCart(item);
                    }}
                    className="flex gap-2 rounded-lg border-2 border-primary text-primary hover:text-white hover:bg-primary px-4 py-2.5 cursor-pointer transition-all duration-300"
                  >
                    <ShoppingCart
                      variant="Outline"
                      size={24}
                      color="currentColor"
                    />

                    <span className="">Add to cart</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => removeFromWishlist(item.id)}
                    onMouseEnter={() => setHoveredItemId(item.id)}
                    onMouseLeave={() => setHoveredItemId(null)}
                    className="cursor-pointer"
                    aria-label={`Remove ${item.title} from wishlist`}
                  >
                    <Trash
                      variant={hoveredItemId === item.id ? "Bold" : "Outline"}
                      size={24}
                      color="#C91433"
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
