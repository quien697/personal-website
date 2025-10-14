import { useTranslation } from 'react-i18next';
import type { NavItems, Theme, Language, Constant } from '@/types/ui';

/*
 *  Custom hook for accessing and managing ui data.
*/
export const useUIData = () => {
  const { t } = useTranslation('ui');
  const navItems = t('navItems', { returnObjects: true }) as NavItems;
  const themes = t('themes', { returnObjects: true }) as Theme[];
  const constants = t('constants', { returnObjects: true }) as Constant;

  const languages: Language[] = [
    { name: 'English', value: 'en', },
    { name: '繁體中文', value: 'zh_tw', },
  ]

  return {
    navItems,
    themes,
    languages,
    constants
  };
};