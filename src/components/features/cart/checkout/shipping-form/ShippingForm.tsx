import Link from "next/link";
import UserField from "./UserField";
import AddressSelector from "./AddressSelector";
import ShippingMethod from "./ShippingMethod";

function ShippingForm() {
  return (
    <>
      <div className="w-full space-y-8 py-6 lg:px-8 rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
        <UserField />
        <AddressSelector />
        <ShippingMethod />
      </div>
      <div className="mt-3.5">
        <Link href="/cart" className="px-2 lg:px-7.5 py-3.5 text-primary">
          Return to cart
        </Link>
      </div>
    </>
  );
}

export default ShippingForm;
