import { PrismaClient } from "@/src/app/generated/prisma/client";
import { products } from "./data/products";
import { filterDefinitions } from "./seedFilters";

type RawAttributeValue = string | string[];

type RawProduct = {
  title: string;
  slug: string;
  description?: string;
  price: string | number;
  compareAtPrice?: string | number;
  stock: number;
  category: string;

  isFeatured?: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;

  images?: Array<{
    path: string;
    alt?: string;
    isPrimary?: boolean;
    sortOrder?: number;
  }>;

  options?: Array<{
    type: string;
    name: string;
    value?: string;
    isDefault?: boolean;
    sortOrder?: number;

    images?: Array<{
      path: string;
      alt?: string;
      isPrimary?: boolean;
      sortOrder?: number;
    }>;
  }>;

  attributes: Record<string, RawAttributeValue>;
};

const rawProducts = products as RawProduct[];

function normalizeAttributeValues(value: RawAttributeValue): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => item.trim()).filter(Boolean);
  }

  return [value.trim()].filter(Boolean);
}

function getCategoryFilterDefinitions(categorySlug: string) {
  return (
    filterDefinitions[categorySlug as keyof typeof filterDefinitions] ?? []
  );
}

export async function seedProducts(prisma: PrismaClient) {
  console.log("🌱 Seeding products...");

  for (const productData of rawProducts) {
    console.log(`  → ${productData.title}`);

    const category = await prisma.category.findUnique({
      where: {
        slug: productData.category,
      },
    });

    if (!category) {
      throw new Error(
        `Category "${productData.category}" not found for product "${productData.slug}".`,
      );
    }

    const product = await prisma.product.upsert({
      where: {
        slug: productData.slug,
      },

      update: {
        title: productData.title,
        description: productData.description,
        price: productData.price,
        compareAtPrice: productData.compareAtPrice,
        stock: productData.stock,
        isFeatured: productData.isFeatured ?? false,
        isNew: productData.isNew ?? false,
        isBestSeller: productData.isBestSeller ?? false,
        categoryId: category.id,
      },

      create: {
        title: productData.title,
        slug: productData.slug,
        description: productData.description,
        price: productData.price,
        compareAtPrice: productData.compareAtPrice,
        stock: productData.stock,
        isFeatured: productData.isFeatured ?? false,
        isNew: productData.isNew ?? false,
        isBestSeller: productData.isBestSeller ?? false,
        categoryId: category.id,
      },
    });

    await prisma.productFilterOption.deleteMany({
      where: {
        productId: product.id,
      },
    });

    await prisma.productImage.deleteMany({
      where: {
        productId: product.id,
      },
    });

    await prisma.productOption.deleteMany({
      where: {
        productId: product.id,
      },
    });

    if (productData.images?.length) {
      await prisma.productImage.createMany({
        data: productData.images.map((image) => ({
          path: image.path,
          alt: image.alt,
          isPrimary: image.isPrimary ?? false,
          sortOrder: image.sortOrder ?? 0,
          productId: product.id,
        })),
      });
    }

    if (productData.options?.length) {
      for (const optionData of productData.options) {
        const option = await prisma.productOption.create({
          data: {
            type: optionData.type,
            name: optionData.name,
            value: optionData.value,
            isDefault: optionData.isDefault ?? false,
            sortOrder: optionData.sortOrder ?? 0,
            productId: product.id,
          },
        });

        if (optionData.images?.length) {
          await prisma.productImage.createMany({
            data: optionData.images.map((image) => ({
              path: image.path,
              alt: image.alt,
              isPrimary: image.isPrimary ?? false,
              sortOrder: image.sortOrder ?? 0,
              productId: product.id,
              optionId: option.id,
            })),
          });
        }
      }
    }

    const filters = getCategoryFilterDefinitions(productData.category);

    for (const filterDefinition of filters) {
      const rawValue = productData.attributes[filterDefinition.slug];

      if (rawValue === undefined || rawValue === null) {
        continue;
      }

      const values = normalizeAttributeValues(rawValue);

      const filter = await prisma.filter.findUnique({
        where: {
          categoryId_slug: {
            categoryId: category.id,
            slug: filterDefinition.slug,
          },
        },
      });

      if (!filter) {
        throw new Error(
          `Filter "${filterDefinition.slug}" not found for category "${productData.category}".`,
        );
      }

      for (const value of values) {
        const filterOption = await prisma.filterOption.upsert({
          where: {
            filterId_value: {
              filterId: filter.id,
              value,
            },
          },

          update: {
            name: value,
          },

          create: {
            name: value,
            value,
            filterId: filter.id,
          },
        });

        await prisma.productFilterOption.upsert({
          where: {
            productId_filterOptionId: {
              productId: product.id,
              filterOptionId: filterOption.id,
            },
          },

          update: {},

          create: {
            productId: product.id,
            filterOptionId: filterOption.id,
          },
        });
      }
    }
  }

  console.log("✅ Products seeded");
}
