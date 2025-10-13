import { useTranslation } from 'react-i18next';
import type { NavItems, Theme, Constant } from '@/types/ui';

export const useUIData = () => {
  const { t } = useTranslation('ui');
  const navItems = t('navItems', { returnObjects: true }) as NavItems;
  const themes = t('themes', { returnObjects: true }) as Theme[];
  const constants = t('constants', { returnObjects: true }) as Constant;

  return {
    navItems,
    themes,
    constants
  };
};