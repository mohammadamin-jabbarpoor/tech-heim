import { SelectedFilters } from "../filter-config";

const RESERVED_PARAMS = ["category", "sale", "minPrice", "maxPrice"];

export function parseSelectedFilters(
  params: Record<string, string | undefined>,
): SelectedFilters {
  const filters: SelectedFilters = {};

  for (const [key, value] of Object.entries(params)) {
    if (RESERVED_PARAMS.includes(key)) continue;

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
    if (RESERVED_PARAMS.includes(key)) continue;

    if (!value) continue;

    filters[key] = value.split(",");
  }

  return filters;
}
