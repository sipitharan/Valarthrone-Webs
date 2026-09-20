export type ProjectCategory = 'Business' | 'E-commerce' | 'Web Application';

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  shortDescription: string;
  fullOverview: string;
  challenge: string;
  solution: string;
  features: string[];
  techStack: string[];
  role: string;
  timeline: string;
  liveDemoUrl?: string;
  githubUrl?: string;
  clientType: string;
  processSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  metrics: {
    label: string;
    value: string;
  }[];
  accentColor: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'kannan-store',
    slug: 'kannan-store',
    title: 'Kannan Store',
    subtitle: 'Modern Retail & Grocery Digital Commerce Experience',
    category: 'E-commerce',
    shortDescription: 'A streamlined web store platform featuring fast catalog navigation, smart product categorization, and seamless cart interaction designed for local and regional grocery retail.',
    fullOverview: 'Kannan Store provides customers with a frictionless online storefront to explore everyday groceries, household essentials, and packaged goods. The platform focuses on rapid page loads, responsive mobile purchasing, and structured product categorization tailored for high-volume repeat shoppers.',
    challenge: 'Traditional neighborhood retail stores frequently struggle with transitioning to digital storefronts due to heavy e-commerce software overhead, cluttered interfaces, slow mobile loading speeds, and complex checkout friction that drives shoppers away.',
    solution: 'Designed and built an intuitive, lightweight e-commerce storefront with instantaneous category switching, search filtering, persistent shopping cart state, and responsive layouts that perform smoothly across entry-level and flagship devices alike.',
    features: [
      'Interactive product catalog with categorized filters (Pantry, Fresh, Household)',
      'Instant search and real-time inventory quantity toggles',
      'Persistent cart state with live total and discount calculations',
      'Mobile-optimized thumb-zone navigation and rapid checkout flow',
      'Order review summary with localized delivery scheduling options',
    ],
    techStack: ['JavaScript', 'HTML5', 'CSS3', 'Python', 'Flask', 'SQL'],
    role: 'Full Stack Web Architecture & UI Design',
    timeline: 'Completed Project',
    liveDemoUrl: 'https://kannanstore.valarthrone.demo',
    githubUrl: 'https://github.com/valarthrone-webs/kannan-store',
    clientType: 'Retail & Grocery Commerce',
    processSteps: [
      {
        step: '01',
        title: 'Catalog Taxonomy & Wireframing',
        description: 'Structured the multi-category inventory hierarchy to minimize user clicks and streamline essential product discovery.'
      },
      {
        step: '02',
        title: 'Frontend Component Architecture',
        description: 'Created reusable product cards, category drawer navigation, and a lightweight shopping cart state container.'
      },
      {
        step: '03',
        title: 'Backend Logic & Database Schema',
        description: 'Engineered relational SQL schema for items, stock counts, and orders, connected via lightweight Flask API endpoints.'
      },
      {
        step: '04',
        title: 'Performance Tuning & Deployment',
        description: 'Optimized product image loading, minimized bundle size, and verified cross-browser checkout flows.'
      }
    ],
    metrics: [
      { label: 'Architecture', value: 'Lightweight & Modular' },
      { label: 'Responsiveness', value: 'Mobile-First Tested' },
      { label: 'Catalog Search', value: 'Instant Response' }
    ],
    accentColor: 'from-amber-600/30 to-gold/20',
  },
  {
    id: 'resqnow',
    slug: 'resqnow',
    title: 'ResQNow',
    subtitle: 'Emergency Coordination & Rapid Response Dispatch Portal',
    category: 'Web Application',
    shortDescription: 'A mission-critical web application built to connect citizens in distress with emergency responders, volunteer dispatchers, and resource coordinators in real-time.',
    fullOverview: 'ResQNow is a digital emergency coordination hub engineered for high reliability under pressure. It provides a centralized dispatch interface where urgent requests for medical help, flood rescue, shelter, and supplies can be submitted, prioritized, and assigned to active field teams.',
    challenge: 'During critical emergencies and climate events, communication breakdowns and delayed dispatch lead to severe hazards. Dispatchers need an unambiguous, high-contrast dashboard that operates flawlessly on unstable networks and minimal latency.',
    solution: 'Engineered a resilient web portal featuring priority-tagged incident alerts, role-based dispatcher controls, and an emergency reporting workflow that allows distressed individuals to submit assistance requests with minimal taps.',
    features: [
      'Urgent distress call trigger with geo-location reporting capabilities',
      'Real-time incident dispatch dashboard with status lifecycle tracking',
      'Volunteer and relief resource triage and assignment tools',
      'High-contrast accessible UI engineered for urgent readability in field conditions',
      'Offline-tolerant data caching for intermittent network connectivity',
    ],
    techStack: ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Git'],
    role: 'Lead Application Developer & UX Architect',
    timeline: 'Completed Project',
    liveDemoUrl: 'https://resqnow.valarthrone.demo',
    githubUrl: 'https://github.com/valarthrone-webs/resqnow',
    clientType: 'Public Safety & Community Emergency',
    processSteps: [
      {
        step: '01',
        title: 'Emergency Workflow Mapping',
        description: 'Analyzed standard operating procedures for crisis response dispatch to eliminate friction and form clutter.'
      },
      {
        step: '02',
        title: 'Incident Lifecycle State Modeling',
        description: 'Designed finite state machine for incidents (Reported -> Dispatched -> In Progress -> Resolved).'
      },
      {
        step: '03',
        title: 'Secure API & Data Pipeline',
        description: 'Implemented Flask endpoints handling incident queries, updates, and role-based coordinator views.'
      },
      {
        step: '04',
        title: 'Stress Testing & High-Contrast UI',
        description: 'Tested edge case latencies, form validation resilience, and accessible visual hierarchy for stressful environments.'
      }
    ],
    metrics: [
      { label: 'Interface Contrast', value: 'WCAG AAA Standard' },
      { label: 'Dispatch Latency', value: 'Real-time Optimized' },
      { label: 'Form Flow', value: '3-Step Emergency Submission' }
    ],
    accentColor: 'from-crimson-700/30 to-red-900/20',
  },
  {
    id: 'solarguardian-ai',
    slug: 'solarguardian-ai',
    title: 'SolarGuardian AI',
    subtitle: 'Photovoltaic Array Monitoring & Yield Analytics Dashboard',
    category: 'Web Application',
    shortDescription: 'An intelligent energy monitoring dashboard that visualizes photovoltaic power generation metrics, panel efficiency drops, and operational diagnostics.',
    fullOverview: 'SolarGuardian AI empowers solar array operators, commercial facility managers, and residential system owners to oversee energy generation metrics in real time. The platform presents telemetry data, weather impacts, inverter health indicators, and predictive alerts for proactive system maintenance.',
    challenge: 'Photovoltaic installation owners often lose significant generation yield when inverter faults, dust accumulation, or panel degradation go unnoticed for weeks due to complex and inaccessible monitoring utilities.',
    solution: 'Constructed an executive solar intelligence portal that translates raw telemetry into actionable visual insights, interactive power curves, efficiency anomaly flags, and clean performance summaries.',
    features: [
      'Interactive energy output visualization (daily, weekly, and monthly kWh trends)',
      'Panel array health matrix with status and temperature indicators',
      'Diagnostic alert feed for voltage drops and inverter discrepancies',
      'Clean tabular records with CSV export capabilities',
      'Responsive dark cockpit visual theme suited for control rooms and mobile devices',
    ],
    techStack: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL', 'Git', 'GitHub'],
    role: 'Frontend UI/UX & Data Visualization Developer',
    timeline: 'Completed Project',
    liveDemoUrl: 'https://solarguardian.valarthrone.demo',
    githubUrl: 'https://github.com/valarthrone-webs/solarguardian-ai',
    clientType: 'Clean Energy & Industrial IoT',
    processSteps: [
      {
        step: '01',
        title: 'Telemetry Data Modeling',
        description: 'Structured time-series energy generation data points, voltage readings, and ambient temperature metrics.'
      },
      {
        step: '02',
        title: 'Cockpit Dashboard Design',
        description: 'Created a high-density, dark-themed control center UI with modular metric cards and clear trend charts.'
      },
      {
        step: '03',
        title: 'Data Visualizations & Filters',
        description: 'Built interactive interactive chart components with dynamic date ranges and anomaly threshold markers.'
      },
      {
        step: '04',
        title: 'Validation & Responsive Polish',
        description: 'Ensured fluid rendering on multi-monitor workstations, tablets, and field smartphones.'
      }
    ],
    metrics: [
      { label: 'Telemetry', value: 'Interactive Trend Curves' },
      { label: 'Data Density', value: 'Executive Level Cockpit' },
      { label: 'Accessibility', value: 'Dark Theme High-Readability' }
    ],
    accentColor: 'from-amber-500/30 to-yellow-600/20',
  },
];

