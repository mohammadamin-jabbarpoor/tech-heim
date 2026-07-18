import CommentsSection from "@/components/detail/CommentsSection/CommentsSection";
import FrequentlyBoughtSection from "@/components/detail/FrequentlyBoughtSection/FrequentlyBoughtSection";
import ProductHeroSection from "@/components/detail/ProductHeroSection/ProductHeroSection";
import ProductTabsSection from "@/components/detail/ProductTabsSection/ProductTabsSection";
import ReviewsSection from "@/components/detail/ReviewsSection/ReviewsSection";
import SimilarProductsSection from "@/components/detail/SimilarProductsSection/SimilarProductsSection";
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
