'use client';

import React from 'react';
// All direct UI component imports (Button, Separator, etc.) are removed as they are now encapsulated in their respective sections.
import { HeaderSection } from "@/components/sections/mainpage/HeaderSection";
import { HeroSection } from "@/components/sections/mainpage/HeroSection";
import { ServicesBannerSection } from "@/components/sections/mainpage/ServicesBannerSection";
import { AboutSection } from "@/components/sections/mainpage/AboutSection";
import { ExpertiseSection } from "@/components/sections/mainpage/ExpertiseSection";
import { BookingSection } from "@/components/sections/mainpage/BookingSection";
import { TechnologiesSection } from "@/components/sections/mainpage/TechnologiesSection";
import { TeamSection } from "@/components/sections/mainpage/TeamSection";
import { FaqSection } from "@/components/sections/mainpage/FaqSection";
import { CareersSection } from "@/components/sections/mainpage/CareersSection";
import { FooterSection } from "@/components/sections/mainpage/FooterSection"; // Import the new FooterSection

/**
 * @module MainPageContentSection
 * @description
 * A consolidated and responsive component that renders the main content of the homepage,
 * adapting its layout for desktop, tablet, and mobile screen sizes.
 * It includes navigation, hero, services, about, expertise, call-to-actions,
 * technology showcase, team, FAQ, careers, and footer sections.
 * This component replaces the separate Desktop, Tablet, and Mobile specific homepage components.
 * @requires 'use client'
 * @returns {JSX.Element} The rendered main page content.
 */
const MainPageContentSection = (): JSX.Element => {
  // faqItems data has been moved to FaqSection.tsx

  // Header JSX is removed

  return (
    <div className="w-full bg-white overflow-hidden">
      <HeaderSection /> {/* Ensure only one HeaderSection */}
      <HeroSection />
      <ServicesBannerSection />
      <AboutSection />
      <ExpertiseSection />
      <BookingSection />
      <TechnologiesSection />
      <TeamSection />
      <FaqSection />
      <CareersSection />
      <FooterSection /> {/* Render the new FooterSection component */}
    </div>
  );
};

export default MainPageContentSection;
