export interface Project {
  id: string;
  name: string;
  company: string;
  duration: string;
  role: string;
  teamSize: string;
  technologies: string[];
  description: string;
  features: string[];
  link?: string;
  image?: string;
}

export const PROJECTS: Project[] = [
  // Infinite Computer Solutions Projects
  {
    id: 'prm-nxt-sales',
    name: 'PRM NXT Sales',
    company: 'Infinite Computer Solutions',
    duration: 'March 2024 – Present',
    role: 'Frontend Lead',
    teamSize: '20+',
    technologies: ['React Native', 'Node.js', 'TypeScript', 'GraphQL', 'Storybook'],
    description:
      'PRMNXT is a comprehensive revamp of existing applications (MSales, MService, PRM Sales and PRM Service), loosening tight coupling with Siebel for better flexibility and scalability.',
    features: [
      'Customer information management and recharge functionality',
      'My offer, customer service, and recharge reversal modules',
      'Custom roles and responsibility assignment system',
      'Token-based redirection approach for seamless user migration',
      'Maximum flexibility in user authorization levels',
    ],
  },
  {
    id: 'watcho',
    name: 'Watcho OTT Platform',
    company: 'Infinite Computer Solutions',
    duration: 'Sept 2023 – Feb 2024',
    role: 'Developer',
    teamSize: '4+',
    technologies: ['React Native', 'TypeScript'],
    description:
      'Premium OTT platform from Dish TV for streaming video online with hundreds of hours of quality content from leading production houses and publishers.',
    features: [
      'Stream movies online, web series, and entertainment shows',
      'Live TV channels and live news streaming',
      'Parental control settings for child safety',
      'Content filtering by favorite, cultural, music, series, premium, religious',
      'Handpicked short films and curated content',
    ],
    link: 'https://www.watcho.com',
  },
  {
    id: 'nagra-pay-tv',
    name: 'Nagra Pay-TV (ION)',
    company: 'Infinite Computer Solutions',
    duration: 'Oct 2022 – Aug 2023',
    role: 'Developer',
    teamSize: '10+',
    technologies: ['React Native', 'React Native Web', 'TypeScript'],
    description:
      "ION showcases content on Nagra's Open TV Video Platform, allowing users to view both linear and VOD content with modern video distribution functionality.",
    features: [
      'Live, catch-up, and recorded content playback',
      'Custom media player with multi-language support',
      'Parental control settings',
      'Modern video distribution features',
      'Cross-platform support (mobile and web)',
    ],
  },

  // DAZ BPO Projects
  {
    id: 'zarlour',
    name: 'Zarlour',
    company: 'DAZ BPO',
    duration: 'Mar 2022 – Oct 2022',
    role: 'Web and Mobile Developer',
    teamSize: '2',
    technologies: ['React Native', 'Nuxt.js', 'Vue.js', 'JavaScript', 'MySQL',  'Node.js'],
    description:
      'Web and mobile application providing facility for salon owners to list their salons and customers to find and book nearby salons.',
    features: [
      'Location-based salon discovery (GPS and search)',
      'Online appointment booking system',
      'Salon profile with services, amenities, and pictures',
      'Advanced filtering by rating, distance, and services',
      'Customer reviews and rating system',
    ],
  },
  {
    id: 'ngagge-mobile',
    name: 'NGAGGE Mobile App',
    company: 'DAZ BPO',
    duration: 'Dec 2021 – Oct 2022',
    role: 'Full Stack Developer',
    teamSize: '1',
    technologies: ['React Native', 'JavaScript', 'MySQL', 'Node.js'],
    description:
      'Mobile application for managing live chat and messaging for subscribers and teammates with real-time communication features.',
    features: [
      'Live chat and instant messaging',
      'Call conferencing for sales team connection',
      'Appointment scheduling to retain prospects',
      'Push notifications for offline messages',
      'SMS/Email notification system',
    ],
  },
  {
    id: 'ngagge',
    name: 'NGAGGE',
    company: 'DAZ BPO',
    duration: 'Nov 2019 – Oct 2022',
    role: 'Tech Lead, Developer',
    teamSize: '10+',
    technologies: ['Vue.js', 'Angular 8', 'PHP7', 'JavaScript', 'jQuery', 'MySQL', 'Laravel 5.4'],
    description:
      'Comprehensive web application for managing live chat and messaging with advanced features for lead generation and customer engagement.',
    features: [
      'Instant lead transmission via email and text',
      'Proactive chat buttons with pop-ups and animations',
      'Custom chat features tailored to brand',
      'Cloud-based service with no downloads',
      'CRM and Google Analytics integration',
      'Shopify integration (Klaviyo, Recharge)',
      'WhatsApp, Facebook Messenger, Instagram DM modules',
      'Success-based pricing with no contracts',
      'Subscriber portal for reports and analytics',
    ],
  },

  // Knowledgeops Software Solution Projects
  {
    id: 'loankraft',
    name: 'LoanKraft',
    company: 'Knowledgeops Software Solutions',
    duration: 'Jan 2019 – Aug 2019',
    role: 'Team Lead, Developer',
    teamSize: '4',
    technologies: ['React.js', 'JavaScript', 'PHP7', 'MongoDB', 'AWS', 'Node.js'],
    description:
      'Web application for providing personal loans and loans against properties with multi-role system and comprehensive loan management.',
    features: [
      'Multiple user roles (Super Admin, Admin, Manager, CCT, CST, Distributor)',
      'Loan category, lender, and product management',
      'Lead verification and applicant conversion',
      'Document collection and validation workflow',
      'Dynamic forms and advanced filtering',
      'MIS reporting and mass mailing',
      'Customer loan search with matching criteria',
    ],
  },
  {
    id: 'u-review',
    name: 'U-Review Application',
    company: 'Knowledgeops Software Solutions',
    duration: 'Oct 2018 – Dec 2018',
    role: 'Team Lead, Developer',
    teamSize: '3',
    technologies: ['Angular 6', 'JavaScript', 'PHP7.2', 'MongoDB', 'AWS', 'Laravel'],
    description:
      'Web application for collecting customer reviews from dealership purchases with social media integration.',
    features: [
      'Customer review collection system',
      'Social media sharing integration',
      'Smartphone app for easy review submission',
      'Dealership registration and management',
      'Business admin, manager, and staff roles',
      'Review publishing on portal and dealership sites',
      'Permission-based access control',
    ],
  },
  {
    id: 'ca-jobs-portal',
    name: 'CA Jobs Portal (ICAI)',
    company: 'Knowledgeops Software Solutions',
    duration: 'Jul 2018 – Sept 2018',
    role: 'Team Lead, Developer',
    teamSize: '2',
    technologies: ['Angular 6', 'JavaScript', 'PHP7', 'MySQL 5', 'AWS', 'Laravel'],
    description:
      'Digital job portal for hiring Qualified Chartered Accountants (QCAS) and experienced CAs, connecting ICAI members with companies.',
    features: [
      'ICAI member profile management',
      'Company registration and candidate shortlisting',
      'Job posting and search functionality',
      'Advanced candidate filtering',
      'MIS reporting and analytics',
      'Mass mailing facility',
      'CMS for admin job management',
    ],
  },
  {
    id: 'placement-portal',
    name: 'Placement Portal (ICAI)',
    company: 'Knowledgeops Software Solutions',
    duration: 'Feb 2018 – June 2018',
    role: 'Developer',
    teamSize: '4',
    technologies: ['Angular 5', 'JavaScript', 'PHP7', 'MySQL 5', 'AWS', 'Laravel'],
    description:
      'Web application for hiring Newly Qualified Chartered Accountants (NQCAS) with four different interfaces for conducting placement drives.',
    features: [
      'ICAI-BOS authorized member registration',
      'Profile visibility to participating companies',
      'Company registration and candidate shortlisting',
      'Session-wise placement drive configuration',
      'Candidate search and filtering',
      'MIS reporting system',
      'Mass mailing functionality',
    ],
  },
  {
    id: 'articleship-portal',
    name: 'Articleship/Industrial Training Portal (ICAI)',
    company: 'Knowledgeops Software Solutions',
    duration: 'Dec 2017 – Jan 2018',
    role: 'Developer',
    teamSize: '4',
    technologies: ['Angular 4', 'JavaScript', 'PHP7', 'MySQL 5', 'AWS', 'Laravel'],
    description:
      'Online portal connecting firms/companies with students for articleship and industrial training opportunities.',
    features: [
      'Three-tier interface (Admin, Firm/Company, Student)',
      'Requirement posting and student search',
      'Interview scheduling system',
      'Workflow-based selection process',
      'Advanced search criteria',
      'MIS report download for stakeholders',
      'Application and approval management',
    ],
  },
  {
    id: 'duckbucks',
    name: 'DuckBucks - Purchase Card Application',
    company: 'Knowledgeops Software Solutions',
    duration: 'Aug 2017 – Nov 2017',
    role: 'Developer',
    teamSize: '2',
    technologies: ['Angular 2', 'JavaScript', 'PHP5', 'MySQL 5', 'AWS', 'Laravel'],
    description:
      'Online portal for managing vendors and customers, providing a platform to issue purchase cards for buying items from registered vendors.',
    features: [
      'Three-role system (Admin, Vendor, Customer)',
      'Card assignment and distribution',
      'Load and deduct money from cards',
      'PDF card download functionality',
      'Monthly invoice generation via cron job',
      'Payment gateway integration',
      'Graphical metrics with charts',
    ],
  },
  {
    id: 'icai-bookstore',
    name: 'Online Book Store (ICAI)',
    company: 'Knowledgeops Software Solutions',
    duration: 'Mar 2017 – Jul 2017',
    role: 'Front End Developer',
    teamSize: '4',
    technologies: ['Angular 2', 'JavaScript', 'MySQL 5', 'AWS', 'Java'],
    description:
      'E-commerce portal for selling course books to ICAI students in Foundation, Intermediate, and Final courses.',
    features: [
      'E-commerce functionality with coupons',
      'Student registration status-based checkout',
      'Automated daily data import from CITRIX server',
      'Third-party courier service integration',
      'Order tracking with daily updates',
      'Daily MIS reports via email',
      'Inventory management system',
      'Extensive search functionality',
    ],
  },
  {
    id: 'philips-phs',
    name: 'Philips Personal Health System',
    company: 'Knowledgeops Software Solutions',
    duration: 'Dec 2016 – Feb 2017',
    role: 'Front End Developer & Partially Backend',
    teamSize: '4',
    technologies: ['AngularJS', 'JavaScript', 'SQL Server 2008', '.NET MVC', 'C#', 'Visual Studio 2015'],
    description:
      'Application for calculating and managing incentives for Philips employees with advanced reporting and visualization.',
    features: [
      'Incentive calculation automation',
      'Target and achievement visualization (High Charts)',
      'Excel reporting with OpenXML and ClosedXML',
      'Role-based upload and download functionality',
      'Automated incentive policy management',
      'Excel to SQL Server data import',
      'Role movement support across regions',
      'Admin screen automation',
    ],
  },
];

// Group projects by company
export const PROJECT_GROUPS = [
  {
    company: 'Infinite Computer Solutions',
    period: 'Oct 2022 – Present',
    role: 'Senior Software Engineer',
    projects: PROJECTS.filter((p) => p.company === 'Infinite Computer Solutions'),
  },
  {
    company: 'DAZ BPO',
    period: 'Sept 2019 – Oct 2022',
    role: 'Web Developer',
    projects: PROJECTS.filter((p) => p.company === 'DAZ BPO'),
  },
  {
    company: 'Knowledgeops Software Solutions',
    period: 'Dec 2016 – Aug 2019',
    role: 'Web Developer',
    projects: PROJECTS.filter((p) => p.company === 'Knowledgeops Software Solutions'),
  },
];
