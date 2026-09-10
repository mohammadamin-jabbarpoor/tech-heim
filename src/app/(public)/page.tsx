import BannerSection from "@/src/components/features/landing/BannerSection";
import Blogs from "@/src/components/features/landing/Blogs";
import Categories from "@/src/components/features/landing/Categories";
import HeroSection from "@/src/components/features/landing/HeroSection";
import Services from "@/src/components/features/landing/Services";
import TopBrands from "@/src/components/features/landing/TopBrands";
import TwoBannerSection from "@/src/components/features/landing/TwoBannerSection";

export default async function Home() {
  return (
    <div>
      <HeroSection />
      <Categories />
      <TwoBannerSection />
      <TopBrands />
      <BannerSection />
      <Blogs />
      <Services />
    </div>
  );
}
