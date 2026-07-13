import { ProductDetailType } from "@/app/types";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductPurchaseCard from "./ProductPurchaseCard";
import { ArrowRight2 } from "iconsax-react";
import Link from "next/link";
import { ProductDetail } from "@/lib/prisma-types";
import Breadcrumb from "@/components/BreadCrumb";

function ProductHeroSection({ product }: { product: ProductDetail }) {
  return (
    <div>
      <div className="mt-6 flex">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            {
              label: product.category.name,
              href: `/categories/${product.category.slug}`,
            },
          ]}
        />
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
