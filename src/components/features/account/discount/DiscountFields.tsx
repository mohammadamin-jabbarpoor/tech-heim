import { Eye } from "iconsax-react";

function DiscountFields() {
  return (
    <button
      type="button"
      className="relative w-98 h-18 rounded-lg bg-gray-50 text-left cursor-pointer"
    >
      <p className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-gray-600 truncate max-w-52">
        label
      </p>

      <Eye
        variant="Outline"
        size={24}
        color="#0C68F4"
        className="absolute top-6 right-3.5"
      />
    </button>
  );
}

export default DiscountFields;
