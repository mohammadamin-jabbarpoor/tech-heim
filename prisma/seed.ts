import "dotenv/config";

import { PrismaClient } from "../src/app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { seedCategories } from "./seed/seedCategories";
import { seedAttributesForCategory } from "./seed/seedAttributes";
import { seedProductsForCategory } from "./seed/seedProducts";

import { gamingAttributes } from "./seed/data/attributes/gaming";
import { gamingProducts } from "./seed/data/products/gaming";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🌱 Starting seed...");

  await seedCategories(prisma);

  await seedAttributesForCategory(prisma, "gaming", gamingAttributes);

  await seedProductsForCategory(prisma, "gaming", gamingProducts);

  console.log("✅ Seed completed!");
}

main()
  .catch((error) => {
    console.error("❌ Seed failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
