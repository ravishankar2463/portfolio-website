import { useTheme } from "../../context/ThemeContext";
import { motion } from "framer-motion";

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 
                 text-gray-900 dark:text-yellow-300 shadow-md hover:shadow-lg transition-all duration-200
                 border border-gray-300 dark:border-gray-600"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: resolvedTheme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {resolvedTheme === "dark" ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
};
