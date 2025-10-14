import React from 'react';
import Select from './select';
import { MdLanguage } from 'react-icons/md'
import { RiSunLine, RiMoonFill } from 'react-icons/ri';
import { useUIData } from '@/hooks/useUIData';

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
  const { themes, languages } = useUIData();
  const iconSize = 24;

  return (
    <ul className={` ${className}`}>
      <Select value={theme} options={themes} onChange={onThemeChange}>
        {curTheme === themes[1].value ? <RiSunLine size={iconSize} /> : <RiMoonFill size={iconSize} />}
      </Select>
      <Select value={language} options={languages} onChange={onLanguageChange}>
        <MdLanguage size={iconSize} />
      </Select>
    </ul>
  )
}

export default SettingList;