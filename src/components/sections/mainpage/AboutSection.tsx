'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

/**
 * @module AboutSection
 * @description This section introduces STLverse, detailing "Who is SLTVerse?" and "Our Mission".
 * It uses a responsive two-column layout for larger screens, stacking on smaller screens.
 * Includes informational cards and illustrative imagery that adapts to screen size.
 * @requires 'use client' // Marked as client component due to Card usage and potential future interactivity.
 * @returns {JSX.Element} The rendered About section.
 */
export const AboutSection = (): JSX.Element => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl text-center mb-8 md:mb-12">
          Efficiency, Scalability, and Agility.
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
          {/* Card: Who is SLTVerse? */}
          <Card className="w-full lg:w-[453px] border border-solid border-[#a7b0ca] rounded-lg">
            <CardContent className="p-6 md:p-7 pt-10 md:pt-14">
              <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-2xl sm:text-3xl md:text-[32px] lg:text-[35px] mb-4">
                Who is SLTVerse?
              </h2>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-[15px] lg:text-xl">
                SLTVerse is a{" "}
                <span className="font-extrabold text-[#443627]">
                  Moroccan tech partner
                </span>{" "}
                that helps businesses turn ideas into smart, scalable digital
                solutions. We work with{" "}
                <span className="font-bold text-[#443627]">startups</span>,{" "}
                <span className="font-bold text-[#443627]">companies</span>,
                and{" "}
                <span className="font-bold text-[#443627]">institutions</span>{" "}
                to build impactful products—fast and efficiently.
              </p>
            </CardContent>
          </Card>

          {/* Column for Image and Mission Card */}
          <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-8">
            {/* Image 1 - responsive */}
            {/* Desktop/Tablet Image */}
            <img
              className="hidden md:block w-full max-w-[453px] lg:w-[453px] h-auto md:h-[137px] lg:h-[163px] object-cover rounded-lg"
              alt="Technology illustration for desktop/tablet"
              src="/istockphoto-1481370371-612x612-2.png" // Main desktop/tablet image
            />
            {/* Mobile Image */}
            <img
              className="block md:hidden w-[98px] h-[205px] object-cover mx-auto rounded-lg" // Centered with mx-auto
              alt="Technology illustration for mobile"
              src="/istockphoto-1481370371-612x612-2-2.png" // Specific mobile image from original phone layout
            />

            {/* Card: Our Mission */}
            <Card className="w-full lg:w-[453px] border border-solid border-[#a7b0ca] rounded-lg">
              <CardContent className="p-6 md:p-7 pt-10 md:pt-12">
                <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-2xl sm:text-3xl md:text-[32px] lg:text-[35px] mb-4">
                  Our Mission
                </h2>
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-[15px] lg:text-xl">
                  To drive digital transformation through innovative
                  technologies and tailored development. We help our partners{" "}
                  <span className="font-bold text-[#443627]">build</span>,{" "}
                  <span className="font-bold text-[#443627]">grow</span>, and{" "}
                  <span className="font-bold text-[#443627]">thrive</span> in
                  a connected, performance-driven world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Image 2 - responsive */}
        {/* Desktop/Tablet Image */}
         <img
          className="hidden md:block w-full max-w-[453px] lg:w-[453px] h-auto md:h-[137px] lg:h-[163px] object-cover mt-8 mx-auto lg:mx-0 rounded-lg"
          alt="Technology illustration 2 for desktop/tablet"
          src="/istockphoto-1346563167-612x612.png" // Main desktop/tablet image
        />
        {/* Mobile Image */}
        <img
          className="block md:hidden w-[98px] h-[205px] object-cover mt-8 mx-auto rounded-lg" // Centered with mx-auto
          alt="Technology illustration 2 for mobile"
          src="/istockphoto-1346563167-612x612-2.png" // Specific mobile image from original phone layout
        />
      </div>

      {/* Decorative elements with responsive visibility */}
      {/* Desktop */}
      <img className="hidden lg:block absolute w-[106px] h-[102px] bottom-0 left-[5%]" alt="Decorative element" src="/design-sans-titre--13--1.png" />
      <div className="hidden lg:block absolute top-0 right-[10%]">
        <img className="w-[81px] h-[33px]" alt="Decorative element" src="/design-sans-titre--12--1.png" />
        <img className="w-[52px] h-[33px] ml-7 -mt-4" alt="Decorative element" src="/design-sans-titre--12--3.png" />
      </div>
      <img className="hidden lg:block absolute w-[115px] h-6 top-[92px] left-[5%]" alt="Decorative element" src="/design-sans-titre--12--2.png" />
      {/* Tablet */}
      <img className="hidden md:block lg:hidden absolute top-0 right-0 w-[78px] h-[41px]" alt="Design element" src="/design-sans-titre--12--1-1.png" />
      <img className="hidden md:block lg:hidden absolute top-4 right-[29px] w-[49px] h-[25px]" alt="Design element" src="/design-sans-titre--12--3-1.png" />
      <img className="hidden md:block lg:hidden absolute top-[84px] left-[41px] w-[130px] h-[18px]" alt="Design element" src="/design-sans-titre--12--2-1.png" />
      <img className="hidden md:block lg:hidden absolute bottom-0 left-[41px] w-[108px] h-[77px]" alt="Design element" src="/design-sans-titre--13--1-1.png" />
      {/* Mobile specific decorative elements - these were different in phone version. Adding them here for completeness. */}
      <img className="block md:hidden w-[57px] h-4 mt-4" alt="Decorative element mobile" src="/design-sans-titre--12--2-2.png" />
      <img className="block md:hidden w-[75px] h-[60px] mt-16" alt="Decorative element mobile" src="/design-sans-titre--13--1-2.png" />
    </section>
  );
};
