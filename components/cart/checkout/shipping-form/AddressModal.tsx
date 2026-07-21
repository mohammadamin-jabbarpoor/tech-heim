import { CloseCircle } from "iconsax-react";
import AddressButtons from "./AddressButtons";
import AddressForm from "./AddressForm";

type AddressModalProps = {
  open: boolean;
  onClose: () => void;
};

function AddressModal({ open, onClose }: AddressModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 h-screen flex items-center justify-center bg-black/40">
      <div className="w-130 bg-white p-6 rounded-lg">
        <div className="w-full flex flex-col gap-3.5">
          <div className="flex items-center justify-between">
            <p className="font-medium text-xl text-gray-800">Address details</p>
            <button onClick={onClose}>
              <CloseCircle variant="Outline" size={40} color="#444" />
            </button>
          </div>
          <p className="font-light text-gray-600">Enter your details</p>
          <AddressForm onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default AddressModal;
