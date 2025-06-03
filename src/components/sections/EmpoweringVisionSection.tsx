import React from 'react';

/**
 * @module EmpoweringVisionSection
 * @description A section that displays an inspiring message "Empowering Your Vision with Digital Innovation" alongside a visual element.
 * It features a gradient background and responsive layout for text and image.
 * The layout adjusts to center content and provide appropriate spacing on different screen sizes.
 * @returns {JSX.Element} The rendered EmpoweringVisionSection component.
 */
const EmpoweringVisionSection = (): JSX.Element => {
  return (
    <section className="w-full [background:linear-gradient(180deg,rgba(201,173,147,1)_0%,rgba(85,73,64,1)_100%)] overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Image can be above or intertwined with text depending on desired visual.
            For this version, image is presented first, then text.
            Original had image top-left and text bottom-left, which is harder to make simply responsive
            without more complex grid/absolute positioning that might not adapt well to all heights.
            This simpler stacked approach ensures content is always visible and flows.
        */}
        <img
          className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[260px] md:h-[260px] lg:w-[290px] lg:h-[287px] object-contain mb-8 md:mb-10"
          alt="Empowering Vision Visual"
          // Using the same image as the logo showcase for now, as it was the one in the original JSX block
          src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-3.png"
        />
        <div className="font-['Inter',Helvetica] text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
          <span className="font-bold text-white">
            Empowering Your Vision <br />
            with Digital Innovation
          </span>
        </div>
      </div>
    </section>
  );
};

export default EmpoweringVisionSection;
