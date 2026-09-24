import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  ShoppingCart,
  Sparkles,
  Flame,
  Layers,
  RefreshCw,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkle,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { RoyalDivider } from '@/components/ui/RoyalDivider';
import SEO from '@/components/SEO';

export const Services: React.FC = () => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-8 h-8 text-gold" />;
      case 'ShoppingCart': return <ShoppingCart className="w-8 h-8 text-gold" />;
      case 'Sparkles': return <Sparkles className="w-8 h-8 text-gold" />;
      case 'Flame': return <Flame className="w-8 h-8 text-crimson-500" />;
      case 'Layers': return <Layers className="w-8 h-8 text-gold" />;
      case 'RefreshCw': return <RefreshCw className="w-8 h-8 text-crimson-500" />;
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-gold" />;
      default: return <Sparkle className="w-8 h-8 text-gold" />;
    }
  };

  return (
    <>
      <SEO
        title="Website Development Services | Valarthrone Webs"
        description="Explore modern, responsive website development services from Valarthrone Webs for businesses, startups and creators."
        canonicalUrl="https://valarthronewebs.vercel.app/services"
      />
      <div className="pt-28 sm:pt-36 pb-24">
      {/* Hero Header */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kingdom-900/90 border border-gold/30 text-gold-300 text-xs font-mono tracking-widest uppercase mb-4"
        >
          <span>ENGINEERED FOR EXCELLENCE</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl font-serif font-extrabold text-white tracking-tight uppercase leading-tight mb-6"
        >
          FORGE YOUR <br />
          <span className="bg-gradient-to-r from-gold-300 via-amber-400 to-gold-600 bg-clip-text text-transparent text-glow-gold">
            DIGITAL PRESENCE.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-steel-300 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Bespoke web development solutions tailored to empower your business authority. Each solution is built with clean modern architecture, rapid performance, and distinctive royal craftsmanship.
        </motion.p>
      </section>

      {/* Services List Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            id={service.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group p-8 sm:p-10 rounded-2xl bg-gradient-to-b from-kingdom-900/80 to-kingdom-950 border border-steel-800/80 hover:border-crimson-600/50 hover:shadow-[0_0_30px_rgba(220,38,38,0.22)] hover:-translate-y-1.5 transition-all duration-300 shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Icon, Title & Overview */}
              <div className="lg:col-span-5 space-y-4">
                <div className="w-14 h-14 rounded-xl bg-kingdom-800 border border-gold/30 flex items-center justify-center shadow-royal-glow group-hover:scale-105 group-hover:border-gold/60 transition-all duration-300">
                  {getServiceIcon(service.iconName)}
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-wide">
                  {service.title}
                </h2>

                <p className="text-sm sm:text-base text-steel-300 leading-relaxed font-light">
                  {service.fullDescription}
                </p>

                {/* Target Audience Box */}
                <div className="p-4 rounded-xl bg-kingdom-950/80 border border-steel-800/60">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    Who It Is For
                  </span>
                  <p className="text-xs sm:text-sm text-steel-300 font-light">
                    {service.targetAudience}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    to={`/contact?service=${service.id}`}
                    variant="primary"
                    size="md"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    Start Your Project
                  </Button>
                </div>
              </div>

              {/* Right Column: Key Features & Deliverables */}
              <div className="lg:col-span-7 bg-kingdom-950/60 p-6 sm:p-8 rounded-xl border border-steel-800/60 space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold"></span>
                    Key Features Included
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-steel-300">
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-steel-850">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-steel-400 font-bold mb-3">
                    Deliverables & Handover
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((del, i) => (
                      <Badge key={i} variant="steel" size="sm">
                        {del}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <RoyalDivider />

      {/* Services Bottom CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
          Need a Tailored Custom Architecture?
        </h2>
        <p className="text-sm sm:text-base text-steel-400 mb-6 font-light">
          Have unique business constraints or special integration requirements? Let's discuss a custom blueprint for your digital kingdom.
        </p>
        <Button to="/contact" variant="outline-gold" size="lg">
          Request Consultation
        </Button>
      </section>
      </div>
    </>
  );
};

