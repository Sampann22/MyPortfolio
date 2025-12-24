import { motion as Motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import profile from "../assets/mine.jpeg";
import SectionWrapper from "./SectionWrapper";

const roles = [
  "Building real-world applications",
  "Working across full-stack systems",
  "Turning ideas into scalable products",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <SectionWrapper className="min-h-screen bg-gray-50 dark:bg-neutral-900 flex items-center justify-center px-6 pt-28">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left: Text */}
        <div>
         <h1
            className="
              text-4xl md:text-6xl font-bold mb-6
              text-gray-900 dark:text-gray-100
              leading-tight
              whitespace-nowrap
            "
          >
            <span className="font-semibold mr-2">Hello,</span>
            I’m{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Sampann Tiwari
            </span>
          </h1>


          <AnimatePresence mode="wait">
            <Motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-xl mb-8 h-8
                         text-gray-600 dark:text-gray-400"
            >
              {roles[index]}
            </Motion.p>
          </AnimatePresence>

          <div className="flex gap-4">
            {/* Primary CTA */}
            <a
              href="#projects"
              className="
                px-6 py-3 rounded-lg font-semibold
                bg-blue-600 dark:bg-blue-500
                text-white
                hover:bg-blue-700 dark:hover:bg-blue-400
                transition-colors duration-300
              "
            >
              View Projects
            </a>

            {/* Secondary CTA */}
            <a
              href="/Sampann_Resume_da.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-3 rounded-lg font-semibold
                border border-gray-400 dark:border-gray-600
                text-gray-800 dark:text-gray-200
                hover:bg-gray-200 dark:hover:bg-gray-800
                transition-colors duration-300
              "
            >
              Resume
            </a>
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={profile}
            alt="Sampann Tiwari"
            className="
              max-w-[280px] md:max-w-[340px] w-full h-auto
              rounded-xl
              border border-blue-500/40
              shadow-[0_0_25px_rgba(59,130,246,0.35)]
              hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
              transition-shadow duration-300
            "
          />
        </div>

      </div>
    </SectionWrapper>
  );
}
