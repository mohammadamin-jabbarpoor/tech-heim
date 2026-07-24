import FaqSection from "@/components/faq/FaqSection";
import Breadcrumb from "@/components/ui/BreadCrumb";
import Image from "next/image";

function FaqPage() {
  return (
    <div className="mt-6 mb-14 space-y-10">
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
      <div className="relative w-254 h-106.5 mx-auto">
        <Image src="/faq/faq-header.svg" alt="faq-header" fill />
      </div>

      <FaqSection />
    </div>
  );
}

export default FaqPage;
