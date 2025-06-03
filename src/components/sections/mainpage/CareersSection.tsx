'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

/**
 * @module CareersSection
 * @description This section displays a card with information about careers at the company,
 * inviting passionate individuals to join the team.
 * @requires 'use client' // Card can be a client component, and section might have future interactivity.
 * @returns {JSX.Element} The rendered Careers section.
 */
export const CareersSection = (): JSX.Element => {
  return (
    <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6">
      <Card className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-lg border border-solid border-[#2b2b2b] shadow-[0px_5px_10px_#00000033] p-6 sm:p-8 md:p-10">
        <CardContent className="p-0"> {/* Removed default CardContent padding to match original more closely */}
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-sm sm:text-base lg:text-lg mb-4 md:mb-6">
            Build with purpose. Grow with us.
          </p>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm lg:text-lg mb-4 md:mb-6">
            We&apos;re always on the lookout for passionate{" "}
            <span className="font-bold text-[#443627]">builders</span>,{" "}
            <span className="font-bold text-[#443627]">
              creative thinkers
            </span>
            , and{" "}
            <span className="font-bold text-[#443627]">curious minds</span>{" "}
            who want to shape the future of digital experiences.
          </p>
          <p className="[font-family:'Open_Sans',Helvetica] font-light italic text-black text-xs sm:text-sm md:text-base mb-0"> {/* mb-0 to match desktop version */}
            &quot;SLTVerse isn&apos;t just a workplace—it&apos;s a launchpad
            for impact.&quot; - Our CEO
          </p>
          {/* Mobile version had an empty div here: <div className="absolute top-16 right-3"></div>, likely for spacing or an icon not used. Omitting for now. */}
        </CardContent>
      </Card>
    </section>
  );
};
