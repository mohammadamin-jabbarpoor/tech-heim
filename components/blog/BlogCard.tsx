import { BlogInfo } from "@/app/types";
import { Calendar2, Timer1 } from "iconsax-react";
import Image from "next/image";

function BlogCompactCard({ info }: { info: BlogInfo }) {
  return (
    <div className="w-full bg-white rounded shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
      <div className="relative w-full aspect-312/140">
        <Image
          src={info.image}
          alt={info.title}
          fill
          className="rounded-t object-cover"
        />
      </div>
      <div className="flex flex-col p-4 gap-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Calendar2 variant="Outline" size={18} color="#717171" />
            <p className="text-xs font-light text-gray-500">
              {info.date.month} , {info.date.day} ,{info.date.year}
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Timer1 variant="Outline" size={18} color="#717171" />
            <p className="text-xs font-light text-gray-500">
              {info.time} min read
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="lg:line-clamp-1 md:text-lg lg:text-xl font-light md:font-medium">
            {info.title}
          </h3>
          <p className="line-clamp-2 font-light text-xs md:text-sm lg:text-base text-gray-600">
            {info.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogCompactCard;
