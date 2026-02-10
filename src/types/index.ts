// Personal Information
export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  tagline: string;
  resumeUrl: string;
  image?: string;
}

// Social Links
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

// Skills/Expertise
export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Tools" | "Design";
  icon?: string;
  proficiency?: number;
}

export interface ExpertiseArea {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

// Experience
export interface Experience {
  id: string;
  company: string;
  companyUrl?: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
  current?: boolean;
}

// Contact Information
export interface ContactInfo {
  email: string;
  location: string;
  social: SocialLinks;
  availability?: string;
}
