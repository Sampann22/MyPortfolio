import { skills } from "../data/Skills";
import SectionWrapper from "./SectionWrapper";

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="
        py-16 sm:py-20 md:py-24
        px-4 sm:px-6
        bg-gray-50 dark:bg-neutral-900
      "
    >
      <h2
        className="
          text-2xl sm:text-3xl md:text-4xl
          font-bold text-center
          text-gray-900 dark:text-gray-100
        "
      >
        Techs I have worked with
      </h2>

      {/* Accent underline */}
      <div className="mt-2 mb-6 flex justify-center">
        <span className="w-14 sm:w-16 h-1 rounded-full bg-blue-500" />
      </div>

      <div
        className="
          max-w-6xl mx-auto
          grid grid-cols-2
          sm:grid-cols-3
          md:grid-cols-4
          lg:grid-cols-5
          gap-4 sm:gap-5 md:gap-6
        "
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <div
              key={index}
              className="
                group relative
                p-4 sm:p-5
                rounded-2xl
                bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black
                border border-gray-300 dark:border-gray-800
                transition-all duration-300
                hover:-translate-y-2
              "
              style={{
                borderColor: skill.color,
                boxShadow: "0 0 0 rgba(0,0,0,0)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = `0 0 24px ${skill.color}55`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "0 0 0 rgba(0,0,0,0)")
              }
            >
              {/* Glow layer */}
              <div
                className="
                  absolute inset-0 rounded-2xl
                  opacity-0 group-hover:opacity-100
                  blur-xl transition
                "
                style={{ backgroundColor: `${skill.color}22` }}
              />

              {/* Content */}
              <div className="relative z-10">
                <Icon
                  size={24}
                  className="mb-2 sm:mb-3"
                  style={{ color: skill.color }}
                />

                <h4
                  className="
                    text-sm sm:text-base
                    font-semibold
                    text-gray-900 dark:text-gray-100
                  "
                >
                  {skill.name}
                </h4>

                <p
                  className="
                    text-[11px] sm:text-xs
                    mt-1
                    text-gray-600 dark:text-gray-400
                  "
                >
                  {skill.hint}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
