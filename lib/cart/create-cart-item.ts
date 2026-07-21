import { CreateCartProduct } from "@/lib/prisma-types";
import { CartItemType } from "@/types/cart";

type CreateCartItemParams = {
  product: CreateCartProduct;
  optionId?: string;
};

export function createCartItem({
  product,
  optionId,
}: CreateCartItemParams): CartItemType {
  const selectedOption = product.options.find(
    (option) => option.id === optionId,
  );

  const image =
    selectedOption?.images.find((image) => image.isPrimary) ??
    product.images.find((image) => image.isPrimary) ??
    product.images[0];

  return {
    cartItemId: crypto.randomUUID(),

    id: product.id,

    title: product.title,

    slug: product.slug,

    thumbnail: {
      path: image.path,
      alt: image.alt,
    },

    price: product.price,

    compareAtPrice: product.compareAtPrice,

    stock: product.stock,

    quantity: 1,

    option: selectedOption
      ? {
          id: selectedOption.id,
          type: selectedOption.type,
          name: selectedOption.name,
          value: selectedOption.value,

          image: selectedOption.images[0]
            ? {
                path: selectedOption.images[0].path,
                alt: selectedOption.images[0].alt,
              }
            : undefined,
        }
      : undefined,
  };
}
