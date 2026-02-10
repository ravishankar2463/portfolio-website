import { motion } from "framer-motion";
import { Section } from "../common/Section";
import expertiseData from "@data/expertise.json";
import type { ExpertiseArea } from "@type-defs/index";

const expertiseAreas = expertiseData as ExpertiseArea[];

export const Expertise = () => {
  return (
    <Section id="expertise" className="bg-gray-50 dark:bg-gray-800/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          My Expertise
        </h2>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-transparent border-2 border-gray-300 dark:border-gray-600 rounded-lg p-8
                         hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="text-5xl text-gray-400 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
                    {area.icon === "monitor" && (
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          x="2"
                          y="3"
                          width="20"
                          height="14"
                          rx="2"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <line
                          x1="8"
                          y1="21"
                          x2="16"
                          y2="21"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <line
                          x1="12"
                          y1="17"
                          x2="12"
                          y2="21"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    {area.icon === "code" && (
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <circle cx="12" cy="12" r="4" fill="currentColor" />
                        <line x1="12" y1="2" x2="12" y2="6" strokeWidth="2" />
                        <line x1="12" y1="18" x2="12" y2="22" strokeWidth="2" />
                        <line
                          x1="4.93"
                          y1="4.93"
                          x2="7.76"
                          y2="7.76"
                          strokeWidth="2"
                        />
                        <line
                          x1="16.24"
                          y1="16.24"
                          x2="19.07"
                          y2="19.07"
                          strokeWidth="2"
                        />
                        <line x1="2" y1="12" x2="6" y2="12" strokeWidth="2" />
                        <line x1="18" y1="12" x2="22" y2="12" strokeWidth="2" />
                        <line
                          x1="4.93"
                          y1="19.07"
                          x2="7.76"
                          y2="16.24"
                          strokeWidth="2"
                        />
                        <line
                          x1="16.24"
                          y1="7.76"
                          x2="19.07"
                          y2="4.93"
                          strokeWidth="2"
                        />
                      </svg>
                    )}
                    {area.icon === "mobile" && (
                      <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M9 12l2 2 4-4"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {area.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                    {area.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};
