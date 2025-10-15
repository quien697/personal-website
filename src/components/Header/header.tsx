'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import NavList from './navList';
import SettingList from './settingList';
import SocialsList from '@/components/Common/SocialsList';
import i18n from '@/i18n/i18n';
import { useResumeData } from '@/hooks/useResumeData';
import { useUIData } from '@/hooks/useUIData';
import { ICON_SIZE_MENU, SOCIALS } from '@/constants';

const Header = () => {
  const { personalInfo } = useResumeData();
  const { themes } = useUIData();
  const [ isNavbar, setNavbar ] = useState(false);
  const { theme, systemTheme, setTheme } = useTheme();
  const curTheme = theme === themes[0].value ? systemTheme : theme
  const navStyles: string = `
    flex
    top-0
    left-0
    w-full
    h-auto
    bg-neutral-950
    border-r-1
    shadow
    z-10
    py-2
    px-0
    overflow-visible
    lg:fixed
    lg:jsutify-start
    lg:w-64
    lg:h-full
    lg:overflow-hidden
  `;

  return (
    <header className="sticky top-0 z-40">
      <nav className={navStyles}>
        <div className="flex items-center justify-between relative flex-row h-full w-full text-white px-3 lg:flex-col lg:pt-3 lg:pb-2">
          {/* Headshot & Name */}
          <div className="lg:mt-4">
            <span className="hidden bg-neutral-700 rounded-full p-2 lg:inline-block lg:mb-1">
              <Image
                src="/assets/headshot.JPG"
                width={150}
                height={150}
                priority
                alt={personalInfo.name}
                className="block w-full h-auto rounded-full"
              />
            </span>
            <h1 className="text-center text-xl mb-0 lg:block lg:text-2xl">{personalInfo.name}</h1>
          </div>
          {/* Nav List (Desk) */}
          <NavList className="hidden text-xl text-center my-auto lg:flex" />
          {/* Social List */}
          <SocialsList
            data={SOCIALS}
            ulClassName="grow justify-end flex list-none lg:flex lg:grow-0 lg:justify-center"
            liClassName="mx-2 my-2"
          />
          {/* Setting List (Desk) */}
          <SettingList
            theme={theme || themes[0].value}
            curTheme={curTheme || themes[0].value}
            language={i18n.language}
            className="hidden list-none border-t-2 bg-neutral-950 lg:flex"
            onThemeChange={(selectedTheme) => setTheme(selectedTheme)}
            onLanguageChange={(selectedTheme) => i18n.changeLanguage(selectedTheme)}
          />
          {/* Toggle Button */}
          <button className="p-2 lg:hidden" onClick={() => setNavbar(!isNavbar)}>
            {isNavbar ? <IoMdClose size={ICON_SIZE_MENU} color="white" /> : <IoMdMenu size={ICON_SIZE_MENU} color="white" />}
          </button>
          {/* Nav List & Setting List (Mobile) */}
          <div className={`min-w-fit h-auto bg-neutral-950 ${isNavbar ? "absolute top-[130%] right-2 rounded-md mt-0 px-4 z-50 shadow" : "hidden"}`}>
            <NavList className="text-right" onClick={() => setNavbar(!isNavbar)} />
            <SettingList
              theme={theme || themes[0].value}
              curTheme={curTheme || themes[0].value}
              language={i18n.language}
              className="flex border-t-2 bg-neutral-950 py-2 lg:hidden"
              onThemeChange={(selectedTheme) => setTheme(selectedTheme)}
              onLanguageChange={(selectedLanguage) => i18n.changeLanguage(selectedLanguage)}
            />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header