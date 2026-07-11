import { ProductSeed } from "@/prisma/types/product-seed";
import { accessoriesProducts } from "./accessories";
import { gamingProducts } from "./gaming";

export const products: ProductSeed[] = [
  ...accessoriesProducts,
  ...gamingProducts,
];
