"use client";

import { shippingMethods } from "@/data/shipping-methods";
import { useCheckoutStore } from "@/store/checkout-store";

function ShippingMethod() {
  const { shippingMethod, setShippingMethod } = useCheckoutStore();

  return (
    <div>
      <p className="font-medium text-gray-800 lg:text-black text-base md:text-lg lg:text-xl mb-2 lg:mb-3">
        Shipping Method
      </p>

      <div className="flex flex-col gap-2">
        {shippingMethods.map((method) => {
          const isSelected = shippingMethod?.id === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => setShippingMethod(method)}
              className={`p-2 text-left rounded-lg border transition-colors ${
                isSelected
                  ? "bg-primary-25 border-primary-75"
                  : "bg-gray-50 border-gray-100"
              }`}
            >
              <div className="flex items-center">
                <input
                  type="radio"
                  checked={isSelected}
                  onChange={() => setShippingMethod(method)}
                  className="mr-3 w-5 h-5"
                />

                <span className="font-light">{method.name}</span>
              </div>

              <div className="ml-8 mt-1 flex items-center justify-between">
                <p className="font-light text-sm text-gray-700">
                  {method.description}
                </p>

                <p className="font-light text-sm text-gray-700">
                  ${method.price.toFixed(2)}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ShippingMethod;
