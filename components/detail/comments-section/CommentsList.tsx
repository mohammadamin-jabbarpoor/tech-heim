import { CommentsType } from "@/app/types";
import CommentCard from "./CommentCard";

const commentsInfo: CommentsType = [
  {
    id: crypto.randomUUID(),
    profile: "/comments/p-1.svg",
    name: "Gabriel",
    date: "July 28, 2023",
    rate: 4.8,
    title:
      "I needed a fast, efficient laptop for on the go use. Battery life is amazing. Build quality is fantastic. Perfect fit for my needs.",
    like: 15,
    dislike: 2,
  },
  {
    id: crypto.randomUUID(),
    profile: "/comments/p-2.svg",
    name: "Jimmy Smith",
    date: "May 28, 2023",
    rate: 5,
    title:
      "This macbook air at first feels just so big to me using it for school, and after a while, it felt as a perfect size. I look at it sometimes and realize how portable and small it is, but IT FEELS AS BIG AS LIKE A TV SCREEN. It's not a huge computer, but when your doing work and typing or whatever watching youtube it feels like a movie screen, beautiful. I never had such a good computer that just feels like a breath of fresh air. If you are contemplating on buying one, I would get 512 GB of storage and 16 ram. You will not be disappointed if you buy this no matter what, I strongly recommend it.",
    like: 8,
    dislike: 0,
  },
  {
    id: crypto.randomUUID(),
    profile: "/comments/p-3.svg",
    name: "Sarah Anderson",
    date: "April 20, 2023",
    rate: 4.2,
    title:
      "This was my first personal Mac purchase. We are using a combination of Mac & PC at work and while my PC skills are good the Mac side needs work. So far I like the experience, although not all my apps will run on the Mac, I am finding workarounds. One person found this helpful",
    like: 34,
    dislike: 5,
  },
];

function CommentsList() {
  return (
    <div className="w-3/4">
      <div className="flex flex-col gap-2">
        {commentsInfo.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}

export default CommentsList;
