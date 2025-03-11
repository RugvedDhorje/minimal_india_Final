"use client";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import SpotlightButton from "./SpotlightButton";

export default function HomePage() {
  return (
    <div
      id="home"
      className="w-full h-full mx-auto bg-gray-200 rounded-b-[50px] shadow-2xl "
      style={{
        backgroundImage: `url('/Home banner.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main Content */}
      <Navbar />
      {/* <Navbar /> */}
      <div className="max-w-screen-2xl mx-auto h-screen w-full flex flex-col justify-center items-center ">
        <motion.h1
          initial={{ y: -100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-white lg:text-[80px] md:text-[60px] text-[40px] mx-auto leading-none font-bold mt-14 text-center font-clash "
          // bg-gradient-to-l from-[#292929] to-transparent
        >
          Minimal ideas, maximum impact.
        </motion.h1>
        <motion.h2
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-white lg:text-[40px] md:text-[30px] text-[20px] mx-auto leading-none text-center mt-5 font-clash"
        >
          Showcasing creativity, innovation, and stories that matter.
        </motion.h2>
        <div className="flex justify-center mt-14">
          {/* <motion.button
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sm:text-[16px] text-[14px] font-normal px-4 py-2 text-[#292929] rounded-md bg-white"
            style={{
              borderRadius: "7px",
            }}
          >
            Let’s Create Together
          </motion.button> */}
          <SpotlightButton />
        </div>
      </div>
    </div>
  );
}
