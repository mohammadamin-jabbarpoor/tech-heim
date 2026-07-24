import { z } from "zod";

export const updateProfileSchema = z.object({
  field: z.enum(["name", "phoneNumber", "address", "postalCode"]),

  value: z.string().trim().min(1, "This field is required"),
});

export type UpdateProfileValues = z.infer<typeof updateProfileSchema>;
