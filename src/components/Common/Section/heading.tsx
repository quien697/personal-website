import React from 'react';

interface HeadingProps {
  title: string;
}

const Heading: React.FC<HeadingProps> = ({ title }) => {
  const titleStyles: string = `
    w-full
    text-5xl
    text-neutral-700
    dark:text-neutral-300
    font-semibold opacity-10
    uppercase mb-0 xl:text-9xl
    lg:text-8xl
    md:text-6xl
  `;
  const titleOverlayStyles: string = `
    absolute
    w-full
    self-center
    leading-none
    font-semibold
    mb-0
    text-3xl
    xl:text-6xl
    lg:text-5xl
    md:text-4xl
  `;

  return (
    <div className="relative flex text-center mb-12">
    <h2 className={titleStyles}>{title}</h2>
    <p className={titleOverlayStyles}>
        {title}
        <span className="block w-20 border-b-3 lg:border-b-4 border-primary mx-auto" />
    </p>
    </div>
  )
}

export default Heading;