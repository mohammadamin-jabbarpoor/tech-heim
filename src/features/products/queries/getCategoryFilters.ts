import prisma from "@/src/lib/db/prisma";

export async function getCategoryFilters(categorySlug: string) {
  const category = await prisma.category.findUnique({
    where: {
      slug: categorySlug,
    },

    select: {
      id: true,
      name: true,
      slug: true,

      filters: {
        select: {
          id: true,
          name: true,
          slug: true,

          options: {
            select: {
              id: true,
              name: true,
              value: true,
            },
          },
        },
      },
    },
  });

  return category?.filters ?? [];
}
