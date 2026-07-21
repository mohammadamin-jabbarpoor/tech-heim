"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  AddressFormValues,
  addressSchema,
} from "@/lib/validation/address-schema";
import { useForm } from "react-hook-form";
import AddressButtons from "./AddressButtons";
import { CloseCircle } from "iconsax-react";
import { useAddressStore } from "@/store/address-store";

type AddressButtonsProps = {
  onClose: () => void;
};

function AddressForm({ onClose }: AddressButtonsProps) {
  const { address } = useAddressStore();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<AddressFormValues>({
    resolver: zodResolver(addressSchema),

    defaultValues: address ?? {
      fullName: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
    },
  });

  const { setAddress } = useAddressStore();

  const onSubmit = (data: AddressFormValues) => {
    console.log(data);

    setAddress(data);

    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <div className="space-y-1">
        <div className="relative">
          <input
            {...register("fullName")}
            placeholder=" "
            className={`peer w-full h-12 rounded-lg px-3 pt-2 outline-none text-gray-600 transition-colors duration-200 ${
              errors.fullName
                ? "border border-error focus:border-error focus:text-error caret-error"
                : "border border-gray-600 focus:border-primary focus:text-primary caret-primary"
            }`}
          />

          <label
            htmlFor="fullName"
            className={`
              absolute left-3 top-1/2
              -translate-y-1/2
              bg-white px-1
              text-sm
              pointer-events-none
              transition-all duration-200 ease-in-out

              peer-focus:top-0
              peer-focus:-translate-y-1/2
              peer-focus:text-xs

              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:text-xs

              ${
                errors.fullName
                  ? "text-error peer-focus:text-error"
                  : "text-gray-600 peer-focus:text-primary"
              }`}
          >
            Full Name
          </label>

          <button
            type="button"
            onClick={() => setValue("fullName", "")}
            className={`absolute top-3 right-3 ${
              errors.fullName
                ? "text-error peer-focus:text-error"
                : "text-gray-600 peer-focus:text-primary"
            }`}
          >
            <CloseCircle variant="Outline" size={24} color="currentColor" />
          </button>
        </div>
        {errors.fullName && (
          <p className="text-xs text-error">{errors.fullName.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <div className="relative">
          <input
            {...register("phone")}
            id="phone"
            placeholder=" "
            className={`peer w-full h-12 rounded-lg px-3 pt-2 outline-none text-gray-600 transition-colors duration-200 ${
              errors.phone
                ? "border border-error focus:border-error focus:text-error caret-error"
                : "border border-gray-600 focus:border-primary focus:text-primary caret-primary"
            }`}
          />

          <label
            htmlFor="phone"
            className={`
              absolute left-3 top-1/2
              -translate-y-1/2
              bg-white px-1
              text-sm
              pointer-events-none
              transition-all duration-200 ease-in-out

              peer-focus:top-0
              peer-focus:-translate-y-1/2
              peer-focus:text-xs

              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:text-xs

              ${
                errors.phone
                  ? "text-error peer-focus:text-error"
                  : "text-gray-600 peer-focus:text-primary"
              }`}
          >
            Phone Number
          </label>

          <button
            type="button"
            onClick={() => {
              setValue("phone", "");
            }}
            className={`absolute top-3 right-3 ${
              errors.phone
                ? "text-error peer-focus:text-error"
                : "text-gray-600 peer-focus:text-primary"
            }`}
          >
            <CloseCircle variant="Outline" size={24} color="currentColor" />
          </button>
        </div>
        {errors.phone && (
          <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-1">
        <div className="relative">
          <input
            {...register("address")}
            placeholder=" "
            className={`peer w-full h-12 rounded-lg px-3 pt-2 outline-none text-gray-600 transition-colors duration-200 ${
              errors.address
                ? "border border-error focus:border-error focus:text-error caret-error"
                : "border border-gray-600 focus:border-primary focus:text-primary caret-primary"
            }`}
          />

          <label
            htmlFor="address"
            className={`
              absolute left-3 top-1/2
              -translate-y-1/2
              bg-white px-1
              text-sm
              pointer-events-none
              transition-all duration-200 ease-in-out

              peer-focus:top-0
              peer-focus:-translate-y-1/2
              peer-focus:text-xs

              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:text-xs

              ${
                errors.address
                  ? "text-error peer-focus:text-error"
                  : "text-gray-600 peer-focus:text-primary"
              }`}
          >
            Street name and house number
          </label>

          <button
            type="button"
            onClick={() => {
              setValue("address", "");
              console.log("clicked");
            }}
            className={`absolute top-3 right-3 ${
              errors.address
                ? "text-error peer-focus:text-error"
                : "text-gray-600 peer-focus:text-primary"
            }`}
          >
            <CloseCircle variant="Outline" size={24} color="currentColor" />
          </button>
        </div>
        {errors.address && (
          <p className="text-xs text-red-500">{errors.address.message}</p>
        )}
      </div>

      <div className="flex justify-between gap-5">
        <div className="space-y-1">
          <div className="relative">
            <input
              {...register("country")}
              placeholder=" "
              className={`peer w-full h-12 rounded-lg px-3 pt-2 outline-none text-gray-600 transition-colors duration-200 ${
                errors.country
                  ? "border border-error focus:border-error focus:text-error caret-error"
                  : "border border-gray-600 focus:border-primary focus:text-primary caret-primary"
              }`}
            />

            <label
              htmlFor="country"
              className={`
              absolute left-3 top-1/2
              -translate-y-1/2
              bg-white px-1
              text-sm
              pointer-events-none
              transition-all duration-200 ease-in-out

              peer-focus:top-0
              peer-focus:-translate-y-1/2
              peer-focus:text-xs

              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:text-xs

              ${
                errors.country
                  ? "text-error peer-focus:text-error"
                  : "text-gray-600 peer-focus:text-primary"
              }`}
            >
              Country
            </label>

            <button
              type="button"
              onClick={() => {
                setValue("country", "");
              }}
              className={`absolute top-3 right-3 ${
                errors.country
                  ? "text-error peer-focus:text-error"
                  : "text-gray-600 peer-focus:text-primary"
              }`}
            >
              <CloseCircle variant="Outline" size={24} color="currentColor" />
            </button>
          </div>
          {errors.country && (
            <p className="text-xs text-red-500">{errors.country.message}</p>
          )}
        </div>
        <div className="space-y-1">
          <div className="relative">
            <input
              {...register("city")}
              placeholder=" "
              className={`peer w-full h-12 rounded-lg px-3 pt-2 outline-none text-gray-600 transition-colors duration-200 ${
                errors.city
                  ? "border border-error focus:border-error focus:text-error caret-error"
                  : "border border-gray-600 focus:border-primary focus:text-primary caret-primary"
              }`}
            />

            <label
              htmlFor="city"
              className={`
              absolute left-3 top-1/2
              -translate-y-1/2
              bg-white px-1
              text-sm
              pointer-events-none
              transition-all duration-200 ease-in-out

              peer-focus:top-0
              peer-focus:-translate-y-1/2
              peer-focus:text-xs

              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:text-xs

              ${
                errors.city
                  ? "text-error peer-focus:text-error"
                  : "text-gray-600 peer-focus:text-primary"
              }`}
            >
              City
            </label>

            <button
              type="button"
              onClick={() => {
                setValue("city", "");
              }}
              className={`absolute top-3 right-3 ${
                errors.city
                  ? "text-error peer-focus:text-error"
                  : "text-gray-600 peer-focus:text-primary"
              }`}
            >
              <CloseCircle variant="Outline" size={24} color="currentColor" />
            </button>
          </div>
          {errors.city && (
            <p className="text-xs text-red-500">{errors.city.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-1">
        <div className="relative">
          <input
            {...register("postalCode")}
            placeholder=" "
            className={`peer w-full h-12 rounded-lg px-3 pt-2 outline-none text-gray-600 transition-colors duration-200 ${
              errors.postalCode
                ? "border border-error focus:border-error focus:text-error caret-error"
                : "border border-gray-600 focus:border-primary focus:text-primary caret-primary"
            }`}
          />

          <label
            htmlFor="postalCode"
            className={`
              absolute left-3 top-1/2
              -translate-y-1/2
              bg-white px-1
              text-sm
              pointer-events-none
              transition-all duration-200 ease-in-out

              peer-focus:top-0
              peer-focus:-translate-y-1/2
              peer-focus:text-xs

              peer-not-placeholder-shown:top-0
              peer-not-placeholder-shown:-translate-y-1/2
              peer-not-placeholder-shown:text-xs

              ${
                errors.postalCode
                  ? "text-error peer-focus:text-error"
                  : "text-gray-600 peer-focus:text-primary"
              }`}
          >
            Postal Code
          </label>

          <button
            type="button"
            onClick={() => {
              setValue("postalCode", "");
            }}
            className={`absolute top-3 right-3 ${
              errors.postalCode
                ? "text-error peer-focus:text-error"
                : "text-gray-600 peer-focus:text-primary"
            }`}
          >
            <CloseCircle variant="Outline" size={24} color="currentColor" />
          </button>
        </div>
        {errors.postalCode && (
          <p className="text-xs text-red-500">{errors.postalCode.message}</p>
        )}
      </div>

      <AddressButtons onClose={onClose} />
    </form>
  );
}

export default AddressForm;
