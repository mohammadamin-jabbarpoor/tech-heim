import prisma from "@/src/lib/db/prisma";

export async function getSimilarProducts(
  categoryId: string,
  productId: string,
) {
  const products = await prisma.product.findMany({
    where: {
      categoryId,
      id: {
        not: productId,
      },
    },

    take: 7,

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
    },
  });

  return products.map((product) => {
    let discount: number | null = null;

    if (product.compareAtPrice && product.compareAtPrice > product.price) {
      discount = Math.round(
        ((Number(product.compareAtPrice) - Number(product.price)) /
          Number(product.compareAtPrice)) *
          100,
      );
    }

    return {
      ...product,
      price: Number(product.price),
      compareAtPrice: product.compareAtPrice
        ? Number(product.compareAtPrice)
        : null,
      discount,
    };
  });
}
