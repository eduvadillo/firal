import React from 'react';

interface DashboardIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

const DashboardIcon: React.FC<DashboardIconProps> = ({
  fill = '#6A28FC',
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3 13H11V3H3V13ZM3 21H11V15H3V21ZM13 21H21V11H13V21ZM13 3V9H21V3H13Z" fill={fill} />
    </svg>
  );
};

export default DashboardIcon;
