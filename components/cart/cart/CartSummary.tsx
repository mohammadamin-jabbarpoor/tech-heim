import { CartItemType } from "@/types/cart";
import Link from "next/link";
import TotalPrice from "./TotalPrice";

function CartSummary({ items }: { items: CartItemType[] }) {
  return (
    <div className="w-104 space-y-4 py-4 px-6 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
      <p className="font-medium text-2xl">Payment Details</p>
      <TotalPrice items={items} />
      <Link
        href="/checkout"
        className="flex items-center justify-center py-3.5 bg-primary text-white rounded-lg"
      >
        Procced to checkout
      </Link>
    </div>
  );
}

export default CartSummary;
