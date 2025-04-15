import React from 'react';

interface MessageIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

const MessageIcon: React.FC<MessageIconProps> = ({ fill = '#686868', width = 24, height = 24 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 2H4C2.9 2 2.01 2.9 2.01 4L2 22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM20 16H5.17L4 17.17V4H20V16Z"
        fill={fill}
      />
    </svg>
  );
};

export default MessageIcon;
