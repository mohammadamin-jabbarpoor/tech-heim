import { PrismaClient } from "@/src/app/generated/prisma/client";

export const filterDefinitions = {
  gaming: [
    {
      name: "Brand",
      slug: "brand",
    },
    {
      name: "Color",
      slug: "color",
    },
    {
      name: "Product Type",
      slug: "product-type",
    },
    {
      name: "Platform",
      slug: "platform",
    },
    {
      name: "Connectivity",
      slug: "connectivity",
    },
  ],
  accessories: [
    {
      name: "Brand",
      slug: "brand",
    },
    {
      name: "Color",
      slug: "color",
    },
    {
      name: "Product Type",
      slug: "product-type",
    },
    {
      name: "Compatibility",
      slug: "compatibility",
    },
    {
      name: "Capacity",
      slug: "capacity",
    },
    {
      name: "Max Output",
      slug: "max-output",
    },
  ],
} as const;

export async function seedFilters(prisma: PrismaClient) {
  console.log("🌱 Seeding filters...");

  for (const [categorySlug, filters] of Object.entries(filterDefinitions)) {
    const category = await prisma.category.findUnique({
      where: {
        slug: categorySlug,
      },
    });

    if (!category) {
      throw new Error(
        `Category "${categorySlug}" not found while seeding filters.`,
      );
    }

    for (const filter of filters) {
      await prisma.filter.upsert({
        where: {
          categoryId_slug: {
            categoryId: category.id,
            slug: filter.slug,
          },
        },
        update: {
          name: filter.name,
        },
        create: {
          name: filter.name,
          slug: filter.slug,
          categoryId: category.id,
        },
      });
    }
  }

  console.log("✅ Filters seeded");
}
