"use client";

import "swiper/css";
import { CartItemType } from "@/types/cart";
import Link from "next/link";
import TotalPrice from "../../cart/TotalPrice";
import OrderItemsList from "./OrderItemsList";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SuccessfulPay from "../../payment/SuccessfulPay";
import MobileOrderitems from "./MobileOrderitems";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

function OrderSummary({ items }: { items: CartItemType[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="w-full flex flex-col gap-10 justify-between py-4 lg:p-6 lg:prounded-lg lg:shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
        <div className="space-y-4">
          <p className="font-medium text-gray-800 lg:text-black text-base md:text-lg lg:text-2xl">
            Your Order
          </p>
          <div className="hidden lg:block space-y-4">
            {items.map((item) => (
              <OrderItemsList key={item.cartItemId} item={item} />
            ))}
          </div>
          <div className="p-2 bg-gray-50 lg:hidden">
            <Swiper
              slidesPerView="auto"
              spaceBetween={12}
              modules={[Navigation]}
            >
              {items.map((item) => (
                <SwiperSlide className="w-auto!" key={item.cartItemId}>
                  <MobileOrderitems item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <TotalPrice items={items} />
        {pathname === "/payment" ? (
          <Link
            href=""
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center py-3.5 bg-primary text-white rounded-lg"
          >
            Continue to pay
          </Link>
        ) : (
          <Link
            href="/payment"
            className="flex items-center justify-center py-3.5 bg-primary text-white rounded-lg"
          >
            Continue to pay
          </Link>
        )}
      </div>

      {isOpen && (
        <SuccessfulPay
          open={isOpen}
          onClose={() => setIsOpen(false)}
          items={items}
        />
      )}
    </>
  );
}

export default OrderSummary;
