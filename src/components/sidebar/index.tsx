'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

interface MenuItem {
  icon: string;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { icon: '👤', label: 'About me', path: '/' },
  { icon: '🎓', label: 'Education', path: '/education' },
  { icon: '💻', label: 'Skills', path: '/skills' },
  { icon: '💼', label: 'Experience', path: '/experience' },
  { icon: '🎨', label: 'Portfolio', path: '/portfolio' },
  // { icon: '🏆', label: 'Achievements', path: '/achievements' },
  // { icon: '📧', label: 'Contact', path: '/contact' },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-lg border border-white/10 bg-[#0a0a0a] p-2 lg:hidden"
      >
        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-[280px] lg:w-1/5 
          transform border-r border-white/10 bg-[#0a0a0a] p-6
          transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        {/* Profile Section */}
        <div className="mb-8 text-center">
          <div className="relative mx-auto mb-4 h-24 w-24 lg:h-32 lg:w-32">
            <Image
              src="/iliyas.jpeg"
              alt="Profile"
              width={128}
              height={128}
              className="rounded-full border-2 border-[#8B5CF6] p-1"
            />
            <div className="absolute bottom-2 right-2 h-3 w-3 rounded-full border-2 border-[#0a0a0a] bg-green-500 lg:h-4 lg:w-4" />
          </div>
          <h1 className="mb-1 text-lg font-bold text-white lg:text-xl">Iliyas</h1>
          <p className="text-xs text-gray-400 lg:text-sm">Software Engineer</p>
        </div>

        {/* Navigation Menu */}
        <nav className="space-y-1 lg:space-y-2">
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path} onClick={() => setIsOpen(false)}>
              <motion.div
                whileHover={{ x: 5 }}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors lg:px-4 ${
                  pathname === item.path
                    ? 'bg-[#8B5CF6]/10 text-[#8B5CF6]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="text-lg lg:text-xl">{item.icon}</span>
                <span className="text-xs lg:text-sm">{item.label}</span>
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="flex items-center justify-center gap-4 text-gray-400">
            <Link
              href="https://github.com/s-iliyas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#8B5CF6]"
            >
              <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/in/s-iliyas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-[#8B5CF6]"
            >
              <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <button
              onClick={toggleFullscreen}
              className="transition-colors hover:text-[#8B5CF6]"
              title="Toggle Fullscreen"
            >
              <svg className="h-4 w-4 lg:h-5 lg:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V6a2 2 0 012-2h2M4 16v2a2 2 0 002 2h2m8-20h2a2 2 0 012 2v2m0 12v2a2 2 0 01-2 2h-2"
                />
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
