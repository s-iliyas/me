'use client';

import { createContext, useContext, useState, useEffect, ReactNode, memo } from 'react';
import UsernamePrompt, { CustomCursor } from './username-prompt';

interface CursorContextType {
  username: string;
  setUsername: (name: string) => void;
}

const CursorContext = createContext<CursorContextType>({
  username: '',
  setUsername: () => {},
});

export const useCursor = () => useContext(CursorContext);

// Memoized cursor component to optimize performance
const MemoizedCursor = memo(CustomCursor);

export default function CursorContextProvider({ children }: { children: ReactNode }) {
  const [username, setUsername] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      const savedUsername = localStorage.getItem('username');
      if (savedUsername) {
        setUsername(savedUsername);
      } else {
        // Only show prompt if no username found
        setShowPrompt(true);
      }

      // Add a small delay to ensure smooth transitions
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleUsernameSet = (name: string) => {
    setUsername(name);
    setShowPrompt(false);
  };

  return (
    <CursorContext.Provider value={{ username, setUsername }}>
      {isLoaded && showPrompt && <UsernamePrompt onUsernameSet={handleUsernameSet} />}
      {username && <MemoizedCursor username={username} />}
      <style jsx global>{`
        /* Hide default cursor when custom cursor is active */
        html,
        body {
          cursor: ${username ? 'none !important' : 'auto'};
        }

        /* Custom cursor for interactive elements */
        a,
        button,
        input,
        textarea,
        select,
        [role='button'],
        [tabindex='0'],
        label,
        [aria-haspopup='true'],
        .clickable,
        .interactive {
          cursor: ${username ? 'none !important' : 'pointer'};
        }

        /* Maintain text selection cursor */
        p,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        span,
        div {
          cursor: ${username ? 'none !important' : 'text'};
        }

        /* Transition effects for smoother appearance */
        body * {
          transition: cursor 0.1s ease;
        }

        /* Ensure custom cursor appears above modals */
        .pointer-events-none.fixed.left-0.top-0.z-50 {
          z-index: 1000 !important;
        }

        /* Fix for portfolio modal links */
        .portfolio-card a,
        .portfolio-card button,
        .portfolio-card [role='button'] {
          cursor: none !important;
          position: relative;
          z-index: 60;
        }

        /* Ensure pointer events work correctly */
        .fixed.inset-0.z-40 {
          pointer-events: auto;
        }
      `}</style>
      {children}
    </CursorContext.Provider>
  );
}
