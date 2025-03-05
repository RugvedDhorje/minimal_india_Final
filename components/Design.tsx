import { motion } from "framer-motion";
import { Card, Carousel } from "./ui/apple-cards-carousel";

export function Design() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <div className="w-full mx-auto bg-red-400">
      <div className="max-w-screen-2xl h-screen w-11/12 mx-auto bg-yellow-500 flex flex-col justify-center items-center">
        <motion.div
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          {/* <h1 className="text-[#292929] lg:text-[60px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash ">
                Designs that speak louder than words
              </h1> */}
          <h1 className="text-[#292929] lg:text-[70px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash relative z-2">
            Designs that{" "}
            <span
              className="bg-gradient-to-r from-[#0e0844]  to-[#380935] lg:text-[70px] md:text-[50px] text-[36px] mx-auto leading-none font-bold text-center font-clash relative z-2
                 text-transparent bg-clip-text 
                  cursor-pointer"
            >
              speak louder
            </span>{" "}
            than words
          </h1>
          <h2 className="text-[#292929] lg:text-[30px] text-[25px] mx-auto leading-none text-center font-clash mt-5">
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
          className="w-full mt-10"
        >
          {/* <Carousel items={cards} /> */}
          <Carousel items={cards} />
        </motion.div>
      </div>
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
