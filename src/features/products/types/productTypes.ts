export type LandingProductCards = {
  id: string;
  title: string;
  slug: string;
  price: number;
  compareAtPrice: number | null;
  discount: number | null;
  images: {
    id: string;
    alt: string | null;
    isPrimary: boolean;
    path: string;
    sortOrder: number;
    optionId: string | null;
    productId: string;
  }[];
};

export type ProductPage = {
  id: string;
  title: string;
  slug: string;
  description: string | null;
  price: number;
  compareAtPrice: number | null;
  discount: number | null;
  stock: number;

  category: {
    id: string;
    name: string;
    slug: string;
  };

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

  productFilterOptions: {
    filterOption: {
      name: string;
      value: string;

      filter: {
        name: string;
        slug: string;
      };
    };
  }[];
};
