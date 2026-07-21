import z from "zod";

export type AddressFormValues = z.infer<typeof addressSchema>;

export const addressSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),

  phone: z.string().min(10, "Phone number is required"),

  country: z.string().min(1, "Country is required"),

  city: z.string().min(1, "City is required"),

  address: z.string().min(5, "Address is required"),

  postalCode: z.string().min(5, "Postal code is required"),
});
