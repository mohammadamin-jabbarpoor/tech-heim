import { CartItemType } from "@/types/cart";
import Link from "next/link";
import TotalPrice from "./TotalPrice";

function CartSummary({ items }: { items: CartItemType[] }) {
  return (
    <div className="w-full lg:w-104 mx-auto space-y-4 py-4 px-5 sm:px-10 md:px-15 lg:px-6 lg:rounded-lg lg:shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
      <p className="hidden lg:block font-medium text-2xl">Payment Details</p>
      <TotalPrice items={items} />
      <Link
        href="/checkout"
        className="flex items-center justify-center py-2 md:py-3 lg:py-3.5 bg-primary text-white rounded-lg"
      >
        Procced to checkout
      </Link>
    </div>
  );
}

export default CartSummary;
