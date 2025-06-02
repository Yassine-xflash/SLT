import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";
import { Separator } from "../../../../components/ui/separator";

export const HomepageDesktopByAnima = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { label: "Home", href: "#" },
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
      imageSrc: "/design-sans-titre--16--2.png",
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
      imagePlaceholder: true,
    },
    {
      name: "Wahid Laaleg",
      position: "Co-founder",
      description:
        "Tech-driven and solution-focused, turning bold ideas into real digital impact.",
      imagePlaceholder: true,
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      imagePlaceholder: true,
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      imagePlaceholder: true,
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      imagePlaceholder: true,
    },
  ];

  // FAQ items
  const faqItems = [
    {
      question: "What's your pricing model?",
      answer: "",
      isOpen: false,
    },
    {
      question: "How long does a typical project take?",
      answer: "",
      isOpen: false,
    },
    {
      question: "Do you work with early-stage startups?",
      answer:
        "Absolutely. We support startups from ideation to launch—often helping build MVPs, pitch decks, and prototypes.",
      isOpen: true,
    },
    {
      question: "Who owns the final product?",
      answer: "",
      isOpen: false,
    },
    {
      question: "Can you work with our existing team?",
      answer: "",
      isOpen: false,
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Navigation Bar */}
      <header className="w-full py-6 px-12">
        <div className="flex items-center justify-between">
          <img
            className="w-[141px] h-[38px]"
            alt="SLTVerse Logo"
            src="/7652dd10-6e4a-4dbd-ad7b-769f5f3650cf-removebg-preview-1.png"
          />

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

          <Button className="bg-[#564940] text-white rounded-lg h-9 px-4 [font-family:'Open_Sans',Helvetica] font-semibold text-[15px]">
            Book Appointment
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full py-20">
        <div className="flex flex-col items-center justify-center relative z-10">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-xl text-center mb-6">
            Let&apos;s build the future together.
          </p>

          <h1 className="[font-family:'Piazzolla',Helvetica] font-bold text-[55px] text-center max-w-3xl mb-8">
            <span className="text-[#2b2b2b]">Empowering Your </span>
            <span className="text-[#c8ad92]">Vision</span>
            <span className="text-[#2b2b2b]"> with Digital Innovation</span>
          </h1>

          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-xl text-center max-w-2xl mb-10">
            At SLTVerse, we turn ideas into impactful digital solutions.
            <br /> From startups to institutions, we help build and scale with
            tech, creativity, and strategy.
          </p>

          <Button className="bg-[#564940] text-white rounded-lg h-10 px-6 [font-family:'Open_Sans',Helvetica] font-semibold text-base">
            Meet Our CEO
            <img
              className="w-6 h-6 ml-2"
              alt="Arrow right"
              src="/arrow-right.svg"
            />
          </Button>
        </div>

        {/* Decorative Images */}
        <div className="absolute inset-0 -z-10">
          <img
            className="absolute w-[221px] h-[185px] bottom-0 left-[10%]"
            alt="Decorative element"
            src="/design-sans-titre--7--1.png"
          />
          <img
            className="absolute w-[171px] h-[169px] top-0 right-0"
            alt="Decorative element"
            src="/design-sans-titre--6--1.png"
          />
          <img
            className="absolute w-[163px] h-[179px] bottom-0 right-0"
            alt="Decorative element"
            src="/design-sans-titre--9--1.png"
          />
        </div>
      </section>

      {/* Services Banner */}
      <div className="w-full bg-[#b89b84] py-6">
        <p className="[font-family:'Open_Sans',Helvetica] font-bold text-white text-[22px] text-center">
          Intelligence
          Artificielle&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Digitisation of
          processes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Chatbots
          4.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Extended realities
        </p>
      </div>

      {/* About Section */}
      <section className="w-full py-20 relative">
        <div className="max-w-6xl mx-auto">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-xl text-center mb-8">
            Efficiency, Scalability, and Agility.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <Card className="w-[453px] h-[340px] border border-solid border-[#a7b0ca] rounded-lg">
              <CardContent className="p-7 pt-14">
                <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-[35px] mb-4">
                  Who is SLTVerse?
                </h2>
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-xl">
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

            <div className="flex flex-col gap-8">
              <img
                className="w-[453px] h-[137px] object-cover"
                alt="Technology illustration"
                src="/istockphoto-1481370371-612x612-2.png"
              />

              <Card className="w-[453px] h-[340px] border border-solid border-[#a7b0ca] rounded-lg">
                <CardContent className="p-7 pt-12">
                  <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-[35px] mb-4">
                    Our Mission
                  </h2>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-xl">
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

          <img
            className="w-[453px] h-[137px] mt-8"
            alt="Technology illustration"
            src="/istockphoto-1346563167-612x612.png"
          />
        </div>

        {/* Decorative elements */}
        <img
          className="absolute w-[106px] h-[102px] bottom-0 left-[5%]"
          alt="Decorative element"
          src="/design-sans-titre--13--1.png"
        />
        <div className="absolute top-0 right-[10%]">
          <img
            className="w-[81px] h-[33px]"
            alt="Decorative element"
            src="/design-sans-titre--12--1.png"
          />
          <img
            className="w-[52px] h-[33px] ml-7 -mt-4"
            alt="Decorative element"
            src="/design-sans-titre--12--3.png"
          />
        </div>
        <img
          className="absolute w-[115px] h-6 top-[92px] left-[5%]"
          alt="Decorative element"
          src="/design-sans-titre--12--2.png"
        />
      </section>

      {/* Expertise Section */}
      <section className="w-full bg-[#b89b84] py-20 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-white text-[55px] mb-4">
            Our Expertise
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#e5e4e4] text-xl mb-12 max-w-3xl">
            At SLTVerse, we combine creativity, technology, and strategy to
            deliver high-impact solutions across key digital domains:
          </p>

          <div className="flex overflow-x-auto pb-4 gap-6">
            {expertiseCards.map((card, index) => (
              <Card
                key={index}
                className="min-w-[321px] h-[345px] rounded-lg border border-solid border-white bg-transparent"
              >
                <CardContent className="p-0 relative h-full">
                  <img
                    className="w-[93px] h-[104px] object-cover"
                    alt="Service icon"
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

        {/* Decorative elements */}
        <img
          className="absolute top-0 left-0 w-[299px] h-[168px] object-cover"
          alt="Decorative element"
          src="/design-sans-titre--15--2-2.png"
        />
        <img
          className="absolute bottom-0 right-0 w-[313px] h-44 object-cover"
          alt="Decorative element"
          src="/design-sans-titre--15--2-2.png"
        />
      </section>

      {/* Book Meeting Section */}
      <section className="w-full py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-xl mb-6">
            Let&apos;s bring your vision to life.
          </p>

          <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-5xl mb-6">
            Book a Meeting with Our Team
          </h2>

          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-xl mb-10">
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

          <Button className="bg-[#564940] text-white rounded-lg h-10 px-6 w-[566px] [font-family:'Open_Sans',Helvetica] font-semibold text-base">
            Schedule a call today and let&apos;s build something great
            <img
              className="w-6 h-6 ml-auto"
              alt="Arrow right"
              src="/arrow-right.svg"
            />
          </Button>
        </div>

        <div className="relative mt-12 max-w-5xl mx-auto">
          <img
            className="w-[634px] h-[293px]"
            alt="Programmers working"
            src="/what-exactly-does-a-programmer-do-1.png"
          />
          <img
            className="absolute top-[-280px] right-0 w-[245px] h-[428px]"
            alt="Handshake"
            src="/handshake-opt-1.png"
          />
          <img
            className="absolute top-[-400px] left-[5%] w-[498px] h-[232px]"
            alt="Business people"
            src="/group-of-confident-business-people-point-to-graphs-2023-11-27-05.png"
          />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="w-full py-20">
        <div className="text-center mb-12">
          <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-xl mb-6">
            Modern tools. Scalable solutions. Future-ready products.
          </p>
          <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-[45px]">
            Technologies We Use
          </h2>
        </div>

        <div className="w-full bg-[#b89b84] py-12 overflow-x-auto">
          <div className="flex gap-6 min-w-max px-12">
            {techLogos.map((logo, index) => (
              <img
                key={index}
                className="w-[214px] h-[206px] object-cover"
                alt={`Technology logo ${index + 1}`}
                src={logo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-xl mb-6">
              Driven by innovation. Powered by people.
            </p>
            <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-[45px] mb-6">
              Meet the Team
            </h2>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#272727] text-xl max-w-3xl mx-auto">
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

          <div className="flex flex-wrap justify-center gap-10 mt-16">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-[220px]">
                <div className="w-[220px] h-[220px] bg-[#d9d9d9] mb-4"></div>
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
      <section className="w-full bg-[#f3e0cc] py-20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-xl mb-6">
              Got questions? We&apos;ve got answers.
            </p>
            <h2 className="[font-family:'Piazzolla',Helvetica] font-bold text-[#2b2b2b] text-[45px]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqItems.map((faq, index) => (
              <Accordion
                key={index}
                type="single"
                collapsible
                className="w-full"
              >
                <AccordionItem value={`item-${index}`} className="border-none">
                  <Card className="rounded-lg border border-solid border-[#2b2b2b] bg-white">
                    <AccordionTrigger className="px-6 py-4 [font-family:'Open_Sans',Helvetica] font-normal text-black text-xl">
                      {faq.question}
                    </AccordionTrigger>
                    {faq.answer && (
                      <AccordionContent className="px-6 pb-4">
                        <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-base">
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

        {/* Decorative elements */}
        <img
          className="absolute bottom-0 left-[5%] w-[369px] h-[321px]"
          alt="Decorative element"
          src="/faiss--1--2.png"
        />
        <img
          className="absolute top-[15%] right-[5%] w-[369px] h-[321px]"
          alt="Decorative element"
          src="/faiss--1--1.png"
        />
      </section>

      {/* Careers Card */}
      <section className="w-full py-20">
        <Card className="max-w-4xl mx-auto rounded-lg border border-solid border-[#2b2b2b] shadow-[0px_5px_10px_#00000033] p-10">
          <CardContent className="p-0">
            <p className="[font-family:'Open_Sans',Helvetica] font-semibold italic text-black text-lg mb-6">
              Build with purpose. Grow with us.
            </p>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-black text-lg mb-6">
              We&apos;re always on the lookout for passionate{" "}
              <span className="font-bold text-[#443627]">builders</span>,{" "}
              <span className="font-bold text-[#443627]">
                creative thinkers
              </span>
              , and{" "}
              <span className="font-bold text-[#443627]">curious minds</span>{" "}
              who want to shape the future of digital experiences.
            </p>
            <p className="[font-family:'Open_Sans',Helvetica] font-light italic text-black text-base mb-6">
              &quot;SLTVerse isn&apos;t just a workplace—it&apos;s a launchpad
              for impact.&quot; - Our CEO
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full bg-black text-white pt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-4 gap-8 pb-12">
          <div className="col-span-1">
            <img
              className="w-[220px] h-[220px] object-cover mb-4"
              alt="SLTVerse Logo"
              src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-3.png"
            />
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base">
              Empowering digital transformation through innovation and custom
              solutions.
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Piazzolla',Helvetica] font-bold text-white text-[35px] mb-6">
              Explore
            </h3>
            <ul className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base space-y-4">
              <li>About Us</li>
              <li>Expertise</li>
              <li>Technologies</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Piazzolla',Helvetica] font-bold text-white text-[35px] mb-6">
              Contact
            </h3>
            <div className="flex items-center mb-4">
              <img
                className="w-6 h-6 mr-2"
                alt="Email icon"
                src="/subtract-2.svg"
              />
            </div>
            <div className="flex items-center mb-4">
              <img
                className="w-6 h-6 mr-2"
                alt="LinkedIn icon"
                src="/icons8-linkedin-60-1-2.png"
              />
            </div>
            <div className="flex items-center">
              <div className="w-6 h-6 mr-2">
                <img
                  className="w-3.5 h-4 ml-1 mt-0.5"
                  alt="Social icon"
                  src="/subtract.svg"
                />
                <img
                  className="w-4 h-1.5 ml-1 -mt-1"
                  alt="Social icon part"
                  src="/ellipse-40.svg"
                />
              </div>
            </div>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base mt-6">
              hello@sltverse.com
              <br />
              <br />
              SLTVerse
              <br />
              <br />
              Casablanca, Morocco
            </p>
          </div>

          <div className="col-span-1">
            <h3 className="[font-family:'Piazzolla',Helvetica] font-bold text-white text-[35px] mb-6">
              Stay in the Loop
            </h3>
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base mb-6">
              Subscribe to our newsletter and stay updated on new projects,
              insights, and opportunities.
            </p>
            <Button
              variant="outline"
              className="text-white border-white rounded-lg h-9 [font-family:'Open_Sans',Helvetica] font-normal text-base"
            >
              Subscribe
            </Button>
          </div>
        </div>

        <Separator className="bg-white" />

        <div className="py-4 text-center">
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-white text-base">
            © 2025 SLTVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
