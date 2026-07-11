import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";
import type { Swiper as SwiperType } from "swiper";

function SliderNavigation({
  swiperRef,
}: {
  swiperRef: React.RefObject<SwiperType | null>;
}) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="w-7 h-7 cursor-pointer"
      >
        <ArrowCircleLeft variant="Bold" color="white" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="w-7 h-7 cursor-pointer"
      >
        <ArrowCircleRight variant="Bold" color="white" />
      </button>
    </div>
  );
}

export default SliderNavigation;
