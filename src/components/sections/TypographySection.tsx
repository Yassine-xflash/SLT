/**
 * @module TypographySection
 * @description
 * Displays the typography section of the website's visual identity.
 * It showcases different heading levels (H1, H2, H3) and text styles (Body, Small)
 * with their font specifications (e.g., "55px Piazzolla Bold").
 * This component is purely presentational and has been made responsive.
 * @returns {JSX.Element} The rendered typography section.
 */
import React from "react";

export const TypographySection = (): JSX.Element => {
  // Typography examples data for mapping with responsive classes
  const typographyExamples = [
    {
      id: "h1",
      label: "H1",
      specs: "55px Piazzolla Bold",
      text: "Lorem ipsum dolor sit amet...",
      // Original: "text-[55px] font-bold [font-family:'Piazzolla',Helvetica] mt-[148px]"
      className: "font-bold [font-family:'Piazzolla',Helvetica] text-3xl sm:text-4xl md:text-5xl lg:text-[55px] mt-10 sm:mt-12 md:mt-16 lg:mt-[100px]",
    },
    {
      id: "h2",
      label: "H2",
      specs: "45px Piazzolla Bold",
      text: "Lorem ipsum dolor sit amet...",
      // Original: "text-[45px] font-bold [font-family:'Piazzolla',Helvetica] mt-[278px]"
      className: "font-bold [font-family:'Piazzolla',Helvetica] text-2xl sm:text-3xl md:text-4xl lg:text-[45px] mt-8 sm:mt-10 md:mt-12 lg:mt-[120px]",
    },
    {
      id: "h3",
      label: "H3",
      specs: "35px Piazzolla Bold",
      text: "Lorem ipsum dolor sit amet...",
      // Original: "text-[35px] font-bold [font-family:'Piazzolla',Helvetica] mt-[395px]"
      className: "font-bold [font-family:'Piazzolla',Helvetica] text-xl sm:text-2xl md:text-3xl lg:text-[35px] mt-6 sm:mt-8 md:mt-10 lg:mt-[100px]",
    },
    {
      id: "body",
      label: "Body Text",
      specs: "20px Open Sans Regular",
      text: "Lorem ipsum dolor sit amet...",
      // Original: "text-xl font-normal [font-family:'Open_Sans',Helvetica] mt-[508px]"
      className: "font-normal [font-family:'Open_Sans',Helvetica] text-base sm:text-lg md:text-xl mt-4 sm:mt-6 md:mt-8 lg:mt-[80px]",
    },
    {
      id: "small",
      label: "Smaller Text",
      specs: "18px Open Sans SemiBold Italic",
      text: "Lorem ipsum dolor sit amet...",
      // Original: "text-lg font-semibold italic [font-family:'Open_Sans',Helvetica] mt-[601px]"
      className: "font-semibold italic [font-family:'Open_Sans',Helvetica] text-sm sm:text-base md:text-lg mt-4 sm:mt-5 md:mt-6 lg:mt-[70px]",
    },
  ];

  return (
    <section className="w-full bg-white py-10 sm:py-16 md:py-20 overflow-hidden"> {/* Responsive section padding */}
      <div className="container mx-auto px-4">
        <h1 className="font-bold [font-family:'Montserrat',Helvetica] text-black text-3xl sm:text-4xl md:text-[45px] mb-8 sm:mb-12 md:mb-16 text-center md:text-left"> {/* Responsive heading & margin, centered on mobile */}
          TYPOGRAPHY
        </h1>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center md:items-start"> {/* Responsive gap, alignment */}
          {/* Font display */}
          <div className="flex flex-col items-center md:items-start shrink-0"> {/* Using flex-col for "Aa" and "Outfit" */}
            <div className="font-bold [font-family:'Outfit',Helvetica] text-black leading-none text-[100px] sm:text-[150px] md:text-[200px] lg:text-[250px]">
              Aa
            </div>
            <div className="font-bold [font-family:'Inter',Helvetica] text-black text-xl sm:text-2xl md:text-3xl lg:text-[35px] mt-1 md:-mt-2 lg:-mt-4 text-center md:text-left"> {/* Adjusted margin for overlap */}
              Outfit
            </div>
          </div>

          {/* Typography examples */}
          <div className="flex-1 w-full"> {/* Ensure it takes full width on small screens when stacked */}
            {typographyExamples.map((example) => ( // Removed index as it's not used
              <div key={example.id} className="mb-6 sm:mb-8 md:mb-10"> {/* Responsive bottom margin */}
                <p className={example.className}>{example.text}</p>
                <div className="flex items-center mt-1 sm:mt-2">
                  <span className="font-bold [font-family:'Outfit',Helvetica] text-black mr-2 text-sm sm:text-base md:text-lg lg:text-xl">
                    {example.label}
                  </span>
                  <span className="font-bold [font-family:'Outfit',Helvetica] text-[#aaaaaa] text-sm sm:text-base md:text-lg lg:text-xl">
                    {example.specs}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// If it was intended to be a default export, it would be:
// export default TypographySection;
// But since the original was a named export, keeping it consistent.
