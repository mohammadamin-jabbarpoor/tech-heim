export const accessoriesAttributes = [
  {
    name: "Brand",
    slug: "brand",
    isFilterable: true,
    isRequired: true,
    sortOrder: 1,

    options: [
      { value: "Apple", slug: "apple", sortOrder: 1 },
      { value: "SanDisk", slug: "sandisk", sortOrder: 2 },
      { value: "Western Digital", slug: "western-digital", sortOrder: 3 },
      { value: "Samsung", slug: "samsung", sortOrder: 4 },
      { value: "Cellularline", slug: "cellularline", sortOrder: 5 },
      { value: "FIXED", slug: "fixed", sortOrder: 6 },
      { value: "Xiaomi", slug: "xiaomi", sortOrder: 7 },
      { value: "PanzerGlass", slug: "panzerglass", sortOrder: 8 },
      { value: "Copter", slug: "copter", sortOrder: 9 },
    ],
  },

  {
    name: "Product Type",
    slug: "product-type",
    isFilterable: true,
    isRequired: true,
    sortOrder: 2,

    options: [
      { value: "Memory Card", slug: "memory-card", sortOrder: 1 },
      { value: "Phone Case", slug: "phone-case", sortOrder: 2 },
      { value: "Car Charger", slug: "car-charger", sortOrder: 3 },
      { value: "Car Phone Holder", slug: "car-phone-holder", sortOrder: 4 },
      { value: "Table Stand", slug: "table-stand", sortOrder: 5 },
      { value: "Power Bank", slug: "power-bank", sortOrder: 6 },
      { value: "Screen Protector", slug: "screen-protector", sortOrder: 7 },
      {
        value: "Camera Lens Protector",
        slug: "camera-lens-protector",
        sortOrder: 8,
      },
    ],
  },

  {
    name: "Compatibility",
    slug: "compatibility",
    isFilterable: true,
    isRequired: false,
    sortOrder: 3,

    options: [
      { value: "iPhone", slug: "iphone", sortOrder: 1 },
      { value: "Samsung Galaxy", slug: "samsung-galaxy", sortOrder: 2 },
      { value: "Xiaomi", slug: "xiaomi", sortOrder: 3 },
      { value: "Universal", slug: "universal", sortOrder: 4 },
    ],
  },

  {
    name: "Charging Type",
    slug: "charging-type",
    isFilterable: true,
    isRequired: false,
    sortOrder: 4,

    options: [
      { value: "Wireless", slug: "wireless", sortOrder: 1 },
      { value: "Wired", slug: "wired", sortOrder: 2 },
      { value: "Qi2", slug: "qi2", sortOrder: 3 },
      { value: "MagSafe", slug: "magsafe", sortOrder: 4 },
    ],
  },

  {
    name: "Capacity",
    slug: "capacity",
    isFilterable: true,
    isRequired: false,
    sortOrder: 5,

    options: [
      { value: "10,000 mAh", slug: "10000mah", sortOrder: 1 },
      { value: "20,000 mAh", slug: "20000mah", sortOrder: 2 },
    ],
  },
];
