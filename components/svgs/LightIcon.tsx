interface LightIconProps {
  className?: string;
}

const LightIcon = ({ className }: LightIconProps) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_229_6309)">
        <path
          d="M9 12.75C11.0711 12.75 12.75 11.0711 12.75 9C12.75 6.92893 11.0711 5.25 9 5.25C6.92893 5.25 5.25 6.92893 5.25 9C5.25 11.0711 6.92893 12.75 9 12.75Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 0.75V2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15.75V17.25" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M3.16602 3.16504L4.23102 4.23004"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7695 13.77L14.8345 14.835"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M0.75 9H2.25" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.75 9H17.25" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M3.16406 14.835L4.22906 13.77"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.7695 4.23004L14.8345 3.16504"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_229_6309">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LightIcon;
