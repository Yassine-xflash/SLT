'use client';

import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

/**
 * @module ExpertiseSection
 * @description This section showcases the company's areas of expertise using a series of cards.
 * It features a responsive layout that uses a scrollable area on smaller screens
 * and a wrapped flex layout on larger screens. Includes decorative background images.
 * @requires 'use client' // Due to ScrollArea and Card usage.
 * @returns {JSX.Element} The rendered Expertise section.
 */
export const ExpertiseSection = (): JSX.Element => {
  // Expertise cards data
  const expertiseCards = [
    {
      title: "Custom Web & Mobile Development",
      description: "Scalable, user-friendly apps tailored to your goals.",
      imageSrc: "/design-sans-titre--16--2.png",
    },
    {
      title: "AI & Automation",
      description:
        "Smart solutions powered by machine learning and generative AI.",
      imageSrc: "/design-sans-titre--17--2.png",
    },
    {
      title: "MVP & Startup Support",
      description: "Rapid development to bring your ideas to life—fast.",
      imageSrc: "/design-sans-titre--19--2.png",
    },
    {
      title: "Cloud, Edge & Embedded Systems",
      description:
        "Integrated tech for performance, security, and scalability.",
      imageSrc: "/design-sans-titre--18--2.png",
    },
    {
      title: "Extended Reality (XR)",
      description: "Immersive AR/VR/MR experiences that push boundaries.",
      imageSrc: "/design-sans-titre--20--2.png",
    },
  ];

  return (
    <section className="w-full bg-[#b89b84] py-10 md:py-16 lg:py-20 px-4 sm:px-6 relative">
      {/* Decorative images - Desktop & Tablet */}
      <img
        className="hidden md:block absolute top-0 left-0 md:w-[200px] lg:w-[299px] md:h-[112px] lg:h-[168px] object-cover"
        alt="Decorative element"
        src="/design-sans-titre--15--2-2.png"
      />
      <img
        className="hidden md:block absolute bottom-0 right-0 md:w-[220px] lg:w-[313px] md:h-[100px] lg:h-44 object-cover"
        alt="Decorative element"
        src="/design-sans-titre--15--2-2.png"
      />
      {/* Mobile specific decorative images */}
      <img
        className="block md:hidden absolute w-[125px] h-[70px] top-0 left-0"
        alt="Decorative element mobile top"
        src="/design-sans-titre--15--2-2.png"
      />
      <img
        className="block md:hidden absolute w-[131px] h-[73px] bottom-0 right-8"
        alt="Decorative element mobile bottom"
        src="/design-sans-titre--15--2-2.png"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-[45px] lg:text-[55px] mb-4">
          Our Expertise
        </h2>
        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#e5e4e4] text-base sm:text-lg lg:text-xl mb-8 md:mb-12 max-w-3xl">
          At SLTVerse, we combine creativity, technology, and strategy to
          deliver high-impact solutions across key digital domains:
        </p>

        {/* Cards container - ScrollArea for smaller than lg, flex/grid for lg+ */}
        <div className="lg:hidden">
          <ScrollArea className="w-full">
            <div className="flex space-x-6 pb-4">
              {expertiseCards.map((card, index) => (
                <Card
                  key={index}
                  className="min-w-[280px] sm:min-w-[300px] md:min-w-[321px] h-[300px] sm:h-[320px] md:h-[345px] rounded-lg border border-solid border-white bg-transparent"
                >
                  <CardContent className="p-0 relative h-full">
                    <img
                      className="w-[70px] h-[78px] sm:w-[80px] sm:h-[90px] md:w-[93px] md:h-[104px] object-cover absolute top-3 left-3"
                      alt={card.title}
                      src={card.imageSrc}
                    />
                    <div className="absolute bottom-6 left-3.5 right-3.5">
                      <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl sm:text-2xl md:text-[28px] mb-2 md:mb-4">
                        {card.title}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#e5e4e4] text-sm sm:text-base md:text-lg">
                        {card.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="mt-3" />
          </ScrollArea>
        </div>

        <div className="hidden lg:flex flex-wrap gap-6 justify-center">
          {expertiseCards.map((card, index) => (
            <Card
              key={index}
              className="w-[321px] h-[345px] rounded-lg border border-solid border-white bg-transparent"
            >
              <CardContent className="p-0 relative h-full">
                 <img
                    className="w-[93px] h-[104px] object-cover absolute top-3 left-3"
                    alt={card.title}
                    src={card.imageSrc}
                  />
                <div className="absolute bottom-20 left-3.5 w-[298px]">
                  <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[28px] mb-4">
                    {card.title}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#e5e4e4] text-lg w-72">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
