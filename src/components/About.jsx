import SectionWrapper from "./SectionWrapper";
import ThinkingMascot from "./animations/ThinkingMascot";
import ThinkingDog from "./animations/ThinkingMascot";



export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="py-28 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT: Humorous Terminal */}
        <ThinkingMascot />

        {/* RIGHT: Text */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold
                         text-gray-900 dark:text-gray-100">
            About Me
          </h2>

          <div className="mt-4">
            <span className="w-20 h-[3px] bg-blue-500 rounded-full block" />
          </div>

          <p className="mt-8 text-lg leading-relaxed
                        text-gray-700 dark:text-gray-400">
            I am a fresher with hands-on experience in building and deploying
            real-world web applications. I enjoy working across the full stack,
            understanding how systems function end-to-end, and turning ideas
            into reliable, usable products.
          </p>

          <p className="mt-6 text-lg leading-relaxed
                        text-gray-700 dark:text-gray-400">
            I focus on writing clean, maintainable code, learning by building,
            and continuously improving my problem-solving and technical skills
            through practical implementation rather than theory alone.
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
}
