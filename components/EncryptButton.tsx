import { useRef, useState } from "react";
import { motion } from "framer-motion";

// const Example = () => {
//   return (
//     <div className="grid min-h-[200px] place-content-center bg-neutral-900 p-4">
//       <EncryptButton />
//     </div>
//   );
// };

const TARGET_TEXT = "Get In Touch";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = () => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [text, setText] = useState<string>(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomChar = CHARS[Math.floor(Math.random() * CHARS.length)];
          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setText(TARGET_TEXT);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      style={{
        borderRadius: "8px",
      }}
      className="group relative overflow-hidden rounded-lg border-[1px] border-[#292929] bg-[#292929] px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-white"
    >
      {/* className="hidden lg:block text-[16px] font-normal uppercase px-4 py-2 border border-gray-700 rounded-xl text-gray-700 hover:bg-gray-700 hover:text-white transition" */}
      <div className="relative z-10 flex items-center gap-2 px-2">
        <span>{text}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-white/0 from-40% via-white/100 to-white/0 to-60%
 opacity-0 transition-opacity group-hover:opacity-100"
      />
    </motion.button>
  );
};

export default EncryptButton;
