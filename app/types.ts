import type { Icon } from "iconsax-react";

export type CategoryType = {
  id: string;
  image: string;
  name: string;
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

export type CategoryItemType = {
  icon: Icon;
  title: string;
  slug?: string;
  disabled?: boolean;
};
