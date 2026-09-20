import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'crimson' | 'ghost' | 'outline-gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  to,
  icon,
  iconPosition = 'right',
  className,
  disabled,
  ...props
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium tracking-wide uppercase transition-all duration-300 select-none overflow-hidden rounded-md group disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5",
    md: "px-5 py-2.5 text-sm gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-gold-600 via-gold-500 to-amber-500 text-kingdom-950 font-semibold shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.6)] hover:brightness-110 active:scale-[0.98] border border-gold-300/60",
    secondary:
      "bg-kingdom-900/80 hover:bg-kingdom-800 text-steel-200 hover:text-white border border-steel-700/60 hover:border-gold/40 shadow-sm backdrop-blur-md active:scale-[0.98]",
    crimson:
      "bg-gradient-to-r from-crimson-800 via-crimson-600 to-red-600 text-white font-semibold shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_35px_rgba(220,38,38,0.7)] hover:brightness-110 active:scale-[0.98] border border-red-400/30",
    'outline-gold':
      "bg-transparent text-gold-300 hover:text-white hover:bg-gold/10 border border-gold/40 hover:border-gold shadow-[0_0_15px_rgba(212,175,55,0.15)] active:scale-[0.98]",
    ghost:
      "bg-transparent text-steel-300 hover:text-gold-300 hover:bg-white/5 active:scale-[0.98]",
  };

  const content = (
    <>
      {/* Subtle metallic sheen line on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out pointer-events-none" />
      
      {icon && iconPosition === 'left' && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  const mergedClasses = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (to) {
    return (
      <Link to={to} className={mergedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto') || href.startsWith('https://wa.me');
    return (
      <a
        href={href}
        className={mergedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={mergedClasses} disabled={disabled} {...props}>
      {content}
    </button>
  );
};

