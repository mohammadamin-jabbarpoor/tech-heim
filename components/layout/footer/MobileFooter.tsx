import { ArrowRight2, User } from "iconsax-react";
import Image from "next/image";
import FloatingActions from "./FloatingActions";
import {
  FooterColumnType,
  MediaImagesType,
  PaymentImagesType,
} from "@/types/footerTypes";
import FooterDropdownLinks from "./FooterDropdownLinks";
import Link from "next/link";

type MobileFooterProps = {
  footerLinks: FooterColumnType[];
  mediaImages: MediaImagesType[];
  paymentImages: PaymentImagesType[];
};

function MobileFooter({
  footerLinks,
  mediaImages,
  paymentImages,
}: MobileFooterProps) {
  return (
    <div className="lg:hidden flex relative flex-col w-full min-h-91 bg-primary-900 overflow-hidden">
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 pointer-events-none">
        <div className="w-100 h-45 rounded-full bg-primary-400 opacity-70 blur-[80px]" />
      </div>

      <div className="relative z-10 flex-1 py-4 px-6 space-y-4">
        <div className="w-full flex justify-between">
          <FloatingActions />
        </div>

        <div className="space-y-3 p-2">
          <p className="font-medium text-white">Sign up for News and updates</p>
          <Link
            href="/signup"
            className="flex items-center justify-between px-3 py-2.5 border border-white rounded-lg"
          >
            <div className="flex items-center gap-2">
              <User variant="Outline" size={20} color="white" />
              <p className="font-light text-sm text-white">E-mail Address</p>
            </div>
            <ArrowRight2 variant="Outline" size={14} color="white" />
          </Link>
        </div>

        <FooterDropdownLinks footerLinks={footerLinks} />
      </div>

      <div className="relative z-10 h-10">
        <div className="z-10 absolute bottom-0 w-full flex justify-between py-2 px-6 bg-primary-900">
          <div className="flex items-center justify-center gap-1">
            {paymentImages.map((item) => (
              <Image
                key={item.title}
                src={item.image}
                alt={item.title}
                width={32}
                height={24}
                className="grayscale"
              />
            ))}
          </div>
          <div className="flex gap-2">
            {mediaImages.map((item) => (
              <Image
                key={item.title}
                src={item.image}
                alt={item.title}
                width={24}
                height={24}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileFooter;
