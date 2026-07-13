export type ProductSeed = {
  title: string;
  slug: string;
  description: string;

  price: string;
  compareAtPrice?: string;

  stock: number;

  category: string;

  isNew?: boolean;
  isBestSeller?: boolean;

  images?: {
    path: string;
    alt?: string;
    isPrimary?: boolean;
    sortOrder: number;
  }[];

  options?: {
    type: string;
    name: string;
    value?: string;

    isDefault?: boolean;
    sortOrder: number;

    images: {
      path: string;
      alt?: string;
      isPrimary?: boolean;
      sortOrder: number;
    }[];
  }[];

  specifications?: {
    title: string;
    value: string;
    sortOrder: number;
  }[];
};
