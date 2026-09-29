import { Eye } from "iconsax-react";

function DiscountFields({}) {
  return (
    <button className="flex items-center justify-between w-full max-w-98 h-12 md:h-18 rounded-lg bg-gray-50 cursor-pointer">
      <p className="text-sm text-gray-600">label</p>

      <Eye variant="Outline" size={24} color="#0C68F4" />
    </button>
  );
}

export default DiscountFields;
