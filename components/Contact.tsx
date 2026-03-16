'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { FormEvent } from 'react';
import { SectionWrapper } from './SectionWrapper';

const EMAIL = 'soorajnair257@gmail.com';
const LINKEDIN_URL = 'https://www.linkedin.com/in/soorajsnair257/';
const GITHUB_URL = 'https://github.com/soorajnair16';

export function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    const subject = encodeURIComponent(`Portfolio contact from ${name || 'visitor'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <SectionWrapper
      id="contact"
      title="Contact"
      subtitle="Reach out if you'd like to collaborate, discuss an opportunity, or just say hello."
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr,1.3fr]">
        <div className="space-y-4 text-sm text-slate-300 sm:text-base">
          <p>
            The best way to reach me is via email or LinkedIn. I&apos;m open to backend-focused
            roles, freelance work, and interesting projects where I can help build reliable,
            maintainable systems.
          </p>
          <div className="space-y-2 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a className="hover:text-accent" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="h-4 w-4 text-accent" />
              <a className="hover:text-accent" href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="h-4 w-4 text-accent" />
              <a className="hover:text-accent" href={GITHUB_URL} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-5"
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 transition focus:border-accent/60 focus:ring-2"
                autoComplete="name"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 transition focus:border-accent/60 focus:ring-2"
                autoComplete="email"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-accent/40 transition focus:border-accent/60 focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/25 transition hover:bg-sky-400"
          >
            Send message
          </button>
          <p className="text-[11px] text-slate-500">
            This form opens your email client using a pre-filled message. You can replace it with a
            backend API or service like Formspree when deploying.
          </p>
        </form>
      </div>
    </SectionWrapper>
  );
}

