import { portfolioData } from "@/lib/data";

export const metadata = {
  title: "Projects | Portfolio",
  description: "Explore all projects and works.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-10">
      <header className="space-y-3 border-b border-zinc-200 dark:border-zinc-800 pb-6">
        <h1 className="text-3xl font-extrabold tracking-tight">Projects</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          A collection of projects, web applications, and backend services I have developed.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {portfolioData.projects.map((project) => (
          <div
            key={project.id}
            className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                {project.featured && (
                  <span className="text-xs px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400">
                    Featured
                  </span>
                )}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-sm pt-2">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium hover:text-zinc-600 dark:hover:text-zinc-400"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-medium hover:text-zinc-600 dark:hover:text-zinc-400"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
