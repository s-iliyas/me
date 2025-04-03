'use client';

import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

interface UsernamePromptProps {
  onUsernameSet: (username: string) => void;
}

export default function UsernamePrompt({ onUsernameSet }: UsernamePromptProps) {
  const [username, setUsername] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('username', username);
      onUsernameSet(username);
      setIsVisible(false);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            className="w-full max-w-md rounded-lg border border-[#8B5CF6]/20 bg-[#121212] p-8 shadow-2xl"
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-6 text-center"
            >
              <h2 className="text-2xl font-bold text-white">
                Welcome to <span className="text-[#8B5CF6]">Iliyas&apos;s Portfolio</span>
              </h2>
              <p className="mt-2 text-gray-300">Please enter your name to continue</p>
            </motion.div>

            <form onSubmit={handleSubmit}>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Your name"
                  className="mb-4 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-gray-500 focus:border-[#8B5CF6] focus:outline-none"
                  autoFocus
                />

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, backgroundColor: '#7C3AED' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full rounded-lg bg-[#8B5CF6] px-4 py-3 font-medium text-white transition-colors"
                >
                  Continue
                </motion.button>
              </motion.div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function CustomCursor({ username }: { username: string }) {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [isHovering, setIsHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const checkHovering = () => {
      const element = document.elementFromPoint(cursorX.get(), cursorY.get()) as HTMLElement;

      if (element) {
        const interactiveElements = ['a', 'button', 'input', 'textarea', 'select'];
        const isInteractive =
          interactiveElements.includes(element.tagName.toLowerCase()) ||
          element.hasAttribute('role') ||
          element.hasAttribute('tabindex') ||
          window.getComputedStyle(element).cursor !== 'auto';

        setIsHovering(isInteractive);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      moveCursor(e);
      checkHovering();
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[1000] flex flex-col items-center justify-center"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      {/* Outer ring */}
      <motion.div
        className={`h-10 w-10 rounded-full border ${isHovering ? 'border-white/70' : 'border-[#8B5CF6]/60'} bg-transparent`}
        initial={{ scale: 1, opacity: 0.6 }}
        animate={{
          scale: isHovering ? 1.3 : [1, 1.2, 1],
          opacity: isHovering ? 0.8 : [0.6, 0.2, 0.6],
        }}
        transition={{
          duration: isHovering ? 0.3 : 2,
          ease: 'easeInOut',
          repeat: isHovering ? 0 : Infinity,
        }}
      />

      {/* Inner dot */}
      <motion.div
        className={`absolute h-2.5 w-2.5 rounded-full ${isHovering ? 'bg-white' : 'bg-[#8B5CF6]'}`}
        animate={{
          scale: isHovering ? 1.5 : [1, 1.3, 1],
        }}
        transition={{
          duration: isHovering ? 0.3 : 1.5,
          ease: 'easeInOut',
          repeat: isHovering ? 0 : Infinity,
        }}
      />

      {/* Username display */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 14,
          scale: isHovering ? 1.1 : 1,
        }}
        transition={{ duration: 0.2 }}
        className={`absolute left-1/2 top-2 -translate-x-1/2 whitespace-nowrap rounded-md 
          ${isHovering ? 'bg-white/90 text-[#8B5CF6]' : 'bg-[#8B5CF6]/90 text-white'}
          z-[1001] px-2.5 py-1 text-xs font-medium shadow-lg backdrop-blur-sm`}
      >
        {username}
      </motion.div>
    </motion.div>
  );
}
