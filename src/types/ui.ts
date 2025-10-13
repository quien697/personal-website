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

export interface Constant {
    knowMe: string;
    mySkills: string;
  }