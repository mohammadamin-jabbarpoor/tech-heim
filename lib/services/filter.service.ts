import { prisma } from "@/database/db";
import { CategoryFilter, filterConfig } from "../filter-config";

export async function getFiltersByCategory(categorySlug: string) {
  const filters = filterConfig[categorySlug];
  if (!filters) return [];

  const products = await prisma.product.findMany({
    where: {
      category: {
        slug: categorySlug,
      },
      isActive: true,
    },

    select: {
      specifications: true,
    },
  });

  const result: CategoryFilter[] = [];

  for (const filter of filters) {
    const values = [
      ...new Set(
        products
          .flatMap((product) => product.specifications)
          .filter((spec) => spec.title === filter.title)
          .map((spec) => spec.value),
      ),
    ].sort();

    result.push({
      ...filter,
      values,
    });
  }
  return result;
}
