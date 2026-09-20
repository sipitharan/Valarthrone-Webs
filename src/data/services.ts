export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  iconName: string;
  targetAudience: string;
  fullDescription: string;
  features: string[];
  deliverables: string[];
  isFeaturedOnHome: boolean;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'business-websites',
    title: 'Business Websites',
    shortDescription: 'Commanding corporate platforms designed to establish credibility, generate qualified leads, and reflect your brand authority.',
    iconName: 'Building2',
    targetAudience: 'Corporations, local businesses, consultancies, and service firms seeking a credible digital presence.',
    fullDescription: 'A custom-tailored business website designed to convert casual visitors into loyal clients. Built with pristine code, lightning-fast load times, and structured SEO to ensure your business claims its domain online.',
    features: [
      'Bespoke royal branding & UI architecture',
      'Lead capture forms & CRM integration readiness',
      'Multi-page hierarchy (Services, About, Case Studies, Contact)',
      'High-speed mobile & desktop responsiveness',
      'Local & national on-page SEO optimization',
    ],
    deliverables: ['Custom design system', 'Responsive web deployment', 'Contact automation', 'Google Search Console setup'],
    isFeaturedOnHome: true,
  },
  {
    id: 'ecommerce-websites',
    title: 'E-commerce Websites',
    shortDescription: 'High-converting digital storefronts engineered for smooth checkout journeys, secure transactions, and effortless catalog browsing.',
    iconName: 'ShoppingCart',
    targetAudience: 'Retail brands, direct-to-consumer businesses, and boutique merchants ready to sell products online.',
    fullDescription: 'Modern e-commerce solutions that minimize purchase friction and maximize revenue. Designed with intuitive inventory presentation, responsive shopping carts, and streamlined checkout pathways.',
    features: [
      'Product catalog with filtering and search',
      'Secure payment gateway integration readiness',
      'Mobile-first responsive shopping experience',
      'Cart, wishlist, and customer order management flows',
      'Speed-optimized imagery and asset caching',
    ],
    deliverables: ['Storefront setup', 'Product showcase layout', 'Checkout flow UX', 'Inventory display system'],
    isFeaturedOnHome: true,
  },
  {
    id: 'portfolio-websites',
    title: 'Portfolio Websites',
    shortDescription: 'Signature digital galleries for creators, architects, photographers, and executives who demand an extraordinary personal brand.',
    iconName: 'Sparkles',
    targetAudience: 'Creative professionals, developers, consultants, and agencies seeking to exhibit their finest achievements.',
    fullDescription: 'A distinguished showcase that commands respect. Highlighting your past victories with cinematic layouts, interactive case study deep dives, and clean typography that puts your craft at center stage.',
    features: [
      'Curated case study & project galleries',
      'Interactive filtering & rich media support',
      'Clear call-to-actions for bookings and hiring',
      'Cinematic animations & smooth page transitions',
      'Downloadable resume / capability deck triggers',
    ],
    deliverables: ['Dynamic case study templates', 'Interactive filter gallery', 'Personal branding styling', 'Domain launch support'],
    isFeaturedOnHome: true,
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    shortDescription: 'Laser-focused, high-impact single-page experiences built to drive conversions for product launches, events, and marketing campaigns.',
    iconName: 'Flame',
    targetAudience: 'Startups, SaaS companies, product creators, and marketing campaigns running paid advertising.',
    fullDescription: 'Every pixel of a VALARTHRONE landing page is calibrated for action. We combine persuasive visual storytelling, frictionless micro-copy, and strategic CTA placement to convert traffic into signups and revenue.',
    features: [
      'Conversion-optimized layout and visual hierarchy',
      'Fast-loading hero section with clear value proposition',
      'Benefit highlights, feature deep-dives, and FAQs',
      'Strategic CTA placement & scroll triggers',
      'Analytics event tracking & pixel integration',
    ],
    deliverables: ['High-converting single page', 'A/B test readiness', 'Mobile speed optimization', 'Lead webhook hooks'],
    isFeaturedOnHome: true,
  },
  {
    id: 'web-applications',
    title: 'Custom Web Applications',
    shortDescription: 'Dynamic, data-driven web applications and interactive portals engineered with clean client architectures and reliable logic.',
    iconName: 'Layers',
    targetAudience: 'Startups, tech founders, and organizations needing interactive custom software or internal tools.',
    fullDescription: 'Beyond static presentation, we build reactive web applications that execute business logic. Featuring responsive component architectures, state management, and seamless API connectivity.',
    features: [
      'Component-based modular frontend architecture',
      'Interactive data visualization and user dashboards',
      'Role-based views and intuitive navigation',
      'REST API and database consumption',
      'Robust error handling and resilient states',
    ],
    deliverables: ['Custom frontend app', 'State architecture', 'RESTful API integration', 'Component documentation'],
    isFeaturedOnHome: true,
  },
  {
    id: 'website-redesign',
    title: 'Website Redesign',
    shortDescription: 'Transform dated, slow, or underperforming websites into sleek, modern powerhouses that conquer current web standards.',
    iconName: 'RefreshCw',
    targetAudience: 'Businesses with aging websites that look outdated, load sluggishly, or fail to convert modern mobile visitors.',
    fullDescription: 'Breathe new life into your digital presence. We overhaul outdated visual aesthetics, modernize legacy codebases, optimize performance, and elevate user experience to current royal standards.',
    features: [
      'Comprehensive UI/UX and performance audit',
      'Modern dark/light cinematic aesthetic overhaul',
      'Mobile-first responsive restructuring',
      'Core Web Vitals and load-time acceleration',
      'Content migration and SEO preservation redirects',
    ],
    deliverables: ['Complete visual overhaul', 'Clean code rewrite', 'Performance score uplift', 'SEO continuity roadmap'],
    isFeaturedOnHome: true,
  },
  {
    id: 'website-maintenance',
    title: 'Website Maintenance & Care',
    shortDescription: 'Continuous vigilance, technical upkeep, security monitoring, and regular performance tuning to ensure your digital kingdom never wavers.',
    iconName: 'ShieldCheck',
    targetAudience: 'Busy founders and enterprises that need guaranteed reliability, updates, and dedicated technical care.',
    fullDescription: 'A website is a living asset. Our maintenance solutions provide peace of mind through regular security patches, dependency updates, uptime monitoring, and ongoing content refinements.',
    features: [
      'Routine dependency & security updates',
      'Uptime, DNS, and SSL health checks',
      'Speed optimization & image compression audits',
      'Content updates & text revisions on request',
      'Priority technical support and emergency troubleshooting',
    ],
    deliverables: ['Monthly health reports', 'Scheduled updates', 'Priority support channel', 'Backup safeguards'],
    isFeaturedOnHome: false,
  },
];

