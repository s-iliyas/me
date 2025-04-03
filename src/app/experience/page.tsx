'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaBriefcase,
  FaLink,
  FaGithub,
  FaLaptopCode,
} from 'react-icons/fa';

export default function ExperiencePage() {
  const experienceData = [
    {
      id: 1,
      company: 'Kiwimesh Technologies Pvt Ltd',
      role: 'Lead Software Engineer',
      location: 'Remote',
      period: 'Nov 2023 - Present',
      type: 'Freelance',
      logo: '/kiwimesh.png', // Replace with actual logo if available
      description: [
        'Architected and implemented robust server-side solutions, improving system performance, maintained apps.',
        'Led cross-functional teams as product owner, managing client expectations and translating business requirements into technical specifications.',
        'Spearheaded end-to-end development of mobile and web applications, integrating AI-powered features that enhanced user experience and automation capabilities.',
      ],
      skills: ['Node.js', 'React', 'AWS', 'Python', 'AI Integration'],
      link: '#',
    },
    {
      id: 2,
      company: 'Raftlabs',
      role: 'Software Engineer',
      location: 'Remote, India',
      period: 'January 2022 - September 2023',
      type: 'Full-time',
      logo: '/raftlabs.png',
      description: [
        'Developed a payment gateway integration for a multi-vendor marketplace, enabling digital payment processing for local merchants.',
        "Implemented third-party API integrations with payment providers like PayBy, enhancing the platform's transactional capabilities.",
        'Created admin dashboards and reporting tools to provide merchants with insights into sales performance and transaction history.',
      ],
      skills: ['Node.js', 'React', 'AWS', 'PostgreSQL', 'Express'],
      link: 'https://www.raftlabs.co/',
    },
    {
      id: 3,
      company: 'Zelhus',
      role: 'Associate Software Engineer',
      location: 'Remote, India',
      period: 'January 2021 - January 2022',
      type: 'Full-time',
      logo: '/zelhus.svg',
      description: [
        'Built a rewards platform for OOHPod that enabled users to claim rewards through QR code scanning at digital display pod locations.',
        'Developed admin tools for managing reward offers, user verification, and campaign analytics, improving operational efficiency.',
        'Implemented user authentication systems and secure API endpoints for transaction processing and reward redemption.',
      ],
      skills: ['React', 'Node.js', 'MongoDB', 'AWS Lambda', 'QR Code Integration'],
      link: 'https://www.zelhus.com/',
    },
    {
      id: 4,
      company: 'HiTalent',
      role: 'Software Engineering Intern',
      location: 'Remote, India',
      period: 'September 2020 - December 2020',
      type: 'Internship',
      logo: '/hitalent.png',
      description: [
        "Assisted in the development of AI-powered content generation features for Draftly, improving the platform's ability to create tailored content based on user input.",
        'Implemented and optimized LangChain.js integration for generating context-aware content suggestions.',
        'Collaborated on UI/UX improvements that increased user engagement and content creation efficiency.',
      ],
      skills: ['JavaScript', 'React', 'LangChain.js', 'REST APIs'],
      link: 'https://www.hitalent.in/',
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
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">Work Experience</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90">
            My professional journey and roles that have shaped my career in software development.
          </p>
        </motion.div>

        <div className="timeline-container">
          {experienceData.map((item) => (
            <motion.div key={item.id} className="timeline-item" variants={itemVariants}>
              <div className="timeline-dot"></div>

              <div className="portfolio-card group">
                <div className="flex flex-col sm:flex-row sm:items-start">
                  <div className="mb-4 flex-shrink-0 sm:mb-0 sm:mr-6">
                    <div className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-white/5 p-2">
                      {item.logo ? (
                        <Image src={item.logo} alt={item.company} fill className="object-contain" />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <FaBriefcase className="h-8 w-8 text-purple-400" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-grow">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="text-purple-400" />
                          <span className="text-sm font-medium text-purple-300">{item.period}</span>
                          <span className="ml-2 rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs font-medium text-purple-300">
                            {item.type}
                          </span>
                        </div>
                        <h3 className="mt-1 text-2xl font-semibold leading-tight text-white">
                          {item.role}
                        </h3>
                        <div className="mt-1 flex items-center text-gray-300">
                          <FaBriefcase className="mr-2 text-purple-400" />
                          <span className="font-medium">{item.company}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-sm text-gray-300">
                        <FaMapMarkerAlt className="text-purple-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    <div className="mb-5 space-y-3">
                      {item.description.map((desc, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400"></div>
                          <p className="flex-grow text-gray-300/90">{desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {item.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-purple-500/10 px-3 py-1 text-sm text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-link inline-flex items-center text-sm"
                      whileHover={{ x: 3 }}
                    >
                      <FaLink className="mr-1" /> Visit Company Website
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-20">
        <motion.div variants={itemVariants} className="mb-8">
          <h2 className="mb-4 text-3xl font-bold">
            <span className="gradient-text">Key Projects</span>
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: 'TigerPay Payment Gateway',
              description:
                'Developed a comprehensive payment processing platform with PayBy integration, enabling local merchants to handle digital transactions securely. The system includes transaction reconciliation, analytics dashboards, and reporting tools.',
              technologies: ['Node.js', 'React', 'PostgreSQL', 'AWS', 'PayBy API'],
              github: '#',
              image: '/projects/tigerpay.jpg',
            },
            {
              title: 'OOHPod Rewards Platform',
              description:
                'Built a QR code-based rewards system for digital advertising pods, allowing users to scan and claim rewards through a mobile application. Included admin tools for managing campaigns and analyzing user participation.',
              technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS Lambda', 'Hasura GraphQL'],
              github: '#',
              image: '/projects/oohpod.jpg',
            },
            {
              title: 'Draftly AI Content Generator',
              description:
                'Implemented AI-powered content generation features that create tailored content based on user preferences. Integrated LangChain.js for context-aware suggestions and created an intuitive interface for content creation.',
              technologies: ['JavaScript', 'React', 'LangChain.js', 'Next.js', 'Hasura'],
              github: '#',
              image: '/projects/draftly.jpg',
            },
            {
              title: 'Smart Inventory Management',
              description:
                'Designed and built a real-time inventory tracking system for retail businesses, featuring barcode scanning capabilities, automated reordering, and detailed analytics for stock management.',
              technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT'],
              github: '#',
              image: '/projects/inventory.jpg',
            },
            {
              title: 'Portfolio Website Builder',
              description:
                'Created a customizable portfolio website builder with various templates and components. Users can create professional portfolios without coding knowledge, with automatic deployment and hosting.',
              technologies: ['Next.js', 'TailwindCSS', 'AWS S3', 'MongoDB', 'Framer Motion'],
              github: 'https://github.com/s-iliyas',
              image: '/projects/portfolio.jpg',
            },
            {
              title: 'AI-Powered Customer Support Bot',
              description:
                'Developed an intelligent customer support chatbot that can handle common queries, create support tickets, and route complex issues to appropriate teams. Trained on custom datasets for specialized knowledge domains.',
              technologies: ['Python', 'TensorFlow', 'Node.js', 'React', 'NLP'],
              github: 'https://github.com/s-iliyas',
              image: '/projects/chatbot.jpg',
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              className="portfolio-card group"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="relative mb-5 overflow-hidden rounded-xl border border-white/10">
                <div className="aspect-video w-full bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover opacity-80"
                    />
                  )}
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                    <FaLaptopCode className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg">
                  <FaLaptopCode className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
              </div>

              <p className="mb-5 leading-relaxed text-gray-300/90">{project.description}</p>

              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="animated-link inline-flex items-center text-sm"
                whileHover={{ x: 3 }}
              >
                <FaGithub className="mr-1" /> View on GitHub
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
