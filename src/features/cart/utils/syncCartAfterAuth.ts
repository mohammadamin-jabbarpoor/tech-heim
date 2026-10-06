"use server";

import { getCart } from "../queries/getCart";
import { mergeCart } from "../queries/mergeCart";

export type GuestCartItem = {
  productId: string;
  optionId: string | null;
  quantity: number;
};

export async function syncCartAfterAuth(items: GuestCartItem[]) {
  if (items.length > 0) {
    return await mergeCart(items);
  }

  return await getCart();
}
