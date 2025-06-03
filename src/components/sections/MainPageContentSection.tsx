'use client';

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ArrowRightIcon, MenuIcon } from "lucide-react"; // Assuming MenuIcon will be needed for mobile nav

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
  // Shared Data (from HomepageDesktopByAnima as baseline)

  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Mission", href: "#" },
    { label: "Expertise", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const tabletNavItems = [ // From HomepageTabletByAnima
    { label: "About", href: "#" },
    { label: "Mission", href: "#" },
    { label: "Expertise", href: "#" },
    { label: "Contact", href: "#" },
  ];

  // Expertise cards data
  const expertiseCards = [
    {
      title: "Custom Web & Mobile Development",
      description: "Scalable, user-friendly apps tailored to your goals.",
      imageSrc: "/design-sans-titre--16--2.png", // Used by Desktop
      // Mobile/Tablet use slightly different naming or might be the same, ensure paths are universal
    },
    {
      title: "AI & Automation",
      description:
        "Smart solutions powered by machine learning and generative AI.",
      imageSrc: "/design-sans-titre--17--2.png",
    },
    {
      title: "MVP & Startup Support",
      description: "Rapid development to bring your ideas to life—fast.",
      imageSrc: "/design-sans-titre--19--2.png",
    },
    {
      title: "Cloud, Edge & Embedded Systems",
      description:
        "Integrated tech for performance, security, and scalability.",
      imageSrc: "/design-sans-titre--18--2.png",
    },
    {
      title: "Extended Reality (XR)",
      description: "Immersive AR/VR/MR experiences that push boundaries.",
      imageSrc: "/design-sans-titre--20--2.png",
    },
  ];

  // Technology logos
  const techLogos = [
    "/design-sans-titre--21--2.png",
    "/design-sans-titre--22--2.png",
    "/design-sans-titre--23--2.png",
    "/design-sans-titre--24--2.png",
    "/design-sans-titre--25--2.png",
    "/design-sans-titre--26--2.png",
    "/design-sans-titre--27--2.png",
    "/design-sans-titre--28--2.png",
  ];

  // Team members data
  const teamMembers = [
    {
      name: "Sohaib Soussi",
      position: "CEO & Founder",
      description:
        "Leads with vision and purpose, driving innovation and client success at every stage.",
      // imagePlaceholder: true, // Desktop version had this
      // Mobile/Tablet might have actual image paths or placeholders, need to unify
    },
    {
      name: "Wahid Laaleg",
      position: "Co-founder",
      description:
        "Tech-driven and solution-focused, turning bold ideas into real digital impact.",
      // imagePlaceholder: true,
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      // imagePlaceholder: true,
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      // imagePlaceholder: true,
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      // imagePlaceholder: true,
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What's your pricing model?",
      answer: "", // Desktop had isOpen: false, Tablet/Mobile just answer
    },
    {
      question: "How long does a typical project take?",
      answer: "",
    },
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Absolutely. We support startups from ideation to launch—often helping build MVPs, pitch decks, and prototypes.", // Desktop had isOpen: true
    },
    {
      question: "Who owns the final product?",
      answer: "",
    },
    {
      question: "Can you work with our existing team?",
      answer: "",
    },
  ];

  // TODO: Implement JSX structure section by section, applying responsive classes.

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Navigation Bar */}
      <header className="w-full py-6 md:py-8 px-4 sm:px-6 md:px-12"> {/* Responsive padding */}
        <div className="flex items-center justify-between">
          {/* Logo - responsive size */}
          <img
            className="w-[100px] h-[27px] md:w-[130px] md:h-[35px] lg:w-[141px] lg:h-[38px]"
            alt="SLTVerse Logo"
            src="/7652dd10-6e4a-4dbd-ad7b-769f5f3650cf-removebg-preview-1.png" // Desktop uses ...-1.png, Tablet ...-1-1.png. Assuming main logo is this one.
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
              <a // Tablet version used simple <a> tags
                key={index}
                href={item.href}
                className="font-normal text-xs text-center text-black [font-family:'Open_Sans',Helvetica]" // Styling from tablet version
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="block md:hidden">
            <MenuIcon className="w-8 h-8 sm:w-9 sm:h-9 text-black" /> {/* Size from mobile version */}
            {/* TODO: Implement mobile menu functionality (e.g., dropdown/sidebar) */}
          </div>

          {/* Book Appointment Button - responsive */}
          <Button className="bg-[#564940] text-white rounded-lg h-7 px-2 text-[9px] sm:h-9 sm:px-4 sm:text-[15px] lg:text-base [font-family:'Open_Sans',Helvetica] font-semibold">
            Book Appointment
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6"> {/* Responsive padding */}
        <div className="flex flex-col items-center justify-center relative z-10 text-center">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-lg sm:text-xl mb-4 md:mb-6">
            Let&apos;s build the future together.
          </p>

          <h1 className="[font-family:'Piazzolla',Helvetica] font-bold text-3xl sm:text-4xl md:text-[45px] lg:text-[55px] text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mb-6 md:mb-8">
            <span className="text-[#2b2b2b]">Empowering Your </span>
            <span className="text-[#c8ad92]">Vision</span>
            <span className="text-[#2b2b2b]"> with Digital Innovation</span>
          </h1>

          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mb-8 md:mb-10">
            At SLTVerse, we turn ideas into impactful digital solutions.
            <br className="hidden sm:block" /> From startups to institutions, we help build and scale with
            tech, creativity, and strategy.
          </p>

          <Button className="bg-[#564940] text-white rounded-lg h-8 px-4 text-xs sm:h-9 sm:px-5 sm:text-sm md:h-10 md:px-6 lg:text-base [font-family:'Open_Sans',Helvetica] font-semibold flex items-center">
            Meet Our CEO
            <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" /> {/* Responsive icon size */}
          </Button>
        </div>

        {/* Decorative Images - Using responsive visibility strategy */}
        {/* Desktop specific */}
        <img
          className="hidden lg:block absolute w-[221px] h-[185px] bottom-0 left-[10%] -z-10"
          alt="Decorative element"
          src="/design-sans-titre--7--1.png"
        />
        <img
          className="hidden lg:block absolute w-[171px] h-[169px] top-0 right-0 -z-10"
          alt="Decorative element"
          src="/design-sans-titre--6--1.png"
        />
        <img
          className="hidden lg:block absolute w-[163px] h-[179px] bottom-0 right-0 -z-10"
          alt="Decorative element"
          src="/design-sans-titre--9--1.png"
        />
        {/* Tablet specific */}
        <img
          className="hidden md:block lg:hidden absolute top-0 right-0 w-[120px] h-[118px] -z-10"
          alt="Design element"
          src="/design-sans-titre--6--1-1.png"
        />
        <img
          className="hidden md:block lg:hidden absolute bottom-0 left-0 w-[181px] h-[155px] -z-10"
          alt="Design element"
          src="/design-sans-titre--7--2.png"
        />
        <img
          className="hidden md:block lg:hidden absolute bottom-0 right-0 w-[108px] h-[119px] -z-10"
          alt="Design element"
          src="/design-sans-titre--9--1-1.png"
        />
        {/* Mobile specific */}
        <img
          className="block md:hidden absolute w-[55px] h-[54px] top-0 right-0 -z-10"
          alt="Design sans titre"
          src="/design-sans-titre--6--1-2.png"
        />
        <img
          className="block md:hidden absolute w-[52px] h-[57px] bottom-0 right-0 -z-10"
          alt="Design sans titre"
          src="/design-sans-titre--9--1-2.png"
        />
        <img
          className="block md:hidden absolute w-[76px] h-[53px] bottom-0 left-0 -z-10"
          alt="Design sans titre"
          src="/design-sans-titre--7--2-1.png"
        />
      </section>

      {/* Services Banner */}
      {/* Desktop: Full text visible */}
      <div className="w-full bg-[#b89b84] py-4 md:py-6 hidden lg:block">
        <p className="[font-family:'Open_Sans',Helvetica] font-bold text-white text-lg md:text-xl lg:text-[22px] text-center">
          Intelligence Artificielle&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Digitisation of processes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Chatbots 4.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Extended realities
        </p>
      </div>
      {/* Tablet and Mobile: Scrollable text */}
      <div className="w-full bg-[#b89b84] py-3 sm:py-4 lg:hidden"> {/* Visible on < lg */}
        <ScrollArea className="w-full whitespace-nowrap">
          <p className="[font-family:'Open_Sans',Helvetica] font-bold text-white text-sm sm:text-base md:text-xl px-4 sm:px-6">
            Intelligence Artificielle&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Digitisation of processes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Chatbots 4.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Extended realities
          </p>
          <ScrollBar orientation="horizontal" className="mt-2" />
        </ScrollArea>
      </div>

      {/* About Section */}
      <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl text-center mb-8 md:mb-12">
            Efficiency, Scalability, and Agility.
          </p>

          <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
            {/* Card: Who is SLTVerse? */}
            <Card className="w-full lg:w-[453px] border border-solid border-[#a7b0ca] rounded-lg">
              <CardContent className="p-6 md:p-7 pt-10 md:pt-14">
                <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-2xl sm:text-3xl md:text-[32px] lg:text-[35px] mb-4">
                  Who is SLTVerse?
                </h2>
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-[15px] lg:text-xl">
                  SLTVerse is a{" "}
                  <span className="font-extrabold text-[#443627]">
                    Moroccan tech partner
                  </span>{" "}
                  that helps businesses turn ideas into smart, scalable digital
                  solutions. We work with{" "}
                  <span className="font-bold text-[#443627]">startups</span>,{" "}
                  <span className="font-bold text-[#443627]">companies</span>,
                  and{" "}
                  <span className="font-bold text-[#443627]">institutions</span>{" "}
                  to build impactful products—fast and efficiently.
                </p>
              </CardContent>
            </Card>

            {/* Column for Image and Mission Card */}
            <div className="w-full lg:w-auto flex flex-col items-center lg:items-start gap-8">
              {/* Image 1 - visible on md and lg */}
              <img
                className="w-full max-w-[453px] lg:w-[453px] h-auto md:h-[137px] lg:h-[163px] object-cover rounded-lg"
                alt="Technology illustration"
                src="/istockphoto-1481370371-612x612-2.png" // Desktop: istockphoto-1481370371-612x612-2.png, Tablet: ...-2-1.png
                // Mobile: ...-2-2.png (This is the smallest, maybe use for all as a base or implement full swapping)
                // For simplicity, using one version. Full swapping below.
              />
              {/* Example of full image swapping for one image */}
              {/*
              <img className="hidden lg:block w-[453px] h-[137px] object-cover" alt="Tech illustration desktop" src="/istockphoto-1481370371-612x612-2.png" />
              <img className="hidden md:block lg:hidden w-full md:w-[453px] h-[163px] object-cover rounded-lg" alt="Tech illustration tablet" src="/istockphoto-1481370371-612x612-2-1.png" />
              <img className="block md:hidden w-[98px] h-[205px] object-cover" alt="Tech illustration mobile" src="/istockphoto-1481370371-612x612-2-2.png" />
              */}

              {/* Card: Our Mission */}
              <Card className="w-full lg:w-[453px] border border-solid border-[#a7b0ca] rounded-lg">
                <CardContent className="p-6 md:p-7 pt-10 md:pt-12">
                  <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-2xl sm:text-3xl md:text-[32px] lg:text-[35px] mb-4">
                    Our Mission
                  </h2>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-[15px] lg:text-xl">
                    To drive digital transformation through innovative
                    technologies and tailored development. We help our partners{" "}
                    <span className="font-bold text-[#443627]">build</span>,{" "}
                    <span className="font-bold text-[#443627]">grow</span>, and{" "}
                    <span className="font-bold text-[#443627]">thrive</span> in
                    a connected, performance-driven world.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Image 2 - positioned below cards, responsive width */}
           <img
            className="w-full max-w-[453px] lg:w-[453px] h-auto md:h-[137px] lg:h-[163px] object-cover mt-8 mx-auto lg:mx-0 rounded-lg" // Centered on smaller, left on lg
            alt="Technology illustration 2"
            src="/istockphoto-1346563167-612x612.png" // Desktop: ...612.png, Tablet: ...612-1.png
            // Mobile: ...612-2.png
            // For simplicity, using one version. Full swapping can be implemented if specific images are critical.
          />
        </div>

        {/* Decorative elements with responsive visibility */}
        {/* Desktop */}
        <img className="hidden lg:block absolute w-[106px] h-[102px] bottom-0 left-[5%]" alt="Decorative element" src="/design-sans-titre--13--1.png" />
        <div className="hidden lg:block absolute top-0 right-[10%]">
          <img className="w-[81px] h-[33px]" alt="Decorative element" src="/design-sans-titre--12--1.png" />
          <img className="w-[52px] h-[33px] ml-7 -mt-4" alt="Decorative element" src="/design-sans-titre--12--3.png" />
        </div>
        <img className="hidden lg:block absolute w-[115px] h-6 top-[92px] left-[5%]" alt="Decorative element" src="/design-sans-titre--12--2.png" />
        {/* Tablet */}
        <img className="hidden md:block lg:hidden absolute top-0 right-0 w-[78px] h-[41px]" alt="Design element" src="/design-sans-titre--12--1-1.png" />
        <img className="hidden md:block lg:hidden absolute top-4 right-[29px] w-[49px] h-[25px]" alt="Design element" src="/design-sans-titre--12--3-1.png" />
        <img className="hidden md:block lg:hidden absolute top-[84px] left-[41px] w-[130px] h-[18px]" alt="Design element" src="/design-sans-titre--12--2-1.png" />
        <img className="hidden md:block lg:hidden absolute bottom-0 left-[41px] w-[108px] h-[77px]" alt="Design element" src="/design-sans-titre--13--1-1.png" />
        {/* Mobile - (The mobile version had fewer specific decorative elements here, so these might be optional or different) */}
        {/* <img className="block md:hidden w-[57px] h-4 mt-4" alt="Design sans titre" src="/design-sans-titre--12--2-2.png" /> */}
        {/* <img className="block md:hidden w-[75px] h-[60px] mt-16" alt="Design sans titre" src="/design-sans-titre--13--1-2.png" /> */}

      </section>

      {/* Expertise Section */}
      <section className="w-full bg-[#b89b84] py-10 md:py-16 lg:py-20 px-4 sm:px-6 relative">
        {/* Decorative images - Desktop & Tablet (Tablet images might need different src if distinct) */}
        <img
          className="hidden md:block absolute top-0 left-0 md:w-[200px] lg:w-[299px] md:h-[112px] lg:h-[168px] object-cover"
          alt="Decorative element"
          src="/design-sans-titre--15--2-2.png" // Desktop and Tablet use this
        />
        <img
          className="hidden md:block absolute bottom-0 right-0 md:w-[220px] lg:w-[313px] md:h-[100px] lg:h-44 object-cover"
          alt="Decorative element"
          src="/design-sans-titre--15--2-2.png" // Desktop and Tablet use this
        />
        {/* Mobile specific decorative images */}
        <img
          className="block md:hidden absolute w-[125px] h-[70px] top-0 left-0"
          alt="Design sans titre"
          src="/design-sans-titre--15--2-2.png" // Mobile version also uses this, path might vary
        />
        <img
          className="block md:hidden absolute w-[131px] h-[73px] bottom-0 right-8"
          alt="Design sans titre"
          src="/design-sans-titre--15--2-2.png" // Mobile version also uses this
        />


        <div className="max-w-6xl mx-auto relative z-10"> {/* Ensure content is above decorative images */}
          <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-white text-3xl sm:text-4xl md:text-[45px] lg:text-[55px] mb-4">
            Our Expertise
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#e5e4e4] text-base sm:text-lg lg:text-xl mb-8 md:mb-12 max-w-3xl">
            At SLTVerse, we combine creativity, technology, and strategy to
            deliver high-impact solutions across key digital domains:
          </p>

          {/* Cards container - ScrollArea for sm/md, flex/grid for lg+ */}
          <div className="lg:hidden"> {/* ScrollArea for screens smaller than lg */}
            <ScrollArea className="w-full">
              <div className="flex space-x-6 pb-4">
                {expertiseCards.map((card, index) => (
                  <Card
                    key={index}
                    className="min-w-[280px] sm:min-w-[300px] md:min-w-[321px] h-[300px] sm:h-[320px] md:h-[345px] rounded-lg border border-solid border-white bg-transparent"
                  >
                    <CardContent className="p-0 relative h-full">
                      <img
                        className="w-[70px] h-[78px] sm:w-[80px] sm:h-[90px] md:w-[93px] md:h-[104px] object-cover absolute top-3 left-3" // Adjusted positioning slightly
                        alt={card.title} // Alt text from data
                        src={card.imageSrc} // imageSrc from data
                      />
                      <div className="absolute bottom-6 left-3.5 right-3.5">
                        <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-xl sm:text-2xl md:text-[28px] mb-2 md:mb-4">
                          {card.title}
                        </h3>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#e5e4e4] text-sm sm:text-base md:text-lg">
                          {card.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="mt-3" />
            </ScrollArea>
          </div>

          <div className="hidden lg:flex flex-wrap gap-6 justify-center"> {/* Flex wrap for lg screens */}
            {expertiseCards.map((card, index) => (
              <Card
                key={index}
                className="w-[321px] h-[345px] rounded-lg border border-solid border-white bg-transparent" // Fixed size for desktop grid
              >
                <CardContent className="p-0 relative h-full">
                   <img
                      className="w-[93px] h-[104px] object-cover absolute top-3 left-3"
                      alt={card.title}
                      src={card.imageSrc}
                    />
                  <div className="absolute bottom-20 left-3.5 w-[298px]">
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-white text-[28px] mb-4">
                      {card.title}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#e5e4e4] text-lg w-72">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Book Meeting Section */}
      <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl mb-4 md:mb-6">
            Let&apos;s bring your vision to life.
          </p>
          <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-3xl sm:text-4xl md:text-[40px] lg:text-5xl mb-4 md:mb-6">
            Book a Meeting with Our Team
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-lg lg:text-xl mb-6 md:mb-10">
            Whether you&apos;re starting a new project or scaling an existing
            one, our team is here to guide you with a blend of{" "}
            <span className="font-bold text-[#443627]">expertise</span>,{" "}
            <span className="font-bold text-[#443627]">creative</span>{" "}
            <span className="font-bold text-[#443627]">technology</span>, and{" "}
            <span className="font-bold text-[#443627]">
              deep industry knowledge
            </span>
            .
          </p>
          <Button className="bg-[#564940] text-white rounded-lg h-9 px-5 text-xs sm:h-10 sm:px-6 sm:text-sm md:w-auto md:max-w-[566px] lg:text-base [font-family:'Open_Sans',Helvetica] font-semibold flex items-center justify-center mx-auto">
            Schedule a call today and let&apos;s build something great
            <ArrowRightIcon className="ml-2 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </Button>
        </div>

        {/* Image Collage - Responsive Swapping */}
        <div className="mt-8 md:mt-12 lg:mt-16 max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-5xl mx-auto">
          {/* Desktop Images */}
          <div className="hidden lg:block relative h-[450px]"> {/* Approx height for desktop collage */}
            <img
              className="absolute top-[-280px] right-0 w-[245px] h-[428px] object-contain"
              alt="Handshake"
              src="/handshake-opt-1.png"
            />
            <img
              className="absolute top-[-400px] left-[5%] w-[498px] h-[232px] object-contain"
              alt="Business people"
              src="/group-of-confident-business-people-point-to-graphs-2023-11-27-05.png"
            />
             <img
              className="w-[634px] h-[293px] object-contain" // Main image for desktop
              alt="Programmers working"
              src="/what-exactly-does-a-programmer-do-1.png"
            />
          </div>
          {/* Tablet Images */}
          <div className="hidden md:block lg:hidden">
            <div className="flex flex-col items-center gap-8">
              <img
                className="w-full max-w-md h-auto object-contain"
                alt="Business people"
                src="/group-of-confident-business-people-point-to-graphs-2023-11-27-05-1.png"
              />
              <img
                className="w-full max-w-md h-auto object-contain"
                alt="Handshake"
                src="/handshake-opt-1-1.png"
              />
              <img
                className="w-full max-w-lg h-auto object-contain"
                alt="Programmer"
                src="/what-exactly-does-a-programmer-do-1-1.png"
              />
            </div>
          </div>
          {/* Mobile Images */}
          <div className="block md:hidden">
            <div className="flex flex-col items-center gap-4">
                <img
                    className="w-full max-w-xs h-auto object-contain"
                    alt="Group of confident business people"
                    src="/group-of-confident-business-people-point-to-graphs-2023-11-27-05-2.png"
                />
                <img
                    className="w-3/4 max-w-[200px] h-auto object-contain" // Smaller handshake
                    alt="Handshake"
                    src="/handshake-opt-1-2.png"
                />
                <img
                    className="w-full max-w-xs h-auto object-contain"
                    alt="Programmer working"
                    src="/what-exactly-does-a-programmer-do-1-2.png"
                />
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="text-center mb-8 md:mb-12">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl mb-4 md:mb-6">
            Modern tools. Scalable solutions. Future-ready products.
          </p>
          <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-3xl sm:text-4xl md:text-[40px] lg:text-[45px]">
            Technologies We Use
          </h2>
        </div>

        <div className="w-full bg-[#b89b84] py-8 md:py-12">
          <ScrollArea className="w-full max-w-6xl mx-auto"> {/* Constrain width of scroll area */}
            <div className="flex space-x-6 md:space-x-8 lg:space-x-10 px-4 sm:px-6 md:px-8">
              {techLogos.map((logo, index) => (
                <img
                  key={index}
                  className="h-[120px] w-auto sm:h-[150px] md:h-[180px] lg:h-[206px] object-contain flex-shrink-0" // Responsive height, ensure they don't shrink
                  alt={`Technology logo ${index + 1}`}
                  src={logo}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="mt-4 md:mt-6" />
          </ScrollArea>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl mb-4 md:mb-6">
              Driven by innovation. Powered by people.
            </p>
            <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-3xl sm:text-4xl md:text-[40px] lg:text-[45px] mb-4 md:mb-6">
              Meet the Team
            </h2>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto">
              At SLTVerse, our strength lies in the diverse minds behind the
              solutions. <br className="hidden sm:block" />
              From <span className="font-bold text-[#443627]">developers</span>{" "}
              and <span className="font-bold text-[#443627]">designers</span> to{" "}
              <span className="font-bold text-[#443627]">strategists</span> and{" "}
              <span className="font-bold text-[#443627]">engineers</span>, we
              bring together passionate problem-solvers who thrive on turning
              ideas into impactful digital products.
            </p>
          </div>

          {/* Team Members Container */}
          {/* ScrollArea for screens smaller than lg */}
          <div className="lg:hidden">
            <ScrollArea className="w-full">
              <div className="flex space-x-6 pb-4">
                {teamMembers.map((member, index) => (
                  <div key={index} className="min-w-[180px] sm:min-w-[200px] md:min-w-[220px]">
                    <div className="w-full h-[180px] sm:h-[200px] md:h-[220px] bg-[#d9d9d9] mb-3 sm:mb-4 rounded-md"></div> {/* Placeholder image */}
                    <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#272727] text-base sm:text-lg md:text-xl text-center mb-1">
                      {member.name}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#443627] text-sm sm:text-base md:text-lg text-center mb-1 sm:mb-2">
                      {member.position}
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#443627] text-xs sm:text-sm md:text-[15px] text-left"> {/* text-left for description */}
                      {member.description}
                    </p>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" className="mt-3" />
            </ScrollArea>
          </div>

          {/* Grid/Flex for lg screens and up */}
          <div className="hidden lg:flex flex-wrap justify-center gap-8 md:gap-10">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-[220px]"> {/* Fixed width for desktop grid items */}
                <div className="w-[220px] h-[220px] bg-[#d9d9d9] mb-4 rounded-md"></div> {/* Placeholder image */}
                <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#272727] text-xl text-center mb-1">
                  {member.name}
                </h3>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#443627] text-xl text-center mb-2">
                  {member.position}
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#443627] text-[15px]">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#f3e0cc] py-10 md:py-16 lg:py-20 px-4 sm:px-6 relative">
        {/* Decorative images */}
        {/* Desktop */}
        <img className="hidden lg:block absolute bottom-0 left-[5%] w-[369px] h-[321px] -z-0" alt="Decorative element" src="/faiss--1--2.png" />
        <img className="hidden lg:block absolute top-[15%] right-[5%] w-[369px] h-[321px] -z-0" alt="Decorative element" src="/faiss--1--1.png" />
        {/* Tablet */}
        <img className="hidden md:block lg:hidden absolute bottom-0 left-[5%] w-[279px] h-[243px] -z-0" alt="Design element" src="/faiss--1--2-1.png" />
        <img className="hidden md:block lg:hidden absolute top-[10%] right-[5%] w-[227px] h-[251px] -z-0" alt="Design element" src="/faiss--1--1-1.png" />
        {/* Mobile */}
        <img className="block md:hidden absolute w-[146px] h-[136px] bottom-8 left-0 -z-0" alt="Faiss" src="/faiss--1--2-2.png" />
        <img className="block md:hidden absolute w-40 h-[140px] top-16 right-8 -z-0" alt="Faiss" src="/faiss--1--1-2.png" />

        <div className="max-w-6xl mx-auto relative z-10"> {/* Content above decorative images */}
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-base sm:text-lg lg:text-xl mb-4 md:mb-6">
              Got questions? We&apos;ve got answers.
            </p>
            <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-3xl sm:text-4xl md:text-[40px] lg:text-[45px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <Card className="rounded-lg border border-solid border-[#2b2b2b] bg-white shadow-md">
                    <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 [font-family:'Open_Sans',Helvetica] font-normal text-black text-sm sm:text-base md:text-lg lg:text-xl text-left">
                      {faq.question}
                    </AccordionTrigger>
                    {faq.answer && ( // Only render content if answer exists
                      <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4">
                        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </AccordionContent>
                    )}
                  </Card>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Card Section */}
      <section className="w-full py-10 md:py-16 lg:py-20 px-4 sm:px-6">
        <Card className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl mx-auto rounded-lg border border-solid border-[#2b2b2b] shadow-[0px_5px_10px_#00000033] p-6 sm:p-8 md:p-10">
          <CardContent className="p-0"> {/* Removed default CardContent padding to match original more closely */}
            <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-sm sm:text-base lg:text-lg mb-4 md:mb-6">
              Build with purpose. Grow with us.
            </p>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-xs sm:text-sm lg:text-lg mb-4 md:mb-6">
              We&apos;re always on the lookout for passionate{" "}
              <span className="font-bold text-[#443627]">builders</span>,{" "}
              <span className="font-bold text-[#443627]">
                creative thinkers
              </span>
              , and{" "}
              <span className="font-bold text-[#443627]">curious minds</span>{" "}
              who want to shape the future of digital experiences.
            </p>
            <p className="[font-family:'Open_Sans',Helvetica] font-light italic text-black text-xs sm:text-sm md:text-base mb-0"> {/* mb-0 to match desktop version */}
              &quot;SLTVerse isn&apos;t just a workplace—it&apos;s a launchpad
              for impact.&quot; - Our CEO
            </p>
            {/* Mobile version had an empty div here: <div className="absolute top-16 right-3"></div>, likely for spacing or an icon not used. Omitting for now. */}
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-12 md:mb-16 text-center md:text-left">
            {/* Column 1: Logo and description */}
            <div className="flex flex-col items-center md:items-start">
              <img
                className="w-[131px] h-[131px] lg:w-[180px] lg:h-[180px] object-contain mb-4" // Desktop had 220x220, using whatsapp image from other sections.
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
                  <img className="w-4 h-3 mr-2" alt="Email icon" src="/subtract-2.svg" /> {/* Original was subtract-2, then subtract-4. Using -2 from desktop */}
                  hello@sltverse.com
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <img className="w-5 h-5 mr-2" alt="LinkedIn icon" src="/icons8-linkedin-60-1-2.png" />
                  SLTVerse
                </li>
                <li className="flex items-center justify-center md:justify-start">
                   {/* Simplified social icon from desktop, original was complex */}
                  <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15z"/></svg>
                  Casablanca, Morocco
                </li>
              </ul>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-sm mt-4 md:mt-6 hidden lg:block"> {/* Desktop only extra text */}
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

          <Separator className="bg-white/50" /> {/* Adjusted opacity */}

          <div className="pt-6 md:pt-8 text-center">
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-xs sm:text-sm lg:text-base">
              © {new Date().getFullYear()} SLTVerse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainPageContentSection;
