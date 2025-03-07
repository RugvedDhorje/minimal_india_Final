"use client";
// import { useScroll, useTransform } from "framer-motion";
// import { NavigationMenuDemo } from "./NavigationButton";
// import Image from "next/image";
import FilmSection from "./FilmSection";
// import CodeProject from "./CodeProjects";
// import { MacbookScroll } from "./ui/macbook-scroll";
// import { NavigationMenuDemo } from "./NavigationButton";
import { useEffect, useRef } from "react";
// import CircleCarousel from "./CircleCarousel";
import About from "./About";
// import { CompanyLogo } from "./CompanyLogos";

export default function Creative() {
  // const circleRef = useRef(null);
  // const innerCircleRef = useRef(null);
  const techSectionRef = useRef<HTMLDivElement | null>(null);
  const nextDivRef = useRef<HTMLDivElement | null>(null);
  // const { scrollYProgress } = useScroll();

  // Map scroll progress to scale values for the circle
  // const circleScale = useTransform(scrollYProgress, [0.45, 0.47], [1, 150]);
  // const innerCircleScale = useTransform(
  // scrollYProgress,
  // [0.45, 0.47],
  // [1, 100]
  // );

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
          {/* Tech section */}
          <div className="w-12/12 mx-auto">
            {/* <TechSection /> */}
            {/* <div
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
              <div className="w-full hidden sm:block snap-end overflow-hidden">
                <MacbookScroll
                  src={`/1739448852325344.mp4`}
                  showGradient={false}
                />
                <CircleCarousel />
              </div>
            </div> */}
            {/* <HorizontalScrollCarousel /> */}
          </div>
        </div>
        <div ref={nextDivRef} className=" w-full bg-black"></div>
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

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="/images/1696858826722.jpg"
//               // src="https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };
