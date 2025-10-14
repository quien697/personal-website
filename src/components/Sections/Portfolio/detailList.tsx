import React from 'react';
import IconLink from '@/components/Common/IconLink';
import { HiExternalLink } from 'react-icons/hi';
import { useUIData } from '@/hooks/useUIData';

interface DetailListProps {
  title: string;
  isLink: boolean;
  href?: string;
  children?: React.ReactNode;
}

const DetailList: React.FC<DetailListProps>  = ({ title, isLink, href, children }) => {
  const { constants } = useUIData();
  const style: string = "flex flex-wrap space-x-2 py-2";

  if (typeof(href) == "undefined" && isLink) { return }

  if (isLink) {
    return (
      <li className={style}>
        <span>{`${title}: `}</span>
        <IconLink href={href || "#"}>
          <span className="flex font-bold text-primary underline underline-offset-2 hover:text-blue-800">
            {constants.link}<HiExternalLink size={22} />
          </span>
        </IconLink>
      </li>
    )
  } else {
    return (
      <li className={style}>
        <span className="my-1">{`${title}: `}</span>
        {children}
      </li>
    )
  }
}

export default DetailList;