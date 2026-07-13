import CommentsSection from "@/components/ProductDetailPage/CommentsSection/CommentsSection";
import FrequentlyBoughtSection from "@/components/ProductDetailPage/FrequentlyBoughtSection/FrequentlyBoughtSection";
import ProductHeroSection from "@/components/ProductDetailPage/ProductHeroSection/ProductHeroSection";
import ProductTabsSection from "@/components/ProductDetailPage/ProductTabsSection/ProductTabsSection";
import ReviewsSection from "@/components/ProductDetailPage/ReviewsSection/ReviewsSection";
import SimilarProductsSection from "@/components/ProductDetailPage/SimilarProductsSection/SimilarProductsSection";
import { getProductBySlug } from "@/lib/services/product.service";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div>
      <ProductHeroSection product={product} />
      <ProductTabsSection product={product} />
      {/* <SimilarProductsSection /> */}
      <CommentsSection />
      {/* <FrequentlyBoughtSection /> */}
      <ReviewsSection />
    </div>
  );
}

export default ProductPage;
