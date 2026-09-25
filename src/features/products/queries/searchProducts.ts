import prisma from "@/src/lib/db/prisma";

export async function searchProducts(query: string) {
  const products = await prisma.product.findMany({
    where: {
      OR: [
        {
          title: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          category: {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
        },
      ],
    },

    select: {
      id: true,
      slug: true,
      title: true,

      category: {
        select: {
          slug: true,
        },
      },

      images: {
        where: {
          isPrimary: true,
        },
        take: 1,
        select: {
          path: true,
          alt: true,
        },
      },
    },
  });

  return products;
}
