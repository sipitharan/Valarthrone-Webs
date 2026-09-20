import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/Button';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-kingdom-950/85 backdrop-blur-xl border-b border-gold/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
            : 'py-5 sm:py-6 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              to="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg p-1"
              aria-label="VALARTHRONE WEBS Home"
            >
              <div className="relative">
                <img
                  src="/assets/valarthrone-logo.png"
                  alt="VALARTHRONE WEBS"
                  className="w-9 h-9 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gold/20 blur-md rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-extrabold text-lg sm:text-xl tracking-wider text-white group-hover:text-gold-300 transition-colors">
                  VALARTHRONE
                </span>
                <span className="text-[10px] font-mono tracking-[0.25em] text-gold-400 font-semibold uppercase -mt-1">
                  WEBS
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
              {siteConfig.navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3.5 py-2 text-xs lg:text-sm font-medium tracking-wide uppercase transition-colors rounded-md group ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-steel-300 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span className={isActive ? 'text-gold-300' : ''}>{item.label}</span>
                      {isActive && (
                        <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-crimson-500 to-transparent rounded-full shadow-[0_0_12px_rgba(220,38,38,0.9)]" />
                      )}
                      <span className="absolute inset-0 rounded-md bg-white/0 group-hover:bg-white/5 transition-colors -z-10" />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* Desktop CTA & Mobile Menu Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <Button
                  to="/contact"
                  variant="primary"
                  size="sm"
                  className="shadow-royal-glow"
                >
                  Get a Quote
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="md:hidden p-2 rounded-lg bg-kingdom-900/90 border border-steel-700/60 text-steel-200 hover:text-white hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};

