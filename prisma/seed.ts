import { seedCategories } from "./seeders/category.seeder";
import { seedProducts } from "./seeders/product.seeder";

async function main() {
  console.log("🚀 Start seeding...");

  await seedCategories();
  await seedProducts();

  console.log("🎉 Database seeded successfully.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
