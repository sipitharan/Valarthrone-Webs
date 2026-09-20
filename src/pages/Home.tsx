import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Github,
  Building2,
  ShoppingCart,
  Sparkles,
  Flame,
  Layers,
  RefreshCw,
  Code2,
  Zap,
  Smartphone,
  Search,
  LifeBuoy,
  CheckCircle2,
  Terminal,
  Database,
  Cpu,
  Shield,
  ChevronDown,
  MessageSquare,
  Phone,
} from 'lucide-react';
import { siteConfig } from '@/data/config';
import { servicesData } from '@/data/services';
import { projectsData } from '@/data/projects';
import { skillsData } from '@/data/skills';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { RoyalDivider } from '@/components/ui/RoyalDivider';
import { CastleLandscape, ProjectPreviewVisual } from '@/assets/artwork/FantasyArtwork';

export const Home: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-gold transition-transform group-hover:scale-110 group-hover:rotate-3" />;
      case 'ShoppingCart': return <ShoppingCart className="w-6 h-6 text-gold transition-transform group-hover:scale-110 group-hover:rotate-3" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-gold transition-transform group-hover:scale-110 group-hover:rotate-3" />;
      case 'Flame': return <Flame className="w-6 h-6 text-crimson-500 transition-transform group-hover:scale-110 group-hover:rotate-3" />;
      case 'Layers': return <Layers className="w-6 h-6 text-gold transition-transform group-hover:scale-110 group-hover:rotate-3" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-crimson-500 transition-transform group-hover:scale-110 group-hover:rotate-3" />;
      default: return <Code2 className="w-6 h-6 text-gold" />;
    }
  };

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'html': return <Code2 className="w-5 h-5 text-amber-500" />;
      case 'css': return <Layers className="w-5 h-5 text-blue-400" />;
      case 'javascript': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'python': return <Terminal className="w-5 h-5 text-emerald-400" />;
      case 'flask': return <Flame className="w-5 h-5 text-crimson-500" />;
      case 'java': return <Cpu className="w-5 h-5 text-red-500" />;
      case 'sql': return <Database className="w-5 h-5 text-purple-400" />;
      case 'git': return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'github': return <Github className="w-5 h-5 text-steel-200" />;
      default: return <Code2 className="w-5 h-5 text-gold" />;
    }
  };

  const advantageFeatures = [
    {
      title: 'Modern UI/UX',
      description: 'Sophisticated dark aesthetics, intuitive information architecture, and micro-interactions that captivate visitors.',
      icon: <Sparkles className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Fully Responsive',
      description: 'Flawless presentation engineered across all screen viewports — smartphones, tablets, laptops, and ultra-wide monitors.',
      icon: <Smartphone className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Fast Loading',
      description: 'Laser-optimized assets, streamlined CSS/JS execution, and modern caching strategies for blistering performance.',
      icon: <Zap className="w-6 h-6 text-gold" />,
    },
    {
      title: 'SEO Friendly',
      description: 'Structured semantic markup, meta optimization, Open Graph integration, and fast Core Web Vitals to rank in search results.',
      icon: <Search className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Ongoing Support',
      description: 'Reliable communication, dedicated deployment assistance, and regular maintenance options so your site remains pristine.',
      icon: <LifeBuoy className="w-6 h-6 text-gold" />,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'DISCUSS',
      description: 'Understand your business goals, target audience, brand identity, and exact technical requirements.',
    },
    {
      number: '02',
      title: 'DESIGN',
      description: 'Plan the visual direction, design system, user journeys, and component wireframes.',
    },
    {
      number: '03',
      title: 'DEVELOP',
      description: 'Build the website with clean, modular, and performant modern code without bloated dependencies.',
    },
    {
      number: '04',
      title: 'DEPLOY',
      description: 'Execute cross-browser verification, configure SEO essentials, and launch your digital kingdom live to the world.',
    },
  ];

  return (
    <div className="relative overflow-x-hidden">
      {/* ============================================================ */}
      {/* 1. CINEMATIC FULL-SCREEN HERO */}
      {/* ============================================================ */}
      <section className="relative min-h-[95vh] lg:min-h-screen flex items-center justify-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Layer 1: Fantasy Landscape SVG with Parallax Depth */}
        <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none">
          <CastleLandscape className="opacity-80 scale-105 transform translate-y-2 transition-transform duration-1000" />
        </div>

        {/* Layer 2: Slow Ambient Lighting Movement (Crimson & Midnight Blue Orbs) */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-crimson-800/15 blur-[120px] pointer-events-none ambient-glow-crimson -z-20" />
        <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-kingdom-700/20 blur-[130px] pointer-events-none -z-20" />

        {/* Layer 3: Atmospheric Drifting Fog */}
        <div className="absolute inset-0 -z-15 overflow-hidden pointer-events-none opacity-40 ambient-fog">
          <div className="w-[120%] h-full bg-gradient-to-r from-transparent via-kingdom-900/40 to-transparent blur-3xl" />
        </div>

        {/* Layer 4: Cinematic Vignette & Readability Gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-kingdom-950 via-kingdom-950/75 to-kingdom-950/45 pointer-events-none" />
        <div className="absolute inset-0 -z-10 cinematic-vignette pointer-events-none" />

        {/* Hero Content */}
        <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(239,68,68,0.22),_transparent_35%),radial-gradient(circle,_rgba(59,130,246,0.18),_transparent_45%)] blur-3xl scale-110" />
            <img
              src="/assets/valarthrone-logo.png"
              alt="VALARTHRONE WEBS"
              className="relative mx-auto w-[200px] h-[200px] object-contain drop-shadow-[0_0_40px_rgba(212,175,55,0.7)]"
            />
          </motion.div>

          {/* Small Eyebrow Label with Royal Heraldic Accents */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-kingdom-900/90 border border-gold/40 shadow-royal-glow mb-6 backdrop-blur-md"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-crimson-500 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.9)]" />
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-gold-300 font-semibold">
              {siteConfig.heroSmallLabel}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          </motion.div>

          {/* Main Cinematic Heading with Staggered Word Reveal */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight text-white uppercase leading-[1.08] mb-6 drop-shadow-2xl"
          >
            BUILD YOUR <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-gold-300 via-amber-300 to-gold-500 bg-clip-text text-transparent text-glow-gold">
              DIGITAL KINGDOM.
            </span>
          </motion.h1>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="text-base sm:text-lg md:text-xl text-steel-300 max-w-2xl mx-auto mb-10 font-normal leading-relaxed text-balance"
          >
            {siteConfig.subtitle}
          </motion.p>

          {/* CTAs with Royal Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <Button
              to="/projects"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[190px] shadow-royal-glow hover:shadow-[0_0_35px_rgba(212,175,55,0.7)]"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              View My Work
            </Button>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto min-w-[190px] border-steel-700/80 hover:border-gold/60"
            >
              Start a Project
            </Button>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 pointer-events-none z-20"
        >
          <span className="text-[9px] font-mono tracking-[0.25em] text-steel-400 uppercase">
            SCROLL TO DISCOVER
          </span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-4 h-4 text-gold/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================================ */}
      {/* UNDER HERO PILLARS RIBBON */}
      {/* ============================================================ */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 rounded-xl bg-kingdom-900/90 border border-gold/30 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl">
          {siteConfig.keyPillars.map((pillar, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-kingdom-950/70 border border-steel-800/70 text-center group hover:border-gold/40 transition-colors"
            >
              <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 group-hover:scale-110 transition-transform" />
              <span className="text-xs sm:text-sm font-mono tracking-wider font-bold text-steel-200">
                {pillar}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. SERVICES SECTION */}
      {/* ============================================================ */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="SERVICES & SOLUTIONS"
          title="WHAT I BUILD"
          description="From simple business websites to custom web applications, I turn ideas into powerful digital experiences."
        />

        {/* 6 Featured Service Cards with Crimson Border Glow on Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.filter(s => s.isFeaturedOnHome).map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative p-7 rounded-xl bg-gradient-to-b from-kingdom-900/90 to-kingdom-950 border border-steel-800/80 hover:border-crimson-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.22)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Subtle metallic seal in corner */}
              <div className="absolute top-3 right-3 text-steel-800 group-hover:text-gold/30 transition-colors pointer-events-none">
                <Shield className="w-4 h-4" />
              </div>

              <div>
                <div className="w-12 h-12 rounded-lg bg-kingdom-800/90 border border-steel-700/60 flex items-center justify-center mb-5 group-hover:border-gold/50 group-hover:bg-kingdom-800 transition-all shadow-md">
                  {getServiceIcon(service.iconName)}
                </div>

                <h3 className="text-xl font-serif font-bold text-white mb-3 group-hover:text-gold-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-steel-400 leading-relaxed mb-6 font-light">
                  {service.shortDescription}
                </p>
              </div>

              <div className="pt-4 border-t border-steel-800/60 flex items-center justify-between">
                <span className="text-xs font-mono text-gold-400 uppercase tracking-wider font-medium">
                  Custom Crafted
                </span>
                <Link
                  to="/services"
                  className="text-xs text-steel-300 group-hover:text-white flex items-center gap-1 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 text-gold" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            to="/services"
            variant="outline-gold"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Explore Services
          </Button>
        </div>
      </section>

      <RoyalDivider />

      {/* ============================================================ */}
      {/* 3. FEATURED PROJECTS SECTION */}
      {/* ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="PORTFOLIO HIGHLIGHTS"
          title="REAL PROJECTS. REAL RESULTS."
          description="A selection of production-tested web applications and commerce platforms engineered for performance and real utility."
        />

        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-kingdom-900/70 to-kingdom-950 border border-steel-800/80 hover:border-gold/50 transition-all duration-300 shadow-xl hover:shadow-royal-glow"
            >
              {/* Visual Preview / Mockup Column with Zoom Effect */}
              <div className={`lg:col-span-6 h-72 sm:h-80 w-full overflow-hidden rounded-xl ${
                index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
              }`}>
                <div className="w-full h-full transform group-hover:scale-[1.025] transition-transform duration-500 ease-out">
                  <ProjectPreviewVisual
                    projectId={project.id}
                    title={project.title}
                  />
                </div>
              </div>

              {/* Text & Content Column */}
              <div className={`lg:col-span-6 flex flex-col justify-center space-y-4 ${
                index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
              }`}>
                <div className="flex items-center gap-2">
                  <Badge variant="gold">{project.category}</Badge>
                  <span className="text-xs font-mono text-steel-500">• {project.timeline}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide group-hover:text-gold-200 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm sm:text-base text-steel-300 leading-relaxed font-light">
                  {project.shortDescription}
                </p>

                {/* Technology Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech) => (
                    <Badge key={tech} variant="steel" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-4">
                  <Button
                    to={`/projects/${project.id}`}
                    variant="primary"
                    size="sm"
                    icon={<ArrowRight className="w-3.5 h-3.5" />}
                  >
                    View Details
                  </Button>
                  
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      variant="ghost"
                      size="sm"
                      icon={<Github className="w-3.5 h-3.5" />}
                    >
                      GitHub
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button to="/projects" variant="outline-gold" size="md">
            View All Projects
          </Button>
        </div>
      </section>

      <RoyalDivider />

      {/* ============================================================ */}
      {/* 4. TECHNOLOGIES / SKILLS SECTION */}
      {/* ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="TECHNICAL FOUNDATIONS"
          title="TECHNOLOGIES I WORK WITH"
          description="Proven languages, frameworks, and engineering tools utilized to forge secure, fast, and scalable digital solutions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: 'rgba(212, 175, 55, 0.6)' }}
              className="group p-5 rounded-xl bg-kingdom-900/70 border border-steel-800/80 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2.5 rounded-lg bg-kingdom-950 border border-steel-700/60 group-hover:scale-110 group-hover:border-gold/50 transition-all">
                    {getSkillIcon(skill.id)}
                  </div>
                  <Badge variant="gold" size="sm">
                    {skill.category}
                  </Badge>
                </div>

                <h4 className="text-lg font-serif font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">
                  {skill.name}
                </h4>

                <p className="text-xs text-steel-400 leading-relaxed font-light">
                  {skill.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-steel-800/50 flex items-center justify-between text-[11px] font-mono text-steel-400">
                <span>Domain Focus:</span>
                <span className="text-gold font-semibold">{skill.badge}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <RoyalDivider />

      {/* ============================================================ */}
      {/* 5. WHY CHOOSE ME SECTION */}
      {/* ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="CORE STANDARDS"
          title="THE VALARTHRONE ADVANTAGE"
          description="Built on engineering precision, royal craftsmanship, and relentless attention to client success."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {advantageFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-6 rounded-xl bg-gradient-to-b from-kingdom-900/80 to-kingdom-950 border border-steel-800 hover:border-gold/40 hover:-translate-y-1 transition-all text-center flex flex-col items-center group"
            >
              <div className="w-12 h-12 rounded-full bg-kingdom-800/80 border border-gold/30 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-gold transition-all">
                {item.icon}
              </div>

              <h4 className="text-base font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                {item.title}
              </h4>

              <p className="text-xs text-steel-400 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <RoyalDivider />

      {/* ============================================================ */}
      {/* 6. HOW IT WORKS (PROCESS TIMELINE WITH CONNECTING LINE) */}
      {/* ============================================================ */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="METHODOLOGY"
          title="HOW IT WORKS"
          description="A transparent, disciplined four-step timeline that carries your digital project from inception to launch."
        />

        <div className="relative">
          {/* Subtle Desktop Connecting Timeline Line */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent -translate-y-8 pointer-events-none -z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.12 }}
                className="group relative p-6 rounded-xl bg-kingdom-900/80 border border-steel-800/80 hover:border-gold/50 hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl sm:text-3xl font-mono font-extrabold text-gold/90 group-hover:text-gold transition-colors">
                      {step.number}
                    </span>
                    <span className="w-8 h-px bg-gold/40 group-hover:w-12 transition-all" />
                  </div>

                  <h4 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-steel-400 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-steel-800/60 flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gold-400 font-semibold">
                    Phase {step.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. HOME FINAL CTA (CINEMATIC FANTASY ENVIRONMENT) */}
      {/* ============================================================ */}
      <section className="py-24 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-gradient-to-r from-kingdom-900 via-crimson-950/40 to-kingdom-900 border border-gold/40 p-8 sm:p-14 text-center overflow-hidden shadow-2xl"
        >
          {/* Layered Background Fantasy Artwork */}
          <div className="absolute inset-0 opacity-25 pointer-events-none -z-10 overflow-hidden">
            <CastleLandscape className="scale-125 translate-y-10" />
          </div>

          {/* Atmospheric ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/15 blur-3xl pointer-events-none -z-10" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-crimson-700/20 blur-2xl pointer-events-none -z-10" />

          <img
            src="/assets/valarthrone-logo.png"
            alt="VALARTHRONE WEBS"
            className="mx-auto mb-6 w-[52px] h-[52px] object-contain drop-shadow-royal-glow animate-float-slow"
          />

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-extrabold text-white tracking-wide mb-4">
            YOUR BUSINESS. OUR CRAFT.
          </h2>

          <p className="text-base sm:text-lg text-steel-300 max-w-xl mx-auto mb-8 font-light leading-relaxed">
            Have a project in mind? Let's turn your idea into a powerful digital experience.
          </p>

          <Button
            to="/contact"
            variant="primary"
            size="lg"
            className="shadow-royal-glow hover:shadow-[0_0_35px_rgba(212,175,55,0.7)]"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Start a Project
          </Button>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a
              href={`tel:+91${siteConfig.phone}`}
              className="inline-flex items-center gap-2 text-steel-300 hover:text-gold transition-colors"
              aria-label={`Call VALARTHRONE WEBS at ${siteConfig.phone}`}
            >
              <Phone className="w-4 h-4 text-gold" />
              {siteConfig.phone}
            </a>
            <a
              href={siteConfig.socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-steel-300 hover:text-gold transition-colors"
              aria-label={`Chat with VALARTHRONE WEBS on WhatsApp at ${siteConfig.phone}`}
            >
              <MessageSquare className="w-4 h-4 text-gold" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
