import { motion } from "framer-motion";
import { Section } from "../common/Section";
import { Button } from "../common/Button";
import ParticleField from "../common/ParticleField";
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

      {/* Interactive particle field */}
      <div className="absolute inset-0 z-0">
        <ParticleField
          particleCount={100}
          connectionDistance={130}
          particleSpeed={0.4}
          mouseRadius={180}
          mouseForce={2.5}
        />
      </div>

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

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        {/* Frosted glass backdrop for text readability */}
        <div className="absolute inset-0 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl rounded-3xl shadow-2xl -m-8" />

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="relative space-y-6 py-8"
        >
          {/* Greeting Badge */}
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium shadow-lg border border-primary-200 dark:border-primary-800">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              textShadow:
                "0 2px 10px rgba(255, 255, 255, 0.2), 0 0 20px rgba(14, 165, 233, 0.15)",
            }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-800 via-primary-700 to-purple-700 dark:from-gray-100 dark:via-primary-300 dark:to-purple-300">
              {personalData.name}
            </span>
          </motion.h1>

          {/* Title with Icon */}
          <motion.div
            className="flex items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary-500"></div>
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              {personalData.title}
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary-500"></div>
          </motion.div>

          {/* Tagline - Compact */}
          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {personalData.tagline}
          </motion.p>

          {/* Key Skills - More Visual, Less Text */}
          <motion.div
            variants={slideUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto pt-4"
          >
            {["Spring Boot", "React", "Angular", "REST APIs", "SQL/NoSQL"].map(
              (skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="px-4 py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-md border border-gray-200 dark:border-gray-700 hover:scale-105 transition-transform"
                >
                  {skill}
                </motion.span>
              ),
            )}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#contact" variant="primary">
                <span className="flex items-center gap-2">
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
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Get In Touch
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#projects" variant="secondary">
                <span className="flex items-center gap-2">
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
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                  View Projects
                </span>
              </Button>
            </motion.div>
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
        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-3 rounded-full shadow-lg">
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-300"
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
        </div>
      </motion.div>
    </Section>
  );
};
