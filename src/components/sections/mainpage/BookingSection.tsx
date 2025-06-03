'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";

/**
 * @module BookingSection
 * @description A call-to-action section prompting users to book a meeting.
 * It includes a tagline, headline, descriptive text, a prominent button,
 * and a collage of images that adapt responsively to different screen sizes.
 * @requires 'use client' // Due to Button usage.
 * @returns {JSX.Element} The rendered booking section.
 */
export const BookingSection = (): JSX.Element => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl mb-4 md:mb-6">
          Let&apos;s bring your vision to life.
        </p>
        <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-3xl sm:text-4xl md:text-[40px] lg:text-5xl mb-4 md:mb-6">
          Book a Meeting with Our Team
        </h2>
        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-10">
          Whether you&apos;re starting a new project or scaling an existing
          one, our team is here to guide you with a blend of{" "}
          <span className="font-bold text-[#443627]">expertise</span>,{" "}
          <span className="font-bold text-[#443627]">creative</span>{" "}
          <span className="font-bold text-[#443627]">technology</span>, and{" "}
          <span className="font-bold text-[#443627]">
            deep industry knowledge
          </span>
          .
        </p>
        <Button className="bg-[#564940] text-white rounded-lg h-9 px-5 text-xs sm:h-10 sm:px-6 sm:text-sm md:w-auto md:max-w-[566px] lg:text-base [font-family:'Open_Sans',Helvetica] font-semibold flex items-center justify-center mx-auto">
          Schedule a call today and let&apos;s build something great
          <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </Button>
      </div>

      {/* Image Collage - Responsive Swapping */}
      <div className="mt-8 md:mt-12 lg:mt-16 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">
        {/* Desktop Images */}
        <div className="hidden lg:block relative h-[450px]"> {/* Approx height for desktop collage */}
          <img
            className="absolute top-[-280px] right-0 w-[245px] h-[428px] object-contain"
            alt="Handshake"
            src="/handshake-opt-1.png"
          />
          <img
            className="absolute top-[-400px] left-[5%] w-[498px] h-[232px] object-contain"
            alt="Business people"
            src="/group-of-confident-business-people-point-to-graphs-2023-11-27-05.png"
          />
           <img
            className="w-[634px] h-[293px] object-contain" // Main image for desktop
            alt="Programmers working"
            src="/what-exactly-does-a-programmer-do-1.png"
          />
        </div>
        {/* Tablet Images */}
        <div className="hidden md:block lg:hidden">
          <div className="flex flex-col items-center gap-8">
            <img
              className="w-full max-w-md h-auto object-contain"
              alt="Business people"
              src="/group-of-confident-business-people-point-to-graphs-2023-11-27-05-1.png"
            />
            <img
              className="w-full max-w-md h-auto object-contain"
              alt="Handshake"
              src="/handshake-opt-1-1.png"
            />
            <img
              className="w-full max-w-lg h-auto object-contain"
              alt="Programmer"
              src="/what-exactly-does-a-programmer-do-1-1.png"
            />
          </div>
        </div>
        {/* Mobile Images */}
        <div className="block md:hidden">
          <div className="flex flex-col items-center gap-4">
              <img
                  className="w-full max-w-xs h-auto object-contain"
                  alt="Group of confident business people"
                  src="/group-of-confident-business-people-point-to-graphs-2023-11-27-05-2.png"
              />
              <img
                  className="w-3/4 max-w-[200px] h-auto object-contain" // Smaller handshake
                  alt="Handshake"
                  src="/handshake-opt-1-2.png"
              />
              <img
                  className="w-full max-w-xs h-auto object-contain"
                  alt="Programmer working"
                  src="/what-exactly-does-a-programmer-do-1-2.png"
              />
          </div>
        </div>
      </div>
    </section>
  );
};
