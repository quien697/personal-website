'use client';
import React from 'react';
import Image from 'next/image';
import Section from '@/components/Common/Section';
import SkillButton from '@/components/Common/SkillButton/skillButton';
import DetailList from './detailList';
import { useResumeData } from '@/hooks/useResumeData';
import { useUIData } from '@/hooks/useUIData';

export default function PortfolioSection() {
  const { portfolios } = useResumeData()
  const { navItems, constants } = useUIData()

  return (
    <Section id={navItems.portfolio.value} isPrimary={true} title={navItems.portfolio.title}>
      <div className="flex flex-col space-y-28">
        {portfolios.map((item, idx) => {
          return (
            <div key={idx}>
              <div className="flex flex-col lg:flex-row lg:space-x-12">
                <div className="relative lg:w-1/2">
                  <Image src={item.image} alt={item.name} width={1000} height={1000} className="rounded-lg shadow-lg shadow-neutral-900" />
                </div>
                <div className="flex flex-col gap-4 mt-8 lg:w-1/2 lg:mt-0">
                  <h1 className="mb-2">
                    <span className="text-4xl font-bold">{item.name}</span>
                    <span className="ml-4 text-neutral-400 text-sm">{item.status}</span>
                  </h1>
                  <p className="text-xl leading-7">{item.description}</p>
                  <ul>
                    <DetailList title={constants.technologies} isLink={false}>
                      {item.technologies.map((item, idx) => {
                        return <SkillButton key={idx} name={item} className="text-xs px-2 py-1 my-1" />
                      })}
                    </DetailList>
                    <DetailList title="Github" isLink={true} href={item.github} />
                    <DetailList title={constants.website} isLink={true} href={item.link} />
                  </ul>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Section>
  )
};