export default function ProjectCard({ project }: any) {
  return (
    <div className="border rounded-xl p-6 hover:scale-105 transition">
      <h3 className="text-xl font-semibold">
        {project.title}
      </h3>

      <p className="text-gray-400 mt-2">
        {project.description}
      </p>

      <p className="text-sm mt-3">
        {project.tech_stack}
      </p>
    </div>
  );
}