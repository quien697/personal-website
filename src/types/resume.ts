import { IconType } from "react-icons";

export interface PersonalInfo {
  name: string
  email: string
  phone: string
  location: Location
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

export interface Contact {
  label: string;
  Icon: IconType;
}

export interface Location {
  city: string
  province?: string
  country: string
}

export interface Social {
  name: string;
  url: string;
  Icon: IconType;
}