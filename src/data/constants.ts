import { ContactInfo, Stat } from '@/types';

export const CONTACT_INFO: ContactInfo = {
  email: 'sonu.baghel06@gmail.com',
  phone: '+91 87700 53678',
  location: 'Gurgaon, India',
  github: 'https://github.com/sonukops',
  linkedin: 'https://www.linkedin.com/in/sonu-baghel-668867125',
};

export const HERO_STATS: Stat[] = [
  { number: '9+', label: 'Years Experience' },
  { number: '150K+', label: 'Users Impacted' },
  { number: '60%', label: 'Performance Gains' },
  { number: '3x', label: 'Faster Delivery' },
];

export const PROFESSIONAL_SUMMARY = `Full-stack engineer with 8+ years of experience building production systems 
across web and mobile platforms. I specialize in identifying performance bottlenecks, 
redesigning critical systems under load, and establishing engineering practices that 
prevent future problems.`;

export const ABOUT_PARAGRAPHS = [
  `Full-stack engineer with <strong>8+ years</strong> of experience building production systems 
  across web and mobile platforms. I specialize in identifying performance bottlenecks, 
  redesigning critical systems under load, and establishing engineering practices that 
  prevent future problems.`,
  
  `My track record includes reducing deployment cycles from hours to minutes, cutting 
  database query times in half, and mentoring teams to deliver faster with fewer bugs.`,
  
  `Currently seeking <strong>Technical Lead</strong> or <strong>Senior Engineer</strong> roles 
  where system design and team influence matter.`,
];

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sonu-baghel-668867125',
    icon: 'linkedin',
    color: 'from-blue-600 to-blue-700',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/sonukops',
    icon: 'github',
    color: 'from-slate-700 to-slate-900',
  },
  {
    name: 'Email',
    url: 'mailto:sonu.baghel06@gmail.com',
    icon: 'email',
    color: 'from-red-500 to-pink-600',
  },
];
