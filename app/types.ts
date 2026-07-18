import type { Icon } from "iconsax-react";

export type CategoryType = {
  id: string;
  image: string;
  name: string;
};

export type SaleProductType = {
  id: string;
  image: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  discount: number;
};

export type SimilarProductType = {
  id: string;
  image: string;
  title: string;
  price: number;
  star: number;
};

export type FrequentlyProductType = {
  id: string;
  image: string;
  title: string;
  price: number;
  star: number;
};

export type ReviewType = {
  id: string;
  image: string;
  title: string;
};
export type ReviewsType = ReviewType[];

export type CommentType = {
  id: string;
  profile: string;
  name: string;
  date: string;
  rate: number;
  title: string;
  like: number;
  dislike: number;
};
export type CommentsType = CommentType[];

export type NewProductType = {
  id: string;
  image: string;
  title: string;
  price: number;
  star: number;
  colors: [string?, string?, string?];
};
export type NewProductsType = NewProductType[];

export type BestSellerType = {
  id: string;
  image: string;
  title: string;
  price?: number;
  oldPrice?: number;
  newPrice?: number;
  star: number;
  discount?: number;
};
export type BestSellersType = BestSellerType[];

export type BlogInfo = {
  id: string;
  image: string;
  title: string;
  description: string;
  date: {
    year: number;
    month: string;
    day: number;
  };
  time?: number;
};

export type BlogsInfo = {
  featured: BlogInfo;
  blogs: BlogInfo[];
};

export type CountdownResult = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
};

type ProductInfoItem = {
  title: string;
  value: string | number;
};
export type ProductDetailType = {
  id: string;
  mainImage: string;
  imagesList: string[];
  title: string;
  star: number;
  sold: number;
  colors: string[];
  productInfo: ProductInfoItem[];
  price: number;
  lastPrice: number;
  discount: number;
};

export type CategoryItemType = {
  icon: Icon;
  title: string;
  slug?: string;
  disabled?: boolean;
};
