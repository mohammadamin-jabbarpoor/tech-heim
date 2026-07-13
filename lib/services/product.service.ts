import { prisma } from "@/database/db";
import {
  GetFilteredProductsParams,
  productCardSelect,
  productDetailSelect,
} from "../prisma-types";
import { serializeProduct } from "../serializers/product";
import { Prisma } from "@/app/generated/prisma/client";

export async function getNewProducts() {
  const products = await prisma.product.findMany({
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

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    compareAtPrice: product.compareAtPrice
      ? Number(product.compareAtPrice)
      : null,
  }));
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
  const products = await prisma.product.findMany({
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

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    compareAtPrice: product.compareAtPrice
      ? Number(product.compareAtPrice)
      : null,
  }));
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

export async function getProducts() {
  const products = await prisma.product.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: productCardSelect,
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    compareAtPrice: product.compareAtPrice
      ? Number(product.compareAtPrice)
      : null,
  }));
}

export async function getFilteredProducts({
  category,
  filters = {},
}: GetFilteredProductsParams) {
  const where: Prisma.ProductWhereInput = {
    isActive: true,
  };

  if (category && category !== "All") {
    where.category = {
      slug: category,
    };
  }

  const andConditions: Prisma.ProductWhereInput[] = [];

  for (const [title, values] of Object.entries(filters)) {
    if (values.length === 0) continue;

    andConditions.push({
      specifications: {
        some: {
          title,
          value: {
            in: values,
          },
        },
      },
    });
  }

  if (andConditions.length > 0) {
    where.AND = andConditions;
  }

  const products = await prisma.product.findMany({
    where,
    orderBy: {
      createdAt: "desc",
    },
    select: productCardSelect,
  });

  return products.map((product) => ({
    ...product,
    price: Number(product.price),
    compareAtPrice: product.compareAtPrice
      ? Number(product.compareAtPrice)
      : null,
  }));
}
