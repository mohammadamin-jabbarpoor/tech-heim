import { PrismaClient } from "@/src/app/generated/prisma/client";
import { seedCategories } from "./seed/seedCategories";
import { seedFilters } from "./seed/seedFilters";
import { seedProducts } from "./seed/seedProducts";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  console.log("🚀 Starting database seed...\n");

  /**
   * مرحله 1:
   * ساخت Categoryها
   */
  await seedCategories(prisma);

  /**
   * مرحله 2:
   * ساخت Filterهای هر Category
   */
  await seedFilters(prisma);

  /**
   * مرحله 3:
   * ساخت Products
   * + Images
   * + Product Options
   * + Filter Options
   * + Product ↔ FilterOption
   */
  await seedProducts(prisma);

  console.log("\n🎉 Database seed completed successfully!");
}

main()
  .catch((error) => {
    console.error("\n❌ Seed failed:");
    console.error(error);

    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
