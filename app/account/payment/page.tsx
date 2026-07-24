import PaymentFields from "@/components/account/payment/PaymentFields";
import LayoutHeader from "@/components/account/LayoutHeader";

function Payment() {
  return (
    <div className="space-y-6">
      <LayoutHeader title="Cards" description="manage payment methods" />
      <PaymentFields />
    </div>
  );
}

export default Payment;
