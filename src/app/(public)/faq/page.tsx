import Breadcrumb from "@/src/components/features/faq/Breadcrumb";
import FaqSection from "@/src/components/features/faq/FaqSection";
import Image from "next/image";

function FaqPage() {
  return (
    <div className="mt-4 lg:mt-6 mb-6 md:mb-10 lg:mb-14 space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10">
      <Breadcrumb
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "FAQs",
            href: "/faq",
          },
        ]}
      />

      <div className="md:hidden relative w-full h-40 xs:h-55 sm:h-70 mx-auto">
        <Image
          src="/faq/mobile-faq-header.svg"
          alt="faq-header"
          fill
          className="object-contain"
        />
      </div>
      <div className="hidden md:block relative w-full h-80 lg:h-92 xl:w-254 xl:h-106.5 mx-auto">
        <Image src="/faq/desktop-faq-header.svg" alt="faq-header" fill />
      </div>

      <FaqSection />
    </div>
  );
}

export default FaqPage;
