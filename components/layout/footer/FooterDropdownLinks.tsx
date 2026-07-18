"use client";

import { FooterColumnType } from "@/types/footerTypes";
import { ArrowDown2, ArrowUp2, Link } from "iconsax-react";
import { useState } from "react";

function FooterDropdownLinks({
  footerLinks,
}: {
  footerLinks: FooterColumnType[];
}) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="z-100">
      {footerLinks.map((item) => (
        <div key={item.title}>
          <div
            onClick={() =>
              setOpenItem(openItem === item.title ? null : item.title)
            }
            className="flex items-center justify-between h-10"
          >
            <span className="font-medium text-white">{item.title}</span>
            <div>
              {openItem === item.title ? (
                <ArrowUp2 variant="Outline" size={14} color="white" />
              ) : (
                <ArrowDown2 variant="Outline" size={14} color="white" />
              )}
            </div>
          </div>
          {openItem === item.title && (
            <div className="pl-3 mt-2 flex flex-col gap-2">
              {item.items.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 font-light"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FooterDropdownLinks;
