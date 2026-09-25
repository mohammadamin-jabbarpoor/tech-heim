import { searchProducts } from "@/src/features/products/queries/searchProducts";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (!query?.trim()) {
    return NextResponse.json([]);
  }

  const products = await searchProducts(query.trim());

  return NextResponse.json(products);
}
