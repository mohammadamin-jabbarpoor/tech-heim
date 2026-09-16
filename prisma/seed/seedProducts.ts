export async function seedProductsForCategory(
  prisma: any,
  categorySlug: string,
  products: any[],
) {
  const category = await prisma.category.findUnique({
    where: {
      slug: categorySlug,
    },
  });

  if (!category) {
    throw new Error(`Category "${categorySlug}" not found`);
  }

  for (const productData of products) {
    console.log(`🌱 Seeding product: ${productData.title}`);

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
        isFeatured: productData.isFeatured,
        isNew: productData.isNew,
        isBestSeller: productData.isBestSeller,
        categoryId: category.id,
      },

      create: {
        title: productData.title,
        slug: productData.slug,
        description: productData.description,
        price: productData.price,
        compareAtPrice: productData.compareAtPrice,
        stock: productData.stock,
        isFeatured: productData.isFeatured,
        isNew: productData.isNew,
        isBestSeller: productData.isBestSeller,
        categoryId: category.id,
      },
    });

    for (const [attributeSlug, attributeValue] of Object.entries(
      productData.attributes ?? {},
    )) {
      const attribute = await prisma.attributeDefinition.findUnique({
        where: {
          categoryId_slug: {
            categoryId: category.id,
            slug: attributeSlug,
          },
        },
      });

      if (!attribute) {
        throw new Error(
          `Attribute "${attributeSlug}" not found in category "${categorySlug}"`,
        );
      }

      if (typeof attributeValue !== "string") {
        throw new Error(
          `Attribute "${attributeSlug}" on product "${productData.slug}" must be a string`,
        );
      }

      if (attribute.isFilterable) {
        const option = await prisma.attributeOption.findFirst({
          where: {
            attributeId: attribute.id,
            OR: [{ value: attributeValue }, { slug: attributeValue }],
          },
        });

        if (!option) {
          throw new Error(
            `Option "${attributeValue}" not found for filterable attribute "${attributeSlug}"`,
          );
        }

        await prisma.productAttributeValue.upsert({
          where: {
            productId_attributeId: {
              productId: product.id,
              attributeId: attribute.id,
            },
          },

          update: {
            optionId: option.id,
            value: null,
            unit: null,
          },

          create: {
            productId: product.id,
            attributeId: attribute.id,
            optionId: option.id,
            value: null,
            unit: null,
          },
        });

        continue;
      }

      await prisma.productAttributeValue.upsert({
        where: {
          productId_attributeId: {
            productId: product.id,
            attributeId: attribute.id,
          },
        },

        update: {
          value: attributeValue,
          unit: null,
          optionId: null,
        },

        create: {
          productId: product.id,
          attributeId: attribute.id,
          value: attributeValue,
          unit: null,
          optionId: null,
        },
      });
    }

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

    for (const optionData of productData.options ?? []) {
      const option = await prisma.productOption.create({
        data: {
          type: optionData.type,
          name: optionData.name,
          value: optionData.value ?? null,
          isDefault: optionData.isDefault ?? false,
          sortOrder: optionData.sortOrder ?? 0,
          productId: product.id,
        },
      });

      for (const image of optionData.images ?? []) {
        await prisma.productImage.create({
          data: {
            path: image.path,
            alt: image.alt ?? null,
            isPrimary: image.isPrimary ?? false,
            sortOrder: image.sortOrder ?? 0,
            productId: product.id,
            optionId: option.id,
          },
        });
      }
    }

    for (const image of productData.images ?? []) {
      await prisma.productImage.create({
        data: {
          path: image.path,
          alt: image.alt ?? null,
          isPrimary: image.isPrimary ?? false,
          sortOrder: image.sortOrder ?? 0,
          productId: product.id,
          optionId: null,
        },
      });
    }

    console.log(`✅ Product seeded: ${productData.title}`);
  }
}
