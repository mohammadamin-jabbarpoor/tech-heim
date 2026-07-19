import { ArrowRight2, Copyright, User } from "iconsax-react";
import Image from "next/image";

import { FooterColumnType, PaymentImagesType } from "@/types/footerTypes";
import { MediaImagesType } from "@/types/footerTypes";
import FloatingActions from "./FloatingActions";
import Link from "next/link";

type DesktopFooterProps = {
  footerLinks: FooterColumnType[];
  mediaImages: MediaImagesType[];
  paymentImages: PaymentImagesType[];
};

function DesktopFooter({
  footerLinks,
  mediaImages,
  paymentImages,
}: DesktopFooterProps) {
  return (
    <div className="hidden lg:block relative w-full h-86.75 bg-primary-900 overflow-hidden">
      <div className="flex items-start justify-center mt-12">
        <div className="flex items-start justify-between w-174 gap-25">
          {footerLinks.map((column) => (
            <div
              key={column.title}
              className="flex flex-col items-start gap-3 text-sm text-gray-300"
            >
              <h3 className="text-white">{column.title}</h3>

              <ul className="flex flex-col gap-3">
                {column.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="flex items-center gap-1"
                      >
                        {Icon && (
                          <Icon variant="Outline" size={20} color="#cbcbcb" />
                        )}

                        <span className="font-light">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-11 w-132">
          <div className="flex flex-col items-start gap-4">
            <p className="text-white">Sign up for News and updates</p>
            <Link
              href="mailto:TechHeimSupport@gmail.com"
              className="flex items-center justify-between gap-23.75 p-3 rounded-lg cursor-pointer border border-gray-50"
            >
              <div className="flex items-center justify-center gap-2">
                <User variant="Outline" size={24} color="#f9f9f9" />
                <p className="font-light text-gray-50">E-mail Address</p>
              </div>
              <ArrowRight2 variant="Linear" size={24} color="#f9f9f9" />
            </Link>
            <div className="flex items-start gap-4">
              {mediaImages.map((item) => (
                <Image
                  key={item.title}
                  src={item.image}
                  alt={item.title}
                  width={32}
                  height={32}
                />
              ))}
            </div>
          </div>
          <div className="h-51.25 flex flex-col justify-between">
            <FloatingActions />
          </div>
        </div>
      </div>
      <div className="absolute top-65 left-1/2 -translate-x-1/2 z-10">
        <div className="w-200.75 h-90.25 rounded-full bg-primary-400 opacity-70 blur-[80px]" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-14 bg-primary-900 z-20">
        <div className="max-w-360 mx-auto h-full px-27">
          <div className="absolute bottom-14 left flex items-center justify-center gap-1">
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

          <div className="flex h-full items-center justify-between text-xs text-gray-300">
            <div className="flex items-center justify-center gap-2">
              <Copyright variant="Linear" size={24} color="#cbcbcb" />
              <p>2026 Tech Heim.</p>
            </div>

            <div className="flex gap-12">
              <Link href="#">cookie settings</Link>
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms and Conditions</Link>
              <Link href="#">Imprint</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopFooter;
