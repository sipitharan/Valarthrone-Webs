import React from 'react';
import { cn } from '@/lib/utils';

export const RoyalDivider: React.FC<{ className?: string; accent?: 'gold' | 'crimson' }> = ({
  className,
  accent = 'gold',
}) => {
  return (
    <div className={cn("relative flex items-center justify-center my-12 sm:my-16 max-w-4xl mx-auto px-4", className)}>
      <div className="flex-grow h-px bg-gradient-to-r from-transparent via-steel-700/60 to-gold/40" />

      <div className="mx-6 flex items-center justify-center">
        <img
          src="/assets/valarthrone-logo.png"
          alt="VALARTHRONE WEBS"
          className={`w-[38px] h-[38px] object-contain drop-shadow-[0_0_18px_rgba(212,175,55,0.45)] ${accent === 'crimson' ? 'opacity-90' : 'opacity-100'}`}
        />
      </div>

      <div className="flex-grow h-px bg-gradient-to-l from-transparent via-steel-700/60 to-gold/40" />
    </div>
  );
};

