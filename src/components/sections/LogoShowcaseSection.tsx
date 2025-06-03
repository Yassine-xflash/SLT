import React from 'react';

/**
 * @module LogoShowcaseSection
 * @description A section that showcases company logos or key visual elements.
 * It features a two-column layout that adapts responsively to different screen sizes.
 * On medium screens and above, it displays two columns. On smaller screens, it stacks them.
 * @returns {JSX.Element} The rendered LogoShowcaseSection component.
 */
const LogoShowcaseSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#b89b84] overflow-hidden py-8 md:py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center px-4"> {/* Added px-4 for some spacing from screen edges */}
        {/* Column 1: LOGO text and image */}
        <div className="w-full md:w-1/2 p-4 flex flex-col items-center md:items-start bg-white h-auto md:min-h-[600px] justify-center rounded-lg shadow-lg mb-8 md:mb-0 md:mr-4"> {/* Added min-h, rounded, shadow, margin */}
          <div className="mt-[20px] md:mt-0 font-['Montserrat',Helvetica] font-bold text-black text-[35px] md:text-[45px] text-center md:text-left">
            LOGO
          </div>
          <img
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] mt-[20px] object-contain" // Responsive image size
            alt="STLverse Main Logo"
            src="/7652dd10-6e4a-4dbd-ad7b-769f5f3650cf-removebg-preview.png" // Make sure this path is correct from /public
          />
        </div>
        {/* Column 2: Second image */}
        <div className="w-full md:w-1/2 p-4 flex items-center justify-center h-auto md:min-h-[600px] md:ml-4"> {/* Added min-h, margin */}
          <img
            className="w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] object-contain" // Responsive image size
            alt="STLverse Visual Showcase"
            src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-3.png" // Make sure this path is correct from /public
          />
        </div>
      </div>
    </section>
  );
};

export default LogoShowcaseSection;
