import type { Prisma } from "@/src/app/generated/prisma/client";
import type { CartItemType } from "../types/cartItem";

type CartItemWithRelations = Prisma.CartItemGetPayload<{
  include: {
    product: {
      include: {
        images: true;
      };
    };
    option: {
      include: {
        images: true;
      };
    };
  };
}>;

export function mapCartItems(items: CartItemWithRelations[]): CartItemType[] {
  return items.map((item) => {
    const primaryProductImage = item.product.images[0];

    const primaryOptionImage =
      item.option?.images.find((image) => image.isPrimary) ??
      item.option?.images[0];

    return {
      cartItemId: item.id,

      id: item.product.id,
      title: item.product.title,
      slug: item.product.slug,

      thumbnail: {
        path: primaryOptionImage?.path ?? primaryProductImage?.path ?? "",
        alt: primaryOptionImage?.alt ?? primaryProductImage?.alt ?? null,
      },

      price: Number(item.product.price),

      compareAtPrice:
        item.product.compareAtPrice !== null
          ? Number(item.product.compareAtPrice)
          : null,

      stock: item.product.stock,
      quantity: item.quantity,

      optionId: item.optionId ?? undefined,

      option: item.option
        ? {
            id: item.option.id,
            type: item.option.type,
            name: item.option.name,
            value: item.option.value,
            image: primaryOptionImage
              ? {
                  path: primaryOptionImage.path,
                  alt: primaryOptionImage.alt,
                }
              : undefined,
          }
        : undefined,
    };
  });
}
