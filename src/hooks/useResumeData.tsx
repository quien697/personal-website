import { ReactElement } from 'react';
import type { PersonalInfo, Experience, Portfolio, Contact } from '@/types/resume';
import { useTranslation } from 'react-i18next';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { AiFillPhone } from 'react-icons/ai';

export const useResumeData = () => {
  const { t } = useTranslation('resume');
  const personalInfo = t('personalInfo', { returnObjects: true }) as PersonalInfo;
  const aboutMe = t('aboutMe', { returnObjects: true }) as string[];
  const experiences = t('experiences', { returnObjects: true }) as Experience[];
  const skills = t('skills', { returnObjects: true }) as string[];
  const portfolios = t('portfolios', { returnObjects: true }) as Portfolio[];
  const iconSize = 26;

  const contact: Contact[] = [
    {
      name: `${personalInfo.location.city}${personalInfo.location.province ? `, ${personalInfo.location.province}` : ''}, ${personalInfo.location.country}`,
      icon: <HiMapPin size={iconSize} className="text-primary" />,
    },{
      name: personalInfo.email,
      icon: <HiEnvelope size={iconSize} className="text-primary" />,
    },{
      name: personalInfo.phone,
      icon: <AiFillPhone size={iconSize} className="text-primary" />,
    }
  ]

  const socialIconMap: Record<string, ReactElement> = {
    LinkedIn: <FaLinkedin size={iconSize} className="hover:text-primary" />,
    GitHub: <FaGithub size={iconSize} className="hover:text-primary" />,
    Instagram: <FaInstagram size={iconSize} className="hover:text-primary" />,
  };
  const socials = (personalInfo.socials).map((item) => ({
    ...item,
    icon: socialIconMap[item.name] || null,
  }));

  const copyright = `Copyright © 2025 <strong class='text-primary'>Tsung-Hsun Liu</strong> All Rights Reserved.`

  return {
    personalInfo,
    aboutMe,
    skills,
    experiences,
    portfolios,
    contact,
    socials,
    copyright
  };
};
