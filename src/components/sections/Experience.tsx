import { motion } from "framer-motion";
import { Section } from "../common/Section";
import experienceData from "@data/experience.json";
import type { Experience as ExperienceType } from "@type-defs/index";

const experiences = experienceData as ExperienceType[];

export const Experience = () => {
  return (
    <Section
      id="experience"
      className="bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary-600 dark:from-white dark:to-primary-400">
          Experience
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto text-lg">
          My professional journey and contributions
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 via-purple-600 to-primary-600 dark:from-primary-400 dark:via-purple-400 dark:to-primary-400 opacity-30 rounded-full" />

            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative mb-16">
                {/* Timeline dot - positioned relative to this container, not the motion.div */}
                <motion.div
                  className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                />

                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`${
                    index % 2 === 0
                      ? "md:pr-1/2 md:pr-12"
                      : "md:pl-1/2 md:pl-12 md:ml-auto"
                  } md:w-1/2`}
                >
                  <div className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl p-8 border-2 border-gray-100 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <motion.span
                          className="inline-block mt-2 md:mt-0 px-4 py-1.5 text-xs font-semibold bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-full shadow-md"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ● Current
                        </motion.span>
                      )}
                    </div>

                    <div className="mb-4">
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 hover:underline font-semibold transition-colors"
                        >
                          {exp.company}
                        </a>
                      ) : (
                        <span className="text-lg text-primary-600 dark:text-primary-400 font-semibold">
                          {exp.company}
                        </span>
                      )}
                      <div className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center gap-2">
                        <span className="font-medium">{exp.duration}</span>
                        <span>•</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-primary-700 dark:text-primary-300 rounded-lg border border-primary-200 dark:border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
