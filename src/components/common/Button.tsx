import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const Button = ({
  children,
  variant = "primary",
  className = "",
  href,
  onClick,
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const baseClasses = variant === "primary" ? "btn-primary" : "btn-secondary";
  const combinedClasses = `${baseClasses} ${className} inline-block`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={combinedClasses}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </motion.button>
  );
};
