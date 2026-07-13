export const FilterType = {
  CHECKBOX: "checkbox",
  RANGE: "range",
  SWITCH: "switch",
} as const;

export type FilterType = (typeof FilterType)[keyof typeof FilterType];

export type FilterConfigItem = {
  title: string;
  type: FilterType;
};

export type CategoryFilter = {
  title: string;
  type: FilterType;
  values: string[];
};

export const filterConfig: Record<string, FilterConfigItem[]> = {
  accessories: [
    {
      title: "Brand",
      type: FilterType.CHECKBOX,
    },
    {
      title: "Compatible",
      type: FilterType.CHECKBOX,
    },
    {
      title: "Material",
      type: FilterType.CHECKBOX,
    },
    {
      title: "Color",
      type: FilterType.CHECKBOX,
    },
    {
      title: "Capacity",
      type: FilterType.CHECKBOX,
    },
    {
      title: "Battery capacity",
      type: FilterType.CHECKBOX,
    },
  ],

  gaming: [
    {
      title: "Brand",
      type: FilterType.CHECKBOX,
    },
    {
      title: "Color",
      type: FilterType.CHECKBOX,
    },
    {
      title: "Type",
      type: FilterType.CHECKBOX,
    },
    {
      title: "Compatible",
      type: FilterType.CHECKBOX,
    },
    {
      title: "Mouse sensitivity DPI",
      type: FilterType.CHECKBOX,
    },
  ],
};

export type SelectedFilters = Record<string, string[]>;
