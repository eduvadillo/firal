import React from 'react';

// Common props interface for icons that might need fill override
interface IconProps {
  fill?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

// Assuming other icons like CalendarIcon, SettingsIcon, NotificationIcon, ArrowDownIcon, StarIcon exist here...

export const CalendarIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8333 3.3335H4.16667C3.24619 3.3335 2.5 4.07969 2.5 5.00016V16.6668C2.5 17.5873 3.24619 18.3335 4.16667 18.3335H15.8333C16.7538 18.3335 17.5 17.5873 17.5 16.6668V5.00016C17.5 4.07969 16.7538 3.3335 15.8333 3.3335Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.3333 1.6665V5.00016"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.66669 1.6665V5.00016"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 8.3335H17.5"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SettingsIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.108 9.51683C17.108 9.3585 17.1329 9.2085 17.1754 9.06683L18.9412 7.64183C19.1495 7.4835 19.2079 7.20016 19.0912 6.97516L17.4245 4.02516C17.3079 3.80016 17.0245 3.7085 16.7829 3.80016L14.6495 4.65016C14.1579 4.2835 13.6162 3.9835 13.0329 3.76683L12.7412 1.4585C12.7079 1.2085 12.4912 1.01683 12.2245 1.01683H8.77453C8.50786 1.01683 8.29953 1.2085 8.25786 1.4585L7.96619 3.76683C7.38286 3.9835 6.84119 4.2835 6.34953 4.65016L4.21619 3.80016C3.97453 3.7085 3.69119 3.80016 3.57453 4.02516L1.90786 6.97516C1.79119 7.20016 1.84953 7.4835 2.05786 7.64183L3.82453 9.06683C3.78286 9.2085 3.75786 9.3585 3.75786 9.51683C3.75786 9.67516 3.78286 9.82516 3.82453 9.96683L2.05786 11.3918C1.84953 11.5502 1.79119 11.8335 1.90786 12.0585L3.57453 15.0085C3.69119 15.2335 3.97453 15.3252 4.21619 15.2335L6.34953 14.3835C6.84119 14.7502 7.38286 15.0502 7.96619 15.2668L8.25786 17.5752C8.29119 17.8252 8.50786 18.0168 8.77453 18.0168H12.2245C12.4912 18.0168 12.7079 17.8252 12.7412 17.5752L13.0329 15.2668C13.6162 15.0502 14.1579 14.7502 14.6495 14.3835L16.7829 15.2335C17.0245 15.3252 17.3079 15.2335 17.4245 15.0085L19.0912 12.0585C19.2079 11.8335 19.1495 11.5502 18.9412 11.3918L17.1754 9.97516C17.1408 9.82977 17.1141 9.6798 17.108 9.51683ZM10.5004 12.6002C8.6587 12.6002 7.16619 11.1077 7.16619 9.266C7.16619 7.42433 8.6587 5.93183 10.5004 5.93183C12.342 5.93183 13.8345 7.42433 13.8345 9.266C13.8345 11.1077 12.342 12.6002 10.5004 12.6002Z"
      fill={fill || '#686868'}
    />
  </svg>
);

