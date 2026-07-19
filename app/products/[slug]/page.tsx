import CommentsSection from "@/components/detail/comments-section/CommentsSection";
import FrequentlyBoughtSection from "@/components/detail/frequentlyBought-section/FrequentlyBoughtSection";
import ProductHeroSection from "@/components/detail/productHero-section/ProductHeroSection";
import ProductTabsSection from "@/components/detail/productTabs-section/ProductTabsSection";
import ReviewsSection from "@/components/detail/reviews-section/ReviewsSection";
import SimilarProductsSection from "@/components/detail/similarProducts-section/SimilarProductsSection";
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

async function ProductPage({ params }: Props) {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const similarProducts = await getSimilarProducts(
    product.category.id,
    product.id,
  );

  return (
    <div>
      <ProductHeroSection product={product} />
      <ProductTabsSection product={product} />
      <SimilarProductsSection products={similarProducts} />
      <CommentsSection />
      {/* <FrequentlyBoughtSection /> */}
      <ReviewsSection />
    </div>
  );
}

export default ProductPage;
