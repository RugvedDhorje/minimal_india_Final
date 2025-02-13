"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const info = [
  {
    id: 1,
    title: "Title 1",
    Profile: "/images/1696858826722.jpg",
    video: "/2795382-uhd_3840_2160_25fps.mp4",
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
    video: "/2795382-uhd_3840_2160_25fps.mp4",
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
    video: "/2795382-uhd_3840_2160_25fps.mp4",
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
    video: "/2795382-uhd_3840_2160_25fps.mp4",
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
    video: "/2795382-uhd_3840_2160_25fps.mp4",
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
    video: "/2795382-uhd_3840_2160_25fps.mp4",
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
    video: "/2795382-uhd_3840_2160_25fps.mp4",
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
    video: "/2795382-uhd_3840_2160_25fps.mp4",
    description:
      "A leader in biotechnology, focusing on genetic research and pharmaceutical development for personalized medicine.",
    companyName: "InnovaSphere Labs",
    about:
      "InnovaSphere Labs leads the way in biotechnology, specializing in genetic research, drug development, and innovative personalized healthcare solutions.",
  },
];

function MultipleItems() {
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3, // Adjust based on number of visible cards
    swipeToSlide: true,
    autoplay: true, // Enables auto sliding
    autoplaySpeed: 2000, // Swipes every 2 seconds
    slidesToScroll: 1, // Moves 2 slides at a time
  };

  const handleCardClick = (id) => {
    setActiveCard(id);
  };

  const closePopup = () => {
    setActiveCard(null);
  };

  return (
    <div
      className="slider-container bg-gradient-to-r from-[#130C0B] to-[#0C0807]"
      style={{ padding: "20px" }}
    >
      <Slider {...settings}>
        {info.map((item) => (
          <div key={item.id} style={{ padding: "0 30px" }}>
            {/* Add margin or padding here for card spacing */}
            <div
              className="card"
              style={{
                backgroundImage: `url(${item.Profile})`,
                backgroundSize: "cover",
                position: "relative",
                height: "300px",
                cursor: "pointer",
                borderRadius: "8px", // Optional styling
                overflow: "hidden",
                margin: "0 10px",
              }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(item.id)}
            >
              <div
                className="profile-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  opacity: hoveredCard === item.id ? 0 : 1,
                  transition: "opacity 0.3s ease",
                  zIndex: 2,
                }}
              ></div>
              <video
                className="video"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 1,
                  display: hoveredCard === item.id ? "block" : "none",
                }}
                autoPlay
                muted
                loop
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ))}
      </Slider>

      {/* Popup */}
      {activeCard !== null && (
        <div
          className="popup-overlay"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
          onClick={closePopup}
        >
          <div
            className="popup-content"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "500px",
              width: "80%",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "transparent",
                border: "none",
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <p className="py-5 text-[20px] font-semibold text-center">
              {info.find((item) => item.id === activeCard)?.title}
            </p>
            <p className="py-3 text-[16px] text-gray-800 px-4">
              {info.find((item) => item.id === activeCard)?.description}
            </p>
            <p className="py-3 text-[16px] text-gray-800 px-4">
              {info.find((item) => item.id === activeCard)?.about}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default MultipleItems;
