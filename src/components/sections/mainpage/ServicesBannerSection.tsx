'use client';

import React from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

/**
 * @module ServicesBannerSection
 * @description A banner section displaying a list of key services.
 * On larger screens (lg and up), it shows a static, centered text.
 * On smaller screens, the text becomes horizontally scrollable within a ScrollArea.
 * @requires 'use client'
 * @returns {JSX.Element} The rendered services banner section.
 */
export const ServicesBannerSection = (): JSX.Element => {
  const servicesText = "Intelligence Artificielle - Digitisation of processes - Chatbots 4.0 - Extended realities";

  return (
    <>
      {/* Desktop: Full text visible */}
      <div className="w-full bg-[#b89b84] py-4 md:py-6 hidden lg:block">
        <p className="[font-family:'Open_Sans',Helvetica] font-bold text-white text-lg md:text-xl lg:text-[22px] text-center">
          {servicesText.split(" - ").map((service, index, arr) => (
            <React.Fragment key={index}>
              {service}
              {index < arr.length - 1 && <>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
            </React.Fragment>
          ))}
        </p>
      </div>
      {/* Tablet and Mobile: Scrollable text */}
      <div className="w-full bg-[#b89b84] py-3 sm:py-4 lg:hidden"> {/* Visible on < lg */}
        <ScrollArea className="w-full whitespace-nowrap">
          <p className="[font-family:'Open_Sans',Helvetica] font-bold text-white text-sm sm:text-base md:text-xl px-4 sm:px-6">
            {servicesText.split(" - ").map((service, index, arr) => (
              <React.Fragment key={index}>
                {service}
                {index < arr.length - 1 && <>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>}
              </React.Fragment>
            ))}
          </p>
          <ScrollBar orientation="horizontal" className="mt-2" />
        </ScrollArea>
      </div>
    </>
  );
};
