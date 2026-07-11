import { prisma } from "@/database/db";
import { categories } from "../data/categories";

export async function seedCategories() {
  console.log("🌱 Seeding categories...");

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        slug: category.slug,
      },
      update: category,
      create: category,
    });
  }

  console.log("✅ Categories seeded.");
}