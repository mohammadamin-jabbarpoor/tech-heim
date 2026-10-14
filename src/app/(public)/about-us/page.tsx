import Breadcrumb from "@/src/components/shared/ui/Breadcrumb";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="mt-4 lg:mt-6 mb-6 md:mb-10 lg:mb-14">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "About us", href: "/about-us" },
        ]}
      />
      <div className="my-6 md:my-8 lg:my-10">
        <div className="hidden xs:block relative w-full xs:h-66 sm:h-76 md:h-86 lg:h-96 xl:h-106.5">
          <Image
            src="/about-hero.png"
            alt="hero"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="xs:hidden relative w-full h-66">
          <Image
            src="/about-hero-mo.png"
            alt="hero"
            fill
            className="object-cover rounded"
          />
        </div>
      </div>
      <article className="w-full">
        <p className="font-light text-sm md:text-lg lg:text-xl">
          Tech Heim is an innovative online store that offers a diverse
          selection of digital gadgets, available for purchase in both cash and
          installment options. Embodying the motto "Join the digital revolution
          today" the website not only provides a seamless shopping experience
          but also features a captivating blog section filled with insightful
          reviews, articles, and videos about cutting-edge technology and
          digital gadgets. Users can actively engage with the content through
          comments and a question-answer section, fostering a dynamic community
          of tech enthusiasts.
          <br />
          <br />
          <span className="font-medium">Tech Heim Meaning</span>
          <br />
          <br />
          The name "Tech Heim" cleverly combines two languages (English &
          German), signifying a home of technology that provides all the
          essential tech products and services, making it a one-stop destination
          for tech-savvy individuals seeking the latest and most exciting
          gadgets.
          <br />
          <br />
          <span className="font-medium">
            Some of Tech Heim&apos;s impressive features:
          </span>
          <br />
          <br />
          Diverse digital gadgets for purchase in cash or installments A blog
          with reviews and articles about the latest technology and gadgets User
          comments and Q&A section for community interaction Represents a
          tech-savvy "home" with all necessary technology Easy-to-use interface
          for a great user experience Consistent and visually appealing design A
          hub for tech enthusiasts to connect and share insights Helps users
          make informed purchase decisions
        </p>
      </article>
    </div>
  );
}

export default AboutPage;
