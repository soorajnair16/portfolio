'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type SectionWrapperProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function SectionWrapper({ id, title, subtitle, children }: SectionWrapperProps) {
  return (
    <section id={id} className="w-full py-14 sm:py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="space-y-2"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent/80">
            {id}
          </p>
          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{title}</h2>
          {subtitle && (
            <p className="max-w-2xl text-sm text-slate-400 sm:text-base">{subtitle}</p>
          )}
        </motion.header>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}

