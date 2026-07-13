import { SelectedFilters } from "../filter-config";

export function parseSelectedFilters(
  params: Record<string, string | undefined>,
): SelectedFilters {
  const filters: SelectedFilters = {};

  for (const [key, value] of Object.entries(params)) {
    if (key === "category") continue;
    if (!value) continue;

    filters[key] = value.split(",");
  }

  return filters;
}

export function getSelectedFiltersFromSearchParams(
  searchParams: URLSearchParams,
): SelectedFilters {
  const filters: SelectedFilters = {};

  for (const [key, value] of searchParams.entries()) {
    if (key === "category") continue;

    if (!value) continue;

    filters[key] = value.split(",");
  }

  return filters;
}
