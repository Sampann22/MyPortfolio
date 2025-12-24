import { motion } from "framer-motion";

export default function SectionWrapper({ children, id, className = "" }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`relative py-28 px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}
