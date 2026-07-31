import HeroBanner2 from "@/components/home/hero/HeroBanner1";
import HeroBanner1 from "@/components/home/hero/HeroBanner2";

import Blogs from "@/components/blog/Blogs";
import Categories from "@/components/categories/Categories";
import Header from "@/components/layout/Header";

import SaleSection from "@/components/home/sale/SaleSection";
import Services from "@/components/home/services/Services";
import TopBrands from "@/components/home/brands/TopBrands";
import BestSellers from "@/components/home/products/best-sellers/BestSellers";
import NewProducts from "@/components/home/products/new-products/NewProducts";

export default function Home() {
  return (
    <div className="w-full">
      <Header />
      <Categories />
      <SaleSection />
      <NewProducts />
      <HeroBanner1 />
      <BestSellers />
      <TopBrands />
      <HeroBanner2 />
      <Blogs />
      <Services />
    </div>
  );
}
