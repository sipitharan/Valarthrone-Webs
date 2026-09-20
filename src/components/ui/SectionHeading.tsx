import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  badgeVariant?: 'gold' | 'crimson';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  description,
  align = 'center',
  className,
  badgeVariant = 'gold',
}) => {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  return (
    <div className={cn("flex flex-col mb-12 sm:mb-16", alignClasses[align], className)}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-3"
        >
          <span className="w-6 h-px bg-gradient-to-r from-transparent to-gold/80" />
          <span className={`text-xs font-semibold tracking-widest uppercase font-mono ${
            badgeVariant === 'crimson' ? 'text-crimson-400' : 'text-gold-400'
          }`}>
            {label}
          </span>
          <span className="w-6 h-px bg-gradient-to-l from-transparent to-gold/80" />
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-wide leading-tight max-w-4xl"
      >
        {title}
      </motion.h2>

      {/* Royal forged accent divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "h-0.5 w-24 my-4 bg-gradient-to-r from-transparent via-gold-500 to-transparent",
          align === 'left' && 'origin-left',
          align === 'center' && 'origin-center',
          align === 'right' && 'origin-right'
        )}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-base sm:text-lg text-steel-400 max-w-2xl leading-relaxed font-light"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

