"use client";
import { motion, useScroll, useTransform } from "framer-motion";
// import { NavigationMenuDemo } from "./NavigationButton";
import { Card, Carousel } from "./ui/apple-cards-carousel";
import Image from "next/image";
import FilmSection from "./FilmSection";
// import CodeProject from "./CodeProjects";
import { MacbookScroll } from "./ui/macbook-scroll";
import { NavigationMenuDemo } from "./NavigationButton";
import { useEffect, useRef } from "react";
import CircleCarousel from "./CircleCarousel";
import About from "./About";

export default function Creative() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const circleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);
  const nextDivRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to scale values for the circle
  const circleScale = useTransform(scrollYProgress, [0.56, 0.58], [1, 150]);
  const innerCircleScale = useTransform(
    scrollYProgress,
    [0.56, 0.58],
    [1, 100]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (!techSectionRef.current || !nextDivRef.current) return;

      const sectionTop = techSectionRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.1) {
        nextDivRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="design" className="rounded-t-3xl w-full  mx-auto bg-transparent">
      <div className="w-full">
        {/* creative section */}
        <div className=" w-full ">
          <div className="max-w-screen-2xl w-11/12 mx-auto">
            <motion.div
              // initial={{ y: -100 }}
              // whileInView={{ y: 0 }}
              // transition={{ duration: 0.5 }}
              className="w-full"
            >
              <h1 className="text-[#292929] lg:text-[60px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash ">
                Designs that speak louder than words
              </h1>
              <h2 className="text-[#292929] lg:text-[30px] text-[20px] mx-auto leading-none text-center font-clash mt-5">
                From bold ideas to beautiful executions, we craft visuals that
                inspire
              </h2>
            </motion.div>
            <div className="mt-5 w-full flex justify-end">
              <NavigationMenuDemo />
            </div>
            <div className="w-full">
              {/* <Carousel items={cards} /> */}
              <Carousel items={cards} />
            </div>
          </div>
          {/* Tech section */}
          <div className="w-12/12 mx-auto">
            {/* <TechSection /> */}
            <div
              id="tech"
              className="overflow-hidden dark:bg-[#0B0B0F] w-full relative overflow-y-auto snap-y snap-mandatory"
            >
              <div className="absolute inset-0 flex justify-center -z-10 pt-[500px]">
                <motion.div
                  ref={circleRef}
                  className=""
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    // backgroundColor: "#e5e7eb",
                    backgroundColor: "#FFF",
                    display: "flex",
                    scale: circleScale,
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 999,
                  }}
                >
                  <motion.div
                    ref={innerCircleRef}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      backgroundColor: "Black",
                      // opacity: "90%",
                      scale: innerCircleScale,
                    }}
                  ></motion.div>
                </motion.div>
              </div>
              <div className="w-full hidden sm:block snap-end">
                <MacbookScroll
                  src={`/1739448852325344.mp4`}
                  showGradient={false}
                />
              </div>
            </div>
            {/* <HorizontalScrollCarousel /> */}
          </div>
        </div>
        <div ref={nextDivRef} className=" w-full bg-black">
          <CircleCarousel />
        </div>
        {/* Film making Section */}
        <div
          id="film"
          className="w-full bg-gradient-to-b from-black via-[#0C0807] to-[#130C0B]"
        >
          <div className="max-w-screen-2xl w-11/12 mx-auto rounded-3xl z-50">
            <FilmSection />
          </div>
        </div>
        <div className="z-50 w-full bg-gradient-to-b from-[#000] via-[#130C0B] to-[#0C0807]">
          <About />
        </div>
      </div>
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/images/1696858826722.jpg"
              // src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/21 DESIGN MINIMAL INDIAN .jpg",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/CARD 30 DESIGN MINIMAL INDIAN  copy.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/CARD 9 DESIGN MINIMAL INDIAN .jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: <DummyContent />,
  },
];
