import ProductContent from "@/src/components/features/products/productPage/ProductContent";
import { getProductsBySlug } from "@/src/features/products/queries/getProductsBySlug";
import { getSimilarProducts } from "@/src/features/products/queries/getSimilarProducts";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductsBySlug(slug);

  if (!product) {
    notFound();
  }

  const similarProducts = await getSimilarProducts(
    product.category.id,
    product.id,
  );

  return <ProductContent product={product} similarProducts={similarProducts} />;
}

export default ProductPage;
