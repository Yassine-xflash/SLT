'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";
import { Plus, Minus } from "lucide-react"; // Import Plus and Minus icons

/**
 * @module FaqSection
 * @description This section displays Frequently Asked Questions using an Accordion component.
 * Each FAQ item is presented in a Card. The layout is a responsive grid.
 * Includes decorative background images.
 * @requires 'use client' // Due to Accordion usage.
 * @returns {JSX.Element} The rendered FAQ section.
 */
export const FaqSection = (): JSX.Element => {
  // FAQ items
  const faqItems = [
    {
      question: "What's your pricing model?",
      answer: "",
    },
    {
      question: "How long does a typical project take?",
      answer: "",
    },
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Absolutely. We support startups from ideation to launch—often helping build MVPs, pitch decks, and prototypes.",
    },
    {
      question: "Who owns the final product?",
      answer: "",
    },
    {
      question: "Can you work with our existing team?",
      answer: "",
    },
  ];

  return (
    <section className="w-full bg-[#f3e0cc] py-10 md:py-16 lg:py-20 px-4 sm:px-6 relative">
      {/* Decorative images */}
      {/* Desktop */}
      <img className="hidden lg:block absolute bottom-0 left-[5%] w-[369px] h-[321px] -z-0" alt="Decorative element" src="/faiss--1--2.png" />
      <img className="hidden lg:block absolute top-[15%] right-[5%] w-[369px] h-[321px] -z-0" alt="Decorative element" src="/faiss--1--1.png" />
      {/* Tablet */}
      <img className="hidden md:block lg:hidden absolute bottom-0 left-[5%] w-[279px] h-[243px] -z-0" alt="Design element" src="/faiss--1--2-1.png" />
      <img className="hidden md:block lg:hidden absolute top-[10%] right-[5%] w-[227px] h-[251px] -z-0" alt="Design element" src="/faiss--1--1-1.png" />
      {/* Mobile */}
      <img className="block md:hidden absolute w-[146px] h-[136px] bottom-8 left-0 -z-0" alt="Faiss" src="/faiss--1--2-2.png" />
      <img className="block md:hidden absolute w-40 h-[140px] top-16 right-8 -z-0" alt="Faiss" src="/faiss--1--1-2.png" />

      <div className="max-w-6xl mx-auto relative z-10"> {/* Content above decorative images */}
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl mb-4 md:mb-6">
            Got questions? We&apos;ve got answers.
          </p>
          <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-3xl sm:text-4xl md:text-[40px] lg:text-[45px]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {faqItems.map((faq, index) => (
            <Accordion
              key={index}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem value={`item-${index}`} className="border-none group"> {/* Added group here for data-state targeting from parent */}
                <Card className="rounded-lg border border-solid border-[#2b2b2b] bg-white shadow-md">
                  <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 [font-family:'Open_Sans',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg lg:text-xl text-left hover:no-underline"> {/* Removed hover:underline from trigger for cleaner look with icon */}
                    <span className="flex-1 text-left">{faq.question}</span> {/* Ensure question text takes up available space */}
                    <Plus className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gray-700 group-data-[state=open]:hidden ml-4 shrink-0" /> {/* Responsive icon size and margin */}
                    <Minus className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-gray-700 hidden group-data-[state=open]:block ml-4 shrink-0" />
                  </AccordionTrigger>
                  {faq.answer && ( // Only render content if answer exists
                    <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 pt-0"> {/* Added pt-0 to content for better spacing after trigger */}
                      <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </AccordionContent>
                  )}
                </Card>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
};
