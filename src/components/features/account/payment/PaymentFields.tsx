import { Edit } from "iconsax-react";
import Image from "next/image";

function PaymentFields() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <button className="flex items-center justify-between w-full max-w-98 h-12 md:h-18 rounded-lg bg-gray-50 cursor-pointer">
          <p className="text-sm text-gray-600">Credit or Debit cards</p>

          <Edit variant="Outline" size={24} color="#0C68F4" />
        </button>
        <div className="flex items-end justify-end">
          <Image src="/american.svg" alt="american" width={55} height={40} />
          <Image src="/master.svg" alt="master" width={55} height={40} />
          <Image src="/visa.svg" alt="visa" width={55} height={40} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-3">
        <button className="flex items-center justify-between w-full max-w-98 h-12 md:h-18 rounded-lg bg-gray-50 cursor-pointer">
          <p className="text-sm text-gray-600">Paypal</p>

          <Edit variant="Outline" size={24} color="#0C68F4" />
        </button>
        <Image src="/paypal.svg" alt="paypal" width={55} height={40} />
      </div>
    </div>
  );
}

export default PaymentFields;
