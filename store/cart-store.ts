import { MAX_CART_QUANTITY } from "@/lib/cart/constants";
import { CartItemType } from "@/types/cart";
import { create } from "zustand";

type CartStore = {
  items: CartItemType[];
  addItem: (item: CartItemType) => void;
  removeItem: (cartItemId: string) => void;
  increaseQuantity: (cartItemId: string) => void;
  decreaseQuantity: (cartItemId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],

  addItem: (item) =>
    set((state) => {
      console.log("cart item:", item);
      const existingItem = state.items.find(
        (cartItem) =>
          cartItem.id === item.id && cartItem.option?.id === item.option?.id,
      );

      if (existingItem) {
        return {
          items: state.items.map((cartItem) =>
            cartItem.cartItemId === existingItem.cartItemId
              ? {
                  ...cartItem,
                  quantity: cartItem.quantity + item.quantity,
                }
              : cartItem,
          ),
        };
      }

      return {
        items: [...state.items, item],
      };
    }),

  removeItem: (cartItemId) =>
    set((state) => ({
      items: state.items.filter((item) => item.cartItemId !== cartItemId),
    })),

  increaseQuantity: (cartItemId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.cartItemId === cartItemId &&
        item.quantity < Math.min(item.stock, MAX_CART_QUANTITY)
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      ),
    })),

  decreaseQuantity: (cartItemId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.cartItemId === cartItemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    })),

  clearCart: () =>
    set({
      items: [],
    }),
}));

export const selectCartCount = (state: CartStore) => state.items.length;
