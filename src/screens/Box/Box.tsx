/**
 * @module Box
 * @description
 * The main container component for the STLverse website.
 * It orchestrates the display of different sections of the homepage,
 * including specific views for desktop, tablet, and mobile, along with
 * visual identity sections and other content blocks.
 *
 * This component is intended to be the primary content renderer for the main page.
 * Responsiveness (showing Desktop, Tablet, or Phone specific views) is expected
 * to be handled within those child components using Tailwind CSS responsive classes,
 * or this component could be refactored to use a client-side hook for conditional rendering.
 * @returns {JSX.Element} The rendered Box component containing various site sections.
 */
import React from "react";
import { HomepageDesktopByAnima } from "@/screens/Box/sections/HomepageDesktopByAnima";
import { HomepagePhoneFinalByAnima } from "@/screens/Box/sections/HomepagePhoneFinalByAnima/HomepagePhoneFinalByAnima";
import { HomepageTabletByAnima } from "@/screens/Box/sections/HomepageTabletByAnima";
import { VisualidentityByAnima } from "@/screens/Box/sections/VisualidentityByAnima";
import { VisualidentityVByAnima } from "@/screens/Box/sections/VisualidentityVByAnima";
import { VisualidentityWrapperByAnima } from "@/screens/Box/sections/VisualidentityWrapperByAnima";

export const Box = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        <section className="w-full">
          <HomepageDesktopByAnima />
        </section>

        <section className="w-full">
          <HomepageTabletByAnima />
        </section>

        <section className="w-full">
          <HomepagePhoneFinalByAnima />
        </section>

        <section className="w-full">
          <VisualidentityByAnima />
        </section>

        <section className="w-full">
          <VisualidentityVByAnima />
        </section>

        <section className="w-full bg-[#b89b84] overflow-hidden">
          <div className="flex flex-row max-w-[1280px] mx-auto">
            <div className="w-1/2 h-[808px] bg-white">
              <div className="mt-[89px] ml-20 font-['Montserrat',Helvetica] font-bold text-black text-[45px]">
                LOGO
              </div>

              <img
                className="w-[500px] h-[500px] mt-[10px] ml-[70px] object-cover"
                alt="Element"
                src="/7652dd10-6e4a-4dbd-ad7b-769f5f3650cf-removebg-preview.png"
              />
            </div>

            <div className="w-1/2 h-[808px] flex items-center justify-center">
              <img
                className="w-[500px] h-[500px] object-cover"
                alt="Whatsapp image"
                src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-3.png"
              />
            </div>
          </div>
        </section>

        <section className="w-full [background:linear-gradient(180deg,rgba(201,173,147,1)_0%,rgba(85,73,64,1)_100%)] overflow-hidden">
          <div className="max-w-[1280px] h-[808px] mx-auto relative">
            <img
              className="w-[290px] h-[287px] absolute top-0 left-[45px] object-cover"
              alt="Whatsapp image"
              src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-3.png"
            />

            <div className="absolute bottom-[116px] left-[77px] font-['Inter',Helvetica] text-6xl">
              <span className="font-bold text-white">
                Empowering Your Vision <br />
                with Digital Innovation
              </span>
            </div>
          </div>
        </section>

        <section className="w-full">
          <VisualidentityWrapperByAnima />
        </section>
      </div>
    </div>
  );
};
