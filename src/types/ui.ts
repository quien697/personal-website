export interface NavItem {
  name: string
  value: string
  title: string
}

export type NavItems = Record<string, NavItem>;

export interface Theme {
  name: string
  value: string
}

export interface Language {
  name: string
  value: string
}

export interface Constant {
  knowMe: string;
  mySkills: string;
  technologies: string;
  website: string;
  getInTouch: string;
  name: string;
  email: string;
  message: string;
  sendMessage: string;
  followMe: string;
  link: string;
}