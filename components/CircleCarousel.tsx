"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GalaxyParticles from "./GalaxyParticles";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import DrawOutlineButton from "./DrawOutlineButton";

const images = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742990241/Trusted-Online-Jewelry-Store-India-Buy-Kisna-Real-Diamond-Gold-Online_ejh0p9.png",
    name: "KISNA",
    link: "https://kisna.com/",
    description:
      "A trusted jewelry brand offering exquisite diamond and gold designs for timeless elegance.",
  },
  {
    id: 2,
    name: "VERYMISS",
    img: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742990243/Verymiss_mzm2ns.png",
    link: "https://verymiss.in/",
    description:
      " An online destination for trendy fashion, accessories, and lifestyle products tailored for modern women.",
  },
  {
    id: 3,
    name: "TOG & TRIM",
    img: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742990235/Online-Clothing-Store-for-Men-amp-Women-Accessories-Tog-Trim-_-Tog-and-Trim-Ecommerce-LLP_bvo5au.png",
    link: "https://togandtrim.com/",
    description:
      "A premium grooming and styling brand offering high-quality products for a polished and refined look.",
  },
  {
    id: 4,
    name: "SAGAR GASES",
    img: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742990238/sagargases_lrcdio.png",
    link: "https://www.sagargases.com/",
    description:
      "A leading provider of industrial and medical gases, ensuring safety and reliability for diverse applications.",
  },
  {
    id: 5,
    name: "WALKENT",
    img: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742990244/Walkent-Travel-Laptop-Sling-Sleeve-Messenger-Bags-Backpacks_qldkid.png",
    link: "https://www.walkent.com/",
    description:
      "A modern and premium leather bags, ensuring a seamless shopping experience with intuitive navigation and engaging visuals.",
  },
  {
    id: 6,
    name: "KITCHEN SECRET",
    img: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742990234/Kitchen-Secret-Dips-Sauces-and-Chutneys-Best-Seller_psq12w.png",
    link: "https://kitchensecret.in/",
    description:
      "A culinary platform offering curated recipes, cooking tips, and kitchen hacks to inspire home chefs and simplify meal preparation.",
  },
  {
    id: 7,
    name: "THE SOCCER TALES",
    img: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742990232/Award-Winning-Books-for-Teens-Soccer-Players-Soccer-Coloring-Book-_-thesoccertales_o3gmdm.png",
    link: "https://thesoccertales.com/",
    description:
      "A hub for soccer enthusiasts, featuring news, stories, and insights about the world of football.",
  },
  {
    id: 8,
    name: "REGENERATIO",
    img: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742990236/Regeneratio_itvibl.png",
    link: "https://www.regeneratio.co/",
    description:
      "A wellness brand focused on natural and sustainable health solutions for rejuvenation and self-care.",
  },
  {
    id: 9,
    name: "PUNE SPICE",
    img: "https://res.cloudinary.com/dwh14vxwc/image/upload/v1742990239/Screenshot_2025-03-13_125445_rntw3u.png",
    link: "https://punespice.com/",
    description:
      "A culinary platform celebrating the rich flavors of Indian cuisine with authentic spices and recipes.",
  },
];

