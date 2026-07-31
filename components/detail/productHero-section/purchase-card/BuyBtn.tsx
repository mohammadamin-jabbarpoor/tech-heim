import { ShoppingCart } from "iconsax-react";
import Link from "next/link";

type BuyBtnProp = {
  addToCart: () => void;
};

function BuyBtn({ addToCart }: BuyBtnProp) {
  return (
    <div className="flex flex-col gap-2">
      <Link
        href="/checkout"
        onClick={addToCart}
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
        href=""
        onClick={addToCart}
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
  );
}

export default BuyBtn;
