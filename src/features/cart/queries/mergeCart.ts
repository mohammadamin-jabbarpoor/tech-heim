"use server";

import { headers } from "next/headers";
import { auth } from "@/src/lib/auth/auth";
import prisma from "@/src/lib/db/prisma";
import { MAX_CART_QUANTITY } from "../types/cartItem";
import { mapCartItems } from "../utils/mapCartItems";

export type GuestCartItem = {
  productId: string;
  optionId: string | null;
  quantity: number;
};

export async function mergeCart(items: GuestCartItem[]) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const userId = session.user.id;

  const productIds = items.map((item) => item.productId);

  const products = await prisma.product.findMany({
    where: {
      id: {
        in: productIds,
      },
    },
    select: {
      id: true,
      stock: true,
      options: {
        select: {
          id: true,
          productId: true,
        },
      },
    },
  });

  const validItems = items.filter((item) => {
    const product = products.find((product) => product.id === item.productId);

    if (!product) {
      return false;
    }

    if (product.stock <= 0) {
      return false;
    }

    if (item.quantity <= 0) {
      return false;
    }

    if (item.optionId) {
      const optionExists = product.options.some(
        (option) => option.id === item.optionId,
      );

      if (!optionExists) {
        return false;
      }
    }

    return true;
  });

  const finalCart = await prisma.$transaction(async (tx) => {
    let cart = await tx.cart.findUnique({
      where: {
        userId,
      },
      include: {
        items: true,
      },
    });

    if (!cart) {
      cart = await tx.cart.create({
        data: {
          userId,
        },
        include: {
          items: true,
        },
      });
    }

    const cartItemsMap = new Map(
      cart.items.map((item) => [
        `${item.productId}:${item.optionId ?? "none"}`,
        item,
      ]),
    );

    for (const guestItem of validItems) {
      const key = `${guestItem.productId}:${guestItem.optionId ?? "none"}`;

      const existingItem = cartItemsMap.get(key);

      const product = products.find(
        (product) => product.id === guestItem.productId,
      );

      if (!product) continue;

      const newQuantity = Math.min(
        (existingItem?.quantity ?? 0) + guestItem.quantity,
        product.stock,
        MAX_CART_QUANTITY,
      );

      if (existingItem) {
        await tx.cartItem.update({
          where: {
            id: existingItem.id,
          },
          data: {
            quantity: newQuantity,
          },
        });
      } else {
        await tx.cartItem.create({
          data: {
            cartId: cart.id,
            productId: guestItem.productId,
            optionId: guestItem.optionId,
            quantity: newQuantity,
          },
        });
      }
    }

    const finalCart = await tx.cart.findUnique({
      where: {
        id: cart.id,
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

    if (!finalCart) {
      throw new Error("Cart not found");
    }

    return finalCart;
  });

  return mapCartItems(finalCart.items);
}
