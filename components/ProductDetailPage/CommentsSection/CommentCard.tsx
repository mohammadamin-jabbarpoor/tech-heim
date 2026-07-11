"use client";

import { CommentType } from "@/app/types";
import { ArrowDown2, ArrowUp2, Dislike, Like1, Star1 } from "iconsax-react";
import Image from "next/image";
import { useState } from "react";

function CommentCard({ comment }: { comment: CommentType }) {
  const [showMore, setShowMore] = useState(false);

  const [like, setLike] = useState(comment.like);
  const [dislike, setDislike] = useState(comment.dislike);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const isLongText = comment.title.length > 220;

  const visibleTitle =
    showMore || !isLongText
      ? comment.title
      : comment.title.slice(0, 225) + "...";

  const handleLike = () => {
    if (liked) {
      setLike((prev) => prev - 1);
      setLiked(false);
      return;
    }

    setLike((prev) => prev + 1);
    setLiked(true);

    if (disliked) {
      setDislike((prev) => prev - 1);
      setDisliked(false);
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislike((prev) => prev - 1);
      setDisliked(false);
      return;
    }

    setDislike((prev) => prev + 1);
    setDisliked(true);

    if (liked) {
      setLike((prev) => prev - 1);
      setLiked(false);
    }
  };

  return (
    <div className="flex flex-col gap-3 p-4 bg-gray-100 border-gray-200 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image src={comment.profile} alt="profile" width={60} height={60} />
          <div>
            <p className="font-medium font-xl">{comment.name}</p>
            <p className="font-medium font-xs text-gray-500">{comment.date}</p>
          </div>
        </div>
        <div>
          <span className="flex items-center justify-center gap-0.5 bg-primary-500 p-2 rounded-lg">
            <Star1 variant="Bold" size={14} color="white" />
            <p className="font-medium text-xs text-white">
              {comment.rate.toFixed(1)}
            </p>
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <p className="font-light">{visibleTitle}</p>
        {isLongText && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="flex items-center gap-2 px-2.5 py-4 text-sm text-primary"
          >
            {showMore ? "Show Less" : "Show More"}
            {showMore ? (
              <ArrowUp2 variant="Outline" size={16} color="#0C68F4" />
            ) : (
              <ArrowDown2 variant="Outline" size={16} color="#0C68F4" />
            )}
          </button>
        )}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLike}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Like1
              variant={liked ? "Bold" : "Outline"}
              size={24}
              color="#0C68F4"
            />

            <span className="font-light text-gray-600">{like}</span>
          </button>

          <div className="h-6 w-px bg-gray-600" />

          <button
            onClick={handleDislike}
            className="flex items-center gap-3 cursor-pointer"
          >
            <Dislike
              variant={disliked ? "Bold" : "Outline"}
              size={24}
              color="#0C68F4"
            />

            <span className="font-light text-gray-600">{dislike}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
