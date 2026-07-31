import { getImageUrl } from "@/lib/imagekit/index";
import { CartItemType } from "@/types/cart";
import { Chainlink } from "iconsax-react";
import Image from "next/image";
import React from "react";

function MobileOrderitems({ item }: { item: CartItemType }) {
  return (
    <div className="w-22.5 h-28 bg-white rounded space-y-2">
      <div className="relative w-20.5 h-15">
        <Image
          src={getImageUrl(item.thumbnail.path)}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="font-medium text-[10px] text-gray-600">
        ×{item.quantity}
      </div>
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
    </div>
  );
}

export default MobileOrderitems;
