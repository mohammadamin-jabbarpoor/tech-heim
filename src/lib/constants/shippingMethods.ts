type ShippingMethodType = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export const shippingMethods: ShippingMethodType[] = [
  {
    id: "free",
    name: "Free Shipping",
    description: "7-30 business days",
    price: 0,
  },
  {
    id: "regular",
    name: "Regular Shipping",
    description: "3-14 business days",
    price: 7.5,
  },
  {
    id: "express",
    name: "Express Shipping",
    description: "1-3 business days",
    price: 22.5,
  },
];