// ];
const CircularImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setRotation((prevRotation) => prevRotation + 90);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setRotation((prevRotation) => prevRotation - 90);
  };

  const CIRCLE_SIZE = 300; // Main circle size
  const IMAGE_SIZE = 150; // Image size
  const OFFSET = CIRCLE_SIZE / 2 + IMAGE_SIZE / 2; // Distance from center to image center
  const words = [
    {
      text: "Code",
    },
    {
      text: "with",
    },
    {
      text: "Clarity.",
      className: "text-[#86b9ff]",
    },
  ];

  return (
    <div id="tech" className="w-full overflow-hidden bg-black pt-12">
      <motion.div className="w-full lg:max-w-screen-2xl md:max-w-screen-lg mx-auto pt-5 bg-black flex flex-col justify-center items-center">
        {/* <h1 className="text-white lg:text-[80px] text-[60px]  mx-auto leading-none font-bold mt-14 text-center">
          Code with clarity
        </h1> */}
        <TypewriterEffectSmooth words={words} />
        <motion.h2
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white lg:text-[40px] md:text-[30px]  mx-auto leading-none text-center mt-5"
        >
          Smart solutions for every problem
        </motion.h2>
      </motion.div>
      <motion.div
        initial={{ x: -150 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full lg:max-w-screen-2xl md:max-w-screen-lg mx-auto flex justify-center items-center bg-black py-10"
      >
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#130C0B] to-[#0C0807] px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Discover Tech
          </span>
        </button>
      </motion.div>
      <div className="relative max-w-screen-2xl mx-auto w-full h-auto pt-[100px] flex items-center justify-center bg-black z-0 ">
        <Spotlight
          className="-top-20 left-10  md:left-[400px] md:-top-32"
          fill="white"
        />
        <div className="relative sm:w-[600px] md:w-[700px] w-[390px] mx-auto flex justify-center items-center sm:h-[600px] h-[400px] md:h-[700px] rounded-full overflow-hidden bg-gradient-to-b from-neutral-400/20 to-transparent">
          <div
            className="relative rounded-full flex justify-center items-center transition-transform duration-500 lg:-mt-5 sm:mt-0 mt-56"
            style={{
              width: `${CIRCLE_SIZE}px`,
              height: `${CIRCLE_SIZE}px`,
              transform: `rotate(${rotation}deg)`,
            }}
          >
            {/* Center point for reference */}
            {/* <div className="w-2 h-2 rounded-full absolute" /> */}

            {/* Top Image (Current) */}
            <div
              className="absolute"
              style={{
                transform: `rotate(${-rotation}deg) translateY(-${OFFSET}px)`,
                width: `${IMAGE_SIZE}px`,
                height: `${IMAGE_SIZE}px`,
              }}
            >
              <img
                src={images[currentIndex].img}
                alt={images[currentIndex].name}
                className="w-full h-full rounded-full object-fit"
              />
            </div>

            {/* Right Image (Next) */}
            <div
              className="absolute"
              style={{
                transform: `rotate(${-rotation}deg) translateX(${OFFSET}px)`,
                width: `${IMAGE_SIZE}px`,
                height: `${IMAGE_SIZE}px`,
              }}
            >
              <img
                src={images[(currentIndex + 1) % images.length].img}
                alt={images[(currentIndex + 1) % images.length].name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Bottom Image */}
            <div
              className="absolute"
              style={{
                transform: `rotate(${-rotation}deg) translateY(${OFFSET}px)`,
                width: `${IMAGE_SIZE}px`,
                height: `${IMAGE_SIZE}px`,
                opacity: "0",
              }}
            >
              <img
                src={images[(currentIndex + 2) % images.length].img}
                alt={images[(currentIndex + 2) % images.length].name}
                className="w-full h-full rounded-full object-cover"
              />
            </div>

            {/* Left Image (Previous) */}
            <div
              className="absolute"
              style={{
                transform: `rotate(${-rotation}deg) translateX(-${OFFSET}px)`,
                width: `${IMAGE_SIZE}px`,
                height: `${IMAGE_SIZE}px`,
              }}
            >
              <img
                src={
                  images[(currentIndex - 1 + images.length) % images.length].img
                }
                alt={
                  images[(currentIndex - 1 + images.length) % images.length]
                    .name
                }
                className="w-full h-full rounded-full object-cover "
              />
            </div>
          </div>
          <div className="absolute -top-[7%] w-10/12 mx-auto h-[100px] -z-10">
            <GalaxyParticles />
          </div>
          <div
            className="absolute w-[150%] h-[70%] bottom-0 bg-black"
            style={{
              background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 10%,
            rgba(0, 0, 0, 1) 40%,
            rgba(0, 0, 0, 1) 100%
          )`,
            }}
          >
            <motion.h2
              key={currentIndex}
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white sm:text-[34px] text-[24px] font-semibold lg:mb-2 text-center sm:mt-5 mt-10"
            >
              {images[currentIndex].name}
            </motion.h2>
            <div className="w-8/12 mx-auto">
              <motion.p
                key={currentIndex}
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base text-[16px] md:text-[22px] font-normal md:leading-7 leading-tight text-white text-center px-5"
              >
                {images[currentIndex].description}
              </motion.p>
            </div>
          </div>
        </div>
        <div className="absolute mt-36 md:mt-14">
          <DrawOutlineButton link={images[currentIndex].link}>
            Link
          </DrawOutlineButton>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute mt-56 flex justify-center gap-4">
          <motion.button
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handlePrev}
            className="bg-gradient-to-b from-neutral-400/10 text-white rounded-lg px-4 py-2"
            style={{
              borderRadius: "5px",
            }}
          >
            <ChevronLeft />
          </motion.button>
          <motion.button
            initial={{ x: 50 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleNext}
            className="bg-gradient-to-b from-neutral-400/10 text-white rounded-lg px-4 py-2"
            style={{
              borderRadius: "5px",
            }}
          >
            <ChevronRight />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CircularImageCarousel;
