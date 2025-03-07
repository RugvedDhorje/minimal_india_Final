"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GalaxyParticles from "./GalaxyParticles";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const images = [
  {
    id: 1,
    img: "/images/dragon_1.jpg",
    name: "Tanmay",
    description:
      "Developed an AI-powered soap formula that enhanced skin hydration while reducing environmental impact.",
  },
  {
    id: 2,
    name: "Gaurav",
    img: "/images/dragon_2.jpg",
    description:
      "Created a sustainable soap using AI-driven ingredient optimization, improving both cost efficiency and quality.",
  },
  {
    id: 3,
    name: "Rugved",
    img: "/images/dragon_3.jpg",
    description:
      "Designed an AI-based fragrance infusion technique that customizes scents based on user preferences.",
  },
  {
    id: 4,
    name: "Varun",
    img: "/images/dragon_4.jpg",
    description:
      "Implemented a machine learning model to predict ideal soap compositions for different skin types.",
  },
  {
    id: 5,
    name: "Shruti",
    img: "/images/dragon_5.jpg",
    description:
      "Engineered an AI-driven supply chain that reduced soap production waste by 30%.",
  },
  {
    id: 6,
    name: "Pranav",
    img: "/images/dragon_6.jpg",
    description:
      "Developed a deep learning algorithm to analyze customer feedback and refine soap formulas in real time.",
  },
  {
    id: 7,
    name: "Yash",
    img: "/images/dragon_7.jpg",
    description:
      "Used generative AI to create unique soap designs and textures for a personalized skincare experience.",
  },
  {
    id: 8,
    name: "Sanket",
    img: "/images/dragon_8.jpg",
    description:
      "Created an AI-powered chatbot that recommends the best soap based on skin analysis and climate data.",
  },
  {
    id: 9,
    name: "Tejas",
    img: "/images/dragon_9.jpg",
    description:
      "Designed a blockchain-integrated AI system to ensure transparency in sourcing organic soap ingredients.",
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
      className: "text-blue-500/60",
    },
  ];

  return (
    <div id="tech" className="w-full overflow-hidden">
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
                className="w-full h-full rounded-full object-cover  "
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
              className="text-white sm:text-[36px] text-[24px] font-semibold mb-2 text-center sm:mt-5 mt-10"
            >
              {images[currentIndex].name}
            </motion.h2>
            <div className="w-8/12 mx-auto">
              <motion.p
                key={currentIndex}
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base text-[14px] md:text-[24px] font-normal leading-6 text-white text-center px-5"
              >
                {images[currentIndex].description}
              </motion.p>
            </div>
          </div>
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
