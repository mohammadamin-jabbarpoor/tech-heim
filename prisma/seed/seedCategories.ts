import { categories } from "./data/categories";

export async function seedCategories(prisma: any) {
  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        slug: category.slug,
      },

      update: {
        name: category.name,
        image: category.image,
      },

      create: {
        name: category.name,
        slug: category.slug,
        image: category.image,
      },
    });
  }
}
