import BannerSection from "@/src/components/features/landing/BannerSection";
import BestSellers from "@/src/components/features/landing/bestSellers/BestSellers";
import Blogs from "@/src/components/features/landing/blog/Blogs";
import Categories from "@/src/components/features/landing/Categories";
import HeroSection from "@/src/components/features/landing/HeroSection";
import NewProducts from "@/src/components/features/landing/newProducts/NewProducts";

import SaleSection from "@/src/components/features/landing/SaleSection/SaleSection";
import Services from "@/src/components/features/landing/Services";
import TopBrands from "@/src/components/features/landing/TopBrands";
import TwoBannerSection from "@/src/components/features/landing/TwoBannerSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <SaleSection />
      <NewProducts />
      <TwoBannerSection />
      <BestSellers />
      <TopBrands />
      <BannerSection />
      <Blogs />
      <Services />
    </div>
  );
}
