import PaymentLayout from "@/components/cart/payment/PaymentLayout";
import Stepper from "@/components/cart/Stepper";

function page() {
  return (
    <div>
      <Stepper />
      <PaymentLayout />
    </div>
  );
}

export default page;
