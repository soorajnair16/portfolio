import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../lib/api";

export default async function Home() {

  const projects = await getProjects();

  return (
    <main className="p-10">

      <Hero />

      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project:any) => (
            <ProjectCard key={project.id} project={project}/>
          ))}
        </div>
      </section>

    </main>
  );
}