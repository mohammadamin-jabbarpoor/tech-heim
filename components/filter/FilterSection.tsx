import { CategoryFilter, SelectedFilters } from "@/lib/filter-config";
import FilterSectionContent from "./FilterSectionContent";
import FilterSectionHeader from "./FilterSectionHeader";
import { useState } from "react";

type FilterSectionProps = {
  filter: CategoryFilter;
};

function FilterSection({ filter }: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-b-gray-400">
      <FilterSectionHeader
        title={filter.title}
        isOpen={isOpen}
        onToggle={() => setIsOpen((prev) => !prev)}
      />
      <div
        className={`overflow-hidden transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <FilterSectionContent contents={filter.values} title={filter.title} />
      </div>
    </div>
  );
}

export default FilterSection;
