import ProductContent from "@/components/detail/ProductContent";
import {
  getProductBySlug,
  getSimilarProducts,
} from "@/lib/services/product.service";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const similarProducts = await getSimilarProducts(
    product.category.id,
    product.id,
  );

  return <ProductContent product={product} similarProducts={similarProducts} />;
}
