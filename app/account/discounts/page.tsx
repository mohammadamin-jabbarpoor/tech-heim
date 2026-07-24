import DiscountFields from "@/components/account/discount/DiscountFields";
import LayoutHeader from "@/components/account/LayoutHeader";

function Discount() {
  return (
    <div className="space-y-6">
      <LayoutHeader
        title="Discounts & Voucher"
        description="Add discount code to apply a discount in your purchase"
      />
      <DiscountFields />
    </div>
  );
}

export default Discount;
