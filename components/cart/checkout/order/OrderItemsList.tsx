import { getImageUrl } from "@/lib/imagekit/index";
import { CartItemType } from "@/types/cart";
import Image from "next/image";

function OrderItemsList({ item }: { item: CartItemType }) {
  return (
    <div className="flex items-center lg:gap-6 p-1.5 border-b-[0.5px] border-b-gray-300">
      <div className="relative w-21.5 h-18.5">
        <Image
          src={getImageUrl(item.thumbnail.path)}
          alt={item.title}
          fill
          className="object-contain"
        />
      </div>
      <div className="w-full space-y-2 mr-1.5">
        <p className="font-light text-xs text-gray-900">{item.title}</p>
        <div className="w-full flex flex-col gap-1">
          <span className="font-medium text-[10px] text-gray-600">
            {item.option?.name}
          </span>
          <span className="font-medium text-[10px] text-gray-600">
            ×{item.quantity}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-light text-xs text-right">
            <span className="text-gray-900">${item.price}</span>{" "}
            {item.compareAtPrice && (
              <span className="text-gray-600">from ${item.compareAtPrice}</span>
            )}
          </div>
          {item.payment?.type === "installment" && (
            <span className="text-xs text-gray-600 font-medium">
              {item.payment.months} months · $
              {item.payment.installmentPrice?.toFixed(2)}/month
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default OrderItemsList;
