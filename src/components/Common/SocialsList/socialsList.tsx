import React from 'react';
import IconLink from '@/components/Common/IconLink';
import type { Social } from '@/types/resume';

interface SocialsListProps {
  data: Social[];
  ulClassName?: string;
  liClassName?: string;
}

const SocialsList: React.FC<SocialsListProps> = ({ data, ulClassName, liClassName }) => {
  return (
    <ul className={ulClassName}>
      {data.map((item, idx) => {
        return (
          <li key={idx} className={liClassName}>
            <IconLink href={item.name}>{item.icon}</IconLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialsList;