import { Experience, Education } from '@/types';

export const EXPERIENCES: Experience[] = [
  {
    id: 'infinite-computer-solutions',
    title: 'Technical Lead – Full-Stack Engineering',
    company: 'Infinite Computer Solutions',
    location: 'Gurgaon, India',
    period: 'October 2022 – Present',
    highlights: [
      'Built cross-platform mobile application using React Native for iOS and Android, serving 150K+ users—implemented shared codebase with platform-specific native modules for camera and geolocation, reducing development time by 60% compared to native approach while maintaining native performance',
      'Redesigned authentication microservice handling 60K concurrent users during peak hours, reducing average response time from 850ms to 180ms by implementing Redis session caching and connection pooling—eliminated timeout errors during Black Friday traffic surge',
      'Developed React.js frontend and Node.js/Express.js backend for customer portal, implementing real-time features with WebSockets—integrated with legacy systems via RESTful APIs, serving 200K+ monthly active users with 99.7% uptime',
      'Diagnosed and resolved React re-render cascade in product catalog affecting mobile users—implemented useMemo/useCallback hooks and virtualized scrolling, reducing Time to Interactive from 4.8s to 1.9s on 3G connections (measured via Lighthouse)',
      'Identified N+1 query pattern in order history API causing 12-second load times—redesigned PostgreSQL schema with proper joins and composite indexes, cutting query execution from 8000ms to 320ms and reducing database CPU utilization by 65%',
      'Built CI/CD pipeline from scratch using Jenkins and Docker, automating build, test, and deployment across 3 environments—reduced deployment cycle from 4-hour manual process to 12-minute automated release with rollback capability, enabling 3x faster feature delivery',
      'Architected GraphQL gateway consolidating 8 REST microservices into unified API—reduced average frontend API calls from 14 to 3 per page load, cutting network payload by 40% and improving perceived performance across web and mobile applications',
      'Established integration testing framework catching 85+ bugs before production in first 6 months—wrote custom Jest utilities for mocking database state and API responses, reducing customer-reported defects by 60% quarter-over-quarter',
    ],
  },
  {
    id: 'daz-bpo',
    title: 'Senior Full-Stack Software Engineer',
    company: 'DAZ BPO',
    location: 'Gurgaon, India',
    period: 'November 2019 – October 2022',
    highlights: [
      'Led team of 8 engineers rebuilding customer portal from legacy AngularJS to modern React/Node.js stack—coordinated parallel development across frontend/backend teams, delivering 3-month migration without service disruption for 50K active users',
      'Architected and developed admin dashboard using Vue.js with Vuex state management and Vue Router—built modular component architecture for data visualization and reporting, reducing page load times by 45% compared to previous Angular implementation',
      'Designed and implemented JWT-based authentication system with role-based access control (RBAC) supporting 15 permission levels—replaced legacy session management, reducing security vulnerabilities and enabling single sign-on across 4 applications (Angular, Vue.js, and React frontends)',
      'Resolved production incident where MongoDB queries were timing out under load—analyzed slow query logs, added compound indexes on frequent query patterns, and implemented query result caching (Redis), reducing P95 latency from 2.1s to 450ms',
      'Created component library of 50+ reusable React components with TypeScript definitions and Storybook documentation—reduced frontend development time by 40% and eliminated UI inconsistencies across 6 product teams',
      'Established weekly code review process and architectural decision records (ADRs) for team—documented trade-offs for key technical decisions (React vs Vue vs Angular for different use cases), improved knowledge sharing, and reduced onboarding time for new engineers from 3 weeks to 1 week',
      'Mentored 5 junior developers through pair programming and technical design sessions—2 engineers promoted to mid-level within 12 months, team velocity increased by 35% measured by story points completed per sprint',
    ],
  },
  {
    id: 'knowledgeops',
    title: 'Software Engineer – Full-Stack Development',
    company: 'Knowledgeops Software Solutions',
    location: 'Gurgaon, India',
    period: 'December 2016 – August 2019',
    highlights: [
      'Built RESTful API backend using Node.js/Express.js for e-commerce application handling 15K orders/day—designed MongoDB schema for products, carts, and orders with proper data normalization, implemented input validation and error handling middleware',
      'Developed multiple frontend applications using Angular (2+) and React.js for different business units—implemented responsive layouts, state management (NgRx for Angular, Redux for React), and shared authentication services across platforms',
      'Created real-time analytics dashboard with React and Chart.js displaying live metrics—integrated WebSocket updates for streaming data, implemented Redux for state management across 20+ interconnected components',
      'Debugged memory leak in Node.js worker processes causing server crashes every 48 hours—traced issue to event emitter listeners not being removed, implemented proper cleanup in request lifecycle, achieving stable 30-day uptime',
      'Collaborated with QA team to establish testing standards—wrote comprehensive unit tests for critical business logic using Jasmine (Angular) and Jest (React), integrated into build pipeline, caught 40+ regressions before production deployment',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'RGPV, Bhopal',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Jiwaji University, Gwalior',
  },
];

export const CERTIFICATIONS: Education[] = [
  {
    degree: 'React.js Professional Certification',
    institution: 'NamasteDev',
  },
  {
    degree: 'Advanced Node.js & Backend Architecture',
    institution: 'Professional Certification',
  },
];
