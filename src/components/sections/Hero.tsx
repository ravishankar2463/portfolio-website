import { motion } from "framer-motion";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import personalData from "@data/personal.json";
import { slideUp, fadeIn } from "../../utils/animations";

export const Hero = () => {
  return (
    <Section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 opacity-70" />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-primary-200 dark:bg-primary-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-70"
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-primary-600 to-purple-600 dark:from-white dark:via-primary-400 dark:to-purple-400">
              {personalData.name}
            </span>
          </motion.h1>

          <motion.p
            className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {personalData.title}
          </motion.p>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {personalData.tagline}
          </motion.p>
        </motion.div>

        <motion.div
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {personalData.bio}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button href="#contact" variant="primary">
              <span className="flex items-center gap-2">💼 Get In Touch</span>
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button href={personalData.resumeUrl} variant="secondary">
              <span className="flex items-center gap-2">
                📄 Download Resume
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <svg
          className="w-6 h-6 text-gray-400 dark:text-gray-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </Section>
  );
};
