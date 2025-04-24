const HeartIcon = ({
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
    fill={filled ? '#dc3545' : 'none'}
    stroke={filled ? 'none' : 'currentColor'}
    /*  strokeWidth={1.5} */
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
    />
  </svg>
);

export default HeartIcon;
