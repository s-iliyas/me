'use client';

import { motion } from 'framer-motion';
import { FaServer, FaReact, FaCloud, FaDatabase, FaMobileAlt, FaTools } from 'react-icons/fa';

export default function SkillsPage() {
  // Skill categories with their respective items
  const skillCategories = [
    {
      id: 'backend',
      title: 'Backend',
      icon: <FaServer className="h-6 w-6" />,
      color: 'from-purple-500 to-purple-700',
      skills: [
        { name: 'Python', proficiency: 95, experience: '3+ years' },
        { name: 'Node.js', proficiency: 90, experience: '2+ years' },
        { name: 'Express.js', proficiency: 85, experience: '2+ years' },
        { name: 'NestJS', proficiency: 80, experience: '1+ year' },
        { name: 'Django REST', proficiency: 85, experience: '2+ years' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      icon: <FaReact className="h-6 w-6" />,
      color: 'from-pink-500 to-purple-500',
      skills: [
        { name: 'React.js', proficiency: 90, experience: '2+ years' },
        { name: 'Next.js', proficiency: 85, experience: '2+ years' },
        { name: 'TailwindCSS', proficiency: 90, experience: '2+ years' },
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: <FaCloud className="h-6 w-6" />,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'AWS EC2', proficiency: 85, experience: '2+ years' },
        { name: 'Docker', proficiency: 80, experience: '2+ years' },
        { name: 'CI/CD Pipelines', proficiency: 75, experience: '1+ year' },
        { name: 'Kubernetes', proficiency: 65, experience: '1 year' },
      ],
    },
    {
      id: 'database',
      title: 'Databases',
      icon: <FaDatabase className="h-6 w-6" />,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'PostgreSQL', proficiency: 90, experience: '3+ years' },
        { name: 'MongoDB', proficiency: 85, experience: '2+ years' },
        { name: 'Redis', proficiency: 75, experience: '1+ year' },
        { name: 'SQL', proficiency: 90, experience: '3+ years' },
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile',
      icon: <FaMobileAlt className="h-6 w-6" />,
      color: 'from-orange-400 to-amber-500',
      skills: [
        { name: 'React Native', proficiency: 80, experience: '1+ year' },
        { name: 'Expo', proficiency: 75, experience: '1+ year' },
      ],
    },
    {
      id: 'tools',
      title: 'Tools & Others',
      icon: <FaTools className="h-6 w-6" />,
      color: 'from-slate-600 to-slate-800',
      skills: [
        { name: 'Git & GitHub', proficiency: 90, experience: '3+ years' },
        { name: 'Jira & Confluence', proficiency: 85, experience: '2+ years' },
        { name: 'RESTful APIs', proficiency: 95, experience: '3+ years' },
        { name: 'GraphQL', proficiency: 80, experience: '1+ year' },
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const barVariants = {
    hidden: { width: 0 },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    visible: (proficiency: any) => ({
      width: `${proficiency}%`,
      transition: { duration: 1, ease: [0.165, 0.84, 0.44, 1] },
    }),
  };

  return (
    <div className="content-container">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-12">
        {/* Main Heading - Centered */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">Skills & Expertise</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90">
            A comprehensive overview of my technical skills and proficiency levels across various
            technologies and domains.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div key={category.id} variants={itemVariants} className="portfolio-card">
              {/* Category Header */}
              <div className="mb-6 flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br ${category.color} p-2 shadow-lg`}
                >
                  <div className="text-white">{category.icon}</div>
                </div>
                <h2 className="text-2xl font-bold">{category.title}</h2>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-purple-300">{skill.experience}</span>
                    </div>
                    <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <motion.div
                        className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                        variants={barVariants}
                        custom={skill.proficiency}
                        initial="hidden"
                        animate="visible"
                      />
                    </div>
                    <div className="flex justify-end">
                      <span className="text-xs font-medium text-purple-300">
                        {skill.proficiency}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Languages Section - Consistent heading alignment */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-16">
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">
            <span className="gradient-text">Languages I Work With</span>
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="portfolio-card grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3"
        >
          {[
            { language: 'English', proficiency: 'Professional', level: 90 },
            { language: 'Hindi', proficiency: 'Native', level: 95 },
            { language: 'Telugu', proficiency: 'Native', level: 95 },
            { language: 'Arabic', proficiency: 'Read & Write', level: 70 },
            { language: 'Bahasa', proficiency: 'Learning', level: 30 },
          ].map((lang, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-white">{lang.language}</span>
                <span className="text-sm text-purple-300">{lang.proficiency}</span>
              </div>
              <div className="relative h-2 w-full overflow-hidden rounded-full bg-gray-800">
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-emerald-400 to-blue-500"
                  variants={barVariants}
                  custom={lang.level}
                  initial="hidden"
                  animate="visible"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Additional Skills Section - Consistent heading alignment */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-16">
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">
            <span className="gradient-text">Additional Expertise</span>
          </h2>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {[
            { name: 'REST API Design', icon: '🔌' },
            { name: 'Database Architecture', icon: '💾' },
            { name: 'UI/UX Principles', icon: '🎨' },
            { name: 'System Design', icon: '🏗️' },
            { name: 'Agile Development', icon: '🔄' },
            { name: 'Performance Optimization', icon: '⚡' },
          ].map((skill, index) => (
            <motion.div
              key={index}
              className="portfolio-card flex items-center gap-4 py-4"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-xl">
                {skill.icon}
              </div>
              <span className="font-medium text-white">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
