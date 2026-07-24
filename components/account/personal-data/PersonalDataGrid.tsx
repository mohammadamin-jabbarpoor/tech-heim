"use client";

import {
  Call,
  IconProps,
  Key,
  Location,
  Message,
  Signpost,
  User,
} from "iconsax-react";

import PersonalDataField from "./PersonalDataField";
import { ComponentType } from "react";
import {
  EditableField,
  PersonalDataField as PersonalDataFieldType,
} from "./types";

type PersonalDataGridProps = {
  user: {
    name: string | null;
    email: string;
    phoneNumber: string | null;
    address: string | null;
    postalCode: string | null;
  };
  onEdit: (field: EditableField) => void;
};

function PersonalDataGrid({ user, onEdit }: PersonalDataGridProps) {
  const fields: {
    id: PersonalDataFieldType;
    label: string;
    value: string | null;
    icon: ComponentType<IconProps>;
    editable: boolean;
  }[] = [
    {
      id: "name",
      label: "Full name",
      value: user.name,
      icon: User,
      editable: true,
    },
    {
      id: "email",
      label: "E-mail Address",
      value: user.email,
      icon: Message,
      editable: false,
    },
    {
      id: "phoneNumber",
      label: "Phone number",
      value: user.phoneNumber ?? "",
      icon: Call,
      editable: true,
    },
    {
      id: "password",
      label: "Password",
      value: "**********",
      icon: Key,
      editable: false,
    },
    {
      id: "address",
      label: "Address",
      value: user.address ?? "",
      icon: Location,
      editable: true,
    },
    {
      id: "postalCode",
      label: "Postal code",
      value: user.postalCode ?? "",
      icon: Signpost,
      editable: true,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-2">
      {fields.map((field) => (
        <PersonalDataField
          key={field.id}
          label={field.label}
          value={field.value}
          icon={field.icon}
          editable={field.editable}
          onEdit={
            field.editable ? () => onEdit(field.id as EditableField) : undefined
          }
        />
      ))}
    </div>
  );
}

export default PersonalDataGrid;
