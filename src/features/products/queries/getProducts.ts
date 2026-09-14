import prisma from "@/src/lib/db/prisma";
import { unstable_cache } from "next/cache";

export const getProducts = unstable_cache(
  async (categorySlug?: string) => {
    const products = await prisma.product.findMany({
      where: categorySlug
        ? {
            category: {
              slug: categorySlug,
            },
          }
        : undefined,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        slug: true,
        images: {
          where: {
            isPrimary: true,
          },
        },
        price: true,
        compareAtPrice: true,
        createdAt: true,
      },
    });

    return products.map((product) => {
      const price = Number(product.price);

      const compareAtPrice = product.compareAtPrice
        ? Number(product.compareAtPrice)
        : null;

      const discount = compareAtPrice
        ? Math.round(((compareAtPrice - price) / compareAtPrice) * 100)
        : null;

      return {
        ...product,
        price,
        compareAtPrice,
        discount,
      };
    });
  },
  ["products"],
  {
    revalidate: 18,
    tags: ["products"],
  },
);
