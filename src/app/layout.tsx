import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Sidebar from '@/components/sidebar';

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
    'Full-stack developer with 3 years of experience in web development, specializing in Python, JavaScript, and cloud technologies.',
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
    description: 'Full-stack developer specializing in modern web technologies',
    url: 'https://iliyas.dev',
    siteName: 'Shaik Mohammed Iliyas Portfolio',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <main className="flex min-h-screen">
          <Sidebar />
          <div 
            style={{ backgroundImage: 'url(/bg-pattern.png)' }} 
            className="flex-1 min-h-screen ml-0 lg:ml-[20%]"
          >
            <div className="h-full w-full backdrop-blur-sm bg-black/30 p-4 pt-16">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
