'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaGlobe, FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';
import { useState } from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  type: 'App' | 'Website' | 'Utility';
  category: string;
  description: string;
  details?: string[];
  tags: string[];
  icon: string;
  image?: string;
  links: {
    github?: string;
    web?: string;
    playstore?: string;
    appstore?: string;
  };
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'TigerPay',
    type: 'Website',
    category: 'Finance',
    description: 'An online payment platform allowing merchants to handle customer transactions.',
    details: [
      'Developed an onboarding form for the merchant admin app to manage orders',
      'Replaced Stripe with PayBy for payment processing in the backend',
      'Worked on both frontend(NextJS) and backend(Serverless Nodejs) features',
      'Created analytics dashboards for merchants to track sales and performance',
      'Implemented secure transaction processing with multiple payment providers',
    ],
    tags: ['NextJS', 'NodeJS', 'PayBy', 'AWS', 'Serverless'],
    icon: '💳',
    image: '/projects/tigerpay.png',
    links: {
      web: 'https://tigerpay.app',
    },
    featured: true,
  },
  {
    title: 'FilePe',
    type: 'App',
    category: 'AI & Productivity',
    description: 'A WhatsApp bot for saving and retrieving documents using AI.',
    details: [
      'Developed a WhatsApp bot using Django and OpenAI models',
      'Implemented document saving and retrieval functionality with natural language processing',
      'Integrated Razorpay for payment processing',
      'Used LangChain for advanced document processing and context understanding',
      'Deployed and managed the application on cloud infrastructure',
    ],
    tags: ['Django', 'OpenAI', 'LangChain', 'NextJS', 'Razorpay', 'Supabase'],
    icon: '📄',
    image: '/projects/filepe.png',
    links: {
      web: 'https://filepe.io',
    },
    featured: true,
  },
  {
    title: 'TransitPal',
    type: 'App',
    category: 'Transportation',
    description:
      'An integrated transit booking and journey planning application built on the Open Network for Digital Commerce (ONDC) protocol.',
    details: [
      "Developed a monolithic application implementing ONDC's TRV11 domain protocol for transit services as a Buyer App Platform (BAP)",
      'Built the backend with NestJS, implementing search, on_search, and other critical ONDC API endpoints',
      'Successfully integrated with the ONDC gateway system, handling callbacks and API communications between platforms',
      'Configured AWS infrastructure including EC2 deployments, security groups, and DNS management',
      'Implemented payment collection systems with ONDC-compliant buyer finder fees and settlement terms',
    ],
    tags: ['NestJS', 'ONDC Protocol', 'AWS', 'Transit API', 'Payment Systems'],
    icon: '🚆',
    image: '/projects/transitpal.png',
    links: {
      web: 'https://pre-prod-api.transitpal.io',
    },
    featured: true,
  },
  {
    title: 'BusRoutes',
    type: 'App',
    category: 'Transportation',
    description:
      'A platform showing city buses and metro routes for Delhi, Bengaluru, and Hyderabad.',
    details: [
      'Developed an interactive map-based application for public transportation routes',
      'Implemented real-time route visualization using Leaflet Maps',
      'Created a responsive UI with Next.js for optimal mobile and desktop experiences',
      'Used Supabase for route data storage and management',
      'Took full ownership as a full-stack engineer for development and deployment',
    ],
    tags: ['Next.js', 'Supabase', 'Leaflet Maps', 'Git', 'Responsive Design'],
    icon: '🚌',
    image: '/projects/busroutes.png',
    links: {
      web: 'https://busroutes.app',
    },
    featured: true,
  },
  {
    title: 'Potluck App',
    type: 'App',
    category: 'Food Delivery',
    description: 'Restaurant food delivery mobile application with VIP credits system.',
    details: [
      'Supported bug fixes and deployments for the main food delivery application',
      'Developed VIP credits MVP app for premium customers',
      'Integrated Stripe payment processing for seamless transactions',
      'Built a Progressive Web App (PWA) for cross-platform compatibility',
      'Used NestJS and Supabase for robust backend services',
    ],
    tags: ['NestJS', 'Supabase', 'AWS Amplify', 'Stripe', 'PWA', 'Mobile'],
    icon: '🍲',
    image: '/projects/potluck.png',
    links: {
      web: 'https://pot-luck.jp',
    },
  },
  {
    title: 'Ease + Marbles Health',
    type: 'App',
    category: 'Healthcare',
    description: 'A comprehensive program for coping with distress and building mental resilience.',
    details: [
      'Worked on backend report generation for mental health assessments',
      'Enhanced the Ease hardware kit backend with performance improvements',
      'Improved frontend UI for better user experience and engagement',
      'Managed deployments using CI/CD GitHub actions, EC2, and PM2',
      'Led backend engineering for AWS-based solutions with NestJS and MongoDB',
    ],
    tags: ['NestJS', 'MongoDB', 'TypeORM', 'SendGrid', 'React Native', 'AWS', 'CI/CD'],
    icon: '🧠',
    image: '/projects/ease.png',
    links: {
      web: 'https://marbles.health',
    },
  },
  {
    title: 'OOHPod Rewards',
    type: 'App',
    category: 'Rewards',
    description:
      'A platform enabling OOHPod users to claim rewards and participate in competitions.',
    details: [
      'Built frontend using Next.js and backend using Serverless Node.js',
      'Used Hasura for backend queries and logic to create rewards and competitions',
      'Developed admin tools for reward management and user participation',
      'Implemented QR code scanning for digital display pod interactions',
      'Created a user verification system and secure API endpoints for rewards',
    ],
    tags: ['Next.js', 'Hasura', 'NodeJS', 'GraphQL', 'QR Code'],
    icon: '🎁',
    image: '/projects/oohpod.png',
    links: {
      web: 'https://oohpodrewards.com',
    },
    featured: true,
  },
  {
    title: 'Draftly',
    type: 'App',
    category: 'AI',
    description: 'Create and schedule LinkedIn posts that sound natural using AI.',
    details: [
      'Built frontend using Next.js and backend using Serverless Node.js',
      'Used Hasura for backend queries and data management',
      'Integrated LLMs and models using langchain.js for content generation',
      'Created scheduling features for automated post publishing',
      'Implemented AI-powered content suggestions based on user preferences',
    ],
    tags: ['Next.js', 'LangChain', 'AI', 'Hasura', 'LLM'],
    icon: '✍️',
    image: '/projects/draftly.png',
    links: {
      web: 'https://draftly.so',
    },
    featured: true,
  },
  {
    title: 'CollabHome',
    type: 'Website',
    category: 'Real Estate',
    description: 'A real estate platform focused on enhancing user experience.',
    details: [
      'Improved UX and added new features using NestJS and ReactJS',
      'Integrated Discord notifications using DiscordJS',
      'Enhanced platform functionality and user engagement',
      'Implemented property search and filtering capabilities',
      'Created agent-client communication channels',
    ],
    tags: ['NestJS', 'ReactJS', 'DiscordJS', 'Real Estate'],
    icon: '🏠',
    image: '/projects/collabhome.png',
    links: {
      web: 'https://collabhome.io',
    },
  },
  {
    title: 'HiTalent',
    type: 'Website',
    category: 'Education',
    description: 'A platform to track the progress of trainees in educational programs.',
    details: [
      'Developed the website using Express.js, React.js, and TailwindCSS',
      'Integrated FreeCodeCamp, LinkedIn, and Google login with JWT',
      'Managed user data with PostgreSQL and Sequelize ORM',
      'Built progress tracking dashboards for educational course completion',
      'Implemented analytics for training program effectiveness',
    ],
    tags: ['Express.js', 'React.js', 'PostgreSQL', 'JWT', 'OAuth'],
    icon: '👨‍🎓',
    image: '/projects/hitalent.png',
    links: {
      web: 'https://hitalent.in',
    },
  },
  {
    title: 'Bookmarks Manager',
    type: 'App',
    category: 'Utility',
    description: 'A tool for saving and sharing bookmarks with access control features.',
    details: [
      'Developed using NodeJS, ReactJS, PostgreSQL',
      'Deployed on AWS EC2 using Docker',
      'Implemented user access control and session management',
      'Created bookmark organization with tags and collections',
      'Built sharing capabilities with privacy settings',
    ],
    tags: ['NodeJS', 'ReactJS', 'PostgreSQL', 'Docker', 'AWS'],
    icon: '🔖',
    image: '/projects/bookmarks-manager.png',
    links: {
      web: 'https://bookmarksmanager.app',
    },
  },
  {
    title: 'Portfolio ChatBot',
    type: 'Utility',
    category: 'AI',
    description: 'An AI chatbot integrated into a portfolio website.',
    details: [
      'Trained and developed using Rasa Open Source Framework',
      'Integrated with portfolio for user interactions',
      'Enhanced user engagement through AI conversations',
      'Created custom NLP models for understanding user queries',
      'Implemented contextual responses based on portfolio content',
    ],
    tags: ['Rasa', 'Python', 'AI', 'NLP', 'Machine Learning'],
    icon: '🤖',
    image: '',
    links: {
      github: 'https://github.com/s-iliyas',
    },
  },
  {
    title: 'Study Room',
    type: 'Website',
    category: 'Education',
    description: 'A platform for users to create discussion rooms based on topics.',
    details: [
      'Built using Django framework',
      'Integrated real-time chat functionality',
      'Implemented room management system',
      'Created user authentication and authorization',
      'Added topic categorization and search features',
    ],
    tags: ['Django', 'Python', 'WebSockets', 'AJAX'],
    icon: '📚',
    image: '',
    links: {
      github: 'https://github.com/s-iliyas',
    },
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === 'All'
      ? projects
      : filter === 'Featured'
        ? projects.filter((p) => p.featured)
        : projects.filter((p) => p.type === filter);

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

  return (
    <div className="content-container">
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="gradient-text">My Projects</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300/90">
            A showcase of my work across various domains and technologies, from web applications to
            AI-powered utilities.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="mb-12 flex flex-wrap items-center justify-center gap-4"
        >
          <FilterButton active={filter === 'All'} onClick={() => setFilter('All')}>
            All Projects
          </FilterButton>
          <FilterButton active={filter === 'Featured'} onClick={() => setFilter('Featured')}>
            Featured
          </FilterButton>
          <FilterButton active={filter === 'Website'} onClick={() => setFilter('Website')}>
            Websites
          </FilterButton>
          <FilterButton active={filter === 'App'} onClick={() => setFilter('App')}>
            Applications
          </FilterButton>
          <FilterButton active={filter === 'Utility'} onClick={() => setFilter('Utility')}>
            Utilities
          </FilterButton>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              onClick={() => setSelectedProject(project)}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Project Details Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center p-4 backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: 'spring', damping: 25 }}
            className="portfolio-card relative max-h-[85vh] w-full max-w-4xl overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute right-4 top-4 z-20 rounded-full bg-black/30 p-2 text-white/70 backdrop-blur-md transition-colors hover:bg-black/50 hover:text-white"
              style={{ cursor: 'pointer' }}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative mb-6 flex flex-col md:flex-row md:items-start md:gap-6">
              <div className="md:w-1/3">
                <div className="mb-4 flex items-center gap-3 pr-10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 text-2xl shadow-lg">
                    {selectedProject.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                    <div className="flex items-center text-sm text-gray-400">
                      <span className="mr-2">{selectedProject.type}</span>
                      <span>•</span>
                      <span className="ml-2">{selectedProject.category}</span>
                    </div>
                  </div>
                </div>

                {selectedProject.image && (
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-lg border border-purple-500/20">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090918]/70 to-transparent"></div>
                  </div>
                )}

                <div className="mb-6 flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-purple-500/20 bg-white/5 px-3 py-1 text-xs text-purple-300 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {selectedProject.links.web && (
                    <a
                      href={selectedProject.links.web}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-link group flex items-center gap-2 text-sm text-white"
                      style={{ cursor: 'pointer', position: 'relative', zIndex: 50 }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-purple-500/20">
                        <FaGlobe className="text-purple-400" />
                      </div>
                      View Website
                    </a>
                  )}
                  {selectedProject.links.github && (
                    <a
                      href={selectedProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="animated-link group flex items-center gap-2 text-sm text-white"
                      style={{ cursor: 'pointer', position: 'relative', zIndex: 50 }}
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/5 group-hover:bg-purple-500/20">
                        <FaGithub className="text-purple-400" />
                      </div>
                      View Code
                    </a>
                  )}
                </div>
              </div>

              <div className="mt-6 md:mt-0 md:w-2/3">
                <h3 className="mb-3 text-xl font-semibold text-white">Overview</h3>
                <p className="mb-6 text-gray-300/90">{selectedProject.description}</p>

                {selectedProject.details && (
                  <>
                    <h3 className="mb-3 text-xl font-semibold text-white">Key Features</h3>
                    <ul className="mb-4 space-y-2">
                      {selectedProject.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300/90">
                          <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-purple-400"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                {selectedProject.type === 'Website' &&
                  selectedProject.category === 'Real Estate' && (
                    <div className="mt-6">
                      <div className="flex flex-wrap gap-2">
                        {['NestJS', 'ReactJS', 'DiscordJS'].map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                        <span className="rounded-md bg-white/5 px-2 py-1 text-xs text-gray-300">
                          Real Estate
                        </span>
                      </div>
                      <a
                        href="#"
                        className="mt-4 inline-flex items-center text-sm text-purple-400"
                        style={{ cursor: 'pointer', position: 'relative', zIndex: 50 }}
                      >
                        <FaGlobe className="mr-2 h-4 w-4" />
                        View Website
                      </a>
                    </div>
                  )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

type FilterButtonProps = {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
};

const FilterButton: React.FC<FilterButtonProps> = ({ children, active, onClick }) => {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      onClick={onClick}
      className={`rounded-full px-5 py-2 text-sm font-medium transition-all
        ${
          active
            ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
            : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
        }`}
    >
      {children}
    </motion.button>
  );
};

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick, index }) => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Website':
        return <FaGlobe className="h-4 w-4 text-purple-400" />;
      case 'App':
        return <FaMobileAlt className="h-4 w-4 text-purple-400" />;
      case 'Utility':
        return <FaCode className="h-4 w-4 text-purple-400" />;
      default:
        return <FaLaptopCode className="h-4 w-4 text-purple-400" />;
    }
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
      }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="portfolio-card group cursor-pointer"
      onClick={onClick}
    >
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-2xl backdrop-blur-sm">
          {project.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-purple-400">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            {getTypeIcon(project.type)}
            <span>{project.type}</span>
          </div>
        </div>
        {project.featured && (
          <span className="ml-auto rounded-full bg-purple-500/20 px-2.5 py-0.5 text-xs font-medium text-purple-300">
            Featured
          </span>
        )}
      </div>

      <p className="mb-5 text-gray-300/90">{project.description}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-300"
          >
            {tag}
          </span>
        ))}
        {project.tags.length > 4 && (
          <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-gray-300">
            +{project.tags.length - 4} more
          </span>
        )}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          {project.links.web && (
            <a
              href={project.links.web}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-purple-400"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGlobe className="h-5 w-5" />
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 transition-colors hover:text-purple-400"
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className="h-5 w-5" />
            </a>
          )}
        </div>

        <motion.button
          className="flex items-center gap-1 text-sm text-purple-400 opacity-0 transition-opacity group-hover:opacity-100"
          whileHover={{ x: 3 }}
        >
          <span>View Details</span>
          <FaArrowRight className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Update your CursorContextProvider component's global styles (you can add this at the end of your portfolio component)
export const globalStyles = `
  /* Ensure cursor is always on top of modals */
  html,
  body {
    cursor: none !important;
  }

  /* Override cursor for all interactive elements in modals */
  .portfolio-card a,
  .portfolio-card button,
  .portfolio-card [role='button'] {
    cursor: pointer !important; 
    position: relative;
    z-index: 60;
  }

  /* Maintain visible cursor above modal */
  .fixed.inset-0.z-40 {
    pointer-events: auto;
    z-index: 40 !important;
  }
  
  /* Ensure the custom cursor is always on top */
  .pointer-events-none.fixed.left-0.top-0.z-50 {
    z-index: 100 !important;
  }
`;
