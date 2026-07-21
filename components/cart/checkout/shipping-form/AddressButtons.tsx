import { AddressFormValues } from "@/lib/validation/address-schema";

type AddressButtonsProps = {
  onClose: () => void;
};

function AddressButtons({ onClose }: AddressButtonsProps) {
  return (
    <div className="flex justify-between">
      <button
        onClick={onClose}
        className="w-56.5 h-12 flex items-center justify-center text-primary border-2 border-primary rounded-lg cursor-pointer"
      >
        Back
      </button>
      <button className="w-56.5 h-12 flex items-center justify-center text-white bg-primary rounded-lg cursor-pointer">
        Submit
      </button>
    </div>
  );
}

export default AddressButtons;
