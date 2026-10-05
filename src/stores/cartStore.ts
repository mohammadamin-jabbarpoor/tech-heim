import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  CartItemType,
  MAX_CART_QUANTITY,
} from "../features/cart/types/cartItem";

type CartStore = {
  items: CartItemType[];

  setItems: (items: CartItemType[]) => void;

  addItem: (item: CartItemType) => void;
  removeItem: (cartItemId: string) => void;
  increaseQuantity: (cartItemId: string) => void;
  decreaseQuantity: (cartItemId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],

      setItems: (items) =>
        set({
          items,
        }),

      addItem: (item) =>
        set((state) => {
          const existingItem = state.items.find(
            (cartItem) =>
              cartItem.id === item.id && cartItem.optionId === item.optionId,
          );

          if (existingItem) {
            return {
              items: state.items.map((cartItem) =>
                cartItem.cartItemId === existingItem.cartItemId
                  ? {
                      ...cartItem,
                      quantity: Math.min(
                        cartItem.quantity + item.quantity,
                        cartItem.stock,
                        MAX_CART_QUANTITY,
                      ),
                    }
                  : cartItem,
              ),
            };
          }

          return {
            items: [
              ...state.items,
              {
                ...item,
                quantity: Math.min(
                  item.quantity,
                  item.stock,
                  MAX_CART_QUANTITY,
                ),
              },
            ],
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
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        })),

      decreaseQuantity: (cartItemId) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.cartItemId === cartItemId && item.quantity > 1
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item,
          ),
        })),

      clearCart: () =>
        set({
          items: [],
        }),
    }),

    {
      name: "cart-storage",
    },
  ),
);

export const selectCartCount = (state: CartStore) => state.items.length;
