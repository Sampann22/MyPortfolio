/* eslint-disable no-unused-vars */
import { projects } from "../data/project";
import { useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function Projects() {
  const [active, setActive] = useState(null);

  return (
    <SectionWrapper id="projects" className="py-28 px-6 bg-gray-50 dark:bg-neutral-900">
      <h2
        className="
          text-3xl md:text-4xl font-bold text-center
          text-gray-900 dark:text-gray-100
        "
      >
        My Projects
      </h2>

      <div className="mt-2 mb-5 flex justify-center">
        <span className="w-16 h-1 rounded-full bg-blue-500" />
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`
              group relative rounded-2xl p-6
              bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black
              border border-gray-300 dark:border-gray-800
              transition-colors duration-300
              ${project.featured ? "md:col-span-2" : ""}
            `}
            style={{ borderColor: project.color }}
          >
            {/* Badges */}
            <div className="flex gap-3 mb-4">
              <span
                className="text-xs px-3 py-1 rounded-full border"
                style={{ borderColor: project.color, color: project.color }}
              >
                {project.type}
              </span>

              <span
                className="text-xs px-3 py-1 rounded-full border
                           border-gray-400 dark:border-gray-600
                           text-gray-700 dark:text-gray-400"
              >
                {project.status}
              </span>
            </div>

            {/* Title */}
            <h3
              className="text-xl font-semibold mb-2
                         text-gray-900 dark:text-gray-100"
            >
              {project.title}
            </h3>

            <p
              className="text-sm mb-3
                         text-gray-700 dark:text-gray-400"
            >
              {project.description}
            </p>

            {/* Role highlight */}
            <p
              className="text-sm italic mb-6
                         text-gray-600 dark:text-gray-500"
            >
              {project.highlight}
            </p>

            {/* Tech */}
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="
                    text-xs px-3 py-1 rounded-full border
                    border-gray-400 dark:border-gray-700
                    text-gray-700 dark:text-gray-300
                  "
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Hover overlay */}
            <div
              className="
                absolute inset-0 rounded-2xl
                backdrop-blur-sm
                bg-white/70 dark:bg-black/70
                opacity-0 group-hover:opacity-100
                transition-opacity duration-300
                flex items-center justify-center
              "
            >
              <div className="flex flex-col sm:flex-row gap-4">

                {/* Live / Coming Soon */}
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-lg font-semibold text-white"
                    style={{ backgroundColor: project.color }}
                  >
                    View Live
                  </a>
                ) : (
                  <span
                    className="
                      px-5 py-2 rounded-lg border
                      border-gray-400 dark:border-gray-600
                      text-gray-700 dark:text-gray-300
                      text-sm
                    "
                  >
                    Coming Soon
                  </span>
                )}

                {/* Source Code */}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-5 py-2 rounded-lg border
                      border-gray-400 dark:border-gray-600
                      text-gray-800 dark:text-gray-200
                      hover:bg-gray-200 dark:hover:bg-gray-800
                      transition-colors duration-300
                    "
                  >
                    View Code
                  </a>
                )}

              </div>
            </div>

          </div>
        ))}
      </div>
      
    </SectionWrapper>
  );
}
