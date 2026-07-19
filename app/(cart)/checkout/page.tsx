import CheckoutLayout from "@/components/cart/checkout/CheckoutLayout";
import Stepper from "@/components/cart/Stepper";

function page() {
  return (
    <div>
      <Stepper />
      <CheckoutLayout />
    </div>
  );
}

export default page;
