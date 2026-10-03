import { ProductPage } from "@/src/features/products/types/productTypes";
import { DiscountShape } from "iconsax-react";
import PayOption from "./PayOption";
import BuyBtn from "./BuyBtn";
import { useCartStore } from "@/src/stores/cartStore";
import { createCartItem } from "@/src/features/cart/types/creatCartItem";
import { useMemo, useState } from "react";
import { toast } from "sonner";

type PurchaseCardProps = {
  product: ProductPage;
  selectedOption: ProductPage["options"][number] | null;
};

function ProductPurchaseCard({ product, selectedOption }: PurchaseCardProps) {
  const addItem = useCartStore((state) => state.addItem);

  const [paymentType, setPaymentType] = useState<"full" | "installment">(
    "full",
  );

  const [selectedMonth, setSelectedMonth] = useState<number | null>(3);

  const installmentPrice = useMemo(() => {
    if (paymentType !== "installment" || !selectedMonth) return null;

    return product.price / selectedMonth;
  }, [paymentType, selectedMonth, product.price]);

  const handleAddToCart = () => {
    const cartItem = createCartItem({
      product,
      optionId: selectedOption?.id,
      payment: {
        type: paymentType,
        months:
          paymentType === "installment"
            ? (selectedMonth ?? undefined)
            : undefined,
        installmentPrice:
          paymentType === "installment"
            ? (installmentPrice ?? undefined)
            : undefined,
      },
    });

    addItem(cartItem);

    toast.success("Product added to cart");
  };

  return (
    <div className="hidden p-6 xl:flex flex-col gap-4 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
      <div>
        <div className="flex justify-between">
          <span className="font-medium text-xl">
            $ {product.price.toFixed(2)}
          </span>
          {product.compareAtPrice && (
            <div className="flex gap-0.5">
              <DiscountShape variant="Bold" size={24} color="#F45E0C" />
              <span className="font-medium text-secondary">
                -{product.discount}%
              </span>
            </div>
          )}
        </div>
        {product.compareAtPrice && (
          <span className="font-light text-sm text-gray-600">
            last price $ {product.compareAtPrice}
          </span>
        )}
      </div>
      <PayOption
        paymentType={paymentType}
        selectedMonth={selectedMonth}
        installmentPrice={installmentPrice}
        onPaymentType={setPaymentType}
        onSelectedMonth={setSelectedMonth}
      />
      <BuyBtn addToCart={handleAddToCart} />
    </div>
  );
}

export default ProductPurchaseCard;
