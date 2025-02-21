// import Link from "next/link";
"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <nav
        className="fixed top-0 w-full z-60 flex justify-center items-center md:py-10 py-5 backdrop-blur-sm"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="bg-white shadow-md rounded-xl px-8 py-5 flex justify-between items-center lg:w-7/12 md:w-10/12 w-7/12 max-w-[900px] ">
          <div className="text-2xl font-bold text-gray-800">
            {/* <Link href={"/Home"}> */}
            <Link to="home" smooth={true} duration={500}>
              <h2 className="text-black font-extralight lg:text-[30px] md:text-[24px] text-[20px] cursor-pointer">
                MINIMAL INDIA
              </h2>
            </Link>
            {/* </Link> */}
          </div>
          <ul className="md:flex space-x-7 cursor-pointer hidden">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
            >
              Home
            </Link>
            <Link
              to="tech"
              smooth={true}
              duration={500}
              className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
            >
              Tech
            </Link>
            <Link
              to="design"
              smooth={true}
              duration={500}
              className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
            >
              Design
            </Link>
            <Link
              to="film"
              smooth={true}
              duration={500}
              className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
            >
              Film
            </Link>
          </ul>
          <button className="text-[16px] font-normal uppercase px-4 py-2 border-[1px] border-[#29292992] rounded-xl text-[#292929] hover:bg-[#292929] hover:text-white duration-300 hidden md:block">
            Get In Touch
          </button>
          <Menu
            onClick={() => setNavOpen(!navOpen)}
            className="sm:hidden text-[#4B4B4B]"
          />
        </div>
      </nav>
      {navOpen && (
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-auto bg-white absolute top-[100px] w-11/12 z-20 rounded-lg"
        >
          <ul className="cursor-pointer flex flex-col gap-y-2 py-2">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setNavOpen(!navOpen)}
              className="list-none py-1 px-4 text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition hover:bg-gray-200"
            >
              Home
            </Link>
            <Link
              to="tech"
              smooth={true}
              duration={500}
              onClick={() => setNavOpen(!navOpen)}
              className="list-none py-1 px-4 text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
            >
              Tech
            </Link>
            <Link
              to="design"
              smooth={true}
              duration={500}
              onClick={() => setNavOpen(!navOpen)}
              className="list-none py-1 px-4 text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
            >
              Design
            </Link>
            <Link
              to="film"
              smooth={true}
              duration={500}
              onClick={() => setNavOpen(!navOpen)}
              className="list-none py-1 px-4 text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
            >
              Film
            </Link>
          </ul>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="text-[16px] font-normal uppercase mx-2 mb-4 px-4 py-2 border-[1px] border-[#29292992] rounded-xl text-[#292929] hover:bg-[#292929] hover:text-white duration-300"
          >
            Get In Touch
          </button>
        </motion.div>
      )}
    </>
  );
}
