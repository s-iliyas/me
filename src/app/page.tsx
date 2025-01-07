'use client';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaGlobe, FaLanguage, FaCode, FaBook, FaGraduationCap } from 'react-icons/fa';
import Image from 'next/image';

export default function AboutPage() {
  const testimonials = [
    {
      text: "Iliyas demonstrated exceptional skills in developing our payment processing platform. His work on integrating PayBy and developing merchant tools was invaluable.",
      author: "TigerPay Team",
      role: "Payment Platform",
      avatar: "/avatars/tigerpay.png"
    },
    {
      text: "His contribution to the OOHPod Rewards platform showed his versatility in both frontend and backend development. The admin tools he developed significantly improved our operations.",
      author: "OOHPod Team",
      role: "Rewards Platform",
      avatar: "/avatars/oohpod.jpeg"
    },
    {
      text: "Iliyas's work on Draftly's AI content generation features was outstanding. His implementation of LangChain.js helped create a more intuitive user experience.",
      author: "Draftly Team",
      role: "Content Platform",
      avatar: "/avatars/draftly.png"
    }
  ];

  const interests = [
    {
      icon: <FaLanguage className="w-6 h-6" />,
      title: "Languages",
      description: "Fluent in English, Hindi, Telugu, Arabic (Read & Write), and learning Bahasa"
    },
    {
      icon: <FaCode className="w-6 h-6" />,
      title: "Programming",
      description: "Exploring new technologies and building side projects"
    },
    {
      icon: <FaBook className="w-6 h-6" />,
      title: "Technical Writing",
      description: "Writing technical documentation and blog posts"
    },
    {
      icon: <FaGraduationCap className="w-6 h-6" />,
      title: "Continuous Learning",
      description: "Always learning new technologies and frameworks"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-8">
          <h1 className="text-2xl">Hello...</h1>
        </div>
        <h2 className="text-4xl mb-4">I&apos;m <span className="text-[#8B5CF6]">Shaik Mohammed Iliyas!</span></h2>
        <div className="flex items-center gap-4 text-gray-400">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt />
            <span>Kurnool, AP</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <span>shaik.m.iliyas@gmail.com</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <FaGlobe />
            <span>iliyas.dev</span>
          </div>
        </div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-2xl mb-6">
          <span className="text-[#8B5CF6]">A little bit</span> about me...
        </h2>
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
            <p className="text-gray-300">
              Goal-oriented full-stack developer with 3 years of experience in developing
              and deploying web applications. Proficient in programming languages such as Python
              and JavaScript with strong problem-solving skills and ability to work independently
              or as part of a team.
            </p>
            <div className="mt-6">
              <h3 className="text-[#8B5CF6] mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'JavaScript', 'TypeScript', 'AWS', 'React', 'Node.js', 'Docker', 'PostgreSQL', 'MongoDB'].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16"
      >
        <h2 className="text-2xl mb-8">
          Client <span className="text-[#8B5CF6]">testimonials</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <p className="text-gray-300 mb-6">&quot;{testimonial.text}&quot;</p>
              <div className="mt-4 flex items-center">
                <div className="w-12 h-12 relative rounded-full overflow-hidden mr-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-2xl mb-8">
          Personal <span className="text-[#8B5CF6]">interests</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interests.map((interest, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="text-[#8B5CF6]">
                  {interest.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{interest.title}</h3>
              </div>
              <p className="text-gray-300">{interest.description}</p>
            </div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
