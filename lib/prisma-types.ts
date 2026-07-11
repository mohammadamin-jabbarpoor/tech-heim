import { Prisma } from "@/app/generated/prisma/client";

export const productCardSelect = {
  id: true,
  title: true,
  slug: true,

  price: true,
  compareAtPrice: true,

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
} satisfies Prisma.ProductSelect;

export type ProductCard = Prisma.ProductGetPayload<{
  select: typeof productCardSelect;
}>;

export type SaleProduct = {
  id: string;
  title: string;
  slug: string;

  images: {
    path: string;
    alt: string | null;
  }[];

  price: number;
  compareAtPrice: number | null;
  discount: number | null;
};

export type ProductDetail = {
  id: string;
  title: string;
  slug: string;

  description: string | null;

  price: number;
  compareAtPrice: number | null;

  stock: number;

  images: {
    id: string;
    path: string;
    alt: string | null;
    isPrimary: boolean;
    sortOrder: number;
  }[];

  options: {
    id: string;
    type: string;
    name: string;
    value: string | null;
    isDefault: boolean;
    sortOrder: number;

    images: {
      id: string;
      path: string;
      alt: string | null;
      isPrimary: boolean;
      sortOrder: number;
    }[];
  }[];

  specifications: {
    id: string;
    title: string;
    value: string;
    sortOrder: number;
  }[];

  category: {
    id: string;
    name: string;
    slug: string;
  };
};

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
export type ProductDetails = Prisma.ProductGetPayload<{
  select: typeof productDetailSelect;
}>;
export type ProductDetailsDto = Omit<
  ProductDetails,
  "price" | "compareAtPrice"
> & {
  price: number;
  compareAtPrice: number | null;
};
