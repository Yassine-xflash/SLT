'use client';

import React from 'react';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

/**
 * @module TeamSection
 * @description This section introduces the team members of the company.
 * It includes a tagline, a heading, an introductory paragraph, and a display of team members.
 * On smaller screens, team members are shown in a scrollable area.
 * On larger screens (lg and up), they are displayed in a wrapped flex layout.
 * @requires 'use client' // Due to ScrollArea usage.
 * @returns {JSX.Element} The rendered Team section.
 */
export const TeamSection = (): JSX.Element => {
  // Team members data
  const teamMembers = [
    {
      name: "Sohaib Soussi",
      position: "CEO & Founder",
      description:
        "Leads with vision and purpose, driving innovation and client success at every stage.",
    },
    {
      name: "Wahid Laaleg",
      position: "Co-founder",
      description:
        "Tech-driven and solution-focused, turning bold ideas into real digital impact.",
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
    },
  ];

  return (
    <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl mb-4 md:mb-6">
            Driven by innovation. Powered by people.
          </p>
          <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] mb-4 md:mb-6">
            Meet the Team
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
            At SLTVerse, our strength lies in the diverse minds behind the
            solutions. <br className="hidden sm:block" />
            From <span className="font-bold text-[#443627]">developers</span>{" "}
            and <span className="font-bold text-[#443627]">designers</span> to{" "}
            <span className="font-bold text-[#443627]">strategists</span> and{" "}
            <span className="font-bold text-[#443627]">engineers</span>, we
            bring together passionate problem-solvers who thrive on turning
            ideas into impactful digital products.
          </p>
        </div>

        {/* Team Members Container */}
        {/* ScrollArea for screens smaller than lg */}
        <div className="lg:hidden">
          <ScrollArea className="w-full">
            <div className="flex space-x-6 pb-4">
              {teamMembers.map((member, index) => (
                <div key={index} className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px]">
                  <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] bg-[#d9d9d9] mb-3 sm:mb-4 rounded-md"></div> {/* Placeholder image */}
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#272727] text-base sm:text-lg md:text-xl text-center mb-1">
                    {member.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#443627] text-sm sm:text-base md:text-lg text-center mb-1 sm:mb-2">
                    {member.position}
                  </p>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#443627] text-xs sm:text-sm md:text-[15px] text-left"> {/* text-left for description */}
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="mt-3" />
          </ScrollArea>
        </div>

        {/* Grid/Flex for lg screens and up */}
        <div className="hidden lg:flex flex-wrap justify-center gap-8 md:gap-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-[220px]"> {/* Fixed width for desktop grid items */}
              <div className="w-[220px] h-[220px] bg-[#d9d9d9] mb-4 rounded-md"></div> {/* Placeholder image */}
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#272727] text-xl text-center mb-1">
                {member.name}
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#443627] text-xl text-center mb-2">
                {member.position}
              </p>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#443627] text-[15px]">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
