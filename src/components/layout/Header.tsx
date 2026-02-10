import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../common/ThemeToggle";
import personalData from "@data/personal.json";
import type { PersonalInfo } from "@type-defs/index";

const personal = personalData as PersonalInfo;

const navLinks = [
  { href: "#home", label: "home", index: 0 },
  { href: "#expertise", label: "expertise", index: 1 },
  { href: "#experience", label: "experience", index: 2 },
  { href: "#contact", label: "contact", index: 3 },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Prevent body scroll when menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.header
      id="masthead"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b border-gray-200 dark:border-gray-800"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo/Brand */}
          <motion.a
            href="#home"
            className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {personal.name.toUpperCase()}
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="group relative flex items-center space-x-2 text-sm font-semibold text-gray-600 dark:text-gray-400 
                         hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-primary-600 dark:text-primary-400 opacity-60 group-hover:opacity-100 transition-opacity font-mono text-xs">
                  0{link.index}
                </span>
                <span className="text-gray-300 dark:text-gray-700 font-thin">
                  //
                </span>
                <span className="relative">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                </span>
              </motion.a>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 
                       text-gray-700 dark:text-gray-300 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Toggle menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="w-6 h-6 flex flex-col justify-center items-center"
              >
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: -4 },
                    open: { rotate: 45, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-current absolute"
                />
                <motion.span
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-current absolute"
                />
                <motion.span
                  variants={{
                    closed: { rotate: 0, y: 4 },
                    open: { rotate: -45, y: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-0.5 bg-current absolute"
                />
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Slide-in Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-gradient-to-br from-white via-gray-50 to-primary-50/30 
                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                       shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <motion.h2
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  Menu
                </motion.h2>
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 
                           text-gray-700 dark:text-gray-300 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </motion.button>
              </div>

              {/* Menu Links */}
              <div className="p-6 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="group flex items-center space-x-3 p-4 rounded-xl
                             bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm
                             hover:bg-primary-50 dark:hover:bg-primary-900/20
                             border border-gray-200 dark:border-gray-700
                             hover:border-primary-400 dark:hover:border-primary-600
                             shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div
                      className="flex items-center justify-center w-10 h-10 rounded-lg 
                                  bg-gradient-to-br from-primary-500 to-purple-600 
                                  text-white font-mono text-sm font-bold shadow-lg
                                  group-hover:scale-110 transition-transform"
                    >
                      0{link.index}
                    </div>
                    <div className="flex-1">
                      <span
                        className="text-lg font-semibold text-gray-900 dark:text-white 
                                     group-hover:text-primary-600 dark:group-hover:text-primary-400 
                                     transition-colors"
                      >
                        {link.label}
                      </span>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400">
                        <span className="font-mono">
                          /{link.href.replace("#", "")}
                        </span>
                      </div>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 
                               transform group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Menu Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-700 
                         bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  © 2026 {personal.name}
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
