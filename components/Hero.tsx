'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[70vh] items-center border-b border-slate-800/80 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 py-14 sm:px-6 lg:px-8 lg:flex-row lg:items-center lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <p className="text-sm font-medium tracking-[0.25em] text-accent/80">
            BACKEND DEVELOPER
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Hi, I&apos;m <span className="text-accent">Sooraj</span>.
            <br />
            I build reliable backend systems.
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            Backend developer focused on designing resilient APIs, scalable architectures, and
            clean data models. I work with Python, FastAPI, Node.js, and modern databases to build
            systems that are performant, maintainable, and production-ready.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/20 transition hover:bg-sky-400"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:border-accent/60 hover:bg-slate-900"
            >
              Contact Me
            </a>
          </div>
          <div className="flex items-center gap-4 pt-2 text-slate-400">
            <span className="text-xs uppercase tracking-[0.25em]">Find me on</span>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/soorajnair16"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-300 transition hover:border-accent/60 hover:text-accent"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/soorajsnair257/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-slate-700 bg-slate-900/60 p-2 text-slate-300 transition hover:border-accent/60 hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-4 flex flex-1 items-center justify-center lg:mt-0"
        >
          <div className="gradient-border relative h-48 w-48 rounded-3xl bg-slate-900/60 p-0.5 sm:h-56 sm:w-56 lg:h-64 lg:w-64">
            <div className="flex h-full w-full flex-col justify-between rounded-[1.4rem] bg-slate-950 p-5">
              <div className="space-y-1">
                <p className="text-xs font-medium text-slate-400">Currently focused on</p>
                <p className="text-sm font-semibold text-slate-100">
                  API design, performance, and clean architecture.
                </p>
              </div>
              <div className="space-y-3 text-xs text-slate-300">
                <p className="font-semibold text-slate-200">Core stack</p>
                <ul className="space-y-1 text-slate-400">
                  <li>Python · FastAPI · Node.js</li>
                  <li>PostgreSQL · Docker · Linux</li>
                  <li>React · Next.js · Tailwind</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

