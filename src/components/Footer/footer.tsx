'use client';
import React from 'react';
import type { Contact } from '@/types/resume';
import SocialsList from '@/components/Common/SocialsList';
import { useResumeData } from '@/hooks/useResumeData';
import { useUIData } from '@/hooks/useUIData';
import { HiEnvelope, HiMapPin } from 'react-icons/hi2';
import { AiFillPhone } from 'react-icons/ai';
import { EMAIL, PHONE, ICON_SIZE_SM, SOCIALS, COPYRIGHT } from '@/constants';

const Header = () => {
  const { personalInfo } = useResumeData();
  const { constants } = useUIData();
  const contact: Contact[] = [
    {
      label: `${personalInfo.location.city}${personalInfo.location.province ? `, ${personalInfo.location.province}` : ''}, ${personalInfo.location.country}`,
      Icon: HiMapPin
    },{
      label: EMAIL,
      Icon: HiEnvelope
    },{
      label: PHONE,
      Icon: AiFillPhone
    }
  ]

  return (
    <footer className="bg-white dark:bg-neutral-800">
      <div className="flex flex-col items-center px-10 py-16 lg:px-24">
        {contact.map(({ label, Icon }, idx) => {
          return (
            <p key={idx} className="flex flex-row mb-4">
              <Icon size={ICON_SIZE_SM} className="text-primary" />
              <span className="w-full pl-2 lg:text-lg md:text-md">{label}</span>
            </p>
          )
        })}
        <h3 className="text-xl text-bold mb-4 mt-2 lg:text-3xl md:text-2xl">{constants.followMe}</h3>
        <SocialsList data={SOCIALS} ulClassName="flex space-x-4" />
        <h2 className="pt-8" dangerouslySetInnerHTML={{ __html: COPYRIGHT }} />
      </div>
    </footer>
  )
}

export default Header