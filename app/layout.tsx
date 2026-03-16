import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sooraj | Backend Developer Portfolio',
  description:
    'Professional backend developer portfolio showcasing projects, skills, and experience in Python, FastAPI, Node.js, PostgreSQL, and more.',
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: 'Sooraj | Backend Developer Portfolio',
    description:
      'Backend developer specializing in Python, FastAPI, Node.js, and modern web technologies.',
    url: 'https://example.com',
    siteName: 'Sooraj Portfolio',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-background text-foreground">
        { children }
      </body>
    </html>
  );
}

