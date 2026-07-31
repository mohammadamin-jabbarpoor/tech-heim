// components/layout/footer/FooterWrapper.tsx
"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function FooterWrapper() {
  const pathname = usePathname();

  const isProductPage = pathname.startsWith("/products/");

  return (
    <footer className={isProductPage ? "hidden lg:block" : ""}>
      <Footer />
    </footer>
  );
}
