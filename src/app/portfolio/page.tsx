'use client';

import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaGlobe } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { useState } from 'react';
import { LinkPreview } from '@/components/ui/link-preview';

interface Project {
  title: string;
  type: 'App' | 'Website' | 'Utility';
  category: string;
  description: string;
  details?: string[];
  tags: string[];
  icon: string;
  links: {
    github?: string;
    web?: string;
    playstore?: string;
    appstore?: string;
  };
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
    ],
    tags: ['NextJS', 'NodeJS', 'PayBy', 'AWS'],
    icon: '💳',
    links: {
      web: 'https://tigerpay.app',
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
    ],
    tags: ['Next.js', 'Hasura', 'NodeJS', 'GraphQL'],
    icon: '🎁',
    links: {
      web: 'https://oohpodrewards.com',
    },
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
    ],
    tags: ['Next.js', 'LangChain', 'AI', 'Hasura'],
    icon: '✍️',
    links: {
      web: 'https://draftly.so',
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
    ],
    tags: ['Express.js', 'React.js', 'PostgreSQL', 'JWT'],
    icon: '👨‍🎓',
    links: {
      web: 'https://hitalent.in',
    },
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
    ],
    tags: ['NestJS', 'ReactJS', 'DiscordJS'],
    icon: '🏠',
    links: {
      web: 'https://collabhome.io',
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
    ],
    tags: ['NodeJS', 'ReactJS', 'PostgreSQL', 'Docker'],
    icon: '🔖',
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
    ],
    tags: ['Rasa', 'Python', 'AI', 'NLP'],
    icon: '🤖',
    links: {
      github: '#',
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
    ],
    tags: ['Django', 'Python', 'WebSockets'],
    icon: '📚',
    links: {
      github: '#',
    },
  },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' ? projects : projects.filter((p) => p.type === filter);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="mx-auto min-h-screen max-w-7xl px-4 py-12"
    >
      <motion.div variants={fadeIn('down', 'tween', 0.2, 1)} className="mb-12 text-left">
        <h2 className="text-3xl font-bold text-gray-200">Take a look at</h2>
        <h1 className="mb-8 text-4xl font-bold text-violet-500">My Portfolio</h1>

        <div className="mb-8 flex flex-wrap gap-4">
          <button
            onClick={() => setFilter('All')}
            className={`rounded-full px-4 py-1 ${filter === 'All' ? 'bg-violet-500 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            All ({projects.length})
          </button>
          <button
            onClick={() => setFilter('App')}
            className={`rounded-full px-4 py-1 ${filter === 'App' ? 'bg-violet-500 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            Apps ({projects.filter((p) => p.type === 'App').length})
          </button>
          <button
            onClick={() => setFilter('Website')}
            className={`rounded-full px-4 py-1 ${filter === 'Website' ? 'bg-violet-500 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            Web ({projects.filter((p) => p.type === 'Website').length})
          </button>
          <button
            onClick={() => setFilter('Utility')}
            className={`rounded-full px-4 py-1 ${filter === 'Utility' ? 'bg-violet-500 text-white' : 'bg-gray-800 text-gray-300'}`}
          >
            Utilities ({projects.filter((p) => p.type === 'Utility').length})
          </button>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 'tween', 0.4, 1)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={() => setSelectedProject(project)} />
        ))}
      </motion.div>

      {/* Project Details Dialog */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="w-full max-w-2xl rounded-xl bg-gray-900 p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-violet-500">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">{selectedProject.description}</p>
              {selectedProject.details && (
                <ul className="list-inside list-disc space-y-2 text-gray-300">
                  {selectedProject.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              )}
              <div className="flex gap-4 pt-4">
                {selectedProject.links.web && (
                  <a
                    href={selectedProject.links.web}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-500 hover:text-violet-400"
                  >
                    <FaGlobe size={24} />
                  </a>
                )}
                {selectedProject.links.github && (
                  <a
                    href={selectedProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-violet-500 hover:text-violet-400"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="cursor-pointer rounded-xl bg-gray-800 p-6 transition-all hover:shadow-xl"
    >
      <div className="mb-4 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-700 text-2xl">
          {project.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-violet-500">{project.title}</h3>
          <p className="text-sm text-gray-400">{project.type}</p>
        </div>
      </div>

      <p className="mb-4 text-sm text-gray-300">{project.description}</p>

<br />

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag, index) => (
          <span key={index} className="rounded-full bg-gray-700 px-3 py-1 text-xs text-gray-300">
            {tag}
          </span>
        ))}
      </div>

<br />
      <div className="flex items-center justify-between gap-4 text-gray-400">
        {project.links.web && (
          <LinkPreview url={project.links.web} className="hover:text-violet-500">
            <FaGlobe size={20} />
          </LinkPreview>
        )}
        <button onClick={onClick} className="hover:text-violet-500">
          <FaArrowRight size={20} />
        </button>
      </div>
    </motion.div>
  );
};
