export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export interface Achievement {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  year?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  github?: string;
  linkedin?: string;
}

export interface Stat {
  number: string;
  label: string;
}
