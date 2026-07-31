import { CartItemType } from "@/types/cart";

type DatabaseCartItem = {
  id: string;
  productId: string;
  optionId: string | null;
  quantity: number;

  product: {
    id: string;
    title: string;
    slug: string;
    price: unknown;
    compareAtPrice: unknown;
    stock: number;

    images: {
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

      images: {
        path: string;
        alt: string | null;
        isPrimary: boolean;
        sortOrder: number;
      }[];
    }[];
  };

  option: {
    id: string;
    type: string;
    name: string;
    value: string | null;

    images: {
      path: string;
      alt: string | null;
      isPrimary: boolean;
      sortOrder: number;
    }[];
  } | null;
};

export function mapCartItem(item: DatabaseCartItem): CartItemType {
  const productImage =
    item.product.images.find((image) => image.isPrimary) ??
    item.product.images[0];

  const optionImage = item.option?.images.find((image) => image.isPrimary);

  const image = optionImage ?? productImage;

  return {
    cartItemId: item.id,

    id: item.product.id,

    title: item.product.title,

    slug: item.product.slug,

    thumbnail: {
      path: image.path,
      alt: image.alt,
    },

    price: Number(item.product.price),

    compareAtPrice: item.product.compareAtPrice
      ? Number(item.product.compareAtPrice)
      : null,

    stock: item.product.stock,

    quantity: item.quantity,

    optionId: item.optionId ?? undefined,

    option: item.option
      ? {
          id: item.option.id,
          type: item.option.type,
          name: item.option.name,
          value: item.option.value,

          image: item.option.images[0]
            ? {
                path: item.option.images[0].path,
                alt: item.option.images[0].alt,
              }
            : undefined,
        }
      : undefined,
  };
}

export function mapCartItems(items: DatabaseCartItem[]): CartItemType[] {
  return items.map(mapCartItem);
}
