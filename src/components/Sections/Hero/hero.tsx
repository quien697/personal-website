'use client';
import React from 'react';
import Image from 'next/image';
import Section from '@/components//Common/Section';
import { Link } from 'react-scroll';
import { RiArrowDownSLine } from 'react-icons/ri'
import { useResumeData } from '@/hooks/useResumeData';

export default function Hero() {
  const { personalInfo } = useResumeData();

  return (
    <Section id="home" isPrimary={false} className="flex flex-col min-h-fit px-4 py-16 lg:min-h-screen">
      <div className="flex flex-col justify-start items-center space-y-3 my-16 lg:justify-center lg:space-y-6 lg:my-auto">
        <div>
          <Image
            src="/assets/headshot.JPG"
            width={250}
            height={250}
            priority alt={personalInfo.name}
            className="rounded-full shadow-2xl shadow-gary-primary lg:hidden"
          />
        </div>
        <h1 className="font-bold text-3xl xl:text-6xl lg:text-5xl md:text-4xl">{personalInfo.brief[0]}</h1>
        <h2 className="text-xl lg:text-3xl md:text-2xl" dangerouslySetInnerHTML={{ __html: personalInfo.brief[1] }} />
        <p className="text-lg text-center mt-4 mb-6 lg:text-2xl md:text-xl" dangerouslySetInnerHTML={{ __html: personalInfo.brief[2] }} />
      </div>
      <div className="flex justify-center hover:text-primary cursor-pointer">
        <Link to="about" spy smooth duration={500}>
          <RiArrowDownSLine size={35} className="animate-bounce" />
        </Link>
      </div>
    </Section>
  )
}