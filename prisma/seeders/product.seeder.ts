import { prisma } from "@/database/db";
import { products } from "../data/products/index";

export async function seedProducts() {
  console.log("🌱 Seeding products...");

  for (const product of products) {
    const category = await prisma.category.findUnique({
      where: {
        slug: product.category,
      },
    });

    if (!category) {
      throw new Error(`Category ${product.category} not found`);
    }

    const { category: _, images, options, specifications, ...data } = product;

    await prisma.product.upsert({
      where: {
        slug: product.slug,
      },

      update: {
        ...data,

        categoryId: category.id,

        images: {
          deleteMany: {},

          create: images ?? [],
        },

        options: {
          deleteMany: {},

          create:
            options?.map((option) => ({
              type: option.type,
              name: option.name,
              value: option.value,

              isDefault: option.isDefault,
              sortOrder: option.sortOrder,

              images: {
                create: option.images,
              },
            })) ?? [],
        },

        specifications: {
          deleteMany: {},

          create: specifications ?? [],
        },
      },

      create: {
        ...data,

        categoryId: category.id,

        images: {
          create: images ?? [],
        },

        options: {
          create:
            options?.map((option) => ({
              type: option.type,
              name: option.name,
              value: option.value,

              isDefault: option.isDefault,
              sortOrder: option.sortOrder,

              images: {
                create: option.images,
              },
            })) ?? [],
        },

        specifications: {
          create: specifications ?? [],
        },
      },
    });
  }

  console.log("✅ Products seeded");
}
