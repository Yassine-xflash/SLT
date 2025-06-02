import { ArrowRightIcon, MenuIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";

export const HomepagePhoneFinalByAnima = (): JSX.Element => {
  // FAQ data
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

  // Expertise data
  const expertiseItems = [
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

  // Team members data
  const teamMembers = [
    {
      name: "Sohaib Soussi",
      position: "CEO & Founder",
      description:
        "Leads with vision and purpose, driving innovation and client success at every stage.",
      image: "",
    },
    {
      name: "Wahid Laaleg",
      position: "Co-founder",
      description:
        "Tech-driven and solution-focused, turning bold ideas into real digital impact.",
      image: "",
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      image: "",
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      image: "",
    },
    {
      name: "Full name",
      position: "Position",
      description: "Description of the position",
      image: "",
    },
  ];

  // Technologies images
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

  return (
    <div className="w-full bg-white overflow-hidden">
      {/* Header */}
      <header className="w-full p-8 flex justify-between items-center">
        <MenuIcon className="w-9 h-9" />
        <Button className="bg-[#564940] rounded-lg h-7 px-2 text-[9px] font-semibold text-white">
          Book Appointment
        </Button>
      </header>

      {/* Hero Section */}
      <section className="relative w-full px-6 mt-16 flex flex-col items-center">
        <p className="text-[10px] font-semibold italic text-black text-center">
          Let&apos;s build the future together.
        </p>

        <h1 className="mt-12 font-bold text-xl text-center">
          <span className="text-[#2b2b2b]">Empowering Your </span>
          <span className="text-[#c8ad92]">Vision</span>
          <span className="text-[#2b2b2b]">
            {" "}
            <br />
            with Digital Innovation
          </span>
        </h1>

        <p className="mt-4 text-[11px] font-normal text-[#272727] text-center max-w-[333px]">
          At SLTVerse, we turn ideas into impactful digital solutions. From
          startups to institutions, we help build and scale with tech,
          creativity, and strategy.
        </p>

        <Button className="mt-6 bg-[#564940] rounded-lg h-7 text-[9px] font-semibold text-white flex items-center">
          Meet Our CEO
          <ArrowRightIcon className="ml-1 w-[18px] h-[18px]" />
        </Button>

        <img
          className="absolute w-[55px] h-[54px] top-0 right-0"
          alt="Design sans titre"
          src="/design-sans-titre--6--1-2.png"
        />

        <img
          className="absolute w-[52px] h-[57px] bottom-0 right-0"
          alt="Design sans titre"
          src="/design-sans-titre--9--1-2.png"
        />

        <img
          className="absolute w-[76px] h-[53px] bottom-0 left-0"
          alt="Design sans titre"
          src="/design-sans-titre--7--2-1.png"
        />
      </section>

      {/* Scrolling Banner */}
      <div className="w-full bg-[#b89b84] mt-16 py-2.5">
        <ScrollArea className="w-full">
          <div className="text-[10px] font-bold text-white whitespace-nowrap px-4">
            Intelligence Artificielle&nbsp;&nbsp;&nbsp;&nbsp;
            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Digitisation of
            processes&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Chatbots
            4.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Extended
            realities
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* About Section */}
      <section className="w-full px-6 mt-16">
        <p className="text-[10px] font-semibold italic text-black text-center">
          Efficiency, Scalability, and Agility.
        </p>

        <div className="mt-16 flex flex-col gap-6">
          <div className="flex gap-4">
            <Card className="w-full border border-solid border-[#a7b0ca] rounded-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-[#2b2b2b] font-['Piazzolla',Helvetica]">
                  Who is SLTVerse?
                </h2>
                <p className="mt-4 text-[11px] text-[#272727]">
                  SLTVerse is a{" "}
                  <span className="font-bold text-[#443627]">
                    Moroccan tech partner
                  </span>{" "}
                  that helps businesses turn ideas into smart, scalable digital
                  solutions. We work with{" "}
                  <span className="font-semibold text-[#443627]">startups</span>
                  ,{" "}
                  <span className="font-semibold text-[#443627]">
                    companies
                  </span>
                  , and{" "}
                  <span className="font-semibold text-[#443627]">
                    institutions
                  </span>{" "}
                  to build impactful products—fast and efficiently.
                </p>
              </CardContent>
            </Card>

            <img
              className="w-[98px] h-[205px]"
              alt="Istockphoto"
              src="/istockphoto-1481370371-612x612-2-2.png"
            />
          </div>

          <div className="flex gap-4">
            <img
              className="w-[98px] h-[205px]"
              alt="Istockphoto"
              src="/istockphoto-1346563167-612x612-2.png"
            />

            <Card className="w-full border border-solid border-[#a7b0ca] rounded-lg">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-[#2b2b2b] font-['Piazzolla',Helvetica]">
                  Our Mission
                </h2>
                <p className="mt-4 text-[11px] text-[#272727]">
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
          className="w-[57px] h-4 mt-4"
          alt="Design sans titre"
          src="/design-sans-titre--12--2-2.png"
        />

        <img
          className="w-[75px] h-[60px] mt-16"
          alt="Design sans titre"
          src="/design-sans-titre--13--1-2.png"
        />
      </section>

      {/* Expertise Section */}
      <section className="w-full mt-16 bg-[#b89b84] py-16 relative">
        <img
          className="w-[125px] h-[70px] absolute top-0 left-0"
          alt="Design sans titre"
          src="/design-sans-titre--15--2-2.png"
        />

        <img
          className="w-[131px] h-[73px] absolute bottom-0 right-8"
          alt="Design sans titre"
          src="/design-sans-titre--15--2-2.png"
        />

        <div className="px-8">
          <h2 className="text-xl font-bold text-white font-['Piazzolla',Helvetica]">
            Our Expertise
          </h2>

          <p className="mt-2 text-[11px] text-[#e5e4e4]">
            At SLTVerse, we combine creativity, technology, and strategy to
            deliver high-impact solutions across key digital domains:
          </p>
        </div>

        <ScrollArea className="w-full mt-6 px-8">
          <div className="flex gap-4">
            {expertiseItems.map((item, index) => (
              <div
                key={index}
                className="min-w-[165px] h-[177px] relative rounded-lg border border-solid border-white"
              >
                <img
                  className="w-[45px] h-[65px] absolute top-0 left-0 object-cover"
                  alt={item.title}
                  src={item.image}
                />
                <div className="absolute bottom-6 left-2 right-2">
                  <h3 className="text-[15px] font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[11px] text-[#e5e4e4]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* Book Meeting Section */}
      <section className="w-full px-8 mt-16 text-center">
        <p className="text-[10px] font-semibold italic text-black">
          Let&apos;s bring your vision to life.
        </p>

        <h2 className="mt-16 text-xl font-bold text-[#2b2b2b] font-['Piazzolla',Helvetica]">
          Book a Meeting with Our Team
        </h2>

        <p className="mt-4 text-[11px] text-[#272727]">
          Whether you&apos;re starting a new project or scaling an existing one,
          our team is here to guide you with a blend of{" "}
          <span className="font-bold text-[#443627]">expertise</span>,{" "}
          <span className="font-bold text-[#443627]">creative</span>{" "}
          <span className="font-bold text-[#443627]">technology</span>, and{" "}
          <span className="font-bold text-[#443627]">
            deep industry knowledge
          </span>
          .
        </p>

        <div className="mt-8 flex justify-center">
          <Button className="bg-[#564940] rounded-lg h-7 text-[9px] font-semibold text-white flex items-center">
            Schedule a call today
            <ArrowRightIcon className="ml-1 w-[18px] h-[18px]" />
          </Button>
        </div>

        <div className="mt-8 flex justify-between">
          <img
            className="w-[193px] h-[90px]"
            alt="Group of confident"
            src="/group-of-confident-business-people-point-to-graphs-2023-11-27-05-2.png"
          />

          <img
            className="w-[98px] h-[172px]"
            alt="Handshake opt"
            src="/handshake-opt-1-2.png"
          />
        </div>

        <img
          className="mt-4 w-[214px] h-[99px]"
          alt="What exactly does a"
          src="/what-exactly-does-a-programmer-do-1-2.png"
        />
      </section>

      {/* Technologies Section */}
      <section className="w-full mt-16">
        <div className="text-center">
          <p className="text-[10px] font-semibold italic text-black">
            Modern tools. Scalable solutions. Future-ready products.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#2b2b2b] font-['Piazzolla',Helvetica]">
            Technologies We Use
          </h2>
        </div>

        <div className="mt-6 w-full bg-[#b89b84] py-4">
          <ScrollArea className="w-full">
            <div className="flex gap-3">
              {techImages.map((image, index) => (
                <img
                  key={index}
                  className="w-[106px] h-[111px] object-cover"
                  alt={`Technology ${index + 1}`}
                  src={image}
                />
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full px-8 mt-16">
        <div className="text-center">
          <p className="text-[10px] font-semibold italic text-black">
            Driven by innovation. Powered by people.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#2b2b2b] font-['Piazzolla',Helvetica]">
            Meet the Team
          </h2>

          <p className="mt-4 text-[11px] text-[#272727]">
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

        <ScrollArea className="w-full mt-8">
          <div className="flex gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="min-w-[150px]">
                <div className="w-[150px] h-[150px] bg-[#d9d9d9]" />
                <div className="mt-4">
                  <h3 className="text-[15px] font-bold text-[#272727]">
                    {member.name}
                  </h3>
                  <p className="text-base text-[#443627]">{member.position}</p>
                  <p className="mt-2 text-[11px] text-black">
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
      <section className="w-full mt-16 bg-[#f4e0cc] py-16 relative">
        <img
          className="absolute w-[146px] h-[136px] bottom-8 left-0"
          alt="Faiss"
          src="/faiss--1--2-2.png"
        />

        <img
          className="absolute w-40 h-[140px] top-16 right-8"
          alt="Faiss"
          src="/faiss--1--1-2.png"
        />

        <div className="text-center px-8">
          <p className="text-[10px] font-semibold italic text-black">
            Got questions? We&apos;ve got answers.
          </p>

          <h2 className="mt-8 text-xl font-bold text-[#2b2b2b] font-['Piazzolla',Helvetica]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-8 px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-solid border-[#443627]"
              >
                <AccordionTrigger className="px-4 py-2 text-[11px] font-normal text-black">
                  {item.question}
                </AccordionTrigger>
                {item.answer && (
                  <AccordionContent className="px-4 pb-3 text-[11px] text-black">
                    {item.answer}
                  </AccordionContent>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Careers Card */}
      <section className="w-full px-8 mt-16">
        <Card className="w-full border border-solid border-[#443627] rounded-lg shadow-[0px_5px_10px_#00000033]">
          <CardContent className="p-6">
            <p className="text-[11px] text-black">
              Build with purpose. Grow with us.
              <br />
              <br />
              We&apos;re always on the lookout for passionate{" "}
              <span className="font-bold text-[#443627]">builders</span>,{" "}
              <span className="font-bold text-[#443627]">
                creative thinkers
              </span>
              , and{" "}
              <span className="font-bold text-[#443627]">curious minds </span>
              who want to shape the future of digital experiences.
            </p>

            <p className="mt-4 text-[11px] text-black">
              <span className="font-light italic">
                &quot;SLTVerse isn&apos;t just a workplace—it&apos;s a launchpad
                for impact.&quot;{" "}
              </span>
              <span>- Our CEO</span>
            </p>

            <div className="absolute top-16 right-3">
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="w-full mt-16 bg-black text-white pt-16 pb-8">
        <div className="px-8">
          <div className="flex flex-col items-center">
            <img
              className="w-[131px] h-[31px]"
              alt="SLTVerse Logo"
              src="/whatsapp-image-2025-05-27-at-12-04-36-removebg-preview-2-2.png"
            />

            <p className="mt-4 text-sm text-center">
              Empowering digital transformation through innovation and custom
              solutions.
            </p>
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold font-['Piazzolla',Helvetica]">
              Stay in the Loop
            </h3>

            <div className="mt-4 flex justify-between items-center">
              <p className="text-[11px]">
                Subscribe to our newsletter and stay updated on new projects,
                insights, and opportunities.
              </p>

              <Button
                variant="outline"
                className="h-[30px] rounded-lg border-white text-[11px]"
              >
                Subscribe
              </Button>
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex space-x-4">
              <div className="w-[25px] h-[25px]">
                <img
                  className="w-[19px] h-[15px] mt-[5px] ml-[3px]"
                  alt="Email"
                  src="/subtract-2.svg"
                />
              </div>

              <div className="w-[25px] h-[25px]">
                <div className="relative w-[17px] h-[21px] mt-0.5 ml-1">
                  <img
                    className="w-[15px] h-[17px]"
                    alt="Phone"
                    src="/subtract.svg"
                  />
                  <img
                    className="w-[17px] h-[7px] mt-3.5"
                    alt="Phone"
                    src="/ellipse-40.svg"
                  />
                </div>
              </div>

              <img
                className="w-[25px] h-[25px]"
                alt="LinkedIn"
                src="/icons8-linkedin-60-1-2.png"
              />
            </div>
          </div>

          <div className="mt-8 text-center">
            <h3 className="text-xl font-bold font-['Piazzolla',Helvetica]">
              Explore
            </h3>

            <p className="mt-4 text-[11px]">
              About
              Us&nbsp;&nbsp;|&nbsp;&nbsp;Expertise&nbsp;&nbsp;|&nbsp;&nbsp;Technologies&nbsp;&nbsp;|&nbsp;&nbsp;Contact
            </p>
          </div>

          <Separator className="mt-8 bg-white" />

          <p className="mt-4 text-[11px] text-center">
            © 2025 SLTVerse. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
