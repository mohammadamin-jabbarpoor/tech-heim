import { headers } from "next/headers";

import { prisma } from "@/database/db";
import { auth } from "@/lib/auth/auth";

export async function getUserCart() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return null;
  }

  const cart = await prisma.cart.findUnique({
    where: {
      userId: session.user.id,
    },
    include: {
      items: {
        include: {
          product: {
            include: {
              images: {
                orderBy: {
                  sortOrder: "asc",
                },
              },
              options: {
                include: {
                  images: {
                    orderBy: {
                      sortOrder: "asc",
                    },
                  },
                },
                orderBy: {
                  sortOrder: "asc",
                },
              },
            },
          },
          option: {
            include: {
              images: {
                orderBy: {
                  sortOrder: "asc",
                },
              },
            },
          },
        },
      },
    },
  });

  return cart;
}
