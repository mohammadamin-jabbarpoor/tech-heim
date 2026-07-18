import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";

function SectionHeader({ value }: { value: string }) {
  return (
    <div className="flex items-center justify-between">
      <p className="font-medium text-base sm:text-lg md:text-xl lg:text-[26px] xl:text-[32px]">{value}</p>
      <Link href="/blogs" className="flex items-center gap-1 lg:px-10 lg:py-3.5">
        <p className="text-sm md:text-base">View all</p>
        <ArrowRight2 variant="Linear" className="w-3 h-3 md:w-3.5 md:h-3.5" color="black" />
      </Link>
    </div>
  );
}

export default SectionHeader;
