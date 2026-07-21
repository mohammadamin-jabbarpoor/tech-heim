import { CartItemType } from "@/types/cart";
import OrderSummary from "../checkout/order/OrderSummary";
import PaymentForm from "./PaymentForm";

function PaymentLayout({ items }: { items: CartItemType[] }) {
  return (
    <div className="flex justify-between gap-6 mb-14">
      <div className="flex-3">
        <PaymentForm />
      </div>
      <div className="flex-2">
        <OrderSummary items={items} />
      </div>
    </div>
  );
}

export default PaymentLayout;
