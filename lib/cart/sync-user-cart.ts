"use server";

import { headers } from "next/headers";
import { auth } from "@/lib/auth/auth";
import { prisma } from "@/database/db";

export async function syncUserCart() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    return {
      success: false,
      items: [],
    };
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

  if (!cart) {
    return {
      success: true,
      items: [],
    };
  }

  return {
    success: true,
    items: cart.items,
  };
}
