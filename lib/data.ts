export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export const portfolioData = {
  name: "Jitendra Prajapati",
  role: "Full Stack & Backend Developer",
  bio: "Passionate developer building performant web applications, robust backend architectures, and clean user interfaces.",
  location: "India",
  email: "contact@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
  },
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "REST APIs", "Authentication", "Microservices"],
    },
    {
      category: "Databases",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Prisma", "Redis"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "GitHub", "Docker", "Linux", "Postman"],
    },
  ] as SkillCategory[],
  projects: [
    {
      id: "portfolio-app",
      title: "Developer Portfolio",
      description: "A fast, modern personal portfolio website built with Next.js App Router and Tailwind CSS.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "api-service",
      title: "Backend Authentication Service",
      description: "Secure JWT-based authentication service with role-based access control, session caching, and rate limiting.",
      tags: ["Node.js", "Express", "PostgreSQL", "Redis"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "task-manager",
      title: "Task Management System",
      description: "Collaborative project management dashboard supporting real-time task updates and status boards.",
      tags: ["React", "TypeScript", "MongoDB", "Tailwind CSS"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: true,
    },
    {
      id: "e-commerce-api",
      title: "E-Commerce REST API",
      description: "Scalable product catalogue, order processing, and payment gateway integration.",
      tags: ["Node.js", "TypeScript", "PostgreSQL", "Stripe"],
      demoUrl: "#",
      githubUrl: "https://github.com",
      featured: false,
    },
  ] as Project[],
};
