import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'crimson' | 'steel' | 'default';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
}) => {
  const baseStyles = "inline-flex items-center font-medium tracking-wide uppercase rounded select-none border transition-colors";

  const sizeStyles = {
    sm: "px-2 py-0.5 text-[10px]",
    md: "px-2.5 py-1 text-xs",
  };

  const variantStyles = {
    default: "bg-kingdom-900/90 text-steel-300 border-steel-700/50 hover:border-steel-500",
    gold: "bg-gold/10 text-gold-300 border-gold/30 hover:border-gold/60 shadow-[0_0_10px_rgba(212,175,55,0.15)]",
    crimson: "bg-crimson-950/60 text-crimson-400 border-crimson-800/60 hover:border-crimson-600 shadow-[0_0_10px_rgba(220,38,38,0.15)]",
    steel: "bg-steel-900/40 text-steel-300 border-steel-700/60 hover:border-steel-400",
  };

  return (
    <span className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  );
};

