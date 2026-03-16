import { SectionWrapper } from './SectionWrapper';

type SkillCategory = {
  title: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    skills: ['Python', 'FastAPI', 'Node.js']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'MySQL']
  },
  {
    title: 'Tools',
    skills: ['Docker', 'Git', 'Linux']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS']
  },
  {
    title: 'Data & AI',
    skills: ['SQL', 'Pandas', 'Basic ML']
  }
];

export function Skills() {
  return (
    <SectionWrapper
      id="skills"
      title="Skills"
      subtitle="Technologies and tools I use regularly."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="gradient-border rounded-2xl bg-slate-950/60 p-[1px]"
          >
            <div className="h-full rounded-[1rem] bg-slate-950/90 p-4">
              <h3 className="text-sm font-semibold text-slate-100">{category.title}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

