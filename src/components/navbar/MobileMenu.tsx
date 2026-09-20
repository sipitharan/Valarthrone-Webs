import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { siteConfig } from '@/data/config';
import { Button } from '@/components/ui/Button';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const menuVariants = {
    closed: {
      opacity: 0,
      clipPath: 'circle(0% at top right)',
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }
    },
    open: {
      opacity: 1,
      clipPath: 'circle(150% at top right)',
      transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.07, duration: 0.3 }
    })
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 bg-kingdom-950/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-steel-800 pb-5">
            <div className="flex items-center gap-3">
              <img
                src="/assets/valarthrone-logo.png"
                alt="VALARTHRONE WEBS"
                className="w-8 h-8 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg text-white tracking-wider">
                  VALARTHRONE
                </span>
                <span className="text-[10px] font-mono tracking-widest text-gold-400">
                  WEBS
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-lg bg-kingdom-900 border border-steel-700/60 text-steel-300 hover:text-white hover:border-gold focus:outline-none focus:ring-2 focus:ring-gold"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-4 py-8">
            {siteConfig.navItems.map((item, i) => (
              <motion.div
                key={item.path}
                custom={i}
                variants={linkVariants}
              >
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex items-center justify-between py-3.5 text-2xl sm:text-3xl font-serif font-bold tracking-wide transition-all border-b border-steel-900/60 ${
                      isActive
                        ? 'text-white pl-4 border-l-2 border-crimson-600 bg-gradient-to-r from-crimson-950/40 via-kingdom-900/20 to-transparent'
                        : 'text-steel-300 hover:text-white hover:pl-2'
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-5 h-5 text-gold opacity-60" />
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Footer CTA & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-4 pt-4 border-t border-steel-800"
          >
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={onClose}
            >
              Get a Quote
            </Button>

            <div className="text-center">
              <p className="text-xs text-steel-400 font-serif tracking-widest uppercase">
                {siteConfig.tagline}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

