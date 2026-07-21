import UserField from "./shipping-form/UserField";
import AddressSelector from "./shipping-form/AddressSelector";
import ShippingMethod from "./shipping-form/ShippingMethod";
import Link from "next/link";

function ShippingForm() {
  return (
    <>
      <div className="w-full space-y-8 py-6 px-8 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
        <UserField />
        <AddressSelector />
        <ShippingMethod />
      </div>
      <div className="mt-3.5">
        <Link href="/cart" className="px-7.5 py-3.5 text-primary">
          Return to cart
        </Link>
      </div>
    </>
  );
}

export default ShippingForm;
