'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import PageLayout from '@/components/PageLayout';

interface EducationItem {
  school: string;
  degree: string;
  period: string;
  description: string;
  topics: string[];
  tags: string[];
  logo: string;
  type?: 'education' | 'internship';
  links?: {
    web: string;
  }
}

const educationData: EducationItem[] = [
  {
    school: 'Sri Venkateswara University, Tirupati',
    degree: 'Bachelor of Technology in Electronics and Communication Engineering',
    period: '2017 - 2021',
    description: 'Completed Bachelor of Technology degree with focus on:',
    topics: [
      'Electronics and Communication fundamentals',
      'Programming fundamentals',
      'Technical problem solving',
    ],
    tags: ['ECE', 'ENGINEERING', 'TECHNOLOGY'],
    logo: '/svu.png', // Add your university logo
    type: 'education',
    links:{
      web: 'https://svu.ac.in/',
    }
  }
];

export default function Education() {
  return (
    <PageLayout title="Education & Experience" subtitle="Summary of my">
      <div className="relative">
        {educationData.map((item, index) => (
          <motion.div
            key={item.school}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex gap-8"
          >
            {/* Timeline connector */}
            {index !== educationData.length - 1 && (
              <div className="absolute left-[24px] top-[48px] h-[calc(100%+4rem)] w-[2px] bg-gray-800" />
            )}

            {/* School Logo Circle */}
            <div className="h-14 w-14 shrink-0 rounded-full bg-gray-800 flex items-center justify-center">
              <Image
                src={item.logo}
                alt={item.school}
                width={36}
                height={36}
                className="rounded-full"
              />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="flex items-center gap-2">
                    <span className="text-xl font-semibold">
                      <span className="text-[#8B5CF6]">{item.degree.split(' ')[0]}</span>
                      {' ' + item.degree.split(' ').slice(1).join(' ')}
                      {item.type === 'internship' && (
                        <span className="ml-2 text-sm bg-[#8B5CF6]/20 px-2 py-1 rounded">
                          Internship
                        </span>
                      )}
                    </span>
                  </h3>
                  <p className="mt-1 text-gray-400">
                    <span className="mr-2">🏢</span>
                    {item.school}
                  </p>
                </div>
                <span className="rounded-md bg-gray-800/50 px-3 py-1 text-sm text-gray-400">
                  {item.period}
                </span>
              </div>

              <div className="mb-4 text-gray-300">
                <p className="mb-2">{item.description}</p>
                <ul className="list-inside space-y-2">
                  {item.topics.map((topic, i) => (
                    <li key={i} className="text-gray-400">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-gray-800/50 px-3 py-1 text-xs uppercase tracking-wider text-gray-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
