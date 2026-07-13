import { CategoryType } from "@/app/types";
import Image from "next/image";

function Category({ category }: { category: CategoryType }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 w-20.5 h-25 sm:w-26.5 sm:h-31 md:w-32.5 md:h-37 lg:w-39 lg:h-43 xl:w-46 xl:h-49 shadow-[-2px_2px_15px_-1px_rgba(113,113,113,0.12)] cursor-pointer">
      <div className="relative w-16.5 h-16.5 sm:w-21.5 sm:h-21.5 md:w-26.5 md:h-26.5 lg:w-31.5 lg:h-31.5 xl:w-37 xl:h-37">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 66px,
           (max-width: 768px) 86px,
           (max-width: 1024px) 106px,
           (max-width: 1280px) 126px,
           148px"
          className="object-contain"
        />
      </div>
      <p className="font-light text-xs lg:text-base text-gray-900">
        {category.name}
      </p>
    </div>
  );
}

export default Category;
