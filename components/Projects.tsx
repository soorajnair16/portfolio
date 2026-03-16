'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { SectionWrapper } from './SectionWrapper';
import projectsData from '@/data/projects.json';
import { motion } from 'framer-motion';
import { Github, Link as LinkIcon } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
};

const allProjects = projectsData as Project[];

const allTechs = Array.from(
  new Set(allProjects.flatMap((project) => project.techStack))
).sort();

export function Projects() {
  const [selectedTech, setSelectedTech] = useState<string>('All');

  const filteredProjects = useMemo(() => {
    if (selectedTech === 'All') return allProjects;
    return allProjects.filter((project) => project.techStack.includes(selectedTech));
  }, [selectedTech]);

  return (
    <SectionWrapper
      id="projects"
      title="Projects"
      subtitle="Selected work that highlights my experience with backend systems, APIs, and infrastructure-aware development."
    >
      <div className="space-y-6">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedTech('All')}
            className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
              selectedTech === 'All'
                ? 'border-accent/60 bg-accent/10 text-accent'
                : 'border-slate-700/80 bg-slate-950/60 text-slate-200 hover:border-accent/40 hover:text-accent'
            }`}
          >
            All
          </button>
          {allTechs.map((tech) => (
            <button
              key={tech}
              type="button"
              onClick={() => setSelectedTech(tech)}
              className={`rounded-full border px-3 py-1 text-xs font-medium transition ${
                selectedTech === tech
                  ? 'border-accent/60 bg-accent/10 text-accent'
                  : 'border-slate-700/80 bg-slate-950/60 text-slate-200 hover:border-accent/40 hover:text-accent'
              }`}
            >
              {tech}
            </button>
          ))}
        </div>

        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {filteredProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80"
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03] group-hover:brightness-110"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-4">
                <header>
                  <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                    {project.description}
                  </p>
                </header>
                <div className="mt-1 flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-accent/60 hover:text-accent"
                  >
                    <Github className="h-3.5 w-3.5" />
                    Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-accent/90 px-3 py-1.5 text-xs font-medium text-slate-950 shadow-sm shadow-sky-500/30 transition hover:bg-sky-400"
                    >
                      <LinkIcon className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

