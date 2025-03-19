import React from "react";
import { motion } from "framer-motion";
import { CircleArrowUp } from "lucide-react";
import { Link } from "react-scroll";

const TopButton = () => {
  return (
    <motion.div
      initial={{ x: -50 }}
      whileInView={{ x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed right-5 bottom-14 p-1 bg-white rounded-full shadow-lg z-50 cursor-pointer"
      style={{ zIndex: 1000 }}
    >
      <Link to="home" smooth={true} duration={500}>
        <CircleArrowUp size={40} color="black" />
      </Link>
    </motion.div>
  );
};

export default TopButton;
