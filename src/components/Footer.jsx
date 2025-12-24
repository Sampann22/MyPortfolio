export default function Footer() {
  return (
    <footer
      className="
        py-6 text-center text-sm
        border-t
        border-gray-300 dark:border-gray-800
        text-gray-600 dark:text-gray-400
        transition-colors duration-300
      "
    >
      © {new Date().getFullYear()} Sampann Tiwari. All rights reserved.
    </footer>
  );
}
