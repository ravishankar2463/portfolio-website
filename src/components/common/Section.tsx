import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
  animate?: boolean;
}

export const Section = ({
  id,
  className = "",
  children,
  animate = false,
}: SectionProps) => {
  const baseClasses = "section-container";
  const combinedClasses = `${baseClasses} ${className}`;

  if (animate) {
    return (
      <motion.section
        id={id}
        className={combinedClasses}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <section id={id} className={combinedClasses}>
      {children}
    </section>
  );
};
