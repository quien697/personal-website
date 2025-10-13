import React from 'react';

interface SkillButtonProps {
  name: string;
  className?: string;
}

const SkillButton: React.FC<SkillButtonProps> = ({ name, className }) => {
  return (
    <p className={`font-semibold bg-primary text-white rounded ${className}`}>{name}</p>
  )
}

export default SkillButton;