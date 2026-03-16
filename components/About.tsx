import { SectionWrapper } from './SectionWrapper';

export function About() {
  return (
    <SectionWrapper
      id="about"
      title="About"
      subtitle="Backend developer with a focus on clean architecture, reliability, and developer experience."
    >
      <div className="grid gap-8 md:grid-cols-[2fr,1.5fr]">
        <div className="space-y-4 text-sm text-slate-300 sm:text-base">
          <p>
            I&apos;m a backend developer who enjoys designing APIs, working with data, and building
            systems that are both reliable and maintainable. I care about predictable performance,
            clear contracts, and making life easier for other developers who work with my code.
          </p>
          <p>
            My background spans building RESTful APIs, integrating with third-party services, and
            creating internal tools that automate repetitive workflows. I&apos;m comfortable
            working across the stack when needed, but my strength lies in backend engineering and
            infrastructure-aware development.
          </p>
          <p>
            I value clear communication, thoughtful trade-offs, and writing code that can be
            understood months later. Outside of work, I enjoy experimenting with new frameworks and
            contributing to small open-source projects.
          </p>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-950/60 p-5 text-sm text-slate-200">
          <div>
            <h3 className="text-sm font-semibold text-slate-100">Professional background</h3>
            <p className="mt-1 text-slate-400">
              Backend-focused, working with APIs, services, and databases in production
              environments.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100">Qualifications</h3>
            <p className="mt-1 text-slate-400">
              Masters in Computer Applications with hands-on experience building backend systems, APIs,
              and database-centric applications.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-100">My journey in tech</h3>
            <p className="mt-1 text-slate-400">
              I started by writing small scripts to automate everyday tasks, then moved into
              building full APIs and services. Over time, I became deeply interested in system
              design, performance, and how well-structured backends empower great user
              experiences. Started my journey with python and now working with Node.js and FastAPI.
              Also worked with databases like PostgreSQL, MySQL and MongoDB.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

