import React from 'react';
import './SkillsetTag.css';
import '../../styles/fonts.css';

interface SkillsetTagProps {
  skillset: string;
}

const SkillsetTag: React.FC<SkillsetTagProps> = ({ skillset }) => {
  return (
    <div className="main-container">
      <span className="skillset-content fw-600 fs-14">{skillset}</span>
    </div>
  );
};

export default SkillsetTag;
