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
// Old homepage view imports are removed
import { VisualidentityByAnima } from "@/screens/Box/sections/VisualidentityByAnima";
import { VisualidentityVByAnima } from "@/screens/Box/sections/VisualidentityVByAnima";
import { VisualidentityWrapperByAnima } from "@/screens/Box/sections/VisualidentityWrapperByAnima";
import LogoShowcaseSection from "@/components/sections/LogoShowcaseSection";
import EmpoweringVisionSection from "@/components/sections/EmpoweringVisionSection";
import MainPageContentSection from "@/components/sections/MainPageContentSection"; // New import

export const Box = (): JSX.Element => {
  return (
    <div className="w-full">
      <div className="flex flex-col w-full">
        <MainPageContentSection />

        {/* Refactored sections are rendered directly */}
        <LogoShowcaseSection />
        <EmpoweringVisionSection />

        {/* Visualidentity sections are rendered directly as they now manage their own <section> tag and styling */}
        <VisualidentityByAnima />
        <VisualidentityVByAnima />
        <VisualidentityWrapperByAnima />
      </div>
    </div>
  );
};
