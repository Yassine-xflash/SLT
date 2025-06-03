/**
 * @module VisualidentityByAnima
 * @description
 * Displays the color scheme section of the website's visual identity.
 * It showcases primary and secondary color palettes using Card components.
 * This component is purely presentational.
 * @returns {JSX.Element} The rendered color scheme section.
 */
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const VisualidentityByAnima = (): JSX.Element => {
  // Color data for mapping
  const topRowColors = [
    { bg: "#554940", text: "#554940", textColor: "text-white" },
    { bg: "#B89B84", text: "#B89B84", textColor: "text-white" },
    { bg: "#C9AD93", text: "#C9AD93", textColor: "text-white" },
  ];

  const middleRowColors = [
    { bg: "#73787C", text: "#73787C", textColor: "text-white" },
    { bg: "#C5C6C7", text: "#C5C6C7", textColor: "text-black" }, // Assuming this should be black text on light gray
    { bg: "#D7E5F0", text: "#D7E5F0", textColor: "text-black" }, // Assuming this should be black text on light blue/gray
  ];

  return (
    <section className="w-full bg-white py-8 md:py-12"> {/* Added some vertical padding to the section */}
      {/* Top row of colors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
        {topRowColors.map((color, index) => (
          <Card key={`top-${index}`} className="rounded-none border-0">
            <CardContent
              className="p-4 flex items-center justify-center min-h-[150px] sm:min-h-[180px] md:min-h-[200px]" // Responsive padding and min-height
              style={{ backgroundColor: color.bg }} // Keep direct style for dynamic hex
            >
              <div
                className={`font-['Montserrat',Helvetica] font-bold ${color.textColor} text-lg md:text-xl text-center break-all`} // break-all for long hex codes
              >
                {color.text}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Middle row of colors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
        {middleRowColors.map((color, index) => (
          <Card key={`middle-${index}`} className="rounded-none border-0">
            <CardContent
              className="p-4 flex items-center justify-center min-h-[150px] sm:min-h-[180px] md:min-h-[200px]" // Responsive padding and min-height
              style={{ backgroundColor: color.bg }} // Keep direct style for dynamic hex
            >
              <div
                className={`font-['Montserrat',Helvetica] font-bold ${color.textColor} text-lg md:text-xl text-center break-all`}
              >
                {color.text}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom black section */}
      <Card className="rounded-none border-0">
        <CardContent className="bg-black flex flex-col justify-center items-start py-16 sm:py-24 md:py-32 px-6 sm:px-8 md:px-16 min-h-[250px] sm:min-h-[300px] md:min-h-[350px]"> {/* Flex layout, responsive padding and min-height */}
          <h2 className="font-['Montserrat',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-5xl mb-3 sm:mb-4">
            COLOR SCHEME
          </h2>
          <p className="font-['Montserrat',Helvetica] font-bold text-white text-lg sm:text-xl md:text-2xl">
            #000000
          </p>
        </CardContent>
      </Card>
    </section>
  );
};
