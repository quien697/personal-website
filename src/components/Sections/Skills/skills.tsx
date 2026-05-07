'use client';
import React from 'react';
import Section from '@/components/Common/Section';
import SkillButton from '@/components/Common/SkillButton/skillButton';
import { useResumeData } from '@/hooks/useResumeData';
import { useUIData } from '@/hooks/useUIData';

export default function SkillsSection() {
  const { skills } = useResumeData();
  const { navItems } = useUIData();

  return (
    <Section id={navItems.skills.value} isPrimary={false} title={navItems.skills.title}>
      <div className="flex flex-wrap justify-center">
        {skills.map((item, idx) => (
          <SkillButton key={idx} name={item} className="px-4 py-2 mr-2 mt-2" />
        ))}
      </div>
    </Section>
  )
}
