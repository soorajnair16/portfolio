export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="text-6xl font-bold">
        Leo — Backend Engineer
      </h1>

      <p className="text-gray-400 mt-6 max-w-xl">
        I build scalable backend systems, APIs, and AI-powered applications.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-white text-black rounded-lg"
        >
          View Projects
        </a>

        <a
          href="/contact"
          className="px-6 py-3 border rounded-lg"
        >
          Contact
        </a>
      </div>
    </section>
  );
}