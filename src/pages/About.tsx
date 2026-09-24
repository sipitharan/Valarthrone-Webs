import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Compass, Cpu, Zap } from 'lucide-react';
import { skillsData } from '@/data/skills';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RoyalDivider } from '@/components/ui/RoyalDivider';
import SEO from '@/components/SEO';
export const About: React.FC = () => {
  const philosophies = [
    {
      title: 'Craftsmanship Over Shortcuts',
      description: 'Every line of code is deliberately structured. We avoid bloated generic templates and fragile plugins in favor of clean, performant, and maintainable software architecture.',
      icon: <Cpu className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Performance as a Feature',
      description: 'A slow website is an abandoned website. We optimize network requests, assets, and render cycles so visitors experience instantaneous, frictionless interactions.',
      icon: <Zap className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Direct, Transparent Partnership',
      description: 'No convoluted agency bureaucracy or middle managers. You collaborate directly with the architect building your platform, ensuring seamless clarity from start to finish.',
      icon: <Compass className="w-6 h-6 text-gold" />,
    },
    {
      title: 'Built to Endure',
      description: 'We construct web properties that scale gracefully as your business grows, upholding modern web security standards and responsive resilience across every device.',
      icon: <ShieldCheck className="w-6 h-6 text-gold" />,
    },
  ];

  const workflowSteps = [
    {
      phase: 'Discovery & Blueprinting',
      description: 'Deep dive into your business model, customer journeys, brand positioning, and technical goals to outline a precise project scope.',
    },
    {
      phase: 'Design System & UX Prototyping',
      description: 'Architecting visual identity, component tokens, responsive layouts, typography scales, and accessible color contrasts.',
    },
    {
      phase: 'Precision Development',
      description: 'Translating designs into responsive, modern code using React, TypeScript, Python/Flask, and SQL databases with disciplined Git version control.',
    },
    {
      phase: 'Rigorous Verification & Deployment',
      description: 'Testing across mobile, tablet, and desktop viewports, validating accessibility standards, optimizing SEO metadata, and launching onto reliable hosting.',
    },
  ];

  return (
    <>
      <SEO
        title="About Valarthrone Webs | Web Development"
        description="Learn about Valarthrone Webs and our approach to building modern websites for businesses and creators."
        canonicalUrl="https://valarthronewebs.vercel.app/about"
      />
      <div className="pt-28 sm:pt-36 pb-24">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kingdom-900/90 border border-gold/30 text-gold-300 text-xs font-mono tracking-widest uppercase mb-4"
        >
          <span>THE MASTER CRAFTSMAN</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white tracking-tight uppercase leading-tight mb-6"
        >
          THE CRAFT BEHIND <br />
          <span className="bg-gradient-to-r from-gold-300 via-amber-400 to-gold-600 bg-clip-text text-transparent text-glow-gold">
            THE KINGDOM.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-steel-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          VALARTHRONE WEBS is a web-development brand focused on creating modern, responsive and professional digital experiences for businesses and individuals.
        </motion.p>
      </section>

      {/* 1. Who I Am Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-kingdom-900/80 to-kingdom-950 border border-steel-800 shadow-xl">
          <div className="lg:col-span-4 flex flex-col items-center text-center p-6 rounded-xl bg-kingdom-950/80 border border-gold/20">
            <img
              src="/assets/valarthrone-logo.png"
              alt="VALARTHRONE WEBS"
              className="w-16 h-16 object-contain mb-4 drop-shadow-royal-glow"
            />
            <h2 className="font-serif font-bold text-xl text-white">VALARTHRONE WEBS</h2>
            <span className="text-xs font-mono text-gold-400 uppercase tracking-widest mt-1">Lead Developer & Architect</span>
            <div className="w-16 h-px bg-gold/40 my-4" />
            <p className="text-xs text-steel-400 leading-relaxed">
              Committed to forging web applications and websites with architectural rigor, pristine UI, and unwavering reliability.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
              ABOUT THE FOUNDER
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Dedicated Web Engineering for Purpose-Driven Businesses
            </h3>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed font-light">
              In a digital world saturated with bloated cookie-cutter templates and slow drag-and-drop website builders, VALARTHRONE WEBS stands for true software craftsmanship. Every project is approached with architectural clarity: clean markup, modern styles, responsive touch targets, and robust backend endpoints.
            </p>
            <p className="text-sm sm:text-base text-steel-300 leading-relaxed font-light">
              Whether you are an established local retailer aiming to expand online, an entrepreneur launching an ambitious web platform, or a service provider who needs a commanding digital presence, our mission is to build digital infrastructure that commands authority and earns client trust.
            </p>
          </div>
        </div>
      </section>

      {/* 2. What I Build Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
            EXPERTISE
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
            What I Build
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'High-Converting Business Websites', desc: 'Corporate websites crafted to showcase capabilities, establish market credibility, and attract high-value inquiries.' },
            { title: 'Streamlined E-Commerce Storefronts', desc: 'Frictionless purchasing pathways, categorized catalogs, and intuitive checkout experiences for retail merchants.' },
            { title: 'Dynamic Web Applications', desc: 'Custom portals, dispatch workflows, data dashboards, and internal software powered by structured APIs and SQL databases.' },
            { title: 'Performance Landing Pages', desc: 'Targeted single-page campaigns engineered with high-impact visuals and optimized conversion psychology.' },
            { title: 'Full Website Redesigns', desc: 'Overhauling legacy websites with modern typography, dark royal aesthetics, and enhanced mobile speed.' },
            { title: 'Ongoing Code Maintenance', desc: 'Continuous support, security checks, and code maintenance ensuring your website remains healthy and secure.' },
          ].map((item, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-kingdom-900/60 border border-steel-800 space-y-3">
              <div className="w-2 h-2 rounded-full bg-gold" />
              <h3 className="text-base font-serif font-bold text-white">{item.title}</h3>
              <p className="text-xs sm:text-sm text-steel-400 font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <RoyalDivider />

      {/* 3. My Skills Visualization */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
            FOUNDATIONAL COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
            Technical Stack & Tools
          </h2>
          <p className="text-sm text-steel-400 max-w-xl mx-auto mt-2 font-light">
            Selected languages and frameworks mastered through hands-on project delivery and disciplined engineering practice.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="p-6 rounded-xl bg-kingdom-900/70 border border-steel-800 hover:border-gold/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="gold" size="sm">{skill.category}</Badge>
                  <span className="text-xs font-mono text-steel-400">{skill.badge}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-white mb-2">{skill.name}</h3>
                <p className="text-xs text-steel-400 font-light leading-relaxed">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <RoyalDivider />

      {/* 4. My Philosophy */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
            OUR CREED
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
            Core Philosophy
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophies.map((phil, i) => (
            <div key={i} className="p-8 rounded-xl bg-kingdom-900/80 border border-steel-800 flex gap-5 items-start">
              <div className="p-3 rounded-lg bg-kingdom-950 border border-gold/30 flex-shrink-0">
                {phil.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-serif font-bold text-white">{phil.title}</h3>
                <p className="text-sm text-steel-300 font-light leading-relaxed">{phil.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. My Workflow */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <span className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
            THE SYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-1">
            Engineering Workflow
          </h2>
        </div>

        <div className="space-y-4">
          {workflowSteps.map((step, i) => (
            <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-xl bg-kingdom-900/60 border border-steel-800 gap-4">
              <div className="flex items-center gap-4">
                <span className="w-8 h-8 rounded-full bg-kingdom-800 border border-gold/40 flex items-center justify-center font-mono text-sm font-bold text-gold">
                  0{i + 1}
                </span>
                <h3 className="text-base font-serif font-bold text-white">{step.phase}</h3>
              </div>
              <p className="text-xs sm:text-sm text-steel-300 max-w-xl font-light leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
          Ready to Build Your Digital Kingdom?
        </h2>
        <p className="text-steel-400 mb-6 font-light">
          Let's discuss your project scope and forge a web presence that stands above the rest.
        </p>
        <Button to="/contact" variant="primary" size="lg">
          Start a Conversation
        </Button>
      </section>
      </div>
    </>
  );
};

