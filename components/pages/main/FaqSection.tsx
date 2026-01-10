"use client";

import React, { useState } from "react";
import SectionHeading from "../../reuseable/SectionHeading";
import { MinusIcon, PlusIcon } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Q. What types of CVs do you offer?",
      answer:
        "We offer models optimized for Finance, Consulting, and Tech/Startup roles, all designed by graduates from HEC and Polytechnique.",
    },
    {
      question: "Q. Is my CV actually evaluated?",
      answer:
        "Yes. Every CV receives a score out of 100, based on more than 30 recruitment criteria used by top-tier firms.",
    },
    {
      question: "Q. How long does it take to receive my optimized CV?",
      answer:
        "Your CV is analyzed instantly, and optimization suggestions are provided immediately so you can apply without delay.",
    },
    {
      question: "Q. Can I use the platform for multiple applications?",
      answer:
        "Absolutely. You can tailor your CV for different job descriptions to ensure you pass the Applicant Tracking Systems (ATS).",
    },
    {
      question: "Q. Can I try it for free?",
      answer:
        "Yes, you can start with a free evaluation to see how your current CV ranks against industry standards.",
    },
    {
      question: "Q. Can I cancel whenever I want?",
      answer:
        "Yes, you can cancel at any time directly from your dashboard. Our subscription is completely non-binding.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <SectionHeading className="mb-12.5">FAQs</SectionHeading>

      <section className="max-w-[1066px] mx-auto space-y-6 pb-10 px-4 md:px-0">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`border border-[#D4D4D4] p-6 rounded-lg border-solid transition-all duration-300 ease-in-out ${
                isOpen ? "bg-[#F5F5F5]" : "bg-white"
              }`}
            >
              <div
                className={`flex  justify-between gap-2.5 cursor-pointer ${
                  isOpen ? "items-start" : "items-center"
                }`}
                onClick={() => toggleFaq(index)}
              >
                <p className="text-[#0D1B2A] font-secondary text-lg font-medium leading-[31px]">
                  {faq.question}
                </p>

                <div className="relative w-5 h-5">
                  <PlusIcon
                    className={`w-5 h-5 absolute transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "opacity-0 rotate-90 scale-0"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <MinusIcon
                    className={`w-5 h-5 absolute transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-90 scale-0"
                    }`}
                  />
                </div>
              </div>

              {/* Animated Wrapper */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100 pt-4"
                    : "grid-rows-[0fr] opacity-0 pt-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="self-stretch text-[#0D1B2A] font-inter text-base font-normal leading-[25px] tracking-[-0.16px] opacity-70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* bottom curve */}
      <div className="w-full h-10 md:h-20 -mt-px rotate-180 bg-[#F4F4F5]">
        <svg
          className="w-full h-full block"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,0 Q720,100 1440,0 L1440,100 L0,100 Z" fill="#FAFAFA" />
        </svg>
      </div>
    </section>
  );
}
