import { projects } from "@/data/projects";
import Image from "next/image";

/**
 * ProjectsSection Component
 * Iterates through the imported `projects` data and renders a responsive grid
 * of project cards containing an image, tech stack pills, and links.
 */
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-12">
        Selected Works
      </h2>
      
      {/* Projects Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Project Thumbnail Image */}
            <Image 
              src={project.image} 
              alt={project.title} 
              width={600}
              height={600}
              className="w-full aspect-square object-cover rounded-xl mb-6"
            />
            
            {/* Project Title and Description */}
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-3 leading-relaxed">{project.description}</p>
            
            {/* Tech Stack Pills Wrapper */}
            <div className="flex flex-wrap gap-2 mt-5">
              {project.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* External Links (GitHub & Live Demo) or WIP Status */}
            <div className="flex gap-6 mt-6 pt-5 border-t border-slate-100 dark:border-slate-800">
              {project.workInProgress ? (
                <span className="text-sm font-bold text-amber-500 flex items-center gap-2">
                  Work in progress...
                </span>
              ) : (
                <>
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      GitHub →
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
                    >
                      Live Demo →
                    </a>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}