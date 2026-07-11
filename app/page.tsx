import Banner from "@/components/Banner";
import Banners from "@/components/Banners";
import BestSellers from "@/components/best-sellers/BestSellers";
import Blogs from "@/components/blog/Blogs";
import Categories from "@/components/Categories";
import Header from "@/components/Header";
import NewProducts from "@/components/new-products/NewProducts";
import SaleSection from "@/components/sale/SaleSection";
import Services from "@/components/Services";
import TopBrands from "@/components/TopBrands";

export default function Home() {
  return (
    <div>
      <Header />
      <Categories />
      <SaleSection />
      <NewProducts />
      <Banners />
      <BestSellers />
      <TopBrands />
      <Banner />
      <Blogs />
      <Services />
    </div>
  );
}
