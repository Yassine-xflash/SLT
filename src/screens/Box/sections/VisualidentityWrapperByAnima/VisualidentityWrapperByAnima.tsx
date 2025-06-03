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
    <section className="relative w-full py-16 px-8 overflow-hidden bg-gradient-to-tr from-black to-[#554940]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/3">
            <img
              className="w-[290px] h-[287px] object-cover"
              alt="Whatsapp image"
              src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-3.png"
            />
          </div>

          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <h2 className="text-[45px] font-bold text-white font-['Inter',Helvetica]">
              Meet the Team
            </h2>

            <Card className="bg-transparent border-none">
              <CardContent className="p-0 space-y-8">
                {teamDescriptions.map((description, index) => (
                  <p
                    key={index}
                    className="text-xl text-white font-['Inter',Helvetica] font-normal"
                  >
                    {description}
                  </p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <Separator className="bg-white/50 h-px w-full max-w-[1085px] mx-auto" />
          <p className="text-xl text-white font-['Inter',Helvetica] font-normal mt-8 text-center">
            Driven by innovation. Powered by people.
          </p>
        </div>
      </div>
    </section>
  );
};
