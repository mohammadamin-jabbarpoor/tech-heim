"use server";

import { headers } from "next/headers";
import { prisma } from "@/database/db";
import { auth } from "@/lib/auth/auth";
import { MAX_CART_QUANTITY } from "@/lib/cart/constants";

type AddCartItemParams = {
  productId: string;
  optionId?: string;
  quantity?: number;
};

export async function addCartItem({
  productId,
  optionId,
  quantity = 1,
}: AddCartItemParams) {
  // 1. گرفتن کاربر فعلی
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // 2. کاربر لاگین نیست
  if (!session?.user) {
    return {
      success: false,
      message: "You must be logged in to add items to your cart.",
    };
  }

  // 3. پیدا کردن محصول
  const product = await prisma.product.findUnique({
    where: {
      id: productId,
    },
    select: {
      id: true,
      stock: true,
      isActive: true,
    },
  });

  if (!product) {
    return {
      success: false,
      message: "Product not found.",
    };
  }

  // 4. محصول غیرفعال است
  if (!product.isActive) {
    return {
      success: false,
      message: "This product is not available.",
    };
  }

  // 5. محصول موجود نیست
  if (product.stock <= 0) {
    return {
      success: false,
      message: "This product is out of stock.",
    };
  }

  // 6. بررسی quantity
  const safeQuantity = Math.min(
    Math.max(quantity, 1),
    Math.min(product.stock, MAX_CART_QUANTITY),
  );

  // 7. اگر option انتخاب شده، بررسی کنیم که متعلق به همین محصول باشد
  if (optionId) {
    const option = await prisma.productOption.findFirst({
      where: {
        id: optionId,
        productId: product.id,
      },
      select: {
        id: true,
      },
    });

    if (!option) {
      return {
        success: false,
        message: "Invalid product option.",
      };
    }
  }

  // 8. پیدا کردن یا ساخت Cart کاربر
  const cart = await prisma.cart.upsert({
    where: {
      userId: session.user.id,
    },
    create: {
      userId: session.user.id,
    },
    update: {},
  });

  // 9. پیدا کردن CartItem موجود
  const existingItem = await prisma.cartItem.findFirst({
    where: {
      cartId: cart.id,
      productId: product.id,
      optionId: optionId ?? null,
    },
  });

  // 10. اگر قبلاً در سبد وجود دارد
  if (existingItem) {
    const newQuantity = Math.min(
      existingItem.quantity + safeQuantity,
      Math.min(product.stock, MAX_CART_QUANTITY),
    );

    const updatedItem = await prisma.cartItem.update({
      where: {
        id: existingItem.id,
      },
      data: {
        quantity: newQuantity,
      },
    });

    return {
      success: true,
      item: updatedItem,
      message: "Cart updated successfully.",
    };
  }

  // 11. اگر محصول قبلاً در سبد نبوده
  const newItem = await prisma.cartItem.create({
    data: {
      cartId: cart.id,
      productId: product.id,
      optionId: optionId ?? null,
      quantity: safeQuantity,
    },
  });

  return {
    success: true,
    item: newItem,
    message: "Item added to cart successfully.",
  };
}
