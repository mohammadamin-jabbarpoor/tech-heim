"use client";

import { getImageUrl } from "@/src/lib/imageKit";
import { useWishlistStore } from "@/src/stores/wishlistStore";
import { ShoppingCart, Trash, Truck, Verify } from "iconsax-react";
import Image from "next/image";

function MobileWishlist() {
  const items = useWishlistStore((state) => state.items);

  const removeFromWishlist = useWishlistStore(
    (state) => state.removeFromWishlist,
  );

  return (
    <div className="xl:hidden mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4">
      {items.map((item) => {
        const title =
          item.title.length > 22 ? `${item.title.slice(0, 22)}...` : item.title;
        return (
          <div
            key={item.id}
            className="min-w-78 h-50 flex items-center justify-between pl-1 pr-2 py-3 xs:p-3 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]"
          >
            <div className="relative w-30 xs:w-40 sm:w-30 h-33.5 xs:h-44 sm:h-33.5">
              <Image
                src={getImageUrl(item.thumbnail.path ?? "")}
                alt={item.thumbnail.alt ?? item.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium line-clamp-1">{title}</p>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  {item.option && (
                    <div className="flex items-center gap-1">
                      {item.option.type === "color" && (
                        <div
                          className={`${item.option?.type === "color" ? "w-4 h-4 border rounded-full" : ""}`}
                          style={{ backgroundColor: item.option?.value ?? "" }}
                        />
                      )}
                      <span className="font-medium text-xs text-gray-600">
                        {item.option?.name}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <Truck variant="Outline" size={16} color="#0C68F4" />
                  <span className="font-medium text-xs text-gray-600">
                    Free Delivery
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Verify variant="Outline" size={16} color="#0C68F4" />
                  <span className="font-medium text-xs text-gray-600">
                    Guaranteed
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {item.compareAtPrice && (
                  <p className="text-xs md:text-sm font-light text-gray-600 line-through">
                    ${item.compareAtPrice?.toFixed(2)}
                  </p>
                )}
                <p className="text-base md:text-lg">
                  ${item.price?.toFixed(2)}
                </p>
              </div>
              <div className="w-42 flex items-center justify-between">
                <button
                  type="button"
                  className="flex items-center gap-2 px-1 py-2 rounded-lg border-2 border-primary text-primary md:hover:text-white md:hover:bg-primary md:cursor-pointer md:transition-all md:duration-300"
                >
                  <ShoppingCart
                    variant="Outline"
                    size={24}
                    color="currentColor"
                  />

                  <span className="text-sm">Add to cart</span>
                </button>
                <button
                  type="button"
                  onClick={() => removeFromWishlist(item.id)}
                  className="cursor-pointer"
                  aria-label={`Remove ${item.title} from wishlist`}
                >
                  <Trash variant="Outline" size={24} color="#C91433" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MobileWishlist;
