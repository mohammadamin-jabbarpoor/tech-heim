import { ProductCardType } from "../../products/types/productTypes";
import { CartItemType } from "./cartItem";

type CreateCartItemParams = {
  product: ProductCardType;
  optionId?: string;
  payment?: {
    type: "full" | "installment";
    months?: number;
    installmentPrice?: number;
  };
};

export function createCartItem({
  product,
  optionId,
  payment,
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

    payment,

    optionId: selectedOption?.id,

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
