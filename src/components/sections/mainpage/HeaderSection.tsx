'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { MenuIcon } from "lucide-react";

/**
 * @module HeaderSection
 * @description The header section of the main page, including logo, navigation (desktop, tablet, mobile icon), and booking button.
 * It adapts responsively to different screen sizes.
 * @requires 'use client'
 * @returns {JSX.Element} The rendered header section.
 */
export const HeaderSection = (): JSX.Element => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Mission", href: "#" },
    { label: "Expertise", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const tabletNavItems = [
    { label: "About", href: "#" },
    { label: "Mission", href: "#" },
    { label: "Expertise", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header className="w-full py-6 md:py-8 px-4 sm:px-6 md:px-12"> {/* Responsive padding */}
      <div className="flex items-center justify-between">
        {/* Logo - responsive size */}
        <img
          className="w-[100px] h-[27px] md:w-[130px] md:h-[35px] lg:w-[141px] lg:h-[38px]"
          alt="SLTVerse Logo"
          // Assuming this is the correct primary logo path.
          // The desktop version used /7652dd10-6e4a-4dbd-ad7b-769f5f3650cf-removebg-preview-1.png
          // The tablet version used /7652dd10-6e4a-4dbd-ad7b-769f5f3650cf-removebg-preview-1-1.png
          // For consistency, using the ...-1.png version. If different logos are needed per breakpoint,
          // a responsive image swapping strategy (multiple <img> tags with visibility classes) would be required.
          src="/7652dd10-6e4a-4dbd-ad7b-769f5f3650cf-removebg-preview-1.png"
        />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-6">
              {navItems.map((item, index) => (
                <NavigationMenuItem key={index}>
                  <NavigationMenuLink
                    href={item.href}
                    className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base"
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Tablet Navigation */}
        <nav className="hidden md:flex lg:hidden space-x-4 md:space-x-6">
          {tabletNavItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-normal text-xs text-center text-black [font-family:'Open_Sans',Helvetica]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="block md:hidden">
          {/* TODO: Implement mobile menu functionality (e.g., dropdown/sidebar using a Sheet or DropdownMenu component) */}
          <Button variant="ghost" size="icon" aria-label="Open menu">
            <MenuIcon className="w-7 h-7 sm:w-8 sm:h-8 text-black" />
          </Button>
        </div>

        {/* Book Appointment Button - responsive */}
        <Button className="bg-[#564940] text-white rounded-lg h-7 px-2 text-[9px] sm:h-9 sm:px-4 sm:text-[15px] lg:text-base [font-family:'Open_Sans',Helvetica] font-semibold">
          Book Appointment
        </Button>
      </div>
    </header>
  );
};
