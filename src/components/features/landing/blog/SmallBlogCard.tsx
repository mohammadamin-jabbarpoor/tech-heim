import { Calendar2, Save2 } from "iconsax-react";
import Image from "next/image";

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
};

function SmallBlogCard({ info }: { info: BlogInfo }) {
  return (
    <div className="group relative flex w-full min-w-0 h-28 sm:h-32 lg:h-39 items-stretch gap-3 md:gap-4 bg-white rounded lg:rounded-lg shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] cursor-pointer overflow-hidden">
      <div className="relative shrink-0 w-24 sm:w-28 md:w-40 lg:w-60">
        <Image
          src={info.image}
          alt={info.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 min-w-0 flex-col justify-center gap-2 lg:justify-between lg:py-3 lg:pr-4">
        <div className="flex min-w-0 flex-col gap-1 sm:gap-2">
          <h3 className="line-clamp-1 text-sm sm:text-base lg:text-xl font-medium xl:group-hover:text-secondary transition-colors duration-300">
            {info.title}
          </h3>

          <p className="line-clamp-2 text-xs sm:text-sm lg:text-base font-light text-gray-600">
            {info.description}
          </p>
        </div>

        <div className="flex min-w-0 items-center justify-between gap-2">
          <div className="flex min-w-0 items-center gap-1">
            <Calendar2 variant="Outline" size={16} color="#717171" />

            <p className="truncate text-[10px] sm:text-xs font-light text-gray-500">
              {info.date.month}, {info.date.day}, {info.date.year}
            </p>
          </div>

          <button
            type="button"
            aria-label="Save blog"
            className="hidden shrink-0 xl:block opacity-0 xl:group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
          >
            <Save2 variant="Outline" size={24} color="#F45E0C" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallBlogCard;
