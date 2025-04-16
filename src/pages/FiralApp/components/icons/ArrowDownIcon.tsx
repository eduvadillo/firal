import React from 'react';

interface ArrowDownIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

const ArrowDownIcon: React.FC<ArrowDownIconProps> = ({
  fill = '#DDDDDC',
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
      <path d="M7 10L12 15L17 10H7Z" fill={fill} />
    </svg>
  );
};

export default ArrowDownIcon;
