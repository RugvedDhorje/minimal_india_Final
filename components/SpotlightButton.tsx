import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const SpotlightButton = () => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current || !spanRef.current) return;

      const { width } = btnRef.current.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current.animate({ left }, { duration: 250, fill: "forwards" });
    };

    const handleMouseLeave = () => {
      if (spanRef.current) {
        spanRef.current.animate(
          { left: "50%" },
          { duration: 100, fill: "forwards" }
        );
      }
    };

    if (btnRef.current) {
      btnRef.current.addEventListener("mousemove", handleMouseMove);
      btnRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (btnRef.current) {
        btnRef.current.removeEventListener("mousemove", handleMouseMove);
        btnRef.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className="relative w-full max-w-xs overflow-hidden rounded-lg bg-[#030406] px-7 py-3 text-lg font-medium text-white"
      style={{
        borderRadius: "7px",
      }}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        Let’s Create Together
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-24 w-24 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export default SpotlightButton;
