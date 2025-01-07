'use client';

import PageLayout from '@/components/PageLayout';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  category: string;
  experience?: string;
}

const skills: Skill[] = [
  // Backend
  { name: 'Python', level: 95, category: 'Backend', experience: '3+ years' },
  { name: 'Node.js', level: 90, category: 'Backend', experience: '2+ years' },
  { name: 'Express.js', level: 85, category: 'Backend', experience: '2+ years' },
  { name: 'NestJS', level: 80, category: 'Backend', experience: '1+ year' },
  { name: 'Django REST', level: 85, category: 'Backend', experience: '2+ years' },
  
  // Frontend
  { name: 'React.js', level: 90, category: 'Frontend', experience: '2+ years' },
  { name: 'Next.js', level: 85, category: 'Frontend', experience: '2+ years' },
  { name: 'TailwindCSS', level: 90, category: 'Frontend', experience: '2+ years' },
  
  // Cloud & DevOps
  { name: 'AWS EC2', level: 85, category: 'Cloud & DevOps', experience: '2+ years' },
  { name: 'Docker', level: 80, category: 'Cloud & DevOps', experience: '2+ years' },
  { name: 'AWS Lambda', level: 75, category: 'Cloud & DevOps', experience: '1+ year' },
  { name: 'Git', level: 90, category: 'Cloud & DevOps', experience: '3+ years' },
  
  // Databases
  { name: 'PostgreSQL', level: 85, category: 'Databases', experience: '2+ years' },
  { name: 'MongoDB', level: 80, category: 'Databases', experience: '1+ year' },
  { name: 'Redis', level: 75, category: 'Databases', experience: '1+ year' },
  
  // Languages
  { name: 'English', level: 90, category: 'Languages', experience: 'Fluent' },
  { name: 'Hindi', level: 85, category: 'Languages', experience: 'Bilingual' },
  { name: 'Telugu', level: 95, category: 'Languages', experience: 'Native' },
  { name: 'Arabic', level: 70, category: 'Languages', experience: 'Read & Write' },
  { name: 'Bahasa', level: 40, category: 'Languages', experience: 'Beginner' },
];

export default function SkillsPage() {
  const categories = ['Backend', 'Frontend', 'Cloud & DevOps', 'Databases', 'Languages'];
  
  return (
    <PageLayout title="My Skill Set" subtitle="Technologies & Languages I work with">
      <div className="grid gap-8">
        {categories.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            className="rounded-xl bg-white/5 p-6 backdrop-blur-sm"
          >
            <h2 className="mb-6 text-2xl font-semibold text-[#8B5CF6]">{category}</h2>
            <div className="space-y-4">
              {skills
                .filter((skill) => skill.category === category)
                .map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <div>
                        <span className="text-white">{skill.name}</span>
                        {skill.experience && (
                          <span className="ml-2 text-gray-400">({skill.experience})</span>
                        )}
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-full rounded-full bg-[#8B5CF6]"
                      />
                    </div>
                  </div>
                ))}
            </div>
          </motion.div>
        ))}
      </div>
    </PageLayout>
  );
}
