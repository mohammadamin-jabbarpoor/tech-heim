import { CartItemType } from "@/types/cart";
import OrderSummary from "../checkout/order/OrderSummary";
import PaymentForm from "./PaymentForm";

function PaymentLayout({ items }: { items: CartItemType[] }) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-6 mb-6 md:mb-10 lg:mb-14">
      <div className="lg:flex-3">
        <PaymentForm />
      </div>
      <div className="lg:flex-2">
        <OrderSummary items={items} />
      </div>
    </div>
  );
}

export default PaymentLayout;
