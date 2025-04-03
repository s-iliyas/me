import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/sidebar';
import CursorContextProvider from '@/components/cursor-context';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shaik Mohammed Iliyas | Software Engineer',
  description:
    'Software Engineer with 3 years of experience in web development, specializing in Python, JavaScript, and cloud technologies.',
  keywords: [
    'Software Engineer',
    'Full Stack Developer',
    'Python',
    'JavaScript',
    'AWS',
    'React',
    'Node.js',
  ],
  authors: [{ name: 'Shaik Mohammed Iliyas' }],
  openGraph: {
    title: 'Shaik Mohammed Iliyas | Software Engineer',
    description: 'Software Engineer specializing in modern web technologies',
    url: 'https://iliyas.in',
    siteName: 'Shaik Mohammed Iliyas Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} overflow-x-hidden font-sans`}>
        <CursorContextProvider>
          {/* Background Elements */}
          <div className="fixed inset-0 z-[-1]">
            {/* Background gradient */}
            <div
              className="absolute inset-0 bg-[#090918]"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(120, 65, 255, 0.1) 0%, transparent 45%), 
                                  radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.1) 0%, transparent 45%)`,
              }}
            />

            {/* Animated gradient orbs */}
            <div
              className="animate-pulse-slow absolute right-1/4 top-1/4 h-64 w-64 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, rgba(168, 85, 247, 0.05) 50%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />

            <div
              className="animate-pulse-slow absolute bottom-1/3 left-1/3 h-72 w-72 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(236, 72, 153, 0.05) 50%, transparent 70%)',
                filter: 'blur(40px)',
                animationDelay: '2s',
              }}
            />

            <div
              className="animate-pulse-slow absolute right-1/3 top-2/3 h-56 w-56 rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 50%, transparent 70%)',
                filter: 'blur(40px)',
                animationDelay: '4s',
              }}
            />

            {/* Subtle noise */}
            <div className="noise-bg absolute inset-0 opacity-[0.03] mix-blend-soft-light" />

            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(168, 85, 247, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          {/* The sidebar is positioned absolutely and will be handled in its own component */}
          <Sidebar />

          {/* Main content area with proper margin to account for sidebar */}
          <main className="main-content">{children}</main>
        </CursorContextProvider>
      </body>
    </html>
  );
}
