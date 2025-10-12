export interface Location {
  city: string
  province?: string
  country: string
}

export interface SocialLink {
  name: string
  url: string
}

export interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: Location
  social: SocialLink[]
  brief: string[]
}

export interface Experience {
  position: string;
  company: string;
  location: string;
  date: string;
  isCurrentlyWorkHere: boolean;
  detail: string;
}

export interface Portfolio {
  name: string;
  status: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  link?: string;
}
