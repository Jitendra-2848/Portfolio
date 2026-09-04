import Link from "next/link";
import { portfolioData } from "@/lib/data";

export default function Home() {
  const featuredProjects = portfolioData.projects.filter((p) => p.featured);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="space-y-6 py-8">
        <p className="text-sm font-semibold tracking-wider text-zinc-500 uppercase">
          Welcome to my portfolio
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Hi, I&apos;m {portfolioData.name}
        </h1>
        <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          {portfolioData.role}. {portfolioData.bio}
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/project"
            className="px-5 py-2.5 rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity text-sm"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-md border border-zinc-300 dark:border-zinc-700 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <h2 className="text-2xl font-bold">Featured Projects</h2>
          <Link
            href="/project"
            className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project) => (
            <div
              key={project.id}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 space-y-4">
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
      </section>

      {/* Skills Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b border-zinc-200 dark:border-zinc-800 pb-3">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioData.skills.map((category) => (
            <div
              key={category.category}
              className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-5 space-y-3"
            >
              <h3 className="font-semibold text-base">{category.category}</h3>
              <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="border border-zinc-200 dark:border-zinc-800 rounded-lg p-8 text-center space-y-4 bg-zinc-50 dark:bg-zinc-900/50">
        <h2 className="text-2xl font-bold">Interested in collaborating?</h2>
        <p className="text-zinc-600 dark:text-zinc-400 max-w-md mx-auto text-sm">
          Feel free to reach out for project inquiries, freelance opportunities, or just to say hello.
        </p>
        <div className="pt-2">
          <Link
            href="/contact"
            className="inline-block px-5 py-2.5 rounded-md bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 font-medium hover:opacity-90 transition-opacity text-sm"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </div>
  );
}
