import { BlogInfo } from "@/app/types";
import { Calendar2, Save2 } from "iconsax-react";
import Image from "next/image";

function BlogCompactCard({ blog }: { blog: BlogInfo }) {
  return (
    <div className="hidden sm:flex group relative col-span-2 w-full h-39 items-center gap-4 bg-white rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] cursor-pointer">
      <Image
        src={blog.image}
        alt={blog.title}
        width={240}
        height={156}
        className="rounded-l-lg"
      />
      <div className="flex flex-col gap-4 py-6">
        <div className="flex flex-col gap-2">
          <h3 className="line-clamp-1 text-xl font-medium group-hover:text-secondary transform-color duration-300">
            {blog.title}
          </h3>
          <p className="line-clamp-2 font-light text-gray-600">
            {blog.description}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Calendar2 variant="Outline" size={18} color="#717171" />
            <p className="text-xs font-light text-gray-500">
              {blog.date.month} , {blog.date.day} ,{blog.date.year}
            </p>
          </div>
          <button className="opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer">
            <Save2 variant="Outline" size={24} color="#F45E0C" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogCompactCard;
