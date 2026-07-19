import { Prisma } from "@/app/generated/prisma/client";
import { SelectedFilters } from "./filter-config";

//
// ================= PRODUCT CARD =================
//

export const productCardSelect = {
  id: true,
  title: true,
  slug: true,

  price: true,
  compareAtPrice: true,

  isNew: true,
  isBestSeller: true,

  category: {
    select: {
      id: true,
      name: true,
      slug: true,
    },
  },

  images: {
    where: {
      isPrimary: true,
    },
    take: 1,
    select: {
      path: true,
      alt: true,
    },
  },

  createdAt: true,
} satisfies Prisma.ProductSelect;

export type ProductCardDb = Prisma.ProductGetPayload<{
  select: typeof productCardSelect;
}>;

export type ProductCardDto = Omit<ProductCardDb, "price" | "compareAtPrice"> & {
  price: number;
  compareAtPrice: number | null;
};

//
// ================= PRODUCT DETAIL =================
//

export const productDetailSelect = {
  id: true,
  title: true,
  slug: true,

  description: true,

  price: true,
  compareAtPrice: true,

  stock: true,

  isNew: true,
  isBestSeller: true,

  createdAt: true,

  category: {
    select: {
      id: true,
      name: true,
      slug: true,
    },
  },

  images: {
    orderBy: {
      sortOrder: "asc",
    },
    select: {
      id: true,
      path: true,
      alt: true,
      isPrimary: true,
      sortOrder: true,
    },
  },

  specifications: {
    orderBy: {
      sortOrder: "asc",
    },
    select: {
      id: true,
      title: true,
      value: true,
      sortOrder: true,
    },
  },

  options: {
    orderBy: {
      sortOrder: "asc",
    },
    select: {
      id: true,
      type: true,
      name: true,
      value: true,
      isDefault: true,
      sortOrder: true,

      images: {
        orderBy: {
          sortOrder: "asc",
        },
        select: {
          id: true,
          path: true,
          alt: true,
          isPrimary: true,
          sortOrder: true,
        },
      },
    },
  },
} satisfies Prisma.ProductSelect;

export type ProductDetailDb = Prisma.ProductGetPayload<{
  select: typeof productDetailSelect;
}>;

export type ProductDetailDto = Omit<
  ProductDetailDb,
  "price" | "compareAtPrice"
> & {
  price: number;
  compareAtPrice: number | null;
};

//
// ================= FILTER =================
//

export type GetFilteredProductsParams = {
  category?: string;

  filters?: SelectedFilters;

  sale?: boolean;

  minPrice?: number;
  maxPrice?: number;
};

// =======

export type ProductOptionDto = ProductDetailDto["options"][number];
