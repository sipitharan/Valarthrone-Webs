export interface NavItem {
  label: string;
  path: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  subtitle: string;
  heroSmallLabel: string;
  navItems: NavItem[];
  socialLinks: {
    github: string;
    linkedin: string;
    whatsapp: string;
    email: string;
  };
  phone: string;
  keyPillars: string[];
}

export const siteConfig: SiteConfig = {
  brandName: 'VALARTHRONE WEBS',
  tagline: 'Build Your Digital Kingdom.',
  subtitle: 'Modern, fast and professional websites crafted to help businesses stand out, grow and get noticed.',
  heroSmallLabel: 'WEB DEVELOPMENT & DIGITAL SOLUTIONS',
  navItems: [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ],
  socialLinks: {
    github: 'https://github.com/valarthrone-webs',
    linkedin: 'https://linkedin.com/company/valarthrone-webs',
    whatsapp: 'https://wa.me/917540079392',
    email: 'contact@valarthronewebs.com',
  },
  phone: '7540079392',
  keyPillars: [
    'MODERN DESIGN',
    'FAST PERFORMANCE',
    'FULLY RESPONSIVE',
    'SEO READY',
  ],
};

