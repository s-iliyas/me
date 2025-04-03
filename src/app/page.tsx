'use client';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaGlobe,
  FaLanguage,
  FaCode,
  FaBook,
  FaGraduationCap,
  FaQuoteLeft,
  FaLaptopCode,
} from 'react-icons/fa';
import Image from 'next/image';
import { useEffect } from 'react';

export default function AboutPage() {
  // Add subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const xPos = clientX / window.innerWidth - 0.5;
      const yPos = clientY / window.innerHeight - 0.5;

      const elements = document.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '0.05');
        const x = xPos * speed * 20;
        const y = yPos * speed * 20;
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const testimonials = [
    {
      text: 'Iliyas demonstrated exceptional skills in developing our payment processing platform. His work on integrating PayBy and developing merchant tools was invaluable.',
      author: 'TigerPay Team',
      role: 'Payment Platform',
      avatar: '/avatars/tigerpay.png',
    },
    {
      text: 'His contribution to the OOHPod Rewards platform showed his versatility in both frontend and backend development. The admin tools he developed significantly improved our operations.',
      author: 'OOHPod Team',
      role: 'Rewards Platform',
      avatar: '/avatars/oohpod.jpeg',
    },
    {
      text: "Iliyas's work on Draftly's AI content generation features was outstanding. His implementation of LangChain.js helped create a more intuitive user experience.",
      author: 'Draftly Team',
      role: 'Content Platform',
      avatar: '/avatars/draftly.png',
    },
  ];

  const interests = [
    {
      icon: <FaLanguage className="h-6 w-6" />,
      title: 'Languages',
      description: 'Fluent in English, Hindi, Telugu, Arabic (Read & Write), and learning Bahasa',
    },
    {
      icon: <FaCode className="h-6 w-6" />,
      title: 'Programming',
      description: 'Exploring new technologies and building side projects',
    },
    {
      icon: <FaBook className="h-6 w-6" />,
      title: 'Technical Writing',
      description: 'Writing technical documentation and blog posts',
    },
    {
      icon: <FaGraduationCap className="h-6 w-6" />,
      title: 'Continuous Learning',
      description: 'Always learning new technologies and frameworks',
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-16 md:space-y-24"
      >
        {/* Hero Section */}
        <motion.section variants={itemVariants} className="relative mb-8">
          <div className="parallax-element" data-speed="0.02">
            <div className="absolute -left-10 top-0 h-32 w-32 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl"></div>
            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block rounded-full bg-white/5 px-4 py-1.5 text-sm backdrop-blur-md"
            >
              <span className="flex items-center justify-center gap-2">
                <FaLaptopCode className="text-purple-400" />
                <span>Software Engineer</span>
              </span>
            </motion.div>

            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hello, I&apos;m <span className="gradient-text">Shaik Mohammed Iliyas</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300/90">
              Software Engineer with 3 years of experience in web development, specializing in
              Python, JavaScript, and cloud technologies.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-purple-400" />
                <span>Kurnool, AP</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-purple-400" />
                <span>shaik.m.iliyas@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaGlobe className="text-purple-400" />
                <span>iliyas.in</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* About Section */}
        <motion.section variants={itemVariants}>
          <h2 className="section-title">About Me</h2>

          <div className="portfolio-card">
            <p className="leading-relaxed text-gray-300/90">
              Goal-oriented Software Engineer with 3 years of experience in developing and deploying
              web applications. Proficient in programming languages such as Python and JavaScript
              with strong problem-solving skills and ability to work independently or as part of a
              team.
            </p>
            <div className="mt-8">
              <h3 className="mb-5 text-xl font-semibold text-purple-400">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  'Python',
                  'JavaScript',
                  'TypeScript',
                  'AWS',
                  'React',
                  'Node.js',
                  'Docker',
                  'PostgreSQL',
                  'MongoDB',
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    className="tech-tag"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ y: 0, scale: 0.98 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Testimonials Section */}
        <motion.section variants={itemVariants}>
          <h2 className="section-title">Client Testimonials</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="portfolio-card"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                variants={itemVariants}
              >
                <FaQuoteLeft className="mb-4 text-2xl text-purple-400/50" />
                <p className="mb-6 italic leading-relaxed text-gray-300/90">{testimonial.text}</p>
                <div className="flex items-center">
                  <div className="relative mr-3 h-12 w-12 overflow-hidden rounded-full border-2 border-purple-500/20 shadow-lg">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.author}</h4>
                    <p className="text-sm text-purple-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Personal Interests Section */}
        <motion.section variants={itemVariants}>
          <h2 className="section-title">Personal Interests</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                className="portfolio-card"
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                variants={itemVariants}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/10">
                    <div className="text-purple-400">{interest.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{interest.title}</h3>
                </div>
                <p className="leading-relaxed text-gray-300/90">{interest.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Footer */}
        <motion.footer
          variants={itemVariants}
          className="mx-auto mt-16 text-center text-sm text-gray-400"
        >
          <p>© {new Date().getFullYear()} Shaik Mohammed Iliyas. All rights reserved.</p>
          <p className="mt-2">Built with Next.js, Tailwind CSS and Framer Motion</p>
        </motion.footer>
      </motion.div>
    </div>
  );
}
