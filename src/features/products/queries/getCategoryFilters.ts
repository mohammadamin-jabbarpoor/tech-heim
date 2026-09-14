import prisma from "@/src/lib/db/prisma";

export async function getCategoryFilters(categorySlug: string) {
  const category = await prisma.category.findUnique({
    where: {
      slug: categorySlug,
    },
    select: {
      attributes: {
        where: {
          isFilterable: true,
        },
        orderBy: {
          sortOrder: "asc",
        },
        select: {
          id: true,
          name: true,
          slug: true,
          options: {
            orderBy: {
              sortOrder: "asc",
            },
            select: {
              id: true,
              value: true,
              slug: true,
            },
          },
        },
      },
    },
  });

  return category?.attributes ?? [];
}
