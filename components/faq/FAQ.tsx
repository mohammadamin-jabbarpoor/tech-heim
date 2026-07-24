"use client";

import { ArrowDown2 } from "iconsax-react";
import { useState } from "react";

const qaInfo = [
  {
    id: "1",
    question:
      "Can I purchase products from Tech Heim using installment payments?",
    answer:
      "Yes, Tech Heim offers the option to purchase products using both cash and installment payments. This allows you to choose the payment method that suits your needs and budget.",
  },
  {
    id: "2",
    question: "How can I engage with the magazine content on Tech Heim?",
    answer:
      "You can actively engage with the magazine content by leaving comments and participating in the question-and-answer section. Feel free to share your thoughts, ask questions, and interact with fellow tech enthusiasts in the community.",
  },
  {
    id: "3",
    question: "Does Tech Heim offer a warranty on its products?",
    answer: "Yes, Tech Heim provides a warranty on all eligible products.",
  },
  {
    id: "4",
    question: "Is Tech Heim a secure platform for online shopping?",
    answer: "Yes, Tech Heim provides a secure platform for online shopping.",
  },
  {
    id: "5",
    question:
      "How can I get assistance with my purchase or any other inquiries?",
    answer:
      "If you need assistance with your purchase or have any questions, our dedicated customer support team is here to help.",
  },
];

function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex-101">
      {qaInfo.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div key={item.id} className="w-full px-4 py-6">
            <div
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="flex items-center justify-between cursor-pointer"
            >
              <p className="font-medium text-2xl text-primary select-none">
                {item.question}
              </p>

              <ArrowDown2
                variant="Outline"
                size={24}
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
                <p className="pt-8 font-light text-xl select-none">
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
