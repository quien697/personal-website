import type { Social } from '@/types/resume';
import type { Language } from '@/types/ui';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const EMAIL: string = 'quien697@gmail.com';
export const PHONE: string = '+886 0988-215-184';

export const LANGUAGES: Language[] = [
  { name: 'English', value: 'en', },
  { name: '繁體中文', value: 'zh_tw', },
]

export const ICON_SIZE_MD: number = 35;
export const ICON_SIZE_SM: number = 23;
export const ICON_SIZE_MENU: number = 30;

export const SOCIALS: Social[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/quien697/",
    Icon: FaLinkedin
  }, {
    name: "GitHub",
    url: "https://github.com/quien697/",
    Icon: FaGithub
  }, {
    name: "Instagram",
    url: "https://www.instagram.com/quien697/",
    Icon: FaInstagram
  }
]

export const COPYRIGHT: string = 'Copyright © 2023-2025 <strong class="text-primary">Tsung-Hsun Liu</strong> All Rights Reserved.';
