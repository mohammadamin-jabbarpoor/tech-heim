import { Calendar2, Save2, Timer1 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";

type BlogInfo = {
  id: number;
  image: string;
  title: string;
  description: string;
  date: {
    year: number;
    month: string;
    day: number;
  };
  time: number;
};

function LargeBlogCard({ info }: { info: BlogInfo }) {
  return (
    <div className="group relative w-78 h-64.75 md:w-88 md:h-73 lg:w-98 lg:h-84 xl:w-full overflow-hidden space-y-2 rounded lg:rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)]">
      <div className="relative w-full h-35 lg:h-51">
        <Image
          src={info.image}
          alt={info.title}
          fill
          className="rounded-t object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-black/20 opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300" />

      <div className="absolute left-0 right-0 bg-white px-4 my-2 transition-all duration-300 xl:group-hover:-translate-y-14 group-hover:pt-4">
        <div className="flex flex-col">
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
            <h3 className="lg:line-clamp-1 lg:text-xl font-light md:font-medium">
              {info.title}
            </h3>
            <p className="line-clamp-2 font-light text-xs lg:text-base text-gray-600">
              {info.description}
            </p>

            <div className="mt-4 hidden xl:flex items-center justify-between opacity-0 xl:group-hover:opacity-100 transition-all duration-300">
              <Link
                href="/blog"
                className="flex items-center gap-2 text-secondary font-medium cursor-pointer"
              >
                Read More
              </Link>
              <Save2 variant="Outline" size={24} color="#F45E0C" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LargeBlogCard;
