'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';

// export const metadata = {
//   title: 'Achievements | David Chen',
//   description: 'Professional achievements and certifications in software development',
// };

interface Achievement {
  title: string;
  date: string;
  organization: string;
  description: string;
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: 'AWS Certified Solutions Architect',
    date: '2023',
    organization: 'Amazon Web Services',
    description: 'Professional certification for AWS cloud architecture',
    link: 'https://aws.amazon.com/certification/',
  },
  {
    title: 'Google Cloud Professional Developer',
    date: '2023',
    organization: 'Google Cloud',
    description: 'Expert-level certification for Google Cloud Platform',
    link: 'https://cloud.google.com/certification',
  },
  // Add more achievements
];

export default function AchievementsPage() {
  return (
    <PageLayout title="Achievements" subtitle="Milestones & Certifications">
      <div className="relative">
        <div className="relative flex h-[40rem] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-neutral-950">
          <div className="z-10 grid gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="rounded-xl bg-white/10 p-6 backdrop-blur-md"
              >
                <h3 className="mb-2 text-xl font-semibold text-[#8B5CF6]">{achievement.title}</h3>
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-violet-200">{achievement.organization}</span>
                  <span className="text-sm text-violet-300">{achievement.date}</span>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
                {achievement.link && (
                  <a
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm text-[#8B5CF6] hover:text-violet-400"
                  >
                    View Certificate →
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
