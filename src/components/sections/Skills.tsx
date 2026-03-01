import { motion } from "framer-motion";
import { Section } from "../common/Section";
import skillsData from "@data/skills.json";
import type { Skill } from "@type-defs/index";
import { fadeIn, staggerContainer, staggerItem } from "../../utils/animations";
import { useState } from "react";

export const Skills = () => {
  const skills = skillsData as Skill[];
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(skills.map((s) => s.category))),
  ];

  // Filter skills based on active category
  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  // Group by category for display
  const groupedSkills = filteredSkills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>,
  );

  // Get color for proficiency level
  const getProficiencyColor = (level: number) => {
    if (level >= 5) return "from-green-500 to-emerald-500";
    if (level >= 4) return "from-blue-500 to-cyan-500";
    if (level >= 3) return "from-yellow-500 to-orange-500";
    return "from-gray-500 to-gray-600";
  };

  // Get label for proficiency level
  const getProficiencyLabel = (level: number) => {
    if (level >= 5) return "Expert";
    if (level >= 4) return "Advanced";
    if (level >= 3) return "Intermediate";
    return "Beginner";
  };

  return (
    <Section
      id="skills"
      className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div variants={fadeIn} className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-purple-600 dark:from-primary-400 dark:to-purple-400">
              Tech Stack
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies I work with and my proficiency levels
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          variants={staggerItem}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:shadow-md"
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          key={activeCategory}
        >
          {Object.entries(groupedSkills).map(([category, categorySkills]) => (
            <motion.div key={category} variants={staggerItem}>
              {activeCategory === "All" && (
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 font-mono">
                  {"// " + category}
                </h3>
              )}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                variants={staggerContainer}
              >
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={staggerItem}
                    className="group relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <motion.div
                      className="relative bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 overflow-hidden"
                      whileHover={{ y: -4, scale: 1.02 }}
                    >
                      {/* Animated background on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />

                      <div className="relative z-10">
                        {/* Skill Name */}
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-bold text-gray-800 dark:text-gray-100 font-mono">
                            {skill.name}
                          </h4>
                          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded font-medium">
                            {skill.category}
                          </span>
                        </div>

                        {/* Proficiency Bar */}
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {getProficiencyLabel(skill.proficiency || 3)}
                            </span>
                            <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                              {skill.proficiency || 3}/5
                            </span>
                          </div>
                          <div className="relative h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${getProficiencyColor(
                                skill.proficiency || 3,
                              )} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${((skill.proficiency || 3) / 5) * 100}%`,
                              }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 1,
                                delay: index * 0.05,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                        </div>

                        {/* Hover indicator */}
                        <motion.div
                          className="absolute -bottom-1 -right-1 w-16 h-16 bg-gradient-to-br from-primary-500 to-purple-500 rounded-tl-full opacity-0 group-hover:opacity-10 transition-opacity"
                          initial={false}
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fun Developer Stats */}
        <motion.div
          variants={fadeIn}
          className="mt-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 rounded-2xl p-8 backdrop-blur-sm">
            <p className="text-lg text-gray-700 dark:text-gray-300 font-mono">
              <span className="text-primary-600 dark:text-primary-400 font-bold">
                {skills.length}
              </span>{" "}
              technologies •{" "}
              <span className="text-purple-600 dark:text-purple-400 font-bold">
                {skills.filter((s) => (s.proficiency || 0) >= 4).length}
              </span>{" "}
              advanced skills •{" "}
              <span className="text-green-600 dark:text-green-400 font-bold">
                {categories.length - 1}
              </span>{" "}
              categories
            </p>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};
