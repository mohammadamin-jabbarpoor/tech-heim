import { CloseSquare } from "iconsax-react";

type FilterBarProps = {
  selectedFilters: Record<string, string[]>;
  handleFilterChange: (filterSlug: string, value: string) => void;
};

function SelectedFilterBar({
  selectedFilters,
  handleFilterChange,
}: FilterBarProps) {
  const selectedItems = Object.entries(selectedFilters).flatMap(
    ([filterSlug, values]) =>
      values.map((value) => ({
        filterSlug,
        value,
      })),
  );

  if (selectedItems.length === 0) return null;

  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex flex-wrap gap-3">
        {selectedItems.map(({ filterSlug, value }) => (
          <button
            key={`${filterSlug}-${value}`}
            onClick={() => handleFilterChange(filterSlug, value)}
            className="min-w-18 md:min-w-16 lg:min-w-33 flex items-center justify-between gap-2 rounded-lg border md:border-2 px-2 py-3 lg:py-2 text-xs lg:text-sm"
          >
            <span>{value}</span>
            <CloseSquare size={24} color="black" className="cursor-pointer" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default SelectedFilterBar;
