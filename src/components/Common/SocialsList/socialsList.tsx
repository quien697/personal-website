import React from 'react';
import IconLink from '@/components/Common/IconLink';
import type { Social } from '@/types/resume';
import { ICON_SIZE_SM } from '@/constants/';

interface SocialsListProps {
  data: Social[];
  ulClassName?: string;
  liClassName?: string;
}

const SocialsList: React.FC<SocialsListProps> = ({ data, ulClassName, liClassName }) => {
  return (
    <ul className={ulClassName}>
      {data.map(({ url, Icon }, idx) => {
        return (
          <li key={idx} className={liClassName}>
            <IconLink href={url}>
              <Icon size={ICON_SIZE_SM} className="hover:text-primary" />
            </IconLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialsList;