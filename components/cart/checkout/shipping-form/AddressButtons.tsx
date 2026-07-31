import { AddressFormValues } from "@/lib/validation/address-schema";

type AddressButtonsProps = {
  onClose: () => void;
};

function AddressButtons({ onClose }: AddressButtonsProps) {
  return (
    <>
      <div className="hidden md:flex justify-between">
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

      <div className="w-full fixed bottom-6 right-0 left-0 flex items-center justify-between gap-4 px-6">
        <button
          onClick={onClose}
          className="w-1/2 h-10 flex items-center justify-center text-primary border-2 border-primary rounded-lg cursor-pointer"
        >
          Back
        </button>
        <button
          type="submit"
          className="w-1/2 h-10 flex items-center justify-center text-white bg-primary rounded-lg cursor-pointer"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default AddressButtons;
