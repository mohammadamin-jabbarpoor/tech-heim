export type WishlistItem = {
  id: string;

  title: string;
  slug: string;

  thumbnail: {
    path: string;
    alt: string | null;
  };

  price: number;
  compareAtPrice?: number | null;

  stock: number;

  optionId?: string;

  option?: {
    id: string;
    type: string;
    name: string;
    value: string | null;

    image?: {
      path: string;
      alt: string | null;
    };
  };
};
