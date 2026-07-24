import { ProductCardDto } from "@/lib/prisma-types";

export function createWishlistItem(product: ProductCardDto) {
  const defaultOption = product.options.find((option) => option.isDefault);

  return {
    id: product.id,
    title: product.title,
    slug: product.slug,
    thumbnail: product.images[0],
    price: Number(product.price),
    compareAtPrice: product.compareAtPrice
      ? Number(product.compareAtPrice)
      : null,
    stock: product.stock,
    option: defaultOption
      ? {
          id: defaultOption.id,
          type: defaultOption.type,
          name: defaultOption.name,
          value: defaultOption.value,
          image: defaultOption.images[0],
        }
      : undefined,
  };
}
