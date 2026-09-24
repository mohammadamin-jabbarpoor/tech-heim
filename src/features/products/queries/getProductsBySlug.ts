import prisma from "@/src/lib/db/prisma";

export async function getProductsBySlug(slug: string) {
  const product = await prisma.product.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      title: true,
      slug: true,
      description: true,
      price: true,
      compareAtPrice: true,
      stock: true,

      category: {
        select: {
          id: true,
          name: true,
          slug: true,
        },
      },

      images: {
        orderBy: {
          sortOrder: "asc",
        },
        select: {
          id: true,
          path: true,
          alt: true,
          isPrimary: true,
          sortOrder: true,
        },
      },

      options: {
        orderBy: {
          sortOrder: "asc",
        },
        select: {
          id: true,
          type: true,
          name: true,
          value: true,
          isDefault: true,
          sortOrder: true,

          images: {
            orderBy: {
              sortOrder: "asc",
            },
            select: {
              id: true,
              path: true,
              alt: true,
              isPrimary: true,
              sortOrder: true,
            },
          },
        },
      },

      productFilterOptions: {
        select: {
          filterOption: {
            select: {
              name: true,
              value: true,

              filter: {
                select: {
                  name: true,
                  slug: true,
                },
              },
            },
          },
        },
      },
    },
  });

  if (!product) {
    return null;
  }

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
}
