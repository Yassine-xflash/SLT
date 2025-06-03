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
    { bg: "#C5C6C7", text: "#C5C6C7", textColor: "text-black" },
    { bg: "#D7E5F0", text: "#D7E5F0", textColor: "text-black" },
  ];

  return (
    <section className="w-full bg-white">
      {/* Top row of colors */}
      <div className="grid grid-cols-3 w-full">
        {topRowColors.map((color, index) => (
          <Card key={index} className="rounded-none border-0">
            <CardContent
              className={`p-0 h-[217px] bg-[${color.bg}] flex items-center justify-center`}
              style={{ backgroundColor: color.bg }}
            >
              <div
                className={`font-['Montserrat',Helvetica] font-bold ${color.textColor} text-xl text-center`}
              >
                {color.text}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Middle row of colors */}
      <div className="grid grid-cols-3 w-full">
        {middleRowColors.map((color, index) => (
          <Card key={index} className="rounded-none border-0">
            <CardContent
              className={`p-0 h-[214px] bg-[${color.bg}] flex items-center justify-center`}
              style={{ backgroundColor: color.bg }}
            >
              <div
                className={`font-['Montserrat',Helvetica] font-bold ${color.textColor} text-xl text-center`}
              >
                {color.text}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Bottom black section */}
      <Card className="rounded-none border-0">
        <CardContent className="p-0 h-[377px] bg-black relative">
          <div className="absolute h-6 top-[218px] left-[68px] font-['Montserrat',Helvetica] font-bold text-white text-xl">
            #000000
          </div>
          <div className="absolute w-[406px] h-[55px] top-[145px] left-[68px] font-['Montserrat',Helvetica] font-bold text-white text-[45px]">
            COLOR SCHEME
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
