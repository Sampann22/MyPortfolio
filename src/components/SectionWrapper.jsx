import { motion } from "framer-motion";

export default function SectionWrapper({ children, className = "", id }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
      className={`
        relative
        overflow-hidden
        ${className}
      `}
    >
      {children}
    </motion.section>
  );
}
