import { ArrowDown2 } from "iconsax-react";

type FilterSectionHeaderProps = {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
};

function FilterSectionHeader({
  title,
  isOpen,
  onToggle,
}: FilterSectionHeaderProps) {
  return (
    <div
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 cursor-pointer"
    >
      <span className="font-light text-base md:text-lg lg:text-xl">
        {title}
      </span>
      <ArrowDown2
        size={18}
        color="#292D32"
        className={`transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </div>
  );
}

export default FilterSectionHeader;
