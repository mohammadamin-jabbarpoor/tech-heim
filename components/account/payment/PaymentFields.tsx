import { Edit } from "iconsax-react";
import Image from "next/image";

function PaymentFields() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative w-98 h-18 rounded-lg bg-gray-50 text-left cursor-pointer"
        >
          <p className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-gray-600 truncate max-w-52">
            Credit or Debit cards
          </p>

          <Edit
            variant="Outline"
            size={24}
            color="#0C68F4"
            className="absolute top-6 right-3.5"
          />
        </button>
        <div className="flex">
          <Image src="/american.svg" alt="american" width={55} height={40} />
          <Image src="/master.svg" alt="master" width={55} height={40} />
          <Image src="/visa.svg" alt="visa" width={55} height={40} />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="relative w-98 h-18 rounded-lg bg-gray-50 text-left cursor-pointer"
        >
          <p className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-gray-600 truncate max-w-52">
            Paypal
          </p>

          <Edit
            variant="Outline"
            size={24}
            color="#0C68F4"
            className="absolute top-6 right-3.5"
          />
        </button>
        <Image src="/paypal.svg" alt="paypal" width={55} height={40} />
      </div>
    </div>
  );
}

export default PaymentFields;
