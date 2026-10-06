import Stepper from "@/src/components/features/cart/cart/stepper/Stepper";
import CheckoutLayout from "@/src/components/features/cart/checkout/CheckoutLayout";
import { auth } from "@/src/lib/auth/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function CheckoutPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/login?callbackUrl=/checkout");
  }

  return (
    <div>
      <Stepper />
      <CheckoutLayout />
    </div>
  );
}

export default CheckoutPage;
