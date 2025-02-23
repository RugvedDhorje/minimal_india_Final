"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GalaxyParticles from "./GalaxyParticles";
import { Spotlight } from "./ui/Spotlight";

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
  const IMAGE_SIZE = 100; // Image size
  const OFFSET = CIRCLE_SIZE / 2 + IMAGE_SIZE / 2; // Distance from center to image center

  return (
    <>
      <motion.div className="w-full pt-5 bg-black">
        <h1 className="text-white text-[80px] mx-auto leading-none font-bold mt-14 text-center">
          Code with clarity
        </h1>
        <h2 className="text-white text-[40px] mx-auto leading-none text-center mt-5">
          Smart solutions for every problem
        </h2>
      </motion.div>
      <div className="w-full flex justify-center items-center bg-black py-10">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#130C0B] to-[#0C0807] px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Discover Tech
          </span>
        </button>
      </div>
      <div className="relative w-full h-auto pt-[100px] flex items-center justify-center bg-black z-0 ">
        <Spotlight
          className="-top-40 left-0 md:left-[400px] md:-top-64"
          fill="white"
        />
        <div
          className="relative w-[600px] mx-auto flex justify-center items-center h-[600px] rounded-full "
          style={{
            background: `linear-gradient(
          to bottom,
          rgba(163, 163, 163, 0.7) 5%,
          rgba(163, 163, 163, 0.4) 20%,
          rgba(163, 163, 163, 0.2) 40%,
          rgba(0, 0, 0, 0) 60%,
          rgba(0, 0, 0, 0) 100%
        )`,
          }}
        >
          <div
            className="relative rounded-full flex justify-center items-center transition-transform duration-500"
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
            className="absolute w-[150%] h-[60%] bottom-10 bg-black"
            style={{
              background: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 15%,
            rgba(0, 0, 0, 1) 40%,
            rgba(0, 0, 0, 1) 100%
          )`,
            }}
          >
            <motion.h2
              key={currentIndex}
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white text-[30px] font-semibold mb-2 text-center mt-5"
            >
              {images[currentIndex].name}
            </motion.h2>
            <div className="w-8/12 mx-auto">
              <motion.p
                key={currentIndex}
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-base md:text-[20px] font-normal leading-6 text-white text-center px-5"
              >
                {images[currentIndex].description}
              </motion.p>
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute mt-56 flex justify-center gap-4">
          <button
            onClick={handleNext}
            className="bg-gradient-to-b from-neutral-400/10 text-white rounded-lg px-4 py-2"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handlePrev}
            className="bg-gradient-to-b from-neutral-400/10 text-white rounded-lg px-4 py-2"
          >
            <ChevronRight />
          </button>
        </div>
      </div>
    </>
  );
};

export default CircularImageCarousel;
