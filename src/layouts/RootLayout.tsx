import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar } from '@/components/navbar/Navbar';
import { Footer } from '@/components/footer/Footer';
import { ParticleBackground } from '@/components/ui/ParticleBackground';
import { CustomCursor } from '@/components/ui/CustomCursor';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export const RootLayout: React.FC = () => {
  useScrollToTop();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col bg-kingdom-950 text-steel-200 overflow-x-hidden selection:bg-crimson-900/80 selection:text-gold-300">

      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              transition: {
                duration: 0.6,
                ease: 'easeInOut',
              },
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#03060c]"
          >
            <div className="relative flex flex-col items-center justify-center gap-6 px-6 text-center">

              {/* Glow Background */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.18),_transparent_35%),radial-gradient(circle_at_center,_rgba(59,130,246,0.18),_transparent_35%)] blur-3xl" />

              {/* Logo */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  filter: 'blur(12px)',
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                transition={{
                  duration: 0.8,
                  ease: 'easeOut',
                }}
                className="relative"
              >
                <img
                  src="/assets/valarthrone-logo.png"
                  alt="VALARTHRONE WEBS"
                  className="w-[180px] h-[180px] object-contain drop-shadow-[0_0_35px_rgba(212,175,55,0.7)]"
                />
              </motion.div>

              {/* Brand Name */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="relative flex flex-col items-center gap-2"
              >
                <span className="font-serif text-2xl tracking-[0.28em] text-gold-300 uppercase">
                  VALARTHRONE
                </span>

                <span className="font-mono text-[10px] tracking-[0.45em] text-steel-300 uppercase">
                  WEBS
                </span>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Ambient Background */}
      <ParticleBackground density={28} />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default RootLayout;