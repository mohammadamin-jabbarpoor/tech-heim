import { prisma } from "@/database/db";
import {
  productCardSelect,
  ProductDetails,
  ProductDetailsDto,
  productDetailSelect,
} from "../prisma-types";
import { serializeProduct } from "../serializers/product";

export async function getNewProducts() {
  return prisma.product.findMany({
    where: {
      isActive: true,
      isNew: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
    select: productCardSelect,
  });
}

export async function getSaleProducts() {
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
      compareAtPrice: { not: null },
    },
    orderBy: { createdAt: "desc" },
    select: productCardSelect,
  });

  return products.map((p) => {
    const price = Number(p.price);
    const compareAtPrice = p.compareAtPrice ? Number(p.compareAtPrice) : null;

    const discount = compareAtPrice
      ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
      : null;

    return {
      ...p,
      price,
      compareAtPrice,
      discount,
    };
  });
}

export async function getBestSellerProducts() {
  return prisma.product.findMany({
    where: {
      isActive: true,
      isBestSeller: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
    select: productCardSelect,
  });
}

export async function getProductBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: {
      slug,
    },
    select: productDetailSelect,
  });

  if (!product) return null;

  return serializeProduct(product);
}

export function getDiscountPercent(
  price: number,
  compareAtPrice: number | null,
) {
  if (!compareAtPrice) return null;

  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}
