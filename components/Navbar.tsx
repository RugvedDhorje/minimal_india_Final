// "use client";
// import { Menu } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-scroll";
// import { motion } from "framer-motion";
// export default function Navbar() {
//   const [navOpen, setNavOpen] = useState(false);
//   return (
//     <>
//       <nav
//         className="fixed top-0 w-full z-60 flex justify-center items-center md:py-10 py-5 backdrop-blur-sm "
//         style={{
//           WebkitMaskImage:
//             "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
//           maskImage:
//             "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
//         }}
//       >
//         <div className="bg-white shadow-md rounded-xl px-8 py-5 flex justify-between items-center md:w-8/12 w-11/12 max-w-[900px] ">
//           <div className="text-2xl font-bold text-gray-800">
//             {/* <Link href={"/Home"}> */}
//             <Link to="home" smooth={true} duration={500}>
//               <h2 className="text-black font-extralight lg:text-[30px] md:text-[24px] text-[20px] cursor-pointer">
//                 MINIMAL INDIA
//               </h2>
//             </Link>
//             {/* </Link> */}
//           </div>
//           <ul className="lg:flex space-x-7 cursor-pointer hidden">
//             <Link
//               to="home"
//               smooth={true}
//               duration={500}
//               className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
//             >
//               Home
//             </Link>
//             <Link
//               to="tech"
//               smooth={true}
//               duration={500}
//               className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
//             >
//               Tech
//             </Link>
//             <Link
//               to="design"
//               smooth={true}
//               duration={500}
//               className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
//             >
//               Design
//             </Link>
//             <Link
//               to="film"
//               smooth={true}
//               duration={500}
//               className="list-none text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
//             >
//               Film
//             </Link>
//           </ul>
//           <button className="text-[16px] font-normal uppercase px-4 py-2 border-[1px] border-[#29292992] rounded-xl text-[#292929] hover:bg-[#292929] hover:text-white duration-300 hidden lg:block">
//             Get In Touch
//           </button>
//           <Menu
//             onClick={() => setNavOpen(!navOpen)}
//             className="lg:hidden text-[#4B4B4B]"
//           />
//         </div>
//       </nav>
//       {navOpen && (
//         <motion.div
//           initial={{ y: -50 }}
//           animate={{ y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="max-auto bg-white absolute top-[100px] w-11/12 z-20 rounded-lg"
//         >
//           <ul className="cursor-pointer flex flex-col gap-y-2 py-2">
//             <Link
//               to="home"
//               smooth={true}
//               duration={500}
//               onClick={() => setNavOpen(!navOpen)}
//               className="list-none py-1 px-4 text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition hover:bg-gray-200"
//             >
//               Home
//             </Link>
//             <Link
//               to="tech"
//               smooth={true}
//               duration={500}
//               onClick={() => setNavOpen(!navOpen)}
//               className="list-none py-1 px-4 text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
//             >
//               Tech
//             </Link>
//             <Link
//               to="design"
//               smooth={true}
//               duration={500}
//               onClick={() => setNavOpen(!navOpen)}
//               className="list-none py-1 px-4 text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
//             >
//               Design
//             </Link>
//             <Link
//               to="film"
//               smooth={true}
//               duration={500}
//               onClick={() => setNavOpen(!navOpen)}
//               className="list-none py-1 px-4 text-[16px] font-normal uppercase text-[#4B4B4B] hover:text-gray-900 transition"
//             >
//               Film
//             </Link>
//           </ul>
//           <button
//             onClick={() => setNavOpen(!navOpen)}
//             className="text-[16px] font-normal uppercase mx-2 mb-4 px-4 py-2 border-[1px] border-[#29292992] rounded-xl text-[#292929] hover:bg-[#292929] hover:text-white duration-300"
//           >
//             Get In Touch
//           </button>
//         </motion.div>
//       )}
//     </>
//   );
// }
"use client";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function Navbar() {
  const scrollThreshold = 50;
  const [navOpen, setNavOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > scrollThreshold) {
        setNavOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className="fixed top-0 w-full z-50 flex justify-center items-center md:py-6 py-4 backdrop-blur-sm"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 100%)",
        }}
      >
        <div className="bg-white shadow-md rounded-xl px-6 py-3 flex justify-between items-center sm:w-8/12 w-11/12 max-w-[900px] overflow-hidden">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link to="home" smooth={true} duration={500}>
              <motion.h2
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-black font-extralight lg:text-[30px] md:text-[24px] text-[20px] cursor-pointer"
              >
                MINIMAL INDIA
              </motion.h2>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex space-x-6">
            {["home", "tech", "design", "film"].map((item) => (
              <motion.div
                key={item}
                className="relative h-[20px] overflow-hidden flex items-start"
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="text-[16px] font-normal uppercase text-gray-700 cursor-pointer"
                >
                  {/* Wrapping both texts inside one div */}
                  <motion.div
                    initial={{ y: "0%" }}
                    whileHover={{ y: "-50%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex flex-col"
                  >
                    {/* Original Text */}
                    <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>

                    {/* Duplicate Text (Comes from Below) */}
                    <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </ul>

          {/* Get In Touch Button */}
          <motion.button
            initial={{ x: 100 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setShowForm(true)}
            className="hidden lg:block text-[16px] font-normal uppercase px-4 py-2 border border-gray-700 rounded-xl text-gray-700 hover:bg-gray-700 hover:text-white transition"
          >
            Get In Touch
          </motion.button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setNavOpen(!navOpen)} className="lg:hidden">
            {navOpen ? (
              <X className="text-gray-700" />
            ) : (
              <Menu className="text-gray-700" />
            )}
          </button>
        </div>
      </nav>
      {/* Popup Form */}
      {showForm && (
        <div
          className="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-50 flex justify-center items-center z-50"
          onClick={() => setShowForm(false)}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Top Right) */}
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
              onClick={() => setShowForm(false)}
            >
              <X size={24} />
            </button>

            <h2 className="text-xl font-semibold mb-4">Get In Touch</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            ></textarea>
            <button className="w-full bg-gray-700 text-white p-2 rounded mb-2">
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {navOpen && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-x-0 top-[70px] mx-auto w-11/12 max-w-md bg-white shadow-md rounded-lg z-40"
        >
          <ul className="flex flex-col items-center py-4 space-y-3">
            {["home", "tech", "design", "film"].map((item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                onClick={() => setNavOpen(false)}
                className="text-[16px] font-normal uppercase text-gray-700 hover:text-black transition px-6 py-2 w-full text-center"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </ul>

          <div className="flex justify-center pb-4">
            <button
              onClick={() => setNavOpen(false)}
              className="text-[16px] font-normal uppercase px-6 py-2 border border-gray-700 rounded-xl text-gray-700 hover:bg-gray-700 hover:text-white transition"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
