"use client";

import { qaInfo } from "@/src/lib/constants/qaInfo";
import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";
import Line from "../../shared/ui/Line";

function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="w-full lg:w-175 xl:flex-101 min-w-0">
      {qaInfo.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="w-full border-b border-b-gray-400 px-2 sm:px-3 lg:px-4 py-3 sm:py-4 lg:py-6"
          >
            <div
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex items-center justify-between cursor-pointer"
            >
              <p className="font-medium text-sm md:text-lg lg:text-2xl text-primary select-none">
                {item.question}
              </p>

              <ArrowDown2
                variant="Outline"
                size={20}
                color="#0C68F4"
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </div>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="pt-4 sm:pt-6 lg:pt-8 font-light text-sm md:text-base lg:text-xl select-none">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FAQ;
