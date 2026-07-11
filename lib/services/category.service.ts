import { prisma } from "@/database/db";

type CreateCategoryInput = {
  name: string;
  slug: string;
  image: string;
  description?: string;
};

export async function createCategory(data: CreateCategoryInput) {
  return prisma.category.create({
    data,
  });
}

export async function getCategories() {
  return prisma.category.findMany({
    where: {
      isActive: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      slug: true,
      image: true,
    },
  });
}