export const NotificationIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.1667 14.1668H5.83333C5.16073 14.1668 4.69379 13.5699 4.87863 12.9351L5.83333 10.0002V6.66683C5.83333 4.45666 7.69776 2.66683 10 2.66683C12.3022 2.66683 14.1667 4.45666 14.1667 6.66683V10.0002L15.1214 12.9351C15.3062 13.5699 14.8393 14.1668 14.1667 14.1668Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.0417 16.6668C10.7452 17.3272 10.0532 17.6668 9.41667 17.3252C8.94471 17.0748 8.6502 16.5146 8.79167 16.0002"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowDownIcon = ({ fill, width = 12, height = 12, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 4.25L6 7.75L2.5 4.25"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarIcon = ({
  filled,
  width = 14,
  height = 14,
  className,
}: {
  filled: boolean;
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={filled ? '#FFC107' : '#E0E0E0'}
    viewBox="0 0 16 16"
  >
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  </svg>
);

// --- New Icons ---
export const HeartIcon = ({
  filled,
  width = 18,
  height = 18,
  className,
}: {
  filled: boolean;
  width?: number;
  height?: number;
  className?: string;
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={filled ? '#dc3545' : 'currentColor'}
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
    />
  </svg>
);

export const LocationIcon = ({ fill, width = 12, height = 12, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      fill={fill || '#686868'}
    />
  </svg>
);

// --- Added Missing Icons (Placeholders) ---

// Placeholder - Replace with actual SVG if available
export const StorefrontIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.6667 17.5V10.8333H8.33333V17.5"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 17.5V9.16667L10 4.16667L15 9.16667V17.5"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2.5 12.5L1.66667 11.6667L10 3.33333L18.3333 11.6667L17.5 12.5"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33333 17.5H11.6667"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33333 17.5H16.6667"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Placeholder
export const SearchIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 17.5L13.875 13.875"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Placeholder
export const DashboardIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.33333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V10H8.33333V17.5Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 17.5H11.6667V10H17.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H17.5Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.33333 7.5H4.16667C3.72464 7.5 3.30072 7.32441 2.98816 7.01184C2.67559 6.69928 2.5 6.27536 2.5 5.83333V2.5H8.33333V7.5Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M17.5 7.5H11.6667V2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V7.5Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Placeholder
export const PersonIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6667 17.5V15.8333C16.6667 14.9493 16.3155 14.1014 15.6904 13.4763C15.0653 12.8512 14.2174 12.5 13.3333 12.5H6.66667C5.78261 12.5 4.93474 12.8512 4.30964 13.4763C3.68454 14.1014 3.33333 14.9493 3.33333 15.8333V17.5"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 10 2.5C8.15905 2.5 6.66667 3.99238 6.66667 5.83333C6.66667 7.67428 8.15905 9.16667 10 9.16667Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Placeholder
export const CreditCardIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17.5 5H2.5C2.03978 5 1.60107 5.18437 1.29289 5.49256C0.984708 5.80074 0.8 6.23946 0.8 6.7V13.3C0.8 13.7605 0.984708 14.1993 1.29289 14.5074C1.60107 14.8156 2.03978 15 2.5 15H17.5C17.9602 15 18.3989 14.8156 18.7071 14.5074C19.0153 14.1993 19.2 13.7605 19.2 13.3V6.7C19.2 6.23946 19.0153 5.80074 18.7071 5.49256C18.3989 5.18437 17.9602 5 17.5 5Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M0.833313 8.3335H19.1666"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Placeholder
export const MessageIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16.6667 15.8335H3.33333C2.87311 15.8335 2.4344 15.649 2.12621 15.3408C1.81802 15.0326 1.63333 14.5939 1.63333 14.1335V5.86683C1.63333 5.40645 1.81802 4.96774 2.12621 4.65955C2.4344 4.35136 2.87311 4.16683 3.33333 4.16683H16.6667C17.1269 4.16683 17.5656 4.35136 17.8738 4.65955C18.182 4.96774 18.3667 5.40645 18.3667 5.86683V14.1335C18.3667 14.5939 18.182 15.0326 17.8738 15.3408C17.5656 15.649 17.1269 15.8335 16.6667 15.8335Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.16669 6.6665L10 10.8332L15.8334 6.6665"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Placeholder
export const WeatherIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 14.1667C12.3012 14.1667 14.1667 12.3012 14.1667 10C14.1667 7.69881 12.3012 5.83334 10 5.83334C7.69881 5.83334 5.83334 7.69881 5.83334 10C5.83334 12.3012 7.69881 14.1667 10 14.1667Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 1.6665V3.33317"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 16.6668V18.3335"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.97498 3.9748L5.15831 5.15814"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8417 14.8417L16.025 16.025"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M1.66669 10H3.33335"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.6667 10H18.3334"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.97498 16.025L5.15831 14.8417"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.8417 5.15814L16.025 3.9748"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Placeholder
export const HelpIcon = ({ fill, width = 20, height = 20, className }: IconProps) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 8.33317C7.58744 7.518 8.05461 6.80111 8.75934 6.35405C9.46408 5.90699 10.3279 5.78183 11.1227 6.01183C11.9175 6.24184 12.5653 6.80317 12.8934 7.55484C13.2214 8.30651 13.1938 9.16384 12.8167 9.88317C12.4167 10.6415 11.5833 11.4165 10 12.0832"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 14.1668H10.0083"
      stroke={fill || '#686868'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
