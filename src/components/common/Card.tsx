import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = "", hover = true }: CardProps) => {
  const baseClasses = "card p-6";
  const combinedClasses = `${baseClasses} ${className}`;

  if (hover) {
    return (
      <motion.div
        className={combinedClasses}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    );
  }

  return <div className={combinedClasses}>{children}</div>;
};
