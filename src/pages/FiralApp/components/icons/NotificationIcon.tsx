import React from 'react';

interface NotificationIconProps {
  fill?: string;
  width?: number;
  height?: number;
}

const NotificationIcon: React.FC<NotificationIconProps> = ({
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
        d="M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM12 6C14.76 6 17 8.24 17 11V17H7V11C7 8.24 9.24 6 12 6ZM12 4C8.03 4 5 7.03 5 11V19H19V11C19 7.03 15.97 4 12 4ZM12 2C13.39 2 14.78 2.35 16.06 3.05C17.33 3.74 18.48 4.76 19.34 6.03C20.21 7.29 20.78 8.77 21 10.33C21.22 11.89 21.07 13.49 20.58 15C20.09 16.51 19.27 17.9 18.2 19.03C17.13 20.17 15.82 21.01 14.39 21.51C12.96 22 11.46 22.12 10 21.86C8.54 21.6 7.15 20.97 5.95 20.04C4.76 19.11 3.78 17.9 3.11 16.5C2.44 15.1 2.09 13.54 2.1 11.96C2.11 10.38 2.47 8.82 3.15 7.43C3.83 6.04 4.82 4.83 6.02 3.92C7.22 3 8.61 2.39 10.07 2.14C10.71 2.05 11.35 2 12 2Z"
        fill={fill}
      />
    </svg>
  );
};

export default NotificationIcon;
