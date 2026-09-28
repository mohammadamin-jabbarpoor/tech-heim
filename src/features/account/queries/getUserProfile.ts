import prisma from "@/src/lib/db/prisma";

export async function getUserProfile(userId: string) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      address: true,
      postalCode: true,
    },
  });
}
