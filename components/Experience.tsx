import { SectionWrapper } from './SectionWrapper';

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  achievements: string[];
};

const experience: ExperienceItem[] = [
  {
    company: 'Corizo',
    role: 'Data Science Intern',
    duration: 'April 2023 - June 2023',
    achievements: [
      'Worked on real-world tasks under mentorship, following a structured development workflow.',
      'Collaborated with teammates to implement features, fix bugs, and improve code quality.',
      'Gained hands-on experience with modern tools and best practices in software development.'
    ]
  },
  {
    company: 'Besant Technologies',
    role: 'Associate Backend Developer Intern',
    duration: 'January 2025 - February 2026',
    achievements: [
      'Contributed to backend features using Python and related technologies in a team environment.',
      'Implemented and maintained APIs, focusing on clean architecture and reliable data handling.',
      'Collaborated with senior developers to review code, resolve issues, and improve performance.'
    ]
  },
  {
    company: 'FortRise Business Solutions',
    role: 'Backend Developer',
    duration: 'February 2026 - Present',
    achievements: [
      'Building and maintaining backend services with a focus on reliability and scalability.',
      'Designing and improving APIs that power internal tools and client-facing applications.',
      'Working closely with cross-functional teams to deliver features from design to production.'
    ]
  }
];

export function Experience() {
  return (
    <SectionWrapper
      id="experience"
      title="Experience"
      subtitle="Timeline of roles and responsibilities."
    >
      <ol className="relative space-y-8 border-l border-slate-800 pl-6">
        {experience.map((item) => (
          <li key={`${item.company}-${item.role}`} className="space-y-2">
            <div className="absolute -left-[9px] mt-1 h-4 w-4 rounded-full border border-accent bg-slate-950" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
              {item.duration}
            </p>
            <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
              {item.role} · <span className="text-slate-300">{item.company}</span>
            </h3>
            <ul className="mt-1 list-disc space-y-1 pl-4 text-sm text-slate-300">
              {item.achievements.map((achievement) => (
                <li key={achievement}>{achievement}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </SectionWrapper>
  );
}

