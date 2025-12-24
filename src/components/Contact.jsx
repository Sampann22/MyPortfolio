import { contactLinks } from "../data/contact";
import SectionWrapper from "./SectionWrapper";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="py-28 px-6">
      {/* Headline */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2
          className="
            text-3xl md:text-4xl font-bold text-center
            text-gray-900 dark:text-gray-100
          "
        >
          Let's Connect
        </h2>

        <div className="mt-2 mb-5 flex justify-center">
          <span className="w-16 h-1 rounded-full bg-blue-500" />
        </div>

        <p
          className="text-lg
                     text-gray-600 dark:text-gray-400"
        >
          Open to opportunities, collaborations, and meaningful conversations.
        </p>
      </div>

      {/* Contact cards */}
      <div className="max-w-5xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {contactLinks.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group relative p-6 rounded-2xl
                bg-gray-100 dark:bg-gradient-to-br dark:from-gray-900 dark:to-black
                border border-gray-300 dark:border-gray-800
                hover:-translate-y-2
                transition-all duration-300
              "
              style={{ borderColor: item.color }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-2xl
                           opacity-0 group-hover:opacity-100
                           blur-xl transition"
                style={{ backgroundColor: `${item.color}22` }}
              />

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <Icon
                  size={28}
                  style={{ color: item.color }}
                  className="mb-4"
                />

                <h3
                  className="text-lg font-semibold mb-1
                             text-gray-900 dark:text-gray-100"
                >
                  {item.label}
                </h3>

                <p
                  className="text-sm break-all
                             text-gray-700 dark:text-gray-400"
                >
                  {item.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
