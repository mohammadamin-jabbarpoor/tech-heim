import CartLayout from "@/components/cart/cart/CartLayout";
import Stepper from "@/components/cart/Stepper";

function page() {
  return (
    <div>
      <Stepper />
      <CartLayout />
    </div>
  );
}

export default page;
