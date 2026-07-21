import OrderSummary from "./order/OrderSummary";
import ShippingForm from "./ShippingForm";
import { CartItemType } from "@/types/cart";

function CheckoutLayout({ items }: { items: CartItemType[] }) {
  return (
    <div className="flex justify-between gap-6 mb-14">
      <div className="flex-3">
        <ShippingForm />
      </div>
      <div className="flex-2">
        <OrderSummary items={items} />
      </div>
    </div>
  );
}

export default CheckoutLayout;
