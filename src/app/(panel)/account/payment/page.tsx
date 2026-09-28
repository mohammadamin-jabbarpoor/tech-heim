import LayoutHeader from "@/src/components/features/account/LayoutHeader";
import PaymentFields from "@/src/components/features/account/payment/PaymentFields";

function Payment() {
  return (
    <div className="space-y-6">
      <LayoutHeader title="Cards" description="manage payment methods" />
      <PaymentFields />
    </div>
  );
}

export default Payment;
