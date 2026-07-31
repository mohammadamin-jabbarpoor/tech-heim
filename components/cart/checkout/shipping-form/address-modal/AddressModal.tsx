import DesktopAddressModal from "./DesktopAddressModal";
import MobileAddressModal from "./MobileAddressModal";

type AddressModalProps = {
  open: boolean;
  onClose: () => void;
};

function AddressModal({ open, onClose }: AddressModalProps) {
  if (!open) return null;

  return (
    <>
      <DesktopAddressModal onClose={onClose} />
      <MobileAddressModal onClose={onClose} />
    </>
  );
}

export default AddressModal;
