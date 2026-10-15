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
    title: "How to connect your iPhone to a laptop?",
  },
  {
    id: 2,
    image: "/reviews/video-2.svg",
    title:
      "How to fix Green Screen of Death (GSoD) error in Windows 10 and 11?",
  },
  {
    id: 3,
    image: "/reviews/video-3.svg",
    title: "Iphone 14Promax review,Still powerful and flagship",
  },
  {
    id: 4,
    image: "/reviews/video-4.svg",
    title: "10 things you should never store in your smartphone!",
  },
  {
    id: 5,
    image: "/reviews/video-5.svg",
    title: "How to prevent the laptop from turning off after closing the door?",
  },
  {
    id: 6,
    image: "/reviews/video-6.svg",
    title:
      "5 quick and easy ways to check the health of the graphics card in Windows 11",
  },
];
