import { CartItemType } from "@/src/features/cart/types/cartItem";
import CartItem from "./CartItem";

function CartItemsList({ items }: { items: CartItemType[] }) {
  console.log(items);

  return (
    <div>
      {items.map((item) => (
        <CartItem key={item.cartItemId} item={item} />
      ))}
    </div>
  );
}

export default CartItemsList;
