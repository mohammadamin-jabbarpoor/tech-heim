"use client";

import { ProductDetail } from "@/lib/prisma-types";
import { getDiscountPercent } from "@/lib/utils/product";
import { DiscountShape, ShoppingCart } from "iconsax-react";
import Link from "next/link";
import { useMemo, useState } from "react";

function ProductPurchaseCard({ product }: { product: ProductDetail }) {
  const [paymentType, setPaymentType] = useState<"full" | "installment">(
    "full",
  );
  const [selectedMonth, setSelectedMonth] = useState<number | null>(3);

  const discount = getDiscountPercent(
    Number(product.price),
    Number(product.compareAtPrice),
  );

  const months = [3, 6, 12, 18];

  const installmentPrice = useMemo(() => {
    if (paymentType !== "installment" || !selectedMonth) return null;

    return product.price / selectedMonth;
  }, [paymentType, selectedMonth, product.price]);

  return (
    <div className="w-78 p-6 flex flex-col gap-4 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
      <div>
        <div className="flex justify-between">
          <span className="font-medium text-xl">
            $ {product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <div className="flex gap-0.5">
              <DiscountShape variant="Bold" size={24} color="#F45E0C" />
              <span className="font-medium text-secondary">-{discount}%</span>
            </div>
          )}
        </div>
        {product.compareAtPrice && (
          <span className="font-light text-sm text-gray-600">
            last price $ {product.compareAtPrice}
          </span>
        )}
      </div>
      <div className="flex flex-col gap-3.5">
        <div className="flex flex-col gap-3.5">
          <div className="flex items-center">
            <input
              id="full-payment"
              type="radio"
              name="payment"
              checked={paymentType === "full"}
              onChange={() => setPaymentType("full")}
              className="mr-1 w-5 h-5"
            />
            <label
              htmlFor="full-payment"
              className={`font-light ${paymentType === "full" ? "" : "text-gray-800"}`}
            >
              Pay Now
            </label>
          </div>
          <div>
            <div className="flex items-center">
              <input
                id="installment"
                type="radio"
                name="payment"
                checked={paymentType === "installment"}
                onChange={() => setPaymentType("installment")}
                className="mr-1 w-5 h-5"
              />
              <label
                htmlFor="installment"
                className={`font-light ${paymentType === "installment" ? "" : "text-gray-800"}`}
              >
                Buy in installments
              </label>
            </div>
            <p className="font-light text-xs text-gray-800 ml-8 mt-1">
              choose your installments period
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          {months.map((month) => (
            <button
              key={month}
              type="button"
              disabled={paymentType !== "installment"}
              onClick={() => setSelectedMonth(month)}
              className={`flex flex-col items-center justify-center px-2 pt-0.5 pb-1.5 rounded border transition
                ${paymentType !== "installment" ? "cursor-not-allowed border-gray-500 text-gray-500" : ""}

                ${
                  selectedMonth === month && paymentType === "installment"
                    ? "border-primary-400 bg-primary-25 text-primary-400"
                    : "border-gray-200"
                }`}
            >
              <span
                className={`font-light text-lg ${selectedMonth !== month && paymentType === "installment" ? "text-gray-800" : ""}`}
              >
                {month}
              </span>
              <span
                className={`font-light text-xs ${selectedMonth !== month && paymentType === "installment" ? "text-gray-600" : ""}`}
              >
                Months
              </span>
            </button>
          ))}
        </div>
        <div>
          {paymentType === "installment" && installmentPrice && (
            <p className="text-sm font-light">
              ${installmentPrice.toFixed(2)}
              <span className="text-xs text-gray-600">/Month</span>
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href="/products"
          className="group flex items-center justify-center gap-0 py-3.5 bg-primary hover:bg-primary-600 text-white rounded-lg transition-all duration-300"
        >
          <span className="translate-x-3 group-hover:translate-x-0 transition-all duration-300">
            Buy Now
          </span>

          <ShoppingCart
            variant="Linear"
            size={24}
            color="white"
            className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-2"
          />
        </Link>
        <Link
          href="/products"
          className="group flex items-center justify-center gap-0 py-3.5 border-2 border-primary text-primary hover:border-primary-600 hover:text-primary-600 rounded-lg transition-all duration-300"
        >
          <span className="translate-x-3 group-hover:translate-x-0 transition-all duration-300">
            Add to cart
          </span>

          <ShoppingCart
            variant="Linear"
            size={24}
            color="#052e6d"
            className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-hover:ml-2"
          />
        </Link>
      </div>
    </div>
  );
}

export default ProductPurchaseCard;
