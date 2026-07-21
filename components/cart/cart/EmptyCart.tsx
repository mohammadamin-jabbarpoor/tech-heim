import { BagCross1 } from "iconsax-react";
import Link from "next/link";

function EmptyCart() {
  return (
    <div className="w-80 h-[85vh] mx-auto flex flex-col items-center justify-center gap-6">
      <BagCross1 variant="Outline" size={80} color="#c91433" />
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <p className="font-medium text-2xl">Your cart is empty!</p>
        <p className="font-light">
          Looks like you haven't added anything to your cart yet
        </p>
      </div>
      <div>
        <Link
          href="/products"
          className="w-47 flex items-center justify-center py-3.5 bg-error-light text-error rounded-lg"
        >
          Back to products
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
