import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, MessageSquare, Phone, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { servicesData } from '@/data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-kingdom-950 border-t border-steel-800/80 pt-16 pb-12 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-crimson-900/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-steel-850">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group inline-block">
              <img
                src="/assets/valarthrone-logo.png"
                alt="VALARTHRONE WEBS"
                className="w-[34px] h-[34px] object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-xl tracking-wider text-white group-hover:text-gold transition-colors">
                  VALARTHRONE
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] text-gold-400 font-semibold uppercase -mt-1">
                  WEBS
                </span>
              </div>
            </Link>

            <p className="text-sm font-serif italic text-gold-400 font-medium">
              "{siteConfig.tagline}"
            </p>

            <a
              href={`tel:+91${siteConfig.phone}`}
              className="inline-flex items-center gap-2 text-sm text-steel-300 hover:text-gold transition-colors"
              aria-label={`Call VALARTHRONE WEBS at ${siteConfig.phone}`}
            >
              <Phone className="w-4 h-4 text-gold" />
              <span>{siteConfig.phone}</span>
            </a>

            <p className="text-sm text-steel-400 max-w-sm leading-relaxed">
              Professional web development agency building modern, responsive, and high-performance websites for ambitious businesses and visionary creators.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={siteConfig.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-kingdom-900 border border-steel-700/60 text-steel-300 hover:text-gold hover:border-gold/50 transition-colors"
                aria-label="GitHub Repository"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-kingdom-900 border border-steel-700/60 text-steel-300 hover:text-gold hover:border-gold/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-kingdom-900 border border-steel-700/60 text-steel-300 hover:text-gold hover:border-gold/50 transition-colors"
                aria-label="WhatsApp Contact"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${siteConfig.socialLinks.email}`}
                className="p-2.5 rounded-lg bg-kingdom-900 border border-steel-700/60 text-steel-300 hover:text-gold hover:border-gold/50 transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-steel-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
              Offerings
            </h3>
            <ul className="space-y-2.5 text-sm">
              {servicesData.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link
                    to="/services"
                    className="text-steel-400 hover:text-white transition-colors block truncate"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kingdom Standards */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-gold-400 font-bold">
              Kingdom Standards
            </h3>
            <ul className="space-y-2 text-xs text-steel-400">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Bespoke Code Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Zero Sluggish Bloat</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>SEO & Speed Guaranteed</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold"></span>
                <span>Dedicated Ownership</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-500">
          <p>© {new Date().getFullYear()} VALARTHRONE WEBS. All rights reserved.</p>
          <p className="font-mono text-[11px] text-steel-500">
            Crafted with passion, modern web standards & dark fantasy visual precision.
          </p>
        </div>
      </div>
    </footer>
  );
};

