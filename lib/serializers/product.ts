import { ProductDetails, ProductDetailsDto } from "../prisma-types";

export function serializeProduct(product: ProductDetails): ProductDetailsDto {
  return {
    ...product,

    price: Number(product.price),

    compareAtPrice:
      product.compareAtPrice === null ? null : Number(product.compareAtPrice),
  };
}
