import { headers } from "next/headers";
import { auth } from "@/src/lib/auth/auth";
import prisma from "@/src/lib/db/prisma";
import { mapCartItems } from "../utils/mapCartItems";

export async function getCart() {
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
                where: {
                  isPrimary: true,
                },
              },
            },
          },
          option: {
            include: {
              images: true,
            },
          },
        },
      },
    },
  });

  if (!cart) {
    return [];
  }

  return mapCartItems(cart.items);
}
