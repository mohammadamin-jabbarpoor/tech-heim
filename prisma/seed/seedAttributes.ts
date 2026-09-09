export async function seedAttributesForCategory(
  prisma: any,
  categorySlug: string,
  attributes: any[],
) {
  const category = await prisma.category.findUnique({
    where: {
      slug: categorySlug,
    },
  });

  if (!category) {
    throw new Error(`Category "${categorySlug}" not found`);
  }

  for (const attributeData of attributes) {
    const attribute = await prisma.attributeDefinition.upsert({
      where: {
        categoryId_slug: {
          categoryId: category.id,
          slug: attributeData.slug,
        },
      },

      update: {
        name: attributeData.name,
        isFilterable: attributeData.isFilterable,
        isRequired: attributeData.isRequired,
        sortOrder: attributeData.sortOrder,
      },

      create: {
        name: attributeData.name,
        slug: attributeData.slug,
        isFilterable: attributeData.isFilterable,
        isRequired: attributeData.isRequired,
        sortOrder: attributeData.sortOrder,
        categoryId: category.id,
      },
    });

    for (const optionData of attributeData.options) {
      await prisma.attributeOption.upsert({
        where: {
          attributeId_slug: {
            attributeId: attribute.id,
            slug: optionData.slug,
          },
        },

        update: {
          value: optionData.value,
          sortOrder: optionData.sortOrder,
        },

        create: {
          value: optionData.value,
          slug: optionData.slug,
          sortOrder: optionData.sortOrder,
          attributeId: attribute.id,
        },
      });
    }
  }
}
