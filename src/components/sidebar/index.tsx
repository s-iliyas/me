'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedinIn,
  FaExpand,
  FaCompress,
  FaHome,
  FaUserGraduate,
  FaCode,
  FaBriefcase,
  FaPalette,
} from 'react-icons/fa';

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  path: string;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Check fullscreen status when component mounts and when it changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const menuItems: MenuItem[] = [
    { icon: <FaHome className="h-5 w-5" />, label: 'About me', path: '/' },
    { icon: <FaUserGraduate className="h-5 w-5" />, label: 'Education', path: '/education' },
    { icon: <FaCode className="h-5 w-5" />, label: 'Skills', path: '/skills' },
    { icon: <FaBriefcase className="h-5 w-5" />, label: 'Experience', path: '/experience' },
    { icon: <FaPalette className="h-5 w-5" />, label: 'Portfolio', path: '/portfolio' },
  ];

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 rounded-full border border-white/10 bg-black/70 p-3 shadow-lg backdrop-blur-md lg:hidden"
      >
        <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </motion.button>

      {/* Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar for mobile (with animation) */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className={`fixed left-0 top-0 z-40 h-screen 
          w-[280px] border-r border-white/5 bg-[rgba(20,20,35,0.8)] p-6 shadow-xl
          backdrop-blur-md transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-purple-900/10 to-pink-900/5"></div>

        {/* Sidebar Content - Mobile */}
        {renderSidebarContent()}
      </motion.aside>

      {/* Static Sidebar for desktop */}
      <aside
        className="fixed left-0 top-0 z-40 hidden h-screen 
        w-[20%] min-w-[280px] max-w-[320px] border-r border-white/5 
        bg-[rgba(20,20,35,0.8)] p-6 shadow-xl backdrop-blur-md lg:block"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 z-[-1] bg-gradient-to-b from-purple-900/10 to-pink-900/5"></div>

        {/* Sidebar Content - Desktop */}
        {renderSidebarContent()}
      </aside>
    </>
  );

  // Helper function to avoid duplicating the sidebar content
  function renderSidebarContent() {
    return (
      <>
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12 text-center"
        >
          <div className="relative mx-auto mb-5 h-28 w-28 lg:h-32 lg:w-32">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-md"></div>
            <Image
              src="/iliyas.png"
              alt="Profile"
              width={128}
              height={128}
              className="relative rounded-full border-2 border-white/10 object-cover p-1 shadow-2xl"
            />
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 0 0 rgba(168, 85, 247, 0.7)',
                  '0 0 0 10px rgba(168, 85, 247, 0)',
                  '0 0 0 0 rgba(168, 85, 247, 0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 border-[#15162c] bg-green-400 lg:h-4 lg:w-4"
            />
          </div>
          <h1 className="mb-2 text-xl font-bold text-white lg:text-2xl">Iliyas</h1>
          <div className="inline-block rounded-full bg-purple-500/10 px-3 py-1 text-xs text-purple-300 lg:text-sm">
            Software Engineer
          </div>
        </motion.div>

        {/* Navigation Menu */}
        <nav className="mb-12 space-y-1.5">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link href={item.path} onClick={() => setIsOpen(false)}>
                <motion.div
                  whileHover={{ x: 5, backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                    pathname === item.path
                      ? 'bg-gradient-to-r from-purple-500/10 to-transparent text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <div
                    className={`${pathname === item.path ? 'text-purple-400' : 'text-gray-500'}`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-sm font-medium">{item.label}</span>

                  {pathname === item.path && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="ml-auto h-2 w-2 rounded-full bg-purple-400"
                    />
                  )}
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="absolute bottom-8 left-6 right-6"
        >
          <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="flex items-center justify-center gap-6 text-gray-400">
            <motion.a
              whileHover={{ y: -3, color: '#a855f7' }}
              href="https://github.com/s-iliyas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </motion.a>

            <motion.a
              whileHover={{ y: -3, color: '#a855f7' }}
              href="https://linkedin.com/in/s-iliyas"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </motion.a>

            <motion.button
              whileHover={{ y: -3, color: '#a855f7' }}
              onClick={toggleFullscreen}
              className="transition-colors"
              title="Toggle Fullscreen"
            >
              {isFullscreen ? <FaCompress className="h-5 w-5" /> : <FaExpand className="h-5 w-5" />}
            </motion.button>
          </div>
        </motion.div>
      </>
    );
  }
}
