import { ReviewType } from "@/src/lib/constants/productRevirews";
import { PlayCircle } from "iconsax-react";
import Image from "next/image";

function BlogVideoCard({ video }: { video: ReviewType }) {
  return (
    <div className="w-78 h-50 md:w-88 md:h-50.75 lg:w-full lg:h-51.5 rounded lg:rounded-lg">
      <div className="relative w-78 h-50 md:w-88 md:h-50.75 lg:w-full lg:h-51.5">
        <Image
          src={video.image}
          alt={video.title}
          fill
          className="object-cover rounded lg:rounded-lg"
        />
        <PlayCircle
          variant="Bold"
          size={48}
          color="white"
          className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
        />
        <div className="absolute w-full flex items-center justify-center h-10 lg:h-18 bottom-0 px-2 bg-[#101010]/40 backdrop-blur-sm rounded-b-lg">
          <p className="text-white font-light text-xs md:text-sm lg:text-base line-clamp-2 lg:line-clamp-1 overflow-hidden">
            {video.title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogVideoCard;
