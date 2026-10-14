"use client";

import { getImageUrl } from "@/src/lib/imageKit";
import { useWishlistStore } from "@/src/stores/wishlistStore";
import { ShoppingCart, Trash } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

function DesktopWishlist() {
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const items = useWishlistStore((state) => state.items);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  return (
    <div className="hidden xl:grid mt-6 grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="max-w-72 h-86.5 p-4 space-y-4 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]"
        >
          <div className="relative max-w-64 h-47.5">
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
  );
}

export default DesktopWishlist;
