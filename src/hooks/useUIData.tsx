import { useTranslation } from 'react-i18next';
import type { NavItem, Theme } from '@/types/UI';

export const useUIData = () => {
  const { t } = useTranslation('ui');
  const navItems = t('navItems', { returnObjects: true }) as NavItem[];
  const themes = t('themes', { returnObjects: true }) as Theme[];

  return {
    navItems,
    themes
  };
};