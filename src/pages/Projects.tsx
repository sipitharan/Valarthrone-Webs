import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import { projectsData, ProjectCategory } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProjectPreviewVisual } from '@/assets/artwork/FantasyArtwork';

type FilterType = 'All' | ProjectCategory;

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const filterOptions: FilterType[] = ['All', 'Business', 'E-commerce', 'Web Application'];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kingdom-900/90 border border-gold/30 text-gold-300 text-xs font-mono tracking-widest uppercase mb-4"
        >
          <span>PROVEN CRAFTSMANSHIP</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white tracking-tight uppercase leading-tight mb-6"
        >
          WORK WORTH <br />
          <span className="bg-gradient-to-r from-gold-300 via-amber-400 to-gold-600 bg-clip-text text-transparent text-glow-gold">
            SHOWING.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-steel-300 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Explore production websites and specialized applications crafted with meticulous design standards, speed, and real-world resilience.
        </motion.p>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {filterOptions.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`relative px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium tracking-wide uppercase transition-all duration-200 select-none ${
                  isActive
                    ? 'text-kingdom-950 font-bold bg-gold shadow-royal-glow'
                    : 'text-steel-400 hover:text-white bg-kingdom-900/70 hover:bg-kingdom-800 border border-steel-800 hover:border-steel-600'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </section>

      {/* Project Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group flex flex-col rounded-2xl bg-kingdom-900/80 border border-steel-800 hover:border-gold/50 hover:shadow-royal-glow hover:-translate-y-2 transition-all duration-300 overflow-hidden shadow-xl"
              >
                {/* Project Visual Container with slight zoom on hover */}
                <div className="h-60 w-full p-3 bg-kingdom-950/70 border-b border-steel-850 overflow-hidden relative">
                  <div className="w-full h-full transform group-hover:scale-[1.03] transition-transform duration-500 ease-out">
                    <ProjectPreviewVisual
                      projectId={project.id}
                      title={project.title}
                    />
                  </div>
                  {/* Subtle dark overlay with vignette */}
                  <div className="absolute inset-0 bg-kingdom-950/10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Project Information */}
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4 bg-gradient-to-b from-transparent to-kingdom-950/60">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="gold" size="sm">{project.category}</Badge>
                      <span className="text-[11px] font-mono text-steel-500">{project.timeline}</span>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs text-steel-400 font-mono">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-steel-300 leading-relaxed font-light line-clamp-3">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="steel" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-steel-800/80 flex flex-wrap items-center gap-2 justify-between">
                    <Button
                      to={`/projects/${project.id}`}
                      variant="primary"
                      size="sm"
                      icon={<ArrowRight className="w-3.5 h-3.5" />}
                    >
                      View Details
                    </Button>

                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-md bg-kingdom-850 border border-steel-700 text-steel-300 hover:text-white hover:border-gold transition-colors"
                          title="View GitHub Repository"
                          aria-label={`View GitHub Repository for ${project.title}`}
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
};

