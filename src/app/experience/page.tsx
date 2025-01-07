'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Experience {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies?: string[];
  image: string;
}

const experiences: Experience[] = [
  {
    title: 'Software Engineer',
    company: 'Raftlabs',
    period: 'Oct 2023 - Present',
    location: 'Remote',
    description: [
      'Involving in designing and implementing server-side solutions',
      'Committed to delivering well-architected and maintainable code',
      'Collaborating with cross-functional teams to enhance application features',
      'Addressing emerging challenges in real-time environments',
    ],
    technologies: ['Python', 'JavaScript', 'AWS', 'Node.js'],
    image: '/raftlabs.png',
  },
  {
    title: 'Software Engineer',
    company: 'Zelhus Consultants',
    period: 'June 2022 - Oct 2023',
    location: 'New Delhi',
    description: [
      'Added WhatsApp button functionality to BOT using Python script',
      'Maintained and monitored BOT AWS EC2 servers and AWS FARGATE',
      'Created API services using DRF, including Google login with JWT',
      'Integrated Google Calendar and Direction APIs',
      'Deployed API services to AWS EC2 server in Docker containers',
    ],
    technologies: ['Python', 'AWS', 'Docker', 'DRF', 'Google APIs'],
    image: '/zelhus.svg',
  },
  {
    title: 'Software Engineer Intern',
    company: 'HiTalent',
    period: 'Nov 2021 - May 2022',
    location: 'Remote',
    description: [
      'Enhanced Python and Javascript skills',
      'Learned Django and ReactJs',
      "Contributed to building HiTalent's website prototype",
    ],
    technologies: ['Python', 'JavaScript', 'Django', 'React'],
    image: '/hitalent.png',
  },
];

export default function ExperiencePage() {
  return (
    <PageLayout title="Work Experience" subtitle="Summary of my">
      <div className="relative space-y-16">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex gap-8"
          >
            {/* Timeline connector */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-[24px] top-[48px] h-[calc(100%+4rem)] w-[2px] bg-gray-800" />
            )}

            {/* Company Logo Circle */}
            <div className="h-14 w-14 shrink-0 rounded-full bg-gray-800 flex items-center justify-center">
              <Image src={exp.image} alt={exp.company} width={36} height={36} className='rounded-full'/>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-6 flex items-start justify-between sm:flex-row flex-col gap-2">
                <div>
                  <h3 className="flex items-center gap-2">
                    <span className="text-xl font-semibold">
                      <span className="text-[#8B5CF6]">{exp.title.split(' ')[0]}</span>
                      {' ' + exp.title.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>
                  <p className="mt-1 text-gray-400">
                    <span className="mr-2">🏢</span>
                    {exp.company}
                  </p>
                </div>
                <span className="rounded-md bg-gray-800/50 px-3 py-1 text-sm text-gray-400">
                  {exp.period}
                </span>
              </div>

              <div className="mb-4 text-gray-300">
                <ul className="list-inside space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-gray-400">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {exp.technologies && (
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md bg-gray-800/50 px-3 py-1 text-xs uppercase tracking-wider text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
