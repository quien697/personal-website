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
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {skills.map((group, idx) => (
          <div key={idx} className="bg-neutral-800 rounded-xl p-6">
            <h2 className="text-white text-xl font-bold mb-4">{group.category}</h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item, i) => (
                <SkillButton key={i} name={item} className="px-4 py-2" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
