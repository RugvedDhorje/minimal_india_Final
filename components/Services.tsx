"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, Carousel } from "./ui/apple-cards-carousel";
// import { Design } from "./Design";

export default function Services() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const circleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to scale values for the circle
  const circleScale = useTransform(scrollYProgress, [0.19, 0.27], [1, 150]);
  const innerCircleScale = useTransform(scrollYProgress, [0.19, 0.27], [1, 5]);

  return (
    <div className="relative w-full h-auto">
      {/* Sticky Section */}
      <motion.div className="w-full mx-auto rounded-t-3xl overflow-hidden pb-[100px]">
        <motion.h1
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-[90px] md:text-[70px] text-[50px] font-bold text-gray-900 leading-none sm:pt-[50px]  pb-[70px]"
        >
          Embrace the future of <br /> urban mobility
        </motion.h1>

        <div className="max-w-screen-2xl w-9/12 sm:w-full lg:w-9/12 mx-auto sm:flex sm:flex-wrap mb-10 relative ">
          {/* Circle in the middle */}
          <div className="absolute inset-0 sm:flex items-center justify-center hidden  pointer-events-none z-30">
            <motion.div
              className="z-40"
              ref={circleRef}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: "#FFBA01",
                display: "flex",
                scale: circleScale,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div
                ref={innerCircleRef}
                className="-z-10"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  scale: innerCircleScale,
                }}
              ></motion.div>
            </motion.div>
          </div>

          {/* Content Divs */}
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0  mb-[50px] sm:mb-0 ">
            <div className="lg:p-[100px] md:p-[80px] w-5/6 md:w-full lg:w-5/6 mx-auto sm:border-r sm:border-b sm:border-gray-700 rounded-br-[70px]">
              <motion.h4
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[30px] text-[24px] text-center font-semibold mb-2"
              >
                STRESS-FREE SERVICES
              </motion.h4>
              <motion.p
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[18px] text-[16px] font-light"
              >
                Unlock effortless mobility—from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </motion.p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0  mb-[50px] sm:mb-0 ">
            <div className="lg:p-[100px] md:p-[80px] w-5/6 md:w-full lg:w-5/6 mx-auto ">
              <motion.h4
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[30px] text-[24px] text-center font-semibold"
              >
                STRESS-FREE SERVICES
              </motion.h4>
              <motion.p
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[18px] text-[16px] font-light"
              >
                Unlock effortless mobility—from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </motion.p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0  mb-[50px] sm:mb-0">
            <div className="sm:p-[100px] w-5/6 md:w-full lg:w-5/6 mx-auto">
              <motion.h4
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[30px] text-[24px] text-center font-semibold"
              >
                STRESS-FREE SERVICES
              </motion.h4>
              <motion.p
                initial={{ x: -150 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
                className="md:text-[18px] text-[16px] font-light"
              >
                Unlock effortless mobility—from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </motion.p>
            </div>
          </div>
          <div className="sm:w-1/2 w-full mt-5 sm:mt-0  mb-[50px] sm:mb-0">
            <div className="lg:p-[100px] md:p-[80px] m-5 w-5/6 md:w-full lg:w-5/6 mx-auto sm:border-l sm:border-t sm:border-gray-700 rounded-tl-[70px]">
              <motion.h4
                initial={{ x: 100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="md:text-[30px] text-[24px] text-center font-semibold"
              >
                STRESS-FREE SERVICES
              </motion.h4>
              <motion.p
                initial={{ x: 150 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.3 }}
                className="md:text-[18px] text-[16px] font-light"
              >
                Unlock effortless mobility—from seamless registration to
                all-inclusive maintenance, we handle the details so you enjoy
                the ride.
              </motion.p>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto ">
          <div className="max-w-screen-2xl w-11/12 mx-auto mt-[80px]">
            <motion.div
              //   initial={{ y: 200 }}
              //   whileInView={{ y: 0 }}
              //   transition={{ duration: 0.8 }}
              className="w-full "
            >
              {/* <h1 className="text-[#292929] lg:text-[60px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash ">
                        Designs that speak louder than words
                      </h1> */}
              <h1 className="text-[#292929] lg:text-[60px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash relative z-30">
                Designs that{" "}
                <span
                  className="bg-gradient-to-r from-[#0e0844]  to-[#380935] lg:text-[60px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash relative 
                         text-transparent bg-clip-text 
                          cursor-pointer"
                >
                  speak louder
                </span>{" "}
                than words
              </h1>
              <h2 className="text-[#292929] lg:text-[30px] text-[20px] mx-auto leading-none text-center font-clash mt-5 relative z-30">
                From bold ideas to beautiful executions, we craft visuals that
                inspire
              </h2>
            </motion.div>
            <div className="mt-5 w-full flex justify-end">
              {/* <NavigationMenuDemo /> */}
            </div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full z-30 relative"
            >
              {/* <Carousel items={cards} /> */}
              <Carousel items={cards} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/21 DESIGN MINIMAL INDIAN .jpg",
    content: [
      "/set 3/20 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/16 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/17 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/18 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/19 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/22 DESIGN MINIMAL INDIAN .jpg",
      "/set 3/23 DESIGN MINIMAL INDIAN .jpg",
    ],
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/CARD 30 DESIGN MINIMAL INDIAN  copy.jpg",
    content: [
      "/set 1/14 DESIGN MINIMAL INDIAN .jpg",
      "/set 1/15 DESIGN MINIMAL INDIAN .jpg",
      "/set 1/30 DESIGN MINIMAL INDIAN .jpg",
      "/set 1/31 DESIGN MINIMAL INDIAN .jpg",
      "/set 1/32 DESIGN MINIMAL INDIAN .jpg",
      "/img4.png",
      "/img2.jpg",
    ],
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/CARD 9 DESIGN MINIMAL INDIAN .jpg",
    content: [
      "/set 4/4 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/5 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/6 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/7 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/10 DESIGN MINIMAL INDIAN .jpg",
      "/set 4/11 DESIGN MINIMAL INDIAN .jpg",
    ],
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/set 2/26 DESIGN MINIMAL INDIAN .jpg",
    content: [
      "/set 2/1 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/2 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/26 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/24 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/27 DESIGN MINIMAL INDIAN .jpg",
      "/set 2/25 DESIGN MINIMAL INDIAN .jpg",
    ],
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "/img1 (1).jpg",
      "/img2.jpg",
      "/img3.jpg",
      "/img1 (1).jpg",
      "/img4.png",
      "/img2.jpg",
    ],
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: [
      "/img1 (1).jpg",
      "/img2.jpg",
      "/img3.jpg",
      "/img1 (1).jpg",
      "/img4.png",
      "/img2.jpg",
    ],
  },
];
