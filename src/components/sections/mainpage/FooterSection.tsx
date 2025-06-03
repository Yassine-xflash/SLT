'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

/**
 * @module FooterSection
 * @description The footer section of the website.
 * It includes company logo, description, exploration links, contact information,
 * a newsletter subscription call-to-action, and copyright notice.
 * @requires 'use client' // Due to Button and Separator usage.
 * @returns {JSX.Element} The rendered footer section.
 */
export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-black text-white pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16 text-center md:text-left">
          {/* Column 1: Logo and description */}
          <div className="flex flex-col items-center md:items-start">
            <img
              className="w-[131px] h-[131px] lg:w-[180px] lg:h-[180px] object-contain mb-4"
              alt="SLTVerse Logo"
              src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-3.png"
            />
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-sm">
              Empowering digital transformation through innovation and custom
              solutions.
            </p>
          </div>

          {/* Column 2: Explore Links */}
          <div>
            <h3 className="[font-family:'Piazzolla',Helvetica] font-bold text-white text-2xl lg:text-[30px] mb-4 md:mb-6">
              Explore
            </h3>
            <ul className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-sm space-y-3 md:space-y-4">
              <li><a href="#" className="hover:text-gray-400">About Us</a></li>
              <li><a href="#" className="hover:text-gray-400">Expertise</a></li>
              <li><a href="#" className="hover:text-gray-400">Technologies</a></li>
              <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="[font-family:'Piazzolla',Helvetica] font-bold text-white text-2xl lg:text-[30px] mb-4 md:mb-6">
              Contact
            </h3>
            <ul className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-sm space-y-3 md:space-y-4">
              <li className="flex items-center justify-center md:justify-start">
                <img className="w-4 h-3 mr-2" alt="Email icon" src="/subtract-2.svg" />
                hello@sltverse.com
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <img className="w-5 h-5 mr-2" alt="LinkedIn icon" src="/icons8-linkedin-60-1-2.png" />
                SLTVerse
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/></svg>
                Casablanca, Morocco
              </li>
            </ul>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-sm mt-4 md:mt-6 hidden lg:block">
              SLTVerse<br /><br />Casablanca, Morocco
            </p>
          </div>

          {/* Column 4: Stay in the Loop */}
          <div>
            <h3 className="[font-family:'Piazzolla',Helvetica] font-bold text-white text-2xl lg:text-[30px] mb-4 md:mb-6">
              Stay in the Loop
            </h3>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-sm mb-4 md:mb-6">
              Subscribe to our newsletter and stay updated on new projects,
              insights, and opportunities.
            </p>
            <Button
              variant="outline"
              className="text-white border-white rounded-lg h-8 px-4 text-xs sm:h-9 sm:text-sm [font-family:'Open_Sans',Helvetica] font-normal hover:bg-white hover:text-black"
            >
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="bg-white/50" />

        <div className="pt-6 md:pt-8 text-center">
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-xs sm:text-sm lg:text-base">
            © {new Date().getFullYear()} SLTVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
