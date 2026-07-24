"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CloseCircle } from "iconsax-react";
import { useRouter } from "next/navigation";
import { useForm, UseFormRegisterReturn } from "react-hook-form";
import { toast } from "sonner";

import {
  updateProfileSchema,
  UpdateProfileValues,
} from "@/lib/validation/profile-schema";

import { updateProfile } from "@/lib/actions/update-profile";
import { EditableField } from "./types";

type FieldModalProps = {
  field: EditableField;
  user: {
    name: string | null;
    email: string;
    phoneNumber: string | null;
    address: string | null;
    postalCode: string | null;
  };
  onClose: () => void;
};

type ModalInputProps = {
  id: string;
  label: string;
  type?: string;
  registration?: UseFormRegisterReturn;
};

const fieldConfig = {
  name: {
    title: "First name and Last name",
    label: "Full name",
  },
  phoneNumber: {
    title: "Phone number",
    label: "Phone number",
  },
  address: {
    title: "Address",
    label: "Address",
  },
  postalCode: {
    title: "Postal code",
    label: "Postal code",
  },
} as const;

function FieldModal({ field, user, onClose }: FieldModalProps) {
  const router = useRouter();

  const getFieldValue = () => {
    switch (field) {
      case "name":
        return user.name ?? "";

      case "phoneNumber":
        return user.phoneNumber ?? "";

      case "address":
        return user.address ?? "";

      case "postalCode":
        return user.postalCode ?? "";
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UpdateProfileValues>({
    resolver: zodResolver(updateProfileSchema),

    defaultValues: {
      field,
      value: getFieldValue(),
    },
  });

  const onSubmit = async (data: UpdateProfileValues) => {
    const result = await updateProfile(data);

    if (!result.success) {
      toast.error(result.message);
      return;
    }

    toast.success(result.message);

    router.refresh();
    onClose();
  };

  const renderInput = () => {
    switch (field) {
      case "name":
        return (
          <ModalInput
            id="value"
            label={fieldConfig.name.label}
            registration={register("value")}
          />
        );

      case "phoneNumber":
        return (
          <ModalInput
            id="value"
            label={fieldConfig.phoneNumber.label}
            type="tel"
            registration={register("value")}
          />
        );

      case "address":
        return (
          <div className="relative w-full">
            <textarea
              id="value"
              placeholder=" "
              {...register("value")}
              className="peer h-28 w-full resize-none rounded-lg border border-gray-400 px-3 py-3 caret-primary focus:border-primary focus:text-primary focus:outline-none"
            />

            <label
              htmlFor="value"
              className="pointer-events-none absolute left-3 top-0 -translate-y-1/2 bg-white px-1 text-gray-600 transition-all duration-200 peer-focus:text-xs peer-focus:text-primary"
            >
              {fieldConfig.address.label}
            </label>
          </div>
        );

      case "postalCode":
        return (
          <ModalInput
            id="value"
            label={fieldConfig.postalCode.label}
            registration={register("value")}
          />
        );

      default:
        return null;
    }
  };

  const title = fieldConfig[field].title;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-98 space-y-9 rounded-lg bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <p className="text-xl font-medium">{title}</p>

          <button type="button" onClick={onClose} className="cursor-pointer">
            <CloseCircle variant="Outline" size={30} color="#444" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            {renderInput()}

            {errors.value && (
              <p className="text-sm text-red-500">{errors.value.message}</p>
            )}
          </div>

          {/* Actions */}
          <div className="mt-9 flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-41 items-center justify-center rounded-lg bg-primary py-3.5 text-white transition-opacity disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ModalInput({
  id,
  label,
  type = "text",
  registration,
}: ModalInputProps) {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        placeholder=" "
        {...registration}
        className="peer w-full rounded-lg border border-gray-400 px-3 py-3 caret-primary focus:border-primary focus:text-primary focus:outline-none"
      />

      <label
        htmlFor={id}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 bg-white px-1 text-gray-600 transition-all duration-200 ease-in-out peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-primary peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-1/2 peer-not-placeholder-shown:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

export default FieldModal;
