import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageLayout({ children, title, subtitle }: PageLayoutProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className="p-6 lg:p-8"
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-4xl font-bold text-white lg:text-5xl">{title}</h1>
        {subtitle && <p className="mb-8 text-lg text-gray-400">{subtitle}</p>}
        {children}
      </div>
    </motion.div>
  );
}
