'use client';

import { motion } from 'framer-motion';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#education', label: 'Education' },
  { href: '#interests', label: 'Interests' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-40 border-b border-slate-800/80 bg-background/80 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#hero" className="text-sm font-semibold tracking-[0.25em] text-slate-300">
          SOORAJ
        </a>
        <ul className="hidden items-center gap-6 text-sm text-slate-300 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-1 text-xs font-medium text-slate-300 transition hover:bg-slate-800/70 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}

