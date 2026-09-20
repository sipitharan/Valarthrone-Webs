export interface SkillItem {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools & Version Control';
  description: string;
  badge: string;
}

export const skillsData: SkillItem[] = [
  {
    id: 'html',
    name: 'HTML',
    category: 'Frontend',
    description: 'Semantic, accessible, and standards-compliant structural markup for modern search visibility.',
    badge: 'Structure & SEO',
  },
  {
    id: 'css',
    name: 'CSS',
    category: 'Frontend',
    description: 'Modern responsive layouts, flexbox, grid, animations, and Tailwind CSS design systems.',
    badge: 'Styling & Motion',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'Frontend',
    description: 'Modern ES6+ syntax, asynchronous programming, interactive UI logic, and DOM manipulation.',
    badge: 'Interactivity',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'Backend',
    description: 'Clean backend logic, data processing, automation scripts, and server-side integration.',
    badge: 'Core Logic',
  },
  {
    id: 'flask',
    name: 'Flask',
    category: 'Backend',
    description: 'Lightweight, rapid RESTful APIs, routing, and backend microservices architecture.',
    badge: 'Web Microframework',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'Backend',
    description: 'Robust object-oriented architectures, enterprise data handling, and backend services.',
    badge: 'Enterprise Backend',
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'Database',
    description: 'Relational database schema design, querying, data normalization, and integrity.',
    badge: 'Data Management',
  },
  {
    id: 'git',
    name: 'Git',
    category: 'Tools & Version Control',
    description: 'Branching strategies, conflict resolution, history management, and local versioning.',
    badge: 'Version Control',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'Tools & Version Control',
    description: 'Collaborative repository management, CI/CD automation, pull request workflows, and release hosting.',
    badge: 'Collaboration & CI',
  },
];

