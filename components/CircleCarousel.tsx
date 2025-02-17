// "use client";
// import { SetStateAction, useEffect, useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   "/images/dragon_1.jpg",
//   "/images/dragon_2.jpg",
//   "/images/dragon_3.jpg",
//   "/images/dragon_4.jpg",
// ];

// const CircleCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [rotation, setRotation] = useState(0);
//   // let intervalId: string | number | NodeJS.Timeout | undefined;
//   const next = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const previous = () => {
//     setActiveIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//   };

//   useEffect(() => {
//     const startRotation = () => {
//       // intervalId = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setRotation((prevRotation) => prevRotation - 90);
//       // }, 4000);
//     };

//     startRotation();

//     // return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="h-screen bg-antiquewhite flex flex-col justify-center items-center overflow-hidden">
//       <div
//         className="w-[600px] h-[600px] border-[7rem] border-[#eebe97] rounded-full flex justify-center items-center relative"
//         style={{
//           transform: `rotate(${rotation}deg)`,
//           transition: "transform 1s",
//         }}
//       >
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute w-20 transition-transform ${
//               activeIndex === index ? "scale-[2.5]" : ""
//             }`}
//             style={{
//               bottom: index === 2 ? "-5rem" : "auto",
//               left: index === 3 ? "-5rem" : "auto",
//               top: index === 0 ? "-5rem" : "auto",
//               right: index === 1 ? "-5rem" : "auto",
//             }}
//           >
//             <Image
//               src={img}
//               alt={`Slide ${index + 1}`}
//               width={80}
//               height={80}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="absolute mx-auto -bottom-20 flex gap-x-4 items-center justify-center w-full">
//         <button
//           className="bg-gradient-to-b from-neutral-900 to-gray-500 text-white rounded-lg px-4 py-2"
//           onClick={previous}
//         >
//           <ChevronLeft />
//         </button>
//         <button
//           className="bg-gradient-to-b from-neutral-900 to-gray-500 text-white rounded-lg px-4 py-2 "
//           onClick={next}
//         >
//           <ChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CircleCarousel;
// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   "/images/dragon_1.jpg",
//   "/images/dragon_2.jpg",
//   "/images/dragon_3.jpg",
//   "/images/dragon_4.jpg",
// ];

// const CircleCarousel = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const next = () => {
//     setActiveIndex((prevIndex) => (prevIndex - 1) % images.length);
//   };

//   const previous = () => {
//     setActiveIndex(
//       (prevIndex) => (prevIndex + 1 + images.length) % images.length
//     );
//   };

//   return (
//     <div className="h-screen bg-antiquewhite flex flex-col justify-center items-center overflow-hidden">
//       <div className="w-[600px] h-[600px] border-[7rem] border-[#eebe97] rounded-full flex justify-center items-center relative">
//         {images.map((img, index) => {
//           const positionIndex =
//             (index - activeIndex + images.length) % images.length;
//           const positions = {
//             0: { top: "-5rem", left: "auto", right: "auto", scale: 2.5 }, // Active image at top
//             1: { right: "-5rem", left: "auto", top: "auto", scale: 1 }, // Next image at right
//             2: { bottom: "-5rem", left: "auto", right: "auto", scale: 1 }, // Image at bottom
//             3: { left: "-5rem", right: "auto", top: "auto", scale: 1 }, // Previous image at left
//           };

//           return (
//             <div
//               key={index}
//               className={`absolute w-20 transition-transform duration-500`}
//               style={{
//                 transform: `scale(${positionIndex === 0 ? 2.5 : 1})`,
//                 top: positions[positionIndex]?.top,
//                 left: positions[positionIndex]?.left,
//                 right: positions[positionIndex]?.right,
//                 bottom: positions[positionIndex]?.bottom,
//               }}
//             >
//               <Image
//                 src={img}
//                 alt={`Slide ${index + 1}`}
//                 width={80}
//                 height={80}
//                 className="rounded-full"
//               />
//             </div>
//           );
//         })}
//       </div>
//       <div className="absolute mx-auto -bottom-20 flex gap-x-4 items-center justify-center w-full">
//         <button
//           className="bg-gradient-to-b from-neutral-900 to-gray-500 text-white rounded-lg px-4 py-2"
//           onClick={previous}
//         >
//           <ChevronLeft />
//         </button>
//         <button
//           className="bg-gradient-to-b from-neutral-900 to-gray-500 text-white rounded-lg px-4 py-2"
//           onClick={next}
//         >
//           <ChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CircleCarousel;
// !!!
// import { useState } from "react";
// import { motion } from "framer-motion";

// const images = [
//   "/images/dragon_1.jpg",
//   "/images/dragon_2.jpg",
//   "/images/dragon_3.jpg",
//   "/images/dragon_4.jpg",
// ];

// const CircularCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? images.length - 1 : prevIndex - 1
//     );
//   };

//   const getPosition = (index: number) => {
//     const positions = ["top", "left", "right", "bottom"];
//     return positions[index % 4];
//   };

//   const getIndex = (offset: number) => {
//     return (currentIndex + offset + images.length) % images.length;
//   };

//   return (
//     <div className="relative w-64 h-64 mx-auto">
//       {/* Image Container */}
//       <div className="relative w-full h-full">
//         {[0, 1, 2, 3].map((posIndex) => {
//           const imageIndex = getIndex(posIndex);
//           const position = getPosition(posIndex);

//           return (
//             <motion.img
//               key={imageIndex}
//               src={images[imageIndex]}
//               alt={`Image ${imageIndex + 1}`}
//               className={`absolute w-24 h-24 rounded-full object-cover shadow-lg transition-all`}
//               animate={{
//                 x:
//                   position === "left"
//                     ? "-100%"
//                     : position === "right"
//                     ? "100%"
//                     : 0,
//                 y:
//                   position === "top"
//                     ? "-100%"
//                     : position === "bottom"
//                     ? "100%"
//                     : 0,
//                 scale: position === "top" ? 1.2 : 1,
//                 zIndex: position === "top" ? 10 : 1,
//               }}
//               transition={{ duration: 0.5 }}
//             />
//           );
//         })}
//       </div>

//       {/* Buttons */}
//       <div className="absolute bottom-[-50px] left-1/2 transform -translate-x-1/2 flex gap-4">
//         <button
//           onClick={prevSlide}
//           className="px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={nextSlide}
//           className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CircularCarousel;
// !!

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const images = [
//   "/images/dragon_1.jpg",
//   "/images/dragon_2.jpg",
//   "/images/dragon_3.jpg",
//   "/images/dragon_4.jpg",
// ];

// const CircleSlider = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [rotation, setRotation] = useState(0);
//   // let intervalId;

//   const next = () => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     setRotation((prevRotation) => prevRotation + 90);
//   };

//   const previous = () => {
//     setActiveIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//     setRotation((prevRotation) => prevRotation - 90);
//   };
//   useEffect(() => {
//     const startRotation = () => {
//       // intervalId = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setRotation((prevRotation) => prevRotation - 90);
//       // }, 4000);
//     };

//     startRotation();

//     // return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <div className="h-screen bg-antiquewhite flex flex-col justify-center items-center overflow-hidden">
//       <div
//         className="w-[600px] h-[600px] border-[7rem] border-[#eebe97] rounded-full flex justify-center items-center relative"
//         style={{
//           transform: `rotate(${rotation}deg)`,
//           transition: "transform 1s",
//         }}
//       >
//         {images.map((img, index) => (
//           <div
//             key={index}
//             className={`absolute w-20 transition-transform`}
//             style={{
//               bottom: index === 2 ? "-5rem" : "auto",
//               left: index === 1 ? "-5rem" : "auto",
//               top: index === 0 ? "-5rem" : "auto",
//               right: index === 3 ? "-5rem" : "auto",
//             }}
//           >
//             <Image
//               src={img}
//               alt={`Slide ${index + 1}`}
//               width={80}
//               height={80}
//             />
//           </div>
//         ))}
//       </div>
//       <div className="absolute mx-auto bottom-20 flex gap-x-4 items-center justify-center w-full">
//         <button
//           className="bg-gradient-to-b from-neutral-900 to-gray-500 text-white rounded-lg px-4 py-2"
//           onClick={previous}
//         >
//           <ChevronLeft />
//         </button>
//         <button
//           className="bg-gradient-to-b from-neutral-900 to-gray-500 text-white rounded-lg px-4 py-2 "
//           onClick={next}
//         >
//           <ChevronRight />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CircleSlider;
// import React, { useState } from "react";

// // Define the images array
// const images = [
//   "/images/dragon_1.jpg",
//   "/images/dragon_2.jpg",
//   "/images/dragon_3.jpg",
//   "/images/dragon_4.jpg",
//   "/images/dragon_5.jpg",
//   "/images/dragon_6.jpg",
//   "/images/dragon_7.jpg",
//   "/images/dragon_8.jpg",
//   "/images/dragon_9.jpg",
// ];

// // Define the CircularImageCarousel component
// const CircularImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [rotation, setRotation] = useState(0);

//   // Function to handle previous button click
//   const handlePrev = () => {
//     setTimeout(() => {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex + 1 + images.length) % images.length
//       );
//     }, 500);

//     setRotation((prevRotation) => prevRotation - 90);
//   };

//   // Function to handle next button click
//   const handleNext = () => {
//     setTimeout(() => {
//       setCurrentIndex(
//         (prevIndex) => (prevIndex - 1 + images.length) % images.length
//       );
//     }, 500);
//     setRotation((prevRotation) => prevRotation + 90);
//   };

//   return (
//     <>
//       <div
//         style={{
//           position: "relative",
//           width: 300,
//           height: 300,
//           borderRadius: "50%",
//           border: "1px solid black",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           transform: `rotate(${rotation}deg)`,
//           transition: "transform 1s",
//         }}
//         className="bg-red-300"
//       >
//         {/* Top image */}
//         <img
//           src={images[currentIndex]}
//           alt="Top Image"
//           style={{
//             position: "absolute",
//             top: -50,
//             left: 0,
//             right: 0,
//             margin: "auto",
//             width: 100,
//             height: 100,
//             borderRadius: "50%",
//           }}
//         />

//         {/* Left image */}
//         <img
//           src={images[(currentIndex - 1 + images.length) % images.length]}
//           alt="Left Image"
//           style={{
//             position: "absolute",
//             left: -50,
//             top: 0,
//             bottom: 0,
//             margin: "auto",
//             width: 100,
//             height: 100,
//             borderRadius: "50%",
//           }}
//         />

//         {/* Right image */}
//         <img
//           src={images[(currentIndex + 1) % images.length]}
//           alt="Right Image"
//           style={{
//             position: "absolute",
//             right: -50,
//             top: 0,
//             bottom: 0,
//             margin: "auto",
//             width: 100,
//             height: 100,
//             borderRadius: "50%",
//           }}
//         />
//         {/* Right image */}
//         <img
//           src={images[(currentIndex + 2) % images.length]}
//           alt="Right Image"
//           style={{
//             position: "absolute",
//             right: 0,
//             left: 0,
//             bottom: -50,
//             margin: "auto",
//             width: 100,
//             height: 100,
//             borderRadius: "50%",
//           }}
//         />
//         {/* Previous and Next buttons */}
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           bottom: -100,
//           left: 270,
//           right: 0,
//           margin: "auto",
//           display: "flex",
//           gap: 10,
//           padding: "10px 0",
//         }}
//       >
//         <button
//           onClick={handlePrev}
//           className="bg-gray-900 text-white px-4 py-1 text-[20px]"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-gray-900 text-white px-4 py-1 text-[20px]"
//         >
//           Next
//         </button>
//       </div>
//     </>
//   );
// };

// export default CircularImageCarousel;
// import React, { useState } from "react";

// const images = [
//   "/images/dragon_1.jpg",
//   "/images/dragon_2.jpg",
//   "/images/dragon_3.jpg",
//   "/images/dragon_4.jpg",
//   "/images/dragon_5.jpg",
//   "/images/dragon_6.jpg",
//   "/images/dragon_7.jpg",
//   "/images/dragon_8.jpg",
//   "/images/dragon_9.jpg",
// ];
// const CircularImageCarousel = () => {
//   // Since we can't use real images, we'll use placeholders
//   // const images = Array(9)
//   //   .fill(null)
//   //   .map((_, i) => `/api/placeholder/100/100`);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [rotation, setRotation] = useState(0);

//   const handlePrev = () => {
//     setCurrentIndex(
//       (prevIndex) => (prevIndex - 1 + images.length) % images.length
//     );
//     setRotation((prevRotation) => prevRotation + 90);
//   };

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     setRotation((prevRotation) => prevRotation - 90);
//   };

//   return (
//     <div className="relative w-full h-96 flex items-center justify-center">
//       <div
//         className="relative w-72 h-72 rounded-full border border-gray-300 bg-gray-100 flex justify-center items-center transition-transform duration-500"
//         style={{ transform: `rotate(${rotation}deg)` }}
//       >
//         {/* Top Image (Current) */}
//         <div
//           className="absolute -top-12 left-0 right-0 mx-auto"
//           style={{ transform: `rotate(${-rotation}deg)` }}
//         >
//           <img
//             src={images[currentIndex]}
//             alt={`Image ${currentIndex}`}
//             className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-lg"
//           />
//         </div>

//         {/* Left Image (Next) */}
//         <div
//           className="absolute -left-12 top-0 bottom-0 my-auto"
//           style={{ transform: `rotate(${-rotation}deg)` }}
//         >
//           <img
//             src={images[(currentIndex + 1) % images.length]}
//             alt={`Image ${(currentIndex + 1) % images.length}`}
//             className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-lg"
//           />
//         </div>

//         {/* Right Image (Previous) */}
//         <div
//           className="absolute -right-12 top-0 bottom-0 my-auto"
//           style={{ transform: `rotate(${-rotation}deg)` }}
//         >
//           <img
//             src={images[(currentIndex - 1 + images.length) % images.length]}
//             alt={`Image ${(currentIndex - 1 + images.length) % images.length}`}
//             className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-lg"
//           />
//         </div>

//         {/* Bottom Image */}
//         <div
//           className="absolute -bottom-12 left-0 right-0 mx-auto"
//           style={{ transform: `rotate(${-rotation}deg)` }}
//         >
//           <img
//             src={images[(currentIndex + 2) % images.length]}
//             alt={`Image ${(currentIndex + 2) % images.length}`}
//             className="w-24 h-24 rounded-full object-cover border-2 border-white shadow-lg"
//           />
//         </div>
//       </div>

//       {/* Navigation Buttons */}
//       <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-4">
//         <button
//           onClick={handlePrev}
//           className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors"
//         >
//           Previous
//         </button>
//         <button
//           onClick={handleNext}
//           className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CircularImageCarousel;

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
const images = [
  "/images/dragon_1.jpg",
  "/images/dragon_2.jpg",
  "/images/dragon_3.jpg",
  "/images/dragon_4.jpg",
  "/images/dragon_5.jpg",
  "/images/dragon_6.jpg",
  "/images/dragon_7.jpg",
  "/images/dragon_8.jpg",
  "/images/dragon_9.jpg",
];
const CircularImageCarousel = () => {
  // Since we can't use real images, we'll use placeholders
  // const images = Array(9)
  //   .fill(null)
  //   .map((_, i) => `/api/placeholder/100/100`);
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
    <div className="relative w-full h-screen flex items-center justify-center bg-black">
      <div className="w-5/12 mx-auto bg-gradient-to-b from-neutral-400 to-transparent flex justify-center items-center h-[70%] rounded-full">
        <div
          className="relative rounded-full flex justify-center items-center transition-transform duration-500"
          style={{
            width: `${CIRCLE_SIZE}px`,
            height: `${CIRCLE_SIZE}px`,
            transform: `rotate(${rotation}deg)`,
          }}
        >
          {/* Center point for reference */}
          <div className="w-2 h-2 rounded-full absolute" />

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
              src={images[currentIndex]}
              alt={`Image ${currentIndex}`}
              className="w-full h-full rounded-full object-cover border-2 border-white shadow-lg "
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
              src={images[(currentIndex + 1) % images.length]}
              alt={`Image ${(currentIndex + 1) % images.length}`}
              className="w-full h-full rounded-full object-cover border-2 border-white shadow-lg"
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
              src={images[(currentIndex + 2) % images.length]}
              alt={`Image ${(currentIndex + 2) % images.length}`}
              className="w-full h-full rounded-full object-cover border-2 border-white shadow-lg"
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
              src={images[(currentIndex - 1 + images.length) % images.length]}
              alt={`Image ${
                (currentIndex - 1 + images.length) % images.length
              }`}
              className="w-full h-full rounded-full object-cover border-2 border-white shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute mt-64 flex justify-center gap-4 z-20">
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors"
        >
          <ChevronRight />
        </button>
      </div>
      <div className="absolute w-[50%] h-[45%] bottom-32 bg-black">
        <h2 className="text-white text-[30px] font-semibold mb-2 text-center">
          {"Tanmay"}
        </h2>
        <p className="text-base md:text-[20px] font-normal leading-6 text-white text-center px-5">
          {
            "Developed an AI-powered soap formula that enhanced skin hydration while reducing environmental impact."
          }
        </p>
      </div>
    </div>
  );
};

export default CircularImageCarousel;
