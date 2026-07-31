import { CartItemType } from "@/types/cart";
import CartItemsList from "./CartItemsList";
import CartSummary from "./CartSummary";

function CartLayout({ items }: { items: CartItemType[] }) {
  return (
    <>
      {items.length ? (
        <div className="flex flex-col lg:flex-row lg:justify-between gap-6 md:gap-10 lg:gap-26 mb-14">
          <div className="lg:flex-[1.7]">
            <CartItemsList items={items} />
          </div>
          <div className="lg:flex-1">
            <CartSummary items={items} />
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default CartLayout;
