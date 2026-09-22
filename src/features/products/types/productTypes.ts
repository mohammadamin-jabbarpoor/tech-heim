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
