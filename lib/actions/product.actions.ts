"use server";

import { getFilteredProducts } from "@/lib/services/product.service";
import { GetFilteredProductsParams } from "../prisma-types";

export async function filterProducts(params: GetFilteredProductsParams) {
  return await getFilteredProducts(params);
}
