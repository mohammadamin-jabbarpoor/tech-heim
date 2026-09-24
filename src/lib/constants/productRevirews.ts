export type ReviewType = {
  id: number;
  image: string;
  title: string;
};
type ReviewsType = ReviewType[];

export const productReviews: ReviewsType = [
  {
    id: 1,
    image: "/reviews/video-1.svg",
    title: "MacBook Pro 2022 Review: Apple's M2 Revs Up",
  },
  {
    id: 2,
    image: "/reviews/video-2.svg",
    title: "M2 MacBook Pro 13 Unboxing, Comparison and First Look",
  },
  {
    id: 3,
    image: "/reviews/video-3.svg",
    title: "M2 MacBook Pro 13 Review - Don't Choose Wrong!",
  },
  {
    id: 4,
    image: "/reviews/video-1.svg",
    title: "MacBook Pro 2022 Review: Apple's M2 Revs Up",
  },
  {
    id: 5,
    image: "/reviews/video-2.svg",
    title: "M2 MacBook Pro 13 Unboxing, Comparison and First Look",
  },
];
