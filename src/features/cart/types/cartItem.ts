export type CartItemType = {
  cartItemId: string;

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
  quantity: number;

  optionId?: string | null;

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

  payment?: {
    type: "full" | "installment";
    months?: number;
    installmentPrice?: number;
  };
};

export const MAX_CART_QUANTITY = 3;
