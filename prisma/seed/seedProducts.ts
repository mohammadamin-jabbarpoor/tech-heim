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

/**
 * تبدیل مقدار Attribute به آرایه
 *
 * مثال:
 *
 * "sony"
 * →
 * ["sony"]
 *
 * ["PlayStation 5", "Windows"]
 * →
 * ["PlayStation 5", "Windows"]
 */
function normalizeAttributeValues(value: RawAttributeValue): string[] {
  if (Array.isArray(value)) {
    return value.map((item) => item.trim()).filter(Boolean);
  }

  return [value.trim()].filter(Boolean);
}

/**
 * پیدا کردن Filterهایی که برای Category مشخص شده‌اند.
 */
function getCategoryFilterDefinitions(categorySlug: string) {
  return (
    filterDefinitions[categorySlug as keyof typeof filterDefinitions] ?? []
  );
}

export async function seedProducts(prisma: PrismaClient) {
  console.log("🌱 Seeding products...");

  for (const productData of rawProducts) {
    console.log(`  → ${productData.title}`);

    /**
     * 1. پیدا کردن Category
     */
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

    /**
     * 2. اگر محصول قبلاً وجود داشته باشد،
     *    اطلاعات اصلی آن را update می‌کنیم.
     */
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
        categoryId: category.id,
      },

      create: {
        title: productData.title,
        slug: productData.slug,
        description: productData.description,
        price: productData.price,
        compareAtPrice: productData.compareAtPrice,
        stock: productData.stock,
        categoryId: category.id,
      },
    });

    /**
     * 3. اطلاعات وابسته قبلی محصول را پاک می‌کنیم
     *
     * چون ممکن است:
     * - عکس‌ها تغییر کرده باشند
     * - Optionها تغییر کرده باشند
     * - Attributeهای محصول تغییر کرده باشند
     */
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

    /**
     * 4. ایجاد تصاویر اصلی Product
     */
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

    /**
     * 5. ایجاد Product Options
     *
     * مثال:
     *
     * Color:
     * - Black
     * - White
     * - Red
     *
     * و تصاویر هر رنگ هم به همان Option متصل می‌شوند.
     */
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

        /**
         * تصاویر مربوط به همین Option
         */
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

    /**
     * 6. اتصال Attributes محصول به FilterOptionها
     *
     * مثال:
     *
     * attributes: {
     *   brand: "sony",
     *   platform: ["PlayStation 5", "Windows"],
     *   connectivity: ["Bluetooth", "USB-C"]
     * }
     *
     * تبدیل می‌شود به:
     *
     * Product
     *   ↓
     * ProductFilterOption
     *   ↓
     * FilterOption
     */
    const filters = getCategoryFilterDefinitions(productData.category);

    for (const filterDefinition of filters) {
      const rawValue = productData.attributes[filterDefinition.slug];

      /**
       * اگر محصول این Attribute را نداشته باشد،
       * از آن Filter عبور می‌کنیم.
       */
      if (rawValue === undefined || rawValue === null) {
        continue;
      }

      const values = normalizeAttributeValues(rawValue);

      /**
       * پیدا کردن Filter مربوط به Category
       */
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

      /**
       * برای هر Value یک FilterOption ایجاد/پیدا می‌کنیم.
       */
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

        /**
         * اتصال Product به FilterOption
         */
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
