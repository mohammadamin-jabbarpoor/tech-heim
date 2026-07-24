import { Call, Edit, Key } from "iconsax-react";

function SecurityFields() {
  return (
    <div className="flex gap-6">
      <button
        type="button"
        className="relative w-98 h-18 rounded-lg bg-gray-50 text-left cursor-pointer"
      >
        <Key
          variant="Outline"
          size={24}
          color="#444"
          className="absolute left-3.5 top-6"
        />
        <p className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-gray-600 truncate max-w-52">
          Password
        </p>

        <Edit
          variant="Outline"
          size={24}
          color="#0C68F4"
          className="absolute top-6 right-3.5"
        />
      </button>
      <button
        type="button"
        className="relative w-98 h-18 rounded-lg bg-gray-50 text-left cursor-pointer"
      >
        <Call
          variant="Outline"
          size={24}
          color="#444"
          className="absolute left-3.5 top-6"
        />
        <p className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-gray-600 truncate max-w-52">
          Phone number
        </p>

        <Edit
          variant="Outline"
          size={24}
          color="#0C68F4"
          className="absolute top-6 right-3.5"
        />
      </button>
    </div>
  );
}

export default SecurityFields;
