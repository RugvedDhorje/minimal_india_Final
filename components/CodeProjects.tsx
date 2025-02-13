"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import GalaxyParticles from "./GalaxyParticles";

interface Project {
  id: number;
  img: string;
  name: string;
  description: string;
}

const project: Project[] = [
  {
    id: 1,
    img: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    name: "Tanmay",
    description:
      "Developed an AI-powered soap formula that enhanced skin hydration while reducing environmental impact.",
  },
  {
    id: 2,
    name: "Gaurav",
    img: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    description:
      "Created a sustainable soap using AI-driven ingredient optimization, improving both cost efficiency and quality.",
  },
  {
    id: 3,
    name: "Rugved",
    img: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    description:
      "Designed an AI-based fragrance infusion technique that customizes scents based on user preferences.",
  },
  {
    id: 4,
    name: "Varun",
    img: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    description:
      "Implemented a machine learning model to predict ideal soap compositions for different skin types.",
  },
  {
    id: 5,
    name: "Shruti",
    img: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    description:
      "Engineered an AI-driven supply chain that reduced soap production waste by 30%.",
  },
  {
    id: 6,
    name: "Pranav",
    img: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    description:
      "Developed a deep learning algorithm to analyze customer feedback and refine soap formulas in real time.",
  },
  {
    id: 7,
    name: "Yash",
    img: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    description:
      "Used generative AI to create unique soap designs and textures for a personalized skincare experience.",
  },
  {
    id: 8,
    name: "Sanket",
    img: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    description:
      "Created an AI-powered chatbot that recommends the best soap based on skin analysis and climate data.",
  },
  {
    id: 9,
    name: "Tejas",
    img: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    description:
      "Designed a blockchain-integrated AI system to ensure transparency in sourcing organic soap ingredients.",
  },
];

export default function CodeProject() {
  const radius = 180; // Radius of the circle
  const steps = 25; // Number of keyframes for 90-degree motion
  const xValues = [];
  const yValues = [];

  // Calculate positions for 1/4 circle (90°)
  for (let i = 0; i <= steps; i++) {
    const angle = (i / steps) * (Math.PI / 2); // Only 90 degrees (PI/2)
    xValues.push(-radius * Math.cos(angle)); // Start from left (-radius)
    yValues.push(-radius * Math.sin(angle)); // Move upwards
  }
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % project.length);
  };

  const previous = () => {
    setIndex((prevIndex) => (prevIndex - 1 + project.length) % project.length);
  };

  return (
    <section className="max-w-screen-2xl mx-auto z-30 w-full flex flex-col items-center justify-center h-screen relative bg-gradient-to-r from-[#130C0B] to-[#0C0807]">
      <div className="absolute top-14">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-[#130C0B] to-[#0C0807] px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            Discover Tech
          </span>
        </button>
      </div>
      <div className="h-44 w-[650px] top-44 absolute z-10">
        <GalaxyParticles />
      </div>
      <div className="">
        <div className="relative max-w-3xl z-50 mx-auto w-[550px] h-[280px] rounded-t-full bg-gradient-to-b from-neutral-400 flex items-center justify-center">
          {/* Ensure the array has items before accessing project[index] */}
          {project.length > 0 && (
            <>
              <motion.div
                key={index} // Forces re-animation on key change
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "50%",
                  backgroundColor: "red",
                  position: "absolute",
                  top: "70%",
                  left: "43%",
                  transform: "translate(-50%, -50%)",
                }}
                animate={{ x: xValues, y: yValues }}
                transition={{
                  duration: 0.5, // Adjust speed
                  ease: "easeInOut",
                }}
              >
                <img
                  alt="image"
                  loading="lazy"
                  className="w-full h-full object-cover rounded-full border-4 border-white"
                  src="/images/4611023cdfc1d96c5bc7486cdc08ada9.png"
                />
              </motion.div>
              <div className="absolute top-32 flex flex-col h-auto items-center justify-center text-center px-8 ">
                <motion.h4
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="text-white text-[30px] font-semibold mb-2"
                >
                  {project[index].name}
                  {/* {"Tanmay"} */}
                </motion.h4>
                <motion.p
                  key={index}
                  initial={{ y: 50 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="text-base md:text-[20px] font-normal leading-6 text-white"
                >
                  {project[index].description}
                  {
                    // "Developed an AI-powered soap formula that enhanced skin hydration while reducing environmental impact."
                  }
                </motion.p>
              </div>
            </>
          )}
          <div className="absolute mx-auto -bottom-20 flex gap-x-4 items-center justify-center w-full">
            <button
              className="bg-gradient-to-b from-neutral-400/10 text-white rounded-lg px-4 py-2"
              onClick={previous}
            >
              <ChevronLeft />
            </button>
            <button
              className="bg-gradient-to-b from-neutral-400/10 text-white rounded-lg px-4 py-2 "
              onClick={next}
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        {/* Navigation Buttons */}
      </div>
    </section>
  );
}
