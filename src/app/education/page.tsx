'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaUniversity,
  FaGraduationCap,
  FaLink,
} from 'react-icons/fa';

export default function EducationPage() {
  const educationData = [
    {
      id: 1,
      degree: 'Bachelor of Technology',
      field: 'Electronics and Communication Engineering',
      institution: 'Sri Venkateswara University',
      location: 'Tirupati, Andhra Pradesh',
      period: '2017 - 2021',
      logo: '/svu.png',
      description: 'Specialized in Software Engineering and Data Structures.',
      achievements: [
        'Participated in university-level coding competitions',
        'Member of Technical Club organizing workshops and hackathons',
      ],
      courses: [
        'Data Structures & Algorithms',
        'Database Management Systems',
        'Operating Systems',
        'Computer Networks',
      ],
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <div className="content-container">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mb-12">
        <motion.div variants={itemVariants}>
          <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="gradient-text">Education</span>
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300/90">
            My academic journey and qualifications that have shaped my technical knowledge and
            expertise.
          </p>
        </motion.div>

        <div className="timeline-container">
          {educationData.map((item) => (
            <motion.div key={item.id} className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot"></div>

              <div className="portfolio-card">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2">
                      <Image
                        src={item.logo}
                        alt={item.institution}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="timeline-date flex items-center gap-2">
                      <FaCalendarAlt className="text-purple-400" />
                      <span>{item.period}</span>
                    </div>

                    <h3 className="timeline-title">
                      {item.degree} • {item.field}
                    </h3>

                    <div className="timeline-subtitle">
                      <FaUniversity className="mr-2 text-purple-400" />
                      <span className="mr-4">{item.institution}</span>
                      <FaMapMarkerAlt className="mr-2 text-purple-400" />
                      <span>{item.location}</span>
                    </div>

                    <p className="leading-relaxed text-gray-300/90">{item.description}</p>

                    {item.achievements.length > 0 && (
                      <div className="mt-6">
                        <h4 className="mb-3 text-lg font-semibold text-white/90">
                          <span className="mr-2">✨</span>
                          Key Achievements
                        </h4>
                        <ul className="ml-6 list-disc space-y-1 text-gray-300/90">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="leading-relaxed">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.courses.length > 0 && (
                      <div className="mt-6">
                        <h4 className="mb-3 text-lg font-semibold text-white/90">
                          <FaGraduationCap className="mr-2 inline text-purple-400" />
                          Relevant Coursework
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.courses.map((course, i) => (
                            <span
                              key={i}
                              className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications Section */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-20">
        <motion.div variants={itemVariants}>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'Software Engineering Intern',
              issuer: 'HiTalent',
              date: 'January 2021',
              // logo: '/udemy-cert.svg',
              link: 'https://www.hitalent.in/',
            },
          ].map((cert, index) => (
            <motion.div key={index} className="portfolio-card group" whileHover={{ y: -5 }}>
              <div className="flex items-start">
                <div className="relative mr-4 h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2">
                  <div className="flex h-full w-full items-center justify-center">
                    <FaGraduationCap className="h-6 w-6 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                  <div className="mb-2 flex items-center text-sm text-gray-300">
                    <span>{cert.issuer}</span>
                    <span className="mx-2">•</span>
                    <span className="text-purple-300">{cert.date}</span>
                  </div>
                  <motion.a
                    href={cert.link}
                    className="animated-link inline-flex items-center text-sm"
                    whileHover={{ x: 3 }}
                  >
                    <FaLink className="mr-1" /> View Site
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
