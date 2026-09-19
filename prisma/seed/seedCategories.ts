import { PrismaClient } from "@/src/app/generated/prisma/client";

export const categorySeedData = [
  {
    name: "Accessories",
    slug: "accessories",
  },
  {
    name: "Camera",
    slug: "camera",
  },
  {
    name: "Laptop",
    slug: "laptop",
  },
  {
    name: "Smart Phone",
    slug: "smart-phone",
  },
  {
    name: "Gaming",
    slug: "gaming",
  },
  {
    name: "Smart Watch",
    slug: "smart-watch",
  },
];

export async function seedCategories(prisma: PrismaClient) {
  console.log("🌱 Seeding categories...");

  for (const category of categorySeedData) {
    await prisma.category.upsert({
      where: {
        slug: category.slug,
      },
      update: {
        name: category.name,
      },
      create: {
        name: category.name,
        slug: category.slug,
      },
    });
  }

  console.log("✅ Categories seeded");
}
