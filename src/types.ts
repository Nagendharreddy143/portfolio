export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
  github?: string;
  technologies?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  subItems: string[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  period: string;
  project?: string;
  link?: string;
  logo?: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum SectionId {
  HERO = 'hero',
  INTRO = 'intro',
  EXPERIENCE = 'experience',
  SERVICES = 'services',
  PROJECTS = 'projects',
  ABOUT = 'about',
  CONTACT = 'contact',
}