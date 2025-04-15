import React from 'react';

interface StorefrontIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

const StorefrontIcon: React.FC<StorefrontIconProps> = ({
  fill = '#686868',
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
      <path
        d="M20 4H4V6H20V4ZM21 14V12L20 7H4L3 12V14H4V20H14V14H18V20H20V14H21ZM12 18H6V14H12V18Z"
        fill={fill}
      />
    </svg>
  );
};

export default StorefrontIcon;
