import { BlogsInfo } from "@/app/types";
import { Calendar2, Timer1, Save2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

function BlogFeaturedCard({ blogsInfo }: { blogsInfo: BlogsInfo }) {
  return (
    <div className="hidden xl:block group relative row-span-2 w-98 h-84 overflow-hidden rounded-lg bg-white shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] cursor-pointer">
      <Image
        src={blogsInfo.featured.image}
        alt="meta"
        width={392}
        height={204}
      />
      <div className="absolute inset-0 bg-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute left-0 right-0 -bottom-15 bg-white px-4 pt-2 pb-6 transition-all duration-300 group-hover:-translate-y-15">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Calendar2 variant="Outline" size={18} color="#717171" />
              <p className="text-xs font-light text-gray-500">
                {blogsInfo.featured.date.month} , {blogsInfo.featured.date.day}{" "}
                ,{blogsInfo.featured.date.year}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Timer1 variant="Outline" size={18} color="#717171" />
              <p className="text-xs font-light text-gray-500">3 min read</p>
            </div>
          </div>
          <h3 className="line-clamp-1 text-xl font-medium group-hover:text-secondary transform-color duration-300">
            {blogsInfo.featured.title}
          </h3>
          <p className="line-clamp-2 font-light">
            {blogsInfo.featured.description}
          </p>

          <div className="mt-4 flex items-center justify-between opacity-0 transition-all duration-300 group-hover:opacity-100">
            <Link
              href="/blogs"
              className="flex items-center gap-2 text-secondary font-medium cursor-pointer"
            >
              Read More
            </Link>
            <Save2 variant="Outline" size={24} color="#F45E0C" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogFeaturedCard;
