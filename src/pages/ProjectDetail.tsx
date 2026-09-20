import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Github,
  CheckCircle2,
  Calendar,
  UserCheck,
  Tag,
  Flame,
  Layers,
  ArrowRight,
} from 'lucide-react';
import { projectsData } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RoyalDivider } from '@/components/ui/RoyalDivider';
import { ProjectPreviewVisual } from '@/assets/artwork/FantasyArtwork';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const project = projectsData.find((p) => p.id === id || p.slug === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="pt-28 sm:pt-36 pb-24">
      {/* Top Back Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-steel-400 hover:text-gold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects Gallery
        </Link>
      </div>

      {/* Project Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="gold">{project.category}</Badge>
              <Badge variant="steel">{project.clientType}</Badge>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-extrabold text-white tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-gold-300 font-serif italic">
              {project.subtitle}
            </p>

            <p className="text-base sm:text-lg text-steel-300 leading-relaxed font-light max-w-2xl">
              {project.fullOverview}
            </p>

            {/* Project Meta Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-steel-800">
              <div className="space-y-1">
                <span className="text-[11px] font-mono text-steel-400 flex items-center gap-1.5 uppercase">
                  <UserCheck className="w-3.5 h-3.5 text-gold" /> Role
                </span>
                <p className="text-xs sm:text-sm text-steel-200 font-medium">{project.role}</p>
              </div>

              <div className="space-y-1">
                <span className="text-[11px] font-mono text-steel-400 flex items-center gap-1.5 uppercase">
                  <Calendar className="w-3.5 h-3.5 text-gold" /> Timeline
                </span>
                <p className="text-xs sm:text-sm text-steel-200 font-medium">{project.timeline}</p>
              </div>

              <div className="space-y-1 col-span-2 sm:col-span-1">
                <span className="text-[11px] font-mono text-steel-400 flex items-center gap-1.5 uppercase">
                  <Tag className="w-3.5 h-3.5 text-gold" /> Category
                </span>
                <p className="text-xs sm:text-sm text-steel-200 font-medium">{project.category}</p>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.githubUrl && (
                <Button
                  href={project.githubUrl}
                  variant="secondary"
                  size="md"
                  icon={<Github className="w-4 h-4" />}
                >
                  GitHub Repository
                </Button>
              )}
            </div>
          </div>

          {/* Hero Visual Mockup */}
          <div className="lg:col-span-5 h-80 sm:h-96 w-full">
            <ProjectPreviewVisual projectId={project.id} title={project.title} />
          </div>
        </div>
      </motion.section>

      {/* Metrics Row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {project.metrics.map((metric, i) => (
            <div key={i} className="p-5 rounded-xl bg-kingdom-900/80 border border-steel-800 text-center">
              <span className="text-xs font-mono uppercase text-steel-400 block mb-1">{metric.label}</span>
              <span className="text-lg sm:text-xl font-serif font-bold text-gold">{metric.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Problem & Solution Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Problem Card */}
          <div className="p-8 rounded-2xl bg-kingdom-900/60 border border-crimson-900/40 space-y-4">
            <div className="inline-flex items-center gap-2 text-crimson-400 text-xs font-mono tracking-widest uppercase">
              <Flame className="w-4 h-4" />
              <span>THE ARCHITECTURAL CHALLENGE</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-white">
              The Problem
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed font-light">
              {project.challenge}
            </p>
          </div>

          {/* Solution Card */}
          <div className="p-8 rounded-2xl bg-kingdom-900/60 border border-gold/30 space-y-4">
            <div className="inline-flex items-center gap-2 text-gold-400 text-xs font-mono tracking-widest uppercase">
              <Layers className="w-4 h-4" />
              <span>THE ENGINEERED RESOLUTION</span>
            </div>
            <h2 className="text-2xl font-serif font-bold text-white">
              The Solution
            </h2>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed font-light">
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 sm:p-10 rounded-2xl bg-kingdom-900/80 border border-steel-800 space-y-6">
          <div className="flex flex-col space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
              CAPABILITIES & HIGHLIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Key Features & Architectural Details
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {project.features.map((feat, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-kingdom-950/70 border border-steel-850">
                <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-steel-300 font-light">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="p-8 rounded-2xl bg-kingdom-900/70 border border-steel-800 space-y-4">
          <h2 className="text-xl font-serif font-bold text-white">
            Technologies Utilized
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="gold" size="md">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
            EXECUTION TIMELINE
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
            How It Was Built
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {project.processSteps.map((step) => (
            <div key={step.step} className="p-6 rounded-xl bg-kingdom-900/60 border border-steel-800 flex flex-col justify-between">
              <div>
                <span className="text-2xl font-mono font-bold text-gold/80 block mb-3">
                  {step.step}
                </span>
                <h3 className="text-base font-serif font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-steel-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RoyalDivider />

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl font-serif font-bold text-white mb-3">
          Interested in a Similar Solution?
        </h2>
        <p className="text-steel-400 mb-6 font-light">
          Whether you need a high-converting e-commerce hub or a mission-critical web application, let's architect your vision.
        </p>
        <Button to="/contact" variant="primary" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
          Start Your Project
        </Button>
      </section>
    </div>
  );
};

