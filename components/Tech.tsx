import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import CircularImageCarousel from "./CircleCarousel";

export function Tech() {
  // const circleRef = useRef(null);
  // const innerCircleRef = useRef(null);
  // const { scrollYProgress } = useScroll();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Opacity transition from 0 → 1 based on scroll progress
  const backgroundOpacity = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
  // Map scroll progress to scale values for the circle
  // const circleScale = useTransform(scrollYProgress, [0.44, 0.46], [1, 150]);
  // const innerCircleScale = useTransform(
  //   scrollYProgress,
  //   [0.44, 0.46],
  //   [1, 100]
  // );
  const backgroundColor = useTransform(
    backgroundOpacity,
    [0.45, 0.6],
    ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 1)"]
  );

  return (
    <div className="w-full mx-auto">
      <div className="overflow-hidden dark:bg-[#0B0B0F] w-full mx-auto relative ">
        {/* <div className="absolute inset-0 flex justify-center -z-10 pt-[500px]">
          <motion.div
            ref={circleRef}
            className=""
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              // backgroundColor: "#e5e7eb",
              backgroundColor: "#FFF",
              display: "flex",
              scale: circleScale,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <motion.div
              ref={innerCircleRef}
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "Black",
                // opacity: "90%",
                scale: innerCircleScale,
              }}
            ></motion.div>
          </motion.div>
        </div> */}
        <motion.div
          ref={ref}
          style={{
            backgroundColor: backgroundColor, // Dynamically changes background color
          }}
          className="w-full hidden sm:block mx-auto overflow-hidden bg-black"
        >
          <MacbookScroll src={`/1739448852325344.mp4`} showGradient={false} />
        </motion.div>

        <CircularImageCarousel />
      </div>
    </div>
  );
}
