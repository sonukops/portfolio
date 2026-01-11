import { SkillCategory } from '@/types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'languages-frameworks',
    title: 'Languages & Frameworks',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'React.js',
      'React Native',
      'Angular',
      'Vue.js',
      'Node.js',
      'Express.js',
    ],
  },
  {
    id: 'mobile-web',
    title: 'Mobile & Web',
    skills: [
      'React Native (iOS/Android)',
      'Progressive Web Apps',
      'Responsive Design',
      'Cross-Platform Development',
    ],
  },
  {
    id: 'architecture-apis',
    title: 'Architecture & APIs',
    skills: [
      'RESTful API Design',
      'GraphQL',
      'Microservices',
      'Event-Driven Systems',
      'Database Schema Design',
    ],
  },
  {
    id: 'data-performance',
    title: 'Data & Performance',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'Redis Caching',
      'Query Optimization',
      'Index Strategy',
      'Database Profiling',
    ],
  },
  {
    id: 'devops-infrastructure',
    title: 'DevOps & Infrastructure',
    skills: [
      'Docker',
      'Kubernetes',
      'Jenkins',
      'CI/CD Pipelines',
      'GCP',
      'Azure',
      'Zero-Downtime Deployments',
    ],
  },
  {
    id: 'testing-quality',
    title: 'Testing & Quality',
    skills: [
      'Jest',
      'React Testing Library',
      'Mocha',
      'Integration Testing',
      'TDD',
      'E2E Testing',
    ],
  },
];
