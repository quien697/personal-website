import React from 'react';
import Link from 'next/link';

interface IconLinkProps {
  href: string;
  children: React.ReactNode;
}

const IconLink: React.FC<IconLinkProps> = ({ href, children }) => {
  if (typeof(href) == 'undefined') { return }

  return (
    <Link href={href} target="_blank">
      {children}
    </Link>
  )
}

export default IconLink;