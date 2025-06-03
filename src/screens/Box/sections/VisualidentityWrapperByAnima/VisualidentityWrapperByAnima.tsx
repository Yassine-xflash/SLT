/**
 * @module VisualidentityWrapperByAnima
 * @description
 * A section that seems to be part of the visual identity or team introduction,
 * featuring an image and text content. It uses Card and Separator components.
 * This component might need `'use client'` if its child `Separator` (which is 'use client')
 * causes issues, but for now, it's treated as a server component.
 * @returns {JSX.Element} The rendered section.
 */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const VisualidentityWrapperByAnima = (): JSX.Element => {
  const teamDescriptions = [
    "Whether you're starting a new project or scaling an existing one, our team is here to guide you with a blend of expertise, creative technology, and deep industry knowledge.",
    "Whether you're starting a new project or scaling an existing one, our team is here to guide you with a blend of expertise, creative technology, and deep industry knowledge.",
  ];

  return (
    <section className="relative w-full py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-tr from-black to-[#554940]"> {/* Responsive padding */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start"> {/* Responsive gap and alignment */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start"> {/* Centering image on mobile */}
            <img
              className="w-full max-w-[290px] h-auto md:w-[290px] md:h-[287px] object-contain md:object-cover rounded-lg" // Responsive image: full width on mobile, fixed on md+; object-contain for mobile safety
              alt="Team Visual"
              src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-3.png"
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-4 md:gap-6 text-center md:text-left"> {/* Responsive gap and text alignment */}
            <h2 className="text-3xl sm:text-4xl md:text-[45px] font-bold text-white font-['Inter',Helvetica]"> {/* Responsive text size */}
              Meet the Team
            </h2>

            <Card className="bg-transparent border-none">
              <CardContent className="p-0 space-y-4 md:space-y-6"> {/* Responsive spacing for paragraphs */}
                {teamDescriptions.map((description, index) => (
                  <p
                    key={index}
                    className="text-base sm:text-lg md:text-xl text-white font-['Inter',Helvetica] font-normal" // Responsive text size
                  >
                    {description}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 md:mt-16"> {/* Responsive margin */}
          <Separator className="bg-white/50 h-px w-full max-w-4xl mx-auto" /> {/* Constrained separator width, centered */}
          <p className="text-base sm:text-lg md:text-xl text-white font-['Inter',Helvetica] font-normal mt-6 md:mt-8 text-center"> {/* Responsive text size and margin */}
            Driven by innovation. Powered by people.
          </p>
        </div>
      </div>
    </section>
  );
};
