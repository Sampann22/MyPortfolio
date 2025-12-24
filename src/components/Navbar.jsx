import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav
      className="
        fixed top-0 left-0 w-full z-50
        backdrop-blur
        bg-white/80 dark:bg-black/80
        border-b border-gray-200 dark:border-gray-800
        transition-colors duration-300
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          px-4 sm:px-6
          py-3 sm:py-4
          flex justify-between items-center
        "
      >

        {/* Brand */}
        <a
          href="#"
          className="
            font-semibold
            text-gray-900 dark:text-gray-200
            hover:text-blue-600 dark:hover:text-blue-400
            transition-colors
            whitespace-nowrap
          "
        >
          Sampann Tiwari
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {["about", "skills", "education", "projects", "contact"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="
                capitalize
                text-gray-700 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-blue-400
                transition-colors
              "
            >
              {id}
            </a>
          ))}
        </div>

        {/* Right side (Mobile indicator + Theme) */}
        <div className="flex items-center gap-3">
          {/* Mobile hint */}
          <span className="md:hidden text-xs text-gray-500 dark:text-gray-400">
            Menu
          </span>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="
              text-sm px-3 py-1 rounded-md
              border border-gray-300 dark:border-gray-600
              text-gray-700 dark:text-gray-300
              hover:bg-gray-200 dark:hover:bg-gray-800
              transition-colors
            "
          >
            {dark ? "Light" : "Dark"}
          </button>
        </div>

      </div>
    </nav>
  );
}
