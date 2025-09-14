export interface Industry {
  id: number;
  title: string;
  image: string;
  content: string;
}

export interface DynamicPageTitleProps {
  pageTitle: string;
  pageContent: string;
  pageURL: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface JobListing {
  id: string;
  title: string;
  location: string;
  status: string;
  jobResponsibilities: string[];
  educationalRequirements: string[];
  experienceRequirements: string[];
  additionalRequirements: string[];
  jobPreferences: string[];
  benefits: string[];
  applyBefore: string; // ISO Date string
  createdAt: string;
  updatedAt: string;
}

export interface Employee {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  facebook?: string;
  email: string;
  phone: string;
  address: string;
  joinDate: string;
  status: string;
  createdAt: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  subCategory: string;
  icon: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  createdAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  author: string;
  category: string;
  publicationDate: string;
  imageUrl: string;
  readMoreLink: string;
  authorAvatar: string;
  createdAt: string;
  updatedAt: string;
}
