"use client";

import { DiscountShape } from "iconsax-react";
import { useMemo, useState } from "react";

import Link from "next/link";
import { ProductPage } from "@/src/features/products/types/productTypes";
import PayOption from "./PayOption";

type PaymentOptionProps = {
  product: ProductPage;
};

function PaymentOptionBtn({ product }: PaymentOptionProps) {
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);

  const [paymentType, setPaymentType] = useState<"full" | "installment">(
    "full",
  );

  const [selectedMonth, setSelectedMonth] = useState<number | null>(3);

  const installmentPrice = useMemo(() => {
    if (paymentType !== "installment" || !selectedMonth) return null;

    return product.price / selectedMonth;
  }, [paymentType, selectedMonth, product.price]);

  return (
    <>
      <button
        onClick={() => setIsPaymentOpen(true)}
        className="flex items-center justify-center w-1/2 h-10 text-white text-sm bg-primary rounded-lg"
      >
        View payment options
      </button>
      {isPaymentOpen && (
        <>
          <div
            onClick={() => setIsPaymentOpen(false)}
            className="fixed inset-0 w-full h-screen z-10 bg-black/40"
          />
          <div className="absolute bottom-0 left-0 right-0 w-full h-80 z-20 flex flex-col justify-center gap-3 p-6 bg-white">
            <div className="w-full flex items-center justify-between">
              <p>${product.price}</p>
              {product.compareAtPrice && (
                <div className="flex items-center gap-2">
                  <p className="font-light text-sm text-gray-600 line-through">
                    ${product.compareAtPrice}
                  </p>
                  <div className="flex items-center gap-0.5">
                    <DiscountShape variant="Bold" size={24} color="#F45E0C" />
                    <span className="font-medium text-xs text-secondary">
                      -{product.discount}%
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="xs:flex xs:justify-start">
              <PayOption product={product} />
            </div>
            <div className="flex justify-between gap-4">
              <Link
                href="/checkout"
                className="w-1/2 flex items-center justify-center py-2.5 bg-primary text-white rounded-lg"
              >
                Buy Now
              </Link>
              <Link
                href=""
                className="w-1/2 flex items-center justify-center py-2.5 border-2 border-primary text-primary  rounded-lg"
              >
                Add to cart
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default PaymentOptionBtn;
