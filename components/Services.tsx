"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import { Card, Carousel } from "./ui/apple-cards-carousel";
import DesignCards from "./DesignCards";
// import { Design } from "./Design";

export default function Services() {
  // const cards = data.map((card, index) => (
  //   <Card key={card.src} card={card} index={index} />
  // ));
  const circleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to scale values for the circle
  const circleScale = useTransform(scrollYProgress, [0.19, 0.37], [1, 150]);
  const innerCircleScale = useTransform(scrollYProgress, [0.2, 0.37], [1, 4.5]);
  // [1,4.5]
  //  New opacity transform for the section that should fade in
  const sectionOpacity = useTransform(
    scrollYProgress,
    [0.23, 0.25], // Adjust these values to control when the fade happens
    [0, 1] // Start at opacity 0, end at opacity 1
  );
  // Blur transform that decreases as opacity increases
  const sectionBlur = useTransform(
    scrollYProgress,
    [0.2, 0.25], // Same values as opacity for synchronized effect
    [10, 0] // Start with blur 10px, end with no blur
  );
  // Create a string transform for the blur filter
  const blurFilter = useTransform(sectionBlur, (value) => `blur(${value}px)`);
  return (
    <div className="relative w-full h-auto">
      {/* Sticky Section */}
      <motion.div className="w-full mx-auto rounded-t-3xl overflow-hidden pb-[100px]">
        <motion.h1
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-[85px] md:text-[70px] text-[40px] mt-10 sm:mt-0 px-2 sm:px-0 font-bold text-gray-900 leading-none sm:pt-[50px]  pb-[70px]"
        >
          We are the ones you are looking for,
          <br /> not what you expected.
        </motion.h1>

        <div className="max-w-screen-2xl w-9/12 sm:w-full lg:w-9/12 mx-auto sm:flex sm:flex-wrap mb-10 relative ">
          {/* Circle in the middle */}
          <div className="absolute inset-0 sm:flex items-center justify-center hidden  pointer-events-none z-30">
            <motion.div
              className="z-40"
              ref={circleRef}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#FFBA01",
                display: "flex",
                scale: circleScale,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                ref={innerCircleRef}
                className="-z-10"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  scale: innerCircleScale,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Content Divs */}
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0  mb-[50px] sm:mb-0 ">
            <div className="lg:py-[90px] md:p-[80px] w-full mr-5 sm:border-r sm:border-b sm:border-gray-700 rounded-br-[70px]">
              <motion.h4
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[30px] text-[24px] text-center font-semibold mb-2"
              >
                IMAGINE
              </motion.h4>
              <motion.div
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[18px] sm:text-[14px] text-[14px] font-light flex flex-wrap justify-center items-center gap-x-6 gap-y-3"
              >
                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Brand Identity</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Graphic Design</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Illustration</span>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Campaign Design</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Creative Visualisation</span>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Packaging Design</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>CGI</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>ReThinking</span>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0  mb-[50px] sm:mb-0 ">
            <div className="lg:py-[100px] md:p-[80px] w-full mx-auto ">
              <motion.h4
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[30px] text-[24px] text-center font-semibold mb-2"
              >
                EXPERIENCE
              </motion.h4>
              <motion.div
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[18px] text-[14px] font-light flex flex-wrap justify-center items-center gap-x-6 gap-y-3"
              >
                {/* Grouping three divs per row */}
                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Web Design</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Landing Pages</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>UI/UX</span>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>E-commerce</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>CMS</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>SEO Optimization</span>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Email Marketing</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>ReDesigning</span>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0  mb-[50px] sm:mb-0">
            <div className="sm:py-[100px] w-full mx-auto">
              <motion.h4
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[30px] text-[24px] text-center font-semibold"
              >
                INNOVATE
              </motion.h4>
              <motion.div
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[18px] text-[14px] font-light flex flex-wrap justify-center items-center gap-x-6 gap-y-3"
              >
                <div className="flex justify-center items-center space-x-1 md:space-x-6">
                  <span>App Development</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Web Development</span>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Blockchain</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Cloud Computing</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Cybersecurity</span>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Implementation</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Automation</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>ReDevelopment</span>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0  mb-[50px] sm:mb-0">
            <div className="lg:py-[90px] md:p-[80px] w-full  md:mx-5 sm:border-l sm:border-t sm:border-gray-700 rounded-tl-[70px]">
              <motion.h4
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="md:text-[30px] text-[24px] text-center font-semibold"
              >
                CAPTIVATE
              </motion.h4>
              <motion.div
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="md:text-[18px] text-[14px] w-full font-light flex flex-wrap justify-center items-center gap-x-6 gap-y-3"
              >
                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Corporate Videos</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Commercials</span>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Documentaries</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Animation</span>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Motion Graphics</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Virtual Production</span>
                </div>

                <div className="flex justify-center items-center space-x-1 md:space-x-3">
                  <span>Storytelling</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>Visualization</span>
                  <span className="w-[4px] h-[4px] rounded-full bg-current inline-block"></span>
                  <span>ReCreation</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        {/* <div id="design" className="w-full mx-auto"> */}
        <motion.div
          id="design"
          style={{
            opacity: sectionOpacity,
            filter: blurFilter, // Use the transformed string value
            // filter: `blur(${sectionBlur}px)`,
            // filter: `blur(10px)`,
          }}
          className="max-w-screen-2xl w-11/12 mx-auto sm:-mt-[200px] relative z-30 "
        >
          <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            {/* <h1 className="text-[#292929] lg:text-[60px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash ">
                        Designs that speak louder than words
                      </h1> */}
            <h1 className="text-[#292929] lg:text-[60px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash relative z-30 pt-24">
              Designs that{" "}
              <span
                className="bg-gradient-to-r from-[#0e0844]  to-[#380935] lg:text-[60px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash relative 
                         text-transparent bg-clip-text 
                          cursor-pointer"
              >
                speak louder
              </span>{" "}
              than words
            </h1>
            <h2 className="text-[#292929] lg:text-[30px] text-[20px] mx-auto leading-none text-center font-clash mt-5 relative z-30">
              From bold ideas to beautiful executions, we craft visuals that
              inspire
            </h2>
          </motion.div>
          <div className="mt-5 w-full flex justify-end">
            {/* <NavigationMenuDemo /> */}
          </div>
          <motion.div
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full z-30"
          >
            {/* <Carousel items={cards} /> */}
            <DesignCards />
          </motion.div>
        </motion.div>
        {/* </div> */}
      </motion.div>
    </div>
  );
}
