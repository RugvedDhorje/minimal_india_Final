import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { MacbookScroll } from "./ui/macbook-scroll";
import CircularImageCarousel from "./CircleCarousel";

export function Tech() {
  const circleRef = useRef(null);
  const innerCircleRef = useRef(null);
  const { scrollYProgress } = useScroll();

  // Map scroll progress to scale values for the circle
  const circleScale = useTransform(scrollYProgress, [0.44, 0.46], [1, 150]);
  const innerCircleScale = useTransform(
    scrollYProgress,
    [0.44, 0.46],
    [1, 100]
  );

  return (
    <div className="w-full mx-auto">
      <div className="overflow-hidden dark:bg-[#0B0B0F] w-full mx-auto relative ">
        <div className="absolute inset-0 flex justify-center -z-10 pt-[500px]">
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
        </div>
        <div className="max-w-screen-2xl hidden sm:block mx-auto overflow-hidden">
          <MacbookScroll src={`/1739448852325344.mp4`} showGradient={false} />
        </div>

        <CircularImageCarousel />
      </div>
    </div>
  );
}
