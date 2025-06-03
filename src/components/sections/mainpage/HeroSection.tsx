'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

/**
 * @module HeroSection
 * @description The hero section of the main page, featuring a tagline, main headline,
 * introductory paragraph, a call-to-action button ("Meet Our CEO"), and decorative images
 * that adapt responsively to different screen sizes.
 * @requires 'use client'
 * @returns {JSX.Element} The rendered hero section.
 */
export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6"> {/* Responsive padding */}
      <div className="flex flex-col items-center justify-center relative z-10 text-center">
        <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-lg sm:text-xl mb-4 md:mb-6">
          Let&apos;s build the future together.
        </p>

        <h1 className="[font-family:'Piazzolla',Helvetica] font-bold text-3xl sm:text-4xl md:text-[45px] lg:text-[55px] text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-6 md:mb-8">
          <span className="text-[#2b2b2b]">Empowering Your </span>
          <span className="text-[#c8ad92]">Vision</span>
          <span className="text-[#2b2b2b]"> with Digital Innovation</span>
        </h1>

        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-8 md:mb-10">
          At SLTVerse, we turn ideas into impactful digital solutions.
          <br className="hidden sm:block" /> From startups to institutions, we help build and scale with
          tech, creativity, and strategy.
        </p>

        <Button className="bg-[#564940] text-white rounded-lg h-8 px-4 text-xs sm:h-9 sm:px-5 sm:text-sm md:h-10 md:px-6 lg:text-base [font-family:'Open_Sans',Helvetica] font-semibold flex items-center">
          Meet Our CEO
          <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> {/* Responsive icon size */}
        </Button>
      </div>

      {/* Decorative Images - Using responsive visibility strategy */}
      {/* Desktop specific */}
      <img
        className="hidden lg:block absolute w-[221px] h-[185px] bottom-0 left-[10%] -z-10"
        alt="Decorative element"
        src="/design-sans-titre--7--1.png"
      />
      <img
        className="hidden lg:block absolute w-[171px] h-[169px] top-0 right-0 -z-10"
        alt="Decorative element"
        src="/design-sans-titre--6--1.png"
      />
      <img
        className="hidden lg:block absolute w-[163px] h-[179px] bottom-0 right-0 -z-10"
        alt="Decorative element"
        src="/design-sans-titre--9--1.png"
      />
      {/* Tablet specific */}
      <img
        className="hidden md:block lg:hidden absolute top-0 right-0 w-[120px] h-[118px] -z-10"
        alt="Design element"
        src="/design-sans-titre--6--1-1.png"
      />
      <img
        className="hidden md:block lg:hidden absolute bottom-0 left-0 w-[181px] h-[155px] -z-10"
        alt="Design element"
        src="/design-sans-titre--7--2.png"
      />
      <img
        className="hidden md:block lg:hidden absolute bottom-0 right-0 w-[108px] h-[119px] -z-10"
        alt="Design element"
        src="/design-sans-titre--9--1-1.png"
      />
      {/* Mobile specific */}
      <img
        className="block md:hidden absolute w-[55px] h-[54px] top-0 right-0 -z-10"
        alt="Design sans titre"
        src="/design-sans-titre--6--1-2.png"
      />
      <img
        className="block md:hidden absolute w-[52px] h-[57px] bottom-0 right-0 -z-10"
        alt="Design sans titre"
        src="/design-sans-titre--9--1-2.png"
      />
      <img
        className="block md:hidden absolute w-[76px] h-[53px] bottom-0 left-0 -z-10"
        alt="Design sans titre"
        src="/design-sans-titre--7--2-1.png"
      />
    </section>
  );
};
