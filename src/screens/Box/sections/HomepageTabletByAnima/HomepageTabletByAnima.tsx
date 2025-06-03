/**
 * @module HomepageTabletByAnima
 * @description
 * Provides the tablet-specific layout and content for the homepage.
 * This component adapts the desktop view for tablet screen sizes, including navigation,
 * hero section, service banners, about information, expertise showcases,
 * meeting booking, technology displays, team introductions, FAQs, careers, and footer.
 * It uses UI components like Accordion, Button, Card, ScrollArea, and Separator.
 * This component is intended to be displayed on tablet screen sizes (md) and hidden on smaller or larger screens (lg and up).
 * @returns {JSX.Element} The rendered tablet homepage view.
 */
'use client';
import { ArrowRightIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export const HomepageTabletByAnima = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
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
      image: "/design-sans-titre--16--2.png",
    },
    {
      title: "AI & Automation",
      description:
        "Smart solutions powered by machine learning and generative AI.",
      image: "/design-sans-titre--17--2.png",
    },
    {
      title: "MVP & Startup Support",
      description: "Rapid development to bring your ideas to life—fast.",
      image: "/design-sans-titre--19--2.png",
    },
    {
      title: "Cloud, Edge & Embedded Systems",
      description:
        "Integrated tech for performance, security, and scalability.",
      image: "/design-sans-titre--18--2.png",
    },
    {
      title: "Extended Reality (XR)",
      description: "Immersive AR/VR/MR experiences that push boundaries.",
      image: "/design-sans-titre--20--2.png",
    },
  ];

  // Technology images
  const techImages = [
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
      image: "/placeholder.jpg", // Placeholder image
    },
    {
      name: "Wahid Laaleg",
      position: "Co-founder",
      description:
        "Tech-driven and solution-focused, turning bold ideas into real digital impact.",
      image: "/placeholder.jpg", // Placeholder image
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      image: "/placeholder.jpg", // Placeholder image
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      image: "/placeholder.jpg", // Placeholder image
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      image: "/placeholder.jpg", // Placeholder image
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What's your pricing model?",
      answer: "",
    },
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Absolutely. We support startups from ideation to launch—often helping build MVPs, pitch decks, and prototypes.",
    },
    {
      question: "How long does a typical project take?",
      answer: "",
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

  return (
    <div className="w-full bg-white overflow-hidden hidden md:block lg:hidden">
      {/* Navigation */}
      <header className="w-full py-8 px-12">
        <div className="flex justify-between items-center">
          <img
            className="w-[130px] h-[35px]"
            alt="SLTVerse Logo"
            src="/7652dd10-6e4a-4dbd-ad7b-769f5f3650cf-removebg-preview-1-1.png"
          />

          <nav className="hidden md:flex space-x-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="font-normal text-xs text-center text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button className="bg-[#564940] text-white text-xs font-semibold rounded-lg h-9 px-4">
            Book Appointment
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-16 px-12">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 relative">
            <img
              className="absolute top-0 right-0 w-[120px] h-[118px]"
              alt="Design element"
              src="/design-sans-titre--6--1-1.png"
            />
            <img
              className="absolute bottom-0 left-0 w-[181px] h-[155px]"
              alt="Design element"
              src="/design-sans-titre--7--2.png"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-6">
            <p className="font-semibold italic text-lg text-black text-center">
              Let&apos;s build the future together.
            </p>

            <h1 className="font-bold text-[45px] text-center">
              <span className="text-[#2b2b2b]">Empowering Your </span>
              <span className="text-[#c8ad92]">Vision</span>
              <span className="text-[#2b2b2b]"> with Digital Innovation</span>
            </h1>

            <p className="text-[15px] text-[#272727] text-center max-w-[556px]">
              At SLTVerse, we turn ideas into impactful digital solutions.
              <br /> From startups to institutions, we help build and scale with
              tech, creativity, and strategy.
            </p>

            <Button className="bg-[#564940] text-white text-sm font-semibold rounded-lg h-[33px] px-4 mt-4">
              Meet Our CEO
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <img
          className="absolute bottom-0 right-0 w-[108px] h-[119px]"
          alt="Design element"
          src="/design-sans-titre--9--1-1.png"
        />
      </section>

      {/* Scrolling Banner */}
      <div className="w-full h-[77px] bg-[#b89b84] flex items-center">
        <ScrollArea className="w-full h-6 bg-[#b89b84]">
          <div className="whitespace-nowrap px-12">
            <p className="text-xl font-bold text-white">
              Intelligence Artificielle&nbsp;&nbsp;&nbsp;&nbsp;
              -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Digitisation of
              processes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Chatbots
              4.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Extended
              realities
            </p>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* About Section */}
      <section className="w-full py-16 px-12 relative">
        <img
          className="absolute top-0 right-0 w-[78px] h-[41px]"
          alt="Design element"
          src="/design-sans-titre--12--1-1.png"
        />
        <img
          className="absolute top-4 right-[29px] w-[49px] h-[25px]"
          alt="Design element"
          src="/design-sans-titre--12--3-1.png"
        />
        <img
          className="absolute top-[84px] left-[41px] w-[130px] h-[18px]"
          alt="Design element"
          src="/design-sans-titre--12--2-1.png"
        />

        <div className="flex flex-col items-center mb-8">
          <p className="font-semibold italic text-lg text-black text-center">
            Efficiency, Scalability, and Agility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-solid border-[#a7b0ca] rounded-lg">
            <CardContent className="p-5 pt-12">
              <h2 className="text-[32px] font-bold text-[#2b2b2b] mb-4">
                Who is SLTVerse?
              </h2>
              <p className="text-[15px] text-[#272727]">
                SLTVerse is a{" "}
                <span className="font-bold text-[#443627]">
                  Moroccan tech partner
                </span>{" "}
                that helps businesses turn ideas into smart, scalable digital
                solutions. We work with{" "}
                <span className="font-semibold text-[#443627]">startups</span>,{" "}
                <span className="font-semibold text-[#443627]">companies</span>,
                and{" "}
                <span className="font-semibold text-[#443627]">
                  institutions
                </span>{" "}
                to build impactful products—fast and efficiently.
              </p>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-8">
            <img
              className="w-full h-[163px] object-cover rounded-lg"
              alt="Technology illustration"
              src="/istockphoto-1481370371-612x612-2-1.png"
            />

            <Card className="border border-solid border-[#a7b0ca] rounded-lg">
              <CardContent className="p-5 pt-12">
                <h2 className="text-[32px] font-bold text-[#2b2b2b] mb-4">
                  Our Mission
                </h2>
                <p className="text-[15px] text-[#272727]">
                  To drive digital transformation through innovative
                  technologies and tailored development. We help our partners{" "}
                  <span className="font-semibold text-[#443627]">build</span>,{" "}
                  <span className="font-semibold text-[#443627]">grow</span>,
                  and{" "}
                  <span className="font-semibold text-[#443627]">thrive</span>{" "}
                  in a connected, performance-driven world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <img
          className="w-full h-[163px] object-cover mt-8 rounded-lg md:w-1/2"
          alt="Technology illustration"
          src="/istockphoto-1346563167-612x612-1.png"
        />

        <img
          className="absolute bottom-0 left-[41px] w-[108px] h-[77px]"
          alt="Design element"
          src="/design-sans-titre--13--1-1.png"
        />
      </section>

      {/* Expertise Section */}
      <section className="w-full bg-[#b89b84] py-16 relative">
        <img
          className="w-[296px] h-[168px] absolute top-0 left-[223px] object-cover"
          alt="Design element"
          src="/design-sans-titre--15--2-2.png"
        />

        <div className="px-12 mb-12">
          <h2 className="text-[32px] font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-[15px] font-normal text-[#e5e4e4]">
            At SLTVerse, we combine creativity, technology, and strategy to
            deliver high-impact solutions
            <br />
            across key digital domains:
          </p>
        </div>

        <ScrollArea className="w-full px-12">
          <div className="flex space-x-6 pb-4">
            {expertiseCards.map((card, index) => (
              <Card
                key={index}
                className="min-w-[321px] h-[270px] border border-solid border-white rounded-lg bg-transparent"
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className="w-[93px] h-[81px] absolute top-0 left-0 object-cover"
                    alt={card.title}
                    src={card.image}
                  />
                  <div className="absolute bottom-8 left-4 right-4">
                    <h3 className="text-[28px] font-bold text-white mb-4">
                      {card.title}
                    </h3>
                    <p className="text-lg font-normal text-[#e5e4e4]">
                      {card.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        <img
          className="w-[313px] h-44 absolute bottom-0 right-[744px] object-cover"
          alt="Design element"
          src="/design-sans-titre--15--2-2.png"
        />
      </section>

      {/* Book Meeting Section */}
      <section className="w-full py-16 px-12 relative">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="font-semibold italic text-lg text-black mb-8">
            Let&apos;s bring your vision to life.
          </p>

          <h2 className="text-[32px] font-bold text-[#2b2b2b] mb-6 max-w-[670px]">
            Book a Meeting with Our Team
          </h2>

          <p className="text-[15px] text-[#272727] max-w-[635px]">
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
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            className="w-full md:w-1/2 h-auto"
            alt="Business people"
            src="/group-of-confident-business-people-point-to-graphs-2023-11-27-05-1.png"
          />

          <img
            className="w-full md:w-1/2 h-auto"
            alt="Handshake"
            src="/handshake-opt-1-1.png"
          />
        </div>

        <img
          className="w-full md:w-2/3 h-auto mt-8"
          alt="Programmer"
          src="/what-exactly-does-a-programmer-do-1-1.png"
        />

        <div className="flex justify-center mt-8">
          <Button className="bg-[#564940] text-white text-sm font-semibold rounded-lg h-[33px] px-8">
            Schedule a call today and let&apos;s build something great
            <ArrowRightIcon className="ml-2 h-6 w-6" />
          </Button>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-16">
        <div className="flex flex-col items-center text-center mb-12 px-12">
          <p className="font-semibold italic text-lg text-black mb-8">
            Modern tools. Scalable solutions. Future-ready products.
          </p>

          <h2 className="text-[32px] font-bold text-[#2b2b2b]">
            Technologies We Use
          </h2>
        </div>

        <ScrollArea className="w-full h-[206px] bg-[#b89b84]">
          <div className="flex space-x-6 p-0">
            {techImages.map((image, index) => (
              <img
                key={index}
                className="w-[214px] h-[206px] object-cover"
                alt={`Technology ${index + 1}`}
                src={image}
              />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Team Section */}
      <section className="w-full py-16 px-12">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="font-semibold italic text-lg text-black mb-8">
            Driven by innovation. Powered by people.
          </p>

          <h2 className="text-[32px] font-bold text-[#2b2b2b] mb-6">
            Meet the Team
          </h2>

          <p className="text-[15px] text-[#272727] max-w-[601px]">
            At SLTVerse, our strength lies in the diverse minds behind the
            solutions. <br />
            From <span className="font-bold text-[#443627]">developers</span>{" "}
            and <span className="font-bold text-[#443627]">designers</span> to{" "}
            <span className="font-bold text-[#443627]">strategists</span> and{" "}
            <span className="font-bold text-[#443627]">engineers</span>, we
            bring together passionate problem-solvers who thrive on turning
            ideas into impactful digital products.
          </p>
        </div>

        <ScrollArea className="w-full">
          <div className="flex space-x-6 pb-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="min-w-[220px]">
                <div className="w-[220px] h-[220px] bg-[#d9d9d9]"></div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[#272727] text-center">
                    {member.name}
                  </h3>
                  <p className="text-xl font-normal text-[#443627] text-center mt-1">
                    {member.position}
                  </p>
                  <p className="text-[15px] font-normal text-[#443627] mt-2">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 px-12 bg-[#f4e0cc] relative">
        <img
          className="absolute bottom-0 left-[258px] w-[279px] h-[243px]"
          alt="Design element"
          src="/faiss--1--2-1.png"
        />

        <img
          className="absolute top-[100px] right-[250px] w-[227px] h-[251px]"
          alt="Design element"
          src="/faiss--1--1-1.png"
        />

        <div className="flex flex-col items-center text-center mb-12">
          <p className="font-semibold italic text-lg text-black mb-8">
            Got questions? We&apos;ve got answers.
          </p>

          <h2 className="text-[32px] font-bold text-[#2b2b2b]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem
                value={`item-${index}`}
                className="bg-white rounded-lg border border-solid border-[#443627]"
              >
                <AccordionTrigger className="px-4 py-3 text-[15px] font-normal text-black">
                  {item.question}
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="px-4 pb-4 text-[13px] font-normal text-black">
                    {item.answer}
                  </AccordionContent>
                )}
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>

      {/* Career Section */}
      <section className="w-full py-16 px-12 flex justify-center">
        <Card className="w-full max-w-[600px] border border-solid border-[#443627] rounded-lg shadow-[0px_5px_10px_#00000033]">
          <CardContent className="p-6">
            <p className="font-semibold italic text-black mb-6">
              Build with purpose. Grow with us.
            </p>

            <p className="text-sm text-black mb-4">
              We&apos;re always on the lookout for passionate{" "}
              <span className="font-bold text-[#443627]">builders</span>,{" "}
              <span className="font-bold text-[#443627]">
                creative thinkers
              </span>
              , and{" "}
              <span className="font-bold text-[#443627]">curious minds</span>{" "}
              who want to shape the future of digital experiences.
            </p>

            <p className="text-sm font-light italic text-black mb-6">
              &quot;SLTVerse isn&apos;t just a workplace—it&apos;s a launchpad
              for impact.&quot; - Our CEO
            </p>

            <div className="flex justify-end">
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white pt-24 pb-6">
        <div className="container mx-auto px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            <div>
              <img
                className="w-[131px] h-[131px] object-cover mb-4"
                alt="SLTVerse Logo"
                src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-3.png"
              />
              <p className="text-sm">
                Empowering digital transformation through innovation and custom
                solutions.
              </p>
            </div>

            <div>
              <h3 className="text-[25px] font-bold mb-6">Explore</h3>
              <ul className="space-y-4 text-sm">
                <li>About Us</li>
                <li>Expertise</li>
                <li>Technologies</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-[25px] font-bold mb-6">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center">
                  <img
                    className="w-3.5 h-2.5 mr-2"
                    alt="Email"
                    src="/subtract-4.svg"
                  />
                  hello@sltverse.com
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[18px] h-[18px] mr-2"
                    alt="LinkedIn"
                    src="/icons8-linkedin-60-1-2.png"
                  />
                  SLTVerse
                </li>
                <li className="flex items-center">
                  <div className="w-[18px] h-[18px] mr-2">
                    <img
                      className="w-2.5 h-3"
                      alt="Location"
                      src="/subtract.svg"
                    />
                  </div>
                  Casablanca, Morocco
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-[25px] font-bold mb-6">Stay in the Loop</h3>
              <p className="text-sm mb-4">
                Subscribe to our newsletter and stay updated on new projects,
                insights, and opportunities.
              </p>
              <Button
                variant="outline"
                className="text-white border-white rounded-lg h-[30px] text-sm"
              >
                Subscribe
              </Button>
            </div>
          </div>

          <Separator className="bg-white mb-6" />

          <p className="text-base text-center">
            © 2025 SLTVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
