import { CartItemType } from "@/types/cart";
import CartItemsList from "./CartItemsList";
import CartSummary from "./CartSummary";

function CartLayout({ items }: { items: CartItemType[] }) {
  return (
    <>
      {items.length ? (
        <div className="flex justify-between gap-26 mb-14">
          <div className="flex-[1.7]">
            <CartItemsList items={items} />
          </div>
          <div className="flex-1">
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
