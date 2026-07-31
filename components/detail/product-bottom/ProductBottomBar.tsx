import { ProductDetailDto, ProductOptionDto } from "@/lib/prisma-types";
import { getDiscountPercent } from "@/lib/utils/product";
import { DiscountShape } from "iconsax-react";
import PaymentOptionBtn from "./PaymentOptionBtn";

type BottomBarProps = {
  product: ProductDetailDto;
  selectedOption: ProductOptionDto | null;
};

function ProductBottomBar({ product, selectedOption }: BottomBarProps) {
  const discount = getDiscountPercent(product.price, product.compareAtPrice);

  return (
    <div className="block xl:hidden w-full relative mt-6">
      <div className="fixed inset-x-0 bottom-0 z-5 w-full flex items-center justify-between h-20 px-6 py-3.5 bg-gray-100">
        <PaymentOptionBtn product={product} selectedOption={selectedOption} />
        <div className="w-1/2 flex justify-end">
          {product.compareAtPrice ? (
            <div className="flex flex-col items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="font-light text-sm text-gray-600 line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
                <div className="flex items-center gap-0.5">
                  <DiscountShape variant="Bold" size={24} color="#F45E0C" />
                  <span className="font-medium text-sm text-secondary">
                    -{discount}%
                  </span>
                </div>
              </div>
              <span className="font-medium text-xl">
                ${product.price.toFixed(2)}
              </span>
            </div>
          ) : (
            <span className="font-medium text-xl">
              ${product.price.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductBottomBar;
