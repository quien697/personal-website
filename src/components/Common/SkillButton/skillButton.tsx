import React from 'react';

interface SkillButtonProps {
  name: string;
  className?: string;
}

const SkillButton: React.FC<SkillButtonProps> = ({ name, className }) => {
  return (
    <p className={`font-semibold bg-blue-600 text-white rounded ${className}`}>{name}</p>
  )
}

export default SkillButton;