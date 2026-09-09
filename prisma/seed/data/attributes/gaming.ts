export const gamingAttributes = [
  {
    name: "Brand",
    slug: "brand",
    isFilterable: true,
    isRequired: true,
    sortOrder: 1,

    options: [
      { value: "Nintendo", slug: "nintendo", sortOrder: 1 },
      { value: "Sony", slug: "sony", sortOrder: 2 },
      { value: "Logitech", slug: "logitech", sortOrder: 3 },
      { value: "Nacon", slug: "nacon", sortOrder: 4 },
      { value: "Apple", slug: "apple", sortOrder: 5 },
      { value: "Razer", slug: "razer", sortOrder: 6 },
      { value: "ASUS", slug: "asus", sortOrder: 7 },
    ],
  },
  {
    name: "Product Type",
    slug: "product-type",
    isFilterable: true,
    isRequired: true,
    sortOrder: 2,

    options: [
      { value: "Console", slug: "console", sortOrder: 1 },
      { value: "Controller", slug: "controller", sortOrder: 2 },
      { value: "Racing Wheel", slug: "racing-wheel", sortOrder: 3 },
      { value: "Keyboard", slug: "keyboard", sortOrder: 4 },
      { value: "Mouse", slug: "mouse", sortOrder: 5 },
    ],
  },
  {
    name: "Platform",
    slug: "platform",
    isFilterable: false,
    isRequired: false,
    sortOrder: 3,

    options: [],
  },
  {
    name: "Connectivity",
    slug: "connectivity",
    isFilterable: false,
    isRequired: false,
    sortOrder: 4,

    options: [],
  },
  {
    name: "Switch Type",
    slug: "switch-type",
    isFilterable: false,
    isRequired: false,
    sortOrder: 5,

    options: [],
  },
  {
    name: "Form Factor",
    slug: "form-factor",
    isFilterable: false,
    isRequired: false,
    sortOrder: 6,

    options: [],
  },
  {
    name: "Sensor",
    slug: "sensor",
    isFilterable: false,
    isRequired: false,
    sortOrder: 7,

    options: [],
  },
  {
    name: "DPI",
    slug: "dpi",
    isFilterable: false,
    isRequired: false,
    sortOrder: 8,

    options: [],
  },
  {
    name: "Polling Rate",
    slug: "polling-rate",
    isFilterable: false,
    isRequired: false,
    sortOrder: 9,

    options: [],
  },
  {
    name: "Storage",
    slug: "storage",
    isFilterable: false,
    isRequired: false,
    sortOrder: 10,

    options: [],
  },
  {
    name: "Screen Size",
    slug: "screen-size",
    isFilterable: false,
    isRequired: false,
    sortOrder: 11,

    options: [],
  },
  {
    name: "Resolution",
    slug: "resolution",
    isFilterable: false,
    isRequired: false,
    sortOrder: 12,

    options: [],
  },
  {
    name: "Refresh Rate",
    slug: "refresh-rate",
    isFilterable: false,
    isRequired: false,
    sortOrder: 13,

    options: [],
  },
  {
    name: "Weight",
    slug: "weight",
    isFilterable: false,
    isRequired: false,
    sortOrder: 14,

    options: [],
  },
  {
    name: "Battery Life",
    slug: "battery-life",
    isFilterable: false,
    isRequired: false,
    sortOrder: 15,

    options: [],
  },
  {
    name: "Steering Angle",
    slug: "steering-angle",
    type: "NUMBER",
    isFilterable: false,
    isRequired: false,
    sortOrder: 16,

    options: [],
  },
];
