'use client';
import Section from '@/components/Common/Section';
import { useResumeData } from '@/hooks/useResumeData';
import { useUIData } from '@/hooks/useUIData';

export default function AboutSection() {
  const { aboutMe } = useResumeData();
  const { navItems } = useUIData();

  return (
    <Section id={navItems.about.value} title={navItems.about.title} isPrimary={true}>
      <div className="max-w-3xl text-lg space-y-6 lg:text-xl">
        {aboutMe.map((item, idx) => (
          <p key={idx}>{item}</p>
        ))}
      </div>
    </Section>
  )
}
