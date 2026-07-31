import { WishlistItem } from "@/store/wishlist-store";
import { CartItemType } from "@/types/cart";

export function createCartItemFromWishlist(item: WishlistItem): CartItemType {
  return {
    cartItemId: crypto.randomUUID(),

    id: item.id,

    title: item.title,
    slug: item.slug,

    thumbnail: item.thumbnail,

    price: item.price,
    compareAtPrice: item.compareAtPrice,

    stock: item.stock,

    quantity: 1,

    optionId: item.option?.id,
    option: item.option,
  };
}
