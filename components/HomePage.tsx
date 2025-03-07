"use client";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

export default function HomePage() {
  return (
    <div id="home" className="w-full mx-auto bg-gray-200">
      {/* Main Content */}
      <Navbar />
      {/* <Navbar /> */}
      <div className="max-w-screen-2xl mx-auto h-screen w-full flex flex-col justify-center items-center ">
        <motion.h1
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#292929] lg:text-[80px] md:text-[60px] text-[40px] mx-auto leading-none font-bold mt-14 text-center font-clash"
        >
          Minimal ideas, maximum impact.
        </motion.h1>
        <motion.h2
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[#292929] lg:text-[40px] md:text-[30px] text-[20px] mx-auto leading-none text-center mt-5 font-clash"
        >
          Showcasing creativity, innovation, and stories that matter.
        </motion.h2>
        <div className="flex justify-center mt-14">
          <motion.button
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:text-[16px] text-[14px] font-normal px-4 py-2 bg-[#292929] rounded-md text-white"
            style={{
              borderRadius: "7px",
            }}
          >
            Let’s Create Together
          </motion.button>
        </div>
      </div>
    </div>
  );
}
