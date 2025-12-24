import { education } from "../data/education";
import SectionWrapper from "./SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper
      id="education"
      className="
        py-16 sm:py-20 md:py-28
        px-4 sm:px-6
      "
    >
      <h2
        className="
          text-2xl sm:text-3xl md:text-4xl
          font-bold text-center
          text-gray-900 dark:text-gray-100
        "
      >
        Education Background
      </h2>

      <div className="mt-2 mb-6 flex justify-center">
        <span className="w-14 sm:w-16 h-1 rounded-full bg-blue-500" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Vertical line */}
        <div
          className="
            absolute
            left-2 sm:left-4
            top-0 h-full
            w-px
            bg-gray-300 dark:bg-gray-700
          "
        />

        <div className="space-y-12 sm:space-y-16">
          {education.map((edu, index) => (
            <div
              key={index}
              className="
                relative
                pl-10 sm:pl-16
              "
            >
              {/* Timeline dot */}
              <div
                className={`
                  absolute
                  left-0
                  top-2
                  w-6 h-6 sm:w-8 sm:h-8
                  rounded-full
                  flex items-center justify-center
                  border-2
                  ${
                    edu.status === "Pursuing"
                      ? "border-blue-500 bg-blue-500/20"
                      : "border-green-500 bg-green-500/20"
                  }
                `}
              >
                <div
                  className={`
                    w-2 h-2 sm:w-3 sm:h-3
                    rounded-full
                    ${
                      edu.status === "Pursuing"
                        ? "bg-blue-500"
                        : "bg-green-500"
                    }
                  `}
                />
              </div>

              {/* Card */}
              <div
                className="
                  bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black
                  border border-gray-300 dark:border-gray-800
                  rounded-2xl
                  p-4 sm:p-6
                  hover:border-gray-400 dark:hover:border-gray-600
                  transition-colors duration-300
                "
              >
                <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                  <h3
                    className="
                      text-base sm:text-xl
                      font-semibold
                      text-gray-900 dark:text-gray-100
                    "
                  >
                    {edu.degree}
                  </h3>

                  <span
                    className={`
                      text-xs
                      px-3 py-1
                      rounded-full
                      border
                      ${
                        edu.status === "Pursuing"
                          ? "border-blue-500 text-blue-600 dark:text-blue-400"
                          : "border-green-500 text-green-600 dark:text-green-400"
                      }
                    `}
                  >
                    {edu.status}
                  </span>
                </div>

                <p
                  className="
                    text-sm
                    mb-1
                    text-gray-700 dark:text-gray-400
                  "
                >
                  {edu.field}
                </p>

                <p
                  className="
                    text-sm
                    text-gray-600 dark:text-gray-500
                  "
                >
                  {edu.institute}
                </p>

                <p
                  className="
                    text-sm
                    mt-2
                    text-gray-600 dark:text-gray-500
                  "
                >
                  {edu.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
