import { SectionWrapper } from './SectionWrapper';

export function Education() {
  return (
    <SectionWrapper
      id="education"
      title="Qualifications & Education"
      subtitle="Formal education and certifications that shaped my technical foundation."
    >
      <div className="space-y-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
            Bachelor of Computer Applications (BCA)
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            Hindustan Institute of Technology and Science
          </p>
          <p className="text-xs text-slate-400">2019 – 2022</p>
          <p className="mt-2 text-sm text-slate-300">
            Built a strong foundation in programming, databases, and core computer science concepts,
            completing academic projects and lab work that introduced me to software development.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
            Master of Computer Applications (MCA)
          </h3>
          <p className="mt-1 text-sm text-slate-300">
            Hindustan Institute of Technology and Science
          </p>
          <p className="text-xs text-slate-400">2022 – 2024</p>
          <p className="mt-2 text-sm text-slate-300">
            Focused on advanced software engineering, backend development, and data-related
            subjects, working on projects that connected theory with real-world applications.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-5">
          <h3 className="text-sm font-semibold text-slate-100">Certifications</h3>
          <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-300">
            <li>HackerRank Python Gold Badge — HackerRank (Mar 2025)</li>
            <li>
              Career Essentials in Business Analysis by Microsoft and LinkedIn — Microsoft (Apr
              2024)
            </li>
            <li>Cyber Security and Privacy — NPTEL (Oct 2023)</li>
            <li>Cloud Computing — NPTEL (Apr 2023)</li>
            <li>Crash Course on Python — Coursera (Apr 2021)</li>
            <li>AWS Machine Learning — Coursera (Jul 2020)</li>
            <li>
              End-to-End Machine Learning with TensorFlow on Google Cloud — Coursera (Jul 2020)
            </li>
            <li>Introduction to Artificial Intelligence — Coursera (Jul 2020)</li>
            <li>Machine Learning for All — Coursera (Jul 2020)</li>
            <li>Digital Garage by Google — Google (Jun 2020)</li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

