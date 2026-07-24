"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/database/db";
import {
  updateProfileSchema,
  UpdateProfileValues,
} from "@/lib/validation/profile-schema";

export async function updateProfile(data: UpdateProfileValues) {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session?.user) {
      return {
        success: false,
        message: "You must be logged in.",
      };
    }

    const validatedData = updateProfileSchema.safeParse(data);

    if (!validatedData.success) {
      return {
        success: false,
        message: "Invalid data.",
      };
    }

    const { field, value } = validatedData.data;

    await prisma.user.update({
      where: {
        id: session.user.id,
      },
      data: {
        [field]: value,
      },
    });

    return {
      success: true,
      message: "Profile updated successfully.",
    };
  } catch (error) {
    console.error("UPDATE_PROFILE_ERROR:", error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}
