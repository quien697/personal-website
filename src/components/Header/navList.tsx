import React from 'react';
import { Link } from 'react-scroll';
import { useUIData } from '@/hooks/useUIData';

interface SettingListProps {
  className: string;
  onClick?: () => void;
}

const NavList: React.FC<SettingListProps> = ({ className, onClick }) => {
  const { navItems } = useUIData();

  return (
    <ul className={`flex-col py-4 ${className}`}>
      {Object.values(navItems).map((item, idx) => (
        <li key={idx} className="py-2 w-full lg:py-3">
          <Link
            to={item.value}
            activeClass="text-primary font-bold"
            spy
            smooth
            duration={500}
            className="cursor-pointer hover:text-primary hover:font-bold"
            onClick={onClick}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavList;