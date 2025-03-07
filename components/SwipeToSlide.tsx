// "use client";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const info = [
//   {
//     id: 1,
//     title: "Title 1",
//     Profile: "/images/1696858826722.jpg",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "A leading company that specializes in providing advanced technology and sustainable practices to solve modern challenges.",
//     companyName: "Acme Corporation",
//     about:
//       "Acme Corporation is a global leader in innovative solutions for various industries, focusing on state-of-the-art technologies and sustainable business models.",
//   },
//   {
//     id: 2,
//     title: "Title 2",
//     Profile: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "Experts in digital transformation, offering services like software development and cloud solutions to drive business success.",
//     companyName: "TechNest Solutions",
//     about:
//       "TechNest Solutions offers cutting-edge IT services, including software development, cloud solutions, and digital transformation strategies tailored for businesses of all sizes.",
//   },
//   {
//     id: 3,
//     title: "Title 3",
//     Profile: "/images/original-eb6e8ee8227e5464dce39146e8e7da54.png",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "A trailblazer in research and development, introducing groundbreaking technologies for a sustainable future.",
//     companyName: "Global Innovations Ltd.",
//     about:
//       "Global Innovations Ltd. pioneers in research and development, focusing on creating technologies that redefine the way industries operate and grow.",
//   },
//   {
//     id: 4,
//     title: "Title 4",
//     Profile: "/homeBg.jpg",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "Renowned for providing consultancy services, specializing in business analytics and market strategy.",
//     companyName: "VistaTech Enterprises",
//     about:
//       "VistaTech Enterprises provides comprehensive consultancy services, excelling in market research, business analytics, and strategic planning to help businesses thrive.",
//   },
//   {
//     id: 5,
//     title: "Title 5",
//     Profile: "/QR_code.png",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "An energy-focused company delivering cutting-edge renewable energy solutions to global markets.",
//     companyName: "Fusion Dynamics Inc.",
//     about:
//       "Fusion Dynamics Inc. combines expertise in renewable energy with sustainable practices, helping businesses transition to greener energy solutions.",
//   },
//   {
//     id: 6,
//     title: "Title 6",
//     Profile: "/img2.jpg",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "A tech giant offering solutions in cybersecurity, AI-driven analytics, and enterprise-grade software development.",
//     companyName: "AlphaWave Technologies",
//     about:
//       "AlphaWave Technologies delivers cutting-edge solutions in cybersecurity, AI-driven data analytics, and software development to enhance operational efficiency.",
//   },
//   {
//     id: 7,
//     title: "Title 7",
//     Profile: "/img3.jpg",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "Dedicated to healthcare innovation, specializing in medical devices and diagnostics for improved patient care.",
//     companyName: "NexGen Innovations",
//     about:
//       "NexGen Innovations advances healthcare technology with a focus on medical devices, diagnostics, and transformative patient care solutions.",
//   },
//   {
//     id: 8,
//     title: "Title 8",
//     Profile: "/img4.png",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "A leader in biotechnology, focusing on genetic research and pharmaceutical development for personalized medicine.",
//     companyName: "InnovaSphere Labs",
//     about:
//       "InnovaSphere Labs leads the way in biotechnology, specializing in genetic research, drug development, and innovative personalized healthcare solutions.",
//   },
// ];

// function MultipleItems() {
//   // const [activeCard, setActiveCard] = useState(null);
//   const [activeCard, setActiveCard] = useState<number | null>(null);

//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   const settings = {
//     className: "center",
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3, // Adjust based on number of visible cards
//     swipeToSlide: true,
//     autoplay: true, // Enables auto sliding
//     autoplaySpeed: 2000, // Swipes every 2 seconds
//     slidesToScroll: 1, // Moves 2 slides at a time
//   };

//   const handleCardClick = (id: number) => {
//     setActiveCard(id);
//   };

//   const closePopup = () => {
//     setActiveCard(null);
//   };

//   return (
//     <div
//       className="slider-container bg-gradient-to-r from-[#130C0B] to-[#0C0807]"
//       style={{ padding: "20px" }}
//     >
//       <Slider {...settings}>
//         {info.map((item) => (
//           <div key={item.id} style={{ padding: "0 30px" }}>
//             {/* Add margin or padding here for card spacing */}
//             <div
//               className="card"
//               style={{
//                 backgroundImage: `url(${item.Profile})`,
//                 backgroundSize: "cover",
//                 position: "relative",
//                 height: "300px",
//                 cursor: "pointer",
//                 borderRadius: "8px", // Optional styling
//                 overflow: "hidden",
//                 margin: "0 10px",
//               }}
//               onMouseEnter={() => setHoveredCard(item.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//               onClick={() => handleCardClick(item.id)}
//             >
//               <div
//                 className="profile-overlay"
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   backgroundColor: "rgba(0, 0, 0, 0.5)",
//                   opacity: hoveredCard === item.id ? 0 : 1,
//                   transition: "opacity 0.3s ease",
//                   zIndex: 2,
//                 }}
//               ></div>
//               <video
//                 className="video"
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   right: 0,
//                   bottom: 0,
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   zIndex: 1,
//                   display: hoveredCard === item.id ? "block" : "none",
//                 }}
//                 autoPlay
//                 muted
//                 loop
//               >
//                 <source src={item.video} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           </div>
//         ))}
//       </Slider>

//       {/* Popup */}
//       {activeCard !== null && (
//         <div
//           className="popup-overlay"
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: "rgba(0, 0, 0, 0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 999,
//           }}
//           onClick={closePopup}
//         >
//           <div
//             className="popup-content"
//             style={{
//               backgroundColor: "white",
//               padding: "20px",
//               borderRadius: "8px",
//               maxWidth: "500px",
//               width: "80%",
//               position: "relative",
//             }}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={closePopup}
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "10px",
//                 background: "transparent",
//                 border: "none",
//                 fontSize: "30px",
//                 cursor: "pointer",
//               }}
//             >
//               &times;
//             </button>
//             <p className="py-5 text-[20px] font-semibold text-center">
//               {info.find((item) => item.id === activeCard)?.title}
//             </p>
//             <p className="py-3 text-[16px] text-gray-800 px-4">
//               {info.find((item) => item.id === activeCard)?.description}
//             </p>
//             <p className="py-3 text-[16px] text-gray-800 px-4">
//               {info.find((item) => item.id === activeCard)?.about}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MultipleItems;

// "use client";
// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const info = [
//   {
//     id: 1,
//     title: "Title 1",
//     Profile: "/images/1696858826722.jpg",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "A leading company that specializes in providing advanced technology and sustainable practices to solve modern challenges.",
//     companyName: "Acme Corporation",
//     about:
//       "Acme Corporation is a global leader in innovative solutions for various industries, focusing on state-of-the-art technologies and sustainable business models.",
//   },
//   {
//     id: 2,
//     title: "Title 2",
//     Profile: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "Experts in digital transformation, offering services like software development and cloud solutions to drive business success.",
//     companyName: "TechNest Solutions",
//     about:
//       "TechNest Solutions offers cutting-edge IT services, including software development, cloud solutions, and digital transformation strategies tailored for businesses of all sizes.",
//   },
//   {
//     id: 3,
//     title: "Title 3",
//     Profile: "/images/original-eb6e8ee8227e5464dce39146e8e7da54.png",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "A trailblazer in research and development, introducing groundbreaking technologies for a sustainable future.",
//     companyName: "Global Innovations Ltd.",
//     about:
//       "Global Innovations Ltd. pioneers in research and development, focusing on creating technologies that redefine the way industries operate and grow.",
//   },
//   {
//     id: 4,
//     title: "Title 4",
//     Profile: "/homeBg.jpg",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "Renowned for providing consultancy services, specializing in business analytics and market strategy.",
//     companyName: "VistaTech Enterprises",
//     about:
//       "VistaTech Enterprises provides comprehensive consultancy services, excelling in market research, business analytics, and strategic planning to help businesses thrive.",
//   },
//   {
//     id: 5,
//     title: "Title 5",
//     Profile: "/QR_code.png",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "An energy-focused company delivering cutting-edge renewable energy solutions to global markets.",
//     companyName: "Fusion Dynamics Inc.",
//     about:
//       "Fusion Dynamics Inc. combines expertise in renewable energy with sustainable practices, helping businesses transition to greener energy solutions.",
//   },
//   {
//     id: 6,
//     title: "Title 6",
//     Profile: "/img2.jpg",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "A tech giant offering solutions in cybersecurity, AI-driven analytics, and enterprise-grade software development.",
//     companyName: "AlphaWave Technologies",
//     about:
//       "AlphaWave Technologies delivers cutting-edge solutions in cybersecurity, AI-driven data analytics, and software development to enhance operational efficiency.",
//   },
//   {
//     id: 7,
//     title: "Title 7",
//     Profile: "/img3.jpg",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "Dedicated to healthcare innovation, specializing in medical devices and diagnostics for improved patient care.",
//     companyName: "NexGen Innovations",
//     about:
//       "NexGen Innovations advances healthcare technology with a focus on medical devices, diagnostics, and transformative patient care solutions.",
//   },
//   {
//     id: 8,
//     title: "Title 8",
//     Profile: "/img4.png",
//     video:
//       "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
//     description:
//       "A leader in biotechnology, focusing on genetic research and pharmaceutical development for personalized medicine.",
//     companyName: "InnovaSphere Labs",
//     about:
//       "InnovaSphere Labs leads the way in biotechnology, specializing in genetic research, drug development, and innovative personalized healthcare solutions.",
//   },
// ];

// function MultipleItems() {
//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);

//   const settings = {
//     infinite: true,
//     slidesToShow: 3,
//     swipeToSlide: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024, // Large screens
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 768, // Tablets
//         settings: { slidesToShow: 1 },
//       },
//       {
//         breakpoint: 480, // Mobile devices
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="w-full lg:max-w-screen-2xl md:max-w-screen-lg mx-auto overflow-hidden px-4 bg-gradient-to-r from-[#130C0B] to-[#0C0807] py-10">
//       <Slider {...settings}>
//         {info.map((item) => (
//           <div key={item.id} className="px-2">
//             <div
//               className="relative h-72 rounded-lg overflow-hidden cursor-pointer"
//               style={{
//                 backgroundImage: `url(${item.Profile})`,
//                 backgroundSize: "cover",
//               }}
//               onMouseEnter={() => setHoveredCard(item.id)}
//               onMouseLeave={() => setHoveredCard(null)}
//             >
//               <div
//                 className={`absolute inset-0 bg-black transition-opacity duration-300 ${
//                   hoveredCard === item.id ? "opacity-0" : "opacity-50"
//                 }`}
//               ></div>
//               <video
//                 className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
//                   hoveredCard === item.id ? "block" : "hidden"
//                 }`}
//                 autoPlay
//                 muted
//                 loop
//               >
//                 <source src={item.video} type="video/mp4" />
//               </video>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default MultipleItems;
"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from "framer-motion";
import { IconX } from "@tabler/icons-react";

const info = [
  {
    id: 1,
    title: "Title 1",
    Profile: "/images/1696858826722.jpg",
    video: "/WhatsApp Video 2025-03-06 at 1.20.25 PM.mp4",
    description:
      "A leading company that specializes in providing advanced technology and sustainable practices to solve modern challenges.",
    companyName: "Acme Corporation",
    about:
      "Acme Corporation is a global leader in innovative solutions for various industries, focusing on state-of-the-art technologies and sustainable business models.",
  },
  {
    id: 2,
    title: "Title 2",
    Profile: "/images/4611023cdfc1d96c5bc7486cdc08ada9.png",
    video: "/flim video-2.mp4",
    description:
      "Experts in digital transformation, offering services like software development and cloud solutions to drive business success.",
    companyName: "TechNest Solutions",
    about:
      "TechNest Solutions offers cutting-edge IT services, including software development, cloud solutions, and digital transformation strategies tailored for businesses of all sizes.",
  },
  {
    id: 3,
    title: "Title 3",
    Profile: "/images/original-eb6e8ee8227e5464dce39146e8e7da54.png",
    video:
      "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
    description:
      "A trailblazer in research and development, introducing groundbreaking technologies for a sustainable future.",
    companyName: "Global Innovations Ltd.",
    about:
      "Global Innovations Ltd. pioneers in research and development, focusing on creating technologies that redefine the way industries operate and grow.",
  },
  {
    id: 4,
    title: "Title 4",
    Profile: "/homeBg.jpg",
    video:
      "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
    description:
      "Renowned for providing consultancy services, specializing in business analytics and market strategy.",
    companyName: "VistaTech Enterprises",
    about:
      "VistaTech Enterprises provides comprehensive consultancy services, excelling in market research, business analytics, and strategic planning to help businesses thrive.",
  },
  {
    id: 5,
    title: "Title 5",
    Profile: "/QR_code.png",
    video:
      "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
    description:
      "An energy-focused company delivering cutting-edge renewable energy solutions to global markets.",
    companyName: "Fusion Dynamics Inc.",
    about:
      "Fusion Dynamics Inc. combines expertise in renewable energy with sustainable practices, helping businesses transition to greener energy solutions.",
  },
  {
    id: 6,
    title: "Title 6",
    Profile: "/img2.jpg",
    video:
      "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
    description:
      "A tech giant offering solutions in cybersecurity, AI-driven analytics, and enterprise-grade software development.",
    companyName: "AlphaWave Technologies",
    about:
      "AlphaWave Technologies delivers cutting-edge solutions in cybersecurity, AI-driven data analytics, and software development to enhance operational efficiency.",
  },
  {
    id: 7,
    title: "Title 7",
    Profile: "/img3.jpg",
    video:
      "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
    description:
      "Dedicated to healthcare innovation, specializing in medical devices and diagnostics for improved patient care.",
    companyName: "NexGen Innovations",
    about:
      "NexGen Innovations advances healthcare technology with a focus on medical devices, diagnostics, and transformative patient care solutions.",
  },
  {
    id: 8,
    title: "Title 8",
    Profile: "/img4.png",
    video:
      "https://videos.pexels.com/video-files/2795382/2795382-uhd_2560_1440_25fps.mp4",
    description:
      "A leader in biotechnology, focusing on genetic research and pharmaceutical development for personalized medicine.",
    companyName: "InnovaSphere Labs",
    about:
      "InnovaSphere Labs leads the way in biotechnology, specializing in genetic research, drug development, and innovative personalized healthcare solutions.",
  },
];

function MultipleItems() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCard, setSelectedCard] = useState<any | null>(null);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCardClick = (item: any) => {
    setSelectedCard(item);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
    <div className="w-full lg:max-w-screen-2xl md:max-w-screen-lg mx-auto overflow-hidden px-7 py-10">
      <Slider {...settings}>
        {info.map((item) => (
          <div
            key={item.id}
            className="px-2 group flex justify-center items-center"
            onClick={() => handleCardClick(item)}
          >
            <motion.h4
              initial={{ x: 100 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white absolute text-[32px] hidden group-hover:block pl-[150px] top-[100px]"
            >
              Yezdi
            </motion.h4>
            {/* Centered Name */}
            <h4 className="text-white absolute text-[32px] hidden group-hover:flex items-center justify-center w-full h-full">
              Name
            </h4>
            <div
              className="relative h-72 rounded-lg overflow-hidden cursor-pointer bg-black hover:opacity-20"
              style={{
                backgroundImage: `url(${item.Profile})`,
                backgroundSize: "cover",
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <video
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                  hoveredCard === item.id ? "block" : "hidden"
                }`}
                autoPlay
                muted
                loop
              >
                <source src={item.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </Slider>

      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={handleClosePopup}
                className="absolute top-4 right-4 z-60 bg-black text-white hover:bg-white hover:text-black duration-300 rounded-full p-2"
              >
                <IconX className="h-6 w-6" />
              </button>

              <div className=" gap-6 ">
                {/* Video Section */}
                <div className="w-full h-[500px] rounded-xl overflow-hidden">
                  <video
                    src={selectedCard.video}
                    className="w-full h-full object-cover"
                    autoPlay
                    controls
                    muted
                  />
                </div>

                {/* Details Section */}
                {/* <div className="space-y-4">
                  <h2 className="text-3xl font-bold text-gray-900">
                    {selectedCard.companyName}
                  </h2>
                  <p className="text-xl text-gray-700">
                    {selectedCard.description}
                  </p>
                  <div className="bg-gray-100 p-4 rounded-xl">
                    <h3 className="text-xl font-semibold mb-2">About</h3>
                    <p className="text-gray-600">{selectedCard.about}</p>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MultipleItems;
