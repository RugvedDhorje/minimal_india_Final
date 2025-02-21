"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
// import About from "./About";
import Creative from "./Creative";
// import Slider3D from "./Slider3D";

export default function Services() {
  const circleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to scale values for the circle
  const circleScale = useTransform(scrollYProgress, [0.21, 0.3], [1, 150]);
  const innerCircleScale = useTransform(scrollYProgress, [0.21, 0.3], [1, 5]);

  // Move the section up **after** the circle expands
  const sectionY = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "-100%"]);
  const sectionOpacity = useTransform(scrollYProgress, [0.25, 0.3], [1, 0]);

  return (
    <div className="relative w-full">
      {/* Sticky Section */}
      <motion.div
        className="w-full mx-auto rounded-t-3xl overflow-hidden z-20 mt-[100px] pb-[100px]"
        style={{
          position: "sticky", // Keeps it fixed until scroll threshold
          top: 0, // Sticks to the top of the screen
          y: sectionY, // Moves out **only after** 40% scroll progress
          opacity: sectionOpacity, // Fades out smoothly
        }}
      >
        <h1 className="text-center lg:text-[90px] md:text-[70px] text-[50px] font-bold text-gray-900 leading-none sm:pt-[200px] pb-[70px]">
          Embrace the future of <br /> urban mobility
        </h1>

        <div className="max-w-screen-2xl w-9/12 mx-auto sm:flex sm:flex-wrap mb-10 relative ">
          {/* Circle in the middle */}
          <div className="absolute inset-0 sm:flex items-center justify-center hidden ">
            <motion.div
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
                zIndex: 999,
              }}
            >
              <motion.div
                ref={innerCircleRef}
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
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0">
            <div className="sm:p-[100px] w-5/6 mx-auto sm:border-r sm:border-b sm:border-gray-700 rounded-br-[70px]">
              <h4 className="md:text-[30px] text-[24px] text-center font-semibold">
                STRESS-FREE SERVICES
              </h4>
              <p className="md:text-[18px] text-[16px] font-light">
                Unlock effortless mobility—from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0">
            <div className="sm:p-[100px] w-5/6 mx-auto">
              <h4 className="md:text-[30px] text-[24px] text-center font-semibold">
                STRESS-FREE SERVICES
              </h4>
              <p className="md:text-[18px] text-[16px] font-light">
                Unlock effortless mobility—from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0">
            <div className="sm:p-[100px] w-5/6 mx-auto">
              <h4 className="md:text-[30px] text-[24px] text-center font-semibold">
                STRESS-FREE SERVICES
              </h4>
              <p className="md:text-[18px] text-[16px] font-light">
                Unlock effortless mobility—from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0">
            <div className="sm:p-[100px] w-5/6 mx-auto sm:border-l sm:border-t sm:border-gray-700 rounded-tl-[70px]">
              <h4 className="md:text-[30px] text-[24px] text-center font-semibold">
                STRESS-FREE SERVICES
              </h4>
              <p className="md:text-[18px] text-[16px] font-light">
                Unlock effortless mobility—from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Creative Section (Content below animation) */}
      <div className="w-full mx-auto rounded-t-3xl absolute top-[800px]">
        <Creative />
      </div>
      <div className="w-full">{/* <Slider3D /> */}</div>
    </div>
  );
}
