import React from 'react';
import Heading from './heading';

interface SectionProps {
  id: string;
  isPrimary: boolean;
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, isPrimary, title, className, children }) => {
  const gbColor = isPrimary ? 'bg-white dark:bg-gary-primary' : 'bg-gray-light dark:bg-gray-secondary';

  return (
    <section id={id} className={`flex flex-col items-center ${gbColor}`}>
      <div className={`max-w-screen-2xl px-6 py-16 lg:px-10 md:px-8 ${className}`}>
        {title && <Heading title={title} />}
        {children}
      </div>
    </section>
  )
}

export default Section;