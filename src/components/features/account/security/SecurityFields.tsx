import { Call, Edit, Key } from "iconsax-react";

function SecurityFields() {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      <button className="flex items-center justify-between w-full max-w-98 h-12 md:h-18 rounded-lg bg-gray-50 text-left cursor-pointer">
        <div className="flex items-center gap-2">
          <Key variant="Outline" size={24} color="#444" />
          <p className="text-sm text-gray-600">Password</p>
        </div>

        <Edit variant="Outline" size={24} color="#0C68F4" />
      </button>
      <button className="flex items-center justify-between w-full max-w-98 h-12 md:h-18 rounded-lg bg-gray-50 text-left cursor-pointer">
        <div className="flex items-center gap-2">
          <Call variant="Outline" size={24} color="#444" />
          <p className="text-sm text-gray-600">Phone number</p>
        </div>

        <Edit variant="Outline" size={24} color="#0C68F4" />
      </button>
    </div>
  );
}

export default SecurityFields;
