"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: string; // Change from quote/name/title to image
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-screen-2xl w-11/12 rounded-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          " flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {/* {items.map((item, index) => (
          <li
            className="w-[200px] max-w-full relative  px-4  md:w-[300px]  "
            key={index}
          >
            
            <img
              src={item.image} // Ensure `item.image` contains the image URL
              alt="Item Image"
              className="w-full object-cover rounded-lg h-20"
            />
          </li>
        ))} */}
        {items.map((item, index) => (
          <li
            className="w-[200px] max-w-full relative px-4 md:w-[300px] flex items-center rounded-2xl bg-white/10 backdrop-blur-sm backdrop-brightness-125 backdrop-contrast-150 p-6 shadow-lg"
            key={index}
          >
            {/* Image inside each list item */}
            <img
              src={item.image}
              alt="Item Image"
              className="w-full object-contain rounded-lg h-[120px] "
            />

            {/* Always show vertical line */}
            {/* <div className="w-[2px] h-20 bg-gray-300 ml-4"></div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};
