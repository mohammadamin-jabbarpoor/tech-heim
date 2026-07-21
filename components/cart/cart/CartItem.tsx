"use client";

import { MAX_CART_QUANTITY } from "@/lib/cart/constants";
import { getImageUrl } from "@/lib/imagekit/index";
import { useCartStore } from "@/store/cart-store";
import { CartItemType } from "@/types/cart";
import { Add, Chainlink, Minus, Trash, Truck, Verify } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";
import { toast } from "sonner";

function CartItem({ item }: { item: CartItemType }) {
  const [hover, setHover] = useState(false);

  const { removeItem, increaseQuantity, decreaseQuantity } = useCartStore();

  const handleIncreaseQuantity = () => {
    if (item.quantity >= MAX_CART_QUANTITY) {
      toast.error("You can only add 3 of this item");
      return;
    }

    increaseQuantity(item.cartItemId);
  };

  return (
    <div className="w-full h-53 flex items-center justify-baseline gap-6 px-4 py-2 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
      <div className="relative w-45.5 h-49">
        <Image
          src={getImageUrl(item.thumbnail.path)}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full py-3 flex flex-col gap-6">
        <p className="font-medium">{item.title}</p>
        <div className="flex flex-col gap-2">
          {item.option && (
            <div className="flex items-center gap-1">
              {item.option.type === "color" ? (
                <div
                  className={`${item.option?.type === "color" ? "w-4 h-4 rounded-full" : ""}`}
                  style={{ backgroundColor: item.option?.value ?? "" }}
                />
              ) : (
                <Chainlink variant="Outline" size={16} color="#0C68F4" />
              )}
              <span className="font-medium text-[10px] text-gray-600">
                {item.option?.name}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Truck variant="Outline" size={16} color="#0C68F4" />
            <span className="font-medium text-[10px] text-gray-600">
              Free Delivery
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Verify variant="Outline" size={16} color="#0C68F4" />
            <span className="font-medium text-[10px] text-gray-600">
              Guaranteed
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {item.compareAtPrice && (
              <span className="text-xs text-gray-600 line-through">
                $ {item.compareAtPrice}
              </span>
            )}
            <span>$ {item.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => removeItem(item.cartItemId)}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="cursor-pointer"
            >
              <Trash
                variant={hover ? "Bold" : "Outline"}
                size={16}
                color="#C91433"
              />
            </button>
            <div className="flex items-center justify-between gap-3 mr-6 border-b border-b-gray-600">
              <Minus
                onClick={() => decreaseQuantity(item.cartItemId)}
                variant="Outline"
                size={16}
                color="#717171"
                className="cursor-pointer"
              />
              <span className="font-light text-sm text-gray-600">
                {item.quantity}
              </span>
              <Add
                onClick={handleIncreaseQuantity}
                variant="Outline"
                size={16}
                color="#717171"
                className="cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
