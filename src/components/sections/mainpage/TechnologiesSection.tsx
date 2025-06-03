'use client';

import React from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

/**
 * @module TechnologiesSection
 * @description This section showcases the technologies used by the company.
 * It features a tagline, a heading, and a horizontally scrollable list of technology logos.
 * The scrollable area is contained within a styled background.
 * @requires 'use client' // Due to ScrollArea usage.
 * @returns {JSX.Element} The rendered Technologies section.
 */
export const TechnologiesSection = (): JSX.Element => {
  // Technology logos
  const techLogos = [
    "/design-sans-titre--21--2.png",
    "/design-sans-titre--22--2.png",
    "/design-sans-titre--23--2.png",
    "/design-sans-titre--24--2.png",
    "/design-sans-titre--25--2.png",
    "/design-sans-titre--26--2.png",
    "/design-sans-titre--27--2.png",
    "/design-sans-titre--28--2.png",
  ];

  return (
    <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="text-center mb-8 md:mb-12">
        <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl mb-4 md:mb-6">
          Modern tools. Scalable solutions. Future-ready products.
        </p>
        <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-3xl sm:text-4xl md:text-[40px] lg:text-[45px]">
          Technologies We Use
        </h2>
      </div>

      <div className="w-full bg-[#b89b84] py-8 md:py-12">
        <ScrollArea className="w-full max-w-6xl mx-auto"> {/* Constrain width of scroll area */}
          <div className="flex space-x-6 md:space-x-8 lg:space-x-10 px-4 sm:px-6 md:px-8">
            {techLogos.map((logo, index) => (
              <img
                key={index}
                className="h-[120px] w-auto sm:h-[150px] md:h-[180px] lg:h-[206px] object-contain flex-shrink-0" // Responsive height, ensure they don't shrink
                alt={`Technology logo ${index + 1}`}
                src={logo}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" className="mt-4 md:mt-6" />
        </ScrollArea>
      </div>
    </section>
  );
};
