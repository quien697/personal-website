import React from 'react';

interface SectionProps {
  id: string;
  isPrimary: boolean;
  className?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, isPrimary = true, className, children }) => {
  let backgroundColor = isPrimary ? 'bg-white dark:bg-gary-primary' : 'bg-gray-light dark:bg-gray-secondary';

  return (
    <section id={id} className={`flex flex-col items-center ${backgroundColor}`}>
      <div className={`max-w-screen-2xl px-6 py-16 lg:px-10 md:px-8 ${className}`}>
        {children}
      </div>
    </section>
  )
}

export default Section;