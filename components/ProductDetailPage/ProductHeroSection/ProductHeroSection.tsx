import { ProductDetailType } from "@/app/types";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductPurchaseCard from "./ProductPurchaseCard";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { ProductDetail } from "@/lib/prisma-types";

function ProductHeroSection({product}: {product: ProductDetail}) {
  return (
    <div>
      <div className="mt-6 flex">
        <Link href="/" className="font-light text-lg text-gray-600">
          Home
        </Link>
        <ArrowRight2
          className="mt-0.5"
          variant="Outline"
          size={24}
          color="#717171"
        />
        <Link href="/products" className="font-light text-lg text-gray-600">
          Products
        </Link>
        <ArrowRight2
          className="mt-0.5"
          variant="Outline"
          size={24}
          color="#717171"
        />
        <Link
          href={`/categories/${product.category.slug}`}
          className="font-light text-lg text-primary underline underline-offset-8"
        >
          {product.category.name}
        </Link>
      </div>
      <div className="flex items-start justify-between mt-10">
        <ProductGallery product={product} />
        <ProductInfo product={product} />
        <ProductPurchaseCard product={product} />
      </div>
    </div>
  );
}

export default ProductHeroSection;
