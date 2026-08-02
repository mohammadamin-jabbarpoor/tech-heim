export const sortOptions = [
  {
    value: "relevant",
    label: "Most relevant",
  },
  {
    value: "price-asc",
    label: "Price: asc",
  },
  {
    value: "price-desc",
    label: "Price: desc",
  },
  {
    value: "newest",
    label: "New Arrivals",
  },
] as const;

export type SortValue = (typeof sortOptions)[number]["value"];
