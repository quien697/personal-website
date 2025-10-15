import React from 'react';
import Select from './select';
import { MdLanguage } from 'react-icons/md'
import { RiSunLine, RiMoonFill } from 'react-icons/ri';
import { useUIData } from '@/hooks/useUIData';
import { ICON_SIZE_SM, LANGUAGES } from '@/constants';

interface SettingListProps {
  theme: string;
  curTheme: string;
  language: string;
  className: string;
  onThemeChange: (value: string) => void;
  onLanguageChange: (value: string) => void;
}

const SettingList: React.FC<SettingListProps> = ({
  theme, curTheme, language, className, onThemeChange, onLanguageChange
}) => {
  const { themes } = useUIData();

  return (
    <ul className={` ${className}`}>
      <Select name="theme" value={theme} options={themes} onChange={onThemeChange}>
        {curTheme === themes[1].value ? <RiSunLine size={ICON_SIZE_SM} /> : <RiMoonFill size={ICON_SIZE_SM} />}
      </Select>
      <Select name="language" value={language} options={LANGUAGES} onChange={onLanguageChange}>
        <MdLanguage size={ICON_SIZE_SM} />
      </Select>
    </ul>
  )
}

export default SettingList;