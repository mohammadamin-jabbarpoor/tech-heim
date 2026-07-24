"use client";

import { ComponentType } from "react";
import { Edit, IconProps } from "iconsax-react";

type PersonalDataFieldProps = {
  label: string;
  value: string | null;
  icon: ComponentType<IconProps>;
  onEdit?: () => void;
  editable?: boolean;
};

function PersonalDataField({
  label,
  value,
  icon: Icon,
  onEdit,
  editable = true,
}: PersonalDataFieldProps) {
  return (
    <div className="relative">
      <div className="ml-3.5 h-5">
        {value && <p className="text-xs font-light text-gray-500">{label}</p>}
      </div>

      <button
        type="button"
        onClick={onEdit}
        disabled={!editable}
        className={`relative h-18 w-full rounded-lg bg-gray-50 text-left ${
          editable ? "cursor-pointer" : "cursor-default"
        }`}
      >
        <Icon
          variant="Outline"
          size={24}
          color="#444"
          className="absolute left-3.5 top-6"
        />

        <p className="absolute left-12 top-1/2 max-w-52 -translate-y-1/2 truncate text-sm text-gray-600">
          {value || label}
        </p>

        {editable && (
          <Edit
            variant="Outline"
            size={24}
            color="#0C68F4"
            className="absolute right-3.5 top-6"
          />
        )}
      </button>
    </div>
  );
}

export default PersonalDataField;
