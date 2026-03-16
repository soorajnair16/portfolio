import { Gamepad2, Headphones, Dumbbell, Cpu, Bike } from 'lucide-react';
import { SectionWrapper } from './SectionWrapper';

const interests = [
  {
    label: 'Gaming',
    Icon: Gamepad2,
    description: 'I enjoy strategy and story-driven games, at times competitive games.'
  },
  {
    label: 'Gym',
    Icon: Dumbbell,
    description: 'Staying active helps me stay focused and balanced.'
  },
  {
    label: 'Music',
    Icon: Headphones,
    description: 'From lo-fi to metal while coding and relaxing.'
  },
  {
    label: 'Bike riding',
    Icon: Bike,
    description: 'Riding clears my head and sparks new ideas.'
  },
  {
    label: 'Technology',
    Icon: Cpu,
    description: 'I like exploring tools, frameworks, and new developer workflows.'
  }
];

export function Interests() {
  return (
    <SectionWrapper
      id="interests"
      title="Interests"
      subtitle="Things I enjoy outside of building software."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {interests.map(({ label, Icon, description }) => (
          <div
            key={label}
            className="flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-950/70 p-4"
          >
            <div className="mt-0.5 rounded-full bg-slate-900/80 p-2 text-accent">
              <Icon className="h-4 w-4" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-100">{label}</h3>
              <p className="mt-1 text-xs text-slate-400 sm:text-sm">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

