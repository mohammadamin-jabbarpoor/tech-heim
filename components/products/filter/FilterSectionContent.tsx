import { SelectedFilters } from "@/lib/filter-config";
import { useProductFilters } from "@/lib/hooks/useProductFilters";
import { getSelectedFiltersFromSearchParams } from "@/lib/utils/filter";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

type FilterSectionContentProps = {
  title: string;
  contents: string[];
};

function FilterSectionContent({ contents, title }: FilterSectionContentProps) {
  const { selectedFilters, toggleFilter } = useProductFilters();

  return (
    <div className="space-y-4 mb-8">
      {contents.map((content) => {
        const checked = selectedFilters[title]?.includes(content) ?? false;

        return (
          <div key={content} className="flex items-center gap-4 pl-4">
            <input
              id={content}
              type="checkbox"
              checked={checked}
              onChange={() => toggleFilter(title, content)}
              className="cursor-pointer"
            />
            <label
              htmlFor={content}
              className="font-light text-lg cursor-pointer"
            >
              {content}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default FilterSectionContent;
