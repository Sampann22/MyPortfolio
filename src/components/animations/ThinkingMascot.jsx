import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const thoughts = [
  "It worked yesterday…",
  "Just one more refactor.",
  "Why is this undefined?",
  "Trust me, this is fine.",
  "Console.log will save me.",
  "Ship now, fix later.",
];

const positions = [
  { top: "-20%", left: "60%" },
  { top: "-35%", left: "20%" },
  { top: "10%", left: "105%" },
  { top: "-10%", left: "-35%" },
];

export default function ThinkingMascot() {
  const [index, setIndex] = useState(0);
  const [pos, setPos] = useState(positions[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % thoughts.length);
      setPos(positions[Math.floor(Math.random() * positions.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-64 flex items-center justify-center">

      {/* Thought bubble */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 6, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.9 }}
          transition={{ duration: 0.4 }}
          className="absolute z-20"
          style={pos}
        >
          <div className="px-4 py-2 bg-white dark:bg-neutral-900
                          border border-gray-300 dark:border-gray-700
                          rounded-full shadow-sm max-w-[180px]">
            <p className="text-xs font-mono text-gray-700 dark:text-gray-300">
              {thoughts[index]}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Mascot container */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative z-10"
      >
        {/* BODY */}
        <div className="relative w-40 h-24 bg-orange-500 rounded-[45%]">

          {/* HEAD */}
          <div className="absolute -top-10 -translate-x-1/2">
            <div className="relative w-28 h-24 bg-orange-400 rounded-[40%] flex items-center justify-center">

              {/* Eyes */}
              <div className="flex gap-4">
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3 }}
                  className="w-2 h-3 bg-black rounded-full"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 3 }}
                  className="w-2 h-3 bg-black rounded-full"
                />
              </div>

              {/* Snout */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2
                              w-14 h-8 bg-neutral-200 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-black rounded-full" />
              </div>

              {/* Ears */}
              <motion.div
                animate={{ rotate: [-10, 0, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-4 w-10 h-6 bg-orange-500 rounded-b-full"
              />
              <motion.div
                animate={{ rotate: [10, 0, 10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-4 w-10 h-6 bg-orange-500 rounded-b-full"
              />
            </div>
          </div>

          {/* Tail */}
          <motion.div
            animate={{ rotate: [-20, 20, -20] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-10 w-8 h-3 bg-orange-400 rounded-full origin-left"
          />
        </div>
      </motion.div>
    </div>
  );
}
