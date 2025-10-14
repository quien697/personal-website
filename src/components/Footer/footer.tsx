'use client';
import React from 'react';
import SocialsList from '@/components/Common/SocialsList';
import { useResumeData } from '@/hooks/useResumeData';
import { useUIData } from '@/hooks/useUIData';

const Header = () => {
  const { contact, socials, copyright } = useResumeData();
  const { constants } = useUIData();

  return (
    <footer className="bg-white dark:bg-neutral-800">
      <div className="flex flex-col items-center px-10 py-16 lg:px-24">
        {contact.map((item, idx) => {
          return (
            <p key={idx} className="flex flex-row mb-4">
              {item.icon}
              <span className="w-full pl-2 lg:text-lg md:text-md">{item.name}</span>
            </p>
          )
        })}
        <h3 className="text-xl text-bold mb-4 mt-2 lg:text-3xl md:text-2xl">{constants.followMe}</h3>
        <SocialsList data={socials} ulClassName="flex space-x-4" />
        <h2 className="pt-8" dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    </footer>
  )
}

export default Header