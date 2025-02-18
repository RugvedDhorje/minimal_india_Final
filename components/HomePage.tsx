"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";

export default function HomePage() {
  const { scrollY } = useScroll();

  // Parallax effect: faster movement for the text content
  const textY = useTransform(scrollY, [0, 500], [0, -200]);
  return (
    <>
      <div
        id="home"
        className="w-full mx-auto relative min-h-screen h-full z-50 bg-gray-200"
      >
        {/* Animation */}

        {/* <div className="absolute inset-0 z-50 h-full w-full overflow-hidden"> */}
        {/* Top Div */}
        {/* <div className="absolute top-0 left-0 w-full h-1/2 bg-[#292929] animate-slide-up"></div> */}
        {/* Bottom Div */}
        {/* <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[#292929] animate-slide-down"></div> */}
        {/* </div> */}

        {/* Main Content */}
        <div className="inset-0 min-h-screen overflow-y-auto">
          <div
            //   ref={bgRef}
            className="relative w-full max-w-screen-2xl mx-auto bg-gray-200 h-[140vh] bg-cover bg-center rounded-b-3xl mb-10"
            // style={{
            //   backgroundImage: `url("/homeBg.jpg")`,
            // }}
          >
            <div className="w-full max-w-screen-2xl mx-auto flex justify-center">
              <Navbar />
            </div>
            {/* <Navbar /> */}
            <motion.div
              // ref={textRef}
              style={{ y: textY }}
              className="max-w-screen-2xl mx-auto absolute w-full top-36"
            >
              <motion.h1
                initial={{ y: -100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#292929] text-[80px] mx-auto leading-none font-bold mt-14 text-center font-clash"
              >
                Minimal ideas, maximum impact.
              </motion.h1>
              <motion.h2
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[#292929] text-[40px] mx-auto leading-none text-center mt-5 font-clash"
              >
                Showcasing creativity, innovation, and stories that matter.
              </motion.h2>
              <div className="flex justify-center mt-14">
                <motion.button
                  initial={{ y: 100 }}
                  whileInView={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-[16px] font-normal px-4 py-2 bg-[#292929] rounded-md text-white"
                >
                  Let’s Create Together
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
