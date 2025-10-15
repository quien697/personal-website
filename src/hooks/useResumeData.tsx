import type { PersonalInfo, Experience, Portfolio } from '@/types/resume';
import { useTranslation } from 'react-i18next';

/*
 *  Custom hook for accessing and managing resume data.
*/
export const useResumeData = () => {
  const { t } = useTranslation('resume');
  const personalInfo = t('personalInfo', { returnObjects: true }) as PersonalInfo;
  const aboutMe = t('aboutMe', { returnObjects: true }) as string[];
  const experiences = t('experiences', { returnObjects: true }) as Experience[];
  const skills = t('skills', { returnObjects: true }) as string[];
  const portfolios = t('portfolios', { returnObjects: true }) as Portfolio[];

  return {
    personalInfo,
    aboutMe,
    skills,
    experiences,
    portfolios
  };
};
