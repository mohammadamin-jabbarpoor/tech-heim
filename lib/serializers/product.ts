import {
  ProductCardDb,
  ProductCardDto,
  ProductDetailDb,
  ProductDetailDto,
} from "../prisma-types";

export function serializeProductCard(product: ProductCardDb): ProductCardDto {
  return {
    ...product,

    price: Number(product.price),

    compareAtPrice:
      product.compareAtPrice === null ? null : Number(product.compareAtPrice),
  };
}

export function serializeProductDetail(
  product: ProductDetailDb,
): ProductDetailDto {
  return {
    ...product,

    price: Number(product.price),

    compareAtPrice:
      product.compareAtPrice === null ? null : Number(product.compareAtPrice),
  };
}
