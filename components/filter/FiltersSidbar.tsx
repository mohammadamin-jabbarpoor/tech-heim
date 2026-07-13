import { CategoryFilter, SelectedFilters } from "@/lib/filter-config";
import FilterSection from "./FilterSection";

type FiltersSidebarProps = {
  filters: CategoryFilter[];
  onClearFilters: () => void;
  hasFilters: boolean;
};

function FiltersSidbar({
  filters,
  onClearFilters,
  hasFilters,
}: FiltersSidebarProps) {
  return (
    <div className="flex-6">
      <div className="flex items-center justify-between px-4">
        <span className="font-medium text-xl py-4">Filters</span>
        <button
          disabled={!hasFilters}
          onClick={onClearFilters}
          className={`px-13 py-4.5 ${
            hasFilters
              ? "text-primary cursor-pointer"
              : "text-gray-400 cursor-not-allowed"
          }`}
        >
          Clear all
        </button>
      </div>
      {filters.map((filter) => (
        <FilterSection key={filter.title} filter={filter} />
      ))}
    </div>
  );
}

export default FiltersSidbar;
