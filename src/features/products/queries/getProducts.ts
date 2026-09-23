import prisma from "@/src/lib/db/prisma";

type ProductFilters = Record<string, string | undefined>;

export async function getProducts(filters: ProductFilters) {
  const { category, minPrice, maxPrice, sort, page, ...selectedFilters } =
    filters;

  const filterConditions = Object.entries(selectedFilters)
    .filter(([, value]) => value)
    .map(([filterSlug, value]) => {
      const values = value!.split(",");

      return {
        productFilterOptions: {
          some: {
            filterOption: {
              filter: {
                slug: filterSlug,
              },
              value: {
                in: values,
              },
            },
          },
        },
      };
    });

  const where = {
    ...(category && {
      category: {
        slug: category,
      },
    }),

    ...(minPrice || maxPrice
      ? {
          price: {
            ...(minPrice && {
              gte: Number(minPrice),
            }),
            ...(maxPrice && {
              lte: Number(maxPrice),
            }),
          },
        }
      : {}),

    AND: filterConditions,
  };

  const orderBy =
    sort === "price-asc"
      ? { price: "asc" as const }
      : sort === "price-desc"
        ? { price: "desc" as const }
        : { createdAt: "desc" as const };

  const currentPage = Number(page) || 1;
  const productsPerPage = 9;
  const skip = (currentPage - 1) * productsPerPage;

  const products = await prisma.product.findMany({
    where,

    orderBy,

    skip,
    take: productsPerPage,

    include: {
      images: {
        where: {
          isPrimary: true,
        },
      },
    },
  });

  const totalProducts = await prisma.product.count({
    where,
  });

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return {
    products: products.map((product) => {
      let discount: number | null = null;

      if (product.compareAtPrice && product.compareAtPrice > product.price) {
        discount = Math.round(
          ((Number(product.compareAtPrice) - Number(product.price)) /
            Number(product.compareAtPrice)) *
            100,
        );
      }

      return {
        ...product,
        price: Number(product.price),
        compareAtPrice: product.compareAtPrice
          ? Number(product.compareAtPrice)
          : null,
        discount,
      };
    }),

    pagination: {
      currentPage,
      totalPages,
      totalProducts,
      productsPerPage,
    },
  };
}

export async function getProductPriceRange(categorySlug?: string) {
  const result = await prisma.product.aggregate({
    where: categorySlug
      ? {
          category: {
            slug: categorySlug,
          },
        }
      : undefined,

    _min: {
      price: true,
    },

    _max: {
      price: true,
    },
  });

  return {
    min: result._min.price ? Number(result._min.price) : 0,
    max: result._max.price ? Number(result._max.price) : 0,
  };
}
