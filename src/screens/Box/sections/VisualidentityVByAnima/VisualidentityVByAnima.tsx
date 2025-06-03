/**
 * @module VisualidentityVByAnima
 * @description
 * Displays the typography section of the website's visual identity.
 * It showcases different heading levels (H1, H2, H3) and text styles (Body, Small)
 * with their font specifications (e.g., "55px Piazzolla Bold").
 * This component is purely presentational.
 * @returns {JSX.Element} The rendered typography section.
 */
import React from "react";

export const VisualidentityVByAnima = (): JSX.Element => {
  // Typography examples data for mapping
  const typographyExamples = [
    {
      id: "h1",
      label: "H1",
      specs: "55px Piazzolla Bold",
      text: "Lorem ipsum dolor sit amet...",
      className:
        "text-[55px] font-bold [font-family:'Piazzolla',Helvetica] mt-[148px]",
    },
    {
      id: "h2",
      label: "H2",
      specs: "45px Piazzolla Bold",
      text: "Lorem ipsum dolor sit amet...",
      className:
        "text-[45px] font-bold [font-family:'Piazzolla',Helvetica] mt-[278px]",
    },
    {
      id: "h3",
      label: "H3",
      specs: "35px Piazzolla Bold",
      text: "Lorem ipsum dolor sit amet...",
      className:
        "text-[35px] font-bold [font-family:'Piazzolla',Helvetica] mt-[395px]",
    },
    {
      id: "body",
      label: "Body Text",
      specs: "20px Open Sans Regular",
      text: "Lorem ipsum dolor sit amet...",
      className:
        "text-xl font-normal [font-family:'Open_Sans',Helvetica] mt-[508px]",
    },
    {
      id: "small",
      label: "Smaller Text",
      specs: "18px Open Sans SemiBold Italic",
      text: "Lorem ipsum dolor sit amet...",
      className:
        "text-lg font-semibold italic [font-family:'Open_Sans',Helvetica] mt-[601px]",
    },
  ];

  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <h1 className="text-[45px] font-bold [font-family:'Montserrat',Helvetica] text-black mb-16">
          TYPOGRAPHY
        </h1>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Font display */}
          <div className="relative">
            <div className="text-[250px] font-bold [font-family:'Outfit',Helvetica] text-black leading-none">
              Aa
            </div>
            <div className="absolute top-5 left-[211px] text-[35px] font-bold [font-family:'Inter',Helvetica] text-black">
              Outfit
            </div>
          </div>

          {/* Typography examples */}
          <div className="flex-1">
            {typographyExamples.map((example, index) => (
              <div key={example.id} className="relative mb-10">
                <p className={example.className}>{example.text}</p>
                <div className="flex items-center mt-2">
                  <span className="text-xl font-bold [font-family:'Outfit',Helvetica] text-black mr-2">
                    {example.label}
                  </span>
                  <span className="text-xl font-bold [font-family:'Outfit',Helvetica] text-[#aaaaaa]">
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
