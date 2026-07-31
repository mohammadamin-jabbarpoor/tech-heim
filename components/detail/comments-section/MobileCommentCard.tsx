import { CommentType } from "@/app/types";
import { Star1 } from "iconsax-react";
import Image from "next/image";

function MobileCommentCard({ comment }: { comment: CommentType }) {
  return (
    <div className="w-58 h-40 xs:w-68 xs:h-45 sm:w-78 sm:h-50 md:w-88 md:h-55 p-4 sm:p-6 space-y-3 bg-gray-50 border border-gray-100">
      <div className="flex items-center gap-2 md:gap-4">
        <div className="relative w-10 h-10 md:w-14 md:h-14 rounded-full">
          <Image
            src={comment.profile}
            alt="profile"
            fill
            className="object-contain"
          />
        </div>
        <div className="w-full flex items-center justify-between">
          <div>
            <p className="font-medium text-sm md:text-lg">{comment.name}</p>
            <p className="font-light text-xs md:text-base text-gray-500">
              {comment.date}
            </p>
          </div>
          <div className="flex items-center gap-[0.5] md:gap-1 p-1 md:p-1.5 bg-primary-500 rounded">
            <Star1 variant="Bold" size={16} color="white" />
            <p className="font-medium text-xs md:text-sm text-white">
              {comment.rate.toFixed(1)}
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="font-light text-xs line-clamp-5 md:line-clamp-6">
          {comment.title}
        </p>
      </div>
    </div>
  );
}

export default MobileCommentCard;
