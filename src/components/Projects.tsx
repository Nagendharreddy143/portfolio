import React, { useState } from 'react';
import { SectionId, Project } from '../types';
import { ArrowUpRight, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects: Project[] = [
  {
    id: 1,
    title: "AI Blogger",
    category: "Full-Stack • AI",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&h=600&fit=crop",
    description: "AI-powered blogging platform for UPSC students. Full-stack application with Spring Boot backend and React frontend, featuring AI-generated content and blog management.",
    github: "https://github.com/Nagendharreddy143/AIBolgger",
    technologies: ["Spring Boot", "React", "Vite", "Java", "AI Integration", "REST API"]
  },
  {
    id: 2,
    title: "AI Email Automation Workflow",
    category: "AI Automation • n8n",
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=600&fit=crop",
    description: "Built automated email newsletter system using n8n for Xploar.ai, streamlining content delivery to thousands of UPSC aspirants. Custom HTML email templates with AI-powered workflow automation.",
    github: "https://www.linkedin.com/posts/nagender-reddy1406_automation-ai-n8n-activity-7371901688573513728-D79U",
    technologies: ["n8n", "AI Automation", "HTML", "Email Marketing", "Workflow Design", "No-Code"]
  },
  {
    id: 3,
    title: "BroadCast - WebSocket Chat",
    category: "Java • WebSocket",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
    description: "Real-time command-line chat application using WebSocket protocol with Java. Features broadcast messaging to all connected clients with unique usernames.",
    github: "https://github.com/Nagendharreddy143/broad-cast",
    technologies: ["Java", "WebSocket", "Maven", "Apache Commons CLI"]
  },
  {
    id: 4,
    title: "Aspirant Frontend (Expo)",
    category: "React Native • Expo",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    description: "Mobile application frontend for UPSC aspirants built with React Native and Expo. Features cross-platform compatibility and modern mobile UX.",
    github: "https://github.com/Nagendharreddy143/frontend-aspirant",
    technologies: ["React Native", "Expo", "TypeScript", "Mobile Development"]
  },
  {
    id: 5,
    title: "Zudio E-Commerce Clone",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
    description: "E-commerce website clone featuring product listings, shopping cart, and responsive design. Built with HTML, CSS, and JavaScript.",
    github: "https://github.com/Nagendharreddy143/Zudio",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(1);

  return (
    <section id={SectionId.PROJECTS} className="bg-[#E6E6E6] text-black py-10 md:py-12 px-6 md:px-12 scroll-mt-28">
      <div className="max-w-[1800px] mx-auto">

        <div className="flex justify-between items-end mb-8 border-b border-black/10 pb-4">
          <span className="text-[#FF3B3B] text-sm font-bold tracking-widest uppercase block">
            Projects
          </span>
          <span className="text-sm font-medium text-gray-500 hidden md:block">
            2021 — 2024
          </span>
        </div>

        {/* Mobile: Vertical Stack - Desktop: Horizontal Gallery */}

        {/* Desktop Only: Horizontal Hover-Expand Gallery */}
        <div className="hidden md:flex gap-2 h-[450px] w-full">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative cursor-pointer overflow-hidden rounded-xl"
              initial={{ width: "6rem" }}
              animate={{
                width: activeProject === index ? "100%" : "6rem",
              }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              onHoverStart={() => setActiveProject(index)}
              onClick={() => setActiveProject(index)}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <AnimatePresence>
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                  />
                )}
              </AnimatePresence>

              {/* Project Details - Show when expanded */}
              <AnimatePresence>
                {activeProject === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[#FF3B3B] text-xs font-bold tracking-widest uppercase">
                        {project.category}
                      </span>
                      <span className="text-white/50 text-xs">
                        #{String(project.id).padStart(2, '0')}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold mb-3">
                      {project.title}
                    </h3>

                    {/* Description */}
                    {project.description && (
                      <p className="text-white/80 text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                    )}

                    {/* Technologies */}
                    {project.technologies && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Project Link */}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full hover:bg-[#FF3B3B] hover:text-white transition-colors duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        <span className="text-sm font-bold">
                          {project.github.includes('github.com')
                            ? 'View on GitHub'
                            : project.github.includes('linkedin.com')
                              ? 'View on LinkedIn'
                              : 'View Project'}
                        </span>
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Collapsed State - Vertical Text */}
              <AnimatePresence>
                {activeProject !== index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="absolute inset-0 bg-black/40" />
                    <span className="relative text-white font-bold text-sm tracking-wider transform -rotate-90 whitespace-nowrap">
                      {project.title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Mobile Only: Vertical Stack */}
        <div className="flex md:hidden flex-col gap-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="relative overflow-hidden rounded-xl h-[300px] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Background Image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Project Details */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#FF3B3B] text-xs font-bold tracking-widest uppercase">
                    {project.category}
                  </span>
                  <span className="text-white/50 text-xs">
                    #{String(project.id).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {project.title}
                </h3>

                {/* Description */}
                {project.description && (
                  <p className="text-white/80 text-xs mb-3 line-clamp-2">
                    {project.description}
                  </p>
                )}

                {/* Technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-white/10 backdrop-blur-sm text-white text-[10px] rounded-full border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-white/60 text-[10px]">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                )}

                {/* Project Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full hover:bg-[#FF3B3B] hover:text-white transition-colors duration-300 text-xs font-bold"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={14} />
                    {project.github.includes('github.com')
                      ? 'GitHub'
                      : project.github.includes('linkedin.com')
                        ? 'LinkedIn'
                        : 'View'}
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-black/10 pt-8">
          <div>
            <p className="text-sm text-gray-600 mb-1">Interested in working together?</p>
            <h3 className="text-xl md:text-2xl font-bold">Let's discuss your project</h3>
          </div>
          <a
            href="https://wa.me/919014780547?text=Hi%20DEVELOPER,%20I'm%20interested%20in%20discussing%20a%20project%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-[#FF3B3B] transition-colors duration-300 group"
          >
            <span className="text-sm font-bold">Get in Touch</span>
            <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;