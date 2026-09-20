import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-24 text-center">
      <div className="max-w-md mx-auto space-y-6">
        <img
          src="/assets/valarthrone-logo.png"
          alt="VALARTHRONE WEBS"
          className="mx-auto w-16 h-16 object-contain drop-shadow-crimson-glow"
        />
        
        <span className="text-xs font-mono tracking-widest text-crimson-400 uppercase">
          ERROR 404 • UNCHARTED TERRITORY
        </span>

        <h1 className="text-4xl sm:text-5xl font-serif font-extrabold text-white">
          DOMAIN NOT FOUND
        </h1>

        <p className="text-sm text-steel-400 leading-relaxed font-light">
          The fortress or chamber you seek does not exist within this realm. Return to charted territory.
        </p>

        <div className="pt-2">
          <Button to="/" variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
            Return to Kingdom
          </Button>
        </div>
      </div>
    </div>
  );
};

