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
    <div className="w-full h-50 md:h-53 flex items-center justify-between gap-4 md:gap-5 lg:gap-6 px-1 md:px-2 lg:px-4 py-2 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
      <div className="relative w-30! h-33.5! lg:w-45.5 lg:h-49">
        <Image
          src={getImageUrl(item.thumbnail.path)}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full py-3 flex flex-col gap-4 md:gap-5 lg:gap-6">
        <p className="font-medium text-sm lg:text-base line-clamp-1 sm:line-clamp-none">
          {item.title}
        </p>
        <div className="flex flex-col gap-2">
          {item.option && (
            <div className="flex items-center gap-1">
              {item.option.type === "color" ? (
                <div
                  className={`${item.option?.type === "color" ? "w-4 h-4 border rounded-full" : ""}`}
                  style={{ backgroundColor: item.option?.value ?? "" }}
                />
              ) : (
                <Chainlink
                  variant="Outline"
                  color="#0C68F4"
                  className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4"
                />
              )}
              <span className="font-medium text-[10px] text-gray-600">
                {item.option?.name}
              </span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Truck
              variant="Outline"
              color="#0C68F4"
              className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4"
            />
            <span className="font-medium text-[10px] text-gray-600">
              Free Delivery
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Verify
              variant="Outline"
              color="#0C68F4"
              className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4"
            />
            <span className="font-medium text-[10px] text-gray-600">
              Guaranteed
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-0 xs:flex-row xs:items-center xs:justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              {item.compareAtPrice && (
                <span className="text-xs text-gray-600 line-through">
                  $ {item.compareAtPrice}
                </span>
              )}
              <span>$ {item.price.toFixed(2)}</span>
            </div>

            {item.payment?.type === "installment" && (
              <span className="text-[10px] md:text-xs text-primary font-medium">
                {item.payment.months} months · $
                {item.payment.installmentPrice?.toFixed(2)}/month
              </span>
            )}
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
                className="w-5 h-5 md:w-4 md:h-4"
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
