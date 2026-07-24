import { create } from "zustand";
import { persist } from "zustand/middleware";

export type WishlistItem = {
  id: string;

  title: string;
  slug: string;

  thumbnail: {
    path: string;
    alt: string | null;
  };

  price: number;
  compareAtPrice?: number | null;

  stock: number;

  option?: {
    id: string;
    type: string;
    name: string;
    value: string | null;

    image?: {
      path: string;
      alt: string | null;
    };
  };
};

type WishlistStore = {
  items: WishlistItem[];

  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: string) => void;
  isInWishlist: (id: string) => boolean;
};

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToWishlist: (item) => {
        const exists = get().items.some(
          (wishlistItem) => wishlistItem.id === item.id,
        );

        if (exists) return;

        set((state) => ({
          items: [...state.items, item],
        }));
      },

      removeFromWishlist: (id) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }));
      },

      isInWishlist: (id) => {
        return get().items.some((item) => item.id === id);
      },
    }),
    {
      name: "wishlist-storage",
    },
  ),
);
